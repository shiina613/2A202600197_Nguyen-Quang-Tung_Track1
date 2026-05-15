# Prompt tham khảo 10 — Tổng hợp Product Judgment cuối (mục S5)

**Dùng khi**: nhóm đã chạy qua Lens 1-4 + Spark/Loop/System (đã dùng prompts 03-06 + 09), giờ cần TỔNG HỢP thành verdict cuối + bằng chứng tiếp theo cho mục S5 của slide deck.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S5.1 (Verdict) + S5.6 (Niche + AI Feature Map) + S5.8 (Liên hệ Lab 1). Đầu ra "3 chuẩn" và "Next evidence" bổ sung vào S5.1 verdict notes hoặc Phụ lục slide deck.
**Thời gian**: 8-10 phút

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

Đây là prompt SYNTHESIZE — không research mới. Nhóm cần đã có sẵn:

1. **Lens 2 đánh giá niche** (từ prompt 03): niche của A, B là STRONG/MEDIUM/WEAK?
2. **Lens 3 đánh giá AI Feature Map** (từ prompts 04+05): User Value / Alignment / Business Value của A, B?
3. **Lens 4 đánh giá moat** (từ prompt 06): rented land, 5 data types, Spark/Loop/System của A, B?
4. **3 chuẩn cuối**: đáng tin (trust) — đáng dùng (use) — đáng build (build).
5. **Liên hệ Chegg case** (Lab 1): có rủi ro Chegg-style không?

> **Cảnh báo**: nếu chưa hoàn thành prompts 03, 04, 05, 06, 09 → KHÔNG chạy prompt 10. Sẽ thiếu input cho synthesize.

---

## Prompt chính (paste sau toàn bộ analyses)

```text
Bạn là senior AI product analyst. Dựa trên TOÀN BỘ phân tích Lens 1-4 + Spark/Loop/System
mà nhóm tôi đã làm ở các prompts trước (03-06, 09), giúp nhóm tôi TỔNG HỢP thành Product Judgment
cuối cho mục S5 của slide deck.

INPUT NHÓM TÔI CÓ:

Sản phẩm A:
- Lens 2 (Niche Down): STRENGTH = [paste verdict]
- Lens 3 (AI Feature Map): User Value = ___, Alignment = ___, Business Value = ___
- Lens 4 (Defensibility): Rented land = ___, Moat strength = ___
- Spark/Loop/System: Position = ___

Sản phẩm B:
[tương tự]

YÊU CẦU TỔNG HỢP:

PHẦN 1 — VERDICT TÓM TẮT (S5.1)

Sản phẩm thắng: [A / B / Cả hai cùng tốt / Cả hai cùng yếu / Phụ thuộc use case]

Lý do (1-2 câu, mạnh nhất):
[...]

PHẦN 2 — ĐÁNH GIÁ THEO 3 CHUẨN "ĐÁNG TIN, ĐÁNG DÙNG, ĐÁNG BUILD" (bổ sung cho S5.1 Verdict)

Bảng:
| Tiêu chí | Sản phẩm A | Sản phẩm B |
|---|---|---|
| Đáng tin (trust): dẫn nguồn, kiểm soát, xử lý lỗi | HIGH/MED/LOW | HIGH/MED/LOW |
| Đáng dùng (use): giải nhiệm vụ tốt hơn phương án cũ | HIGH/MED/LOW | HIGH/MED/LOW |
| Đáng build (build): có moat, có loop, có system | HIGH/MED/LOW | HIGH/MED/LOW |

Với mỗi ô, có lý do (1 câu).

PHẦN 3 — BẰNG CHỨNG TIẾP THEO (bổ sung — đặt vào Phụ lục slide deck nếu còn slot)

Nếu nhóm có thêm 1 ngày test (24h), sẽ thu thập bằng chứng gì để CỦNG CỐ đánh giá?

3-5 bằng chứng cụ thể:
1. [...]: vì sao cần
2. [...]: vì sao cần
3. [...]: vì sao cần

Lưu ý: bằng chứng phải CỤ THỂ — không "thêm thông tin" mà "chụp pricing page B, kiểm tra retention 30 ngày, đọc 2 customer testimonials".

PHẦN 4 — LIÊN HỆ VỚI LAB 1 CASE (S5.8)

So sánh 2 sản phẩm với case bạn đã phân tích ở Lab 1 (case do bạn tự chọn):

Sản phẩm A có rủi ro disruption-style tương tự không?
- Fit Collapse risk: HIGH / MEDIUM / LOW + lý do
- Big Squeeze (3 phía): có / không + chi tiết
- 7 Customer Expectation Shifts có dịch chuyển dưới chân không?

Sản phẩm B tương tự.

Sản phẩm nào học được bài học từ Lab 1 case? (Ra mắt AI sớm? Có niche rõ? Không phụ thuộc rented land?)

PHẦN 5 — TAKEAWAY HỌC TỪ THỬ NGHIỆM

3 điều nhóm rút ra sau khi thử nghiệm:

1. Về sản phẩm A: [...]
2. Về sản phẩm B: [...]
3. Về ngành nói chung: [...]

PHẦN 6 — DECISION CHO USER GIẢ ĐỊNH

Nếu nhóm là USER PERSONA cụ thể (vd: founder startup, lập trình viên junior, sinh viên,
content creator), chọn sản phẩm nào trong 12 tháng tới?

- Persona 1: [...] → chọn [A/B] vì [...]
- Persona 2: [...] → chọn [A/B] vì [...]
- Persona 3: [...] → chọn [A/B] vì [...]

PHẢN BIỆN:
- Verdict có thiên kiến không?
- Có khía cạnh nào nhóm chưa đánh giá đủ không?
- Trong 12 tháng, verdict có thay đổi không? Lý do?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi verdict thiếu lý do

```text
Verdict của bạn "Sản phẩm A thắng" — nhưng lý do mơ hồ.

