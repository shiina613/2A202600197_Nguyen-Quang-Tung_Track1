# Prompt tham khảo 8 — Dựng slide deck Lab 2 (5 mục)

**Dùng khi**: nhóm đã hoàn thành thử nghiệm + so sánh (Lab 2 Phase 2), cần dựng slide deck 5 mục theo template chính thức của Day 26.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` (xuất từ pptx / Google Slides / Keynote) ở `worksheet/02-product-comparison/`.
**Thời gian**: 15-20 phút

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

Slide deck Lab 2 không phải là bài viết tự do — là **5 mục có template cứng**. Nhóm cần biết template trước.

1. **5 mục** (nhớ lại):
   - S1 — Product Moment (sản phẩm + nhiệm vụ + entry point)
   - S2 — Workflow Evidence (trước/trong/sau + friction)
   - S3 — Output & Trust (chất lượng + dẫn nguồn + kiểm soát)
   - S4 — Business Signal (pricing + giới hạn + cost-capability-speed)
   - S5 — Product Judgment (4 Lens + Spark/Loop/System + verdict)

2. **6 ảnh tối thiểu** cho cả 2 sản phẩm — đã có chưa?

3. **Mỗi mục có ít nhất 1 ảnh tham chiếu** — đã chuẩn bị mapping ảnh → mục chưa?

4. **Mục S5 cần vận dụng cả 4 Lens + Spark/Loop/System** — nếu chưa làm các prompts 03-06, làm trước rồi quay lại đây.

5. **Mã 2 thành viên nhóm + tên + ngành** — đã ghi rõ trong `group-members.md` chưa?

> **Cảnh báo**: Đây là prompt SYNTHESIZE — không phải prompt research. Nhóm phải có đủ data trước. Nếu thiếu, AI sẽ "fill in" bằng cách bịa.

---

## Prompt chính (paste sau toàn bộ bối cảnh + log + analyses)

```text
Bạn là technical writer chuyên về case study analysis. Dựa trên TOÀN BỘ NỘI DUNG ở trên
(bối cảnh nhóm + log thử nghiệm + ảnh chụp + các phân tích từ prompts 03-06),
giúp nhóm tôi dựng nội dung cho slide deck 5 mục theo template chính thức của Day 26.

QUY TẮC CỐT LÕI: mỗi nhận định phải có ÍT NHẤT 1 bằng chứng cụ thể (ảnh chụp hoặc observation).

THÔNG TIN NHÓM:
- Mã 2 thành viên: A20-XXXXX + A20-YYYYY
- Ngành test: [...]
- Sản phẩm A: [...]
- Sản phẩm B: [...]
- Nhiệm vụ chung: [...]

YÊU CẦU CHO 5 MỤC SLIDE DECK:

S1 — PRODUCT MOMENT (Khoảnh khắc sản phẩm)

Mục đích: định danh rõ 2 sản phẩm, nhiệm vụ, điểm gặp đầu của user.

Cấu trúc slide:

1.1. Bảng so sánh:
| Yếu tố | Sản phẩm A | Sản phẩm B |
|---|---|---|
| Tên + URL | | |
| Entry point | | |
| Ý định user | | |
| Surface chính (chat/form/canvas/IDE) | | |

1.2. Nhiệm vụ chung:
- Mô tả nhiệm vụ
- Câu prompt chính xác đã dùng

1.3. Bằng chứng:
- Ảnh `product-A-1-entry.png` + mô tả 1 câu
- Ảnh `product-B-1-entry.png` + mô tả 1 câu

1.4. Nhận định so sánh entry point (2-3 câu).

S2 — WORKFLOW EVIDENCE (Bằng chứng quy trình)

Mục đích: luồng người dùng + friction analysis.

Cấu trúc slide:

2.1. Luồng người dùng (trước / trong / sau dùng AI):
TRƯỚC: [...]
TRONG (A): [step 1] → [step 2] → [step 3]
TRONG (B): [step 1] → [step 2] → [step 3]
SAU: [...]

2.2. 3 Friction Areas (vận dụng Lens 3):
- Physical load: A vs B (số click, tab, copy-paste)
- Cognitive burden: A vs B (cần học prompt engineering?)
- User workarounds: A vs B (nhóm phải làm gì để khắc phục yếu điểm?)

2.3. Bằng chứng:
- product-A-2-input.png, product-A-3-output.png
- product-B-2-input.png, product-B-3-output.png

2.4. Nhận định: sản phẩm nào giảm friction tốt hơn? (3-4 câu)

S3 — OUTPUT & TRUST (Kết quả + độ tin cậy)

Mục đích: đánh giá chất lượng output và 6 tín hiệu đáng tin.

Cấu trúc slide:

3.1. Bảng chất lượng output:
| Tiêu chí | A | B |
|---|---|---|
| Đúng nội dung? | | |
| Có bịa không? | | |
| Tiếng Việt tự nhiên? | | |
| Đầy đủ/thiếu phần? | | |
| Tốc độ trả lời (s) | | |

