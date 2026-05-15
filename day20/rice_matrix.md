# RICE Matrix — SmartHint AI

**Ngày:** 15/05/2026  
**Người chấm:** Founder  
**Burn rate tham chiếu:** ~31 triệu VNĐ/tháng (Base, Day 18)

---

## Bảng RICE — 5 tính năng cốt lõi từ PRD Day 17

| # | Tính năng | R (Reach/quý) | I (Impact) | C (Confidence) | E (Person-month) | Score |
|---|-----------|---------------|------------|----------------|-------------------|-------|
| 1 | **Dual-Scaffolding Socratic Loop** (trắc nghiệm gợi hướng → ép tự tính) | 8000 | 3.0 | 0.8 | 3 | **6400** |
| 2 | **Tool-verified computation** (kiểm chứng số học sinh gõ bằng tool tính toán thật) | 8000 | 2.0 | 0.8 | 2 | **6400** |
| 3 | **Báo cáo tiến bộ tuần cho phụ huynh** (buyer trust signal) | 3000 | 2.0 | 0.5 | 2 | **1500** |
| 4 | **Mở rộng bank đề sang lớp 11** (V2 cohort mới) | 2000 | 1.0 | 0.5 | 4 | **250** |
| 5 | **Voice input** (học sinh đọc bài toán thay vì gõ) | 1500 | 0.5 | 0.5 | 5 | **75** |

---

## Giải thích chấm điểm

### Feature 1 — Dual-Scaffolding Socratic Loop
- **R = 8000:** 200 pilot × 40 phiên/quý = đụng feature mỗi phiên. Scale lên 3000 paid → ~8000 user-touches/quý (discount 50% từ estimate lạc quan 16K).
- **I = 3.0 (massive):** Đây là core differentiator — không có nút "xem full lời giải". Trực tiếp tạo transfer learning.
- **C = 80%:** Đã có Wizard of Oz test trên Zalo với ~20 HS, signal tích cực. Chưa đủ 200 HS pilot → không 100%.
- **E = 3:** Prompt engineering + RAG bank đề + UX flow + QA edge cases. Multiply 1.5x từ estimate 2 tháng.

### Feature 2 — Tool-verified computation
- **R = 8000:** Mọi phiên Phần III đều cần verify số → reach = Dual-Scaffolding.
- **I = 2.0 (high):** Giải quyết pain "AI tính nhẩm sai" — guardrail chất lượng.
- **C = 80%:** Đã prototype tool verify trên Wolfram Alpha API. Hoạt động ổn với biểu thức đơn giản.
- **E = 2:** Integration API + error handling + fallback khi tool timeout.

### Feature 3 — Báo cáo tiến bộ tuần cho phụ huynh
- **R = 3000:** Chỉ phụ huynh (buyer) dùng, không phải HS. Estimate 3000 phụ huynh active/quý (discount từ 6000).
- **I = 2.0 (high):** Buyer trust = retention + word-of-mouth. Phụ huynh cần "bằng chứng con học thật".
- **C = 50%:** Chưa interview phụ huynh nào về format báo cáo. Chỉ có assumption từ Day 17 user story.
- **E = 2:** Dashboard đơn giản + weekly email + privacy logic (HS xem trước).

### Feature 4 — Mở rộng bank đề lớp 11
- **R = 2000:** Cohort lớp 11 nhỏ hơn, chưa có urgency thi TN. Estimate conservative.
- **I = 1.0 (medium):** Mở rộng TAM nhưng không tạo moat mới.
- **C = 50%:** Chưa validate demand lớp 11. Chỉ là assumption "pre-launch cohort V2".
- **E = 4:** Cần biên soạn bank đề mới + adapt prompt cho chương trình lớp 11. Multiply 1.5x.

### Feature 5 — Voice input
- **R = 1500:** Chỉ subset HS thích nói hơn gõ. Discount mạnh.
- **I = 0.5 (low):** Nice-to-have, không giải quyết pain chính.
- **C = 50%:** Chưa test. Vietnamese ASR accuracy cho thuật ngữ toán chưa rõ.
- **E = 5:** ASR integration + xử lý ký hiệu toán từ voice + latency budget. Rất phức tạp.

---

## 2x2 Value-Effort Matrix

```
              Effort
            Low (≤2)       High (≥3)
          ┌─────────────┬──────────────┐
   High   │ QUICK WINS  │ STRATEGIC    │
   Value  │             │ BETS         │
   (Score │ • Tool-     │ • Dual-      │
    >1000)│   verified  │   Scaffolding│
          │   (6400)    │   (6400)     │
          ├─────────────┼──────────────┤
   Low    │ FILL-INS    │ NON-STARTERS │
   Value  │             │              │
   (Score │ • Báo cáo   │ • Lớp 11    │
    <1000)│   PH (1500) │   (250)      │
          │             │ • Voice (75) │
          └─────────────┴──────────────┘
```

---

## Kết luận ưu tiên

| Quadrant | Feature | Chiến lược |
|----------|---------|------------|
| **Quick Win** | Tool-verified computation | Làm ngay sprint 1 — effort thấp, value cao, build trust |
| **Strategic Bet** | Dual-Scaffolding Socratic Loop | Core moat dài hạn — đầu tư 3 person-month, differentiator chính |
| **Fill-in** | Báo cáo phụ huynh | Làm sau khi core ổn — cần interview PH trước (C chỉ 50%) |
| **Non-starter** | Voice input | VỨT — effort 5 tháng, C = 50%, I thấp. Không đáng làm giai đoạn seed |
| **Non-starter** | Mở rộng lớp 11 | Chưa validate demand. Tập trung lớp 12 TN 2026 trước |

---

## Self-check

- [x] Có ít nhất 1 feature Confidence < 80% (Feature 3, 4, 5 đều 50%)
- [x] Có Non-starter rõ ràng (Voice input, Lớp 11)
- [x] Effort discounted realistic (đã multiply 1.5x)
- [x] Có Quick Win + Strategic Bet rõ
- [x] Không có feature nào Confidence 100% (chưa có pilot data đầy đủ)