Đẩy CỤ THỂ hơn:
- Lý do CHÍNH (1 câu, mạnh nhất): cụ thể, có bằng chứng từ Lens nào?
- Lý do PHỤ (2-3 câu): các yếu tố khác.
- COUNTER-EVIDENCE: có bằng chứng nào nghiêng về B không? Tại sao nhóm tôi vẫn chọn A?

Ví dụ tốt:
"Sản phẩm A thắng — lý do chính: niche STRONG (Lens 2 PASS 4/5 Q's) + User Alignment HIGH (Lens 3, citation và control PASS).
Lý do phụ: UX flow tốt hơn (3 click vs 7 click), tiếng Việt tự nhiên hơn.
Counter-evidence: Pricing B tốt hơn ($10 vs $20). Nhưng pricing có thể cải thiện sau, niche khó cải thiện."
```

### Khi "đáng tin/dùng/build" tất cả HIGH

```text
Bảng 3 chuẩn của bạn có A=HIGH/HIGH/HIGH, B=HIGH/HIGH/HIGH. Đáng nghi.

Đẩy CRITICAL:
- "Đáng tin" HIGH: có chắc sản phẩm đáng tin với HỌC VIÊN MỚI không? Hay chỉ với expert?
- "Đáng dùng" HIGH: better than phương án cũ — phương án cũ là gì? Cụ thể.
- "Đáng build" HIGH: có moat thực sự không? Hay chỉ đang ở Spark phase?

Nếu có dấu hiệu yếu, đổi HIGH → MEDIUM hoặc LOW.
Cận thận với "free lunch" — sản phẩm tốt mọi mặt thường có hidden trade-off.
```

### Khi bằng chứng tiếp theo quá chung chung

```text
"Cần thêm thông tin về sản phẩm" — đây không phải bằng chứng cụ thể.

Đẩy CỤ THỂ:
- "Chụp pricing page enterprise của A" — không phải "tìm hiểu pricing".
- "Đọc 2 customer testimonials trên G2" — không phải "đọc reviews".
- "Test retention bằng cách quay lại sau 7 ngày" — không phải "test thêm".
- "Tìm ARR công khai trong 10-K (nếu public) hoặc Crunchbase" — không phải "tìm doanh thu".

Mỗi bằng chứng = 1 action cụ thể trong 24h, đo được kết quả.
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **Verdict check**: Có lý do CHÍNH cụ thể không? Có lý do PHỤ + counter-evidence?
2. **3 chuẩn check**: HIGH/MED/LOW có thuyết phục? Có dấu hiệu "free lunch" cần điều chỉnh không?
3. **Next evidence check**: 3-5 bằng chứng tiếp theo có CỤ THỂ và ACTIONABLE trong 24h không?
4. **Chegg link check**: Đã liên hệ với Chegg case (Lab 1) chưa?
5. **Persona decision check**: Có quyết định cụ thể cho 2-3 personas khác nhau?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Cursor thắng vì có IDE tốt. Đáng tin HIGH, đáng dùng HIGH, đáng build HIGH. Bằng chứng tiếp: tìm hiểu thêm."

Vấn đề: lý do mơ hồ, "free lunch" suspicion, bằng chứng không actionable.

### Tốt

