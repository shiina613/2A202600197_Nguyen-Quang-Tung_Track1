# Territorial Scope — SmartHint AI

**Date:** 15/05/2026

---

## Câu hỏi 1: User EU?

- **Có user EU hiện tại:** 0 (sản phẩm chưa launch, target 100% học sinh Việt Nam)
- **Kế hoạch mở rộng EU 12 tháng:** NO — sản phẩm align đề Toán TN Việt Nam, không có use case EU
- **Kết luận:** EU AI Act **KHÔNG áp dụng** hiện tại

> *Lưu ý: Nếu tương lai mở rộng sang HS Việt kiều ở EU (Đức, Pháp, Czech) → cần reassess. Hiện tại = NO.*

---

## Câu hỏi 2: Dữ liệu Việt Nam?

### Loại dữ liệu cá nhân đang xử lý:

| # | Loại | Chi tiết | Mức nhạy cảm |
|---|------|----------|--------------|
| 1 | **Tên + email + SĐT** | Đăng ký tài khoản HS + phụ huynh | Cơ bản |
| 2 | **Hành vi học tập** | Transcript phiên, bài làm, điểm, thời gian | Nhạy cảm (trẻ em) |
| 3 | **Lớp + trường** | Profile HS để match bank đề phù hợp | Cơ bản |
| 4 | **Thanh toán** | Thông tin giao dịch subscription (qua cổng thanh toán) | Tài chính |
| 5 | **Device + IP** | Analytics, debug, fraud detection | Kỹ thuật |

### Có chuyển dữ liệu ra nước ngoài:

| Vendor | Quốc gia | Dữ liệu gửi | Kết luận |
|--------|----------|-------------|----------|
| **Google Gemini API** | Mỹ | Prompt (chứa bài làm HS) + Response | **CÓ CHUYỂN** |
| **Helicone** (log) | Mỹ | Full prompt/response log | **CÓ CHUYỂN** |
| **Vercel/Railway** (hosting) | Mỹ/EU | User data, session data | **CÓ CHUYỂN** |

### Kết luận:
- **PDPL áp dụng:** YES (xử lý dữ liệu cá nhân công dân Việt Nam, bao gồm trẻ em)
- **Cần CTIA (Cross-border Transfer Impact Assessment):** YES — dùng Gemini API (Mỹ) + Helicone (Mỹ)
- **Đặc biệt nhạy cảm:** Dữ liệu trẻ em (HS 15-18 tuổi) → cần parental consent + bảo vệ tăng cường

---

## Câu hỏi 3: Tầng rủi ro Luật AI VN?

### Phân loại: **TRUNG BÌNH**

### Lập luận:

SmartHint AI là **chatbot AI tương tác trực tiếp với học sinh** — thuộc nhóm "AI có thể gây nhầm lẫn cho người dùng" theo Điều 9 Luật AI Việt Nam 134/2025:

1. **Không phải tầng Cao** vì:
   - Không phải AI y tế (không chẩn đoán bệnh)
   - Không phải AI tài chính (không tư vấn đầu tư)
   - Không phải AI tuyển dụng (không đánh giá ứng viên)
   - Giáo dục có thể thuộc tầng Cao, nhưng SmartHint là **công cụ hỗ trợ tự học**, không phải hệ thống đánh giá/xếp loại học sinh chính thức

2. **Là tầng Trung bình** vì:
   - Là chatbot AI tương tác (user có thể nhầm AI = giáo viên thật)
   - Tạo nội dung giải toán (AI-generated content)
   - Cần dán nhãn rõ "đây là AI, không phải giáo viên"

3. **Không phải tầng Thấp** vì:
   - Tương tác trực tiếp với end-user (không phải AI nội bộ)
   - Có thể gây nhầm lẫn nếu không dán nhãn

### Nghĩa vụ tương ứng (tầng Trung bình):
- ✅ Dán nhãn "Nội dung do AI tạo" + "Đây là AI hỗ trợ, không phải giáo viên"
- ✅ Thông báo Bộ KH&CN qua cổng AI quốc gia
- ✅ Lưu log tương tác (đã có Helicone)

---

## 4 deadlines đã note vào Notion

- [x] **1/1/2026** — PDPL hiệu lực (ĐÃ QUA) → Cần nộp DPIA trong 60 ngày từ khi bắt đầu xử lý
- [x] **1/3/2026** — Luật AI VN hiệu lực (ĐÃ QUA) → Cần thông báo Bộ KH&CN (tầng Trung bình)
- [ ] **2/8/2026** — EU AI Act high-risk hiệu lực đầy đủ (3 tháng nữa) → Không áp dụng hiện tại
- [ ] **1/3/2027** — Hết ân hạn cho startup non-health/edu/finance (10 tháng nữa) → SmartHint = edu → có thể ân hạn 18 tháng

---

## Việc cần làm ngay tuần này

| # | Action | Deadline | Status |
|---|--------|----------|--------|
| 1 | Nộp DPIA (đánh giá tác động xử lý dữ liệu cá nhân) | 60 ngày từ khi bắt đầu xử lý | ⚠️ Cần làm |
| 2 | Nộp CTIA (đánh giá tác động chuyển dữ liệu ra nước ngoài) — vì dùng Gemini API Mỹ | Cùng DPIA | ⚠️ Cần làm |
| 3 | Tự phân loại tầng Trung bình + thông báo Bộ KH&CN qua cổng AI quốc gia | Ngay khi cổng mở | ⚠️ Cần làm |
| 4 | Cập nhật Privacy Policy theo PDPL (consent rõ ràng cho data trẻ em + parental consent) | Trước pilot launch | ⚠️ Cần làm |
| 5 | Dán nhãn AI trong app: "Đây là AI hỗ trợ, không phải giáo viên" | Trước pilot launch | ⚠️ Cần làm |