3.2. Bảng 6 tín hiệu đáng tin:
| Tín hiệu | A | B |
|---|---|---|
| Citation | | |
| Control (sửa/làm lại) | | |
| Confidence indicator | | |
| Failure handling | | |
| Feedback (báo lỗi) | | |
| Handoff to human | | |

3.3. Bằng chứng:
- product-A-4-source.png (hoặc ghi "không có dẫn nguồn")
- product-B-4-source.png

3.4. Nhận định: sản phẩm nào đáng tin hơn cho nhiệm vụ này? (3-5 câu).

S4 — BUSINESS / USAGE SIGNAL

Mục đích: pricing + giới hạn + Pay-for-output vs Pay-for-seat.

Cấu trúc slide:

4.1. Mô hình giá:
| Yếu tố | A | B |
|---|---|---|
| Gói miễn phí | | |
| Giá thấp nhất ($/tháng) | | |
| Pay-for-output? | | |
| Quota / limit | | |
| Reaction khi hết quota | | |

4.2. Cost-Capability-Speed:
- A: COST $___ / CAPABILITY [model] / SPEED [s]
- B: COST $___ / CAPABILITY [model] / SPEED [s]
- Trade-off đang ưu tiên gì?

4.3. Bằng chứng:
- product-A-5-pricing.png
- product-B-5-pricing.png
- (nếu có) product-?-limit.png

4.4. Nhận định: mô hình kinh doanh nào phù hợp với nhiệm vụ này hơn? (2-4 câu)

S5 — PRODUCT JUDGMENT (Đánh giá sản phẩm cuối, 8 mục con)

Mục đích: vận dụng 4 Lens + Spark/Loop/System + verdict + phân tích định lượng (user base, doanh thu, moat, data flywheel).

Cấu trúc slide:

5.1. Verdict tóm tắt:
- Sản phẩm A: STRONG / PROMISING / WEAK / AT RISK — lý do 1 câu.
- Sản phẩm B: STRONG / PROMISING / WEAK / AT RISK — lý do 1 câu.

5.2. User base + tốc độ tăng trưởng:
| Chỉ số | A | B | Nguồn |
|---|---|---|---|
| MAU | | | |
| DAU | | | |
| Paid users | | | |
| Growth rate (YoY) | | | |

Nhận định: tệp user của 2 sản phẩm khác nhau ra sao, tăng trưởng còn duy trì không?

5.3. Doanh thu / pricing power:
| Chỉ số | A | B | Nguồn |
|---|---|---|---|
| ARR | | | |
| MRR | | | |
| Mức giá thấp nhất ($/tháng) | | | |
| Pricing tier | | | |

Nhận định: pricing power của sản phẩm nào mạnh hơn? Có dấu hiệu race-to-bottom không?

5.4. Moat phân tích (5 loại):
| Loại moat | A | B |
|---|---|---|
| Data moat | | |
| Network effect | | |
| Switching cost | | |
| Brand | | |
| Distribution | | |

- Moat chủ đạo của A: [...] — bị tấn công bởi [...]?
- Moat chủ đạo của B: [...] — bị tấn công bởi [...]?

5.5. Data flywheel + feedback loop:
- Hành động người dùng nào feed lại model (A, B)?
- Loop có compounding không (amplification factor ước tính)?
- Big tech AI có vô hiệu hoá flywheel này không?

5.6. Niche Down + AI Feature Map:
- Niche của A: STRONG/MEDIUM/WEAK
- Niche của B: STRONG/MEDIUM/WEAK
- AI Feature Map 3 chiều:
| Chiều | A | B |
|---|---|---|
| User Value | | |
| User Alignment | | |
| Business Value | | |

UX Innovation: 4 chat problems, 3 friction areas.

5.7. Spark → Loop → System:
- A đang ở giai đoạn: SPARK / LOOP / SYSTEM.
- B đang ở giai đoạn: SPARK / LOOP / SYSTEM.
- Dự báo 12 tháng tới: sản phẩm nào dịch chuyển lên giai đoạn cao hơn?

5.8. Liên hệ với Lab 1 case (case bạn đã chọn ở Lab 1):
- Sản phẩm A có rủi ro disruption-style tương tự Lab 1 case không?
- Sản phẩm B có rủi ro tương tự không?
- Bài học rút từ Lab 1 áp dụng được gì cho 2 sản phẩm này?

YÊU CẦU CUỐI:
- Tổng số bằng chứng tham chiếu trong slide deck: ≥ 6 ảnh.
- Mỗi mục có ≥ 1 nhận định cụ thể.
- Mục S5 phải vận dụng cả 4 Lens.

PHẢN BIỆN:
- Có mục nào yếu hơn các mục khác? Cải thiện thế nào?
- Có bias nào trong verdict?
- Có thông tin nào nhóm chưa có và cần thêm để đánh giá tốt hơn?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi S5 quá ngắn

