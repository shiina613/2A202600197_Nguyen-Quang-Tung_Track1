# 01 · Base Flow + Chốt 3 Knobs

> **Mục tiêu**: Hiểu chatbot hoạt động ra sao ở mức base (không chọn config gì) — và xác định 3 knobs nhóm sẽ tweak ở các bước sau.
>
> **Thời gian**: 7 phút (trong 15 phút phần Setup)

---

## Bước 1 — Đọc base flow trong cost reference card

Mở file `cost-reference-card.md` ở phần **2. Base Flow** — xem flow chatbot mặc định. Đây là cấu trúc mọi config sẽ build dựa trên.

Đọc xong, tự kiểm tra hiểu:

- Khi tourist gửi tin nhắn, AI làm gì đầu tiên? → **Phân loại intent (Intent Classification)**
- 5 intent dẫn đến 5 hành động khác nhau — hành động nào tốn LLM, hành động nào không? → Visa/Guide/Weather tốn LLM (RAG + generation). Booking + Complaint = $0 LLM (handoff).
- Sau khi route, AI ráp gì lại để generate response? → System prompt + History + RAG chunks + Web search results (nếu bật) + User message.

---

## Bước 2 — Vẽ lại flow theo cách hiểu của nhóm

```text
┌─────────────────────────────────────────────────────────────────┐
│                    TOURIST GỬI TIN NHẮN                          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  ① INTENT CLASSIFICATION                                        │
│  Keyword/Regex ($0) hoặc LLM Classifier (~170 tokens)           │
│  → Visa | Guide | Weather | Booking | Complaint                 │
└────────┬──────────┬──────────┬──────────┬──────────┬────────────┘
         │          │          │          │          │
    ┌────┘    ┌─────┘    ┌─────┘    ┌─────┘    ┌────┘
    ▼         ▼          ▼          ▼          ▼
 ┌──────┐ ┌──────┐ ┌─────────┐ ┌────────┐ ┌──────────┐
 │ Visa │ │Guide │ │ Weather │ │Booking │ │Complaint │
 │      │ │      │ │         │ │        │ │          │
 │ RAG  │ │ RAG  │ │RAG+Web? │ │HANDOFF │ │ESCALATE  │
 │+Web? │ │ only │ │(real-   │ │→ Sales │ │→ Manager │
 │(pol- │ │      │ │ time)   │ │  $0    │ │   $0     │
 │icy?) │ │      │ │         │ │        │ │          │
 └──┬───┘ └──┬───┘ └────┬────┘ └────────┘ └──────────┘
    │         │          │
    └─────────┼──────────┘
              ▼
┌─────────────────────────────────────────────────────────────────┐
│  ② CONTEXT ASSEMBLY                                             │
│  System prompt (500 tok)                                         │
│  + History (N turns × 260 tok)                                   │
│  + RAG top-5 chunks (1,250 tok)                                  │
│  + Web search results (800 tok — nếu bật)                        │
│  + User message (80 tok)                                         │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│  ③ RESPONSE GENERATION                                          │
│  Model tạo câu trả lời → 180 tokens output                      │
│  (Model tier: Cheap / Mid / Strong / Premium)                    │
└─────────────────────────────────────────────────────────────────┘
```

Flow có đủ 4 bước:
1. ✅ Intent classification — phân loại ý định
2. ✅ Route theo intent — 5 nhánh (RAG / RAG+Web / Handoff / Escalate)
3. ✅ Context assembly — ráp system prompt + history + RAG + web + user msg
4. ✅ Response generation — model tạo câu trả lời

---

## Bước 3 — Xác định 3 Knobs

### Knob 1 — Model tier

**Câu hỏi:** Chất lượng câu trả lời ở mức nào?

Options:

```text
□ Cheap        (Gemini Flash-Lite / DeepSeek V4 Flash / GPT-4o-mini)
□ Mid          (Gemini Flash / Claude Haiku 4.5)
□ Strong       (DeepSeek V4 Pro / Claude Sonnet 4.6)
□ Premium      (Claude Opus 4.7 / GPT-5.5)
☑ Mix          (model khác nhau cho intent khác nhau)
```

**Suy nghĩ của nhóm:**

