# Prompt tham khảo 9 — Phân tích Spark → Loop → System

**Dùng khi**: nhóm muốn xác định 2 sản phẩm AI đang ở giai đoạn tăng trưởng nào — có phải lợi thế tạm thời (Spark), hay đã xây vòng lặp (Loop), hay hệ thống nhiều vòng lặp (System)?
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S5.7 — Spark → Loop → System
**Thời gian**: 8-10 phút (cho mỗi sản phẩm)

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

Nhiều AI startups đang ở giai đoạn SPARK — lợi thế tạm thời, được báo chí đưa tin, người dùng tò mò thử. Nhưng spark LUÔN kết thúc. Câu hỏi là: spark đó có chuyển thành loop không?

1. **Spark là gì** (nhớ lại): lợi thế tạm thời tạo chú ý ban đầu. Không bền.
   - Novelty Premium ("first AI for X")
   - Channel Disruption (SEO mới, social mới)
   - Capability Gap (làm được điều khác chưa làm... còn)

2. **Loop là gì**: vòng lặp tăng trưởng — action/output của user trở thành input cho usage, users, data, distribution tiếp theo.
   - Viral loops (WhatsApp invite, Slack workspace)
   - Content loops (Pinterest pin, YouTube video)
   - Paid loops (Hims paid ads, DoorDash)

3. **System là gì**: nhiều loops củng cố lẫn nhau.
   - Template ecosystem
   - Community + data + workflow
   - Partner network

4. **Amplification factor**: trong loop, 1 user mới có generate được > 1 user mới khác không? Nếu > 1 → viral. Nếu = 1 → steady-state. Nếu < 1 → đang tử vong.

5. **Clay case** (đã học): bắt đầu từ Spark (partnerships → GTM community seeding) → xây 3 loops (Workflow Showcase, AI Content, Template Network) → System.

> **Cảnh báo**: nếu nhóm KHÔNG có dữ liệu công khai về tăng trưởng (DAU, MAU, retention, viral coefficient), đánh giá sẽ phải dựa vào proxy indicators (pricing strategy, marketing tone, hiring profile). Nói rõ giới hạn này.

---

## Prompt chính (paste sau context + log + analyses)

```text
Bạn là growth strategy analyst. Dựa trên BỐI CẢNH ở trên và TRẢI NGHIỆM nhóm tôi với sản phẩm [TÊN],
giúp nhóm tôi phân tích vị trí của sản phẩm trong khung Spark → Loop → System.

PHẦN 1 — SPARK ANALYSIS

Sản phẩm hiện tại có Spark nào (lợi thế tạm thời)?

3 loại Spark:

1. NOVELTY PREMIUM:
- Sản phẩm có là "first AI for X" không?
- "First" trong phạm vi nào? (Global / VN / segment cụ thể)
- Novelty Premium sẽ kéo dài bao lâu? (3 tháng / 6 tháng / 1 năm?)

2. CHANNEL DISRUPTION:
- Sản phẩm dùng kênh marketing mới nào?
- SEO mới? Social organic mới (TikTok, X, LinkedIn)? Word-of-mouth trong cộng đồng?
- Kênh này còn underutilized hay đã saturated?

3. CAPABILITY GAP:
- Sản phẩm làm được điều gì mà competitors không làm được... yet?
- Capability gap kéo dài bao lâu trước khi catch up?
- Vd: GitHub Copilot có Inline AI 2 năm trước khi Cursor catch up + vượt.

Verdict Spark:
- Sản phẩm CÓ Spark gì hiện tại?
- Spark sẽ tan trong khoảng thời gian: __ tháng.
- Nếu chỉ có Spark + KHÔNG có Loop, sản phẩm sẽ stop growth khi Spark tan.

PHẦN 2 — LOOP ANALYSIS

Sản phẩm có Loop nào không? (Loop = compounding mechanism)

3 loại Loop:

1. VIRAL LOOP:
- User mời user mới trực tiếp (vd: Slack workspace, Zoom meeting link)?
- Có viral coefficient > 1 không? (1 user mới mời được > 1 user khác)
- Vd: WhatsApp K-factor cao vì chat 1-on-1 cần cả 2 dùng app.

2. CONTENT LOOP:
- User tạo content, content thu hút user mới (SEO, social, marketplace)?
- Vd: Pinterest pin được index Google → thu hút user search → user mới tạo thêm pin.

3. PAID LOOP:
- Có paid acquisition + LTV > CAC?
- Vd: Hims paid Facebook ads, LTV > CAC vì subscription model.

Đánh giá:
- Loop nào sản phẩm đang HAVE / BUILDING / NOT YET?
- Amplification factor: > 1 / = 1 / < 1?
- Bottleneck: điểm thắt cổ chai của loop ở đâu? (Vd: nếu là Viral Loop, bottleneck có thể là invitation friction.)

PHẦN 3 — SYSTEM ANALYSIS

Sản phẩm có System chưa? (System = > 1 loop reinforce nhau)

Câu hỏi:
- Có > 1 loop đang hoạt động không?
- Loops có CỦNG CỐ NHAU không? (Vd: Content loop bring users, viral loop convert users to power users, paid loop scale further.)
- Có template ecosystem / partner network / community?

Vd Clay (B2B data enrichment):
- Loop 1: Workflow Showcase (users share workflows → others copy → more workflows)
- Loop 2: AI Content (AI generates content → SEO → new users discover)
- Loop 3: Template Network (templates shared → reduce onboarding → more users → more templates)
- = SYSTEM với 3 loops reinforce nhau.

Vd LinkedIn Collaborative Articles:
- 0 → 1M unique visitors/month với AI-generated article starters
- Human experts add insights → SEO + credibility loop

Verdict System: HAS SYSTEM / BUILDING SYSTEM / SPARK ONLY.

PHẦN 4 — TRAJECTORY

Sản phẩm đang đi về đâu?

Phase hiện tại: [SPARK / SPARK→LOOP / LOOP / LOOP→SYSTEM / SYSTEM]

3 kết quả có thể trong 12 tháng:
1. **Lên SYSTEM**: cần làm gì? Đầu tư gì?
2. **Stuck ở LOOP**: vì sao có thể stuck?
3. **Tử vong**: nếu Spark tan trước khi Loop hình thành — kịch bản nào?

QUOTE quan trọng:
"No AI optimization saves a loop with poor amplification fundamentals."
- Sản phẩm có amplification fundamentals tốt không?
- Hay đang dựa vào "AI thông minh" để bù cho weak loop?

PHẦN 5 — RECOMMENDATIONS

Nếu nhóm tôi là PM của sản phẩm, 3 hành động tiếp theo để chuyển từ Spark sang Loop:

1. [...]
2. [...]
3. [...]

PHẢN BIỆN:
- Có optimism bias không?
- Có data thực sự về growth không, hay đang đoán dựa trên proxy?
- Spark có thể tan nhanh hơn dự đoán (vd: 3 tháng thay vì 12 tháng) — sẵn sàng không?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI claim "có System" mà không có bằng chứng

```text
Bạn claim sản phẩm có System với 2-3 loops. Cụ thể từng loop:

