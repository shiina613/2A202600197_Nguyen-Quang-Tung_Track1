# Prompt tham khảo 2 — Vận dụng Four Fits vào case bạn chọn

**Dùng khi**: bạn đã có số liệu (file `1-research.md`), cần vận dụng Lens 1 (Customer Expectations + Four Fits + Big Squeeze) để trả lời 4 câu hỏi cốt lõi của Lab 1 (cá nhân) cho case mình tự chọn.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: `worksheet/01-bigtech-disruption/2-analysis.md`
**Thời gian**: 10-15 phút

---

## Trước khi vào prompt — 5 câu hỏi bạn tự trả lời

Phân tích tốt = phân tích có **anchor cụ thể**. Nếu bạn chỉ hỏi AI "phân tích case theo Four Fits", AI sẽ trả về bài tóm tắt khung Four Fits — không có nhận định riêng của bạn.

1. **7 shifts của Customer Expectations** (đã học ở Lens 1): bạn thấy shift nào áp dụng vào case bạn chọn rõ nhất? Tự ghi 2-3 shifts trước khi hỏi AI.
2. **Four Fits của case trước AI** (PMF / PCF / CMF / MMF): bạn hiểu mỗi Fit là gì chưa? Có thể giải thích PMF của case trong 1 câu không? Nếu chưa rõ → đọc lại slide 9 + 10 của lecture.
3. **Big Squeeze 3 phía**: bạn có ý kiến ban đầu ai là "incumbent", ai là "startup", ai là "platform" trong case bạn chọn?
4. **Số liệu mạnh nhất bạn có**: nếu phải chọn 3 số liệu để bảo vệ luận điểm "case sụp vì Fit Collapse", bạn chọn 3 số nào từ `1-research.md`?
5. **Phản biện tiềm năng**: có ai có thể nói "case sụp KHÔNG phải vì big tech AI" không? (Vd: vấn đề mô hình kinh doanh có sẵn? Scandal? Cạnh tranh khác từ trước? — đây là counter-narrative cần biết.)

> **Cảnh báo**: nếu bạn trả lời câu 5 ngắn nhất, đó là dấu hiệu bạn đang nhận định 1 chiều. Phải có counter-narrative để phản biện luận điểm chính.

---

## Prompt chính (paste sau bối cảnh ngắn + nội dung `1-research.md`)

```text
Bạn là analyst chuyên về business strategy. Dựa trên BỐI CẢNH ở trên (mã học viên, case tôi chọn,
big tech AI tạo áp lực) và SỐ LIỆU đã tìm (1-research.md), giúp tôi vận dụng khung Lens 1
(Customer Expectations + Four Fits + Big Squeeze) vào case mình chọn.

Case của tôi: [tên case]
Big tech AI tạo áp lực: [ChatGPT / Claude / Gemini / GitHub Copilot / ...]

Tôi cần trả lời 4 câu hỏi cốt lõi của Lab 1:

CÂU 1 — Trước AI, sản phẩm hoạt động dựa trên giả định gì?
- Người dùng là ai (cụ thể: vai trò, vị trí, hành vi)?
- Vấn đề người dùng cần giải?
- Giá trị sản phẩm cung cấp?
- Mô hình kinh doanh (subscription tháng, năm, trả lẻ, freemium...)?
- 3 lý do vì sao mô hình này hoạt động được nhiều năm.

CÂU 2 — Kỳ vọng người dùng đã thay đổi như thế nào? (liên hệ 7 dịch chuyển)
- Trong 7 shifts của Customer Expectations đã học, shift nào ÁP DỤNG MẠNH NHẤT vào case này?
- 7 shifts: (1) Do the work for me, (2) Custom made for me, (3) Busy work done for me,
  (4) Pay for output, (5) Expect it now, (6) Interface adapts to me, (7) Tool sees context.
- Chọn 2-3 shifts mạnh nhất. Mỗi shift, giải thích:
  - Trước: kỳ vọng cũ của người dùng với sản phẩm
  - Sau khi big tech AI ra tính năng tương tự: kỳ vọng mới
  - Bằng chứng: số liệu cụ thể từ 1-research.md

CÂU 3 — Giả định nào của sản phẩm đã không còn đúng? (dẫn số liệu cụ thể)
- Áp dụng khung Four Fits: PMF, PCF, CMF, MMF.
- Fit nào VỠ TRƯỚC TIÊN? Fit nào vỡ tiếp theo?
- Với mỗi Fit vỡ:
  - Vấn đề cụ thể là gì
  - Bằng chứng số liệu cụ thể (từ 1-research.md)
- Tốc độ Fit Collapse: từ khi big tech AI ra mắt đến khi mất 50% quy mô (doanh thu / user) mất bao lâu?

CÂU 4 — Sản phẩm có thể cứu vãn? Hay đã quá muộn? (ý kiến + lý lẽ + số liệu)
- So sánh case với đối thủ phản ứng tốt hơn trong cùng ngành.
- Big Squeeze 3 phía trên case:
  - Phía 1 (incumbent): doanh nghiệp lớn nào sao chép?
  - Phía 2 (startup): startup nào xây nhanh hơn?
  - Phía 3 (platform): AI platform nào gom user?
- Nếu case phản ứng nhanh hơn (vd 6 tháng sau big tech AI), có cứu được không?
- Mô hình nào còn khả thi cho case ngày nay (B2B? niche khác? acquire?)?

Với MỖI câu trả lời:
1. Đưa nhận định cụ thể (1-3 câu).
2. Tham chiếu ít nhất 2 số liệu từ 1-research.md (vd: "Theo S-03, user giảm từ 7.8M xuống 3.2M...").
3. Đưa phản biện: có cách nhìn nào khác không? Vd: "Nhưng cũng có thể nói case đã có vấn đề từ trước...".

YÊU CẦU PHẢN BIỆN với chính output:
- Trong các nhận định, đánh dấu nhận định nào MẠNH NHẤT (có nhiều bằng chứng) và nhận định nào YẾU NHẤT (ít bằng chứng).
- Đưa 1-2 counter-narrative: "Người phản đối có thể nói X vì Y".
- Đề xuất tôi nên đào sâu thêm số liệu nào để củng cố nhận định.
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI viết quá tóm tắt, không có nhận định riêng

Nếu AI trả về bài "Case suffered because of AI" generic, không có ý mới:

```text
Phân tích bạn vừa đưa quá chung chung — bất kỳ ai cũng có thể viết như vậy.

