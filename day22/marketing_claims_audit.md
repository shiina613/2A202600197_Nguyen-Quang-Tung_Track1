# Marketing Claims Audit — SmartHint AI

**Ngày rà soát:** 15/05/2026  
**Người rà soát:** Founder  
**Tài liệu rà soát:** Landing page + Twitter Pitch (Day 19) + Pitch Deck slide "What we do"

---

## Bảng claim audit

| # | Câu gốc | Vị trí | Mức | Evidence hiện có | Honest version | Action |
|---|---------|--------|-----|------------------|----------------|--------|
| 1 | "Gia sư AI ép tự tính" | Landing hero | **A** | Đã có WOZ test 20 HS — HS phải tự gõ số, không có nút xem đáp án | Giữ nguyên — mô tả đúng cơ chế sản phẩm | Không cần sửa |
| 2 | "Verify bằng tool, không AI tính nhẩm" | Landing hero + Twitter Pitch | **A** | Đã prototype SymPy + Wolfram verify. Hoạt động với biểu thức cơ bản | Giữ nguyên — mô tả đúng kiến trúc | Không cần sửa |
| 3 | "Align đề Bộ" | Twitter Pitch | **A** | Bank đề lấy từ 18 đề tham khảo Bộ GD&ĐT (công khai) | Giữ nguyên — có source rõ ràng | Không cần sửa |
| 4 | "Target completion >60%" | Twitter Pitch | **B** | Chưa có pilot data. Chỉ là target metric từ PRD | "Target Session Completion >60% (đang validate với pilot 200 HS)" | Thêm "target" + "đang validate" |
| 5 | "10K paid users/12 tháng" | Twitter Pitch | **B** | Projection từ financial model Day 18. Chưa có traction thật | "Mục tiêu 10K paid users trong 12 tháng (dựa trên mô hình tài chính)" | Thêm "mục tiêu" + "dựa trên mô hình" |
| 6 | "Gross margin 73%" | Twitter Pitch + Pitch Memo | **A** | Tính từ ARPU 149K - COGS 37.5K = 111.5K → 74.8%. Có formula rõ | Giữ nguyên — có công thức kiểm chứng được | Không cần sửa |
| 7 | "353K học sinh bế tắc" | Twitter Pitch | **A** | Số liệu từ phổ điểm TN 2025 Bộ GD&ĐT (31.4% × 1.126.172 thí sinh) | Giữ nguyên — có nguồn công khai | Không cần sửa |
| 8 | "Solver chỉ giải hộ, không cứu được trong phòng thi" | Twitter Pitch | **B** | Logic đúng (Phần III yêu cầu tự gõ số) nhưng chưa có A/B test so sánh SmartHint vs solver | "Phần III yêu cầu tự gõ số — solver đưa đáp án không luyện được kỹ năng này" | Sửa thành mô tả cơ chế, bỏ claim "không cứu được" |
| 9 | "Gia sư Socratic" | Landing + Pitch | **B** | Dùng phương pháp Socratic (hỏi gợi mở) nhưng chưa có nghiên cứu chứng minh hiệu quả bằng gia sư người | "AI hỗ trợ theo phương pháp Socratic (hỏi gợi mở thay vì đưa đáp án)" | Thêm "hỗ trợ theo phương pháp" thay vì claim = gia sư |
| 10 | "Chi phí API ~37K/user/tháng" | Pitch Memo | **A** | Tính chi tiết trong Day 18 output (token estimate + pricing official) | Giữ nguyên — có calculation rõ | Không cần sửa |
| 11 | "Pilot 200 HS: target completion >60%" | Pitch Memo | **B** | Chưa chạy pilot. Đây là plan, không phải result | "Đang chuẩn bị pilot 200 HS để validate Session Completion target" | Sửa thành "đang chuẩn bị" |

---

## Thống kê

- **Tổng số claim:** 11
- **Mức A (chứng minh được):** 6
- **Mức B (chưa chứng minh nhưng có thể):** 5
- **Mức C (thổi phồng — vùng Điều 198):** 0

---

## Đánh giá tổng thể

SmartHint AI hiện **không có claim Mức C** (thổi phồng không evidence). Lý do:
- Sản phẩm chưa launch → chưa có claim về kết quả thực tế
- Twitter Pitch dùng số liệu có source (phổ điểm Bộ GD&ĐT, pricing API)
- Differentiator mô tả cơ chế (Socratic, tool verify) — không claim kết quả

**Rủi ro tiềm ẩn:** Khi scale marketing sau pilot, dễ trượt sang Mức C nếu:
- Claim "AI giúp tăng X điểm" mà chưa có A/B test
- Claim "thay thế gia sư" mà chưa có so sánh
- Dùng testimonial HS mà chưa verify kết quả thi thật

---

## TOP 3 priority sửa ngay

1. **Claim #8:** "Solver không cứu được" → Sửa thành mô tả cơ chế Phần III, bỏ claim tuyệt đối
2. **Claim #4 + #11:** "Target completion >60%" → Thêm rõ "target đang validate" (tránh hiểu nhầm là đã đạt)
3. **Claim #9:** "Gia sư Socratic" → Thêm "hỗ trợ theo phương pháp" (tránh so sánh implicit với gia sư người)

---

## Quy tắc marketing cho tương lai (post-pilot)

| Khi muốn claim... | Phải có evidence... | Nếu không có → viết... |
|-------------------|--------------------|-----------------------|
| "Tăng X điểm" | A/B test ≥ 100 HS, control group | "Đang đo lường hiệu quả với pilot" |
| "Thay thế gia sư" | So sánh trực tiếp SmartHint vs gia sư người | "Hỗ trợ bổ sung cho việc tự học" |
| "100% chính xác" | KHÔNG BAO GIỜ claim này | "AI có thể sai — luôn kiểm tra lại" |
| "X% HS đạt kết quả" | Data từ ≥ 200 HS + follow-up điểm thi thật | "X% HS pilot hoàn thành phiên học" |
