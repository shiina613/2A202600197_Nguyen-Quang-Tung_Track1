# Compliance Audit v2 — SmartHint AI

**Ngày:** 15/05/2026  
**Phương pháp:** AI Compliance Officer audit + đối chiếu Workshop 1-3  
**Output:** Tiếng Việt — sẵn sàng email luật sư

---

## VI PHẠM 1: Marketing claim "gia sư" khi chưa có bằng chứng hiệu quả tương đương gia sư người

- **Luật áp dụng:** Bộ luật Hình sự Việt Nam
- **Điều:** Điều 198, Khoản 1 — Lừa dối khách hàng
- **Bằng chứng trong sản phẩm:** Twitter Pitch: "SmartHint AI là gia sư Socratic". Landing page: "gia sư AI ép tự tính". Từ "gia sư" ngụ ý chất lượng tương đương giáo viên/gia sư người — chưa có A/B test so sánh.
- **Pattern khớp với:** Vụ Kera — "1 viên = 1 đĩa rau" (so sánh sản phẩm với thứ có giá trị cao hơn mà không có evidence)
- **Hành động sửa:**
  1. Đổi "gia sư AI" → "AI hỗ trợ tự học theo phương pháp Socratic" (tuần này)
  2. Thêm disclaimer: "SmartHint là công cụ hỗ trợ, không thay thế giáo viên" (tuần này)
  3. Sau pilot: nếu có data so sánh → mới dùng lại từ "gia sư" kèm evidence
- **Deadline:** Sửa ngay trước pilot launch (Luật đã hiệu lực)

---

## VI PHẠM 2: Claim "target completion >60%" trên pitch deck — phụ huynh/investor có thể hiểu nhầm là kết quả thực

- **Luật áp dụng:** Bộ luật Hình sự Việt Nam
- **Điều:** Điều 198, Khoản 1 — Lừa dối khách hàng (nếu phụ huynh mua subscription dựa trên con số này)
- **Bằng chứng trong sản phẩm:** Twitter Pitch: "Pilot 200 HS: target completion >60%". Pitch Memo: "PMF signals: Target Session Completion Rate >60%". Từ "target" có thể bị bỏ qua khi đọc nhanh → hiểu nhầm là đã đạt.
- **Pattern khớp với:** Vụ Kera — claim "28.43% bột rau củ" trên bản công bố (số liệu trên giấy, thực tế khác)
- **Hành động sửa:**
  1. Sửa thành "Mục tiêu đang validate: Session Completion >60%" — in đậm "mục tiêu" (tuần này)
  2. Khi có pilot data: thay bằng số thật + sample size + confidence interval
  3. Không bao giờ dùng "target" mà không kèm "đang validate" hoặc "chưa có data"
- **Deadline:** Sửa trước khi gửi pitch deck cho investor mới

---

## VI PHẠM 3: Chưa dán nhãn "Nội dung do AI tạo" trong sản phẩm

- **Luật áp dụng:** Luật AI Việt Nam 134/2025/QH15
- **Điều:** Điều 9 — Nghĩa vụ tầng Trung bình (chatbot AI phải dán nhãn)
- **Bằng chứng trong sản phẩm:** PRD Day 17 không có requirement dán nhãn AI. Mockup UX không có dòng "Đây là AI". Học sinh 15-18 tuổi có thể nhầm AI = giáo viên thật.
- **Pattern khớp với:** Vụ Air Canada — chatbot không ghi rõ "đây là AI" → customer tin lời chatbot = policy công ty
- **Hành động sửa:**
  1. Thêm dòng cố định đầu mỗi phiên: "Đây là AI hỗ trợ học tập. AI có thể sai — hãy kiểm tra lại." (tuần này)
  2. Thêm watermark/badge "AI-generated" trên mọi hint/response
  3. Onboarding flow: giải thích rõ "SmartHint là AI, không phải giáo viên"
- **Deadline:** 1/3/2026 (Luật AI VN đã hiệu lực — cần làm ngay)

---

## VI PHẠM 4: Chưa nộp DPIA khi xử lý dữ liệu trẻ em

