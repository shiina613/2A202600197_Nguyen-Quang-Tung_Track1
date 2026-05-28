---
artifact: 7 — AI Pilot Plan core
bai-tap: Pilot Plan — cam kết hai chiều: xin – hứa – đo – dừng
phase: Double Diamond vòng 2 · ◇ giãn → ◆ siết (liệt kê hết rồi chốt gọn)
time: ~10 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 02-solution/2-FINAL-solution.md · 00-context.md · prompts/06-pilot-plan-challenge.md
nop-cuoi: Không — file trung gian (bản nộp ở 2-FINAL-pitch.md)
---

# 1 — AI Pilot Plan core

Mục tiêu: viết phần kế hoạch xin pilot — scope, người, data, budget, timeline, metric, exit criteria, adoption, lời hứa, lời xin. Bước này giãn ra (liệt kê hết những thứ cần) rồi siết lại (chốt bản gọn đủ để stakeholder quyết).

Lý do làm bước này: đây là thứ stakeholder dùng để **quyết approve hay dừng**. AI Pilot Plan **không phải proposal xin tiền** — là *cam kết hai chiều*: nhóm xin nguồn lực, đổi lại hứa giao evidence + chấp nhận dừng nếu metric fail. Demo đẹp mà không nói được "xin gì, hứa gì, đo gì, dừng khi nào" → trượt Gate 5.

Quy tắc: **budget tách từng hạng mục, không gộp 1 cục; không có mục "miscellaneous".** Exit criteria phải có người có quyền thực thi, không chỉ trên giấy.

## Quy trình 10 phút

```text
6 phút  — Điền 10 mục core (kéo nguyên liệu từ 00 + 01-frame + 02-solution)
3 phút  — Phần exit criteria + adoption (chỗ nhóm hay bỏ quên)
1 phút  — Tự phản biện
```

---

## 10 mục core

Câu hỏi phụ (tự trả lời):

- Nếu tóm vấn đề không gọn trong 1 câu → nhóm chưa hiểu vấn đề.
- Exit criteria của nhóm có ai DÁM thực thi khi sếp vẫn thích pilot không?
- Adoption: ai dùng đầu tiên — không phải "cả khóa ~500 người"?

### Trả lời

### Trả lời

1. **Tóm vấn đề** (1 câu, từ Problem Framing): Học viên nộp lab D28 thường thiếu các mục bắt buộc (40% bài nộp), làm lãng phí ~110 phút của coach chỉ để dò checklist thay vì chấm logic.
2. **Cách làm + lý do** (từ 02-solution, 1 câu): Dùng phương án Boost (tích hợp bot Discord với GPT-4o-mini) vì tận dụng được hệ sinh thái sẵn có, rẻ và dễ dùng nhất cho học viên.
3. **Scope pilot**: phục vụ ai · bao nhiêu người · bao lâu · mấy phase: Phục vụ 10 nhóm (~30 học viên) track Product trong thời gian làm Lab D28 (1 tuần). Gồm 2 phase: Test kín với coach (3 ngày) và Mở cho 10 nhóm dùng (4 ngày).
4. **Người**: nhóm làm · ai review output rủi ro cao · ai có quyền quyết approve/dừng: Nhóm 3 người tự làm (Prompt/Setup Bot). Lab Coach review prompt. Instructor là người có quyền approve hoặc bấm nút dừng Pilot.
5. **Data**: dùng data gì (mẫu/giả định) · cơ chế privacy/citation: Dùng Rubric D28 chuẩn. Học viên gửi bản nháp lab qua tin nhắn riêng (DM) cho bot để đảm bảo privacy. Yêu cầu citation trích dẫn phần text trong bài nộp.
6. **Budget** (tách hạng mục): API/tool (OpenAI API ~$2, Discord free) · thời gian người (Nhóm: 10h setup, Coach: 2h test) · hạng mục ẩn (Server host bot ~$5/tháng).
7. **Timeline + cổng giữa phase**: Phase 1 (Tuần 1): Setup Bot & Test nội bộ → Cổng duyệt Prompt bởi Coach · Phase 2 (Tuần 2): Chạy Pilot với 10 nhóm.
8. **Metrics** (SMART + baseline + ngưỡng + ai đo):

| Metric | Đo bằng gì · ai đo | Baseline | Ngưỡng đạt |
|---|---|---|---|
| Tỷ lệ bài nộp đủ mục ngay lần đầu | Đếm thủ công / Coach đo | 60% (40% thiếu) | 95% |
| Thời gian coach check checklist/nhóm | Khảo sát coach | 10 phút/nhóm | < 2 phút/nhóm |

   Leading indicator (biết kết quả sớm trong 1–2 tuần): Số lượng tin nhắn gửi vào bot hợp lệ mỗi ngày (cho thấy adoption rate).

9. **Exit criteria** (định trước, ≥2 mức):

| Mức | Điều kiện | Hành động | Ai có quyền dừng |
|---|---|---|---|
| Cảnh báo | Bot báo sai (False Positive) > 10% | Tạm khóa bot, tối ưu prompt | Lab Coach |
| Nghiêm trọng | Bot có dấu hiệu "chấm điểm/viết hộ bài" (Vi phạm Red flag) | Shutdown bot ngay lập tức | Instructor |

   *Liên hệ 2 Red Flag ở `00-context.md`: exit criteria có chặn được chúng không?* -> Có, hành vi làm hộ bài sẽ bị trigger mức Nghiêm trọng và dừng ngay.

10. **Adoption** (tool không ai dùng = $0): ai dùng đầu tiên · workflow đổi ở đâu · ai train/support · nếu không ai dùng thì sao: 10 nhóm track Product dùng đầu. Workflow đổi: Ép buộc bằng rule "Chỉ chấp nhận bài nộp LMS nếu kèm theo ảnh chụp màn hình Bot báo Pass 5/5". Nếu không dùng, bị trừ điểm quy trình.

---

## Tự phản biện

- Budget thiếu hạng mục ẩn nào không? Đã tính server host bot ($5).
- Exit criteria đủ mạnh để THẬT SỰ dừng, hay chỉ trên giấy? Đủ mạnh vì có điều kiện rõ ràng (viết hộ bài) và người có quyền (Instructor).
- Giả định quan trọng nhất sai → plan gì? Giả định học viên chịu nộp qua bot. Nếu sai, chuyển bot sang dạng Web UI ẩn danh.

---

## Tổng kiểm tra trước khi sang `2-FINAL-pitch.md`

| Hạng mục | Xong? |
|---|---|
| Tóm vấn đề trong 1 câu | [x] |
| Budget tách hạng mục, không "miscellaneous" | [x] |
| Metric có baseline + ngưỡng + ai đo | [x] |
| Exit criteria có người có quyền thực thi (≥2 mức) | [x] |
| Adoption: chỉ rõ ai dùng đầu tiên (không "cả khóa") | [x] |

⚑ Coach kiểm tra ở Mốc 4: *"Xin gì? Hứa gì? Đo gì? Dừng khi nào?"*

Sau bước này, mở `2-FINAL-pitch.md` — dồn tất cả thành 5-slide pitch + AI Support Log.

*Liên quan: handbook §A7+§A8 · `templates/ai-pilot-plan-core.md` · `prompts/06-pilot-plan-challenge.md`*
