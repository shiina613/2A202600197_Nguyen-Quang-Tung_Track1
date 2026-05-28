---
artifact: 4 — Problem Framing (bản nộp phase Frame)
bai-tap: Frame — đóng khung vấn đề thật
phase: Double Diamond vòng 1 · ◆ output (chốt — owner xác nhận)
time: ~13 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 2-quick-win.md · prompts/03-problem-framing-challenge.md
nop-cuoi: Có — đây là bản nộp của phase Frame (Part A · A3 Working Canvas mục Problem Framing)
---

# 3 — FINAL: Problem Framing

Mục tiêu: đóng khung Quick Win đã chọn cho thật cụ thể. Đây **không phải** bản đề xuất giải pháp — là tài liệu trả lời đúng 1 câu: *"nhóm đã hiểu đúng vấn đề chưa?"*. Đây là output chốt của [Double Diamond](https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process) vòng 1, và là một mục trong A3 Working Canvas nộp cuối buổi.

Lý do làm bước này: một AI Pilot Plan cho vấn đề SAI — dù viết hay — vẫn sai. Đa số nhóm trượt Gate 3 vì khung chung chung ("học viên cần học tốt hơn", "coach quá tải") — câu đó không đo được, không ai chịu trách nhiệm, không biết khi nào thành công.

Quy tắc: **pain phải có số.** "Nhiều người phàn nàn" không phải evidence. "200 câu hỏi/tuần × 20 phút = 67 giờ/tuần" mới là evidence. Trong lab dùng số giả định cũng được, nhưng phải nói rõ số đến từ đâu.

## Quy trình 13 phút

```text
9 phút  — Điền 9 mục Problem Framing
3 phút  — Tự phản biện
1 phút  — Chốt: owner (giả định) có xác nhận đúng vấn đề không
```

---

## 9 mục Problem Framing

Câu hỏi phụ (tự trả lời trước khi điền):

- Một người ngoài đọc khung này có biết CHÍNH XÁC ai đau, đau cái gì không?
- Nếu KHÔNG có baseline thì nhóm đo "tốt hơn" bằng cách nào?
- Mục Open Questions trống = nguy hiểm (chưa nghĩ đủ). Nhóm còn chưa biết gì?

### Trả lời

### Trả lời

1. **Original Ask** (stakeholder nói gì, nguyên văn): AI hỗ trợ học viên làm lab/code/bài tập: gợi ý bước tiếp theo, debug, review trước khi nộp — nhưng không làm hộ bài.
2. **Reframed problem** (vấn đề thật sau khi tách): Hệ thống AI tự động tiền kiểm bài nộp lab (cụ thể là lab Day 28) theo rubric để phát hiện các trường thông tin còn thiếu (như ngân sách, tiêu chí dừng, chỉ số đo lường) trước khi học viên nộp bài chính thức.
3. **Current workflow** (hiện tại đang xử lý thế nào, kể cả "không ai làm gì"): Học viên dò bài bằng mắt thường rồi nộp lên LMS. Coach tải bài về chấm, phát hiện thiếu mục, mất thời gian viết feedback yêu cầu bổ sung và bắt nộp lại.
4. **Pain evidence — bằng SỐ** (ai đau · đau ở khoảnh khắc nào trong việc · tần suất · quy mô; số giả định ghi rõ nguồn giả định):

```text
[Số giả định từ kinh nghiệm khóa trước] Có 27 nhóm nộp lab D28. Thường có khoảng 40% (11 nhóm) nộp thiếu ít nhất 1 trường quan trọng (VD: quên làm slide budget). Coach mất trung bình 10 phút/nhóm để review rà soát và viết feedback yêu cầu bổ sung → Lãng phí tổng cộng ~110 phút của coach chỉ để làm việc check checklist "có/không".
```

5. **Affected people** (ai dùng · ai quyết · ai là người review/expert): Học viên (người upload bài), Lab Coach (người hưởng lợi trực tiếp + người review kết quả), Instructor (người quyết định áp dụng).
6. **Constraints** (từ `00-context.md`: privacy / human review / citation / budget / formative / adoption): Formative (bot chỉ góp ý thiếu sót, KHÔNG chấm điểm thay coach), Privacy (không public bài nhóm này cho nhóm khác), Budget nhỏ (xài prompt API đơn giản).
7. **Quick Win đã chọn** (1 dòng, lấy từ file `2`): #4 Tiền kiểm rubric bài nộp (cụ thể lab D28) trước khi submit (báo thiếu thông tin).
8. **Open questions** (còn chưa biết gì — không được để trống): Bot sẽ hoạt động qua channel Discord (học viên thả file vào) hay qua một web interface riêng? Có hỗ trợ đọc file ảnh/PDF không hay chỉ text/markdown?
9. **Validation** (đóng vai owner: *"đúng, đây là vấn đề đáng giải"* — Có / Chưa, vì sao):

```text
Có. Bài toán rất rõ ràng, baseline đo được (tỷ lệ bài nộp thiếu mục hiện tại là 40%, kỳ vọng giảm xuống dưới 5%). Giúp tiết kiệm gần 2 tiếng cho coach để họ tập trung vào feedback logic kinh doanh thay vì check checklist.
```

---

## Tự phản biện

- Khung này còn câu chung chung kiểu "cần học tốt hơn" không? -> Không, đã quy về chỉ số cụ thể (110 phút lãng phí, 40% nộp thiếu).
- 3 câu sẽ bị hỏi: *số/giả định lấy ở đâu · giả định chính sai thì sao · tình huống nào khiến dừng.* Trả lời thử 1 câu: Giả định 40% nhóm nộp sai lấy từ thống kê ước lượng của các khóa trước (Coach report).

---

## Tổng kiểm tra trước khi sang `02-solution/`

| Hạng mục | Xong? |
|---|---|
| Chỉ rõ 1 nhóm người + 1 khoảnh khắc cụ thể (không "user nói chung") | [x] |
| Pain có số (hoặc kế hoạch lấy số), nói rõ số từ đâu | [x] |
| Có baseline (hoặc cách đo baseline) + ≥1 chỉ số có ngưỡng | [x] |
| Mục 9: owner (giả định) xác nhận đúng vấn đề = qua cổng phase Frame | [x] |

⚑ Coach kiểm tra ở Mốc 2: *"Ai đau? Baseline là gì? Không có baseline thì đo thế nào?"*

Owner chưa xác nhận → quay lại file `1`/`2`, đừng sang Solution. Owner xác nhận → mở `../02-solution/1-find-existing-solutions.md`.

*Liên quan: handbook §A4 · `prompts/03-problem-framing-challenge.md`*