Đẩy SÂU hơn:
- Câu 2: trong 7 shifts, đừng chỉ chọn shift 1 (Do the work for me) — đây ai cũng nói rồi.
  Tìm shift ÍT NGƯỜI nói tới (vd shift 4 Pay for output, shift 7 Tool sees context) có áp dụng không.
- Câu 3: Four Fits không vỡ đồng thời. Sequence VỠ thực sự là gì?
  Dùng số liệu cụ thể: nếu user Q4 2022 còn 7.8M, Q1 2023 còn 5.5M, Q1 2024 còn 3.5M
  → cho thấy PMF vỡ trước, rồi mới đến CMF (subscription model phụ thuộc PMF).
- Câu 4: đừng chỉ nói "đối thủ X nhanh hơn case". Đào sâu: tại sao? Đối thủ có gì case không có?
```

### Khi AI bịa số liệu

```text
Trong phân tích của bạn, một số con số không khớp với 1-research.md của tôi:
- Bạn nói "user 8 triệu" — file của tôi ghi 7.8 triệu Q1 2022.
- Bạn nói "ChatGPT thay 70% bài tập" — số này không có trong file tôi.

Chỉ dùng số liệu CÓ TRONG file 1-research.md mà tôi đã đưa.
Nếu cần số khác để hỗ trợ luận điểm, ghi "cần verify thêm" thay vì bịa.

Viết lại Câu 3 chỉ dùng số trong file tôi.
```

### Khi muốn counter-narrative mạnh hơn

```text
Phân tích của bạn cùng quá nhanh đến kết luận "case sụp vì big tech AI".

Đóng vai PHẢN BIỆN: viết bài 200 từ bảo vệ luận điểm "case sụp KHÔNG phải vì big tech AI".
Các luận điểm có thể dùng:
- Case đã có vấn đề trước khi big tech AI ra tính năng (governance, scandal, slowdown growth?).
- Đối thủ khác đã ăn mòn case dần từ lâu.
- Mô hình kinh doanh có vấn đề từ gốc (đạo đức, cost structure, market saturation).
- Case overpay acquisitions làm yếu balance sheet.

