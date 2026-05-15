# Incident Playbook — SmartHint AI

**Ngày:** 15/05/2026  
**Tình huống:** 9h30 sáng. Phụ huynh tweet screenshot: "App SmartHint dạy con tôi đạo hàm sai. Con tin, ghi vào vở, cô giáo chấm 0 điểm." 200 retweets trong 30 phút. Đang viral trên group phụ huynh Zalo 50K members.

---

## Quyết định 1 — VERIFY (0–5 phút)

### Đây có thật là AI của mình không?

**Check ở đâu:**
- Helicone dashboard: `https://helicone.ai/dashboard` → filter by timestamp + search keyword từ screenshot
- Tìm: conversation ID + user ID + full prompt/response chain
- So sánh response trong log vs screenshot phụ huynh post

**Cách verify nhanh (vs photoshop/prank):**
1. Copy text từ screenshot → search exact match trong Helicone log
2. Check timestamp: screenshot có khớp với log entry không?
3. Check user ID: có user nào active vào thời điểm đó không?
4. Nếu match → **confirmed real**. Nếu không match → reply "đang xác minh, sẽ update trong 1h"

**Thời gian:** 5 phút max (Helicone search instant)

---

## Quyết định 2 — STOP THE BLEEDING (5–15 phút)

### Chọn: **Tighten prompt** + **Soft kill cho dạng toán bị lỗi**

**Lý do:**
- **Không hard kill** — 200 HS pilot đang dùng app hàng ngày. Tắt toàn bộ = mất trust 200 HS + phụ huynh.
- **Soft kill cho dạng toán cụ thể** — nếu lỗi ở "đạo hàm", disable AI cho chuyên đề Hàm số → chuyển sang hint rule-based (đã có sẵn, flip env var).
- **Tighten prompt** — thêm rule: "LUÔN verify kết quả đạo hàm bằng tool trước khi trả HS. Nếu tool timeout → trả 'Mình cần kiểm tra lại, chờ chút nhé' thay vì guess."

**Action cụ thể:**
```bash
# Flip env var cho chuyên đề bị lỗi
export SMARTHINT_HAMSO_MODE=fallback

# Deploy prompt update (đã có PR sẵn cho emergency tighten)
git checkout -b hotfix/verify-derivative
# Add rule to system prompt, push, merge with 1 reviewer
```

**Thời gian:** 10 phút (flip env var = 30 giây, prompt update = 10 phút với fast review)

---

## Quyết định 3 — COMMUNICATE (15–30 phút)

### Audience 1: Phụ huynh bị ảnh hưởng (DM cá nhân)

```
Tiêu đề: Từ [Founder] về việc vừa xảy ra

Chào anh/chị [Tên PH],

Đây là [Founder] — em vừa thấy bài đăng của anh/chị về SmartHint.

Việc xảy ra:     "AI của bên em trả lời sai bước đạo hàm cho con. Đó là lỗi của em."
Em đang làm gì:  "Đã tắt AI cho phần Hàm số, chuyển sang bài giải có kiểm chứng.
                  Em đang review toàn bộ log phiên của con để check còn lỗi nào khác."
Em sửa thế nào:  "Refund 1 tháng subscription (139K) hôm nay — không cần form.
                  Nếu con cần, em gửi file PDF lời giải đúng cho bài đó trong 2h."
Em gọi anh/chị:  [SĐT trực tiếp founder] hoặc Calendly: [link]

— [Founder]
[founder@smarthint.vn]
```

### Audience 2: Team (Slack #all)

> "Có incident — AI trả sai đạo hàm, phụ huynh post viral. Mình đang handle. Đã flip fallback cho Hàm số. Will update 1h nữa. Không cần action từ team lúc này."

### Audience 3: Public (1 tweet từ founder)

```
Chào mọi người — mình là [Founder] SmartHint.

Vừa thấy lỗi AI dạy sai đạo hàm. Đã tắt phần đó, chuyển sang bài giải có kiểm chứng.
Đang liên hệ trực tiếp phụ huynh bị ảnh hưởng.
Update chi tiết trong 24h.

— [Founder]
```
*(237 ký tự — dưới 280)*

### Audience 4: Investor (email sau 24h)

> Subject: Incident update — contained  
> "Có 1 incident AI hallucinate lời giải. Đã contain trong 15 phút (soft kill + prompt fix). 1 phụ huynh affected, đã refund + gọi trực tiếp. Không impact MRR. Đã tighten guardrail. Chi tiết trong weekly update."

---

## Post-incident (24-48h)

1. **Root cause analysis:** Tại sao tool verify không catch? → Fix coverage gap
2. **Update Risk Register:** Adjust Likelihood/Impact nếu cần
3. **War game:** Simulate scenario tương tự quarterly
4. **Communicate resolution:** Post update cho group phụ huynh Zalo

---

## Self-check

- [x] Verify cụ thể URL/endpoint (Helicone dashboard)
- [x] Stop bleeding chọn rõ (soft kill + tighten prompt) + lý do
- [x] Comm dùng "I/em" personal (không "we/chúng tôi" corporate)
- [x] Compensation specific (139K refund hôm nay, không cần form)
- [x] Public tweet < 280 ký tự (237 ký tự)
- [x] Founder voice xuyên suốt
- [x] Đơn giản đến mức founder mệt mỏi 3h sáng vẫn làm theo được