```text
- Guide chiếm ~50% volume → dùng model rẻ ở đây tiết kiệm nhiều nhất.
- Visa cần chính xác cao (sai = khách bị từ chối nhập cảnh) → cần model mạnh hơn.
- Weather đơn giản (chỉ relay info) → model rẻ đủ.
- Mix model theo intent là hướng đi hợp lý nhất cho Smart config.
- Chênh lệch giá giữa Cheap ($0.15/$0.60) và Strong ($3/$15) là ~20-25× → model choice là knob ảnh hưởng cost lớn nhất.
- Insight: Khi đã routing thông minh (mix model theo intent), đổi model cheap rẻ hơn nữa
  (Flash-Lite $0.10/$0.40 vs GPT-4o-mini $0.15/$0.60) chỉ giảm ~2.4% tổng cost Config 3 —
  vì phần đắt nhất nằm ở intent high-stakes (Visa + web search chiếm ~75% cost),
  không phải ở Guide volume cao. Optimize đúng chỗ đắt mới có impact thật.
```

### Knob 2 — Web search

**Câu hỏi:** Có cần thông tin real-time không?

Options:

```text
□ OFF              (chỉ dùng RAG — knowledge base có sẵn)
☑ ON selective    (bật cho 1–2 intent cần real-time: visa, weather)
□ ON broad         (bật cho hầu hết intent)
```

**Suy nghĩ của nhóm:**

```text
- Visa policy VN đổi thường xuyên (gần đây mở rộng e-visa, miễn visa 45 ngày) → RAG có thể outdated → cần web search.
- Weather là real-time tự nhiên → bắt buộc web search.
- Guide/Destination: KB đã có đủ info về điểm đến, ẩm thực → RAG đủ, không cần web.
- Web search tốn $0.008/call + 800 tokens thêm → bật bừa cho tất cả sẽ tăng cost ~$0.01/turn mà không thêm giá trị cho Guide.
- Kết luận: ON selective cho Visa + Weather là sweet spot.
```

### Knob 3 — History management

**Câu hỏi:** Chatbot cần nhớ bao nhiêu context của conversation?

Options:

```text
□ Last 3 turns        (nhẹ nhất, dễ quên)
☑ Last 5 turns        (cân bằng)
□ Full history        (nhớ tất cả, đắt nhất ở conv dài)
□ Summarize every 5   (nâng cao — cần 1 LLM call phụ để tóm tắt)
```

**Suy nghĩ của nhóm:**

```text
- Scenario A = 4 lượt → Last 3 gần như = Full (chỉ mất turn 1 ở turn 4). Last 5 = Full.
- Scenario B = 7 lượt → Full history ở turn 7 = 6 × 260 = 1,560 tokens. Last 5 = 5 × 260 = 1,300 tokens. Last 3 = 780 tokens.
- Chênh lệch Full vs Last 5 ở turn 7: 260 tokens → không quá lớn.
- Chênh lệch Full vs Last 3 ở turn 7: 780 tokens → đáng kể, nhưng rủi ro quên context.
- Tourist hay nói budget/preference ở đầu conversation → quên = trả lời không phù hợp.
- Last 5 là sweet spot: đủ context cho hầu hết conversation, tiết kiệm hơn Full ở conv dài.
```

---

## Bước 4 — Sơ bộ nhóm muốn thử những combo nào?

**Combo 1 (định hướng cheap)**:

```text
Model: GPT-4o-mini (Cheap) cho tất cả    Web: OFF    History: Last 3    (đặt tên dự kiến: "Backpacker Bot")
```

**Combo 2 (định hướng premium)**:

```text
Model: Claude Sonnet 4.6 (Strong) cho tất cả    Web: ON broad    History: Full    (đặt tên dự kiến: "First-Class Concierge")
```

**Combo 3 (định hướng balanced / smart mix)**:

```text
Model: GPT-4o-mini cho Guide + Weather, Claude Haiku 4.5 cho Visa    Web: ON selective (Visa + Weather)    History: Last 5    (đặt tên dự kiến: "Smart Navigator")
```

**Combo 4** (optional — routing nâng cao):

```text
Model: DeepSeek V4 Flash cho Guide, DeepSeek V4 Pro cho Visa    Web: ON selective (Visa + Weather)    History: Summarize every 5    (đặt tên dự kiến: "DeepSeek Hybrid")
```

---

## Bảng kiểm trước khi sang file tiếp theo

- [x] Đã vẽ flow base có đủ 4 bước (Intent → Route → Context → Response)
- [x] Hiểu Booking + Khiếu nại = $0 LLM cost (chuyển con người)
- [x] Đã phác thảo ≥3 combo khác nhau (chưa cần chi tiết)
- [x] Nhóm đồng thuận về hướng đi mỗi combo

Xong → 10:25 chuyển sang **Main phase**. Mở `02-config-design.md`.
