# Prompt tham khảo 4 — Áp dụng AI Feature Map vào sản phẩm

**Dùng khi**: nhóm cần đánh giá CHẤT LƯỢNG của tính năng AI trong 1 sản phẩm — không chỉ "có AI" mà AI có giá trị cho người dùng, đáng tin với người dùng, và có giá trị kinh doanh không. Áp dụng Lens 3 — AI Feature Map.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S5 — AI Feature Map (Lens 3)
**Thời gian**: 10-15 phút (cho mỗi sản phẩm)

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

AI Feature Map có 3 chiều: User Value / User Alignment / Business Value. Nhóm cần hiểu cả 3 trước khi áp dụng.

1. **User Value** (giá trị người dùng): AI giải vấn đề CỤ THỂ gì tốt hơn phần mềm cũ? Không phải "có AI" mà "AI giúp gì cụ thể".
2. **User Alignment** (sự đồng thuận): sản phẩm có dẫn nguồn? Có cho user kiểm soát kết quả? Có xử lý khi sai? Có cho phép phản hồi?
3. **Business Value** (giá trị kinh doanh): chi phí mỗi câu trả lời (token cost) là bao nhiêu? Có gói trả phí hợp lý? Tốc độ trả lời?
4. **Delegator vs Prosumer** (theo Cost-Capability-Speed Triangle): user của sản phẩm là Delegator (trả tiền nhiều cho chất lượng cao) hay Prosumer (trả ít cho tốc độ + thuận tiện)?
5. **4 vấn đề của Chat Interface** đã học: (1) Không rõ begin/end, (2) Translation work, (3) Poor context retention, (4) Isolation from tools — sản phẩm gặp những vấn đề nào?

> **Cảnh báo**: nhiều sản phẩm AI chỉ tối ưu 1 chiều của AI Feature Map. Nếu nhóm chỉ thấy User Value mà bỏ qua User Alignment + Business Value, đánh giá sẽ thiếu.

---

## Prompt chính (paste sau context + log ảnh chụp)

```text
Bạn là AI product analyst. Dựa trên BỐI CẢNH ở trên và TRẢI NGHIỆM nhóm tôi với sản phẩm [TÊN],
giúp nhóm tôi đánh giá sản phẩm theo AI Feature Map (Lens 3) — 3 chiều: User Value, User Alignment, Business Value.

CHIỀU 1 — USER VALUE
"Sản phẩm giải vấn đề CỤ THỂ gì TỐT HƠN phần mềm cũ?"

Đánh giá:
- Vấn đề cụ thể user cần giải khi dùng sản phẩm này.
- "Tốt hơn" đo bằng gì? (Tốc độ / Chính xác / Hoàn thành nhiệm vụ / Giảm thao tác)
- Phần mềm cũ (không AI) là gì? (Vd: Google search là "phần mềm cũ" cho Perplexity.)
- Sản phẩm này TỐT HƠN phần mềm cũ bao nhiêu? (Cụ thể: tiết kiệm 30% thời gian? Chính xác hơn 20%?)
- Bằng chứng: ảnh chụp từ screenshots/

Verdict User Value: HIGH / MEDIUM / LOW.

CHIỀU 2 — USER ALIGNMENT
"Sản phẩm có đáng tin, có để user kiểm soát, có xử lý lỗi tốt không?"

Đánh giá 6 tín hiệu:
1. Citation / Source: có dẫn nguồn không? Nguồn có thật không?
2. Control: user có thể sửa output, hỏi lại, làm lại không?
3. Confidence indicator: AI có hiển thị mức độ tự tin không?
4. Failure handling: khi AI sai, user xử lý thế nào?
5. Feedback: user có thể report lỗi không?
6. Handoff to human: có nút chuyển sang người thật khi cần không?

Với mỗi tín hiệu: PASS / FAIL / PARTIAL + bằng chứng cụ thể.

Verdict User Alignment: HIGH / MEDIUM / LOW.

CHIỀU 3 — BUSINESS VALUE
"Sản phẩm có chi phí hợp lý? Chất lượng đủ? Tốc độ phù hợp với mục đích?"

Đánh giá Cost-Capability-Speed Triangle:
- COST: gói giá cho user (vd $20/tháng). Token cost với product ước lượng?
- CAPABILITY: model nào dùng? GPT-4? Claude Opus? Custom fine-tuned?
- SPEED: thời gian trả lời (giây)?

Trade-off: Sản phẩm này đang ưu tiên Cost / Capability / Speed?
- High Capability + High Cost = Delegator-focused (vd: CoCounsel cho lawyer)
- High Speed + Low Cost = Prosumer-focused (vd: GitHub Copilot autocomplete)
- Balance = Hybrid (vd: ChatGPT Plus)

User của sản phẩm này là DELEGATOR hay PROSUMER? Sản phẩm có đáp ứng đúng nhu cầu đó không?

Verdict Business Value: HIGH / MEDIUM / LOW.

AI FEATURE MAP SUMMARY:
- User Value: ___
- User Alignment: ___
- Business Value: ___
- Sản phẩm có ở SWEET SPOT (cả 3 chiều cao) không? Hay yếu ở chiều nào?

UX INNOVATION CHECK (bổ sung):
4 vấn đề của Chat Interface:
1. No clear beginning or end: sản phẩm có giải quyết không?
2. Unnatural translation: user phải dịch lại vấn đề thành prompt?
3. Poor context retention: AI có nhớ context không?
4. Isolation from tools: AI tích hợp với workflow chưa, hay isolation?

3 Friction Areas (đã học):
1. Physical load: bao nhiêu click, tab, copy-paste?
2. Cognitive burden: user cần học prompt engineering?
3. Workarounds: user phải tự xử lý gì để khắc phục yếu điểm sản phẩm?

INTERFACE SPECTRUM (Digital-Native vs Human-Native):
- Digital-Native: dashboard, form, chat box.
- Human-Native: voice, gesture, natural context.
- Sản phẩm này nằm ở đâu trên spectrum?

PHẢN BIỆN:
- Trong 3 chiều, chiều nào là điểm mạnh + đáng tin cho học viên không có kinh nghiệm sâu?
- Chiều nào ÁP DỤNG ÁM ĐUI (gut feeling) trong khi đánh giá? (Vd: User Value dễ thấy, Business Value khó định lượng nếu không có dữ liệu token cost.)
- Có chiều nào AI cố ý "đánh trượt" để bảo vệ sản phẩm không?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI đánh giá quá HIGH cả 3 chiều

```text
Đánh giá của bạn cho ra HIGH ở cả 3 chiều — đáng nghi, vì rất ít sản phẩm thực sự ở SWEET SPOT.

