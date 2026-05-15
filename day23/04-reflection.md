# 04 — Reflection cá nhân Day 23

**Học viên:** Nguyễn Quang Tùng — 2A202600197
**Câu hỏi (slide §27):** 1 metric hoặc 1 giả định về áp dụng AI tôi sẽ sửa là gì? Vì sao?
**Format nộp:** Reply vào thread bài nhóm trên Discord `#day23-submissions` — dán **block dưới đây** (đã ≈195 từ, đúng yêu cầu 150-200 từ).

---

## Reflection (paste vào Discord — ~195 từ)

Metric tôi sửa là **North Star SmartHint AI**: từ "Session Completion Rate > 60%" (Day 17 PRD) sang **"Self-calc gate pass rate lần thử ≤2 ≥ 50% (W8)"**.

Trước Day 23 tôi nghĩ "phiên hoàn thành = học". Sai. Học sinh hoàn thành theo 3 cách: (a) đoán Tier-1, (b) nhờ bạn tính Tier-2, (c) tự tính — gõ đúng. Cả 3 đều `completed = TRUE`, chỉ (c) là chuyển hành vi MVP cần. Đây là bẫy Klarna: containment 2/3 chat AI xử lý nhưng quality bị che, 1 năm sau Klarna phải đưa con người trở lại CS (Reuters 09/2025).

Soi qua **ADKAR**, rào cản chính là **Desire**, không phải Ability — metric phải đo "có muốn tự tính" chứ không đo "có hoàn thành". Soi qua **NPT** (May 2009), session-completion đo *Cognitive Participation*, không phải *Collective Action* — tôi cần đo Collective Action (workflow vào nề nếp).

Metric mới có 3 chốt chống **Goodhart's Law**: (1) học sinh **tự nhập** kết quả, AI check số học rẻ & khó fake; (2) "lần ≤2" loại đoán bừa; (3) cặp với re-ask rate 7-14 ngày — pass cao mà re-ask cao = chưa hiểu. **Wow ≠ Adoption.**

*(~195 từ — đếm bằng `wc -w`, nằm trong khoảng 150-200 theo rubric)*

---

## Vì sao reflection này khác bản v0 trong đầu tôi sáng nay

| v0 (trước Day 23) | v1 (sau workshop) |
|---|---|
| "Session completion là North Star vì nó dễ đo và đẹp dashboard" | Đó là **vanity metric** — đếm activity, không đo behavior change |
| Nghĩ Klarna là case "AI thay thế con người thành công" | Klarna là **measurement trap** điển hình: containment ≠ quality |
| Không có khung lý thuyết để chống cãi "60% là đủ tốt rồi" | Có **ADKAR** (đúng barrier = Desire) + **NPT** (Collective Action) + **Goodhart's Law** (cặp metric kéo nhau) |
| Một metric đơn lẻ | Metric **kèm counter** — không bao giờ một mình |
