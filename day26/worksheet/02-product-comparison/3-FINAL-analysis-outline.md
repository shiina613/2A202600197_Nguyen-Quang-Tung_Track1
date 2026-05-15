---
artifact: 3 — Outline 5 mục cho slide deck Analysis Report
bai-tap: 2 — Phân tích 2 sản phẩm AI (nhóm 2 học viên)
phase: Phase 3 — Dựng slide deck (15 phút)
time: 10 phút outline + 5 phút build slide
input: 1-research-notes.md + 2-comparison-table.md + screenshots/ + prompts/08-analysis-report.md
nop-cuoi: Có gián tiếp — outline này dùng làm cốt cho `analysis-report.pdf` (deliverable bắt buộc)
---

# 3 — Outline 5 mục cho slide deck (S1 → S5 với S5 mở rộng 8 sub-mục)

Mục tiêu: dựng outline đầy đủ cho slide deck Analysis Report ngay trong file markdown — viết hết nội dung 5 mục ở đây trước, sau đó copy sang slide (pptx / Keynote / Google Slides). Không build slide trước khi outline xong.

Lý do làm bước này: dựng thẳng slide từ log dễ bị thiếu mục hoặc bị "đẹp ngoài rỗng trong". Outline markdown ép nhóm trả lời từng câu hỏi trước khi nghĩ về thiết kế slide. Khi giảng viên / nhóm khác hỏi "vì sao bạn xếp Sản phẩm A là Promising?" — câu trả lời đã có sẵn trong outline.

Quy tắc: mỗi nhận định trong outline phải nối được về bằng chứng cụ thể (ảnh / log / số liệu công khai). Nếu một sub-mục để trống → quay lại `1-research-notes.md` đào thêm trước khi sang slide.

## Quy trình 15 phút

```text
2 phút  — Đọc lại 2-comparison-table.md để có context
8 phút  — Điền outline 5 mục (S1 → S5)
4 phút  — Riêng cho S5: mở rộng 8 sub-mục (S5.1 → S5.8)
1 phút  — Đối chiếu bảng kiểm trước khi build slide
```

> Sau 15 phút outline + đối chiếu, mới mở pptx / Google Slides / Keynote và copy nội dung sang. Slide deck export thành `analysis-report.pdf` ở cùng folder này.

---

## Thông tin chung của báo cáo

- **Mã 2 thành viên + tên**: [A20-XXXXX (Tên) + A20-YYYYY (Tên)]
- **Ngành chọn**: [A — Tìm kiếm / B — Lập trình / C — Viết lách / D — Nghiên cứu]
- **Nhiệm vụ chung đã test**: [...]
- **Sản phẩm A** (tên + URL): [...]
- **Sản phẩm B** (tên + URL): [...]
- **Câu prompt chính xác đã dùng**: [...]

---

## S1 — Product Moment (slide 1-2)

Mục đích: định danh rõ 2 sản phẩm, nhiệm vụ chung, điểm gặp đầu (entry point).

### S1.1 — Bảng so sánh nhanh

| Yếu tố | Sản phẩm A | Sản phẩm B |
|---|---|---|
| Tên + URL | [...] | [...] |
| Entry point (trang đầu nhìn thấy gì) | [...] | [...] |
| Ý định người dùng (vào để làm gì) | [...] | [...] |
| Surface chính (chat / form / canvas / IDE / khác) | [...] | [...] |
| Có cần đăng nhập / paywall ngay không | [...] | [...] |

### S1.2 — Bằng chứng (ảnh tham chiếu)

- `screenshots/product-A-1-entry.png` — mô tả 1 câu: [...]
- `screenshots/product-B-1-entry.png` — mô tả 1 câu: [...]

### S1.3 — Nhận định so sánh entry point (2-3 câu)

[Sản phẩm nào tạo first impression tốt hơn? Vì sao? Liên kết với ý định người dùng.]

---

## S2 — Workflow Evidence (slide 3-4)

Mục đích: hiển thị luồng người dùng + 3 friction areas (Lens 3).

### S2.1 — Luồng người dùng (trước / trong / sau khi dùng AI)

```text
TRƯỚC khi gặp AI:
- [Người dùng đang làm gì, trên công cụ nào]

TRONG khi dùng Sản phẩm A:
1. [Bước 1: …]
2. [Bước 2: …]
3. [Bước 3: …]

TRONG khi dùng Sản phẩm B:
1. [Bước 1: …]
2. [Bước 2: …]
3. [Bước 3: …]

SAU khi dùng AI:
- [Người dùng làm gì với output: copy, paste, gửi cho ai, lưu ở đâu]
```

### S2.2 — 3 Friction Areas (Lens 3)

