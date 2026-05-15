# Document Trail — SmartHint AI

**Date:** 15/05/2026

---

## Bảng đối chiếu 5 loại hồ sơ

| # | Loại hồ sơ | Status | Link/Path | Deadline build |
|---|-----------|--------|-----------|----------------|
| 1 | Nhật ký kiểm thử claim AI | ✗ CHƯA có | — | Tuần này (trước pilot launch) |
| 2 | Hồ sơ rà soát điều khoản vendor | ✗ CHƯA có | — | Tuần 2 (trước khi ký contract Gemini) |
| 3 | Nhật ký giám sát giao dịch bất thường | ✗ CHƯA có | — | Tuần 3 (khi có thanh toán subscription) |
| 4 | DPIA / CTIA đã nộp | ✗ CHƯA có | — | 60 ngày từ khi bắt đầu xử lý data HS |
| 5 | Phê duyệt nội dung marketing | ✗ CHƯA có | — | Tuần này (trước khi post landing page) |

---

## TOP 1 ưu tiên

**Loại:** #1 — Nhật ký kiểm thử claim AI

**Lý do:** SmartHint sắp launch pilot 200 HS. Mọi claim marketing ("gia sư Socratic", "verify bằng tool", "completion >60%") cần có evidence log. Nếu phụ huynh kiện kiểu Kera ("app nói AI đúng nhưng thực tế sai"), nhật ký kiểm thử là bằng chứng founder đã thẩm định — tránh "biết rõ là không biết".

---

## Template build trong 1 tuần

### Người chịu trách nhiệm: Founder (kiêm CTO)
### Tần suất cập nhật: Mỗi feature mới + hằng quý (quarterly review)

### Mẫu nhật ký kiểm thử claim AI:

```markdown
# Nhật ký kiểm thử claim AI — SmartHint

## Entry [DD/MM/YYYY]

### Claim được test:
"[Câu marketing cụ thể đang dùng]"

### Phương pháp test:
- Số bài test: __
- Chuyên đề: __
- Điều kiện: [edge cases nào đã thử]

### Kết quả:
- Đúng: __% (__ / __ bài)
- Sai: __% (__ / __ bài)
- Timeout/fallback: __% 

### Kết luận:
- Claim vẫn valid: YES/NO
- Cần sửa claim: [nếu NO, viết honest version]
- Action: [giữ / sửa / gỡ claim]

### Người ký xác nhận: [Founder name + date]
```

### Ví dụ entry đầu tiên (tuần này):

```markdown
## Entry 15/05/2026

### Claim được test:
"AI verify bằng tool tính toán thật, không AI tính nhẩm"

### Phương pháp test:
- 50 bài từ bank đề 3 chuyên đề (Hàm số, Mũ-Log, Nguyên hàm)
- Edge cases: phân số, căn bậc 2, logarit cơ số khác 10, giới hạn

### Kết quả:
- Tool verify đúng: 47/50 (94%)
- Tool timeout (fallback rule-based): 2/50 (4%)
- Tool verify sai: 1/50 (2%) — bài logarit lồng nhau phức tạp

### Kết luận:
- Claim valid: YES (94% verify đúng, 2% timeout có fallback)
- Cần fix: 1 edge case logarit lồng → thêm vào SymPy test suite
- Action: Giữ claim + fix edge case + retest tuần sau

### Người ký: [Founder] — 15/05/2026
```

---

## Lịch build 5 loại hồ sơ (30 ngày)

| Tuần | Hồ sơ build | Action |
|------|-------------|--------|
| **Tuần 1** | #1 Nhật ký kiểm thử claim + #5 Phê duyệt marketing | Test 50 bài + ký xác nhận landing page |
| **Tuần 2** | #2 Rà soát vendor | Đọc ToS Gemini API + ghi note điều khoản quan trọng |
| **Tuần 3** | #3 Giám sát giao dịch | Setup alert cho thanh toán bất thường (khi có subscription) |
| **Tuần 4** | #4 DPIA/CTIA | Draft DPIA theo template PDPL + nộp |
