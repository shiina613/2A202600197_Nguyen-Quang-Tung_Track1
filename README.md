# MathHint — AI Tutor for Vietnamese High School Math

**Student:** Nguyễn Quang Tùng (2A202600197)  
**Track:** Track 1 — AI Product Development  
**Program:** AI20K26

---

## 📋 Project Overview

**MathHint** is an AI-powered Socratic tutor for Vietnamese high school mathematics (THPT). Unlike traditional answer-giving apps like Photomath, MathHint guides students through problem-solving with hints, helping them develop critical thinking skills.

### Key Features
- 🎯 **Socratic Method:** Provides 3-5 dynamic hints instead of direct answers
- 👨‍👩‍👧 **Dual-Stakeholder:** Students use the app, parents monitor progress via daily reports
- ✅ **Anti-Hallucination:** SymPy verification ensures 100% accuracy in calculations
- 💰 **Fair Credit System:** Pay-per-use based on actual API costs

### Target Market
- **1.2M students** registered for THPTQG 2026 (Vietnam National High School Exam)
- **Vietnam e-learning market:** $2.0B (2025) → $8.7B (2034), CAGR 17.68%

---

## 📁 Repository Structure

```
.
├── day16/                      # Day 16: Product Specification
│   ├── submission_A.md         # Initial product spec
│   └── submission_final.md     # Final refined spec
│
├── day17/                      # Day 17: Product-Market Fit Analysis
│   └── submission_A.md         # PMF framework & unit economics
│
├── day18/                      # Day 18: Financial Model
│   └── Day18-AI-Product-Finance-Model.xlsx
│
├── day19/                      # Day 19: Pitch Materials
│   ├── pitch_memo.md           # Twitter Pitch (280 chars) + breakdown
│   ├── ai_vc_critique_log.md   # AI VC critique & revisions
│   ├── twitter_pitch.md        # Twitter pitch versions + 60s script
│   ├── NguyenQuangTung_Day19.zip
│   └── ptt/                    # Prototype (HTML/CSS/JS)
│       ├── index.html          # Student chat interface
│       ├── parent.html         # Parent dashboard
│       ├── login.html          # Authentication
│       ├── app.js              # Core logic
│       └── spec.md             # Technical specification
│
└── README.md                   # This file
```

---

## 🎯 Key Milestones

### Day 16: Product Specification
- Defined Socratic tutoring approach
- Designed dual-stakeholder model (student + parent)
- Specified anti-hallucination pipeline (SymPy + RAG)

### Day 17: Product-Market Fit
- **Target metrics:** D7 retention >30%, D30 >15% (vs industry 2%)
- **Unit economics:** LTV/CAC target 6x+, margin 65%
- **Pricing:** 159K VND/month (~$6.50 USD)

### Day 18: Financial Model
- 5-year projection: 200 → 20,000 users
- Break-even: Month 18
- Sensitivity analysis: Gemini pricing, retention, conversion

### Day 19: Pitch Materials
- **Twitter Pitch:** 280-character startup pitch
- **AI VC Critique:** 5 tests (8-second test, insight test, OpenAI threat, numbers test, weakest line)
- **Revisions:** Improved hook, insight, moat, metrics, ask

---

## 💡 Key Insights

### 1. The Problem
Vietnamese parents pay **2M VND/month** ($80) for 1-on-1 math tutors, but 80% still can't help their children with homework. Existing apps (Photomath, Mathway) only provide answers, leading to:
- **2% Day 30 retention** (industry benchmark)
- Students become dependent on answers
- Parents disappointed with lack of learning

### 2. The Insight
**"Parents don't pay for correct answers — they pay for their children to solve problems independently."**

Most people think: Socratic tutoring = students hate it (no direct answers)  
**Reality:** Gamification + "I solved it myself" feeling = stronger dopamine hit than getting answers

### 3. The Solution
- **Socratic hints:** Guide students step-by-step without giving answers
- **Parent dashboard:** Daily reports showing progress and self-solving rate
- **SymPy verification:** 100% accuracy in mathematical calculations
- **Credit system:** Fair pricing based on actual API usage