| Friction | Sản phẩm A | Sản phẩm B |
|---|---|---|
| **Physical load** (số click, tab, copy-paste) | [...] | [...] |
| **Cognitive burden** (cần học prompt eng. / nhớ ngữ cảnh giữa lượt chat) | [...] | [...] |
| **User workarounds** (nhóm phải tự làm gì để bù yếu điểm) | [...] | [...] |

### S2.3 — Bằng chứng

- `screenshots/product-A-2-input.png` + `screenshots/product-A-3-output.png`
- `screenshots/product-B-2-input.png` + `screenshots/product-B-3-output.png`

### S2.4 — Nhận định: sản phẩm nào giảm friction tốt hơn? Tại sao? (3-4 câu)

[...]

---

## S3 — Output & Trust (slide 5-6)

Mục đích: đánh giá chất lượng output + 6 tín hiệu đáng tin.

### S3.1 — Chất lượng output

Cho mỗi sản phẩm, trả lời 3 câu:

- **Sản phẩm A**:
  - Output có **trả lời đúng câu hỏi** chính không? [...]
  - Output có **bịa thông tin** không (hallucination)? Nếu có, chỗ nào? [...]
  - Output có **đầy đủ** hay nửa vời? [...]
- **Sản phẩm B**:
  - Output có **trả lời đúng câu hỏi** chính không? [...]
  - Output có **bịa thông tin** không? [...]
  - Output có **đầy đủ** hay nửa vời? [...]

### S3.2 — 6 Tín hiệu đáng tin (đối chiếu)

| Tín hiệu | Sản phẩm A | Sản phẩm B |
|---|---|---|
| 1. Dẫn nguồn (citation mở được, đúng nội dung) | [có / không / có nhưng nguồn ảo] | [...] |
| 2. Disclaimer khi không chắc | [...] | [...] |
| 3. Fallback / dừng lại khi out-of-scope | [...] | [...] |
| 4. Consistency (chạy 2 lần cùng prompt) | [...] | [...] |
| 5. User control (sửa, dừng, regenerate, undo) | [...] | [...] |
| 6. Explanation (giải thích "vì sao AI nói thế") | [...] | [...] |

### S3.3 — Nhận định: sản phẩm nào tạo trust mạnh hơn? Vì sao? (3-4 câu)

[...]

---

## S4 — Business Signal (slide 7)

Mục đích: định vị 2 sản phẩm trên Cost-Capability-Speed + pricing pattern.

### S4.1 — Định vị tam giác (cho mỗi sản phẩm)

- **Sản phẩm A**: [rẻ-nhanh / mạnh-đắt / cân bằng] — model dưới mui xe: [...] — lý do định vị 1 câu: [...]
- **Sản phẩm B**: [rẻ-nhanh / mạnh-đắt / cân bằng] — model dưới mui xe: [...] — lý do định vị 1 câu: [...]

### S4.2 — Pricing pattern

| Yếu tố | Sản phẩm A | Sản phẩm B |
|---|---|---|
| Mô hình giá | [Free / Freemium / Seat-based / Usage / Outcome / Hybrid] | [...] |
| Giá entry (free tier giới hạn gì) | [...] | [...] |
| Giá trả phí (gói chính + giá) | [...] | [...] |
| Paywall xuất hiện ở đâu (khi hết quota / tính năng nâng cao / etc.) | [...] | [...] |

### S4.3 — Nhận định: chiến lược kinh doanh của 2 sản phẩm khác nhau thế nào? (2-3 câu)

[...]

---

## S5 — Product Judgment (slide 8-12 — phần đậm nhất)

Mục đích: ra verdict + vận dụng 4 Lens + Spark/Loop/System + Niche/Feature Map + liên hệ Lab 1.

S5 mở rộng thành 8 sub-mục — bắt buộc xong **S5.1, S5.6, S5.7, S5.8**. Nhóm khá phải hoàn thành cả 8 sub-mục. Nhóm Đạt có thể ghi "không có nguồn công khai" cho 1-2 số liệu ở S5.2-S5.5 nhưng phải ghi rõ.

### S5.1 — Verdict (BẮT BUỘC)

Cho mỗi sản phẩm, chọn 1 trong 4: **Strong** / **Promising** / **Weak** / **At Risk**, kèm lý do 1 câu.

- **Sản phẩm A**: [Verdict] — Lý do: [...]
- **Sản phẩm B**: [Verdict] — Lý do: [...]

### S5.2 — User base + tăng trưởng

Số liệu công khai (MAU, DAU, paid users, growth rate) cho cả 2 sản phẩm + nguồn (URL + ngày).

- **Sản phẩm A**: [MAU/DAU/users — kèm nguồn]
- **Sản phẩm B**: [MAU/DAU/users — kèm nguồn]

