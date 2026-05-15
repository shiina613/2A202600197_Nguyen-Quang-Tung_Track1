# Day 25 — Track 04: Trợ lý ghi chú & tổng hợp chi tiêu (Responsible AI)

Day 25 là bài tập nhóm 2-3 người cùng chủ đề. Bối cảnh nhóm: **Track 04 — AI Expense Assistant** (tổng hợp Day 24 từ `dat/` + `duong/`). Kết thúc bằng **bộ kiểm thử cuối** (15 tình huống `F-01..F-15`) + **3 lớp giải pháp** cho rủi ro quan trọng nhất.

---

## ⚡ Quick Start cho người chấm (đọc trong 5 phút)

Nếu chỉ có 5 phút, đọc theo thứ tự sau:

| Bước | File | Phút | Nội dung |
|---|---|---:|---|
| 1 | [`worksheet/01-test-set-review/3-FINAL-test-set-eval-plan.md`](./worksheet/01-test-set-review/3-FINAL-test-set-eval-plan.md) | 2' | 15 case `F-01..F-15` + Phần 3: rủi ro chính **F-03** "3 củ rưỡi" (dispute 10×) |
| 2 | [`worksheet/02-solution-design/1-map-and-format.md`](./worksheet/02-solution-design/1-map-and-format.md) | 2' | 3 RC × 3 Lớp khớp 1-1 + Phần D **Coverage 9 ca không thuộc họ F-03** |
| 3 | [`worksheet/02-solution-design/cross-team-feedback.md`](./worksheet/02-solution-design/cross-team-feedback.md) | 1' | 12 comment phản biện chéo (mô phỏng Track 02 Healthcare) + 11 fix thật |

Nếu có 30 phút, đọc tiếp `artifact/`:

- [`artifact/2-prompt/demo.md`](./worksheet/02-solution-design/artifact/2-prompt/demo.md) — System prompt **R1–R12** dán-được + JSON schema + 11 ví dụ trước/sau
- [`artifact/3-architecture/demo.md`](./worksheet/02-solution-design/artifact/3-architecture/demo.md) — Mermaid pipeline 6 bước + dictionary lóng 16 dòng (CFPB / Air Canada / VHLSS) + dashboard
- [`artifact/1-uiux/demo.md`](./worksheet/02-solution-design/artifact/1-uiux/demo.md) — Mermaid sequence + 7 trạng thái thẻ ASCII (A→G; F = khẩn cấp F-01)

**Tóm tắt quyết định cốt lõi:**

> Rủi ro chính = **F-03** "Mua macbook 3 củ rưỡi" (dispute 10× — 3.5tr vs 35tr). Neo pháp lý: **Moffatt v. Air Canada 2024** ($812 damages, "responsible for all information on its website"). 1 thiết kế confirm UI cho ambiguous unit fix luôn 4 case khác (F-04 pressure, F-05 outlier, F-07 lít, F-11 cập nhật miệng). Cover 10 ca còn lại bằng R8–R12 + UI trạng thái E/F/G. Đã có 2 lượt phản biện chéo (tự + mô phỏng Track 02).

---

## Thành viên nhóm

| # | Mã học viên | Họ tên đầy đủ | Đóng góp chính |
|---|-------------|---------------|----------------|
| 1 | 2A202600287 | Tạ Thị Thùy Dương | Day 24 risk-map + diverge `T-01..T-15` lóng VN; **Lớp 1 UI/UX** (5 wireframe trạng thái A→F + Mermaid sequence) |
| 2 | 2A202600XXX | [Đạt — điền MHV] | Day 24 risk-map (Air Canada / Robodebt / Zillow); **Lớp 3 Kiến trúc dữ liệu** (Mermaid pipeline + dictionary 16 dòng + dashboard 4 widget) |
| 3 | 2A202600197 | Nguyễn Quang Tùng | Worksheet chính + tổng hợp converge 41 ca; **Lớp 2 Prompt** (system prompt R1–R12 + JSON schema MoneyEntityV1 + 11 ví dụ) |

> ⚠️ Trước khi nộp: điền mã học viên Đạt vào dòng 2 (thay `2A202600XXX`).

## Kết quả cuối (file người chấm xem trước)

