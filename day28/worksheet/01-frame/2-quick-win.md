---
artifact: 3 — Quick Win Selection
bai-tap: Frame — chọn lát cắt làm trước
phase: Double Diamond vòng 1 · ◆ siết (hội tụ về 1 lựa chọn)
time: ~10 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 1-intake-breakdown.md · prompts/02-quick-win-challenge.md
nop-cuoi: Không — file trung gian (bản chốt phase này ở 3-FINAL-problem-framing.md)
---

# 2 — Quick Win: chọn lát cắt làm trước

Mục tiêu: từ 5–8 use case ở file `1`, chấm điểm nhanh và chốt **1 Quick Win** để pilot đầu tiên — kèm lý do chọn và lý do *không* chọn các phần khác. Đây là nửa "siết lại" của [Double Diamond](https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process) vòng 1.

Lý do làm bước này: đây là quyết định quan trọng nhất của phase Frame. Quick Win **không phải** phần dễ nhất hay nghe hay nhất — là phần *chứng minh được giá trị nhanh và có người ủng hộ*. Chọn sai → pilot fail → mất uy tín → khó xin pilot tiếp. Nhóm phải chọn được *và bảo vệ được bằng lý do*, không bằng cảm tính.

Quy tắc: **điểm số chỉ là gợi ý, không phải đáp án.** Đừng để con số quyết thay nhóm — nó chỉ giúp so sánh.

## Bước 0 — Lấy 4–6 use case mạnh nhất từ file `1` (1 phút)

## Quy trình 10 phút

```text
1 phút  — Bước 0: chọn 4–6 ứng viên
5 phút  — Phần A: chấm điểm 4 trục
3 phút  — Phần B: 1 lý do nên / 1 lý do không cho top 2
1 phút  — Phần C: chốt + ai ủng hộ + cái KHÔNG chọn
```

---

## Phần A — Chấm điểm 4 trục (1–5 mỗi trục)

Câu hỏi phụ (tự trả lời):

- "Risk" ở đây là *sai thì mất gì* — chọn đúng việc chính của user (task centrality) thì sai cũng đỡ đau; chọn việc lớn nhất thì sai rất đắt. Use case nào risk thấp thật?
- Use case nào có sẵn data + có người trong AI20k thật sự muốn dùng?

| Use case | Impact | Feasibility | Evidence nhanh | Risk (cao = an toàn) | Tổng |
|---|:--:|:--:|:--:|:--:|:--:|
| #4 Tiền kiểm rubric bài nộp | 4 | 5 | 5 | 4 | 18 |
| #2 Hint khi kẹt bước lab | 5 | 3 | 4 | 2 | 14 |
| #3 Hỗ trợ debug code/prompt | 4 | 3 | 4 | 3 | 14 |
| #5 Kiểm tra định dạng file | 2 | 5 | 5 | 5 | 17 |

## Phần B — 1 lý do nên / 1 lý do không, cho top 2

**Ứng viên A — #4 Tiền kiểm rubric bài nộp**

```text
Nên chọn vì: Tính khả thi cao, prompt dễ viết. Học viên lập tức thấy giá trị vì tránh bị trừ điểm "oan". Rủi ro thấp vì chỉ check thiếu (missing field), không chấm điểm thay.
Không nên vì: Không giải quyết được tận gốc việc học viên bị kẹt tư duy hoặc kẹt code ở giữa lab.
```

**Ứng viên B — #2 Hint khi kẹt bước lab**

```text
Nên chọn vì: Đem lại Impact lớn nhất, giải quyết đúng nỗi đau lớn nhất của học viên là bỏ cuộc giữa chừng vì bí ý tưởng.
Không nên vì: Rủi ro rất cao. Dễ xảy ra tình trạng AI tuồn thẳng đáp án, làm học viên lười suy nghĩ. Prompt phức tạp để giữ ranh giới "gợi ý" và "đáp án".
```

## Phần C — Chốt Quick Win

- **Quick Win nhóm chọn**: #4 Tiền kiểm rubric bài nộp trước khi submit (Tập trung vào lab Day 28: kiểm tra xem AI Pilot Plan có thiếu chỉ số, ngân sách, tiêu chí dừng hay không).
- **Vì sao chọn cái này trước** (2–4 câu, bám điểm + impact + evidence nhanh): Điểm tổng cao nhất (18). Feasibility và Evidence đạt mức 5 vì có thể xây dựng prompt và test ngay lập tức với rubric D28. Giúp đo lường được tỷ lệ các nhóm nộp đủ yêu cầu tăng lên rõ rệt mà không gây rủi ro can thiệp vào quá trình học.
- **Ai trong AI20k sẽ ủng hộ pilot này** (và vì sao họ care — "có người ủng hộ" thường quan trọng hơn "impact cao"): Các **Lab Coach** và **Instructor** sẽ ủng hộ vì nó giúp lọc đi những bài nộp thiếu sót cơ bản, giúp coach tiết kiệm thời gian chấm bài và tập trung vào chất lượng nội dung.
- **Nhóm KHÔNG chọn gì + vì sao** (≥2 use case bị loại): 
  1. KHÔNG chọn #2 (Hint kẹt bước): Vì rủi ro AI làm hộ bài còn quá cao đối với phiên bản Pilot đầu tiên, chưa kiểm soát được chất lượng hint.
  2. KHÔNG chọn #6 (Dashboard báo coach): Vì hệ thống thu thập log chưa được xây dựng hoàn thiện, việc dựng dashboard sẽ đòi hỏi tích hợp phức tạp (low feasibility).

---

## Phát hiện ban đầu

- Việc chọn Quick Win không phải là nhặt cái quan trọng nhất, mà là nhặt cái **an toàn và khả thi nhất** để chứng minh AI có ích trước khi xin tài nguyên làm việc khó hơn.

## Câu hỏi mở (mang sang Problem Framing)

- Học viên upload bản nháp như thế nào để AI tiền kiểm? Giao diện ở đâu (Chatbot Discord hay upload qua một tool web)?

---

## Tổng kiểm tra trước khi sang `3-FINAL-problem-framing.md`

| Hạng mục | Xong? |
|---|---|
| Có bảng chấm 4 trục cho ≥4 use case | [x] |
| Chốt 1 Quick Win, lý do bám số/impact (không "nghe hay") | [x] |
| Nêu rõ ai ủng hộ pilot này | [x] |
| Ghi rõ ≥2 phần KHÔNG chọn + lý do | [x] |

⚑ Đây là phần coach kiểm tra ở Mốc 1: *"Vì sao không làm full tool? Vì sao chọn lát cắt này trước?"*

Sau bước này, mở `3-FINAL-problem-framing.md` — đóng khung vấn đề thật (bản nộp của phase Frame).

*Liên quan: handbook §A3 · `templates/quick-win-scoring.md` · `prompts/02-quick-win-challenge.md`*