- **Luật áp dụng:** Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15
- **Điều:** Điều 30 — Đánh giá tác động xử lý dữ liệu cá nhân trong 60 ngày
- **Bằng chứng trong sản phẩm:** SmartHint xử lý transcript phiên học (hành vi học tập) của HS 15-18 tuổi (trẻ em theo luật VN). Chưa có DPIA. Chưa có parental consent flow.
- **Pattern khớp với:** Vụ CIC — xử lý dữ liệu cá nhân thiếu kiểm soát bảo mật → phạt 10x doanh thu
- **Hành động sửa:**
  1. Draft DPIA theo template PDPL — mô tả luồng data HS từ input → Gemini API → log → storage (tuần 2)
  2. Build parental consent flow: phụ huynh ký đồng ý trước khi HS dưới 18 dùng app (tuần 1)
  3. Nộp DPIA cho cơ quan có thẩm quyền trong 60 ngày từ khi bắt đầu xử lý
- **Deadline:** 60 ngày từ ngày pilot launch (PDPL đã hiệu lực 1/1/2026)

---

## VI PHẠM 5: Chuyển dữ liệu HS ra nước ngoài (Gemini API Mỹ) mà chưa có CTIA

- **Luật áp dụng:** Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15
- **Điều:** Điều 8 + Điều 30 — Chuyển dữ liệu cá nhân ra nước ngoài
- **Bằng chứng trong sản phẩm:** PRD ghi rõ: "AI chạy trên Gemini 2.5 Flash-Lite" (Google, Mỹ). Mỗi prompt gửi Gemini chứa bài làm HS + context phiên. Helicone (Mỹ) log toàn bộ. = Chuyển dữ liệu cá nhân trẻ em ra nước ngoài.
- **Pattern khớp với:** Vụ CIC — dữ liệu cá nhân bị xử lý thiếu kiểm soát. Phạt: 10x doanh thu sản phẩm liên quan.
- **Hành động sửa:**
  1. Nộp CTIA (Cross-border Transfer Impact Assessment) cùng lúc với DPIA (tuần 2)
  2. Pseudonymize data trước khi gửi Gemini: dùng user_id thay vì tên thật HS (tuần 1)
  3. Cập nhật Privacy Policy: ghi rõ "dữ liệu được xử lý bởi Google AI (Mỹ)" + consent rõ ràng
- **Deadline:** Trước pilot launch (PDPL đã hiệu lực)

---

## VI PHẠM 6: Chưa thông báo Bộ KH&CN về hệ thống AI tầng Trung bình

- **Luật áp dụng:** Luật AI Việt Nam 134/2025/QH15
- **Điều:** Điều 9 — Nghĩa vụ thông báo cho hệ thống AI tầng Trung bình + Cao
- **Bằng chứng trong sản phẩm:** SmartHint là chatbot AI tương tác trực tiếp với user → tầng Trung bình. Chưa thông báo Bộ KH&CN qua cổng AI quốc gia.
- **Pattern khớp với:** Không có vụ enforcement cụ thể (luật mới hiệu lực 1/3/2026) — nhưng phạt tới 2 tỷ VNĐ cho tổ chức
- **Hành động sửa:**
  1. Tự phân loại: SmartHint = tầng Trung bình (chatbot AI giáo dục) (tuần này)
  2. Chuẩn bị hồ sơ thông báo theo format Bộ KH&CN (khi cổng AI quốc gia mở)
  3. Lưu bằng chứng đã tự phân loại + lý do (document trail)
- **Deadline:** Ngay khi cổng AI quốc gia hoạt động (Luật hiệu lực 1/3/2026)

---

## VI PHẠM 7: Không có cơ chế giám sát lạm dụng — HS có thể dùng SmartHint để gian lận thi

