# Prompt tham khảo 6 — Kiểm tra moat của 1 sản phẩm AI

**Dùng khi**: nhóm cần đánh giá xem sản phẩm AI có **lợi thế bền vững (moat)** hay chỉ có lợi thế tạm thời. Áp dụng Lens 4 — Defensibility + AI Moat.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S5 — Defensibility / Moat (Lens 4)
**Thời gian**: 10-15 phút (cho mỗi sản phẩm)

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

Lens 4 là khó nhất — vì hầu hết sản phẩm AI ngày nay đều có moat YẾU (rented land trên OpenAI/Anthropic, đầy 80-95% wrapper businesses không generate revenue).

1. **5 misconceptions** của Lens 4 (nhớ lại):
   1. "Speed là moat duy nhất" — sai, speed là bridge, không phải defensibility.
   2. "Distribution là moat duy nhất" — sai, không có next step thì user bị poach.
   3. "Data là moat" — sai, phải đúng LOẠI data (real-time, user-specific, domain-specific, human-judgment, reinforcement).
   4. "Moats vĩnh viễn" — sai, mọi moat là time-bound bridges.
   5. "AI làm moats cũ lỗi thời" — sai, moats cũ tiến hoá, không biến mất.

2. **Rented land** của sản phẩm là gì? (Vd: Cursor rents VS Code + OpenAI/Anthropic APIs. ChatGPT wrappers rent OpenAI. Notion AI rents Anthropic.) Nếu landlord ship tính năng tương tự, sản phẩm sao?

3. **5 loại high-value data** sản phẩm có cái nào?
   1. Real-Time data (vd: meeting transcripts đang diễn ra)
   2. User-Specific data (vd: codebase của user)
   3. Domain-Specific data (vd: legal databases)
   4. Human-Judgment data (vd: thumbs up/down từ user)
   5. Reinforcement data (vd: feedback loops sửa output)

4. **Marginal Value Test**: "Sản phẩm có data tạo ra marginal value beyond standard AI training sets không?" Nếu không, data không phải moat.

5. **Spark vs Loop vs System**: sản phẩm đang ở giai đoạn nào?
   - Spark: lợi thế tạm thời (novelty, channel disruption, capability gap)
   - Loop: vòng lặp compounding (viral / content / paid)
   - System: nhiều loops củng cố lẫn nhau

> **Cảnh báo**: với hầu hết sản phẩm AI mới, câu trả lời thường là "SPARK". Đừng tự dối mình. Spark vẫn ok — chỉ cần biết để build loop tiếp theo.

---

## Prompt chính (paste sau context + log + niche evaluation)

