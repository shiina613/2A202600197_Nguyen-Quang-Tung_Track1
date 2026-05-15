---
artifact: 1 — Lớp giao diện
bai-tap: 2 — Thiết kế giải pháp
demo: ./demo.md
---

# card.md — Lớp giao diện

**Tình huống xử lý**: **F-03** "Mua macbook 3 củ rưỡi" + họ leverage **F-03/F-04/F-05/F-07/F-11**.
Phụ trách thêm: **F-01** (trạng thái F khẩn cấp); **F-08, F-09, F-12** (trạng thái E ngoài phạm vi); **F-15** (trạng thái A baseline 1-tap); **F-13** (confirm dạng nút Có/Không).

Xem [`../../1-map-and-format.md` Phần A](../../1-map-and-format.md#phần-a--chọn-rủi-ro-và-tầng-giải-pháp).

---

## 1. Giải pháp là gì?

Chèn **một thẻ "xác nhận entity"** vào giữa câu trả lời của AI và bước commit DB. Thẻ này hiển thị từng entity tiền tách dòng (số tiền diễn giải + đơn vị nguồn), một **badge confidence ba màu** (XANH 1-tap / VÀNG hỏi đơn vị / ĐỎ outlier hoặc magnitude), và **nút sửa nhanh** từng dòng.

Đặc biệt cho **F-03 "rưỡi sau số lóng"**: thẻ có **2 lựa chọn ngang hàng** ("3.500.000đ" vs "35.000.000đ") thay vì 1 mặc định + 1 sửa — vì sai lệch 10× là **risk pháp lý cao nhất** (Air Canada precedent), không nên có default ẩn.

Giao dịch ≥ 5tr buộc gõ "Tôi xác nhận". **Trạng thái F** (mới — sau coverage check 9 ca) cho **F-01 CK nhầm**: banner đỏ + nút "Báo ngân hàng" + "Báo công an phường gần nhất" + log vào `emergency_events`. Có nút "AI đoán sai" → ghi log Lớp 3.

Trạng thái mặc định của thẻ: **chưa commit** — DB chỉ ghi sau khi user bấm "Lưu" / "Xác nhận". Đây là điểm khác biệt cốt lõi so với silent save trước đây.

Lớp này sửa đúng **RC-3 "UI silent save"** và là tầng cuối nếu Lớp 2 + Lớp 3 lỡ lọt entity sai (slide 10/14).

---

## 2. Vì sao sửa ở lớp giao diện?

- Người dùng dễ tin câu trả lời của AI quá mức (cognitive offloading — `00-context.md` mục 3 đã ghi).
- Rủi ro xảy ra ở **khoảnh khắc người dùng đọc câu trả lời** rồi quyết định CK / chi tiếp → UI là điểm chặn cuối trước hành động thật.
- Giao diện cần làm rõ: số tiền nào AI **trích đúng từ dictionary**, số tiền nào AI **đoán** (badge khác màu, không cùng style).
- Nếu prompt (Lớp 2) hoặc dữ liệu (Lớp 3) vẫn sót lỗi, **giao diện là lớp chặn cuối** — phải có nút sửa từng dòng.
- **F-01 emergency** không phải vấn đề entity — là vấn đề "AI nói gì khi user khủng hoảng" → cần UI riêng (trạng thái F) thay vì để LLM phản hồi trong dòng chat thường.

**Hành động phòng vệ chính**:

- [x] **Phát hiện** dấu hiệu thiếu nguồn (badge "AI đoán" vàng / đỏ).
- [x] **Khắc phục**: thẻ xác nhận chặn DB-commit; nút sửa từng entity; giao dịch ≥ 5tr buộc 2-step; trạng thái F cho F-01 emergency.
- [x] **Thông báo**: tooltip giải thích badge; cảnh báo magnitude lớn; microcopy "AI đang đoán '<unit>' = ..."; banner "không CK giùm".
- [ ] Ngăn — *không phải vai trò chính của UI*; phần ngăn nằm ở Lớp 2 (R8/R12 từ chối) + Lớp 3 (dictionary). UI chỉ đảm bảo lỗi **nếu có** không silently lan vào DB.

---

## 3. Demo nằm ở đâu?

**File demo**: [`demo.md`](./demo.md)

**Định dạng demo**:

- [x] Phác thảo màn hình (ASCII wireframe — 5 trạng thái thẻ + 1 màn ngoài phạm vi + 1 màn khẩn cấp + history view)
- [x] Luồng màn hình (Mermaid sequence — user → LLM → confirm → DB)
- [ ] Bản HTML đơn giản (không cần cho v1; backlog v2.0)
- [ ] Ảnh hoặc link prototype Figma (không cần cho v1; backlog v2.0)

**Thành phần cần có trong demo**:

- ✅ Trạng thái A có nguồn xác minh (badge XANH, 1-tap commit) — F-15 baseline
- ✅ Trạng thái B chưa có nguồn xác minh (badge VÀNG, bắt confirm) — F-04, F-07, F-11
- ✅ Trạng thái C outlier (badge ĐỎ outlier) — F-05
- ✅ Trạng thái D magnitude lớn (badge ĐỎ + 2-step text) — F-03 nhánh 35tr
- ✅ Trạng thái E ngoài phạm vi (E1: đầu tư/F-08; E2: bảo mật/F-09; E3: tính năng không có/F-12) — UI từ chối với gợi đường
- ✅ **Trạng thái F khẩn cấp** (mới) — F-01 CK nhầm/fraud — banner đỏ + 3 nút hành động
- ✅ Cách người dùng chuyển sang người thật → trạng thái F + nút "AI đoán sai" → log → CSKH email follow-up
- ✅ **F-03 special**: thẻ B có **2 lựa chọn ngang hàng** "3.5tr / 35tr" thay vì 1 default + sửa
- ✅ Câu chữ cảnh báo ngắn, dễ hiểu (xem demo.md mục 4 microcopy)

---

## 4. Tác dụng phụ

| Tác dụng phụ | Mô tả | Mức |
|---|---|---|
| Thêm 1 bước trước khi lưu | Trước: nói câu → "đã ghi". Sau: nói câu → thấy thẻ → bấm "Lưu" | Vừa (trade-off cho an toàn tiền) |
| Confirm fatigue | Nếu confirm tất cả entity, user phiền với khoản nhỏ rõ ràng | Vừa |
| Màn nhỏ điện thoại không đủ chỗ | F-03 thẻ B với 2 lựa chọn lớn (3.5tr/35tr) chiếm ~50% màn iPhone SE | Vừa |
| Hiểu nhầm badge VÀNG = "AI hỏng" | User mới có thể tưởng app bị lỗi | Nhẹ |
| Khó dùng khi đang lái xe / đi bộ | Bình thường nói câu là xong; giờ phải nhìn màn hình (F-04 case) | Vừa |
| **Trạng thái F có thể bị trigger nhầm** | Keyword "nhầm" cũng xuất hiện trong câu bình thường | Vừa |
| **2 lựa chọn ngang hàng F-03** | User có thể chọn nhanh nhưng vẫn sai (50/50) | Nhẹ — đã tốt hơn silent save |

**Nhóm giảm vấn đề đó bằng cách nào?**

- **Skip thẻ confirm với entity badge XANH (confidence ≥ 0.8 + magnitude < 5tr)** → user phổ thông không phiền với khoản nhỏ rõ ràng (F-15 baseline).
- **Voice-confirm cho mode "đang đi"** (v2.0): đọc to "Xác nhận 200.000đ ăn sáng?" → user nói "có/không". Trong v1: hiển thị banner "Đang chạy — bấm 1 lần để xác nhận sau" (F-04 case).
- **Tooltip badge** giải thích "vàng = AI cần bạn xác nhận một đơn vị; đỏ = AI thấy bất thường, vui lòng kiểm".
- **Đếm và đo** "% lần user bấm Lưu mà không sửa" → nếu > 90%, bỏ confirm step cho user lâu năm (opt-in trust mode v1.2).
- **Layout adaptive** (sau phản biện H-05): nếu ≥ 4 entity, gộp các entity badge XANH thành 1 dòng "3 khoản đã xác minh" và mở rộng khi tap; F-03 thẻ B trên iPhone hẹp → 2 nút full-width thay vì side-by-side.
- **Trạng thái F false positive** — phải có **2 keyword condition** (vd "CK nhầm" + "đã chuyển" / "vừa CK") chứ không chỉ "nhầm" lẻ; nếu sai → user có nút "Đây không phải khẩn cấp" để rollback.
- **F-03 hai lựa chọn 50/50** — Lớp 2 prompt R4.2 phải nói rõ likelihood (vd "macbook thường 25-50tr nên có thể bạn ý là 35tr"); UI hiển thị **gợi ý nhẹ** (highlight màu nhẹ) nhưng không default radio.

---

## 5. Checklist trước khi nộp

- [x] Giải pháp gắn đúng với một rủi ro chính (F-03 + họ leverage F-03/04/05/07/11) + cover thêm 9 ca không thuộc họ.
- [x] Demo nhìn vào là hiểu vấn đề được chặn ở đâu (5 trạng thái thẻ + Mermaid sequence chỉ rõ điểm chặn DB-commit).
- [x] Có đủ trạng thái bình thường và trạng thái lỗi (XANH baseline + VÀNG đoán + ĐỎ outlier + ĐỎ magnitude + KHẨN CẤP F-01).
- [x] Có cách chuyển sang người thật khi AI không nên tự xử lý — *bản v1*: trạng thái F (báo ngân hàng + công an); nút "AI đoán sai" → log + email CSKH; trạng thái E "Hỏi tư vấn" cho F-08/F-09.
- [x] Câu chữ trong giao diện ngắn, không đổ hết trách nhiệm cho người dùng (demo.md mục 4 — bảng microcopy).

**Người phụ trách**: **Dương** (làm cuối — sau khi đã có schema từ **Tùng** Lớp 2 và pipeline từ **Đạt** Lớp 3).