- 🎯 [**Bộ kiểm thử cuối — Bài 1**](./worksheet/01-test-set-review/3-FINAL-test-set-eval-plan.md) — 15 tình huống `F-01..F-15` (7/8 kiểu lỗi; Nặng 9 / Vừa 5 / Nhẹ 1) + kế hoạch chấm 3-lần-lặp + chọn **F-03** làm rủi ro chính sang Bài 2.
- 🎯 [**Thiết kế 3 lớp giải pháp — Bài 2**](./worksheet/02-solution-design/1-map-and-format.md) — chọn họ leverage F-03/04/05/07/11, 3 RC khớp 1-1 với 3 lớp, **Phần D coverage 9 ca không thuộc họ**, tự phản biện 4 góc + backlog v1.1/v2.0.
  - [Lớp 1 — UI/UX](./worksheet/02-solution-design/artifact/1-uiux/) (`card.md` + `demo.md`) — Dương
  - [Lớp 2 — Chỉ dẫn AI](./worksheet/02-solution-design/artifact/2-prompt/) (`card.md` + `demo.md`) — Tùng
  - [Lớp 3 — Kiến trúc dữ liệu](./worksheet/02-solution-design/artifact/3-architecture/) (`card.md` + `demo.md`) — Đạt
- 🎯 [**Phản biện chéo lượt 2**](./worksheet/02-solution-design/cross-team-feedback.md) — mô phỏng Track 02 Healthcare critique cứng theo 4 góc (12 comment H-01..H-12 + 11 fix đã áp); template lượt 3 dành cho nhóm thật.

## File trung gian (nộp kèm để thấy quá trình)

- [`worksheet/00-context.md`](./worksheet/00-context.md) — bối cảnh sản phẩm Track 04 (đã điền)
- [`worksheet/01-test-set-review/1-diverge.md`](./worksheet/01-test-set-review/1-diverge.md) — Mở rộng (sự cố thật + AI gợi ý + chốt ~15 / thành viên)
- [`worksheet/01-test-set-review/2-converge.md`](./worksheet/01-test-set-review/2-converge.md) — Hội tụ (gộp **41** ca 3 nhánh: A + dat + duong → lọc trùng → chấm rủi ro `U-01..U-19`)

## Nguồn pháp lý / nghiên cứu đã neo trong bài

| Nguồn | Dùng ở đâu |
|---|---|
| **Moffatt v. Air Canada (2024 BCCRT)** — $812 damages, "responsible for all information on its website" | F-01 + F-03 + F-06 (`3-FINAL` Phần 1, `3-architecture/card.md` mục 1) |
| **CFPB Issue Spotlight 06/2023** — chatbot finance: inaccurate info + doom loops | F-11 + `3-architecture/card.md` mục 1 |
| **WaPo Tax Chatbot 03/2024** (TurboTax + H&R Block ~50% sai) | `1-map-and-format.md` "vì sao cần kiến trúc lai" |
| **VHLSS 2022** (TCTK, 46.995 hộ) | Sanity range v1.1 (`3-architecture/demo.md` mục 3) |
| **Nghị định 13/2023/NĐ-CP** | F-09 (`3-FINAL` Phần 1) |
| **Luật Chứng khoán VN** (cấm tư vấn không phép) | F-08 + R8 trong prompt v1 |
| **Robodebt Royal Commission** (Úc) | F-10 (`2-converge` Lens 3) |
| **Naver / DoNotPay FTC / Alexa silent action** | F-04, F-07, F-08 (`3-FINAL` Phần 1 cột Nguồn) |

---

## Hướng dẫn gốc của bài tập

(giữ nguyên bên dưới, đọc khi cần tham khảo cấu trúc nộp / quy trình)

---

## 📥 Nộp bài thế nào? (đọc trước khi vào lab)

### Tên kho GitHub

Cú pháp: **`Day25-MãNhóm`**

Ví dụ: `Day25-G001`, `Day25-G045`, `Day25-A1`.

### Cần nộp những file gì?

Nhóm tạo **1 kho GitHub công khai**, đưa toàn bộ thư mục `worksheet/` lên GitHub theo đúng cấu trúc dưới, rồi nộp link qua LMS.

