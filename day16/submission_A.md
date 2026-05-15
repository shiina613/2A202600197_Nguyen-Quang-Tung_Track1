# Day 16 Submission
## Members
Nguyễn Quang Tùng - 2A202600197

## 1. Idea reframed

Original idea:

"Hỗ trợ bài tập - Gợi ý thông minh không có đáp án" (chứ không phải "Gia sư AI bằng cách đưa gợi ý").

Reframed as a product opportunity:

Cơ hội xây dựng một "Gia sư Đồng hành" (Study Buddy) giải quyết trực tiếp tình trạng bế tắc bài tập đêm khuya của học sinh THPT. Niềm tin cốt lõi của chúng tôi là: Bằng cách sử dụng kiến trúc AI có bộ rào chắn khắt khe (Socratic Guardrails) kết hợp với UI/UX thân thiện, chúng tôi có thể vừa thỏa mãn nhu cầu "gỡ bí" khẩn cấp của học sinh, vừa giải quyết nỗi đau "sợ con học vẹt/gian lận" của phụ huynh, tạo ra một sản phẩm EdTech có tính đạo đức và khả năng sinh lời thực tế.

## 2. Customer / Segment Card

Segment name: Học sinh THPT (Lớp 10-12) tự học Toán có lực học Trung bình - Khá.

Operational context: Tự học một mình vào buổi tối / đêm khuya tại nhà. Đang giải bài tập về nhà hoặc luyện đề nhưng không có giáo viên/gia sư hỗ trợ ngay lập tức.

Recurring workflow: Đọc đề → Nháp thử → Bị tắc/Tính sai → Dùng AI/Google search → Nhận full kết quả → Ghi chép lại thụ động → Chuyển bài.

Pain moment: 1. (Học sinh): Khủng hoảng lúc 11h đêm khi bị tắc, sợ chép mạng ngày mai lên bảng không biết giải thích.
2. (Phụ huynh): Áp lực học phí gia sư đắt đỏ; bất lực khi con lạm dụng AI để chép giải dẫn đến điểm thi thật thấp.
3. Đôi khi con ngoan, có ý thức học, nhưng hỏi bố mẹ thì bố mẹ đã quên kiến thức hoặc không có kỹ năng giảng dạy tốt -> đưa đáp án chứ không thể giải thích cho con tại sao, hoặc bố mẹ cũng không giải quyết được"

Why now: Phụ huynh/Giáo viên đang "báo động đỏ" về thế hệ học sinh gian lận bằng GenAI. Nền kinh tế thắt chặt khiến phụ huynh tìm giải pháp thay thế gia sư 1-1 đắt đỏ.

Access path: TikTok/IG Reels (Khoe giao diện Aesthetic chill & khoảnh khắc AI khéo léo gợi ý); Influencer Marketing (Studygram); Product-led Growth (Referral để nhận thêm lượt giải bài).

One-sentence description:

Học sinh THPT lực học Khá/Trung bình, thường xuyên bế tắc khi tự học Toán đêm khuya và cần sự hướng dẫn từng bước một cách đồng cảm, không phán xét, thay vì bị "đút tận miệng" đáp án.

## 3. Need Map (3 needs)

Need #1 (Priority - Dành cho Học sinh)

Statement (JTBD): When [bị bế tắc bài tập Toán lúc nửa đêm], I want [có người gỡ rối từng bước ngay lập tức bằng ngôn ngữ dễ hiểu], so I can [hoàn thành bài đúng hạn và tự tin hiểu bài để sáng mai lên bảng].

Current workaround: Hỏi bạn bè (thường không rep vì khuya), dùng QANDA/ChatGPT lấy full đáp án.

Pain signal: Trạng thái stress, mệt mỏi lúc 11h đêm; hoang mang khi nhìn cách giải lạ hoắc của AI thông thường (thậm chí AI giải sai logic).

Evidence / proxy evidence: Traffic các nền tảng giải toán luôn đạt đỉnh (peak) vào khung giờ 9:00 PM - 11:30 PM.

