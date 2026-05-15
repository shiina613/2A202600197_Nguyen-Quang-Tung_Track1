---
artifact: 3 — Lớp kiến trúc dữ liệu
bai-tap: 2 — Thiết kế giải pháp
demo: ./demo.md
---

# card.md — Lớp kiến trúc dữ liệu

**Tình huống xử lý**: **F-03** + họ leverage **F-03/F-04/F-05/F-07/F-11**.
Phụ trách thêm: hạ tầng audit + dashboard cho **mọi 15 case** Bài 1 (F-01 emergency log, F-08/F-09 out_of_scope log để monitor R8 keyword).

Xem [`../../1-map-and-format.md` Phần A](../../1-map-and-format.md#phần-a--chọn-rủi-ro-và-tầng-giải-pháp).

---

## 1. Giải pháp là gì?

Pipeline 6 bước thay thế cho "LLM → DB" trực tiếp:

```text
User input
   ↓
[B1] LLM (system prompt v1 R1–R12, schema MoneyEntityV1)
   ↓ (entities + confidence + needs_user_confirm + intent)
[B2] Confidence Gate           — bất kỳ entity nào confidence < 0.8 → bắt confirm
   ↓
[B3] Dictionary RAG (lóng VN)  — re-resolve unit_phrase, có thể nâng/hạ confidence
   ↓
[B4] Sanity Rule (theo hạng mục) — value_vnd vượt range → ép confidence = 0.4
   ↓
[B5] Force Confirm Gate        — needs_user_confirm OR magnitude ≥ 5tr OR intent ∈ {emergency, out_of_scope, emotional} → CẤM commit DB, đẩy sang UI
   ↓ (nếu user duyệt)
[B6] DB Commit + Audit Log     — ghi entity_decisions table; log cả intent
   ↓
Dashboard: 4 widget tuần + 1 alert + retro learning
```

Lớp này sửa đúng **RC-1 "thiếu nguồn quy đổi đơn vị + sanity"** và là tầng "**kiến trúc lai**" (slide 10/14 — LLM + rule + dictionary + log, không phải LLM-only).

**Nguồn neo** (đã verify qua web search):

- **CFPB Issue Spotlight 06/2023** — "Chatbots in Consumer Finance" — chatbot tài chính có rủi ro "inaccurate information" + "doom loops" không gặp người + "ill-suited for tasks that require logic, specialized knowledge, or current data" → **lý do nền** cho dictionary có version + force-confirm gate. ([CFPB report](https://files.consumerfinance.gov/f/documents/cfpb_chatbot-issue-spotlight_2023-06.pdf))
- **Moffatt v. Air Canada (2024 BCCRT)** — Tribunal ruling: *"It should be obvious to Air Canada that it is responsible for all the information on its website. It makes no difference whether the information comes from a static page or a chatbot."* → **lý do** vì sao audit log + dashboard là yêu cầu pháp lý, không phải nice-to-have. ([ABA Business Law Today 02/2024](https://www.americanbar.org/groups/business_law/resources/business-law-today/2024-february/bc-tribunal-confirms-companies-remain-liable-information-provided-ai-chatbot/))
- **VHLSS 2022 (Tổng cục Thống kê VN)** — Khảo sát 46.995 hộ — **nguồn dùng để derive sanity range v1.1**. ([GSO portal](https://www.gso.gov.vn/en/default/2024/04/results-of-the-viet-nam-household-living-standards-survey-2022/))

---

## 2. Vì sao sửa ở lớp kiến trúc dữ liệu?

- Nguyên nhân chính là **thiếu nguồn đúng** (dictionary lóng VN có version) và **thiếu nguồn sanity** (range theo hạng mục, derive từ VHLSS).
- AI đang phải tự nhớ thông tin thay vì đọc từ nguồn đáng tin cậy.
- Cần **kiểm tra dữ liệu** (sanity range) trước khi câu trả lời được tạo ra.
- Cần **ghi lại** lỗi để biết kiểu lỗi nào lặp lại nhiều — ví dụ "lít" có 73% bị user override → cập nhật dictionary; "rưỡi" sau lóng có 90% chọn nhánh chục → cảnh báo prompt mạnh hơn.

**Hành động phòng vệ chính**:

- [x] **Ngăn** lỗi bằng nguồn dữ liệu đúng (dictionary lóng VN + sanity range)
- [x] **Phát hiện** khi nguồn thiếu hoặc lỗi (dictionary trả "ambiguous" → flag; sanity fail → ép confidence)
- [x] **Khắc phục** bằng force-confirm gate (KHÔNG cho commit DB silent — phải qua UI confirm) + DB-down fallback local storage (không inflate số dư)
- [x] **Ghi lại** lỗi để cải thiện (audit log `entity_decisions` + dashboard 4 widget + 1 alert)

---

## 3. Demo nằm ở đâu?

**File demo**: [`demo.md`](./demo.md)

Demo có:

- **Mermaid flowchart** pipeline 6 bước (User Input → Dashboard)
- **Bảng dictionary lóng v1** (16 dòng — bao phủ họ F-03 + ca không thuộc họ)
- **Bảng sanity range v1** (8 hạng mục — đã neo VHLSS 2022, có note "v1.1 sẽ tính lại theo phân vị 5%-95%")
- **Schema audit log** (`entity_decisions` SQL)
- **Dashboard 4 widget** + **1 alert rule** + **Cron job daily**
- **Bảng SLA latency** (B1/B3/B6 p95) — sau phản biện H-06
- **Failure mode** (LLM/dict/sanity/DB/UI down — fail-safe = bắt confirm)
- **Bảng test pipeline** với họ F-03 (6 ca)
- **Note DPIA 90 ngày** (sau phản biện H-10) + **cost optimization v1.1** (sau H-11)

---

## 4. Tác dụng phụ

| Tác dụng phụ | Mô tả | Mức |
|---|---|---|
| Latency tăng | LLM (~1500ms p95) + Dictionary (~5ms cached) + Sanity (~10ms) + UI = chậm hơn ~10% so với silent save (≤ 2000ms p95 toàn pipeline) | Vừa |
| Phụ thuộc chất lượng dictionary | Dictionary thiếu / cũ → confidence sai → user phiền | Vừa |
| Cost lưu trữ tăng | Audit log mỗi entity ~250 byte; 1 user × 30 chi/ngày × 30 ngày = ~225 KB/tháng. 10k user = 2.2 GB/tháng | Nhẹ |
| Phức tạp hệ thống | Thêm 4 component mới (Confidence Gate, Dictionary, Sanity, Audit Log) | Vừa |
| Cần người duy trì dictionary | Lóng vùng miền thay đổi → cần PO/CSKH cập nhật hàng quý | Vừa |
| **Cost API LLM** | Token output ~2× → cost ~1.5× (~$X/10k user/tháng) — *raised by H-11 phản biện* | Vừa |
| **DPIA chưa làm** | Lưu raw_phrase 90 ngày là số cảm tính, chưa qua privacy review chính thức — *raised by H-10* | Vừa |

**Nhóm giảm vấn đề đó bằng cách nào?**

- **Cache dictionary** in-memory ở server (16 dòng × ~120 byte → < 2 KB) + lazy reload khi version thay đổi. Latency dictionary ~5ms thay vì 50ms.
- **Skip confirm UI** với entity confidence ≥ 0.8 AND magnitude < 5tr → user không phiền với khoản nhỏ rõ ràng.
- **Audit log** rotate raw_phrase sau 90 ngày (giữ hash). DPIA chính thức trước launch — derive retention từ "mean time to detect repeat error" trong dashboard.
- **Người phụ trách dictionary**: 1 PO duyệt PR mỗi 2 tuần dựa trên dashboard "lóng nào bị override nhiều nhất" (Widget W3).
- **Cost optimization v1.1** — rule-extractor frontier (regex + dictionary) trước B1 LLM cho 80% câu đơn giản (vd "phở 65k", "cafe 50k"); LLM chỉ chạy cho câu phức tạp → giảm cost 5–10×.
- **Failure mode** (xem demo.md mục 5):
  - Dictionary down → fallback embedded dictionary trong code; cap confidence 0.7 cho mọi entity → tất cả qua confirm.
  - Sanity down → bypass nhưng cap confidence ≤ 0.7 → tất cả qua confirm.
  - DB down → giữ pending vào client local storage, retry exponential backoff 30s/1m/5m; KHÔNG báo "đã lưu" cho user (tránh inflate số dư UI).
  - LLM down → banner "AI tạm nghỉ — bạn nhập trực tiếp số tiền & hạng mục"; KHÔNG cố tự đoán bằng regex (an toàn > available).

---

## 5. Checklist trước khi nộp

- [x] Sơ đồ cho thấy dữ liệu đi từ đâu đến đâu (Mermaid 6 bước trong demo.md mục 1).
- [x] Có bước kiểm tra nguồn trước khi AI trả lời (dictionary RAG + sanity ở B3, B4).
- [x] Có cách xử lý khi không có dữ liệu (failure mode mục 4 trong card này + demo mục 5).
- [x] Có cách chuyển sang người thật với tình huống rủi ro cao — *điều chỉnh*: app cá nhân không có CSKH realtime, nhưng có **(a) force-confirm gate** = chuyển trách nhiệm về user qua thẻ confirm Lớp 1; **(b) intent=emergency log riêng** + alert PO trong 5 phút (cho F-01 CK nhầm).
- [x] Có cách biết lỗi này có đang lặp lại không (dashboard W1–W4 + Alert A1 trong demo mục 4).

**Người phụ trách**: **Đạt** (cần đồng bộ schema `MoneyEntityV1` với **Tùng** Lớp 2 trước; cung cấp dashboard mock cho **Dương** Lớp 1 để render history view).