```text
Bạn là VC analyst chuyên về AI defensibility. Dựa trên BỐI CẢNH và TRẢI NGHIỆM nhóm tôi với sản phẩm [TÊN],
giúp nhóm tôi kiểm tra MOAT của sản phẩm theo Lens 4 — Defensibility + AI Moat.

PHẦN 1 — 5 MISCONCEPTIONS CHECK

Với mỗi misconception, đánh giá sản phẩm:

1. "Speed is the only moat" — Sản phẩm này có chỉ dựa vào speed (đi trước thị trường) không?
   - Ví dụ Hopin: nhanh nhất đạt $7.75B valuation, nhưng không giữ được.
   - Sản phẩm này có nguy cơ Hopin-style không?

2. "Distribution is the only moat" — Sản phẩm dựa vào kênh phân phối nào?
   - Có rủi ro khi distribution channel bị block (vd: App Store policy change)?
   - Có "next layer" beyond distribution không?

3. "Data is the moat" — Sản phẩm có data thật là moat, hay chỉ "có nhiều data"?
   - 5 loại high-value data: sản phẩm có loại nào?
     1. Real-Time data: [có/không + ví dụ cụ thể]
     2. User-Specific data: [...]
     3. Domain-Specific data: [...]
     4. Human-Judgment data: [...]
     5. Reinforcement data: [...]
   - Marginal Value Test: data này có tạo ra giá trị vượt qua standard training set không?

4. "Moats are permanent" — Sản phẩm có nghĩ moat của mình permanent không?
   - Time-bound bridge concept: mọi moat có hạn. Sản phẩm đang build "next layer" gì?

5. "AI makes old moats obsolete" — Sản phẩm có dùng old moats (brand, network effects, switching costs) kết hợp với AI không?
   - Hay chỉ dựa vào "AI moat" mới?

PHẦN 2 — RENTED LAND TEST

"Sản phẩm xây trên RENTED LAND nào?"

Các loại rented land phổ biến trong AI products:
- API providers: OpenAI, Anthropic, Google AI, Cohere
- Platform: VS Code, Chrome extensions, Slack apps, Notion blocks
- Distribution: App Store, Google Play, Web browsers
- Cloud: AWS, GCP, Azure (chi phí inference)

Đánh giá:
- Sản phẩm đang rent từ những "landlord" nào?
- Nếu landlord SHIP tính năng tương tự, sản phẩm sao? (vd: ChatGPT thêm document chat = PDF-chat startups chết hết.)
- Cases tương tự đã xảy ra: PDF-chat (ChatGPT Canvas absorbed), AI writing wrappers (ChatGPT killed dozens).

Verdict Rented Land Risk: HIGH / MEDIUM / LOW.

PHẦN 3 — AI NETWORK EFFECT FLYWHEEL

Audience → Data → Better AI → More Audience → (back to top)

Sản phẩm có flywheel này không?
- Audience growing: có / không / tăng nhưng chậm.
- Data từ user growing: có / không / chỉ feedback thumbs up/down.
- Better AI từ data: có / không / dùng model bên thứ 3 không cải thiện được.

Đánh giá vòng lặp đang vận hành hay không?
Verdict Flywheel: ACTIVE / PARTIAL / NONE.

PHẦN 4 — SPARK → LOOP → SYSTEM

SPARK (lợi thế tạm thời):
- Sản phẩm có Spark gì? Novelty? Channel? Capability?
- Vd: Cursor Spark = lập trình AI tốt nhất tại thời điểm đó.
- Spark này sẽ kết thúc khi nào?

LOOP (compounding mechanism):
- Sản phẩm có loop nào không?
- Viral loop (vd: WhatsApp invite friends)? Content loop (vd: Pinterest user-generated content)?
  Paid loop (vd: Hims paid acquisition)?
- Loop có amplification factor > 1 không?

SYSTEM (multiple loops reinforce each other):
- Có > 1 loop hoạt động đồng thời không?
- Loops có củng cố nhau không?

Vd Clay (B2B data enrichment):
- Spark: partnerships (GTM community seeding)
- Loop 1: Workflow Showcase (users share workflows → others copy)
- Loop 2: AI Content (AI generates content → SEO → new users)
- Loop 3: Template Network (templates shared → reduce onboarding)
- 3 loops = SYSTEM.

Sản phẩm này: SPARK only / SPARK + 1 LOOP / SYSTEM?

PHẦN 5 — VERDICT

Defensibility Score: STRONG / MEDIUM / WEAK.

Lý do:
- Strongest defensibility signal: [...]
- Weakest defensibility signal: [...]
- Biggest threat (12 tháng): [...]
- Biggest threat (3 năm): [...]

NEXT LAYER recommendation:
"Sản phẩm cần xây tầng phòng thủ tiếp theo gì để không bị thâu tóm?"
- Đề xuất 2-3 next layers cụ thể.

PHẢN BIỆN:
- Có optimism bias không? (VC thường thấy sản phẩm tốt hơn thực tế.)
- 80-95% AI wrappers never generate meaningful revenue — sản phẩm này có rơi vào nhóm này không?
- Cursor case: $0 → $2B ARR nhanh nhất lịch sử B2B, NHƯNG rented land — sản phẩm tôi nhỏ hơn Cursor có khá hơn không?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI quá optimistic về moat

```text
Đánh giá moat của bạn nghe quá lạc quan — như sản phẩm pitch deck.

Đẩy CRITICAL hơn:
- Phần 1 Misconception 3 (Data is moat): bạn nói "có data" — nhưng marginal value test thì sao?
  Nếu OpenAI/Anthropic có training data lớn hơn 100x, data của sản phẩm này có thực sự khác biệt?
- Phần 2 Rented Land: bạn nói "moderate risk" — nhưng nếu OpenAI ship tính năng tương tự,
  sản phẩm có gì keep user lại?
- Phần 4 Spark/Loop/System: bạn nói "có 1 loop" — loop này có amplification factor > 1 không?
  Vd: user A vào, có generate thêm > 1 user mới không?

