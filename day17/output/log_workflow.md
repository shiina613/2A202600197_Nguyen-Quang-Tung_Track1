# Workflow Log: Hoàn thiện Day 17 Submission

## 1. Đầu vào (Inputs)
- `submission_A.md`: Bản draft ban đầu với ý tưởng pivot mô hình kinh doanh sang "Direct-to-Parent" (bán cho phụ huynh).
- `handbook_17.md`: Sổ tay hướng dẫn Day 17 với các tiêu chí đánh giá khắt khe (Rubric 100 điểm) và bài tập "Stress Test".

## 2. Các bước thực hiện (Execution Steps)

**Bước 1: Lập kế hoạch (Planning)**
- Đọc và hiểu bối cảnh của Day 17.
- Đề xuất Implementation Plan, thống nhất với người dùng việc chạy Stress Test trước khi ra bản Final.

**Bước 2: Chạy AI Critique (Stress Test)**
- Đóng vai "Ruthless Lead PM" để đánh giá `submission_A.md`.
- Tìm ra 4 lỗ hổng lớn (Fail Signals):
  - *Scope Creep:* Giao diện "Rescue Game" quá phức tạp, không cần thiết cho việc test Riskiest Assumption ở giai đoạn MVP.
  - *AI Fallback Holes:* Thiếu kịch bản phòng ngừa rủi ro AI OCR đọc sai đề bài toán từ đầu.
  - *Vanity Metric Trap:* Các chỉ số "Tỷ lệ đạt Aha moment trong 3 ngày" và "Share-for-Quota" không mang tính actionability cao, dễ bị sai lệch data.
  - *Hypothesis Weakness:* Chưa có cách test rẻ nhất cho giả thuyết Phụ huynh sẽ trả tiền.

**Bước 3: Cải thiện & Chốt giải pháp (Iteration)**
- Đưa "Rescue Game UI" vào Out-of-Scope, giữ khung chat cơ bản.
- Bổ sung quy trình "Human-in-the-loop OCR Validator" (học sinh duyệt lại đề bài) vào MVP.
- Sửa đổi North Star metrics thành *Session Completion Rate* và *W1/W4 Retention Rate*.
- Giải quyết 2 câu hỏi mở cuối file A: 
  - Đề xuất hệ thống "Hidden Streaks" và "Emoji" làm micro-rewards.
  - Chuyển đổi toàn bộ sang sử dụng mô hình Gemini 2.5 Flash Lite để đảm bảo cả tốc độ, khả năng suy luận và tối ưu Unit Economics (đảm bảo biên lợi nhuận >60% mà không cần dùng kiến trúc Router phức tạp).

**Bước 4: Tạo tài liệu (Drafting Final Version)**
- Tổng hợp toàn bộ nội dung đã cải tiến.
- Xuất file `submission.md` (Version B) đảm bảo đáp ứng đầy đủ Rubric (Product Judgment, AI Design Rigor, Measurement Quality).
- Xuất file nhật ký quá trình vào `log_workflow.md`.

## 3. Đầu ra (Outputs)
- `days/day17/submission.md`: Bản nộp bài chính thức.
- `days/day17/output/log_workflow.md`: Nhật ký theo dõi quá trình luận giải công việc.

**Bước 5: Đại hội "War Room" Tái Cấu Trúc (Version C - Pivot Mở Rộng)**
- Sau khi có Version B, tiến hành 5 vòng lặp "Stress Test" liên hoàn với sự tham gia của 6 Agents (`devils_advocate`, `competitor_autopsy`, `market_analyzer`, `psych_profiler`, `viral_engineer`, `use_case_definer`, `product_discoverer`).
- Quyết định khai tử mô hình Báo cáo Giám sát (Parent Report), chuyển trọng tâm sang **Direct-to-Student**.
- Tái định vị (Repositioning) thành "Gia sư bóc tách tư duy" nhắm vào tệp học sinh Trung bình-Khá.
- Thay đổi UX thành mô hình **Giàn giáo Kép (Dual-Scaffolding)**: Trắc nghiệm để mớm đường lối + Bắt buộc gõ kết quả để ép tính toán thực sự.
- Tích hợp chiến lược cảm xúc (Empathetic Hinting) từ Day 16 để xử lý khi học sinh gõ sai.
- Ứng dụng vòng lặp Viral Freemium (Tặng 3 credit/ngày, Share để nhận thêm) để tối đa hoá số lượng User mà vẫn giữ an toàn Unit Economics.
- Xuất file `submission.md` (Version C) - Phiên bản Final hoàn hảo nhất.

**Bước 6: Tinh chỉnh Văn hóa (Cultural Localization)**
- Phát hiện điểm mù văn hóa (Cultural Mismatch): Học sinh Việt Nam ngần ngại khoe thành tích với bố mẹ vì khoảng cách thế hệ và áp lực kỳ vọng.
- Hủy bỏ kịch bản "Báo cáo Vinh danh" (Trophy Report) gửi Phụ huynh. Thay vào đó, sử dụng kịch bản **"Đơn xin tài trợ học tập" (Parent Sponsoring)**.
- Khi học sinh hết 3 lượt giải, app sẽ gửi tin nhắn thực dụng xin phụ huynh gia hạn gói 99k/tháng. Kịch bản này đánh đúng vào tử huyệt "Sẵn sàng hi sinh tài chính vì việc học của con" của phụ huynh Châu Á, đồng thời gỡ bỏ áp lực "phải thể hiện tình cảm/khoe khoang" cho học sinh.
- Cập nhật lại bản `submission.md` (Version Final).

**Bước 7: Lược bỏ Tiền tệ (Retention First)**
- Founder đưa ra quyết định sắc bén: **Tạm gác bài toán kiếm tiền (Monetization)**. Không ép share, không quảng cáo, không gói 99k.
- Nhận thức rủi ro: Nếu sản phẩm cốt lõi (Core UX) chưa đủ tốt mà đã chèn ép kiếm tiền/tăng trưởng ảo thì sẽ giết chết MVP ngay từ trứng nước.
- Hành động: Lược bỏ toàn bộ luồng Parent Sponsoring, Viral Loop. Đưa MVP về dạng nguyên thủy nhất: 100% miễn phí để kiểm chứng giả định duy nhất: **"Mô hình Dual-Scaffolding có giữ chân (Retention) được học sinh Trung bình-Khá hay không?"**.
- Cập nhật lại toàn bộ file `submission.md` tập trung vào Metrics: Session Completion và Retention.
