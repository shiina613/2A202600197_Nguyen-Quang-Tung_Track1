---
artifact: 03-takenotes — Quan sát cá nhân sau phần chia sẻ nhóm khác
bai-tap: 3 — Quan sát + rút ra bài học (cá nhân)
phase: Sau phần shareout của các nhóm
time: 15 phút (xem deck slide 4 để biết khung giờ chính xác)
input: Phần thuyết trình của ít nhất 2 nhóm khác trên lớp
nop-cuoi: Có — file cuối Lab 3 (cá nhân)
---

# 03 — Take notes: quan sát + bài học cá nhân

Đây là phần cá nhân. Sau khi nhóm bạn trình bày Lab 2 và nghe ít nhất 2 nhóm khác chia sẻ Analysis Report của họ, bạn ghi lại quan sát + bài học của riêng mình vào file này.

Mục tiêu: rèn kỹ năng nghe, đối chiếu, và rút ra bài học từ phân tích của người khác — không chỉ từ phân tích của chính nhóm mình.

Quy tắc khi viết:

- Trích dẫn cụ thể tên sản phẩm + nhóm đã quan sát (không nói chung chung).
- Bằng chứng yếu / lập luận lỏng cần chỉ rõ chỗ nào trong slide deck của nhóm khác.
- Câu hỏi đặt cho nhóm khác phải gắn với bằng chứng cụ thể từ phần trình bày của họ.

---

## Thông tin

- **Mã học viên**: 2A202600197
- **Họ tên**: Nguyễn Quang Tùng
- **Ngày**: 2026-05-14
- **Nhóm Lab 2 của tôi**: Perplexity vs Gemini trong ngành Tìm kiếm (Track A)

---

## Phần 1 — Nhóm đã quan sát (≥ 2 nhóm khác)

| # | Tên nhóm / mã 2 học viên | Ngành | 2 sản phẩm họ test |
|---|---|---|---|
| 1 | Nhóm Lập trình (Track B) | Lập trình | Cursor vs GitHub Copilot |
| 2 | Nhóm Nghiên cứu (Track D) | Nghiên cứu | NotebookLM vs Elicit |

---

## Phần 2 — Điều thấy hay từ nhóm khác

Góc nhìn / framework / case study mà nhóm khác đưa ra mà nhóm mình chưa nghĩ tới.

**Quan sát 1** (từ nhóm: Lập trình — Cursor vs GitHub Copilot):

- Cụ thể họ đưa ra: Nhóm chỉ ra Cursor đang ở trên "Rented Land" (dựa vào API của OpenAI/Anthropic) nhưng vẫn tăng trưởng cực nhanh ($2B ARR) nhờ UX vượt trội — chính xác mô hình "Spark → Loop" rất rõ. Họ dùng khái niệm "Proprietary Funnel" từ Lens 2 để giải thích vì sao Cursor giữ chân người dùng dù nền tảng gốc (VS Code) là miễn phí: vì luồng Cmd+K → Tab → Composer tạo thói quen mà người dùng không muốn quay lại.
- Vì sao tôi thấy hay: Đây là góc nhìn tương tự case Perplexity trong bài Lab 2 của nhóm tôi — cũng "thuê đất" từ OpenAI/Bing nhưng vẫn giữ được người dùng nhờ UX Citation-first. Tôi chưa nghĩ đến việc dùng khái niệm "Proprietary Funnel" để giải thích cơ chế giữ chân, mà chỉ dừng ở mức gọi là "Brand & UX Moat".

**Quan sát 2** (từ nhóm: Nghiên cứu — NotebookLM vs Elicit):

