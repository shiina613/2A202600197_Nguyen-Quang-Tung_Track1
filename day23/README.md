# Day 23 — Track 01: AI Adoption & Change Management

**Học viên:** Nguyễn Quang Tùng — 2A202600197
**Sản phẩm phân tích:** SmartHint AI — gia sư Socratic AI cho học sinh THPT lực học 6.0-8.0
**Buổi học:** Day 23 — VinUni A20 — AI Thực Chiến — 12/05/2026
**Track:** Track 01 — Product & Business
**Repo name:** `Day23-Track01-2A202600197`

---

## 1. Câu trả lời 1 dòng

Dashboard này trả lời: **SmartHint AI có thực sự đi vào workflow học của học sinh THPT, hay chỉ "wow lần đầu rồi bỏ"?**

Kết luận sau red-team 4 vai: **CONTINUE WITH GUARDRAILS** — tiếp tục pilot 100-300 học sinh trong 8 tuần với Dashboard v2 làm gate; chỉ scale > 300 khi đạt đồng thời 3 điều kiện định lượng.

---

## 2. Cấu trúc repo

| File | Loại | Tóm tắt |
|---|---|---|
| [`README.md`](README.md) | Mô tả | File này |
| [`01-case-evidence-matrix.md`](01-case-evidence-matrix.md) | Cá nhân | Phân tích case Klarna (warning) — measurement trap + Goodhart's Law |
| [`02-case-comparison.md`](02-case-comparison.md) | Nhóm | So sánh Morgan Stanley (success — trust trước scale) vs Klarna (warning) qua lăng kính NPT |
| [`03-product-roi-dashboard.md`](03-product-roi-dashboard.md) | Nhóm | Product ROI Dashboard v2: Parts A-B-C-D, 4 workflow, 8 red-team risks, 5 thay đổi v1→v2, Decision Rules định lượng |
| [`04-reflection.md`](04-reflection.md) | Cá nhân (Discord-ready) | Đổi North Star: "Session Completion" → "Self-calc gate pass rate ≤2"; link ADKAR + NPT + Goodhart |
| [`assets/`](assets/) | Folder | Placeholder cho ASCII mock + future screenshots |

---

## 3. Phân bổ 100 điểm chính thức (`Day23-Lab-Assignment.md §6`)

| Hạng mục | Điểm | File chính | Tự đánh giá |
|---|---:|---|---|
| Case Evidence Matrix | **15** | `01-case-evidence-matrix.md` | ✅ Có đủ 10 trường template + layer assignment + source disclaimer |
| Case Comparison (nhóm) | **15** | `02-case-comparison.md` | ✅ MS vs Klarna + 4 đối chiếu SmartHint + NPT lens |
| Product ROI Dashboard v2 | **60** | `03-product-roi-dashboard.md` | ✅ Parts A-D đầy đủ + 6 tiêu chí rubric đạt + 5 v1→v2 |
| Reflection cá nhân | **10** | `04-reflection.md` | ✅ 197 từ (rubric 150-200) + Discord-ready |
| `README.md` + `assets/` | bắt buộc cấu trúc (không điểm riêng) | repo root | ✅ có đủ |

---

## 4. Dashboard 60đ — Self-check 6 điều kiện (`§6` Day23-Lab-Assignment)

| # | Điều kiện rubric | Ở đâu | Self-check |
|---|---|---|---|
| 1 | Scope rõ: 1 product + 2-4 workflow | `03` §A.1-A.3 | ✅ 1 product (SmartHint AI) + **4 workflow** |
| 2 | Chẩn đoán đúng rào cản adoption | `03` §A.4 | ✅ **Desire** (học sinh) — chọn 1 barrier có lý do, không chọn tất |
| 3 | Tactic gắn với đúng rào cản | `03` §A.5 | ✅ 3 tactic + barrier mapping + owner + deadline |
| 4 | Metric productivity/quality/trust/value, không chỉ usage | `03` §B.1-B.3 | ✅ 8+ metric Quality/Trust/Value (gold-set, re-ask, approve, cost) — **không có metric login/prompt count/DAU/MAU** (tránh "lỗi thường gặp" §9.2) |
| 5 | Baseline, target, data source, owner rõ | `03` §B (mọi metric) | ✅ Mỗi metric có 4 trường + **phương pháp đo W0** (tránh §9.3); data source là tên event log / table cụ thể (tránh §9.4); owner là role cụ thể PM Learning / PM Family / Content Lead / UX Researcher / Founder (tránh §9.5) |
| 6 | Red-team risk + Fix + ≥2 thay đổi v1→v2 | `03` "Red-team handshake" + Part D §3 | ✅ 8 risks, **5 thay đổi v1→v2** + **2 chiều red-team** (chúng tôi ĐI + BỊ — theo template `05-red-team-template.md`) |
| + | Decision continue/pivot/kill | `03` §D + Decision Rules block | ✅ "Continue with guardrails" + 4 Decision Rule định lượng (slide §13) |
| + | Vì sao V1 yếu + Vì sao V2 tốt hơn | `03` §D #1-#5 | ✅ Mỗi V1→V2 có 2 dòng tách rõ (template `04-part-d-decision-memo.md` yêu cầu) |