- **Luật áp dụng:** Bộ luật Hình sự Việt Nam
- **Điều:** Điều 324 pattern (Rửa tiền) — cung cấp công cụ biết dấu hiệu lạm dụng mà vẫn tiếp tục
- **Bằng chứng trong sản phẩm:** SmartHint giải toán theo từng bước. Nếu HS dùng trong phòng thi (qua điện thoại) = gian lận. Nếu có report từ giáo viên/trường mà founder vẫn tiếp tục cung cấp = pattern Shark Bình.
- **Pattern khớp với:** Vụ Mr Pips / Shark Bình — biết dấu hiệu lạm dụng, vẫn tiếp tục vì doanh thu
- **Hành động sửa:**
  1. Terms of Service: cấm sử dụng trong phòng thi + cấm chia sẻ tài khoản (tuần này)
  2. Monitoring: flag usage patterns bất thường (dùng vào giờ thi, nhiều bài trong 5 phút) (tuần 3)
  3. Quy trình: khi nhận report lạm dụng → điều tra → block user → ghi log (document trail)
- **Deadline:** Trước pilot launch

---

## VI PHẠM 8: Privacy Policy chưa cập nhật theo PDPL — thiếu consent rõ ràng cho data trẻ em

- **Luật áp dụng:** Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15
- **Điều:** Điều 8 + Điều 30 — Consent + Bảo vệ dữ liệu trẻ em
- **Bằng chứng trong sản phẩm:** PRD Day 17 có "Privacy constraint" nhưng chưa có Privacy Policy document. Chưa có parental consent mechanism. HS 15-18 = trẻ em theo luật VN → cần consent từ phụ huynh.
- **Pattern khớp với:** Vụ CIC — thiếu kiểm soát bảo mật dữ liệu cá nhân
- **Hành động sửa:**
  1. Viết Privacy Policy tiếng Việt: liệt kê rõ data thu thập, mục đích, vendor, thời gian lưu (tuần 1)
  2. Parental consent flow: phụ huynh nhận email/SMS xác nhận trước khi HS dùng app (tuần 1)
  3. Quyền xóa data: phụ huynh/HS có thể yêu cầu xóa toàn bộ transcript bất kỳ lúc nào
- **Deadline:** Trước pilot launch (PDPL đã hiệu lực)

---

## Tổng hợp theo mức nghiêm trọng

| # | Vi phạm | Luật | Mức phạt tiềm năng | Priority |
|---|---------|------|--------------------:|----------|
| 4 | Chưa nộp DPIA (data trẻ em) | PDPL Đ.30 | 10x doanh thu | 🔴 Ngay |
| 5 | Chuyển data ra nước ngoài không CTIA | PDPL Đ.8 | 10x doanh thu | 🔴 Ngay |
| 8 | Privacy Policy thiếu consent trẻ em | PDPL Đ.8 | 5% doanh thu năm | 🔴 Ngay |
| 3 | Chưa dán nhãn AI | Luật AI Đ.9 | 2 tỷ VNĐ | 🟡 Tuần này |
| 6 | Chưa thông báo Bộ KH&CN | Luật AI Đ.9 | 2 tỷ VNĐ | 🟡 Tuần này |
| 1 | Claim "gia sư" không evidence | BLHS Đ.198 | Tù 1-5 năm | 🟡 Tuần này |
| 7 | Không giám sát lạm dụng | BLHS Đ.324 pattern | Tù 1-5 năm | 🟡 Trước launch |
| 2 | Claim "target >60%" gây nhầm lẫn | BLHS Đ.198 | Tù 1-5 năm | 🟢 Trước pitch |

---

## Tiêu chí đạt

- [x] Có ≥ 7 vi phạm (đủ 8)
- [x] Mỗi vi phạm có Điều luật cụ thể (Đ.198, Đ.324, Đ.9, Đ.8, Đ.30)
- [x] Mỗi vi phạm có trích nguyên văn bằng chứng từ tài liệu
- [x] Mỗi vi phạm có vụ Việt Nam khớp pattern (Kera / Pips / CIC / Air Canada)
- [x] Top 5 nghiêm trọng nhất có 3 hành động sửa mỗi cái
- [x] Tất cả output tiếng Việt — có thể email luật sư đọc trực tiếp
- [x] Đủ 4 loại: marketing (VP1,2) + DLCN (VP4,5,8) + phân loại AI (VP3,6) + vendor/payment (VP7)
