# Rules / Rails / Ritual — SmartHint AI

**Ngày:** 15/05/2026  
**Risk chọn:** AI Socratic tutor hallucinate lời giải sai cho học sinh → HS tin, ghi nhớ sai, thi trượt → phụ huynh kiện (Air Canada pattern)

---

## R1 — RULES (1 trang Notion)

### ❌ KHÔNG được làm

- **KHÔNG** deploy prompt mới lên production mà chưa qua pre-launch review (2 người check 30 phút)
- **KHÔNG** paste transcript phiên học sinh (có tên, lớp, trường) vào ChatGPT public hoặc Claude public
- **KHÔNG** marketing claim "AI đúng 100%" hoặc "thay thế gia sư" — phải ghi rõ giới hạn

### ✅ Được làm (alternatives)

- **DÙNG** Gemini API Enterprise (data không train, đã setup) cho mọi tương tác production
  → Endpoint: [internal link]
- **DÙNG** Claude for Work (Anthropic) cho phân tích log phiên bất thường
  → Login: [internal link]
- **DÙNG** tool verify (Wolfram/SymPy) để kiểm chứng MỌI kết quả số trước khi show HS
  → Không bao giờ để LLM tự tính nhẩm rồi trả kết quả

### ⚠️ Hậu quả vi phạm

- Lần 1: Founder talk 1-1, ghi note vào Notion
- Lần 2: Let go (không có lần 3)

### 📞 Câu hỏi?

- Slack #ai-safety hoặc DM Founder trực tiếp
- Update rule: Founder viết, push Notion, notify team qua Slack

---

## R2 — RAILS (Stack $235/tháng)

| # | Mục tiêu | Tool | Cost/tháng |
|---|----------|------|------------|
| 1 | **Log mọi prompt/response AI ↔ HS** (audit trail khi phụ huynh complaint) | Helicone free tier (100K req/tháng) | $0 |
| 2 | **Chặn deploy prompt chưa review** | GitHub branch protection + 1 reviewer required + CI test suite chạy 50 bài mẫu | $0 (đã có) |
| 3 | **Tool verify tự động** mọi kết quả số trước khi trả HS | SymPy self-hosted (Python library) + fallback Wolfram Alpha API | ~$25/tháng (Wolfram) |
| 4 | **Chặn paste data HS vào public LLM** | NextDNS block ChatGPT/Claude public domain cho team devices | $40/tháng |
| 5 | **Monitor hallucination rate** | Custom script check tool-verify mismatch rate hàng ngày → alert Slack | $0 (self-built) |
| 6 | **Fallback rule-based** sẵn sàng flip khi crisis | Env var `AI_MODE=socratic|fallback` — fallback = hint cứng do GV biên soạn | $0 |

**Tổng: ~$65/tháng** (well under $500)

**Setup time:** 2 ngày (Helicone + NextDNS + branch protection + env var fallback)

---

## R3 — RITUAL

### Friday 30' AI Safety Review (mỗi tuần)

**Ai:** Founder + tech lead (hoặc founder solo nếu team 2 người)  
**Khi:** Thứ Sáu 16:00, 30 phút  
**Agenda cố định:**

1. **Hallucination check (10'):** Mở Helicone dashboard → filter phiên có tool-verify mismatch > 0. Bao nhiêu phiên AI trả sai tuần này? Trend tăng hay giảm?
2. **Student complaint (10'):** Có HS nào report "AI nói sai" tuần này không? (Check Zalo group + support channel)
3. **Vendor change (5'):** Google Gemini có announcement gì tuần này? Pricing? Deprecation? ToS update?
4. **Action item (5'):** 1 action duy nhất cho tuần sau (fix prompt / update bank / tighten guardrail)

### Customer Friday — 1 câu hỏi cụ thể

**Mỗi tuần, founder gọi 1 phụ huynh (buyer) và hỏi:**

> *"Tuần vừa rồi con có kể gì về SmartHint không? Có lần nào con nói 'app nói sai' hoặc 'app không hiểu' không?"*

**Tại sao câu này:** Phụ huynh là proxy tốt nhất cho hallucination impact — HS kể cho bố mẹ khi frustrated. NPS survey không capture được real-time frustration.

---

## Self-check

- [x] RULES có vendor name + cost cụ thể (Gemini Enterprise, Claude for Work, SymPy, Wolfram)
- [x] RAILS tổng dưới $500/tháng ($65/tháng)
- [x] RITUAL có question cụ thể founder hỏi customer
- [x] Implement được trong 1 tuần (2 ngày setup Rails, Friday đầu tiên = Ritual)
- [x] Không cần hire compliance officer
- [x] Founder voice xuyên suốt (không corporate template)
