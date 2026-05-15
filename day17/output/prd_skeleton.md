# PRD Skeleton: SmartHint AI

## 1. Problem Statement
Học sinh Trung bình-Khá (6.0-8.0) thường xuyên bế tắc khi tự học ở nhà. Dùng QANDA thì không hiểu bản chất (giải vắn tắt/nhảy bước), mà thuê gia sư 1:1 thì tốn kém và không có mặt ngay lúc 11h đêm.

## 2. Target User
- End-User & Primary Advocate: Học sinh THPT (15-18 tuổi), lực học Trung bình-Khá, muốn hiểu bài để tự tin lên bảng/đi thi nhưng hay nản chí.
- Buyer: Phụ huynh cần tín hiệu tiến bộ học tập đáng tin cậy nhưng không muốn làm con bị áp lực giám sát.

## 3. User Stories
- Story 1 (Định hướng): As a học sinh đang nhìn một bài toán trống trơn không biết bắt đầu từ đâu, I want nhận được một câu hỏi trắc nghiệm A/B gợi ý hướng giải, so that tôi có thể bắt tay vào làm mà không bị quá tải não bộ.
- Story 2 (Thực thi): As a học sinh, I want AI chỉ ra lỗi sai nhỏ của tôi (ví dụ: nhầm dấu trừ) bằng một giọng điệu thân thiện, so that tôi tự sửa được lỗi mà không cảm thấy mình ngu ngốc.
- Story 3 (Buyer-safe): As a phụ huynh, I want nhận báo cáo tiến bộ tuần ở mức tổng quan, so that tôi biết con đang học thật mà không cần giám sát vi mô.
- Story 4 (Transparency): As a học sinh, I want được biết rõ dữ liệu nào được gửi cho phụ huynh và được xem trước báo cáo tuần, so that tôi không có cảm giác bị theo dõi bí mật.

## 4. MVP Scope
Đã định nghĩa ở `mvp_boundary.md` (In-Scope / Out-of-Scope / Non-Goals).

## 5. Success Metrics
- North Star: Session Completion Rate > 60%.
- Secondary: W1/W2 Retention Rate.
- Guardrail: Tỷ lệ phiên kích hoạt fallback < 25%.
- Buyer Trust: Tỷ lệ phụ huynh mở báo cáo tuần > 50%, đồng thời W1 retention của học sinh không giảm quá 5 điểm phần trăm.

## 6. Dependencies & Constraints
- Dependencies: Google AI API, kho bài chuẩn THPT nội bộ, hệ thống log transcript/event theo từng bước.
- Constraints: Không có nút "xem full lời giải", MVP chỉ hỗ trợ text + công thức gõ tay.
- Privacy constraint: Báo cáo phụ huynh chỉ hiển thị dữ liệu tổng quan, không hiển thị toàn bộ transcript để tránh tạo cảm giác bị theo dõi.
- Trust constraint:
  - Không có cảnh báo real-time theo từng lỗi sai gửi phụ huynh.
  - Học sinh phải thấy trước "bản tóm tắt phụ huynh nhận được".
  - Ngôn ngữ báo cáo theo hướng hỗ trợ học tập, không mang tính trừng phạt.

## 7. Model Selection Rationale
- Model: Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`).
- Pricing official (as-of 2026-05-11):
  - Standard: Input $0.10/1M token (text/image/video), Output $0.40/1M token.
  - Batch/Flex: Input $0.05/1M token (text/image/video), Output $0.20/1M token.
- Lý do: Ưu tiên chi phí thấp cho tần suất hỏi cao của học sinh, vẫn giữ chất lượng đủ tốt cho luồng Socratic gợi mở ngắn.
- Trade-off: Chấp nhận độ chính xác thấp hơn model đắt tiền ở một số bài khó để đổi lấy khả năng scale freemium.

## 8. Data Requirements
- Prompt tĩnh theo "Socratic Dual-Scaffolding".
- RAG nhẹ từ thư viện dạng toán THPT chuẩn Bộ GD&ĐT.
- Seed data ngày 1 theo 3 chuyên đề: Hàm số, Mũ-Log, Nguyên hàm.
- Cập nhật batch hàng tuần dựa trên log "điểm kẹt".

## 9. Fallback UX
- Trigger:
  1) Timeout > 5 giây, hoặc
  2) AI đánh giá không nhất quán 2 lần liên tiếp cùng một bước, hoặc
  3) Học sinh sai 3 lần liên tiếp ở một checkpoint.
- Action:
  1) Chuyển sang hint cứng rule-based do giáo viên biên soạn.
  2) Nếu vẫn kẹt: mở video 30-45 giây giải thích đúng bước đang kẹt (không lộ full solution).
  3) Hiển thị thông báo quản trị kỳ vọng: AI có thể sai và học sinh cần kiểm tra lại phép tính.