```text
Day25-MãNhóm/                                       ← kho GitHub công khai
│
├── README.md                                       ← Thành viên nhóm (xem mẫu dưới)
│
└── worksheet/
    ├── 00-context.md                               ← Bối cảnh sản phẩm (đã điền)
    │
    ├── 01-test-set-review/
    │   ├── 1-diverge.md                            ← Trung gian: giai đoạn Mở rộng
    │   ├── 2-converge.md                           ← Trung gian: giai đoạn Hội tụ
    │   └── 3-FINAL-test-set-eval-plan.md           🎯 KẾT QUẢ CUỐI Bài 1
    │
    └── 02-solution-design/
        ├── 1-map-and-format.md                     🎯 KẾT QUẢ CUỐI Bài 2
        └── artifact/
            ├── 1-uiux/
            │   ├── card.md
            │   └── demo.{md|png|html}
            ├── 2-prompt/
            │   ├── card.md
            │   └── demo.md
            └── 3-architecture/
                ├── card.md
                └── demo.md
```

🎯 = file người chấm xem trước. Các file còn lại là **trung gian** — phải nộp kèm để người chấm thấy nhóm đã đi qua đủ quá trình.

### README đầu kho bài phải có gì?

Sao chép mẫu này vào `README.md` ở gốc kho bài và điền:

```markdown
# Day 25 — Chủ đề [N]: [Tên chủ đề]

## Thành viên nhóm

| # | Mã học viên | Họ tên đầy đủ |
|---|-------------|---------------|
| 1 | A20-XXXXX   | Nguyễn Văn A  |
| 2 | A20-XXXXX   | Trần Thị B    |
| 3 | A20-XXXXX   | Lê Văn C      |

## Kết quả cuối

- 🎯 [Bộ kiểm thử cuối](./worksheet/01-test-set-review/3-FINAL-test-set-eval-plan.md)
- 🎯 [Thiết kế 3 lớp giải pháp](./worksheet/02-solution-design/1-map-and-format.md) + [artifact/](./worksheet/02-solution-design/artifact/)
```

### Các bước nộp

1. Tạo kho GitHub công khai theo cú pháp `Day25-MãNhóm`.
2. Đưa toàn bộ thư mục `worksheet/` lên GitHub theo đúng cấu trúc trên.
3. Tạo `README.md` ở gốc kho bài theo mẫu, điền mã học viên + tên đầy đủ.
4. Một thành viên đại diện nộp link kho bài vào LMS Day 25.
5. Kiểm tra link mở được trước **23:59 hôm nay**.

---

## Quy trình làm bài

```text
Đọc lại 01-risk-map.md + 02-test-eval-plan.md từ Day 24
   -> Điền 00-context.md
   -> Bài 1: Rà bộ kiểm thử
      -> Mở rộng: tìm sự cố thật + dùng AI gợi ý tình huống
      -> Hội tụ: gộp, lọc trùng, chấm rủi ro
      -> Chốt 10-15 tình huống cuối
   -> Bài 2: Thiết kế giải pháp
      -> Chọn rủi ro chính
      -> Tìm nguyên nhân gốc
      -> Chọn tầng sửa và định dạng demo
      -> Xây 3 lớp giải pháp song song
   -> Phản biện chéo với nhóm khác
   -> Chỉnh lại file
   -> Nộp link kho bài qua LMS
```

## Bài 1 — Rà bộ kiểm thử

Mục tiêu: chọn ra 10-15 tình huống đáng kiểm thử nhất và viết kế hoạch chấm rõ ràng.

File cuối của Bài 1:

```text
worksheet/01-test-set-review/3-FINAL-test-set-eval-plan.md
```

### Giai đoạn Mở rộng — 30 phút

Mỗi thành viên làm trước, sau đó mới gộp nhóm.

1. Tìm sự cố thật có nguồn.
2. Dùng AI gợi ý thêm tình huống theo 4 góc nhìn.
3. Chọn khoảng 15 tình huống tốt nhất của mỗi người.

File dùng ở giai đoạn này:

```text
worksheet/01-test-set-review/1-diverge.md
```

### Giai đoạn Hội tụ — 30 phút

Nhóm cùng làm.

1. Gộp toàn bộ tình huống của nhóm.
2. Lọc trùng theo kiểu lỗi.
3. Chấm điểm rủi ro: Tác động x Độ khẩn cấp.
4. Chốt 10-15 tình huống cuối.

File dùng ở giai đoạn này:

```text
worksheet/01-test-set-review/2-converge.md
```

## Bài 2 — Thiết kế giải pháp

Mục tiêu: chọn rủi ro quan trọng nhất từ Bài 1, rồi xây 3 lớp giải pháp cho cùng rủi ro đó.

File cuối của Bài 2:

```text
worksheet/02-solution-design/1-map-and-format.md
```

Ba lớp giải pháp:

| Lớp | Thư mục | Mục đích |
|---|---|---|
| Giao diện | `artifact/1-uiux/` | Giúp người dùng thấy cảnh báo, nguồn, cách chuyển sang người thật |
| Chỉ dẫn AI | `artifact/2-prompt/` | Buộc AI hỏi lại, từ chối, hoặc dẫn nguồn khi cần |
| Kiến trúc dữ liệu | `artifact/3-architecture/` | Đảm bảo AI tra cứu đúng nguồn và biết xử lý khi thiếu nguồn |

Ba lớp này bổ sung cho nhau. Một lớp có thể lọt lỗi, nhiều lớp sẽ giảm rủi ro tốt hơn.

## Tài liệu trong thư mục này

| File / Thư mục | Dùng để làm gì |
|---|---|
| `track-bank-scenario-kit-v1.md` | Chọn và đọc lại bối cảnh chủ đề |
| `worksheet/00-context.md` | Điền bối cảnh một lần, đưa vào đầu mọi cuộc trò chuyện với AI |
| `worksheet/01-test-set-review/` | Làm Bài 1. Hướng dẫn chi tiết nằm ngay trong từng file worksheet |
| `worksheet/02-solution-design/` | Làm Bài 2. Hướng dẫn chọn tầng, demo, phản biện nằm trong worksheet |
| `prompts/` | Prompt tham khảo cho từng bước |

## Bảng dùng prompt tham khảo

| Prompt tham khảo | Dùng khi nào | Lưu kết quả vào |
|---|---|---|
| `prompts/01-deep-research.md` | Tìm sự cố thật | `1-diverge.md` Phần A |
| `prompts/02-brainstorm.md` | Dùng AI gợi ý tình huống | `1-diverge.md` Phần B |
| `prompts/03-convergent-analysis.md` | Lọc trùng và ưu tiên | `2-converge.md` |
| `prompts/04-solution-options.md` | Gợi ý hướng giải pháp | `1-map-and-format.md` |
| `prompts/05a-*` đến `05f-*` | Dựng demo nhanh | `artifact/*/demo.*` |

## Cách dùng prompt tham khảo

1. Mở Claude / ChatGPT / Gemini / Perplexity tùy bước.
2. Đưa toàn bộ `worksheet/00-context.md` vào đầu cuộc trò chuyện.
3. Chọn prompt tham khảo phù hợp từ thư mục `prompts/`, rồi chỉnh lại theo bối cảnh nhóm.
4. AI tạo bản nháp.
5. Nhóm đọc lại, sửa, rồi lưu vào đúng file bài tập.

AI chỉ hỗ trợ dựng bản nháp. Nhóm vẫn chịu trách nhiệm kiểm tra nguồn, sửa nội dung, và chốt quyết định cuối.

## Checklist trước khi nộp

- [ ] `worksheet/00-context.md` đã điền đủ.
- [ ] `1-diverge.md` có đủ Phần A, B, C.
- [ ] `2-converge.md` có bảng gộp, bảng lọc trùng, bảng chấm rủi ro.
- [ ] `3-FINAL-test-set-eval-plan.md` có 10-15 tình huống cuối và kế hoạch chấm.
- [ ] `1-map-and-format.md` có rủi ro được chọn, nguyên nhân gốc, 3 lớp giải pháp.
- [ ] `artifact/1-uiux/`, `artifact/2-prompt/`, `artifact/3-architecture/` đều có `card.md` và `demo.*`.
- [ ] Kho GitHub công khai, tên đúng cú pháp `Day25-MãNhóm`, mở được.
- [ ] README đầu kho bài có bảng mã học viên + tên đầy đủ 2-3 thành viên.
- [ ] Link kho bài đã nộp qua LMS trước **23:59**.

## Lỗi hay mắc

| Đừng làm | Nên làm |
|---|---|
| Bỏ qua `00-context.md` | Điền bối cảnh trước khi dùng AI |
| Nộp mỗi file cuối | Giữ cả file trung gian |
| AI viết xong là nộp | Nhóm phải đọc, sửa, kiểm chứng |
| Chỉ làm một lớp giải pháp | Làm đủ 3 lớp: giao diện, chỉ dẫn AI, kiến trúc |
| Demo chỉ để nhìn đẹp | Demo phải giúp người khác hiểu và phản biện |
| Để kho bài ở chế độ riêng tư | Kho GitHub phải công khai |
| Đặt tên kho bài `Day-25-team-final` | Đúng cú pháp `Day25-MãNhóm` |
