# Prompt tham khảo 7 — So sánh 2 sản phẩm AI

**Dùng khi**: nhóm đã thử cả 2 sản phẩm (Lab 2 Phase 2 đã xong), cần SO SÁNH có cấu trúc trước khi viết slide deck.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S1 (Product Moment) + mục S2 (Workflow). Bảng so sánh có thể lưu vào folder freestyle (`02-product-comparison/comparison-table.md`) nếu nhóm muốn giữ lại.
**Thời gian**: 5-10 phút

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

So sánh tốt = so sánh **cùng tiêu chí** + **cùng nhiệm vụ**. Nếu nhóm so 2 sản phẩm với 2 nhiệm vụ khác nhau → so sánh vô nghĩa.

1. **Nhiệm vụ chung** đã thực sự CHUNG chưa? Cả 2 sản phẩm có làm cùng 1 câu prompt không?
2. **Bằng chứng song song** đã đủ chưa? Có ảnh entry / input / output cho cả 2 sản phẩm chưa?
3. **Tiêu chí so sánh** đã thống nhất chưa? (Tốc độ? Chính xác? Dẫn nguồn? Tiếng Việt? Giao diện?)
4. **Yếu tố bias**: nhóm có quen 1 sản phẩm hơn không? Quen rồi có thể đánh giá cao hơn — coi chừng.
5. **Khía cạnh chưa so sánh**: ngoài tiêu chí cơ bản, có khía cạnh nào nhóm chưa nghĩ tới? (Pricing? Onboarding? Tài liệu?)

> **Cảnh báo**: KHÔNG nên dùng prompt này nếu chưa hoàn thành Phase 2 (thử nghiệm). Phải có ảnh + observation trước, mới so sánh được.

---

## Prompt chính (paste sau bối cảnh nhóm + log ảnh chụp)

```text
Bạn là product analyst chuyên về so sánh AI products. Dựa trên BỐI CẢNH ở trên (ngành, 2 sản phẩm, nhiệm vụ chung)
và LOG nhóm tôi đã thử nghiệm (observation + ảnh chụp), giúp nhóm tôi so sánh 2 sản phẩm
một cách HỆ THỐNG để chuẩn bị cho slide deck.

NHIỆM VỤ CHUNG đã test:
[paste nhiệm vụ chung từ group-members.md]

CÂU PROMPT đã dùng:
[paste prompt chính xác đã dùng cho cả 2 sản phẩm]

YÊU CẦU SO SÁNH 8 CHIỀU:

CHIỀU 1 — INPUT (đầu vào)
- Cả 2 sản phẩm có HIỂU câu prompt như nhau không?
- Có cần điều chỉnh prompt cho 1 sản phẩm khác sản phẩm kia không?
- Verdict: 2 sản phẩm tương đương / Sản phẩm A hiểu tốt hơn / Sản phẩm B hiểu tốt hơn.

CHIỀU 2 — OUTPUT QUALITY (chất lượng kết quả)
- Output dài/ngắn/vừa cho cả 2?
- Output có đầy đủ thông tin không?
- Output có chính xác không (kiểm tra với knowledge có sẵn)?
- Output có bịa thông tin không (hallucination)?
- Verdict: A tốt hơn / B tốt hơn / Tương đương / Cả hai đều có vấn đề.

CHIỀU 3 — CITATION / SOURCE (dẫn nguồn)
- Có dẫn nguồn không?
- Nguồn có click được không?
- Nội dung nguồn có khớp với câu trả lời không?
- Verdict: ...

CHIỀU 4 — SPEED (tốc độ)
- A: ___ giây
- B: ___ giây
- Chênh lệch có ý nghĩa không (1s khác 10s)?
- Verdict: ...

CHIỀU 5 — UI / INTERACTION (giao diện)
- Sản phẩm nào dễ dùng hơn?
- Sản phẩm nào có giao diện chuyên biệt (không chỉ chat box)?
- Sản phẩm nào có context-aware UI (vd: bảng so sánh động của Perplexity)?
- Verdict: ...

CHIỀU 6 — TIẾNG VIỆT
- Cả 2 sản phẩm trả lời tiếng Việt tự nhiên không?
- Có dịch máy móc (vd: "Hi there" → "Chào đó")?
- Có hiểu nuance VN (vd: "Vâng ạ" không phải agree)?
- Verdict: ...

CHIỀU 7 — PRICING / GIỚI HẠN
- Gói A: $___ / tháng. Gói B: $___ / tháng.
- Quota / limit khác nhau như thế nào?
- Có "paywall friction" trong khi test không?
- Verdict: sản phẩm nào value-for-money tốt hơn cho use case này?

CHIỀU 8 — TỔNG CẢM NHẬN
- Nhóm thấy sản phẩm nào "đáng dùng tiếp" cho nhiệm vụ này?
- Nếu phải trả tiền $20/tháng cho 1 sản phẩm, nhóm chọn nào? Lý do?
- Nếu cùng giá miễn phí, nhóm dùng nào nhiều hơn? Lý do?

BẢNG SO SÁNH:

Lập bảng 8 hàng × 4 cột:
| Chiều | Sản phẩm A | Sản phẩm B | Sản phẩm thắng |
|---|---|---|---|
| ... | ... | ... | ... |

NHẬN XÉT TỔNG THỂ (3-5 câu):
- Sản phẩm nào tổng thể thắng?
- Lý do chính (1-2 câu)?
- Sản phẩm nào phù hợp cho persona nào? (Vd: A cho expert, B cho casual?)

PHẢN BIỆN:
- Có bias nào trong so sánh? (Vd: nhóm quen A hơn B?)
- Có tiêu chí quan trọng mà nhóm chưa test không?
- Trong 12 tháng, sản phẩm nào nhóm dự đoán cải thiện nhanh hơn? Lý do?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi so sánh chung chung "tốt hơn"

```text
Đánh giá của bạn dùng "tốt hơn" mà không có thước đo cụ thể.

