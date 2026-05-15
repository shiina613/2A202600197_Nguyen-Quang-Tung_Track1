# Báo Cáo Bằng Chứng Thực Thi & Bài Học Kỹ Thuật (Competitor Execution Evidence)

Tài liệu này ghi nhận các bằng chứng thực tế về cách các đối thủ trên thị trường (Photomath, QANDA, Khanmigo) đã xử lý 3 rủi ro thi công (Execution Risks) chí mạng. Từ những bài học xương máu này, chúng ta định hình các ràng buộc kỹ thuật (Technical Constraints) cho bản AI PRD của MathHint ở Day 17.

---

## 1. Rủi ro "Bức tường chữ" (Wall of Text & Cognitive Friction)

- **Bằng chứng thất bại (Khanmigo & ChatGPT):** 
  Khanmigo sử dụng mô hình đàm thoại (Conversational AI) thuần túy. Hệ quả là AI thường xuyên tạo ra các đoạn văn bản giải thích dài dòng, mang nặng tính giáo điều (preachy). Đối với một học sinh đang mệt mỏi và bế tắc lúc 10h đêm, việc phải đọc một "bức tường chữ" trên màn hình điện thoại tạo ra lực ma sát nhận thức (Cognitive Friction) khổng lồ, khiến họ thoát app ngay lập tức.
- **Bằng chứng thành công (Photomath / QANDA):** 
  Họ hầu như KHÔNG sử dụng văn bản (Text). Toàn bộ lời giải được render dưới dạng công thức toán học chuẩn (LaTeX / MathML) chia thành từng bước rõ ràng (Step-by-step). Mắt học sinh chỉ cần quét qua các con số, cực kỳ dễ tiếp thu.
- **$\rightarrow$ Constraint cho MathHint (PRD):** 
  - Giao diện UI không được hiển thị như một đoạn văn. Phải là dạng **Flashcard** hoặc **Bong bóng chat siêu ngắn**.
  - System Prompt phải có lệnh ngặt nghèo: *"Tuyệt đối không phản hồi quá 2 câu. Bắt buộc hiển thị công thức toán bằng định dạng LaTeX dễ nhìn."*

---

## 2. Rủi ro "Ảo giác Toán học" (Hallucination)

- **Bằng chứng thành công (Photomath):** 
  Sự thật bất ngờ là Photomath **KHÔNG dùng LLM (AI Ngôn ngữ)** để tính toán. Sau khi dùng OCR để đọc đề, họ chuyển dữ liệu vào một Hệ thống Đại số Máy tính (Computer Algebra System - CAS). Đây là hệ thống logic cứng (Deterministic), đảm bảo kết quả toán học luôn đúng 100%. 
- **Bằng chứng đi đường vòng (QANDA):** 
  QANDA scan đề và tìm kiếm ảnh tương tự (Image Retrieval) trong kho Database khổng lồ đã được giải sẵn. Nếu không có, bài toán được đẩy cho Gia sư người thật (Human Tutor).
- **Bằng chứng thành công (Khanmigo):** 
  Sử dụng GPT-4 kết hợp công cụ thực thi mã ngầm (Code Interpreter). Thay vì để AI tự nhẩm tính (rất dễ sai số học), Khanmigo ép AI viết code Python để tính toán ngầm, sau đó mới dùng kết quả đó để nói chuyện với học sinh.
- **$\rightarrow$ Constraint cho MathHint (PRD):** 
  - Với MVP, System Prompt bắt buộc phải có kiến trúc **"Thinking Scratchpad" (Vùng Suy Nghĩ Ngầm)**. AI phải tự giải nháp bài toán từ A-Z một cách thầm lặng trước (bằng Chain of Thought) để đảm bảo độ chính xác, sau đó mới chiết xuất ra một Hint (Gợi ý) duy nhất để gửi cho học sinh. Tuyệt đối không để AI vừa chat vừa nhẩm tính.

---

## 3. Rủi ro "Chuyển mạch Sư phạm" (Mode Switching Failures)

- **Bằng chứng thất bại (Khanmigo):** 
  Khanmigo bị ám ảnh bởi phương pháp Socratic. Dù học sinh hoàn toàn mất gốc (không biết một chút gì về khái niệm), AI vẫn cứng nhắc đặt câu hỏi: *"Em nghĩ bước tiếp theo chúng ta nên làm gì?"*. Điều này gây ức chế tột độ, học sinh phản kháng bằng cách gõ: *"I don't know, just tell me"*.
- **$\rightarrow$ Constraint cho MathHint (PRD):** 
  - **KHÔNG để AI tự đoán** trạng thái của học sinh. Sự thiếu chính xác của AI trong việc đánh giá tâm lý sẽ phá nát vùng "An toàn tâm lý".
  - **Giải pháp UI/UX:** Trao quyền kiểm soát cho học sinh (User Control). Ngay khi chụp ảnh xong, giao diện hiển thị 2 Nút bấm (Buttons) rõ ràng:
    - 🔘 **[Nút 1 - Hint Mode]:** *"Chỉ cho em gợi ý bước 1"* (Dành cho học sinh chỉ kẹt ở một nút thắt).
    - 🔘 **[Nút 2 - Explain Mode]:** *"Em quên dạng này rồi, giảng lại từ đầu giúp em"* (Dành cho học sinh mất gốc).
  - Hành động bấm nút của người dùng sẽ kích hoạt System Prompt tương ứng phía sau, loại bỏ hoàn toàn rào cản suy đoán.