> Nếu không tìm được số liệu công khai, ghi: "Không có nguồn công khai sau khi tra ở [tên 2-3 nguồn]". Không bịa.

### S5.3 — Doanh thu / pricing power

ARR / MRR công khai + pricing strategy (freemium / premium / enterprise).

- **Sản phẩm A**: [ARR/MRR — nguồn] + chiến lược pricing: [...]
- **Sản phẩm B**: [ARR/MRR — nguồn] + chiến lược pricing: [...]

### S5.4 — Moat phân tích (5 loại)

Đánh giá 5 loại moat (data / network / switching cost / brand / distribution) cho từng sản phẩm. Mỗi moat đánh dấu: **mạnh** / **trung bình** / **yếu / dễ bị copy**.

| Moat | Sản phẩm A | Sản phẩm B |
|---|---|---|
| Data (proprietary data flywheel) | [...] | [...] |
| Network effects | [...] | [...] |
| Switching cost (chi phí đổi sang sản phẩm khác) | [...] | [...] |
| Brand | [...] | [...] |
| Distribution (kênh tiếp cận user) | [...] | [...] |

### S5.5 — Data flywheel + feedback loop

Hành động người dùng nào feed lại model? Loop có compounding (mỗi lần dùng → cải thiện model → giá trị cao hơn → người dùng dùng tiếp) không?

- **Sản phẩm A**: [Mô tả loop 1-2 câu — có compounding không?]
- **Sản phẩm B**: [Mô tả loop 1-2 câu — có compounding không?]

### S5.6 — Niche Down + AI Feature Map (BẮT BUỘC)

- **Sản phẩm A**:
  - Niche cụ thể (đối tượng người dùng + use case): [...]
  - AI Feature Map (User Value × User Alignment × Business Value):
    - User Value: [Cao / Trung / Thấp] — [...]
    - User Alignment: [Cao / Trung / Thấp] — [...]
    - Business Value: [Cao / Trung / Thấp] — [...]
- **Sản phẩm B**:
  - Niche cụ thể: [...]
  - AI Feature Map:
    - User Value: [Cao / Trung / Thấp] — [...]
    - User Alignment: [Cao / Trung / Thấp] — [...]
    - Business Value: [Cao / Trung / Thấp] — [...]

### S5.7 — Spark → Loop → System (BẮT BUỘC)

Mỗi sản phẩm đang ở giai đoạn nào trong 3 giai đoạn?

- **Sản phẩm A**: [Spark / Loop / System] — Lý do: [...] — Dự báo 12 tháng tới: [...]
- **Sản phẩm B**: [Spark / Loop / System] — Lý do: [...] — Dự báo 12 tháng tới: [...]

### S5.8 — Liên hệ Lab 1 (BẮT BUỘC)

Đối chiếu 2 sản phẩm với case bigtech-disruption mỗi thành viên đã làm ở Lab 1:

- Sản phẩm A có rủi ro disruption tương tự case nào của nhóm? [...]
- Sản phẩm B có rủi ro disruption tương tự case nào của nhóm? [...]
- Bài học rút từ Lab 1 áp dụng được cho 2 sản phẩm này thế nào? (2-3 câu): [...]

---

## Bảng kiểm trước khi build slide

- [ ] S1 → S4 đã điền đầy đủ.
- [ ] S5.1 + S5.6 + S5.7 + S5.8 đã hoàn thành (4 sub-mục bắt buộc).
- [ ] S5.2 → S5.5 đã hoàn thành (hoặc đã ghi rõ "không có nguồn công khai" cho ô trống).
- [ ] Mỗi nhận định nối được về ảnh / log / số liệu cụ thể.
- [ ] Verdict ở S5.1 nhất quán với phân tích moat ở S5.4 và giai đoạn ở S5.7.
- [ ] 2 thành viên cùng đồng ý với toàn bộ outline.

---

## Sau khi xong outline

1. Mở pptx / Keynote / Google Slides / Figma.
2. Tạo 12-15 slide bám theo cấu trúc S1 → S5 ở trên (mỗi mục 1-3 slide).
3. **Mỗi slide có ít nhất 1 ảnh tham chiếu** (từ `screenshots/`).
4. Export PDF → lưu thành `analysis-report.pdf` trong cùng folder này.
5. Nếu dùng Google Slides công khai, lưu link vào `analysis-report-link.md` (tuỳ chọn).
6. 2 thành viên cùng copy `analysis-report.pdf` + `group-members.md` về repo cá nhân của mình.

> Tham khảo `prompts/08-analysis-report.md` nếu cần AI hỗ trợ build slide từ outline này.