Viết lại với góc nhìn skeptical — như VC từ chối invest vì moat yếu.
```

### Khi muốn so sánh với Cursor case

```text
Lecture đã đưa Cursor case:
- $0 → $2B ARR trong 3 năm (fastest B2B ever)
- > 1M DAU, over half of Fortune 500 dùng
- NHƯNG: rented land trên VS Code + OpenAI/Anthropic APIs
- Câu hỏi: "Is Cursor's speed a bridge or a moat?"

So sánh sản phẩm [TÊN] với Cursor:
| Yếu tố | Cursor | Sản phẩm [TÊN] |
|---|---|---|
| Speed advantage | Yes — fast UX | ? |
| Distribution | Word of mouth, paid ads | ? |
| Data flywheel | Yes — codebase indexing | ? |
| Rented land | VS Code + OpenAI/Anthropic | ? |
| Network effect | Limited | ? |
| Next layer plan | Data flywheel từ editing patterns | ? |

Verdict: sản phẩm [TÊN] CÓ DEFENSIBILITY MẠNH HƠN HAY YẾU HƠN Cursor?
```

### Khi không có data về moat

```text
Tôi không có data công khai về sản phẩm này (ARR, MAU, retention).
Đánh giá moat dựa trên gì?

Sử dụng PROXY indicators:
1. Pricing: nếu sản phẩm tự tin với pricing cao ($50+/tháng), có thể có moat (vd: CoCounsel).
   Nếu pricing thấp ($10/tháng), có thể đang race-to-bottom.
2. Tone of marketing: nếu pitch "fastest AI", có thể chỉ có Spark.
   Nếu pitch "proprietary data" hoặc "network effect", có moat thật hơn.
3. Hiring profile: tìm LinkedIn nhân sự sản phẩm. Có data scientists / ML engineers không?
   Hay chỉ application engineers gọi API?
4. Open source vs proprietary: model có open source không? Nếu yes, moat phải ở data + UX.
5. Customer testimonials: customers là enterprise (B2B, churn thấp) hay consumer (B2C, churn cao)?

Đánh giá moat của sản phẩm dựa trên 5 proxy này.
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **5 misconceptions check**: Đã rà cả 5 misconceptions chưa?
2. **Rented land check**: Có nhận dạng được rented land cụ thể không (vd: tên model AI, platform)?
3. **5 data types check**: Đã đánh giá cả 5 loại high-value data?
4. **Spark/Loop/System check**: Đã xác định giai đoạn rõ ràng? Loop có amplification factor cụ thể?
5. **Skeptical voice check**: Verdict có lý do MẠNH không? Hay chỉ "có vẻ tốt"?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Cursor có moat tốt vì là IDE phổ biến cho developer. Có $2B ARR là minh chứng."

Vấn đề: confused "có doanh thu lớn" = "có moat". Doanh thu không phải moat.

### Tốt

