# 05 · Recommendation + Justification — Kết luận & Chuẩn bị Present

> **Mục tiêu**: Chọn 1 config (hoặc combo) nhóm recommend deploy, viết justification ngắn gọn, và chuẩn bị 5 phút present.
>
> **Thời gian**: 10 phút (cuối phần Final)

---

## 4 câu hỏi nhóm phải trả lời

### Câu 1 — Recommend config nào?

```text
Nhóm recommend Config 3 — Smart Navigator — cho cả 2 scenarios.

Lý do: Smart Navigator đạt sweet spot giữa cost và quality. Monthly cost $147 (low season)
và $724 (high season) — tiết kiệm 96-97% so với human baseline, trong khi quality estimate
Medium-High (82%) đủ phục vụ phần lớn tourist queries. Routing thông minh đảm bảo câu hỏi
visa (high-stakes) được xử lý bởi model mạnh hơn + web search real-time, còn FAQ đơn giản
(50% volume) chạy model rẻ để tối ưu cost.

Nếu sếp nói "chỉ 1 config" → Smart Navigator. Nếu cho phép 2 configs → Smart Navigator
cho daily operation + upgrade lên First-Class Concierge cho VIP customers (detect qua
booking value hoặc returning customer flag).
```

### Câu 2 — So với human baseline $0.50/conv → tiết kiệm bao nhiêu?

```text
- Scenario A (low season): Tiết kiệm 96.7% → $4,500 - $147 = $4,353/tháng saved.
- Scenario B (high season): Tiết kiệm 96.0% → $18,000 - $724 = $17,276/tháng saved.
- Tổng tiết kiệm hàng năm (giả sử 6 tháng low + 6 tháng high): ~$129,774/năm.

Tuy nhiên vẫn cần ít nhất 1-2 sales agents cho booking handoff (45% conversations ở
high season). Chi phí thêm: ~$450-$900/tháng. Tổng AI + human support vẫn rẻ hơn
full human team 5-7×.

AI thắng rõ nhất ở: 24/7 availability (tourist hỏi lúc 2AM theo timezone họ),
đa ngôn ngữ (English native-level), handle volume spike mùa cao điểm không cần
tuyển thêm nhân viên tạm thời.
```

### Câu 3 — Khi nào nên upgrade / downgrade config?

```text
NÊN UPGRADE lên First-Class Concierge khi:
- Customer feedback cho thấy quality complaint > 5% (bot trả lời sai/thiếu)
- Approaching peak season (Tết, lễ hội quốc tế) + booking value trung bình > $1,000
- Có segment khách VIP rõ ràng (returning customers, corporate bookings)
- Revenue per booking tăng đủ để justify cost gap ($2,906 vs $724 = +$2,182/tháng
  → cần thêm ~4 bookings $500+ để cover)

NÊN DOWNGRADE về Backpacker Bot khi:
- Monthly conversations < 3,000 (volume quá thấp, cost đã rẻ sẵn)
- Off-season extreme (tháng 9-10) + chỉ có FAQ đơn giản
- Budget bị cắt đột ngột + cần maintain service minimum

SIGNAL CHUYỂN ĐỔI:
- Monitor weekly: cost/conv trend, quality complaint rate, booking conversion rate
- Threshold: nếu cost/conv > $0.05 mà conversion rate < 2% → đang overspend
```

### Câu 4 — Rủi ro lớn nhất của config được chọn?

```text
RỦI RO CHÍNH: Routing accuracy — Smart Navigator phụ thuộc vào LLM classifier để
route đúng intent. Nếu classifier route sai (Visa → Guide), khách nhận câu trả lời
từ GPT-4o-mini + không có web search → thông tin visa outdated → hậu quả nghiêm trọng.

MITIGATION:
1. Monitor routing accuracy hàng tuần (sample 50 conversations, check intent classification)
2. Fallback rule: nếu message chứa keywords "visa", "passport", "entry" → force route Visa
   (hybrid keyword + LLM classifier)
3. Confidence threshold: nếu classifier confidence < 0.7 → escalate to human

RỦI RO PHỤ: Provider pricing change
- OpenAI/Anthropic có thể tăng giá → margin co lại
- Mitigation: có sẵn fallback sang DeepSeek V4 Pro (Config 4) nếu cost tăng >30%
- DeepSeek V4 Pro cho quality tương đương Haiku 4.5 với giá $1.74/$3.48

RỦI RO PHỤ 2: Web search reliability
- Tavily API down → Visa/Weather intent không có real-time info
- Mitigation: graceful degradation — fallback về RAG only + disclaimer "info may not be current"
```

---

## Final answer — Recommendation in 1 paragraph

```text
Nhóm recommend Smart Navigator (Config 3) làm config production chính cho cả low và high
season. Với monthly cost $147–$724 (tiết kiệm 96–97% so với human baseline), config này
đạt cân bằng tối ưu giữa chi phí và chất lượng bằng cách route câu hỏi đơn giản (Guide,
50% volume) qua GPT-4o-mini ($0.0019/conv) và câu hỏi high-stakes (Visa) qua Claude
Haiku 4.5 + web search ($0.048/conv). Knob ảnh hưởng cost lớn nhất là model tier (chênh
45× giữa Budget và Premium), không phải web search hay history — nên routing thông minh
theo intent là đòn bẩy kinh tế mạnh nhất. Rủi ro chính nằm ở routing accuracy — mitigate
bằng hybrid keyword + LLM classifier và confidence threshold. Nếu revenue per booking
justify được, có thể upgrade segment VIP lên First-Class Concierge. Tổng tiết kiệm ước
tính ~$130K/năm so với full human team, đồng thời gain 24/7 availability và multilingual support.
```

---

