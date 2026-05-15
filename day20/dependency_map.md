# Dependency Map + Critical Path — SmartHint AI

**Ngày:** 15/05/2026  
**Burn rate:** ~31 triệu VNĐ/tháng (Base)  
**Runway hiện tại:** 700M VNĐ / 31M = ~22 tháng (pre-seed)

---

## 3 External Dependencies

### 🔴 Dependency 1: Google Gemini API (Tier 1 — Critical)

**Worst-case:** Google tăng giá Gemini Flash-Lite 5x đột ngột (từ $0.10 → $0.50/1M input token), hoặc deprecate Flash-Lite model, hoặc siết rate limit từ 1500 RPM xuống 100 RPM. Effective ngay — không grace period.

**Plan B:**
- Code abstraction layer cho LLM đã sẵn sàng (interface chung cho Gemini/Claude/GPT).
- Switch sang Claude 3.5 Haiku (Anthropic) hoặc GPT-4o-mini (OpenAI) trong 48h.
- Caching layer cho 60% prompt patterns phổ biến (hint cho dạng toán lặp lại) — giảm API calls 60%.
- Nếu giá tăng 5x: tạm chuyển sang batch processing (Flex tier) cho non-realtime tasks.

**Cost Plan B:** 2 tuần dev abstraction layer (đã build 70%). Switch vendor = tăng COGS ~40% tạm thời. Caching layer = 1 tuần dev + Redis $15/tháng.

---

### 🟡 Dependency 2: Apple App Store / Google Play Review (Tier 2 — Important)

**Worst-case:** App bị reject vì "educational content targeting minors" policy (Apple đặc biệt strict với app cho trẻ em). Hoặc bị flag COPPA/children's privacy nếu không có parental consent flow đúng chuẩn. Delay 2-4 tuần mỗi lần resubmit.

**Plan B:**
- Launch MVP dưới dạng **Progressive Web App (PWA)** — không cần App Store approval.
- Distribute qua Zalo Mini App (ecosystem Việt Nam, không cần Apple review).
- Nếu cần native: chuẩn bị parental consent flow + age gate + privacy policy cho minors TRƯỚC khi submit lần đầu.
- Fallback: Telegram bot hoặc Zalo OA chatbot cho pilot 200 HS.

**Cost Plan B:** PWA = 0 đ thêm (đã build responsive web). Zalo Mini App = 1 tuần dev + 0 đ hosting. Parental consent flow = 3 ngày dev.

---

### 🟡 Dependency 3: Bank đề Bộ GD&ĐT — Nguồn nội dung (Tier 2 — Important)

**Worst-case:** Bộ GD&ĐT thay đổi cấu trúc đề TN 2026 đột ngột (thêm/bỏ Phần III trả lời ngắn), hoặc không công bố đề tham khảo mới. Toàn bộ bank đề + prompt Dual-Scaffolding bị lỗi thời.

**Plan B:**
- Theo dõi sát thông báo Bộ GD&ĐT (ritual hàng tuần check website Bộ).
- Bank đề thiết kế modular — mỗi dạng toán là 1 module độc lập, dễ swap/update.
- Nếu đề đổi: 2 tuần adapt prompt + bank cho cấu trúc mới (đã có pipeline biên soạn).
- Backup: dùng đề thi thử từ 50+ trường THPT (nguồn công khai) thay vì chỉ đề Bộ.

**Cost Plan B:** 2 tuần biên soạn lại + 0 đ (founder + AI tự làm). Nguồn đề thi thử = miễn phí (công khai trên các diễn đàn giáo dục).

---

## Critical Path

```
┌─────────────────────────────────────────────────────────────────┐
│                    CRITICAL PATH (đỏ)                           │
│                                                                 │
│  Bank đề 3     Prompt         Tool Verify    Pilot 200 HS      │
│  chuyên đề  →  Dual-       →  Integration →  Closed Beta  → LAUNCH
│  biên soạn     Scaffolding    + QA            + Retention      │
│  (2 tuần)      (4 tuần)       (2 tuần)       data (4 tuần)    │
│                                                                 │
│  TỔNG CRITICAL PATH: ~12 tuần                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              NON-CRITICAL (xám, có buffer)                       │
│                                                                 │
│  • UI/UX Design (PWA)        — parallel với Prompt dev          │
│  • Landing page + Threads    — parallel với Tool Verify         │
│  • Báo cáo phụ huynh (NEXT)  — sau khi pilot data có           │
│  • LLM abstraction layer     — parallel với Bank đề             │
│  • Parental consent flow     — parallel với QA                  │
└─────────────────────────────────────────────────────────────────┘
```

### Chi tiết Critical Path

| # | Task | Blocking | Duration | Risk nếu trễ |
|---|------|----------|----------|---------------|
| 1 | **Biên soạn bank đề 3 chuyên đề** (Hàm số, Mũ-Log, Nguyên hàm) | Blocks Prompt dev (cần đề để test) | 2 tuần | Trễ 1 tuần = trễ launch 1 tuần |
| 2 | **Prompt Dual-Scaffolding** (Socratic loop + RAG) | Blocks Tool Verify (cần prompt output để verify) | 4 tuần | Phức tạp nhất — nhiều iteration |
| 3 | **Tool Verify Integration + QA** | Blocks Pilot (cần verify hoạt động ổn) | 2 tuần | API timeout, edge cases toán phức tạp |
| 4 | **Pilot 200 HS + Retention data** | Blocks NEXT phase (cần data để quyết định) | 4 tuần | Recruitment HS + onboarding |

### Non-critical (có buffer)

| Task | Parallel với | Buffer |
|------|-------------|--------|
| UI/UX PWA | Prompt dev | 2 tuần buffer |
| Landing page + content Threads | Tool Verify | 3 tuần buffer |
| LLM abstraction layer (Plan B) | Bank đề | 4 tuần buffer |
| Parental consent flow | QA | 1 tuần buffer |

---

## Ý nghĩa thực tế

> **Focus toàn bộ engineering effort vào Critical Path:**
> - Tuần 1-2: Founder + AI biên soạn bank đề. KHÔNG làm UI.
> - Tuần 3-6: Prompt engineering Dual-Scaffolding. KHÔNG làm landing page.
> - Tuần 7-8: Tool verify + QA. Bắt đầu recruit pilot HS.
> - Tuần 9-12: Pilot chạy. Thu retention data. Quyết định NEXT.

> **Data Pipeline (bank đề) + Legal/Privacy (parental consent) nằm trên hoặc gần Critical Path** — đúng pattern AI startup.

---

## Self-check

- [x] Plan B cụ thể với vendor + cost (không generic "tìm cách khác")
- [x] Có Plan B cho mọi Tier 1 dependency (Gemini → Claude/GPT switch)
- [x] Critical Path có content pipeline (bank đề = data pipeline của edtech)
- [x] UI/Marketing parallel với Critical Path (không blocking)
- [x] Mỗi dependency có worst-case + cost + timeline cụ thể
