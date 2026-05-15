# Risk Register — SmartHint AI

**Ngày:** 15/05/2026  
**Burn rate:** 31 triệu VNĐ/tháng (Base)  
**Quy đổi:** $5K ≈ 125M VNĐ ≈ 4 tháng runway | $50K ≈ 1.25 tỷ ≈ hết runway

---

## Risk 1 — Vendor Risk: Google Gemini deprecate Flash-Lite hoặc tăng giá 5x

**If** Google deprecate Gemini Flash-Lite (model rẻ nhất) hoặc tăng giá từ $0.10 → $0.50/1M input token (pattern: Google thường deprecate model cũ khi ra model mới),

**Then** COGS tăng 5x → gross margin từ 73% xuống ~20% → unit economics âm → không thể scale,

**Leading to** phải raise gấp hoặc cắt feature → **3 tháng runway** bị đốt vào re-engineering (nếu không có abstraction layer sẵn).

| Likelihood | Impact | Score |
|-----------|--------|-------|
| 3 (Google deprecate model mỗi 6-12 tháng) | 3 (3 tháng runway) | **9** |

**Quadrant:** Watch — Plan B sẵn sàng (abstraction layer đã build 70%)

---

## Risk 2 — Customer-facing AI Risk: AI Socratic tutor hallucinate lời giải sai → HS tin và ghi nhớ sai

**If** AI trả lời sai bước giải (ví dụ: "đạo hàm của x² = x" thay vì 2x) mà tool verify không catch được (edge case phức tạp),

**Then** 50+ HS ghi nhớ sai → thi TN sai → phụ huynh phát hiện → 10 phụ huynh đòi refund + 1 phụ huynh kiện (Air Canada pattern: "app nói sai, con tôi tin"),

**Leading to** $3K refunds + $5K legal + viral trên group phụ huynh Zalo (50K members) → **MRR drop 50%** trong 2 tuần = **2.5 tháng runway**.

| Likelihood | Impact | Score |
|-----------|--------|-------|
| 4 (LLM hallucinate là bản chất, edge cases toán phức tạp) | 3 (2.5 tháng runway) | **12** |

**Quadrant:** Watch/Mitigate — cần tighten tool verify coverage + pre-launch review ritual

---

## Risk 3 — Founder-bandwidth Risk: Founder ốm/bận 1 tuần, critical bug AI không ai fix

**If** founder (kiêm CTO, kiêm QA, kiêm support) ốm hoặc bận việc cá nhân 7 ngày liên tiếp,

**Then** bug critical (AI loop vô hạn, hoặc tool verify sập) không ai fix → 200 HS pilot không dùng được app → retention drop → pilot fail,

**Leading to** mất data retention 4 tuần (phải restart pilot) + mất trust 200 HS đầu tiên = **2 tháng runway** (thời gian + chi phí recruit lại pilot cohort).

| Likelihood | Impact | Score |
|-----------|--------|-------|
| 3 (founder solo, single point of failure) | 2 (2 tháng runway) | **6** |

**Quadrant:** Accept/Watch — cần document runbook cho 1 người backup

---

## 2x2 KILL ZONE Matrix

```
              Likelihood
          Low (1-2)      High (3-5)
        ┌──────────────┬───────────────┐
   High │              │               │
   (>3mo)│              │               │
   Imp. │              │               │
        ├──────────────┼───────────────┤
   Med  │              │ • Risk 2 (12) │
   (2-3 │              │ • Risk 1 (9)  │
    mo) │              │ • Risk 3 (6)  │
        ├──────────────┼───────────────┤
   Low  │              │               │
   (<1mo)│              │               │
        └──────────────┴───────────────┘
```

**KILL ZONE (Score ≥ 15):** Không có risk nào ở KILL ZONE hiện tại.  
**Priority cao nhất:** Risk 2 (Score 12) — AI hallucinate → mitigate ngay bằng tool verify + pre-launch review.

---

## Mitigation Actions (Top priority: Risk 2)

| Action | Timeline | Cost |
|--------|----------|------|
| Tăng coverage tool verify lên 95% bài trong bank đề | 2 tuần | $0 (SymPy) |
| Thêm disclaimer mọi phiên: "AI có thể sai — kiểm tra lại phép tính" | 1 ngày | $0 |
| Pre-launch review: 2 người test 50 bài mẫu trước mỗi prompt update | Ongoing | 30'/lần |

---

## Self-check

- [x] Đo bằng tháng runway (không phải $ hay % users)
- [x] Có Founder-bandwidth risk (Risk 3)
- [x] Vendor risk specific: rate limit / pricing / deprecation (Risk 1)
- [x] Customer-facing risk specific: hallucinate lời giải (Risk 2)
- [x] Likelihood realistic (không tất cả = 5)
- [x] If-Then-Leading to format đầy đủ