## Chuẩn bị Present (5 phút)

### Nhịp 0:00 – 0:30 — Base flow + 3 knobs đã chọn

Ai trình bày: Nguyễn Quang Tùng

Nói gì:

```text
"Chatbot travel agency có 5 intents, trong đó Booking + Complaint chuyển người ($0 AI cost).
3 knobs chúng tôi tweak: Model tier, Web search, và History management."
```

### Nhịp 0:30 – 1:00 — Config overview

Ai trình bày: Nguyễn Quang Tùng

Nói gì:

```text
"4 configs: Backpacker Bot (cheapest — GPT-4o-mini, no web, last 3),
First-Class Concierge (premium — Sonnet 4.6, web broad, full history),
Smart Navigator (mix — cheap cho FAQ, mid cho Visa, web selective),
DeepSeek Maverick (strong quality giá mid — alternative provider)."
```

### Nhịp 1:00 – 2:00 — Cost comparison

Ai trình bày: Tạ Thị Thùy Dương

Nói gì:

```text
"Monthly cost range: $65 (Budget, high season) đến $2,906 (Premium, high season) — chênh 45×.
Tất cả đều rẻ hơn human baseline 6-333×. Smart Navigator ở $724/tháng high season —
tiết kiệm 96% so với thuê nhân viên. Key insight: model tier là knob ảnh hưởng cost
lớn nhất, không phải web search hay history."
```

### Nhịp 2:00 – 3:00 — Key insight

Ai trình bày: Tạ Thị Thùy Dương

Nói gì:

```text
"Insight quan trọng nhất: Guide chiếm 50% volume nhưng chỉ cần model rẻ nhất. Visa chỉ
15-25% volume nhưng cần model mạnh + web search. Routing thông minh theo intent là đòn bẩy
kinh tế mạnh nhất — tiết kiệm 85% cost so với dùng model mạnh cho tất cả, mà quality
chỉ giảm ~8% (82% vs 90%)."
```

### Nhịp 3:00 – 4:30 — Recommendation + justification

Ai trình bày: Trịnh Xuân Đạt

Nói gì:

```text
"Recommend Smart Navigator cho production. Tiết kiệm ~$130K/năm so với human team.
Cost $724/tháng high season — justify được vì 1 booking tour $500 đã cover gần 1 tháng
AI cost. Rủi ro chính: routing accuracy — mitigate bằng hybrid classifier + confidence
threshold. Upgrade path: VIP segment lên First-Class Concierge khi booking value > $1,000."
```

### Nhịp 4:30 – 5:00 — Hardest question prep

Ai trình bày: Trịnh Xuân Đạt

Câu hỏi khó nhất dự đoán:

```text
"Tại sao không chọn DeepSeek Maverick? Quality 85% cao hơn Smart Navigator 82%,
và cost $1,299 vẫn rẻ hơn human 14×?"
```

Câu trả lời sẵn:

```text
"DeepSeek Maverick là backup plan tốt, nhưng chúng tôi không recommend làm primary vì:
(1) Provider risk — DeepSeek mới hơn, uptime chưa proven bằng OpenAI/Anthropic,
(2) Promo pricing hết 31/05 → giá có thể tăng,
(3) Smart Navigator cost thấp hơn 44% ($724 vs $1,299) mà quality gap chỉ 3%.
Tuy nhiên nếu OpenAI/Anthropic tăng giá >30%, DeepSeek Maverick là fallback ngay lập tức."
```

---

## Q&A — Câu trả lời sẵn cho 3 câu instructor thường hỏi

```text
1. "Knob nào ảnh hưởng cost nhiều nhất?"
→ Model tier — chênh 45× giữa cheapest và premium config. Web search chỉ thêm ~$0.008/turn
  (significant ở model rẻ, negligible ở model đắt). History gần như không ảnh hưởng
  (<$0.001/turn difference).

2. "Nếu provider tăng giá API ×2 → config còn sống được không?"
→ Smart Navigator monthly B tăng từ $724 → ~$1,200. Vẫn rẻ hơn human 15×, savings 93%.
  Hoàn toàn sống được. Ngay cả First-Class Concierge ×2 = $5,800 vẫn rẻ hơn human 3×.
  Worst case: switch sang DeepSeek Maverick (provider khác, giá competitive).

3. "So với nhóm X — tại sao chọn khác?"
→ (Tuỳ nhóm X) Nếu họ chọn Budget: "Chúng tôi ưu tiên quality cho Visa intent vì
  sai thông tin visa = rủi ro pháp lý. $724 vs $65 chênh $659/tháng nhưng 1 bad review
  về visa info sai có thể mất nhiều hơn." Nếu họ chọn Premium: "Chúng tôi thấy 50%
  volume là FAQ đơn giản — dùng Sonnet cho 'Hoi An có gì ăn?' là overkill."
```

---

## Bảng kiểm cuối cùng

- [x] Đã trả lời 4 câu PM (Recommend / Savings / Threshold / Risk)
- [x] Final answer paragraph viết gọn (6 câu)
- [x] Phân công 5 nhịp present cho mỗi thành viên
- [x] Có sẵn câu trả lời cho 3 câu Q&A dự đoán
- [x] Comparison table có sẵn để chiếu / chuyền tay khi present
- [ ] Repo đã commit + push (sẽ nộp link sau buổi học)

---

## Sau buổi học

1. **Commit + push repo** với tất cả file đã điền.
2. **Dán link repo** vào Discord `#day27-evidence-boards` trước 23:59.
3. **Chuẩn bị cho D28**: peer review giữa các nhóm — sẽ bị hỏi câu chất vấn khó hơn instructor.

*Hôm nay bạn chứng minh bằng số. Ngày mai bạn bảo vệ bằng logic.*