Đẩy CHI TIẾT hơn:
- Chiều 2 (Output Quality): "tốt hơn" đo bằng gì?
  - Số câu chính xác trong output (vd: A đưa 5/5 đúng, B đưa 4/5)?
  - Độ dài (vd: A 200 từ, B 50 từ — A có khả năng đầy đủ hơn)?
  - Có/không có hallucination (vd: A có 0 hallucination, B có 1)?
- Chiều 4 (Speed): 2 giây vs 3 giây không có nghĩa B tệ. 2 giây vs 30 giây mới có nghĩa.

Mỗi chiều cần thước đo cụ thể. Viết lại bảng so sánh với số liệu cụ thể.
```

### Khi muốn áp dụng frameworks lecture

```text
So sánh hiện tại nói "sản phẩm tốt hơn" — nhưng chưa áp dụng frameworks lecture.

Áp dụng:
1. 7 Customer Expectation Shifts — sản phẩm nào đáp ứng shift nào tốt hơn?
2. Niche Down (Lens 2) — sản phẩm nào có niche mạnh hơn?
3. AI Feature Map (Lens 3) — sản phẩm nào ở SWEET SPOT hơn?
4. Defensibility (Lens 4) — sản phẩm nào có moat mạnh hơn?

Sau khi so sánh, có thể tóm tắt:
"Sản phẩm A mạnh ở Shift X, Niche Y, AI Feature Z, Moat W.
Sản phẩm B mạnh ở Shift M, Niche N, ..."

Đây là so sánh có cấu trúc theo lecture framework.
```

### Khi muốn nói về use case khác nhau

```text
Trong so sánh, có lúc sản phẩm A tốt hơn cho 1 use case, B tốt hơn cho use case khác.

Phân tích "use case fit":
- Sản phẩm A best fit cho use case: [...]
  - Vì sao: [...]
- Sản phẩm B best fit cho use case: [...]
  - Vì sao: [...]
- Use case nhóm tôi test có "best fit" với sản phẩm nào hơn?

Đây là cách so sánh COMMERCIAL — không có "winner tuyệt đối", chỉ có "winner cho use case này".
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **8 chiều check**: Đã so sánh đủ 8 chiều chưa?
2. **Bằng chứng check**: Mỗi chiều có ảnh chụp / observation cụ thể không?
3. **Bias check**: Có bias nào (nhóm quen 1 sản phẩm, sản phẩm nổi tiếng hơn)?
4. **Use case fit check**: Có nhận ra "winner phụ thuộc use case" không?
5. **Verdict check**: Verdict cuối có thuyết phục, có lý do mạnh không?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Perplexity tốt hơn ChatGPT vì có nguồn. Tốc độ tương đương. UI Perplexity đẹp hơn."

