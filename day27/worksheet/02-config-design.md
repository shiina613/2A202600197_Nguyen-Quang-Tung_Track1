# 02 · Configuration Design — Đặt tên + Chốt knobs cho ≥3 Configs

> **Mục tiêu**: Biến phác thảo ở `01-base-flow.md` thành ≥3 configurations chi tiết, mỗi config có tên + 3 knobs đã chốt + lý do chọn.
>
> **Thời gian**: 15 phút (đầu phần Main, trước khi tính cost)

---

## Config 1

**Tên config**: Backpacker Bot

```text
"Rẻ nhất có thể — cho volume cao, chấp nhận quality vừa đủ"
```

### 3 Knobs

**① Model tier**:

```text
Response model: GPT-4o-mini → giá $0.15 / $0.60 per 1M tokens (input/output)
Classifier model: Keyword/Regex → $0
```

**② Web search**:

```text
☑ OFF
□ ON selective — bật cho intent: __________________
□ ON broad
```

**③ History management**:

```text
☑ Last 3
□ Last 5
□ Full
□ Summarize every ___ turns
```

### Lý do nhóm chọn config này

```text
Config này phục vụ tình huống volume cao + budget siết chặt: mùa cao điểm 1,200 conv/ngày,
công ty muốn giữ chi phí AI thấp nhất có thể. Phù hợp cho FAQ đơn giản (Guide chiếm 50%
volume) — tourist hỏi "đi đâu ăn gì" không cần model mạnh. Đánh đổi: chất lượng thấp hơn
ở câu hỏi phức tạp (visa policy, multi-intent), và không có real-time info.
```

### Rủi ro lớn nhất của config này

```text
Visa info có thể outdated nghiêm trọng (web OFF + RAG cũ) → khách nhận thông tin sai về
visa policy → bị từ chối nhập cảnh → bad review + rủi ro pháp lý cho công ty.
```

---

## Config 2

**Tên config**: First-Class Concierge

```text
"Chất lượng tối đa — phục vụ như nhân viên tư vấn cao cấp"
```

### 3 Knobs

**① Model tier**:

```text
Response model: Claude Sonnet 4.6 → giá $3.00 / $15.00 per 1M tokens
Classifier model: GPT-4o-mini → giá $0.15 / $0.60 per 1M tokens (~170 tokens/call)
```

**② Web search**:

```text
□ OFF
□ ON selective — bật cho intent: __________________
☑ ON broad — bật cho tất cả intent AI-served (Guide, Visa, Weather)
```

**③ History management**:

```text
□ Last 3
□ Last 5
☑ Full
□ Summarize every ___ turns
```

### Lý do nhóm chọn config này

```text
Config này phục vụ khách VIP / high-value booking potential. Khi 1 booking tour luxury
trị giá $2,000–$5,000, chi phí AI $0.05–$0.10/conversation là không đáng kể so với
revenue potential. Model mạnh (Sonnet 4.6) hiểu nuance tốt, trả lời chi tiết + chính xác.
Web search broad đảm bảo mọi thông tin đều fresh. Full history giữ nguyên context suốt
conversation dài — khách không phải nhắc lại preference.
```

### Rủi ro lớn nhất của config này

```text
Cost scale nhanh ở volume cao: Scenario B (1,200 conv/day × 7 turns) có thể đẩy monthly
cost lên $2,000–$3,000+. Nếu conversion rate thấp (khách hỏi nhiều nhưng không book),
ROI sẽ âm. Latency cũng cao hơn (~2-3s/turn) — 53% users rời nếu chờ >3s.
```

---

## Config 3

**Tên config**: Smart Navigator

```text
"Đúng trí thông minh cho đúng loại câu hỏi — cân bằng cost × quality"
```

### 3 Knobs

**① Model tier**:

```text
Response model (Guide + Weather): GPT-4o-mini → giá $0.15 / $0.60 per 1M tokens
Response model (Visa): Claude Haiku 4.5 → giá $1.00 / $5.00 per 1M tokens
Classifier model: GPT-4o-mini → giá $0.15 / $0.60 per 1M tokens (~170 tokens/call)
```

**② Web search**:

```text
□ OFF
☑ ON selective — bật cho intent: Visa + Weather
□ ON broad
```

**③ History management**:

```text
□ Last 3
☑ Last 5
□ Full
□ Summarize every ___ turns
```

### Lý do nhóm chọn config này

```text
Routing thông minh: Guide chiếm 50% volume nhưng chỉ cần RAG + model rẻ (FAQ về điểm đến
đã có sẵn trong KB). Visa chiếm 15-25% nhưng cần chính xác cao + real-time info → dùng
model mid (Haiku 4.5) + web search. Weather cần real-time nhưng câu trả lời đơn giản →
model rẻ + web search. LLM classifier ($0.000035/call) đảm bảo routing chính xác hơn
keyword — đặc biệt quan trọng cho multi-intent messages. Last 5 đủ context cho 85% conversations.
```

### Rủi ro lớn nhất của config này

```text
Complexity vận hành cao hơn: cần maintain routing logic + 2 model endpoints + web search
selective rules. Nếu classifier route sai (Visa → Guide) → khách nhận câu trả lời từ
model rẻ + không có web search → thông tin visa outdated. Cần monitor routing accuracy.
```

---

## Config 4 (optional — DeepSeek value play)

**Tên config**: DeepSeek Maverick

```text
"Strong quality với giá mid — tận dụng DeepSeek V4 Pro pricing advantage"
```

### 3 Knobs

```text
Model: DeepSeek V4 Pro ($1.74/$3.48) cho tất cả AI-served intents
       Keyword classifier ($0)
Web: ON selective (Visa + Weather)
History: Last 5
```

### Lý do

```text
DeepSeek V4 Pro nằm ở tier Strong nhưng giá chỉ bằng ~1/4 Claude Sonnet 4.6 ($1.74 vs $3.00
input, $3.48 vs $15.00 output). Nếu quality tương đương → đây là "best value" option.
Keyword classifier giữ cost thấp hơn nữa. Rủi ro: DeepSeek là provider mới, uptime/reliability
chưa proven bằng OpenAI/Anthropic. Promo 75% off hết 31/05/2026 → giá có thể tăng sau đó.
```

---

## Bảng kiểm trước khi tính cost

- [x] ≥3 configs đã đặt tên (không chỉ "Config 1/2/3")
- [x] Mỗi config đã chốt rõ 3 knobs (không còn ô trống)
- [x] Mỗi config có ≥2 câu lý do
- [x] 3 configs đủ khác biệt — không phải chỉ đổi mỗi 1 knob nhỏ
- [x] Nhóm đồng thuận đây là 3 configs đáng so sánh

**Kiểm tra khác biệt:**
- Config 1 vs 2: khác ở CẢ 3 knobs (Cheap/OFF/Last3 vs Strong/Broad/Full)
- Config 1 vs 3: khác ở cả 3 knobs (single model vs mix, OFF vs selective, Last3 vs Last5)
- Config 2 vs 3: khác ở cả 3 knobs (Strong single vs Mix, Broad vs Selective, Full vs Last5)
- Config 4: alternative provider play — same tier khác provider

→ Đủ khác biệt để thấy tradeoff rõ ràng.

Xong → mở `03-cost-calculation.md` để bắt đầu tính cost.