Sau khi viết counter-narrative, đánh giá:
- Counter-narrative này CÓ ĐIỂM nào đúng?
- Phần nào WEAK?
- Bài phân tích cuối nên kết hợp 2 góc nhìn thế nào?
```

---

## Phản biện sau khi có output — 5 câu bạn tự hỏi

Trước khi paste vào `2-analysis.md`:

1. **Specificity check**: Mỗi câu trả lời có **số liệu cụ thể** không (vd: "$115.21 → $0.44", "7.8M → 3.2M"), hay vẫn dùng từ "nhiều / nhanh / lớn" mơ hồ?
2. **Lens application check**: Cả 3 khung Lens 1 (7 shifts + Four Fits + Big Squeeze) đã được vận dụng chưa? Hay chỉ dùng 1 khung?
3. **Source check**: Mỗi nhận định có **tham chiếu** đến số liệu cụ thể (S-01, S-02,...) trong `1-research.md` chưa?
4. **Counter-narrative check**: Có phản biện được luận điểm chính không? Có thừa nhận case có khía cạnh khác không?
5. **Original thinking check**: Có ý nào của bạn mà AI **chưa từng đưa** không? Hay 100% là AI summarize?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Case sụp vì big tech AI làm tính năng tương tự miễn phí. PMF bị vỡ vì người dùng không cần case nữa. CMF bị vỡ vì subscription model không hoạt động khi user không quay lại."

Vấn đề: không có số liệu cụ thể, không có sequence vỡ, không có phản biện.

### Tốt

> **Câu 3 — Giả định nào của sản phẩm đã không còn đúng?**
>
> **Fit vỡ đầu tiên: PMF (Product Market Fit)**
>
> Trước khi big tech AI ra tính năng tương tự, người dùng trả $19.95/tháng để **tìm** giải pháp trong database của case. Sau khi big tech AI ra mắt phiên bản miễn phí (cho người dùng gói cơ bản, sau đó mở rộng từ giữa 2024), người dùng **không cần** case nữa — họ hỏi thẳng AI, AI làm cả công việc.
>
> Bằng chứng:
>
> - User giảm từ 7.8M (Q1 2022) xuống 3.2M (Q4 2024) = giảm 59% (S-03 + S-04, nguồn 10-K).
> - Trong cùng kỳ, big tech AI đạt 200M weekly active users.
>
> **Fit vỡ thứ hai: PCF (Product Channel Fit)** — vỡ trong 6 tháng sau PMF
>
> Kênh phân phối chính của case là Google SEO. Khi người dùng tìm "giải pháp X" trên Google trước đây, kết quả top thường là case. Sau khi big tech AI ra mắt, người dùng KHÔNG còn search Google — họ mở thẳng tab AI.
>
> Bằng chứng:
>
> - Doanh thu case giảm 14% YoY 2024 — chủ yếu do user mới không vào (S-...).
>
> **Phản biện**: có thể nói PCF của case đã có vấn đề từ 2021 khi Google bắt đầu rank "people also ask" cao hơn — không hoàn toàn do big tech AI. Nhưng tốc độ giảm 14% trong 1 năm là biểu hiện rõ ràng của Fit Collapse mới, không phải suy giảm dần.

Khác biệt: tham chiếu số S-03, S-04, có sequence (PMF vỡ trước, PCF vỡ sau 6 tháng), có phản biện cân nhắc.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Hỏi AI "phân tích case theo Four Fits" mơ hồ | Constraint: 4 câu hỏi cụ thể + tham chiếu 7 shifts |
| Để AI dùng số liệu nó tự nhớ | Buộc AI chỉ dùng số trong 1-research.md |
| Chấp nhận phân tích 1 chiều "big tech AI giết case" | Bắt AI viết counter-narrative để cân nhắc |
| Không kết nối với khung lecture | Buộc AI dùng đúng tên 7 shifts + Four Fits |
| Tin AI cite cả số lẫn nguồn mới | Số liệu mới phải verify trước khi dùng |
| Một câu trả lời dài 1 đoạn không cấu trúc | Mỗi câu chia thành Nhận định + Bằng chứng + Phản biện |

---

## Format save vào `2-analysis.md`

```markdown
## Câu hỏi 1 — Trước AI, sản phẩm hoạt động dựa trên giả định gì?

### Trả lời

- Người dùng: [...]
- Vấn đề: [...]
- Giá trị: [...]
- Mô hình kinh doanh: [...]
- Vì sao hoạt động:
  - 1. [...]
  - 2. [...]
  - 3. [...]

### Bằng chứng

- [S-01]: [...]
- [S-02]: [...]

## Câu hỏi 2 — Kỳ vọng người dùng đã thay đổi như thế nào?

[Theo template tương tự]

## Câu hỏi 3 — Giả định nào không còn đúng?

[Theo template]

## Câu hỏi 4 — Sản phẩm có thể cứu vãn?

[Theo template]
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

Nếu còn thời gian:

```text
Sau khi phân tích case, giúp tôi đặt 3 câu hỏi PHẢN BIỆN với chính phân tích:

1. Hindsight bias check: Phân tích này có "hindsight bias" không?
   (Trước khi big tech AI ra mắt, người ta có thể đoán case sẽ sụp không? Hay đây là phân tích sau khi biết kết quả?)

2. Generalizability: Phân tích này áp dụng được cho ngành khác không?
   (Pattern này có lặp lại ở các ngành sales? marketing? legal? medical?)

3. Survival check: Trong số các đối thủ cùng ngành, có ai SURVIVE được không?
   Nếu có, họ làm gì khác case bạn chọn?

Trả lời 3 câu này giúp bạn tránh nhận định "big tech AI giết tất cả ngành X" — thực tế phức tạp hơn.
```

3 câu hỏi này giúp bạn nhìn case **đa chiều** và tránh kết luận đơn giản hoá.
