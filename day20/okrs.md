# OKRs Q3 2026 — SmartHint AI

**Ngày:** 15/05/2026  
**Áp dụng cho:** Cột NOW trong Roadmap (Dual-Scaffolding + Tool Verify + Feedback Loop)  
**Quy tắc 70%:** Target aspirational — hoàn thành 60-70% là sweet spot.

---

## Objective

> **Trở thành "gia sư đêm" không thể thiếu của học sinh lớp 12 ôn Phần III đề TN Toán 2026**

---

## Key Results

| # | Loại | Key Result | Baseline hiện tại | Target Q3 |
|---|------|-----------|-------------------|-----------|
| **KR1** | Leading (dự báo) | **200 học sinh pilot dùng app ≥ 5 phiên/tuần** trong 4 tuần liên tiếp | 0 (chưa launch) | 200 HS active |
| **KR2** | Lagging (kết quả) | **Session Completion Rate đạt ≥ 60%** (HS hoàn thành phiên Dual-Scaffolding đến bước cuối) | 0% (chưa có data) | ≥ 60% |
| **KR3** | Quality (bảo vệ) | **Tỷ lệ phiên kích hoạt fallback rule-based ≤ 20%** (AI đủ tốt, không cần chuyển sang hint cứng) | N/A | ≤ 20% |

---

## Giải thích từng KR

### KR1 — Leading: 200 HS dùng ≥ 5 phiên/tuần
- **Tại sao Leading:** Đo user behavior — nếu HS quay lại 5 phiên/tuần, signal product-market fit mạnh. Sửa kịp nếu retention thấp.
- **Tại sao 200:** Đủ statistical significance cho A/B test prompt. Đủ nhỏ để founder QA tay mọi phiên bất thường.
- **Aspirational:** 200 HS active 5 phiên/tuần = aggressive cho MVP mới launch. 70% = 140 HS cũng là signal tốt.

### KR2 — Lagging: Session Completion ≥ 60%
- **Tại sao Lagging:** Confirm kết quả — HS thực sự hoàn thành bài, không bỏ giữa chừng. Đây là North Star metric từ PRD Day 17.
- **Tại sao 60%:** Benchmark từ edtech tương tự (Khan Academy completion ~40-50%). 60% = aspirational cho AI tutor mới.
- **Aspirational:** 70% target = 42% completion cũng acceptable cho V1.

### KR3 — Quality: Fallback ≤ 20%
- **Tại sao Quality:** Bảo vệ UX — nếu AI liên tục trigger fallback, trải nghiệm degraded. Guardrail từ PRD: < 25%.
- **Tại sao 20%:** Strict hơn PRD (25%) vì muốn push AI quality. Nếu > 20% → cần improve prompt hoặc switch model.
- **Aspirational:** 20% target = 14% thực tế cũng tốt.

---

## Self-check

- [x] Objective truyền cảm hứng, không số, ngắn gọn
- [x] Mỗi KR có số cụ thể (200, 60%, 20%)
- [x] Đủ 3 loại: Leading (KR1) + Lagging (KR2) + Quality (KR3)
- [x] KR aspirational (70% rule applied)
- [x] Ngôn ngữ business — KHÔNG có "model accuracy", "latency", "code coverage"
- [x] Match vấn đề ở cột NOW (Dual-Scaffolding + feedback loop)
- [x] Đọc to cho VC trong 30 giây: hiểu ngay product đang đi đâu
