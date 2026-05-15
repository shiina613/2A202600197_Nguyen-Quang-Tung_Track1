# Roadmap Now / Next / Later — SmartHint AI

**Ngày:** 15/05/2026  
**Người viết:** Founder  
**Không có ngày tháng cụ thể — chỉ thứ tự ưu tiên.**

---

## NOW

### Vấn đề 1: Học sinh Phần III không biết bắt đầu từ đâu — nhìn bài trống, bỏ cuộc
**Đang code:** Dual-Scaffolding Socratic Loop — trắc nghiệm A/B gợi hướng giải, rồi ép tự tính. Kết hợp tool verify số học sinh gõ (không để AI tính nhẩm). Bank đề 3 chuyên đề đầu: Hàm số, Mũ-Log, Nguyên hàm. Dự kiến 2-3 tháng cho MVP stable.

### Vấn đề 2: Học sinh sai nhưng không biết sai ở đâu — nản chí bỏ phiên giữa chừng
**Đang code:** Feedback loop thân thiện — AI chỉ ra lỗi nhỏ (nhầm dấu, quên điều kiện) bằng giọng khuyến khích, kèm hint tiếp theo. Fallback rule-based khi AI không nhất quán 2 lần. Dự kiến song song với Vấn đề 1.

---

## NEXT

### Vấn đề 3: Phụ huynh trả tiền nhưng không biết con có học thật không — nghi ngờ → churn
**Sẽ làm:** Báo cáo tiến bộ tuần gửi phụ huynh (tổng quan, không chi tiết transcript). Học sinh xem trước báo cáo — tránh cảm giác bị giám sát. Cần interview 10+ phụ huynh về format trước khi build.

### Vấn đề 4: Học sinh ôn xong 3 chuyên đề nhưng đề thi cover 7+ chuyên đề — giá trị bị giới hạn
**Sẽ làm:** Mở rộng bank đề sang Tích phân, Xác suất, Hình học không gian, Số phức. Bắt đầu khi NOW ổn định và có retention data từ pilot 200 HS.

---

## LATER

### Vấn đề 5: Sau TN 2026, cohort lớp 12 "hết hạn" — cần nguồn user mới để duy trì MRR
**Có thể làm:** Mở rộng sang lớp 11 (pre-TN) hoặc lớp 10 (nền tảng). Nhưng chưa validate demand — lớp 11 chưa có urgency thi. Có thể bỏ nếu pivot sang thị trường khác (ôn đại học, IELTS Math) hấp dẫn hơn.

### Vấn đề 6: Học sinh muốn hỏi bài bằng giọng nói thay vì gõ công thức — friction UX cao
**Có thể làm:** Voice input với Vietnamese ASR. Nhưng chi phí ASR cho thuật ngữ toán chưa rõ, accuracy chưa đủ. Có thể bỏ hoàn toàn nếu text input + ảnh chụp đề đủ tốt.

---

## Self-check

- [x] Mỗi ô là vấn đề (problem), không phải tính năng (feature)
- [x] KHÔNG có ngày tháng cụ thể
- [x] NOW có 2 vấn đề (không quá tải)
- [x] NEXT có 2 vấn đề (strategic bets)
- [x] LATER honest "có thể bỏ" ở cả 2 vấn đề
- [x] Flow logic: NOW (Quick Win + Strategic Bet) → NEXT (cần data từ NOW) → LATER (chưa validate)
