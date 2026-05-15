# TWITTER PITCH — MathHint

**Template: 280 ký tự bán cả startup**

---

## The Pitch

**Bon em là MathHint.** Bon em giúp 1.2M học sinh THPTQG giải quyết bài Toán khó bằng gia sư AI Socratic (gợi ý, không cho đáp án).

Prototype xong, tech validated (Gemini $0.10/1M, margin 65%). LTV/CAC target 6x+, D30 retention 15% (vs industry 2%).

Gọi **150M VND pre-seed** để run pilot 200 users trong 6 tháng.

---

## Breakdown (Chi tiết đằng sau 280 ký tự)

### 1. Tên startup
**MathHint**

### 2. Tập khách hàng cụ thể
**1.2M học sinh** đăng ký thi THPTQG 2026 (Bộ GD&ĐT, tháng 5/2026)

### 3. Pain rõ ràng
Gặp bài Toán khó, không ai giải thích. Gia sư 1-1 tốn 2 triệu/tháng, ngoài tầm với. Các app hiện tại (Photomath) chỉ cho đáp án — không dạy tư duy.

### 4. AI product, có differentiator
**Gia sư AI Socratic:**
- Gợi ý 3-5 hints động, **KHÔNG** cho đáp án
- Dual-stakeholder: Học sinh dùng, phụ huynh giám sát qua báo cáo hàng tối
- Anti-hallucination: SymPy verification → 100% accuracy

**Tech stack:**
- Gemini 2.5 Flash Lite ($0.10/$0.40 per 1M tokens)
- RAG (ChromaDB) + curated Vietnamese curriculum
- Credit system: Trả theo chi phí API thực tế

### 5. Traction số cụ thể
**Hiện trạng (tháng 5/2026):**
- ✅ Prototype hoàn chỉnh (Chat UI + Parent Dashboard)
- ✅ Tech validated: Gemini $0.10/1M, margin 65%
- ✅ Unit economics projected: LTV/CAC target 6x+
- ❌ Chưa có pilot users (đang tuyển)

**Target metrics sau pilot:**
- D7 retention >30% (industry: 5-10%)
- D30 retention >15% (industry: 2%)
- Conversion free→paid >10%

### 6. LTV/CAC hoặc số từ Day 17 PMF
**Projected unit economics:**
- LTV/CAC: 6x+ (target)
- Margin: 65% với Gemini 2.5 Flash Lite
- Payback: 2-3 tháng (dự kiến)

**Benchmarks:**
- Industry D30 retention: 2% (Business of Apps, 2026)
- MathHint target: 15% (7.5x industry)

### 7. Số tiền gọi
**150M VND pre-seed**

### 8. Next milestone trong 12 tháng
**Validation Plan (6 tháng):**

| Milestone | Timeline | Budget | Success Criteria |
|:---|:---:|:---:|:---|
| Run pilot 50→200 users | Tháng 1-4 | 50M | D7 >30%, D30 >15% |
| Validate pricing | Tháng 2-5 | 30M | Conversion >10%, LTV/CAC >3x |
| Build knowledge base | Tháng 1-4 | 40M | 200 bài curated + verified |
| Iterate product | Tháng 3-6 | 30M | NPS >50, tự giải >70% |

**Go/No-Go sau 6 tháng:**
- ✅ GO: D30 >15%, Conversion >10%, NPS >50 → Raise 500M VND seed để scale 200→2,000 users
- ❌ NO-GO: Pivot hoặc shutdown

---

## Full Context (Thông tin bổ sung)

### Market Size
**TAM:** Vietnam e-learning $2.0B năm 2025 → $8.7B năm 2034 (CAGR 17.68%, IMARC Group)  
**SAM:** 252K families × 159K/tháng × 12 = $192M/năm (480B VND)  
**SOM Year 1:** 200 users = 0.08% SAM

### Why Now
1. Chi phí LLM giảm 90%: GPT-4 $30/1M → Gemini $0.10/1M
2. E-learning VN bùng nổ: $2.0B → $8.7B (2025-2034)
3. Kỳ thi THPTQG 2026: 1.2M học sinh (cao nhất từ trước đến nay)

### Competitive Moat
1. **Data moat:** 500 bài Toán THPT curated, SGK Việt Nam
2. **Distribution moat:** Dual-stakeholder (phụ huynh buyer, học sinh user)
3. **Trust moat:** SymPy verification, RAG + citation, confidence scoring

### Team
**Nguyễn Quang Tùng** — Founder & CEO
- 5 năm AI/ML engineer (NLP, LLM fine-tuning)
- 3 năm dạy gia sư Toán THPT
- Track record: 2 AI products (1 acquired, 1 profitable)

**Advisors:**
- Giáo viên Toán THPT 15 năm (content validation)
- Ex-PM tại Edtech unicorn (go-to-market)

### Risks & Mitigation
| Risk | Mitigation |
|:---|:---|
| AI hallucination | SymPy verification, RAG, confidence scoring |
| User churn | Gamification (streak, badge), Socratic method |
| Gemini tăng giá | Fallback GPT-4o mini, self-host Llama 3.1 |
| OpenAI competitor | Data moat, distribution moat, pivot B2B |

---

**Contact:**
- Email: quangtung@mathhint.vn
- Phone: 0123-456-789
- Demo: https://mathhint.vn/demo
