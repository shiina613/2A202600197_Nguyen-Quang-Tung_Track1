# Day 17 Submission

Student: Nguyễn Quang Tùng - 2A202600197
Date: 24/04/2026

Product idea: SmartHint AI - "Trò chơi giải cứu" lúc 11h đêm giúp học sinh tự gỡ rối bài Toán bằng gợi mở Socratic, đồng thời là "Trợ lý giám sát" gửi báo cáo nỗ lực thực chất cho Phụ huynh (Mô hình Direct-to-Parent).

## 1. MVP Boundary Sheet

### Riskiest Assumption (Giả định rủi ro nhất - Tử huyệt của dự án)

Học sinh (User) đang mệt mỏi và bế tắc lúc 11h đêm sẽ đủ kiên nhẫn để tương tác qua lại (tối đa 3 lượt) với AI Socratic, thay vì bỏ cuộc và lén dùng ChatGPT/QANDA để chép luôn đáp án.

Lý do đây là tử huyệt: Mô hình thu tiền của chúng tôi dựa vào Phụ huynh. Nếu học sinh ức chế và tẩy chay app, hệ thống sẽ không ghi nhận được "phiên học thành công" nào. Cuối tuần, phụ huynh nhận được báo cáo trắng (Zero activity) sẽ lập tức hủy gia hạn gói cước. Sản phẩm sụp đổ hoàn toàn do 100% churn.

### In-Scope (Tối đa 3 tính năng cốt lõi)

1. Core Socratic Hint Engine (GPT-4o): Test giả định: Học sinh hiểu bài và thoát khỏi bế tắc thông qua vòng lặp tối đa 3 gợi ý từ tổng quát đến cụ thể (không bao giờ nhả đáp án).
2. Output Validator (Rào chắn AI): Test giả định: Hệ thống có thể ngầm chặn đứng hoàn toàn hiện tượng AI "nịnh bợ" (Sycophancy) hoặc làm lộ đáp án khi bị học sinh thao túng/jailbreak.
3. UI Chat "Rescue Game" và Mathpix OCR: Test giả định: Giao diện aesthetic, không phán xét và khả năng chụp ảnh toán học mượt mà sẽ giữ chân học sinh không bỏ cuộc giữa chừng.

### Out-of-Scope (Làm sau MVP)

- Practice Problem Generator (Sinh bài tập tương tự): Logic backend quá phức tạp (sinh số liệu, test nghiệm), tốn nguồn lực MVP không cần thiết.
- Teacher Dashboard: Đã pivot chiến lược sang Direct-to-Parent (vì nhận ra nguy cơ tự cắt cơm của giáo viên dạy thêm), không đi qua kênh trường học nữa.
- Tích hợp Payment Gateway tự động: MVP có thể chốt sale qua Fanpage, nạp gói Premium bằng chuyển khoản tay để tiết kiệm 2-3 tuần code tích hợp VNPay/Stripe.

### Non-Goals (Ranh giới đỏ - Tuyệt đối không làm)

- Nút "Xem toàn bộ lời giải" (Show full solution): Sẽ biến SmartHint thành "công cụ gian lận" như Photomath/QANDA, phá hủy định vị "Trợ lý giám sát" và làm mất lòng tin của Phụ huynh (Buyer).
- Trở thành "Máy giải vạn năng" (mở rộng sang Lý, Hóa, Văn, Anh): Mở rộng sớm sẽ gây rủi ro ảo giác (hallucination), phá vỡ cam kết chất lượng.
- Mạng xã hội học tập/Bảng xếp hạng (Leaderboard): Đưa tính năng cộng đồng vào sẽ mang áp lực đồng trang lứa quay trở lại, phá vỡ "vùng an toàn tâm lý" của người dùng.

## 2. PRD Skeleton

### Problem Statement

Phụ huynh tốn kém hàng triệu đồng gia sư và bất lực nhìn con lạm dụng AI chép bài, trong khi học sinh loay hoay bế tắc bài tập đêm khuya mà không có công cụ hướng dẫn từng bước một cách thấu cảm.

### Target User

- End-User (Người dùng): Học sinh THPT (15-18 tuổi), lực học Trung bình-Khá, cần gỡ rối gấp lúc nửa đêm.
- Buyer (Người chi trả): Phụ huynh (35-50 tuổi) có nỗi đau "sợ con học vẹt", sẵn sàng chi trả để quản lý chất lượng tự học của con.

