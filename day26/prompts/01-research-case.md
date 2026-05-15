# Prompt tham khảo 1 — Tự nghiên cứu case bị big tech AI ảnh hưởng

**Dùng khi**: bạn bắt đầu Lab 1 (cá nhân), cần tự chọn 1 case (sản phẩm/công ty bị ảnh hưởng nặng sau khi big tech AI ra tính năng tương tự) và tự tìm số liệu thật (quy mô, doanh thu, người dùng, đối thủ AI) để có bằng chứng cho phân tích.
**Công cụ gợi ý**: Claude Deep Research, ChatGPT (chế độ Search hoặc Deep Research), Perplexity Pro, Gemini Deep Research. Có thể bổ sung tìm thủ công trên Yahoo Finance, MacroTrends, blog chính thức của công ty.
**Lưu kết quả vào**: `worksheet/01-bigtech-disruption/1-research.md` Phần A và Phần B
**Thời gian**: 15-20 phút

---

## Trước khi vào prompt — 5 câu hỏi bạn tự trả lời

Mục tiêu: trước khi nhờ AI tìm, bạn phải biết **case nào** và **cần tìm cụ thể những gì**. Nếu không, AI sẽ trả về 1 bài tóm tắt chung chung — không có số cụ thể, không có nguồn rõ ràng.

1. **Case bạn chọn** là gì? (1 sản phẩm hoặc 1 công ty cụ thể — không chung chung như "ngành ed-tech".)
2. **Big tech AI** nào ra tính năng tương tự gây ảnh hưởng? (ChatGPT / Claude / Gemini / GitHub Copilot / Microsoft Copilot / NotebookLM / ...)
3. **Mốc thời gian quan trọng nhất** với phân tích của bạn là gì? (Khi big tech AI ra tính năng / khi case phản ứng / hiện tại?)
4. **Số liệu nào AI có thể bịa nhất**? (Giá cổ phiếu chính xác đến cent, ngày tháng cụ thể, tỷ lệ phần trăm chính xác — đây là nơi AI dễ "vẽ ra" con số nghe có vẻ đúng.)
5. **Sau khi có số liệu, bạn sẽ kiểm chứng thế nào**? (Click URL nguồn, cross-check 2 nguồn, kiểm tra với báo cáo tài chính chính thức — chọn ít nhất 1 cách.)

> **Cảnh báo**: nếu câu 4 bạn không xác định rõ, AI sẽ tạo ra "số liệu nghe đúng nhưng bịa". Ví dụ: AI có thể nói "công ty X sa thải 41% nhân viên ngày 12/3/2025" — số nghe đúng nhưng không có thật.

---

## Prompt chính (paste sau khi ghi bối cảnh ngắn)