- Cụ thể họ đưa ra: Nhóm so sánh cách 2 sản phẩm xử lý hallucination rất khác nhau. NotebookLM chỉ trả lời dựa trên nguồn đã upload (source-grounded) nên gần như không bịa, còn Elicit trích dẫn nguyên văn câu trong paper kèm DOI. Họ kết luận rằng cả 2 đều chọn chiến lược "giới hạn phạm vi để tăng độ tin cậy" — đây là bài học từ Lens 3 (Trust Signal) mà nhóm tôi chưa khai thác sâu.
- Vì sao tôi thấy hay: Nhóm tôi phân tích Perplexity có citation mạnh nhưng chưa đi sâu vào câu hỏi: "Nếu nguồn web mà Perplexity quét cũng sai thì sao?". NotebookLM giải quyết triệt để vấn đề này bằng cách chỉ dùng tài liệu người dùng tự cung cấp — một kiến trúc tin cậy hoàn toàn khác.

---

## Phần 3 — Điểm yếu / chỗ chưa thuyết phục

Bằng chứng yếu, lập luận lỏng, framework dùng sai. Chỉ rõ chỗ nào trong slide deck của nhóm khác.

**Điểm yếu 1** (từ nhóm: Lập trình — Cursor vs GitHub Copilot):

- Cụ thể: Trong slide S5.4 (Moat), nhóm xếp Cursor có "Network Effect mạnh" nhưng không đưa ra bằng chứng cụ thể. Họ lập luận rằng "cộng đồng Cursor trên Discord đông nên tạo network effect", nhưng Discord community không phải là network effect theo đúng nghĩa (giá trị sản phẩm không tăng tỉ lệ thuận với số người dùng).
- Bằng chứng gì còn thiếu: Không có số liệu DAU/MAU của Cursor community, không có dữ liệu về tỷ lệ churn so với GitHub Copilot. Cần phân biệt giữa "community engagement" và "network effect" thật sự.
- Tôi sẽ đề xuất họ làm thêm gì: Đánh giá lại moat của Cursor theo 5 loại — thực tế Cursor có Switching Cost (thói quen workflow Cmd+K) mạnh hơn là Network Effect. Nên dùng đúng thuật ngữ.

**Điểm yếu 2** (từ nhóm: Nghiên cứu — NotebookLM vs Elicit):

- Cụ thể: Trong slide S4 (Business Signal), nhóm ghi NotebookLM "miễn phí hoàn toàn" rồi kết luận "Mô hình giá tốt hơn Elicit". Đây là lập luận lỏng vì NotebookLM miễn phí không phải vì Google hào phóng, mà vì Google dùng nó để giữ người dùng trong hệ sinh thái (Distribution Moat) và thu thập dữ liệu huấn luyện.
- Bằng chứng gì còn thiếu: Thiếu phân tích chi phí ẩn (người dùng phải upload tài liệu lên Google → Google có thêm data), thiếu so sánh với Elicit Plus ($12/tháng) về giá trị cụ thể nhận được.
- Tôi sẽ đề xuất họ làm thêm gì: Phân tích Cost-Capability-Speed đầy đủ hơn — "miễn phí" không đồng nghĩa với "mô hình giá tốt hơn". Nên đánh giá thêm giá trị mỗi đồng bỏ ra (value per dollar) của Elicit Plus so với NotebookLM Plus.

---

## Phần 4 — Câu hỏi đặt cho nhóm khác

Câu hỏi gắn với bằng chứng cụ thể, không hỏi chung chung.

- Cho nhóm Lập trình: Nhóm xếp Cursor là "STRONG" và Copilot là "PROMISING", nhưng Copilot được tích hợp trực tiếp vào GitHub (platform nơi 100 triệu developer lưu code). Nếu GitHub cho Copilot học từ toàn bộ repo của developer (Data Flywheel cực mạnh), liệu Cursor có bị "Big Squeeze" tương tự Chegg không — khi platform chủ (Microsoft/GitHub) tự làm tính năng tương tự?
- Cho nhóm Nghiên cứu: NotebookLM chỉ trả lời từ nguồn đã upload, nhưng nếu người dùng upload tài liệu sai hoặc thiên lệch thì output cũng sai (garbage in → garbage out). Nhóm đã test trường hợp này chưa? Elicit có cơ chế nào để cảnh báo người dùng về chất lượng nguồn đầu vào không?
- (Bổ sung) Cho cả 2 nhóm: Cả Cursor và NotebookLM đều phụ thuộc vào Google (Gemini API / Google platform). Nếu Google tăng giá API hoặc hạn chế quyền truy cập, chiến lược nào giúp 2 sản phẩm này tồn tại? Đây chính là rủi ro "Rented Land" mà cả nhóm tôi (Perplexity) và nhóm Lập trình (Cursor) cùng đối mặt.

