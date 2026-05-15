# 00 · User Journey Simulation — Đóng vai Tourist

> **Mục tiêu**: Trước khi tính chi phí, nhóm phải hình dung được khách hàng thật sự hỏi gì, hỏi như thế nào, và 1 conversation thực tế trông ra sao.
>
> **Thời gian**: 8 phút (trong 15 phút phần Setup)

---

## Tại sao phải làm bước này?

Nếu nhóm bắt đầu tính cost mà chưa biết tourist hỏi gì → mọi con số chỉ là lý thuyết. Bước này buộc nhóm "chạm" sản phẩm trước khi mở Excel.

---

## Bước 1 — Mỗi người đóng vai 1 tourist (4 phút)

Tưởng tượng mình là 1 khách du lịch nước ngoài đang plan trip Việt Nam. Bạn vừa mở website công ty du lịch, thấy có chatbot ở góc màn hình. Bạn sẽ hỏi gì?

Trước khi viết, tự hỏi:

- Mình từ đâu đến? Mỹ, Anh, Hàn, Nhật, Úc?
- Đi 1 mình hay đi nhóm? Budget khoảng bao nhiêu?
- Đã biết gì về Việt Nam? Lần đầu đến hay đã đến rồi?
- Mình lo lắng điều gì nhất? (visa, an toàn, ngôn ngữ, thời tiết, ẩm thực, lừa đảo...)

Viết **5–7 câu hỏi bằng tiếng Anh** mình sẽ thật sự gửi cho chatbot. Viết câu hỏi tự nhiên, đúng giọng tourist — không phải đặt câu hỏi "nghe có vẻ technical".

→ Mỗi người viết vào ô dưới (chưa có gì sẵn — đừng nhìn người bên cạnh):

### Tourist #1 (Tên thành viên: Nguyễn Quang Tùng — đóng vai Sarah, solo traveler, Mỹ, lần đầu đến VN, budget $1,500/10 ngày)

```text
1. Hi! Do I need a visa to visit Vietnam? I'm a US citizen staying for 10 days.
2. Is it safe to travel solo as a woman in Vietnam? Any areas I should avoid?
3. What's the best route for 10 days if I want to see both north and south?
4. How much should I budget per day for food and transport?
5. I've heard about scams targeting tourists — what should I watch out for?
6. Can you help me book a Ha Long Bay cruise for next Thursday?
7. What vaccines or health precautions do I need before coming?
```

### Tourist #2 (Tên thành viên: Tạ Thị Thùy Dương — đóng vai James & Emma, cặp đôi Anh, honeymoon, budget cao ~$3,000)

```text
1. We're looking for a luxury honeymoon experience in Vietnam — what do you recommend?
2. What's the best fine dining in Hoi An? We love seafood.
3. Can you arrange a private cooking class for two in Hanoi?
4. We want to book a 5-star resort in Da Nang with a beach view — what's available?
5. Is there a direct flight from Ho Chi Minh City to Phu Quoc?
6. What's the weather like in central Vietnam in June? We're worried about rain.
7. We had a terrible experience with our airport transfer yesterday — the driver was 2 hours late. Who can I speak to about this?
```

### Tourist #3 (Tên thành viên: Trịnh Xuân Đạt — đóng vai Yuki, nhóm 4 bạn Nhật, đã đến VN 1 lần, muốn khám phá sâu)

```text
1. We visited Ho Chi Minh City last year. This time we want something off the beaten path — any suggestions?
2. Are there any local festivals happening in Hue in the first week of July?
3. What's the current weather forecast for Sapa this weekend?
4. Can you recommend a 3-day trekking tour in Ha Giang for a group of 4?
5. Do we need to re-apply for an e-visa if we already got one last year?
6. What's the best way to get from Hanoi to Ninh Binh — train or private car?
7. I want to book the Ha Giang loop tour for 4 people starting next Monday.
```

---

## Bước 2 — Gom lại và phân loại (4 phút)

Cả nhóm chụm vào, gom tất cả câu hỏi lại. Trước khi điền bảng, thảo luận 1 phút:

- Có câu hỏi nào lặp lại giữa các tourist không? → Có: visa, thời tiết, booking tour
- Có chủ đề nào không ai trong nhóm nghĩ tới ban đầu nhưng quan trọng? → Health/vaccine, scam awareness, transport logistics
- Câu nào chatbot có thể trả lời được? Câu nào cần chuyển sang nhân viên thật? → Booking cụ thể + khiếu nại cần chuyển người

5 intent có sẵn (tham khảo `cost-reference-card.md` mục 2):

- **Visa/Policy** — chính sách, thủ tục nhập cảnh
- **Điểm đến/Guide** — gợi ý đi đâu, làm gì, ăn gì
- **Thời tiết/Sự kiện** — info real-time
- **Tour/Booking** — đặt vé, đặt tour, đặt phòng → chuyển sales
- **Khiếu nại** — phàn nàn → chuyển manager