```text
Bạn là researcher chuyên về business cases trong ngành công nghệ.
Dựa trên BỐI CẢNH ở trên (mã học viên + case tôi chọn + big tech AI tạo áp lực),
giúp tôi tìm số liệu cụ thể về case này để phân tích vì sao bị ảnh hưởng nặng sau khi big tech AI ra tính năng tương tự.

Case của tôi: [tên sản phẩm / công ty]
Big tech AI tạo áp lực: [ChatGPT / Claude / Gemini / GitHub Copilot / ...]

Tôi cần 4 nhóm số liệu cụ thể, mỗi số liệu có URL nguồn và ngày tháng.

NHÓM 1 — Quy mô trước & sau (cổ phiếu / doanh thu / người dùng)

Tuỳ case:
- Nếu là công ty niêm yết: cổ phiếu đỉnh + ngày, cổ phiếu sau khi big tech AI ra mắt, cổ phiếu hiện tại, tỷ lệ giảm.
- Doanh thu / ARR: trước và sau khi big tech AI ra tính năng tương tự (so quý / năm).
- Người dùng trả tiền / hoạt động: đỉnh + hiện tại + tỷ lệ giảm.

Ưu tiên nguồn: Yahoo Finance, MacroTrends, Google Finance (nếu là công ty niêm yết); báo cáo quý / 10-K filing.

NHÓM 2 — Mốc thời gian big tech AI ra tính năng tương tự

Tìm:
- Tên tính năng cụ thể của big tech.
- Ngày ra mắt + ngày mở rộng người dùng (vd: ChatGPT 30/11/2022, GitHub Copilot GA 21/06/2022).
- Tốc độ phổ cập của tính năng (số người dùng sau 6 tháng, 1 năm).
- Mức độ trùng lặp với sản phẩm của case.

Ưu tiên nguồn: blog chính thức (OpenAI blog, Anthropic blog, Google blog, GitHub blog).

NHÓM 3 — Phản ứng của case sau khi big tech AI ra mắt

Tìm:
- Tên sản phẩm AI / tính năng mới của case + ngày ra mắt.
- Đối tác AI (case này dùng model nào?).
- Khoảng thời gian từ khi big tech AI ra mắt đến khi case có sản phẩm AI.
- Đợt sa thải nhân viên / cắt giảm (tỷ lệ % + ngày).
- Thông báo delisting / acquisition / đóng cửa (nếu có).

Ưu tiên nguồn: báo cáo quý của case, TechCrunch, Bloomberg, CNBC.

NHÓM 4 — Đối thủ AI thay thế

Tìm:
- Big tech AI đã thay thế case ở use case cụ thể nào?
- Đối thủ startup nào khác cũng đang thay thế (tên + ngày ra mắt + giá)?
- So sánh giá: sản phẩm gốc vs big tech AI vs startup khác (giá/tháng).

Ưu tiên nguồn: trang giá chính thức, báo công nghệ.

Với MỖI số liệu, ghi rõ:
- Số / giá trị cụ thể
- Ngày hoặc thời kỳ (vd: Q4 2022, hoặc 02/05/2023)
- URL nguồn (1 nguồn primary tối thiểu)
- Mức tin cậy: ✅ verified (đã cross-check 2 nguồn) / ⚠️ partial (1 nguồn primary) / ❌ unverified

Yêu cầu CHẤT LƯỢNG nguồn:
- Ưu tiên: SEC filings, official IR pages, tier-1 journalism (Reuters, CNBC, Bloomberg, FT).
- Không dùng: blog cá nhân, Medium articles không citation, social media posts.
- Nếu chưa verify được số nào, GHI RÕ "chưa kiểm chứng — cần fact-check thủ công".

Yêu cầu PHẢN BIỆN:
- Sau khi liệt kê, chọn 3 số liệu "ấn tượng nhất" cho phân tích case (vd: tỷ lệ giảm cổ phiếu, tốc độ mất người dùng, độ trễ phản ứng).
- Với mỗi số ấn tượng, viết 1 câu giải thích vì sao số này nói lên điểm gì về case.
- Cuối cùng: liệt kê 1-2 số liệu mà bạn KHÔNG dám claim (nguồn yếu, hoặc số chênh giữa các nguồn) — để tôi tự verify.
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI đưa số liệu quá tròn (đáng nghi)

Nếu AI trả lời "case giảm 90% người dùng" — số quá tròn, có thể bịa.

```text
Các số bạn vừa đưa quá tròn (90%, 50%, 100K) — nghe như ước lượng chứ không phải dữ liệu thật.

Tìm lại số CHÍNH XÁC từ 10-K filings hoặc earnings reports hoặc blog chính thức:
- Số liệu cụ thể đến đơn vị phù hợp (triệu / nghìn / tỷ).
- URL trực tiếp đến SEC filing, IR page, hoặc blog chính thức.

Nếu không tìm được, ghi rõ "không tìm được số chính xác, chỉ có ước lượng từ X nguồn".
Đừng làm tròn để nghe đẹp.
```

### Khi muốn cross-check số liệu

```text
3 số liệu quan trọng bạn vừa đưa:
1. [số 1]
2. [số 2]
3. [số 3]

Với mỗi số, tìm thêm 1 nguồn độc lập cross-check:
- Nguồn 1: [đã có]
- Nguồn 2: [tìm thêm — không cùng nhà xuất bản với nguồn 1]

Nếu 2 nguồn cho 2 số khác nhau, ghi rõ cả 2 số + giải thích chênh lệch.
Đừng chỉ chọn số nghe hợp lý hơn.
```

### Khi cần số liệu Việt Nam liên quan

```text
Trong các số liệu trên, có số nào liên quan đến thị trường Việt Nam không?
- Case có hoạt động ở Việt Nam không?
- Người dùng Việt Nam có dùng case không (số liệu cụ thể)?
- Big tech AI có ảnh hưởng đến cùng ngành ở Việt Nam không?

Nếu có, ưu tiên nguồn Việt: VnExpress, Tuổi Trẻ, ICTNews, báo cáo Cốc Cốc hoặc Statista Việt Nam.