```text
Mục S5 của bạn quá ngắn — không vận dụng đủ 4 Lens.

Đẩy SÂU hơn:
- Lens 1: chọn ít nhất 2 shifts cụ thể, giải thích sản phẩm A/B đáp ứng/không đáp ứng shift đó thế nào.
- Lens 2: trả lời 5 câu hỏi niche cho từng sản phẩm.
- Lens 3: bảng 3 chiều CỤ THỂ, không chỉ "HIGH/MEDIUM/LOW" mà có lý do.
- Lens 4: liệt kê CỤ THỂ rented land của từng sản phẩm (vd: "Cursor rents VS Code + OpenAI APIs").

Viết lại S5 dài hơn, có cấu trúc rõ ràng.
```

### Khi thiếu bằng chứng tham chiếu

```text
Trong các mục bạn vừa viết, đếm số lần tham chiếu "product-A-N.png" hoặc "product-B-N.png":
- S1: __ lần
- S2: __ lần
- S3: __ lần
- S4: __ lần
- S5: __ lần

Yêu cầu: mỗi mục ≥ 1 tham chiếu ảnh.
Nếu thiếu, BỔ SUNG tham chiếu cụ thể vào các nhận định.
```

### Khi muốn nối với Lab 1 case

```text
Mục S5 hiện chưa có phần "liên hệ với Lab 1 case" (case bạn đã chọn ở Lab 1).

Bổ sung phần này:
- Sản phẩm A có rủi ro disruption-style tương tự không?
  - Có (1) Fit Collapse rủi ro nếu big tech AI cải thiện thêm?
  - Có (2) Big Squeeze từ 3 phía?
  - Có (3) 7 Customer Expectation Shifts đang dịch chuyển?
- Sản phẩm B tương tự.
- Sản phẩm nào học được bài học từ Lab 1 case? (Vd: ra mắt sản phẩm AI sớm, có niche rõ, không phụ thuộc rented land?)

Đây là liên kết Lab 1 → Lab 2.
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **5 mục check**: Đủ 5 mục? Mỗi mục có đủ cấu trúc theo template?
2. **Evidence check**: Mỗi mục có ≥ 1 ảnh tham chiếu?
3. **4 Lens check**: Mục S5 vận dụng cả 4 Lens + Spark/Loop/System?
4. **Verdict check**: Verdict có lý do, có bằng chứng?
5. **Liên hệ Lab 1 check**: Có nối với Lab 1 case không?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "S1: 2 sản phẩm là Perplexity và ChatGPT. S2: cả 2 đều có chat. S3: Perplexity có nguồn. S4: cả 2 $20/tháng. S5: Perplexity thắng."

Vấn đề: không có cấu trúc, không có bằng chứng, không vận dụng frameworks.

### Tốt

> Slide deck có 5 mục đầy đủ. Mỗi mục có bảng so sánh, ≥ 1 ảnh tham chiếu, và nhận định 2-5 câu. Đặc biệt mục S5 vận dụng đủ 4 Lens + Spark→Loop→System, có liên hệ với Chegg case.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Viết "S1: tóm tắt sản phẩm" mơ hồ | Theo template 5 phần con per mục |
| Bỏ tham chiếu ảnh | Mỗi mục ≥ 1 ảnh tham chiếu cụ thể |
| Quên S5 vận dụng 4 Lens | Bắt buộc Lens 1 + 2 + 3 + 4 trong S5 |
| Verdict đơn giản "A thắng" | Verdict có 3 chuẩn (đáng tin / dùng / build) |
| Không liên hệ Lab 1 | S5.8 phải nối với Chegg case |
| Để AI tự tạo bằng chứng | CHỈ dùng ảnh thật trong `screenshots/` hoặc embed slide deck |

---

## Format save vào slide deck

Mỗi mục là 1 slide riêng (có thể chia 2 slide nếu nội dung dài). Khi export PDF:

```text
worksheet/02-product-comparison/analysis-report.pdf
```

Nếu nhóm dùng Google Slides, ghi link công khai vào:

```text
worksheet/02-product-comparison/analysis-report-link.md
```

Mỗi học viên trong nhóm copy `analysis-report.pdf` về repo cá nhân của mình.

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi dựng slide deck, giúp tôi đặt 3 câu hỏi STRESS-TEST trước khi nộp:

1. **Người chấm không quen sản phẩm**: nếu người chấm chưa từng dùng A hoặc B, slide deck
   có đủ ngữ cảnh để hiểu không? Có thuật ngữ nào chưa giải thích?

2. **Người chấm skeptical**: nếu người chấm hỏi "bằng chứng cụ thể đâu?", nhóm có chỉ được không?

3. **Liên kết với D27**: D27 sẽ tính kinh tế cho sản phẩm. Nếu nhóm phải tính ROI cho sản phẩm A,
   data trong S4 (Business Signal) có đủ không? Hay phải tìm thêm?

Trả lời 3 câu này để rà chất lượng slide deck trước khi nộp.
```