Đẩy CRITICAL hơn:
- User Value: nếu HIGH, bằng chứng cụ thể nào? Ảnh chụp nào? Tốt hơn phần mềm cũ bao nhiêu % cụ thể?
- User Alignment: có 6 tín hiệu. Sản phẩm PASS đủ 6 không? Nếu chỉ PASS 4/6, không phải HIGH.
- Business Value: token cost cao có làm sản phẩm khó scale không? Pricing $20/tháng có sustainable không (CASE: AI Pin của Humane bán $700 nhưng break-even tháng 2/2024)?

Viết lại đánh giá với scoring thấp hơn nếu bằng chứng không đủ.
```

### Khi không có dữ liệu Business Value

```text
Phần Business Value bạn vừa đánh giá thiếu dữ liệu cụ thể về cost.

Tìm thêm thông tin công khai về sản phẩm:
- Pricing chính thức (từ trang giá): $___ / tháng
- Có gói miễn phí không? Giới hạn bao nhiêu?
- Có thông tin về model AI dùng (qua docs, blog, hoặc API pricing tham chiếu)?
- Có thông tin về ARR / MAU / DAU công khai không? (Vd: Cursor $2B ARR.)

Nếu không có, ghi "không có dữ liệu, chỉ có ước lượng" thay vì đoán bừa.
```

### Khi muốn so sánh với sản phẩm khác trong cùng ngành

```text
Đánh giá sản phẩm [A] đã xong. Bây giờ so sánh AI Feature Map của 2 sản phẩm trong cùng ngành:

Sản phẩm A: [...]
Sản phẩm B: [...]

Lập bảng so sánh 3 chiều:
| Chiều | Sản phẩm A | Sản phẩm B | Khác biệt |
|---|---|---|---|
| User Value | | | |
| User Alignment | | | |
| Business Value | | | |

Sản phẩm nào ở SWEET SPOT hơn? Sản phẩm nào yếu rõ ở chiều nào?
Lý do tại sao có sự khác biệt đó (vì target user khác? vì đầu tư khác? vì timing khác?)?
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **3 chiều check**: Đã đánh giá đầy đủ cả 3 chiều không? Không bỏ qua chiều nào?
2. **Evidence check**: Mỗi chiều có bằng chứng cụ thể không (ảnh chụp, observation, hoặc số liệu)?
3. **Delegator vs Prosumer check**: Đã xác định user type không? Nếu chưa, đánh giá Business Value sẽ lệch.
4. **4 chat problems check**: Đã rà 4 vấn đề của chat interface chưa?
5. **Sweet Spot check**: Verdict cuối có thuyết phục không? Nếu sản phẩm "ở Sweet Spot", có dấu hiệu thị trường nào (revenue, retention, user love) xác nhận?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Perplexity có AI Feature Map tốt — User Value cao, User Alignment ổn, Business Value khá."

Vấn đề: không có bằng chứng, không cụ thể, không xác định Delegator vs Prosumer.

### Tốt