Loop 1:
- User action gì → output gì → input cho user mới gì?
- Amplification factor: 1 user mới → có generate > 1 user mới khác không?
- Bằng chứng cụ thể (số liệu, ảnh chụp, observation)?

Loop 2: tương tự
Loop 3: tương tự

Loops có CỦNG CỐ NHAU không? Cụ thể loop 1 → loop 2 → loop 3 → loop 1, hay rời rạc?

Nếu không có amplification > 1 hoặc không có củng cố, KHÔNG phải System — chỉ là Spark hoặc Spark + 1 weak loop.
```

### Khi muốn so sánh với case lecture (Clay, LinkedIn)

```text
Lecture đã đưa case Clay với 3 loops:
1. Workflow Showcase Loop
2. AI Content Loop
3. Template Network Loop

So sánh sản phẩm [TÊN] với Clay:
- Có loop tương tự Workflow Showcase không?
- Có loop tương tự AI Content không?
- Có loop tương tự Template Network không?
- Khác biệt: sản phẩm này có loops gì không có ở Clay? Hay thiếu loops nào của Clay?

Lecture cũng có LinkedIn Collaborative Articles:
- 0 → 1M unique visitors/month
- AI-generated starters → human experts add insights → SEO loop
- Sản phẩm này có "AI + human content loop" không?

So sánh để biết sản phẩm gần case thành công nào, và còn cần xây gì.
```

### Khi sản phẩm rõ ràng chỉ ở SPARK

```text
Sản phẩm này có vẻ chỉ ở SPARK phase (chưa có loop rõ ràng).

Đề xuất 5 loop CỤ THỂ sản phẩm có thể xây:

1. Content loop: làm sao tạo content user-generated mà SEO được?
2. Network effect loop: làm sao user mới make sản phẩm tốt hơn cho user cũ?
3. Data flywheel: làm sao usage tạo data → cải thiện AI → thu hút thêm usage?
4. Template/community loop: làm sao tạo template ecosystem?
5. Partner loop: làm sao integrations với tool khác → expand distribution?

Với mỗi đề xuất:
- Cụ thể trong context sản phẩm [TÊN]
- Amplification factor ước tính
- Effort cần (1 quý? 1 năm?)
- Recommend top 1-2 nhóm nên focus.
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **Spark identification check**: Đã chỉ ra Spark cụ thể không (novelty / channel / capability gap)?
2. **Loop check**: Loop có amplification factor cụ thể không? Hay chỉ "có loop"?
3. **System check**: Nếu claim "có System", có > 1 loop reinforce nhau cụ thể không?
4. **Trajectory check**: Có 3 kịch bản tương lai cụ thể chưa?
5. **Bias check**: Đánh giá có optimism bias không?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Perplexity có Spark vì là first AI search. Có Loop vì user dùng thường xuyên. Đang đi lên System."