Why underserved: Gia sư đi ngủ. ChatGPT/QANDA thì đưa kết quả cuối cùng quá nhanh, bỏ qua việc diễn giải tư duy, đôi khi mắc bệnh "nịnh bợ" (Sycophancy) hùa theo đáp án sai của học sinh.

Need #2 (Monetization - Dành cho Phụ huynh)

Statement (JTBD): When [con tự học ở nhà], I want [một công cụ kèm cặp với chi phí thấp ép con tự tư duy], so I can [yên tâm con không học vẹt, tối ưu hóa được chi phí gia sư].

Current workaround: Thuê sinh viên kèm 1-1 (2-3 triệu/tháng); tự dạy con (xung đột gia đình); cấm dùng điện thoại (cực đoan).

Pain signal: Cảm giác áy náy/bất lực khi thấy con loay hoay hỏi bài nhưng mình không đủ trình độ giải đáp. Tức giận vì điểm bài tập về nhà cao (do chép mạng) nhưng điểm thi thực tế lẹt đẹt.

Evidence / proxy evidence: Làn sóng bài xích AI gian lận trên các hội nhóm Phụ huynh/Giáo viên.

Why underserved: Các EdTech giải toán hiện tại là "kẻ thù" của phụ huynh vì dung túng gian lận. Chưa có một AI nào đóng vai trò "Người giám sát" kỷ luật.

Need #3 (Loyalty - Dành cho Học sinh)

Statement (JTBD): When [mất gốc hoặc quên kiến thức nền tảng], I want [một không gian an toàn tâm lý], so I can [thoải mái hỏi những câu cơ bản nhất mà không sợ bị phán xét hay chê cười].

Current workaround: Giấu dốt, lén lút search Google công thức cũ.

Pain signal: Thái độ thu mình, cáu gắt khi bị mắng "dễ thế mà không biết".

Evidence / proxy evidence: Các nghiên cứu cho thấy "Nỗi sợ thất bại / sợ bị đánh giá" là rào cản số 1 khiến học sinh ngừng đặt câu hỏi trên lớp.

Why underserved: Giáo viên/Gia sư đôi khi thiếu kiên nhẫn. Các chatbot thông thường lại quá khô khan.

## 4. Strategy Statement

For học sinh THPT
who struggle with việc bế tắc bài tập Toán giữa đêm nhưng thiếu người hướng dẫn (dẫn đến việc lạm dụng chép giải và hổng kiến thức),
our product helps them tự mình gỡ rối và hiểu sâu bản chất Toán học
through phương pháp gợi mở Socratic kiên quyết không cho đáp án,
unlike các công cụ AI hiện hành (như ChatGPT hay QANDA) luôn cung cấp sẵn lời giải,
because we can leverage kiến trúc AI Guardrails chuyên biệt tách rời luồng đánh giá và giao tiếp, giúp ngăn chặn tuyệt đối việc AI "đút tận miệng" hay nịnh bợ (sycophancy) người dùng.

## 5. Moat Hypothesis

Moat mechanism: Kiến trúc Socratic Guardrails & Domain-learning Flywheel về sai lầm của học sinh.

If we deploy [N] times in [ngách gỡ rối Toán THPT], the following improve:

Hệ thống càng nhận diện chính xác các "bẫy nhận thức" và lỗi sai phổ biến của học sinh Việt Nam.

Prompt đánh giá (evaluateAnswerAttempt) càng chặt chẽ, tỷ lệ AI bị "thao túng" (jailbreak/sycophancy) để nhả đáp án tiến gần về 0.

Hồ sơ học tập (Student Memory Profile) của user càng dày, gợi ý đưa ra càng mang tính cá nhân hóa sâu sắc (biết user hay hổng kiến thức ở đâu).

Why competitors cannot easily replicate this:

Big Tech (OpenAI, Google) định vị sản phẩm của họ là "Answer Engine" nhằm tối đa hóa sự hài lòng tức thì của user; việc ép AI "từ chối trả lời" đi ngược lại DNA sản phẩm của họ. Các EdTech quét ảnh (QANDA, Photomath) phụ thuộc vào core đưa đáp án nhanh để hút traffic, việc đổi sang UI chat Socratic chậm rãi sẽ phá vỡ mô hình doanh thu quảng cáo hiện tại của họ.

## 6. Initial TAM / SAM / SOM view

| Layer | Estimate | Key assumptions | Confidence |
|---|---|---|---|
| TAM | ~$96M/year | 2.69M học sinh THPT có internet x LTV 900k/năm. | High |
| SAM | ~$26M/year | Loại bỏ 40% (xuất sắc/quá lười). Mức độ sẵn sàng chi trả (WTP) ở giá 99k/tháng là 45%. | Med |
| SOM | ~$780k/year | Đạt 3% thị phần của SAM (21.5k paying users) trong 12-18 tháng đầu tiên nhờ KOCs/TikTok. | Med |

Top 3 unknowns requiring further research:

The Real Buyer: Phụ huynh sẽ là người trực tiếp quẹt thẻ mua gói, hay học sinh sẽ tự mua bằng tiền tiêu vặt qua Momo? (Quyết định thông điệp Marketing chốt sale).

Free-to-Paid Conversion: Hành vi "bí bài" là rất cao, nhưng tỷ lệ chuyển đổi sang trả phí sau khi hết số lượt gỡ rối miễn phí (Free Quota) lúc 11h đêm sẽ là bao nhiêu?

Churn Rate: Học sinh có lập tức hủy gói cước ngay sau khi kết thúc kỳ thi Giữa kỳ/Cuối kỳ không?

Judgment:

[x] Worth pursuing now

[ ] Worth pursuing but not now (need to validate [...] first)

[ ] Not worth pursuing as currently framed
(Lý do: Doanh thu năm 1 khả quan; thị trường đang rất nhức nhối với nạn gian lận bằng AI; định vị Socratic tạo ra hào cản "Ethical AI" không đối đầu trực tiếp với Big Tech).

## 7. Positioning Note (2 sentences)

What we are:

Chúng tôi là "Gia sư Đồng hành" (Study Buddy) an toàn tâm lý, dắt tay học sinh tự tư duy để vượt qua bế tắc bài tập thông qua gợi ý Socratic.

What we are not / not yet:

Chúng tôi TUYỆT ĐỐI KHÔNG PHẢI là "Máy giải Toán hộ" (Solver) cung cấp lời giải hoàn chỉnh để học sinh sao chép đối phó.

## 8. Self-assessment before Day 17

Trong 6 mắt xích (Idea, Customer, Need, Strategy, Moat, Market Size), mắt xích nhóm đang yếu nhất là:

Customer / Need (Sự phân ly giữa User và Buyer). Chúng ta thiết kế sản phẩm "làm khổ" học sinh (ép tư duy, không cho đáp án) để làm hài lòng người trả tiền (Phụ huynh). Rủi ro học sinh phản kháng và bỏ app (Retention thấp) là rất lớn nếu phần UI/UX "Vùng an toàn tâm lý" làm không đủ tốt.

Open questions chúng tôi muốn khám phá thêm ở Day 17:

Làm thế nào để viết PRD (Product Requirements Document) cân bằng được giữa một giao diện cực kỳ Aesthetic/Gen Z cho Học sinh, nhưng lại ngầm chứa luồng kiểm soát khắt khe của Phụ huynh?

Giả định rủi ro nhất (Riskiest Assumption) cần đưa vào MVP để test ngay lập tức là gì? (Ví dụ: Sự kiên nhẫn của học sinh khi phải chat qua lại 3 lượt mới ra kết quả).

Làm sao để định lượng (Metric) được "Sự hiểu bài thực chất" để show cho phụ huynh xem, chứng minh app có hiệu quả?