> **AI Feature Map — Perplexity**
>
> **User Value: HIGH**
>
> Perplexity giải tốt vấn đề "tìm thông tin có nguồn nhanh". So với Google search (phần mềm cũ), Perplexity tiết kiệm 3-5 tab mở so sánh — user không phải tự đọc 5 link, AI tổng hợp + dẫn nguồn.
>
> Bằng chứng: ảnh `product-A-3-output.png` cho thấy Perplexity trả về 1 paragraph tổng hợp + 6 nguồn click-able. Cùng câu hỏi trên Google: 10 link rời, user phải tự đọc + tổng hợp.
>
> **User Alignment: HIGH**
>
> 6 tín hiệu:
>
> 1. Citation: PASS — mỗi câu có số [1], [2] dẫn về nguồn.
> 2. Control: PASS — có nút "Edit", "Rewrite", "Ask follow-up".
> 3. Confidence indicator: PARTIAL — không hiển thị "Tôi không chắc", nhưng có Related questions.
> 4. Failure handling: PASS — khi gặp vấn đề ngoài training, AI nói "I don't have enough information".
> 5. Feedback: PASS — có thumb up/down ở mỗi response.
> 6. Handoff to human: FAIL — không có nút chuyển sang người thật. Nhưng có thể không cần cho use case này.
>
> 5/6 PASS → HIGH.
>
> **Business Value: MEDIUM**
>
> - Cost: $20/tháng cho Pro Search. Free tier có giới hạn 5 Pro searches/4h.
> - Capability: GPT-4o + Claude Sonnet + custom Perplexity model — capability cao.
> - Speed: 3-5 giây cho câu trả lời + nguồn — vừa.
>
> User type: PROSUMER (user cần tìm nhanh, không cần expert-level depth). Perplexity đang phục vụ đúng — nhưng pricing $20/tháng = cùng giá ChatGPT Plus, có thể là vấn đề.
>
> Verdict Business Value: MEDIUM (Capability + Speed tốt, nhưng cost competitive với ChatGPT — khó scale margin).
>
> **AI Feature Map Verdict**: User Value HIGH, User Alignment HIGH, Business Value MEDIUM → SWEET SPOT 2.5/3 chiều.
>
> **UX Innovation**:
>
> - Vấn đề 1 (no clear begin/end): GIẢI QUYẾT — Related Questions guide user.
> - Vấn đề 2 (translation work): GIẢI QUYẾT MỘT PHẦN — natural language query OK.
> - Vấn đề 3 (poor context): có thread chat nhớ context trong session.
> - Vấn đề 4 (isolation): có Spaces (workspace) để tổ chức research.
>
> Interface Spectrum: chủ yếu DIGITAL-NATIVE (chat + structured cards), không Human-Native.

Khác biệt: bằng chứng cụ thể (ảnh + tính năng cụ thể), scoring có lý do, có Delegator/Prosumer analysis, có UX Innovation check.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Đánh giá "AI tốt" mơ hồ | Cụ thể 3 chiều User Value / Alignment / Business Value |
| Bỏ Business Value vì khó | Tham khảo pricing chính thức + ước lượng token cost |
| Không xác định Delegator/Prosumer | Buộc xác định user type trước khi đánh giá Business Value |
| Bỏ qua 4 chat problems | Rà cả 4 vấn đề + 3 friction areas |
| Tin AI claim HIGH không verify | Bắt AI đưa bằng chứng cụ thể cho mỗi chiều |
| Không so sánh với phần mềm cũ | Xác định "phần mềm cũ" của ngành, so sánh sản phẩm với nó |

---

## Format save vào slide deck mục S5

```markdown
### Lens 3 — AI Feature Map (Sản phẩm A)

| Chiều | Verdict | Bằng chứng |
|---|---|---|
| User Value | HIGH / MEDIUM / LOW | [...] |
| User Alignment | [...] | [...] |
| Business Value | [...] | [...] |

**Sweet Spot status**: [3/3 / 2/3 / 1/3 / 0/3]

**User Type**: DELEGATOR / PROSUMER / HYBRID

**UX Innovation**: [4 problems status]

**3 Friction Areas**: [Physical / Cognitive / Workarounds]

**Interface Spectrum**: DIGITAL-NATIVE / HUMAN-NATIVE / HYBRID
```

Lặp lại cho Sản phẩm B.

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi áp dụng AI Feature Map, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **Hidden cost**: Sản phẩm có "free tier rất hào phóng" + "Pro tier $20/tháng" — chi phí
   thực sự của free tier là gì? Cross-subsidization? VC funding? Sustainability rủi ro?

2. **Trust calibration**: User Alignment HIGH có nghĩa user TIN sản phẩm — nhưng có nghĩa
   user nên tin sản phẩm không? Sản phẩm có "trust signals" giả tạo không (vd: badge "Verified" mà thực ra không kiểm tra gì)?

3. **Capability ceiling**: Nếu sản phẩm dùng GPT-4o, capability là của OpenAI, không phải sản phẩm.
   Khi GPT-5 ra, sản phẩm có upgrade ngay không? Hay bị kẹt ở model cũ?

Trả lời 3 câu này để hiểu giới hạn của AI Feature Map.
```
