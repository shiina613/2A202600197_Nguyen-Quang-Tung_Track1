---
marp: true
theme: default
paginate: true
style: |
  section {
    font-size: 24px;
    padding: 40px;
  }
  h1 { font-size: 36px; color: #1a73e8; }
  h2 { font-size: 28px; color: #333; }
  table { width: 100%; font-size: 20px; }
  img { max-height: 400px; display: block; margin: 0 auto; }
---

# Phân tích sản phẩm AI: Perplexity vs Gemini
**Lab 2 - PMTrack Day 26**

- **Thành viên 1:** Nguyễn Quang Tùng (2A202600197)
- **Thành viên 2:** Tạ Thị Thùy Dương (2A202600287)
- **Ngành:** Tìm kiếm (Track A)

---

## S1 — PRODUCT MOMENT

### 1.1. Bảng so sánh
| Yếu tố | Sản phẩm A (Perplexity) | Sản phẩm B (Gemini) |
|---|---|---|
| Tên + URL | Perplexity (perplexity.ai) | Gemini (gemini.google.com) |
| Entry point | Ô tìm kiếm (Search bar) ở giữa | Ô nhập liệu dạng chat ở dưới |
| Ý định user | Tìm thông tin đòi hỏi trích dẫn nguồn | Trò chuyện tổng quát / tra cứu |
| Surface chính | Giao diện Search & Synthesis | Giao diện Chatbot truyền thống |

---

### 1.2. Nhiệm vụ chung & Entry Point
**Nhiệm vụ:** *"Tôi có 50 triệu, muốn mua laptop cho học AI/ML. Gợi ý 3 mẫu phù hợp đang bán ở Việt Nam + tại sao lại chọn nó."*

**Nhận định:** Perplexity định vị rõ ràng là "Cỗ máy tìm kiếm", Gemini định vị là "Trợ lý ảo đa năng".

<div style="display: flex; justify-content: space-between;">
  <div style="width: 48%; text-align: center;">
    <b>Perplexity Entry</b>
    <img src="screenshots/perplexity.png" alt="Perplexity Entry" />
  </div>
  <div style="width: 48%; text-align: center;">
    <b>Gemini Entry</b>
    <img src="screenshots/gemini.png" alt="Gemini Entry" />
  </div>
</div>

---

## S2 — WORKFLOW EVIDENCE

### 2.1. Luồng người dùng & Friction
- **TRƯỚC:** Người dùng nảy sinh nhu cầu mua sắm.
- **TRONG (Perplexity):** Quét web tự động -> Nguồn ở trên, bài tóm tắt có in-line citation (xgear, reddit...).
- **TRONG (Gemini):** Trả về danh sách text (ẩn link gốc), chia bố cục rõ ràng, tự động tạo "Bảng so sánh".
- **Friction/Follow-up:** Perplexity giảm ma sát "kiểm chứng" cực tốt nhờ giao diện citation và gợi ý câu hỏi đào sâu cực chuẩn. Gemini lại đóng vai trò "cố vấn", đưa ra lời khuyên và cho phép Export bảng ra Google Sheets.

---

### 2.2. Bằng chứng Workflow (Input & Output)

**1. Input (Quá trình nhập)**
<div style="display: flex; justify-content: space-between;">
  <div style="width: 48%; text-align: center;">
    <b>Perplexity Input</b>
    <img src="screenshots/perplexity_1.png" alt="Perplexity Input" />
  </div>
  <div style="width: 48%; text-align: center;">
    <b>Gemini Input</b>
    <img src="screenshots/gemini_1.png" alt="Gemini Input" />
  </div>
</div>

**2. Output (Kết quả trả về)**
<div style="display: flex; justify-content: space-between;">
  <div style="width: 48%; text-align: center;">
    <b>Perplexity Kết quả</b>
    <img src="screenshots/perplexity_2.png" alt="Perplexity Output" />
  </div>
  <div style="width: 48%; text-align: center;">
    <b>Gemini Kết quả</b>
    <img src="screenshots/gemini_2.png" alt="Gemini Output" />
  </div>
</div>

---

## S3 — OUTPUT & TRUST

### 3.1. Bảng chất lượng & Độ tin cậy
| Tiêu chí | Perplexity | Gemini |
|---|---|---|
| Đúng nội dung? | Đúng (chỉ ra GPU RTX mạnh) | Đúng (gợi ý laptop gaming) |
| Có bịa giá không? | Sát thực tế thị trường VN | Thỉnh thoảng bị ảo giá/sai USD quy đổi |
| Citation & Layout | Cực mạnh. Nhãn nội tuyến (xgear, reddit) | Trình bày đẹp, có bảng, nhưng ẩn link gốc |
| Control | Xóa nguồn không thích để tạo lại | Nút "Double-check response" (Chữ G) |

**Nhận định:** Perplexity chiến thắng tuyệt đối về "Độ tin cậy" nhờ giao diện sinh ra dành riêng cho việc cite nguồn. Nút Double-check của Gemini mang tính vá lỗi sau khi sinh text.

---

### 3.2. Bằng chứng Độ tin cậy

<div style="display: flex; justify-content: space-between;">
  <div style="width: 48%; text-align: center;">
    <b>Perplexity Sources</b>
    <img src="screenshots/perplexity_3.png" alt="Perplexity Source" />
  </div>
  <div style="width: 48%; text-align: center;">
    <b>Gemini Double Check</b>
    <img src="screenshots/gemini_3.png" alt="Gemini Source" />
  </div>
</div>

---

## S4 — BUSINESS / USAGE SIGNAL

### 4.1. Mô hình giá & Trade-off
| Yếu tố | Perplexity | Gemini |
|---|---|---|
| Giá thấp nhất | $20/tháng (Gói Pro) | $20/tháng (Gemini Advanced) |
| Pay-for-output?| Gói tháng | Gói tháng (bundle Google One) |
| Quota | Free: 5 Pro Searches/4 tiếng | Advanced: Không giới hạn rõ ràng |

**Nhận định:** Perplexity bán "Khả năng truy xuất kiến thức", còn Gemini bán "Hệ sinh thái tiện ích" (kèm 2TB Google Drive). Cho nhu cầu cơ bản, Perplexity miễn phí đã quá tốt.

---

### 4.2. Bằng chứng Mô hình giá & Tính năng khác

<div style="display: flex; justify-content: space-between;">
  <div style="width: 32%; text-align: center;">
    <b>Gemini Screenshot 4</b>
    <img src="screenshots/gemini_4.png" alt="Gemini Pricing 1" />
  </div>
  <div style="width: 32%; text-align: center;">
    <b>Gemini Screenshot 5</b>
    <img src="screenshots/gemini_5.png" alt="Gemini Pricing 2" />
  </div>
  <div style="width: 32%; text-align: center;">
    <b>Gemini Screenshot 6</b>
    <img src="screenshots/gemini_6.png" alt="Gemini Pricing 3" />
  </div>
</div>

---

## S5 — PRODUCT JUDGMENT

### 5.1. Verdict tóm tắt
- **Perplexity: STRONG** — UX xuất sắc đánh trúng tim đen của người dùng muốn tra cứu thông tin có kiểm chứng (Do the work for me).
- **Gemini: PROMISING** — Lợi thế phân phối (Distribution) khổng lồ nhưng trải nghiệm chưa tối ưu đặc thù cho thao tác "Search & Verify".

### 5.2. Moat phân tích
- **Perplexity (Moat: Brand & UX):** Giao diện Citation-first. **Điểm yếu:** Dựa vào Rented Land (thuê API của OpenAI/Anthropic/Google).
- **Gemini (Moat: Distribution & Data):** Tích hợp sẵn trên Android, Workspace. Dữ liệu Search Index lớn nhất thế giới. 

---

### 5.3. Niche Down & Spark/Loop/System
- **Niche của Perplexity:** Tập trung 100% vào người làm nghiên cứu (Researchers, Students).
- **Niche của Gemini:** Trợ lý ảo cho mọi người (quá rộng).
- **Spark → Loop → System:** Perplexity đang tiến từ **LOOP** (trợ lý tìm kiếm) lên **SYSTEM** (Perplexity Pages). Gemini nằm ở mức **SPARK/LOOP** (hỏi đáp).

### 5.4. Liên hệ với Lab 1 (Chegg Disruption)
- Nếu Chegg sụp đổ vì người dùng muốn AI "giải hộ bài tập" thay vì "đưa link bài giải", thì công cụ tìm kiếm truyền thống (hiển thị 10 link xanh) có nguy cơ tương tự. Perplexity chính là "Kẻ bóp nghẹt" (Big Squeeze) đang đe dọa Google Search.