Vấn đề: không có số cụ thể, không có ảnh chụp, không xét use case.

### Tốt

> **So sánh: Perplexity vs ChatGPT — Nhiệm vụ "Tìm hiểu NĐ 13/2023 VN bảo vệ dữ liệu cá nhân"**
>
> | Chiều | Perplexity | ChatGPT (Search) | Thắng |
> |---|---|---|---|
> | 1. Input hiểu prompt | Hiểu đúng | Hiểu đúng | Tương đương |
> | 2. Output quality | 350 từ, 6 điểm cụ thể, 1 ý lệch | 200 từ, 4 điểm chung, 0 ý lệch | Tương đương (A đầy đủ hơn, B chính xác hơn) |
> | 3. Citation | 6 nguồn click được, 5/6 có thật | 4 nguồn dẫn được, 4/4 có thật | ChatGPT (citation chính xác hơn) |
> | 4. Speed | 4s | 9s | Perplexity |
> | 5. UI | Cards + summary + sources side bar | Plain text + sources at end | Perplexity (structured UI) |
> | 6. Tiếng Việt | Tự nhiên | Hơi máy móc ("Theo Điều này thì...") | Perplexity |
> | 7. Pricing | $20/tháng Pro | $20/tháng Plus | Tương đương |
> | 8. Tổng cảm nhận | "Đọc nhanh, tin tưởng vừa" | "Đầy đủ, tin tưởng cao" | Phụ thuộc use case |
>
> **Nhận xét tổng thể**:
>
> Cho nhiệm vụ "tìm hiểu nhanh về quy định luật VN", Perplexity TỐT HƠN — UI structured giúp đọc nhanh, dẫn nguồn dễ click. NHƯNG ChatGPT chính xác hơn — 4/4 nguồn click được vs 5/6 của Perplexity.
>
> Cho **chuyên gia luật** đang cần research sâu, ChatGPT phù hợp hơn (chính xác cao, dù chậm).
> Cho **founder startup** đang scan nhanh, Perplexity phù hợp hơn (nhanh, structured).
>
> **Phản biện**: nhóm tôi quen Perplexity hơn — có thể có bias. Nên test cùng câu hỏi cho Gemini cũng để có baseline.

Khác biệt: bảng có số cụ thể, có "phụ thuộc use case", có persona fit, có phản biện bias.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| So sánh "tốt hơn" mơ hồ | Có số liệu cho mỗi chiều (giây, % chính xác, số nguồn) |
| Bỏ qua use case fit | Phân tích "best fit per use case" |
| Quên persona | Đánh giá sản phẩm nào cho expert vs casual user |
| Tin sản phẩm tốt vì nổi tiếng | Test cụ thể với nhiệm vụ chung |
| Stop ở verdict 1 sản phẩm | Nhận xét "trong 12 tháng, ai cải thiện nhanh hơn?" |

---

## Format save vào slide deck mục S2 + S5

```markdown
### Mục S2 — Workflow Evidence

So sánh 8 chiều:

| Chiều | Sản phẩm A | Sản phẩm B | Thắng |
|---|---|---|---|
| ... | ... | ... | ... |

### Mục S5 — Product Judgment

**Verdict so sánh**:
- Sản phẩm thắng tổng thể: [A / B / Phụ thuộc use case]
- Best fit per use case:
  - A best for: [...]
  - B best for: [...]
- Trong 12 tháng dự đoán: [...]
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi so sánh, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **Hidden trade-off**: Sản phẩm "thắng" có trade-off nào nhóm chưa thấy không?
   (Vd: Perplexity thắng UI nhưng có thể bị limit Pro Search 5 lần/4h trên free tier.)

2. **Time-bound**: So sánh này áp dụng cho thời điểm test (5/2026). Trong 6 tháng,
   sản phẩm "thua" có thể catch up không? Lý do?

3. **Different segment**: Nhóm test cho persona nào (sinh viên VN? professional? expert)?
   Cho persona khác, verdict có giữ nguyên không?

Trả lời 3 câu này để có so sánh khôn hơn.
```
