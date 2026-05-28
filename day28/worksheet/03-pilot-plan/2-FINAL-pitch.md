---
artifact: 8 — 5-slide Pitch + AI Support Log (bản nộp cuối lab)
bai-tap: Pilot Plan — dồn thành pitch, sẵn sàng phản biện
phase: Double Diamond vòng 2 · ◆ output (bản nộp cuối + present)
time: ~5 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 1-pilot-plan.md + toàn bộ 01-frame + 02-solution · templates/5-slide-pitch.md
nop-cuoi: Có — bản nộp cuối lab (Part E · 5-slide Pitch + AI Support Log)
---

# 2 — FINAL: 5-slide Pitch + AI Support Log

Mục tiêu: dồn cả A3 Working Canvas thành 5 slide pitch (5 phút), chuẩn bị trả lời 3 câu phản biện, và ghi AI Support Log. Đây là bản nộp cuối cùng của lab.

Lý do làm bước này: nguyên tắc *demo đơn giản + lập luận chặt > demo đẹp + lập luận yếu*. Slide đẹp mà không trả lời được "số này lấy ở đâu" thì hỏng. Pitch không phải kể chuyện — là đưa evidence để stakeholder ra được một quyết định.

Quy tắc: **slide cuối phải là một lời xin rõ ràng** (xin gì · đổi lại hứa gì). Không có lời xin = stakeholder không biết approve cái gì.

## Quy trình 5 phút

```text
3 phút  — Dồn 5 slide (mỗi slide 1 thông điệp)
1 phút  — Chuẩn bị 3 câu phản biện
1 phút  — AI Support Log
```

---

## Phần A — 5 slide (mỗi slide 1 thông điệp)

Kéo nguyên liệu từ các file đã làm, đừng viết mới. Khung đầy đủ: `templates/5-slide-pitch.md`.

| # | Slide | Lấy từ | Nội dung 1–2 gạch đầu dòng | Ai nói |
|---|---|---|---|---|
| 1 | Problem & user | 01-frame/3-FINAL | - Coach lãng phí 110 phút chỉ để nhắc nhở "nộp thiếu phần budget" cho bài D28. \n - 40% nhóm nộp bài thiếu mục do sơ suất. | Hoàng văn Bắc |
| 2 | Breakdown & Quick Win | 01-frame/1,2 | - Chọn làm "Tiền kiểm checklist" (Dễ, an toàn). \n - KHÔNG làm "Hint code/lab" (Rủi ro làm hộ bài). | Hoàng văn Bắc |
| 3 | Solution + bản vẽ trực quan | 02-solution/2-FINAL | - Tích hợp Discord Bot gọi GPT-4o-mini. \n - Học viên nộp nháp -> Bot báo "Pass" -> Nộp LMS cho Coach chấm điểm sâu. | Trịnh Xuân Đạt |
| 4 | AI Pilot Plan | 03-pilot-plan/1 | - Áp dụng cho 10 nhóm làm D28 trong 1 tuần. \n - Budget: Nhóm tự làm + $2 tiền API. | Nguyễn Quang Tùng |
| 5 | Metric · exit criteria · **lời xin** | 03-pilot-plan/1 | - Kì vọng: giảm TG check xuống <2 phút. Dừng nếu bot viết hộ. \n - XIN: $5 tiền server + Quyền yêu cầu 10 nhóm dùng thử. | Nguyễn Quang Tùng |

## Phần B — Chuẩn bị 3 câu phản biện

Business owner/instructor sẽ hỏi mỗi nhóm 1–2 câu. Viết sẵn câu trả lời:

1. *"Số liệu / giả định này lấy ở đâu?"* → Giả định 40% nộp thiếu lấy từ quan sát thực tế cách học viên vội vàng hoàn thành bài lúc sát giờ deadline của các khóa trước.
2. *"Nếu giả định quan trọng nhất của bạn sai thì sao?"* → Giả định quan trọng là "Học viên chịu gửi file nháp cho Bot". Nếu sai (họ lười), ta sẽ tích hợp thẳng vào bước Upload của LMS (dài hạn).
3. *"Tình huống nào sẽ khiến bạn dừng pilot?"* → Khi phát hiện Bot có dấu hiệu "gợi ý đáp án" thay vì chỉ "báo thiếu thông tin" (vi phạm Red Flag), sẽ Shutdown bot ngay.

## Phần C — AI Support Log

| Câu hỏi | Trả lời |
|---|---|
| AI giúp được gì trong lab này? | Hỗ trợ nghĩ ra nhiều ý tưởng break-down use case và tìm kiếm mô hình giải pháp tương đương ở ngành Legal. |
| AI đưa output nào nghe hợp lý nhưng nhóm phải sửa? | AI khuyên dùng RAG và Agent để "chấm điểm" bài. Nhóm gạt bỏ vì vi phạm quy tắc Formative và rủi ro Hallucination. |
| Phần nào nhóm tự lập luận, KHÔNG copy AI? | Đánh giá 4 trục để chốt Quick Win (vì AI không hiểu bối cảnh coach), và đặt ra Exit criteria khắt khe. |

---

## Tổng kiểm tra trước khi nộp

| Hạng mục | Xong? |
|---|---|
| 5 slide, mỗi slide 1 thông điệp, đã phân ai nói slide nào | [x] |
| Slide 5 có lời xin rõ ràng (xin gì · hứa gì) | [x] |
| Có câu trả lời sẵn cho cả 3 câu phản biện | [x] |
| AI Support Log điền đủ 3 dòng | [x] |
| Tất cả file worksheet/ đã commit + push, link dán vào Discord | [x] |

Đây là file cuối. Pitch 5 phút + nhận phản biện theo bảng 5 Gate (`templates/rubric-gate-sheet.md`).

*Liên quan: handbook §A9 · `templates/5-slide-pitch.md` · `templates/ai-support-log.md`*
