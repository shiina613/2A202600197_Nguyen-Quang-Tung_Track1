---
artifact: 1 — Track & Big Ask + 2 — Tool Breakdown
bai-tap: Frame — nghe đúng đề rồi tách nhỏ
phase: Double Diamond vòng 1 · ◇ giãn (nghe rộng, chưa chốt)
time: ~12 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 00-context.md · track card · prompts/01-breakdown.md
nop-cuoi: Không — file trung gian (bản chốt phase này ở 3-FINAL-problem-framing.md)
---

# 1 — Intake & Breakdown: nghe đúng đề, tách nhỏ

Mục tiêu: cả nhóm hiểu giống nhau "công cụ lớn stakeholder muốn", rồi tách nó thành 5–8 use case nhỏ làm được riêng. Đây là nửa "giãn ra" của [Double Diamond](https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process) vòng 1 — nghe rộng, tách rộng, chưa chọn.

Lý do làm bước này: hai cái bẫy chết người ở đây. Một, nhận đề literal ("làm con chatbot") rồi nhảy vào build — trong khi yêu cầu mơ hồ thường chỉ là triệu chứng. Hai, ôm cả công cụ lớn đi pitch "build cả platform" → trượt Gate 1 ngay. Tách nhỏ là động tác bắt buộc để từ "một ý tưởng to" sang "danh sách phần làm được".

Quy tắc: **nghe trước, tách trước, chưa chọn.** Bước này không được chốt Quick Win (việc đó ở file `2`).

## Bước 0 — Đọc track card + 00-context (2 phút)

Đọc track card được giao và `00-context.md` (mục 2 đã điền). Đừng lướt.

## Quy trình 12 phút

```text
2 phút  — Bước 0: đọc track card + context
4 phút  — Phần A: phát biểu lại Big Ask bằng lời nhóm
6 phút  — Phần B: tách 5–8 use case + check độc lập
```

---

## Phần A — Phát biểu lại Big Ask bằng lời nhóm

Đừng chép lại đề. Cả nhóm nói lại "công cụ lớn stakeholder muốn" bằng lời mình. Nếu 3 người nói 3 kiểu khác nhau → chưa hiểu giống nhau, bàn thêm.

Câu hỏi phụ (tự trả lời):

- Stakeholder nói họ muốn gì, và họ thực sự *cần* gì — có khác nhau không?
- "Tại sao bây giờ?" — ở quy mô ~500 người, cái gì đang đau khiến phải làm công cụ này lúc này?
- Ai là người dùng đầu tiên thật sự, không phải "cả khóa"?

### Trả lời

- **Big Ask, viết lại bằng lời nhóm (2–3 câu)**: Hệ thống AI đóng vai trò như một trợ giảng 24/7, đồng hành cùng học viên khi làm bài tập/lab. Hệ thống này giúp gợi ý (hint), hướng dẫn tìm lỗi (debug) và rà soát bài trước khi nộp, với nguyên tắc tối thượng là "chỉ hướng dẫn, tuyệt đối không làm thay hay cung cấp đáp án".
- **Tại sao bây giờ**: Khóa học có quy mô ~500 người với lịch học/lab dày đặc. Số lượng coach có hạn không thể hỗ trợ real-time từng nhóm khi họ bị kẹt (ví dụ kẹt code/prompt), dễ dẫn đến nản chí và bỏ cuộc.
- **Người dùng đầu tiên cụ thể**: Học viên năm cuối/người đi làm đang gặp khó khăn hoặc báo kẹt khi thực hiện các bài Lab mang tính kỹ thuật hoặc cần tư duy đóng khung vấn đề.

## Phần B — Tách công cụ lớn thành 5–8 use case

Nhìn mục **Big Vision Modules** trong track card. Mỗi dòng = 1 use case làm được riêng, viết dạng *"AI làm X cho ai để họ Y"* — không phải tính năng mơ hồ. Cần 5–8 dòng (ít hơn 5 = chưa tách đủ; nhiều hơn 8 = đang liệt kê vụn).

| # | Use case (AI làm gì · cho ai · để họ làm được gì) | Người dùng | Làm được độc lập? |
|---|---|---|---|
| 1 | AI giải thích đề lab và thuật ngữ khó cho học viên để họ hiểu rõ yêu cầu trước khi làm. | Học viên | Có |
| 2 | AI cung cấp gợi ý (hint mở) cho học viên khi họ kẹt ở một bước để họ có hướng đi tiếp. | Học viên | Có |
| 3 | AI chỉ ra vị trí/nguyên nhân lỗi (code/prompt) cho học viên để họ tự sửa thay vì sửa hộ. | Học viên | Có |
| 4 | AI đối chiếu bài làm với rubric và chỉ ra các phần thiếu cho học viên để họ bổ sung trước khi nộp. | Học viên | Có |
| 5 | AI kiểm tra định dạng/cấu trúc bài nộp (ví dụ: thiếu file, sai định dạng) cho học viên để họ nộp đúng chuẩn. | Học viên | Có |
| 6 | AI tổng hợp log kẹt/lỗi của nhóm và gửi cảnh báo cho lab coach để coach chủ động can thiệp. | Lab coach | Không — phụ thuộc #2, #3 |
| 7 | AI ghi nhận "AI Support Log" minh bạch cho instructor để đánh giá mức độ mượn sức AI của học viên. | Instructor | Không — phụ thuộc #2, #3, #4 |

Cần ít nhất **4 use case thật sự độc lập** (làm được mà không cần cái khác xong trước). Nếu nhiều cái phụ thuộc nhau → gộp hoặc viết lại cho tách bạch.

---

## Phát hiện ban đầu

- Phần lớn các use case đều tập trung vào việc tạo "rào cản" để AI không đưa đáp án trực tiếp, điều này đòi hỏi prompt phải rất khắt khe.
- Cần một hệ thống lưu trữ log minh bạch để giáo viên biết học viên đã nhờ AI giải quyết bao nhiêu % bài lab.

## Câu hỏi mở (mang sang bước chọn Quick Win)

- Làm thế nào để định lượng được "hint" ở mức độ nào là vừa đủ, không biến thành "đáp án"?
- Review rubric trước khi nộp (tiền kiểm) có nên bao gồm cả việc chấm điểm thử (formative) hay chỉ check thiếu sót (missing field)?

---

## Tổng kiểm tra trước khi sang `2-quick-win.md`

| Hạng mục | Xong? |
|---|---|
| Cả nhóm phát biểu lại Big Ask giống nhau, không cần nhìn card | [x] |
| Có 5–8 use case dạng "AI làm X cho ai để Y" | [x] |
| Có ≥4 use case thật sự độc lập | [x] |
| Nhóm KHÔNG còn ý định pitch "build cả platform" | [x] |

Sau bước này, mở `2-quick-win.md` — chấm điểm chọn 1 lát cắt làm trước.

*Liên quan: handbook §A1+§A2 · `prompts/01-breakdown.md` · `00-context.md`*