---

## Phần 5 — Điều tôi rút ra cho bản thân

Bài học cụ thể tôi sẽ áp dụng vào lần phân tích sản phẩm AI tiếp theo. Không viết câu chung chung như "tôi học được nhiều" — cụ thể về phương pháp, bằng chứng, hoặc framework.

**Bài học 1**:

- Tôi sẽ làm khác lần sau: Khi phân tích Moat, tôi sẽ phân biệt rõ giữa "Network Effect thật" (giá trị sản phẩm tăng theo số người dùng) và "Community Engagement" (cộng đồng đông nhưng không tạo giá trị vòng lặp). Nhóm Lập trình nhầm lẫn 2 khái niệm này khiến kết luận moat bị lệch.
- Lý do: Trong bài Lab 2 của nhóm tôi, tôi cũng ghi "Perplexity có Brand & UX Moat" mà chưa đi sâu vào cơ chế giữ chân. Lần sau cần mô tả cụ thể hành vi nào tạo Switching Cost (ví dụ: lịch sử tìm kiếm, Collections đã lưu, thói quen dùng Follow-up Questions).

**Bài học 2**:

- Tôi sẽ làm khác lần sau: Tôi sẽ luôn hỏi "Sản phẩm miễn phí thì ai đang trả tiền?" khi đánh giá mô hình giá. Nhóm Nghiên cứu khen NotebookLM "miễn phí = tốt" mà quên rằng Google đang trợ giá bằng dữ liệu người dùng và chiến lược giữ hệ sinh thái.
- Lý do: Bài học từ case Chegg (Lab 1) cho thấy "miễn phí" chính là vũ khí hủy diệt — ChatGPT miễn phí đã phá vỡ mô hình trả phí $15-20/tháng của Chegg. Vì vậy, khi một sản phẩm AI miễn phí, cần phân tích ai đang bị "Big Squeeze" bởi chiến lược giá này.

**Bài học 3**:

- Tôi sẽ làm khác lần sau: Khi so sánh 2 sản phẩm, tôi sẽ test cùng 1 nhiệm vụ nhưng với 2 mức độ phức tạp khác nhau (1 câu hỏi đơn giản + 1 câu hỏi phức tạp) để thấy rõ hơn sự khác biệt về "Capability Ceiling" giữa 2 sản phẩm.
- Lý do: Nhóm tôi chỉ test 1 câu prompt duy nhất (mua laptop 50 triệu), kết quả 2 sản phẩm đều trả lời tốt nên khó phân biệt rõ ràng ở mục S3 (Output Quality). Nếu thêm 1 câu hỏi phức tạp hơn (ví dụ: so sánh 5 mẫu laptop với benchmark AI/ML cụ thể), sẽ thấy rõ sản phẩm nào xử lý sâu hơn.

---

## Checklist trước khi nộp

- [x] Phần 1 ghi rõ ≥ 2 nhóm đã quan sát (mã 2 học viên + ngành + sản phẩm).
- [x] Phần 2 có ≥ 2 quan sát hay, gắn với nhóm cụ thể.
- [x] Phần 3 có ≥ 2 điểm yếu / câu hỏi chưa được trả lời.
- [x] Phần 4 có ≥ 2 câu hỏi cụ thể cho nhóm khác.
- [x] Phần 5 có ≥ 2 bài học rút ra, kèm lý do và cách áp dụng lần sau.
