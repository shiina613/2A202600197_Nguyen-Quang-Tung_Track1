# 04 · Comparison Table — Bảng so sánh đầy đủ

> **Mục tiêu**: Tổng hợp tất cả số đã tính ở `03-cost-calculation.md` thành 1 bảng so sánh duy nhất — đây là artifact chính nhóm sẽ present.
>
> **Thời gian**: 10 phút (đầu phần Final)

---

## Bảng chính

| | Config 1 | Config 2 | Config 3 | Config 4 |
|---|---|---|---|---|
| **Tên** | Backpacker Bot | First-Class Concierge | Smart Navigator | DeepSeek Maverick |
| **① Model** | GPT-4o-mini (Cheap) | Claude Sonnet 4.6 (Strong) | Mix: GPT-4o-mini + Haiku 4.5 | DeepSeek V4 Pro (Strong) |
| **② Web search** | OFF | ON broad (all intents) | ON selective (Visa + Weather) | ON selective (Visa + Weather) |
| **③ History** | Last 3 | Full | Last 5 | Last 5 |
| **Intent classifier** | Keyword ($0) | LLM (GPT-4o-mini) | LLM (GPT-4o-mini) | Keyword ($0) |
| | | | | |
| **Cost / conv (Scenario A — 4t)** | $0.0015 | $0.0673 | $0.0163 | $0.0284 |
| **Cost / conv (Scenario B — 7t)** | $0.0018 | $0.0807 | $0.0201 | $0.0361 |
| **Monthly A** (300 conv/day × 30) | **$13.51** | **$605.61** | **$146.79** | **$255.70** |
| **Monthly B** (1,200 conv/day × 30) | **$64.66** | **$2,905.56** | **$723.50** | **$1,298.92** |
| **vs human $4,500/mo (A)** | rẻ 333× | rẻ 7.4× | rẻ 30.7× | rẻ 17.6× |
| **vs human $18,000/mo (B)** | rẻ 278× | rẻ 6.2× | rẻ 24.9× | rẻ 13.9× |
| **Savings % (A)** | 99.7% | 86.5% | 96.7% | 94.3% |
| **Savings % (B)** | 99.6% | 83.9% | 96.0% | 92.8% |
| **Quality estimate** | Low (70%) | High (90%) | Medium-High (82%) | High (85%) |
| **Speed estimate** | High (~200ms) | Low (~2-3s) | Medium (~500ms avg) | Medium (~1-2s) |
| **Điểm yếu chính** | Visa info outdated, miss nuance | Cost cao, latency cao | Routing complexity, classifier dependency | Provider risk (mới, promo hết) |
| **Best for** | Volume cao, FAQ đơn giản, night mode | Khách VIP, high-value booking | Production daily use, cân bằng cost/quality | Teams muốn strong quality giá mid |

---

## Quan sát nhanh từ bảng

### Câu 1 — Config rẻ nhất là gì? Đắt nhất là gì?

```text
Rẻ nhất: Backpacker Bot — monthly B = $64.66
Đắt nhất: First-Class Concierge — monthly B = $2,905.56
Chênh: 45× lần (!)
```

### Câu 2 — Knob nào ảnh hưởng cost nhiều nhất?

```text
MODEL TIER là knob ảnh hưởng lớn nhất:
- Config 1 (GPT-4o-mini) vs Config 2 (Sonnet 4.6): chênh ~45× monthly cost.
- Riêng model cost: $0.15/$0.60 vs $3.00/$15.00 = chênh 20× input, 25× output.

WEB SEARCH là knob thứ 2:
- Config 3 vs Config 1: cùng GPT-4o-mini cho Guide, nhưng web ON cho Visa/Weather
  → cost/conv Guide = $0.0019 vs Visa = $0.048 → web search tăng cost ~25× cho intent đó.
- Tuy nhiên $0.008/call là fixed cost — ở model đắt, tỷ trọng web search nhỏ hơn.

HISTORY ảnh hưởng ít nhất:
- Full vs Last 3 ở Turn 7: chênh 780 tokens input.
- Với GPT-4o-mini: 780 × $0.15/1M = $0.000117/turn → gần như không đáng kể.
- Với Sonnet 4.6: 780 × $3.00/1M = $0.00234/turn → có ý nghĩa hơn nhưng vẫn nhỏ so với model base cost.
```

### Câu 3 — Tại sao Scenario B không đắt ×4 lần Scenario A?

```text
Volume B = 4× Volume A, nhưng:
- Intent mix B có 45% là Booking + Complaint = $0 LLM cost (vs chỉ 15% ở Scenario A).
- Nên AI-served conversations ở B = 55% × 1,200 = 660/ngày vs A = 85% × 300 = 255/ngày → chỉ gấp ~2.6×.
- Turns dài hơn (7 vs 4) tăng cost/conv ~1.2-1.5× (không phải 1.75× vì history cap).
- Kết quả: Monthly B ≈ 4-5× Monthly A (không phải 7× như mong đợi nếu tính đơn giản).

Ví dụ Config 3: $723/$147 = 4.9× — đúng logic trên.
```

### Câu 4 — Có config nào AI đắt hơn human không?

```text
KHÔNG — tất cả 4 configs đều rẻ hơn human baseline đáng kể:
- Rẻ nhất: Backpacker Bot rẻ hơn 278-333×
- Đắt nhất: First-Class Concierge vẫn rẻ hơn 6.2-7.4×

Tuy nhiên cần lưu ý: human baseline $0.50/conv bao gồm CẢ booking conversion.
AI chatbot chỉ handle info queries — vẫn cần sales agent cho booking.
Nếu tính thêm 1 sales agent ($15/ngày) cho booking handoff:
- Scenario A: $15/ngày × 30 = $450 thêm → tổng AI + human = $147 + $450 = $597 (Config 3)
- Vẫn rẻ hơn full human team ($4,500) = 7.5×

AI thắng ở: 24/7 availability, đa ngôn ngữ, handle volume peak không cần tuyển thêm người,
consistency (không phụ thuộc mood nhân viên).
```

---

## Bảng kiểm trước khi sang file tiếp theo

- [x] Bảng đầy đủ — không còn ô trống
- [x] Đã có 4 câu trả lời cho 4 quan sát ở trên
- [x] Nhóm đồng thuận về số trong bảng (đã sanity check)

Xong → mở `05-recommendation.md` để viết recommendation cuối + chuẩn bị present.