Sau khi gom, điền bảng phân loại:

| # | Câu hỏi (1 dòng) | Intent thuộc loại nào | Cần bao nhiêu lượt chat để xong? | Bot trả lời hay chuyển người? |
|---|---|---|---|---|
| 1 | Do I need a visa? US citizen, 10 days | Visa/Policy | 2–3 lượt | ☑ Bot |
| 2 | Is it safe to travel solo as a woman? | Guide (safety tips) | 2 lượt | ☑ Bot |
| 3 | Best route for 10 days north + south? | Guide/Destination | 3–4 lượt | ☑ Bot |
| 4 | Budget per day for food and transport? | Guide | 2 lượt | ☑ Bot |
| 5 | Luxury honeymoon recommendations? | Guide/Destination | 3–4 lượt | ☑ Bot |
| 6 | Best fine dining seafood in Hoi An? | Guide (ẩm thực) | 2 lượt | ☑ Bot |
| 7 | Book Ha Long Bay cruise next Thursday | Tour/Booking | 1 lượt (handoff) | ☑ Người |
| 8 | Weather in central Vietnam in June? | Weather/Event | 2 lượt | ☑ Bot |
| 9 | Festivals in Hue first week of July? | Weather/Event | 2 lượt | ☑ Bot |
| 10 | E-visa re-application needed? | Visa/Policy | 2–3 lượt | ☑ Bot |
| 11 | Book Ha Giang loop tour for 4 people | Tour/Booking | 1 lượt (handoff) | ☑ Người |
| 12 | Airport transfer complaint — driver 2hrs late | Khiếu nại | 1 lượt (escalate) | ☑ Người |
| 13 | Book 5-star resort Da Nang beach view | Tour/Booking | 1 lượt (handoff) | ☑ Người |
| 14 | Current weather forecast Sapa this weekend | Weather/Event | 1–2 lượt | ☑ Bot |
| 15 | Off the beaten path suggestions (đã đến VN) | Guide/Destination | 3–4 lượt | ☑ Bot |

---

## Bước 3 — Rút insight cho nhóm (cuối phần Setup)

Trả lời nhanh 4 câu — sẽ dùng lại ở các bước sau:

**Tổng số câu hỏi nhóm gom được**:

```text
21 câu hỏi (7 × 3 tourist), gom lại thành 15 câu đại diện (loại trùng)
```

**Phân bố intent thực tế của nhóm** (% mỗi intent):

```text
Guide/Destination: 47% (7/15 câu)
Visa/Policy: 13% (2/15 câu)
Weather/Event: 20% (3/15 câu)
Booking: 13% (2/15 câu — chuyển sales)
Khiếu nại: 7% (1/15 câu — escalate)
```

**Số lượt chat trung bình để xong 1 chủ đề**:

```text
Guide: 3 lượt trung bình (hỏi → bot trả lời → follow-up → done)
Visa: 2–3 lượt (hỏi → bot trả lời → clarify nếu cần)
Weather: 1–2 lượt (hỏi → bot trả lời ngay)
Booking: 1 lượt rồi handoff
Khiếu nại: 1 lượt rồi escalate
```

**Đối chiếu với đề bài** (Scenario A = 4 lượt, Scenario B = 7 lượt):

```text
Hợp lý vì: Scenario A (4 lượt) phù hợp với tourist hỏi 1 chủ đề đơn giản (guide/visa).
Scenario B (7 lượt) phù hợp với tourist hỏi nhiều chủ đề trong 1 conversation hoặc
cần tư vấn sâu (lộ trình 10 ngày, so sánh options). Mùa cao điểm khách hỏi kỹ hơn
trước khi quyết định booking → conversation dài hơn.
```

**Insight bất ngờ — điều gì nhóm chỉ hiểu sau khi đóng vai?**

```text
1. Tourist thường mix nhiều intent trong 1 conversation (hỏi visa → rồi hỏi luôn lộ trình → rồi muốn book).
2. Câu hỏi visa phức tạp hơn tưởng — "rules changed recently" đòi hỏi web search real-time, RAG cũ có thể sai.
3. Guide/Destination chiếm tỷ trọng lớn nhất (~50%) — đây là intent cần optimize cost nhất vì volume cao.
4. Khiếu nại tuy ít (7%) nhưng rủi ro cao nhất nếu bot xử lý sai → cần routing chính xác.
```

---

## Bảng kiểm trước khi sang file tiếp theo

- [x] Mỗi người trong nhóm đã viết ≥5 câu hỏi tourist
- [x] Đã gom + phân loại intent cho ≥10 câu (bảng trên)
- [x] Đã có phân bố intent % của nhóm (so với đề bài)
- [x] Có ít nhất 1 insight về cách tourist thật sự dùng chatbot

Xong → mở `01-base-flow.md`.