### User Stories

- Story 1 (Học sinh): As a học sinh đang bị bí Toán lúc 11h đêm, I want nhận được gợi ý từng bước cực kỳ dễ hiểu và không phán xét, so that tôi có thể tự làm xong bài tập và tự tin lên bảng sáng mai không sợ bị phạt.
- Story 2 (Phụ huynh): As a phụ huynh bận rộn không thể kèm con học, I want nhận được báo cáo hàng tuần về số lượng bài con đã "tự giải" nhờ AI hướng dẫn, so that tôi biết con đang thực sự nỗ lực chứ không dùng AI để gian lận.

### AI-Specific

Model Selection:

- Model: GPT-4o (Hint Engine) và GPT-4o-mini (Classifier/Validator).

Lý do chọn: Năng lực suy luận logic Toán học và render LaTeX mạnh; instruction-following tốt cho phương pháp Socratic.

Trade-offs chấp nhận:

- Chi phí API mỗi lượt chat cao hơn so với model open-source.
- Độ trễ (latency) cao hơn khi chạy prompt phức tạp.

Trade-offs KHÔNG chấp nhận:

- Ảo giác Toán học (Math hallucination).
- Hiện tượng "nịnh bợ" (Sycophancy).

Data Requirements:

- Nguồn: Cơ sở dữ liệu kiến thức (Vector DB) số hóa từ SGK Toán THPT Việt Nam (RAG).
- Update frequency: Tĩnh (static), chỉ cập nhật khi Bộ GD&ĐT thay đổi chương trình.

Fallback UX:

- Trigger: Khi Output Validator phát hiện LLM leak đáp án 3 lần liên tiếp, hoặc API timeout.
- Hành động: Graceful handover - bỏ qua LLM, hệ thống xuất "Hint Template cứng" (hardcoded) đã được viết sẵn bởi giáo viên cho dạng bài đó.

### Success Metrics

- Primary metric: Session Completion Rate (tỷ lệ học sinh tự chốt được đáp án sau khi nhận hint mà không bỏ cuộc).
- Ngưỡng thành công: > 60% session kết thúc bằng việc học sinh giải thành công.
- Timeframe: 4 tuần đầu tiên chạy Private Beta.

## 3. Hypothesis Table

### Hypothesis 1 (Dành cho Product: Socratic Hint Engine)

"Chúng tôi tin rằng vòng lặp tối đa 3 gợi ý từ LLM sẽ giúp học sinh đang bế tắc đạt được trạng thái hiểu bản chất và tự giải được bài toán. Chúng tôi sẽ biết mình đúng khi thấy Session Completion Rate đạt >60% trong 4 tuần đầu chạy Beta."

- Riskiest assumption: Học sinh (quen ăn liền đáp án) sẽ đủ kiên nhẫn để chat qua lại 3 lượt với AI lúc 11h đêm.
- Cách test cheapest: Làm "Wizard of Oz" test. Tạo Zalo OA, cho học sinh gửi bài, người thật (đóng vai AI) gõ hint theo logic Socratic để quan sát học sinh có tiếp tục tương tác hay bỏ cuộc.

### Hypothesis 2 (Dành cho Business: Cảm xúc của Buyer)

"Chúng tôi tin rằng báo cáo Zalo thông báo con tự giải bài sẽ giúp Phụ huynh đạt được sự an tâm về việc con không học vẹt. Chúng tôi sẽ biết mình đúng khi thấy Conversion Rate từ Free sang gói trả phí đạt >5% trong tệp phụ huynh được target quảng cáo."

## 4. PMF Scorecard (Bộ lọc PMF đa chiều)

Thay vì chỉ dùng một thước đo đơn lẻ, chúng tôi kết hợp đồng thời hệ sinh thái chỉ số (Hành vi - Cảm xúc - Tiền bạc) để xác nhận PMF chắc chắn hơn.

### 1. Aha Metric (Đo lường sự "Wow" ban đầu)

- Aha Moment (Học sinh): Khoảnh khắc 11h đêm, tự chốt được đáp án sau 2 lần AI "mớm lời" và thốt lên: "Hóa ra mình tự làm được".
- Aha Moment (Phụ huynh): Lần đầu đọc được "Transcript sửa sai" của con trong báo cáo tuần (thấy rõ con sai ở đâu và AI đã nắn lại tư duy thế nào).
- Metric: Tỷ lệ người dùng đạt Aha Moment trong 3 ngày đầu sử dụng (Time-to-Aha).

