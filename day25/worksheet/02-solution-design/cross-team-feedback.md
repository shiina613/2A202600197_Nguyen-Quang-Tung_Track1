---
artifact: Phản biện chéo (lượt 2 — nhóm khác)
bai-tap: 2 — Thiết kế giải pháp
phase: Sau lượt tự phản biện trong 1-map-and-format.md
time: 11:55–12:30 (slide 13/14 — 35')
---

# cross-team-feedback.md — Phản biện chéo từ nhóm khác

> **Cách dùng**: nhóm trao đổi link repo với 1 nhóm khác chủ đề (slide 13/14). Mỗi bên trình 3 lớp (~5'), bên kia hỏi theo **4 góc phản biện** (đúng tầng / cụ thể / đủ lớp / tác dụng phụ). Ghi cụ thể từng comment + sửa luôn vào `card.md`, `demo.md`, hoặc `1-map-and-format.md`. Tránh ghi "ổn" / "chưa ổn".

---

## Lượt 2 (mô phỏng cứng) — phản biện từ "Track 02 — Healthcare AI Triage"

> **Bối cảnh người phản biện**: nhóm Track 02 làm AI sàng lọc triệu chứng (healthcare); họ quen với rủi ro y tế (đo huyết áp sai, chẩn đoán sai), thường khắt khe về **confidence reporting** + **fail-safe** + **legal trail**. Họ chưa quen domain tài chính / lóng tiếng Việt → câu hỏi của họ giúp lộ ra "**giả định trong nhóm**" mà người ngoài không thấy.
>
> Lượt này tôi đóng vai Track 02 critique cứng nhất có thể; các comment đều có ID `H-NN`. Cột "Phản hồi nhóm" ghi đã sửa đâu (file + dòng) hoặc vì sao không sửa.

### Góc 1 — Đúng tầng

| ID | Comment Track 02 | Phản hồi nhóm Track 04 | Hành động cụ thể |
|---|---|---|---|
| **H-01** | "Các bạn nói RC-1 'thiếu nguồn quy đổi đơn vị', nhưng dictionary của các bạn đặt `confidence_max = 0.85` cho 'cành' — nếu dictionary là **nguồn**, sao confidence không = 1.0? Đây không phải nguồn, mà là **đoán có cấu trúc**. Sửa lại RC-1 cho chính xác." | **Đồng ý phần lớn.** "Cành" và "củ" là lóng vùng miền — kể cả có dictionary, vẫn có 5–15% người dùng ý nghĩa khác. RC-1 nên đổi thành "**Thiếu nguồn quy đổi đơn vị + thiếu phân biệt số rõ ràng vs đoán có cấu trúc**". | ✅ Sửa trong `1-map-and-format.md` Phần A — RC-1 → "Thiếu nguồn quy đổi đơn vị + thiếu **phân biệt số rõ ràng vs đoán có cấu trúc** + thiếu sanity range theo hạng mục"; demo Lớp 3 mục 2 có note "dictionary không cố định cứng" giải thích D11/D12 confidence 0.85. |
| **H-02** | "**F-08** (Bitcoin) các bạn để vào 'ca dự phòng v1.1', nhưng từ chối tư vấn đầu tư là **luật cứng pháp lý** ở thị trường tài chính (Vietnam Securities Law có cấm tư vấn không phép). Sao không đẩy vào lớp Prompt R8 + Lớp 1 trạng thái E ngay từ v1, mà delay sang v1.1?" | **Đúng — đã làm rồi nhưng ghi không rõ.** R8 trong Lớp 2 prompt đã có sẵn, UI trạng thái E "Ngoài phạm vi" cũng đã có. F-08 không phải "delay sang v1.1" mà là "**đã được cover bằng cơ chế chung R8**, không cần lớp riêng". Bài viết bị nhầm. | ✅ Sửa `3-FINAL-test-set-eval-plan.md` Phần 3 → thêm note "F-08 cover ngay v1 qua R8 + UI trạng thái E"; thêm Phần D "Coverage check 9 ca không thuộc họ F-03" trong `1-map-and-format.md`. |
| **H-03** | "Các bạn không có lớp 'Người duyệt' — trong y tế chúng tôi bắt buộc có. Tài chính thì sao? Một giao dịch ≥ 5tr có nên có người duyệt thật, không phải chính user?" | **Không trong v1.** App là cá nhân, không có CSKH realtime; force-confirm 2-step (trạng thái D) chính là "user tự duyệt mình" + **trạng thái F khẩn cấp** + alert PO trong 5 phút (insert vào `emergency_events` bảng riêng). Đây là quyết định cấu trúc, không phải bug. **Đã ghi rõ** trong card Lớp 1 mục 1 + Lớp 3 card mục 5. Nếu sau này thêm tier "Pro" có CSKH, sẽ thêm Lớp 4. | ⚠️ Giữ thiết kế. Ghi vào backlog v2.0 trong `1-map-and-format.md`: "Tier Pro với CSKH phê duyệt giao dịch ≥ 50tr". |

### Góc 2 — Cụ thể

| ID | Comment Track 02 | Phản hồi | Hành động |
|---|---|---|---|
| **H-04** | "Demo Lớp 2 mục 5 ví dụ 4 'lít trong xăng' — các bạn dùng confidence 0.40, nhưng **không show cách LLM phân biệt** đồ uống vs thể tích vs lóng nhậu. Code path nào quyết 50k thay vì 200k? Tôi không thấy trong system prompt." | **Có nhưng chưa đủ rõ.** R4.1 trong system prompt chỉ ghi "context" mà không liệt keyword sets cụ thể. | ✅ Mở rộng R4.1 trong `2-prompt/demo.md` mục 1: liệt kê **keyword sets** (đồ uống = {cafe, trà, sữa, nước, coca, bia, ly, cốc, chai, lon}; nhậu/lớn = {nhậu, tiếp khách, đám, lễ, sếp, đối tác, hợp đồng}; thể tích = {xăng, dầu, ga, propan, sữa tắm, dầu gội}). |
| **H-05** | "Wireframe Lớp 1 trạng thái B (VÀNG) có 3 radio + nút lớn. Trên iPhone SE màn 320px, có thể vượt fold — user cuộn được nút [Lưu] không? F-03 thẻ B-special có 2 nút lớn ngang hàng, còn ăn nhiều màn hơn." | **Có rủi ro.** Wireframe ASCII không show responsive; trên iPhone SE, F-03 thẻ B-special chiếm ~50% màn. | ✅ Thêm vào `1-uiux/card.md` mục 4 ("Tác dụng phụ — màn nhỏ") + `1-uiux/demo.md` bảng microcopy: rule responsive — F-03 thẻ B trên màn ≤375px → 2 nút **full-width vertical stack** thay vì side-by-side. Đo `red_cancel_rate` theo screen size — nếu cao trên iPhone SE, prioritize fix v1.1. |
| **H-06** | "Mermaid Lớp 3 không show 'happy path latency target'. Y tế chúng tôi luôn có SLA. Tài chính các bạn bao lâu là 'chậm chấp nhận được'?" | Đã ghi `~10%` slow hơn silent save trong card mục 4 nhưng chưa show absolute number. | ✅ Thêm bảng SLA latency vào `3-architecture/demo.md` mục 7: B1 LLM ≤ 1500ms p95; B3 dictionary ≤ 5ms p95; B6 commit ≤ 100ms p95; toàn pipeline LLM-path ≤ 2000ms p95; rule-path v1.1 ~150ms p95. |

### Góc 3 — Đủ lớp

| ID | Comment Track 02 | Phản hồi | Hành động |
|---|---|---|---|
| **H-07** | "Các bạn chọn họ F-03 với 5 ca (F-03/04/05/07/11), mà FINAL có 15 ca. Còn 10 ca kia thì sao? Các bạn không thử 3 lớp với 10 ca đó thì làm sao biết không phá?" | **Đúng — đây là lỗ hổng lớn.** Chỉ test với 5 ca trong họ → có thể vô tình phá F-13 (vâng ạ) hoặc F-14 (tone âu lo). | ✅ **(Hành động lớn nhất)** Thêm Phần D "Coverage check 9 ca không thuộc họ F-03" vào `1-map-and-format.md`. Chạy thủ công 9 ca qua 3 lớp → xác định cần thêm R10/R11/R12 vào Lớp 2 prompt + trạng thái F/G vào Lớp 1. |
| **H-08** | "Schema MoneyEntityV1 chỉ có entity tiền + intent. F-13 'tổng tháng rẻ hơn ly trà sữa 🙄' không phải entity, intent = feedback. LLM trả gì? `entities=[]` rồi sao? UI hiện gì?" | **Đã ghi nhưng chưa nhất quán cross-layer.** R10 trong Lớp 2 đã định nghĩa intent=feedback, nhưng UI chưa có trạng thái riêng cho feedback. | ✅ Thêm trạng thái UI feedback nhẹ vào `1-uiux/demo.md` (gộp vào trạng thái E mở rộng) + R10 demo example trong `2-prompt/demo.md` mục 6. UI hiển thị "Cảm ơn phản hồi. Nếu thấy số tổng chưa đúng, bấm 'AI đoán sai' để mình kiểm." |
| **H-09** | "F-01 'CK nhầm 100 củ' — các bạn để trong dự phòng. Nếu ship như thế, AI vẫn trả lời như mọi câu khác → có thể nói gì đó nguy hiểm. Đây là healthcare tương đương với 'AI tư vấn tự tử'." | **Nhận. Đây là điểm yếu thật.** Tôi đã viết "F-01 dự phòng" nhưng chưa tạo guard. F-01 là risk Nặng nhất (điểm 25), không thể delay. | ✅ Thêm **R12 emergency** vào `2-prompt/demo.md` mục 1 (intent=emergency, không bịa quy trình, hướng bank+công an); thêm **trạng thái F** vào `1-uiux/demo.md` (banner đỏ + 3 nút hành động); thêm bảng riêng `emergency_events` vào `3-architecture/demo.md` mục 4.2 (không rotate raw_phrase — giữ vĩnh viễn cho legal trail); thêm **Alert A1** PO trong 5 phút. |

### Góc 4 — Tác dụng phụ

| ID | Comment Track 02 | Phản hồi | Hành động |
|---|---|---|---|
| **H-10** | "Audit log của các bạn lưu raw_phrase 90 ngày. PDPL Vietnam và GDPR yêu cầu **purpose limitation**. Vì sao 90 ngày? Có DPIA chưa?" | **Số 90 ngày là cảm tính.** Đáng lý nên derive từ "thời gian nhóm cần để phát hiện lỗi lặp" + retention policy chính thức. | ✅ Thêm note vào `3-architecture/demo.md` mục 4.1: "90 ngày là v1 placeholder; cần Privacy review (DPIA) trước launch — base on 'mean time to detect repeat error' từ dashboard W3". Tách `emergency_events` thành bảng riêng KHÔNG rotate — giữ vĩnh viễn cho legal trail (Air Canada precedent). |
| **H-11** | "Cost API ~1.5x token output — với 10k user × 30 chi/ngày × 30 ngày × 200 tokens/entity = 1.8 tỷ tokens/tháng. Cost thực tế là ~$1.800/tháng. Có affordable không?" | **Chưa tính kỹ.** Slide nhắc "kiến trúc lai" nhưng tôi chưa dùng đầy đủ. Có thể replace LLM với **rule-based extractor** (regex + dictionary) cho 80% câu đơn giản, fallback LLM chỉ cho câu phức tạp → giảm cost 5-10x. | ✅ Thêm **mục 6 "Cost optimization v1.1"** vào `3-architecture/demo.md`: rule-extractor frontier B0 trước B1 LLM; nếu confidence rule ≥ 0.9 → bypass LLM (giảm ~80% LLM call → ~$360/tháng). Đẩy vào backlog v1.1 trong `1-map-and-format.md`. |
| **H-12** | "Microcopy 'AI KHÔNG tự chuyển khoản giùm bạn' nghe có vẻ AI từng làm. User mới có thể tưởng các bạn thừa nhận lỗi cũ. Còn tone trạng thái F 'rất tiếc' — có khi quá dramatic cho keyword 'nhầm' đơn lẻ → false positive panic." | **Hợp lý — đặt tone defensive không cần thiết + F false positive risk.** | ✅ Đổi microcopy trong `1-uiux/demo.md` mục 4 → trạng thái D: "Sau khi xác nhận, bạn vẫn cần CK trên app ngân hàng riêng — chúng tôi không giữ tài khoản." (chỉ trình bày fact); thêm vào trạng thái F nút **"Đây không phải khẩn cấp — quay lại"** + R12 keyword phải có **2 condition** (vd "CK nhầm" + "đã chuyển" / "vừa CK") chứ không chỉ "nhầm" lẻ. |

---

## Tóm tắt lượt 2

| Hạng mục | Số comment | Đã sửa ngay | Mở thành backlog | Giữ nguyên (giải thích) |
|---|---|---|---|---|
| Đúng tầng | 3 (H-01..H-03) | 2 | 1 (H-03 → v2.0 tier Pro) | 0 |
| Cụ thể | 3 (H-04..H-06) | 3 | 0 | 0 |
| Đủ lớp | 3 (H-07..H-09) | 3 | 0 | 0 |
| Tác dụng phụ | 3 (H-10..H-12) | 3 | 0 (H-11 cũng nằm v1.1 cost) | 0 |
| **Tổng** | **12** | **11** | **1** | **0** |

**Comment quan trọng nhất**:
- **H-07** (test 9 ca không thuộc họ F-03) → bộc lộ 3 ca cần thêm cover (F-01, F-13, F-14) → đẻ ra R10/R11/R12 + bảng coverage check trong `1-map-and-format.md` Phần D.
- **H-09** (F-01 emergency healthcare-equivalent) → tạo riêng trạng thái F + bảng `emergency_events` + Alert A1.

**Sửa đã đẩy vào file:**

| File | Sửa gì | Comment trigger |
|---|---|---|
| `01-test-set-review/3-FINAL-test-set-eval-plan.md` | (không sửa — FINAL của Bài 1 đã ổn) | — |
| `02-solution-design/1-map-and-format.md` | RC-1 wording; bỏ F-08 khỏi "ca dự phòng"; thêm Phần D "Coverage 9 ca"; backlog v1.1 (cost, DPIA); backlog v2.0 (tier Pro) | H-01, H-02, H-07, H-10, H-11, H-03 |
| `02-solution-design/artifact/2-prompt/demo.md` mục 1 | R4.1 keyword sets cụ thể (đồ uống / nhậu / thể tích); R10 không-ghi-chi; R11 tone âu lo + hotline; R12 emergency | H-04, H-08, H-09 |
| `02-solution-design/artifact/2-prompt/card.md` mục 2 | Hành động "Khắc phục" → ✅ qua R11 hotline + R12 emergency | H-09 |
| `02-solution-design/artifact/1-uiux/demo.md` mục 4 | Microcopy CK (Lớp 1 trạng thái D); responsive rule iPhone hẹp; trạng thái F khẩn cấp + nút rollback false positive | H-05, H-09, H-12 |
| `02-solution-design/artifact/3-architecture/demo.md` mục 4.1 | DPIA note 90 ngày; tách `emergency_events` bảng riêng giữ vĩnh viễn | H-09, H-10 |
| `02-solution-design/artifact/3-architecture/demo.md` mục 5 | Cost optimization v1.1 rule-extractor frontier | H-11 |
| `02-solution-design/artifact/3-architecture/demo.md` mục 7 | SLA latency table | H-06 |

---

## Backlog v1.1 sau lượt 2

(Cộng dồn với backlog đã có trong `1-map-and-format.md`)

- [ ] **Sanity range theo phân vị 5%-95%** từ VHLSS 2022 thay range cảm tính (H-10).
- [ ] **Rule-extractor frontier (B0)** trước LLM để giảm cost 5–10x (H-11).
- [ ] **DPIA chính thức** trước khi launch — derive retention policy từ data thật (H-10).
- [ ] **Responsive layout** test thật trên iPhone SE / Pixel 5a (H-05).
- [ ] **Voice-confirm** cho mode "đang đi" — F-04 (đã ghi từ lượt 1).
- [ ] **Figma prototype** thay ASCII cho buổi pitch v2 (đã ghi từ lượt 1).

## Backlog v2.0

- [ ] **Tier Pro với CSKH** duyệt giao dịch ≥ 50tr (H-03).
- [ ] **Trust mode opt-in** — sau 30 ngày không sửa, user có thể bật silent-save cho khoản XANH < 200k (H-04 mở rộng).

---

## Khi phản biện chéo nhóm thật

Khi đổi link repo với nhóm khác chủ đề thật (slide 13/14 yêu cầu), ghi tiếp **lượt 3** vào file này theo cùng cấu trúc:

```text
## Lượt 3 — phản biện từ "Track XX — <tên>"

### Người phản biện
- Tên nhóm: [...]
- Mã học viên: [...]
- Link repo nhóm bạn: https://github.com/.../Day25-...

### Góc 1 — Đúng tầng
| ID | Comment | Phản hồi nhóm Track 04 | Hành động |
| F-01 | [...] | [...] | [...] |

### Góc 2 — Cụ thể
...

### Góc 3 — Đủ lớp
...

### Góc 4 — Tác dụng phụ
...

### Tóm tắt lượt 3
[bảng số comment / đã sửa / backlog / giữ nguyên]
```

Giữ format này để người chấm có thể trace từng comment → file artifact đã sửa.
