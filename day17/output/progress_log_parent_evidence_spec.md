# Spec: Nhật ký tiến bộ, bằng chứng cho phụ huynh & mô hình user–buyer

> Ghi lại sau thảo luận: học sinh là **user** và **buyer** trong câu chuyện sản phẩm; phụ huynh được thuyết phục **khi con chủ động**. Trên hệ thống có **nhật ký / thành tựu / lịch sử** (log là từ nội bộ); khi cần, học sinh bật **“Liên kết với bố mẹ”** và chia sẻ bằng chứng.

---

## 1. Nguyên tắc thiết kế

- **Mặc định private:** Tiến bộ thuộc về học sinh; không push báo cáo phụ huynh nếu con chưa liên kết / chưa chia sẻ.
- **“Khen con với con”:** Khích lệ và milestone hướng nội (niềm tin, thói quen), không biến app thành kênh “khen con với bố mẹ” trước.
- **Bằng chứng để thuyết phục khi cần:** Học sinh có **bản tóm tắt / xuất chia sẻ** dùng khi xin gia hạn, xin ngân sách — phụ huynh đọc nhanh, hiểu đúng, không soi transcript.
- **Liên kết phụ huynh (opt-in):** Sau khi bật, phụ huynh chỉ nhận **cùng loại nội dung** mà con đã **xem trước** (preview), tránh cảm giác giám sát lén.

---

## 2. Phụ huynh cần trả lời được 3 câu trong ~30 giây

1. **Con có đang học thật không** — nỗ lực có cấu trúc (phiên có mục tiêu), không chỉ “mở app”.
2. **Con đang mạnh/yếu ở đâu** — theo **chuyên đề / dạng bài ôn TN** (Phần II, Phần III…), không phải khẩu hiệu chung.
3. **Có dấu hiệu tiến bộ theo thời gian không** — cùng kiểu nhiệm vụ: **ít phụ thuộc gợi ý hơn** hoặc **ít sai lặp hơn**; ưu tiên proxy gần “tự làm được”.

---

## 3. Các lớp dữ liệu trên sản phẩm (từ “log” ra UI)

### 3.1 Thành tựu (Achievements)

- Ưu tiên milestone **gắn học tập / ôn TN**: hoàn thành chuỗi chuyên đề, vượt điểm kẹt, làm đúng Phần III sau khi đã lỡ, v.v.
- Tránh gamification gây áp lực xã hội (rank, so sánh percentile/bạn bè) — giữ guardrail đã đặt trong submission.

### 3.2 Lịch sử học (Study history)

- Ưu tiên **phiên có mục tiêu**: ví dụ thời lượng + chuyên đề + loại nhiệm vụ (Phần II/III) + số bài/chuỗi checkpoint hoàn thành.
- Tránh vanity: “số tin chat” không phải chỉ số giá trị.
- Nếu có thời lượng, nên kèm **proxy chất lượng** (hoàn thành checkpoint, next-item — mục 4) để tránh hiểu nhầm “ngồi lâu = giỏi”.

### 3.3 Dạng bài đã luyện / đã hỏi

- Hiển thị theo **ngôn ngữ phụ huynh & TN**: chuyên đề + **khung đề** (Phần II / Phần III / trả lời ngắn…), không chỉ tag kỹ thuật nội bộ.
- Đây là một trong các lớp **thuyết phục nhất** vì chứng minh “ôn đúng phần thi”.

### 3.4 Phân bổ gợi ý (1 hint / 2 hint / 3 hint / “học lại”)

- **Hữu ích nội bộ** để tối ưu sản phẩm và cá nhân hóa.
- **Với phụ huynh:** tránh headline dạng histogram thô (“hint 2/3”) vì dễ bị đọc sai: nhiều hint ≠ yếu (có thể bài khó đúng level); ít hint ≠ chắc đã hiểu sâu.

**Cách đưa ra an toàn hơn:**

- Khung **theo dạng bài**: *“Ở dạng X, tuần này em thường cần tới bước gợi ý thứ 2; tuần trước là bước 3 → tuần này đã giảm.”*
- Hoặc ngôn ngữ sư phạm: **“độ tự làm”**, **“tự chốt sau gợi ý”**, thay vì nhãn kỹ thuật “hint 2/3”.

**“Phải học lại”:** không hiển thị như nhãn tiêu cực thô; đặt tên lại kiểu **“ôn lại điểm kẹt” / “luyện lại vì sai lặp”** và gắn với **kế hoạch cải thiện** (phụ huynh thấy có phương pháp).

---

## 4. Metric nên làm “headline” khi chia sẻ cho phụ huynh

1. **Next-item correctness không có AI** (đã có trong PRD/submission) — proxy gần “học được” / phòng thi hơn completion thuần.
2. **Tiến bộ theo bucket dạng TN** (coverage + độ chính xác theo nhóm dạng), kèm mô tả dạng **không lộ đề nhạy cảm**.

**Hint distribution** chỉ là **lớp giải thích phụ**, không phải thông điệp chính.

---

## 5. Luồng “Liên kết với bố mẹ” + chia sẻ

- Học sinh bật liên kết khi sẵn sàng.
- Phụ huynh nhận **cùng bản tóm tắt** học sinh đã preview.
- Có khối **“Đây là gì / Đây không phải là gì”** (ví dụ: không phải transcript từng câu; không phải giám sát real-time) — giảm hiểu nhầm đạo đức sản phẩm.

---

## 6. Thanh toán (ghi chú thực tế)

- Story có thể là **học sinh là buyer**; kỹ thuật thanh toán vẫn có thể qua tài khoản phụ huynh — copy UX/điều khoản nên **nhất quán** (ví dụ: “Gói học của em — có thể thanh toán qua phụ huynh”) để tránh mâu thuẫn cảm nhận.

---

*Đã gộp vào [`../submission.md`](../submission.md): Trust Constraints (**Learning evidence**), User Story 5 (mediation), và đoạn **Chiến lược startup — cohort & moat** ở đầu bài.*