### 2. Actionable Metrics (Đo lường mức độ nghiện và khát khao)

- Daily Active Inputs (DAI): Số lượng bài toán được chụp/nhập vào hệ thống trung bình mỗi ngày trên một Active User.
- Share-for-Quota Rate: Tỷ lệ học sinh bấm "Share app cho bạn cùng lớp" để nhận thêm lượt giải cứu (Free Requests) khi hết quota miễn phí.

### 3. PMF Method (Kiểm chứng bằng bộ 3 lõi sau 1 tháng)

Để xác nhận PMF, theo dõi đồng thời 3 tín hiệu sau trong chu kỳ 1-Month Free Trial:

- Retention (Tín hiệu Hành vi - User): Tỷ lệ học sinh duy trì việc nhập ít nhất 1 bài toán/tuần đạt >40% ở tuần thứ 4 (W4 Retention).
- Sean Ellis Test (Tín hiệu Cảm xúc - User và Buyer): Cuối tuần 3, pop-up hỏi: "Sẽ cảm thấy thế nào nếu SmartHint ngừng hoạt động?" - đạt ngưỡng >40% chọn "Rất thất vọng".
- 1-Month Trial Conversion (Tín hiệu Tiền bạc - Buyer): Sau 1 tháng dùng thử và nhận đủ báo cáo tuần, dựng paywall. Tỷ lệ phụ huynh nâng cấp Premium 99k/tháng đạt >5%.

Vanity Metrics (sẽ bỏ qua):

- Lượt tải app (Downloads) / Lượt đăng ký (Sign-ups).
- Tổng số tin nhắn chat (học sinh chat nhiều nhưng không giải ra bài -> không tạo giá trị).

## 5. AI Critique Log

| Điểm AI / Mentor chỉ ra | Action | Lý do và thay đổi cốt lõi |
|---|---|---|
| Lỗi AI nịnh bợ (Sycophancy): xác nhận bừa x=500 là đúng | Accept | Rủi ro chí mạng hủy hoại uy tín sản phẩm giáo dục. Đã bổ sung Output Validator vào MVP in-scope. |
| Lệch pha User/Buyer (B2C thuần túy khó thu tiền học sinh) | Accept | Học sinh không lấy tiền tiêu vặt mua app bắt mình nghĩ. Phải thu tiền từ phụ huynh. |
| Mô hình B2B2C qua Giáo viên (rủi ro tự cắt cơm giáo viên dạy thêm) | Accept | Giáo viên dạy thêm sẽ không phân phối "Gia sư AI" thay thế mình. Đã pivot sang Direct-to-Parent. |

Tóm tắt cú pivot lớn nhất (Ver A -> Ver B):
Thay đổi hoàn toàn mô hình kinh doanh và đường tiếp cận. Từ "Gia sư AI bán cho học sinh" sang bán "Sự an tâm về điểm số thực chất" cho Phụ huynh qua quảng cáo trực tiếp, nhưng dùng vỏ bọc UI "Rescue Game" để giữ học sinh tiếp tục sử dụng.

## 6. Self-assessment

Câu hỏi: Mắt xích nào trong chuỗi MVP Boundary -> PRD -> Hypothesis -> PMF đang yếu nhất?

Trả lời: Hypothesis và PMF.

Chúng tôi có thể viết PRD rất chuẩn, code AI Guardrails rất hay, nhưng sự chống đối ngầm của học sinh là ẩn số lớn (chính là Riskiest Assumption). Mô hình Direct-to-Parent bán "nỗi sợ" để chốt sale tháng đầu, nhưng retention phụ thuộc vào việc đứa trẻ có chịu dùng app hay không. Nếu không có ảnh bài toán được gửi lên (không có data), tháng thứ 2 phụ huynh sẽ churn.

Open questions muốn giải đáp tiếp (Day 17+):

1. Làm thế nào để thiết kế "phần thưởng vi mô" (micro-rewards) trong UX để học sinh không có cảm giác bị app hành hạ hay theo dõi?
2. Với việc dùng GPT-4o cho Output Validator (tốn token), làm sao tối ưu Unit Economics để gói cước 99k/tháng vẫn có biên lợi nhuận tốt?
