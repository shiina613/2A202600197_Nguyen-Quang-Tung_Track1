---
artifact: 2 — Lớp chỉ dẫn AI
bai-tap: 2 — Thiết kế giải pháp
demo: ./demo.md
---

# card.md — Lớp chỉ dẫn AI

**Tình huống xử lý**: **F-03** "Mua macbook 3 củ rưỡi" + họ leverage **F-03/F-04/F-05/F-07/F-11**.
Phụ trách thêm: **F-08, F-09** (R8 từ chối ngoài phạm vi); **F-13** (R9 vâng ạ); **F-15** (R10 phân biệt câu ghi chi); **F-14** (R11 tone âu lo); **F-01** (R12 emergency CK nhầm).

Xem [`../../1-map-and-format.md` Phần A](../../1-map-and-format.md#phần-a--chọn-rủi-ro-và-tầng-giải-pháp).

---

## 1. Giải pháp là gì?

System prompt v1 (R1–R12) buộc LLM **không được trả về một con số duy nhất** cho câu chi tiêu. Thay vào đó, LLM phải bóc từng entity tiền thành object có `value_vnd`, `unit_phrase`, `confidence` (0–1), `reason`, `needs_user_confirm`. Khi đơn vị mơ hồ ("củ rưỡi", "lít", "cành", "tờ đỏ") + dictionary không trả hit chắc chắn, LLM **bắt buộc** đặt `confidence < 0.8` và `needs_user_confirm: true`. Khi entity có confidence thấp, LLM **không được tự cộng tổng** mà phải trả "tổng tạm = chưa khoá, chờ user xác nhận từng dòng".

Ngoài 6 rule cốt lõi cho họ F-03 (R1–R7), prompt v1 thêm 5 rule mở rộng để cover 10 ca không thuộc họ (xem [`../../1-map-and-format.md` Phần D](../../1-map-and-format.md#phần-d--coverage-check-9-ca-không-thuộc-họ-f-03)):

- **R8** — từ chối ngoài phạm vi (đầu tư F-08; bảo mật F-09 không hứa tính năng không có; mâu thuẫn policy F-06 không tự chế điều khoản).
- **R9** — không coi "vâng ạ" là chốt (F-13 đặc thù VN — phép lịch sự ≠ đồng ý).
- **R10** — phân biệt câu ghi chi vs feedback / sarcasm / hỏi insight (F-15 baseline + intent route).
- **R11** — tone âu lo + nguy hiểm tài chính (F-14): ghi chi nhưng KHÔNG tư vấn nợ; suggest hotline 1800-1567.
- **R12** — emergency CK nhầm (F-01): KHÔNG bịa quy trình "đợi vài ngày tự hoàn"; hướng dẫn báo ngân hàng + công an ngay.

Lớp này là tầng "chỉ dẫn AI" theo slide 10/14 — sửa đúng nguyên nhân gốc **RC-2 "AI đoán bừa"**.

---

## 2. Vì sao sửa ở lớp chỉ dẫn AI?

- AI đang trả lời quá tự tin khi thiếu nguồn ("3 củ rưỡi" → ghi 3.500.000đ ngay, không xác nhận; có thể là 35tr).
- AI đang chiều theo giả định sai của user ("18.347.000 → 18 củ, sai tí không sao" → đồng ý làm tròn — F-08 mở rộng).
- AI cần **luật rõ**: khi nào trả lời chắc, khi nào gắn confidence thấp, khi nào từ chối tự cộng, khi nào escalate.
- Có thể sửa nhanh bằng prompt + JSON schema **trước khi** triển khai dictionary RAG đầy đủ ở Lớp 3 — đây là "lớp chặn rẻ nhất, nhanh nhất".

**Hành động phòng vệ chính**:

- [x] **Ngăn** câu trả lời sai ngay từ đầu (R8 từ chối; R6 không tự cộng; R7 không làm tròn; R12 không bịa quy trình).
- [x] **Phát hiện** rủi ro qua `confidence` self-report + `needs_user_confirm` flag.
- [x] **Thông báo** mức tin cậy: `user_text` luôn nói rõ "tôi đã đoán" / "không tư vấn".
- [x] **Khắc phục** — *được thêm sau phản biện H-09:* R11 suggest hotline tài chính + R12 hướng dẫn báo ngân hàng + công an cho F-01. (Trước đó đánh dấu "không áp dụng cho lớp prompt"; sau khi thêm R11/R12 → có khả năng "khắc phục text-based": chuyển sang kênh phù hợp dù không có CSKH realtime.)

---

## 3. Demo nằm ở đâu?

**File demo**: [`demo.md`](./demo.md)

Demo có:

- System prompt v1 R1–R12 (dán trực tiếp vào ChatGPT/Claude/Gemini chạy được)
- JSON schema `MoneyEntityV1` (chuẩn dùng chung với Lớp 1 + Lớp 3)
- 6 ví dụ trước/sau, mỗi ví dụ = 1 ca trong họ F-03 (F-03, F-04, F-05, F-07, F-11, F-15 baseline)
- 5 ví dụ bổ sung cho 5 rule mở rộng (F-08 R8, F-13 R9, F-15 R10, F-14 R11, F-01 R12)
- Bảng "Tự test bằng bộ kiểm thử Bài 1" — cột Đạt/Không đạt/Chưa rõ cho cả 15 case
- 4 metric đo lường gửi sang Lớp 3 dashboard

---

## 4. Tác dụng phụ

| Tác dụng phụ | Mô tả | Mức |
|---|---|---|
| AI từ chối quá nhiều | Mỗi lần thấy "củ rưỡi" / "lít" đều bắt confirm → user thấy phiền | Vừa |
| Câu trả lời dài hơn | Thay vì "Đã ghi 3.500.000đ" → "tôi đoán 'củ rưỡi' có thể là 3.5tr hoặc 35tr, đúng cái nào?" | Nhẹ |
| Output JSON khó đọc trên client cũ | Client cũ render raw text → user thấy `{value_vnd: 3500000, confidence: 0.6}` | Vừa |
| Tăng latency LLM | Trả nhiều field hơn → token nhiều hơn → chậm ~150ms | Nhẹ |
| Tăng cost API | Token output ~2× → cost ~1.5× (input không đổi) — H-11 phản biện đã ghi nhận | Vừa |
| R11 hotline cứ trigger có thể "y tế hoá" cảm xúc bình thường | F-14 variant 1 chỉ cần "nói thật" — không cần đẩy hotline | Vừa |

**Nhóm giảm vấn đề đó bằng cách nào?**

- **Chỉ bắt confirm với entity confidence < 0.8** — entity rõ ràng ("phở 65k") đi thẳng, không phiền.
- **Tách 2 chế độ output**: `system_json` (cho client mới) + `user_text` (câu nói tự nhiên cho user) — Lớp 1 chọn render cái nào.
- **Cache dictionary phổ biến** ở Lớp 3 → giảm nhu cầu LLM hỏi lại với những lóng thường gặp.
- **R11 phân tier tone** — variant 1 "nói thật giúp em" → trả breakdown factual; chỉ variant 2 "chia tay rồi, sống qua tháng" mới trigger hotline.
- **Đo `pct_refused_in_scope`** — nếu > 5% câu trong phạm vi bị từ chối, prompt quá ngặt → nới.
- **Không dùng prompt như cách duy nhất**: dictionary lóng + sanity range nằm ở Lớp 3, prompt chỉ là tầng cuối tự kiểm.
- **Backlog v1.1**: rule-extractor frontier (regex + dictionary) trước LLM cho 80% câu đơn giản → giảm cost 5–10× (sau phản biện H-11).

---

## 5. Checklist trước khi nộp

- [x] Luật viết đủ cụ thể để AI làm theo (12 rule R1–R12 + JSON schema).
- [x] Có mẫu câu khi AI không có đủ thông tin (xem demo.md mục 4).
- [x] Có ví dụ cho tình huống dễ sai (6 ví dụ họ F-03 + 5 ví dụ rule mở rộng).
- [x] Có thử lại bằng tình huống trong Bài 1 (xem demo.md mục 7 — bảng 15 case).
- [x] Không dùng prompt như cách duy nhất — đã ghi rõ phụ thuộc Lớp 3 cho dictionary + sanity, Lớp 1 cho confirm UI.

**Người phụ trách**: **Tùng** (đồng bộ schema `MoneyEntityV1` với **Đạt** Lớp 3 trước khi **Dương** viết Lớp 1).