Vấn đề: không có amplification factor cụ thể, không có loop nào rõ ràng, không có timeframe.

### Tốt

> **Spark/Loop/System — Perplexity**
>
> **SPARK Analysis**:
>
> 1. Novelty Premium: PASS — "first AI search with citations" 2022-2023. Nhưng giờ (5/2026) đã có ChatGPT Search, Gemini với AI Overviews. Novelty Premium đang tan.
>
> 2. Channel Disruption: PARTIAL — Perplexity dùng tốt X (Twitter) và TikTok cho marketing 2023-2024. Nhưng channel này đã saturated.
>
> 3. Capability Gap: PARTIAL — Pro Search với multi-source synthesis từng là gap. Giờ ChatGPT có Deep Research.
>
> Verdict Spark: Spark đang TAN, dự kiến hết hoàn toàn trong 12 tháng.
>
> **LOOP Analysis**:
>
> 1. Viral Loop: WEAK — share Perplexity link không phổ biến như share Twitter / YouTube.
>
> 2. Content Loop: PARTIAL — Perplexity có Pages (user-generated research pages có thể SEO).
>    Amplification factor: ước < 1 (mỗi user generate < 1 user mới qua Pages).
>
> 3. Paid Loop: ACTIVE — Perplexity invest heavy paid ads, but CAC tăng do competition.
>
> Loop bottleneck: thiếu unique content moat. ChatGPT có thể trả lời tương tự với citations.
>
> **SYSTEM Analysis**:
>
> Có 1 weak loop (Pages) + 1 paid loop. Không có > 1 loop reinforce nhau mạnh mẽ.
>
> Verdict System: SPARK + 1 WEAK LOOP, chưa phải SYSTEM.
>
> **Trajectory** (12 tháng):
>
> Kịch bản cao nhất: stuck ở SPARK + paid loop, growth slow.
> Để lên SYSTEM, Perplexity cần:
>
> 1. Strong content loop: Pages phải SEO mạnh hơn, attractive cho experts.
> 2. Network effect: power users → curate content → attract more users.
> 3. Data flywheel: dùng search patterns để improve AI ranking.
>
> **Recommendations cho PM Perplexity**:
>
> 1. Build creator program cho Pages (incentive experts viết research pages).
> 2. Open API + integrations để embed Perplexity in other tools (loop với ecosystem).
> 3. Vertical Perplexity (Perplexity Finance, Perplexity Health) — niche down.
>
> **Phản biện**: nhóm tôi không có data growth thật. Dựa trên proxy (marketing, pricing, public statements). Có thể Perplexity có internal data flywheel mạnh hơn estimate.

Khác biệt: amplification factor cụ thể, bottleneck rõ ràng, 3 recommendations cụ thể.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Claim "có Loop" mơ hồ | Cụ thể loop name + amplification factor |
| Bỏ qua bottleneck | Xác định bottleneck của mỗi loop |
| Stop ở Spark/Loop/System verdict | Đề xuất next moves để chuyển lên cấp tiếp theo |
| Không có timeframe | Spark tan trong __ tháng, Loop hình thành trong __ tháng |
| So sánh chung chung | Cụ thể với case lecture (Clay, LinkedIn, WhatsApp) |
| Tin AI optimism | Bắt AI đưa kịch bản tử vong (worst case) |

---

## Format save vào slide deck mục S5.7

```markdown
### Lens 4.3 — Spark → Loop → System (Sản phẩm A)

**SPARK**: [Có/Không + chi tiết]
- Novelty Premium: [...]
- Channel Disruption: [...]
- Capability Gap: [...]
- Time until Spark tan: __ tháng

**LOOP**:
- Loop 1: [tên] — Amplification: ___ — Bottleneck: [...]
- Loop 2: [...]

**SYSTEM**: [HAS / BUILDING / NONE]

**Trajectory** (12 tháng):
- Scenario optimistic: [...]
- Scenario stuck: [...]
- Scenario tử vong: [...]

**Recommendations**:
1. [...]
2. [...]
3. [...]
```

Lặp lại cho Sản phẩm B.

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi phân tích Spark/Loop/System, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **Counter-example**: Có sản phẩm nào KHÔNG cần System mà vẫn tồn tại lâu không?
   (Vd: Niche enterprise tool với 100 customers $500K/year — không cần viral system.)

2. **Time-bound bridges**: Lecture nói "Mọi moat là time-bound bridges". Spark/Loop/System
   cũng tan theo thời gian không? Vd: WhatsApp viral loop slow down khi penetration > 90%.

3. **AI commoditization**: Trong 3 năm, nếu base AI model trở thành commodity (DeepSeek $1/M tokens),
   loops dựa vào AI capability có còn ý nghĩa không? Loop nào survive trong post-commodity world?

Trả lời 3 câu này để có góc nhìn dài hạn.
```