Nếu không có số liệu Việt Nam cụ thể, ghi rõ "không có dữ liệu địa phương".
```

---

## Phản biện sau khi có output — 5 câu bạn tự hỏi

Trước khi paste vào `1-research.md`, bạn rà soát:

1. **Source check**: Mỗi số liệu có URL cụ thể không? Click URL có mở được không?
2. **Date check**: Mỗi số liệu có ngày tháng / quý cụ thể không? Hay chỉ "khoảng năm 2023"?
3. **Cross-check**: 3 số liệu quan trọng nhất đã được cross-check 2 nguồn chưa?
4. **AI bịa check**: Có số nào AI đưa ra mà bạn nghi ngờ vì không khớp giữa các nguồn? Nếu chênh lớn → kiểm tra lại.
5. **Coverage check**: Đã có đủ 4 nhóm số liệu chưa? Có nhóm nào chỉ có 1-2 số không?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Case mất rất nhiều người dùng sau khi big tech AI ra mắt, khoảng 50% trong 1 năm."

Vấn đề: không có số chính xác, không có nguồn, không có thời kỳ cụ thể.

### Tốt

> **S-03 — Người dùng trả phí đỉnh của case**
>
> - Giá trị: 7.8 triệu người dùng
> - Thời kỳ: Q1 2022 (đỉnh)
> - Nguồn: 10-K filing 2022 của công ty, page 24. URL: <https://investor.[case].com/financials/sec-filings/>
> - Cross-check: MacroTrends biểu đồ người dùng case cho biết tương tự. URL: <https://www.macrotrends.net/...>
> - Mức tin cậy: ✅ verified
>
> **S-04 — Người dùng hiện tại**
>
> - Giá trị: ~3.2 triệu người dùng
> - Thời kỳ: Q4 2024
> - Nguồn: Q4 2024 earnings call transcript. URL: [...]
> - Mức tin cậy: ⚠️ partial (1 nguồn primary)

Khác biệt: số chính xác đến 0.1 triệu, có URL trực tiếp đến SEC filing, có cross-check, có thời kỳ cụ thể (Q1 2022 chứ không "năm 2022").

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Prompt 1 câu "Tìm số liệu về case của tôi" | Constraint 4 nhóm số liệu cụ thể + ưu tiên nguồn |
| Tin số AI đưa ra mà không verify | Click URL, cross-check 2 nguồn cho số quan trọng |
| Chấp nhận số "khoảng" | Đẩy AI tìm số chính xác từ SEC filing hoặc earnings call |
| Dừng sau 5 số đầu | Iterate 1-2 lần — đặc biệt nhóm Phản ứng (tên sản phẩm AI, đối tác, thời gian trễ) |
| Số liệu không có ngày | Mỗi số phải có ngày hoặc quý (vd: Q4 2024, không phải "2024") |
| Tin AI cite nguồn mà không kiểm tra URL | Mở từng URL, kiểm tra link hoạt động + nội dung khớp |

---

## Format save vào `1-research.md` Phần A và B

```markdown
## Phần A — Nhóm số liệu đã tìm

### Nhóm 1 — Quy mô trước & sau

[Điền vào theo template trong 1-research.md]

### Nhóm 2 — Mốc big tech AI ra tính năng tương tự

[...]

### Nhóm 3 — Phản ứng của case

[...]

### Nhóm 4 — Đối thủ AI

[...]

## Phần B — Bảng tổng hợp

| # | Số liệu | Giá trị | Ngày | Nguồn | Đã kiểm chứng? |
|---|---|---|---|---|---|
| S-01 | ... | ... | ... | ... | ✅ / ⚠️ / ❌ |
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

Nếu còn thời gian, dùng prompt sau để có góc nhìn đa chiều:

```text
Với 4 nhóm số liệu bạn vừa đưa, giúp tôi đặt 3 câu hỏi PHẢN BIỆN:

1. Có số liệu nào CHỐNG LẠI luận điểm "case bị ảnh hưởng nặng vì big tech AI" không?
   (Vd: case có thể đã có vấn đề trước khi big tech AI ra mắt? Cạnh tranh khác? Mô hình kinh doanh đã suy yếu?)

2. Nếu case chuyển hướng (B2B / niche khác / mua công ty AI), bài học sẽ khác không?

3. Trong 5 năm tới, nếu big tech AI tăng giá mạnh (vd $50/tháng), case có cơ hội quay lại không?
   Nếu có → root cause là pricing, không phải technology.
   Nếu không → root cause sâu hơn pricing.

Trả lời 3 câu này giúp tránh nhận định 1 chiều "big tech AI giết case".
```

3 câu hỏi này giúp bạn nhìn case **đa chiều** — không chỉ "big tech AI là vấn đề". Thực tế thường phức tạp hơn: business model, governance, timing, leadership đều đan xen.