> **S5.1 — Verdict tóm tắt**
>
> Sản phẩm thắng: **Cursor** cho persona "developer full-time". GitHub Copilot cho persona "developer occasional".
>
> Lý do CHÍNH: Cursor's Cmd+K + Composer (Lens 3 UX Innovation PASS) + 10x productivity cho focused coding session.
>
> Lý do PHỤ: tiếng Việt tốt (Claude Sonnet underneath), pricing cùng giá Copilot $20/tháng.
>
> Counter-evidence: Cursor có rented land risk (Lens 4) trên VS Code + OpenAI/Anthropic. Microsoft có thể catch up trong 12-18 tháng.
>
> **3 chuẩn bổ sung cho S5.1 Verdict notes**:
>
> | Tiêu chí | Cursor | Copilot |
> |---|---|---|
> | Đáng tin | HIGH (citations trong Apply, diff review) | MED (auto-complete không có citation) |
> | Đáng dùng | HIGH (10x cho power user) | MED (autocomplete đủ cho occasional) |
> | Đáng build | MEDIUM (rented land risk) | HIGH (Microsoft platform + distribution) |
>
> **Next evidence (24h, đặt vào Phụ lục slide deck nếu còn slot)**:
>
> 1. Test Cursor enterprise mode — có data isolation không? (Quyết định cho team B2B.)
> 2. So sánh retention: dùng Cursor 7 ngày liên tục — có gặp bug, downtime không?
> 3. Đọc 2 testimonials trên Hacker News từ developers đã chuyển từ Copilot sang Cursor — lý do gì?
> 4. Test Copilot Workspace (multi-file edit) — có catch up Composer chưa?
>
> **S5.8 — Liên hệ Lab 1 case (ví dụ Chegg)**:
>
> Cursor risk Chegg-style: LOW.
>
> - Fit Collapse: developer workflow ổn định, không như Chegg "homework help" bị disrupted.
> - Big Squeeze: rủi ro từ Microsoft (incumbent + distribution + budget) — nhưng Cursor đã build niche power user.
> - 7 Shifts: Cursor đáp ứng Shift 1 (Do work for me — Composer) và Shift 3 (Busy work done — boilerplate).
>
> Copilot risk Chegg-style: MEDIUM.
>
> - Fit Collapse: nếu OpenAI native IDE tốt hơn, Copilot có thể bị absorb.
> - Big Squeeze: ít rủi ro vì Copilot đã ở Microsoft.
>
> **S5 — Decision per persona**:
>
> - Persona 1: "Full-time dev quan tâm tốc độ" → **Cursor** vì 10x UX.
> - Persona 2: "Occasional dev / student" → **Copilot** vì $0 cho student, plus đã có sẵn trong VS Code.
> - Persona 3: "Enterprise dev team" → **Copilot for Business** vì compliance + integration với GitHub Org.

Khác biệt: lý do cụ thể, counter-evidence, 3 chuẩn không "free lunch", next evidence actionable, persona decisions có lý do.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Verdict "A tốt hơn" mơ hồ | Lý do chính + phụ + counter-evidence |
| Tất cả 3 chuẩn HIGH | Phân biệt rõ HIGH/MED/LOW theo bằng chứng |
| Next evidence "tìm hiểu thêm" | Cụ thể: action 24h, đo được kết quả |
| Bỏ liên hệ Chegg | Liên kết Lab 1 → Lab 2 |
| Verdict 1 cho all personas | Decisions per persona |
| Quên phản biện | Có thiên kiến không, 12 tháng thay đổi không |

---

## Format save vào slide deck mục S5

```markdown
### S5.1 — Verdict tóm tắt
- Sản phẩm A: STRONG / PROMISING / WEAK / AT RISK — lý do 1 câu.
- Sản phẩm B: STRONG / PROMISING / WEAK / AT RISK — lý do 1 câu.

Bổ sung 3 chuẩn (đặt vào notes của S5.1 hoặc Phụ lục):

| Tiêu chí | A | B |
|---|---|---|
| Đáng tin | ... | ... |
| Đáng dùng | ... | ... |
| Đáng build | ... | ... |

### S5.8 — Liên hệ Lab 1 case
[...]

### Phụ lục slide deck (nếu còn slot)
Next evidence (24h):
1. [...]
2. [...]
3. [...]

Decisions per persona:
- Persona 1: ... → chọn [...] vì [...]
- Persona 2: ... → chọn [...] vì [...]
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi tổng hợp Product Judgment, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **Time-bound check**: Verdict này áp dụng cho 5/2026. Trong 12 tháng (5/2027),
   có khả năng đảo ngược không? Sản phẩm nào dự đoán cải thiện nhanh hơn?

2. **Survival worst case**: Trong 3 năm, nếu 1 trong 2 sản phẩm sẽ chết, ai có khả năng chết hơn?
   Lý do? (Hint: thường ai có rented land cao hơn + niche yếu hơn.)

3. **Personal application**: Sau Day 26, nếu nhóm tôi xây sản phẩm AI, tránh 3 lỗi gì
   từ phân tích này? (Vd: đừng chỉ dựa vào Spark, đừng để rented land risk cao, đừng skip user research.)

Trả lời 3 câu này để rút bài học cho future work.
```