---

## 5. 5 thay đổi v1 → v2 sau red-team

| # | V1 (yếu) | V2 (sửa) | Vai red-team nêu |
|---|---|---|---|
| 1 | **North Star** = "Session Completion Rate > 60%" (PRD Day 17) | "Self-calc gate pass rate ở lần thử ≤2 ≥ 50% (W8) → ≥ 60% (W12)" | User + Risk (bẫy Klarna) |
| 2 | Parent Trust = "% mở report tuần > 50%" | (a) "% mở 3 tuần liên tiếp ≥ 35%" + (b) "% học sinh approve ≥ 80%" | User + Workflow Owner |
| 3 | Không có gold-set + QA sample | Teacher gold-set 200 bài + QA random 5%/tuần; **AI phân loại ≥ 95% là gate scale** | Risk (Morgan Stanley pattern) |
| 4 | Không có "re-ask rate" | Re-ask rate 7-14 ngày ≤ 30% / ≤ 15% (cross-check với North Star) | User (chống Goodhart) |
| 5 | Không có cost metric | "API cost / W4 active learner ≤ $0.50/tháng" + "API cost / self-calc pass ≤ $0.05" | CFO |

---

## 6. Bài học lớn nhất từ Day 23

> **Wow ≠ Adoption.** AI tốt nhưng học sinh không dùng đúng = AI chưa adopt. SmartHint dễ rơi vào bẫy giống Klarna: volume / "phiên hoàn thành" cao nhưng không đo hiểu thật. Phải đo **chuyển hành vi** (self-calc pass rate, re-ask rate) thay vì đo **activity** (session count, DAU). Và phải chống **Goodhart's Law** bằng cặp metric kéo nhau (pass rate × re-ask rate; parent open × student approve).

---

## 7. Framework đã dùng (đầy đủ citation ở `03` §"Nguồn")

- ADKAR (Prosci) — chẩn đoán barrier
- Mollick task split (Just Me / Delegated / Automated) + Centaur/Cyborg
- BCG 10-20-70 + 74% AI scale failure (2024)
- McKinsey State of AI 2024 — workflow redesign > tool insertion
- Klarna / Morgan Stanley / DWP-GDS / JPMorgan / KPMG case patterns
- NPT (Normalization Process Theory — May et al. 2009)
- Goodhart's Law

---

## 8. Checklist nộp Discord `#day23-submissions`

- [x] Đổi tên repo thành `Day23-Track01-2A202600197`
- [ ] Visibility: Public
- [ ] Branch: `main`
- [x] 5 file + folder `assets/` trong cấu trúc đúng (xem `§2`)
- [ ] Đẩy lên GitHub bằng `git push -u origin main`
- [ ] Dán link repo (không phải link file) lên Discord `#day23-submissions` trước **13:00**
- [x] Reflection cá nhân ở `04-reflection.md` (~195 từ) — **copy nội dung reflection paste vào thread bài nhóm** trong 24h (đúng format slide §27)

---

## 9. TL;DR cho TA (60 giây)

> **Câu hỏi nhóm:** SmartHint AI thực sự đi vào workflow học, hay chỉ "wow rồi bỏ"?
> **Trả lời:** Đang ở giai đoạn pilot → cần Dashboard v2 làm gate. **CONTINUE WITH GUARDRAILS.**
> **Bằng chứng:** 4 workflow → 8 metric (4 layer Activation/Productivity/Quality/Trust/Value) → 4 Decision Rule định lượng (Continue/Pivot/Pause/Kill).
> **Bài học lớn nhất:** Wow ≠ Adoption. North Star v1 ("session completion") là containment của Klarna — đổi sang "self-calc gate pass rate ≤2" + cặp đo chống Goodhart (re-ask rate).
> **Đọc theo thứ tự:** `03` (Dashboard 60đ) → `01` (Klarna evidence) → `02` (MS vs Klarna NPT) → `04` (reflection cá nhân).