> **Moat Check — Cursor**
>
> **PHẦN 1 — 5 Misconceptions**
>
> 1. Speed moat: Cursor có Spark từ speed (đi trước Copilot về UX), NHƯNG speed không phải moat dài hạn. Risk: Copilot Workspace đã release, đang catch up.
>
> 2. Distribution moat: Cursor có distribution qua word-of-mouth (developers love it). NHƯNG nếu Microsoft tweak VS Code (vốn là platform), Cursor có thể mất user.
>
> 3. Data moat:
>    - Real-Time: PARTIAL — có index codebase user đang edit.
>    - User-Specific: STRONG — codebase context per user.
>    - Domain-Specific: WEAK — không có legal/medical data riêng.
>    - Human-Judgment: PARTIAL — có Accept/Reject suggestion.
>    - Reinforcement: WEAK — không thấy feedback loop public.
>    - Marginal Value Test: codebase user-specific = có giá trị nếu user dùng dài. NHƯNG OpenAI/Anthropic cũng có thể có context window đủ lớn để absorb.
>
> 4. Moats permanent: Cursor đang build "next layer" — Custom Agent (Composer), thuộc về Cursor không phải OpenAI. Đây có thể là moat tương lai.
>
> 5. AI makes old moats obsolete: Cursor combine speed + UX (old craft) + AI = old craft + new tech. Hợp lý.
>
> **PHẦN 2 — Rented Land Test**
>
> Cursor rents:
>
> - VS Code (Microsoft owns) — risk: Microsoft can tweak terms
> - OpenAI API + Anthropic API — risk: APIs change pricing, performance
> - Cloud (AWS/GCP) — standard
>
> Verdict Rented Land Risk: HIGH (multiple landlords, all have competing products).
>
> **PHẦN 3 — AI Network Effect Flywheel**
>
> - Audience: growing (1M+ DAU).
> - Data from users: SOME (Accept/Reject signals).
> - Better AI from data: PARTIAL (Cursor có custom Apply model, nhưng base model vẫn OpenAI/Anthropic).
>
> Flywheel status: PARTIAL — đang phát triển nhưng chưa thực sự "data → better AI" loop mạnh.
>
> **PHẦN 4 — Spark/Loop/System**
>
> - Spark: UX vượt trội (Cmd+K, Composer) tại thời điểm Copilot không có.
> - Loop: word-of-mouth viral trong developer community (1 dev trong team dùng → cả team dùng).
> - System: chỉ có 1 loop chính. Composer là next bet, nhưng chưa qualified là system.
>
> Status: SPARK + 1 LOOP (chưa đến SYSTEM).
>
> **PHẦN 5 — Verdict**
>
> Defensibility Score: **MEDIUM-WEAK**.
>
> - Strongest signal: UX moat (Cmd+K + Composer là Cursor-original).
> - Weakest signal: Rented land trên VS Code + OpenAI = double dependency.
> - Threat 12 tháng: GitHub Copilot Workspace, catch up UX.
> - Threat 3 năm: Microsoft/Anthropic có thể build IDE riêng, tích hợp model + UX.
>
> Next layer recommendations:
>
> 1. Build proprietary data flywheel: edit patterns of 1M+ devs → train Apply model better.
> 2. Build enterprise B2B (Cursor for Teams) với data isolation = lock-in.
> 3. Acquire foundation model team hoặc partner độc quyền (vd: với Anthropic specifically).

Khác biệt: rà 5 misconceptions, 5 data types, 3 stages, có next layer recommendations cụ thể.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Tin "có user lớn" = "có moat" | Phân biệt audience growth vs defensibility |
| Bỏ qua rented land | Liệt kê rõ rent từ ai (model, platform, distribution) |
| Đánh giá 1 loại data | Rà cả 5 loại high-value data |
| Stop ở Spark | Đẩy đến Loop và System |
| Không đề xuất next layer | Bắt AI đưa 2-3 next layer recommendations cụ thể |
| Mặc nhiên revenue = moat | Cursor $2B ARR vẫn có rented land risk |

---

## Format save vào slide deck mục S5

```markdown
### Lens 4 — Defensibility + AI Moat (Sản phẩm A)

**5 Misconceptions Check**:
1. Speed: [...]
2. Distribution: [...]
3. Data (5 types):
   - Real-Time: [...]
   - User-Specific: [...]
   - Domain-Specific: [...]
   - Human-Judgment: [...]
   - Reinforcement: [...]
4. Permanent: [...]
5. Old moats: [...]

**Rented Land Risk**: HIGH / MEDIUM / LOW
- Landlords: [...]

**Flywheel Status**: ACTIVE / PARTIAL / NONE

**Spark → Loop → System**: [position]
- Spark: [...]
- Loop(s): [...]
- System: [Yes / Partial / No]

**Verdict**: STRONG / MEDIUM / WEAK
- Strongest signal: [...]
- Weakest signal: [...]
- Threat 12 tháng: [...]
- Next layer recommendations:
  1. [...]
  2. [...]
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi check moat, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **VC investor view**: Nếu là VC đang quyết định invest $10M vào sản phẩm này,
   moat hiện tại có đủ để justify không? Hay phải đợi sản phẩm xây thêm next layer?

2. **Acquisition target**: Nếu Microsoft / Google / OpenAI muốn acquire sản phẩm này,
   họ sẽ pay bao nhiêu? Lý do? (Hint: nếu chỉ pay vì rev, không phải moat — chỉ pay vì
   strategic value mới là moat thật.)

3. **3-year survival**: Trong 3 năm, sản phẩm có 4 kết quả có thể:
   (a) Trở thành leader trong niche.
   (b) Bị absorbed bởi platform (ChatGPT, Google).
   (c) Pivot sang B2B với data moat.
   (d) Trở thành commodity, race to bottom.
   Khả năng nào cao nhất? Lý do?

Trả lời 3 câu này để có góc nhìn dài hạn.
```