### 4. Competitive Moat
1. **Trust moat:** SymPy verification → 100% accuracy (vs OpenAI 80-85%)
2. **Data moat:** 90 days of progress reports = context history (high switching cost)
3. **Curriculum moat:** 500+ curated Vietnamese THPT problems (500+ hours of work)

---

## 📊 Projected Metrics

### Target (Post-Pilot)
- **D7 retention:** >30% (industry: 5-10%)
- **D30 retention:** >15% (industry: 2%)
- **Self-solving rate:** >70% (≤2 hints)
- **Conversion:** >10% free→paid
- **NPS:** >50

### Unit Economics
- **LTV:** 763K VND (8 months × 159K × 60% retention)
- **CAC:** 120K VND (Facebook Ads)
- **LTV/CAC:** 6.4x
- **Payback:** 4.2 months
- **Margin:** 65% (Gemini 2.5 Flash Lite)

---

## 🚀 Funding Ask

**150M VND pre-seed** to validate PMF in 6 months:

| Milestone | Timeline | Budget | Success Criteria |
|:---|:---:|:---:|:---|
| Run pilot 50→200 users | Month 1-4 | 50M | D7 >30%, D30 >15% |
| Validate pricing | Month 2-5 | 30M | Conversion >10%, LTV/CAC >3x |
| Build knowledge base | Month 1-4 | 40M | 200 curated problems |
| Iterate product | Month 3-6 | 30M | NPS >50, self-solve >70% |

**Go/No-Go after 6 months:**
- ✅ **GO:** D30 >15%, Conversion >10%, NPS >50 → Raise 500M VND seed to scale 200→2,000 users
- ❌ **NO-GO:** Pivot to B2B (white-label for schools) or shutdown

---

## 🛠️ Tech Stack

### AI/ML
- **LLM:** Gemini 2.5 Flash Lite ($0.10/$0.40 per 1M tokens)
- **RAG:** ChromaDB + curated Vietnamese curriculum
- **Verification:** SymPy (Python symbolic math library)
- **Gateway:** Intent classification (Explain vs Hint) + prerequisite checking

### Frontend
- **Student UI:** HTML/CSS/JS (chat interface)
- **Parent Dashboard:** Progress tracking, daily reports
- **Auth:** Simple login system

### Backend (Planned)
- **API:** Node.js/Express or Python/FastAPI
- **Database:** PostgreSQL (user data, problem history)
- **Storage:** S3 (problem images, solutions)

---

## 📈 Market Opportunity

### TAM (Total Addressable Market)
- Vietnam e-learning: **$2.0B** (2025) → **$8.7B** (2034)
- 1.2M students taking THPTQG 2026

### SAM (Serviceable Addressable Market)
- 252K families willing to pay 100-200K/month
- **$192M/year** (480B VND)

### SOM (Serviceable Obtainable Market)
- Year 1: 200 users (0.08% SAM)
- Year 2: 2,000 users (0.8% SAM)
- Year 5: 20,000 users (8% SAM)

---

## 🎓 Why Now?

1. **LLM costs dropped 90%:** GPT-4 $30/1M → Gemini $0.10/1M (2023-2026)
2. **E-learning boom:** Vietnam market growing 17.68% CAGR
3. **THPTQG 2026:** 1.2M students registered (highest ever)

---

## 👤 About the Founder

**Nguyễn Quang Tùng**
- 5 years AI/ML engineer (NLP, LLM fine-tuning)
- 3 years math tutoring experience (understands pain points)
- Track record: 2 AI products (1 acquired, 1 profitable)

---

## 📞 Contact

- **Email:** quangtung@mathhint.vn
- **Phone:** 0123-456-789
- **Demo:** https://mathhint.vn/demo
- **GitHub:** https://github.com/shiina613/2A202600197_Nguyen-Quang-Tung_Track1

---

## 📝 License

This project is part of the AI20K26 program coursework.

---

## 🙏 Acknowledgments

- **AI20K26 Program** for the structured curriculum
- **Advisors:** Math teachers and edtech experts who provided feedback
- **Early testers:** Students and parents who helped validate the concept

---

**Last Updated:** May 6, 2026
