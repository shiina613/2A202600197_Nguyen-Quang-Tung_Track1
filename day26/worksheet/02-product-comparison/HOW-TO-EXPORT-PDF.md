# Cách tạo analysis-report.pdf

File `analysis-report.pdf` là deliverable bắt buộc cho Lab 2. Tạo bằng 1 trong 2 cách:

## Cách 1: Marp CLI (khuyến nghị)

```bash
npx @marp-team/marp-cli analysis-report-marp.md --pdf --allow-local-files
```

Output: `analysis-report-marp.pdf` → đổi tên thành `analysis-report.pdf`

## Cách 2: VS Code + Marp extension

1. Mở `analysis-report-marp.md` trong VS Code
2. Cài extension "Marp for VS Code"
3. Ctrl+Shift+P → "Marp: Export Slide Deck" → chọn PDF
4. Đổi tên file output thành `analysis-report.pdf`

## Cách 3: Google Slides

1. Copy nội dung từ `3-FINAL-analysis-outline.md` vào Google Slides
2. File → Download → PDF
3. Lưu thành `analysis-report.pdf` trong folder này

---

⚠️ Xóa file này sau khi đã tạo xong PDF.
