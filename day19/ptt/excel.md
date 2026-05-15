# MathHint — Financial Model Input Sheet

> **Hướng dẫn:** Điền các giá trị vào các ô được đánh dấu `[ĐIỀN VÀO]` theo 3 kịch bản: Optimistic, Base, Pessimistic

---

## Tab 1 — ASSUMPTIONS / Giả định đầu vào

### 1. Product & Pricing / Sản phẩm & Giá

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **ARPU — Giá bán bình quân/khách/tháng** | 179,000 | 159,000 | 119,000 | VNĐ |
| **Adoption rate — % TAM chuyển thành khách hàng** | 5.0% | 2.5% | 1.0% | %/tháng |
| **Total addressable market (số khách tiềm năng)** | 50,000 | 60,000 | 60,000 | khách |

**Gợi ý tính ARPU:**
```
ARPU = (Revenue từ tất cả tiers) / (Tổng số paying users)

Ví dụ với phân bố:
- 40 Plus × 129K = 5,160K
- 12 Pro × 159K = 1,908K
- 3 Team × 329K = 987K
- 2 Team Plus × 499K = 998K
─────────────────────────
Total: 9,053K / 65 users = 139K/user

Nhưng nếu tính theo "khách hàng" (không phải users):
65 paying customers → 9,053K / 65 = 139K
Hoặc theo "accounts": 57 accounts → 9,053K / 57 = 159K
```

---

### 2. COGS / Chi phí biến đổi trên mỗi khách hàng

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **API cost / khách / tháng** | 20,000 | 25,000 | 30,000 | VNĐ |
| **Hidden costs (monitoring, support, QA)** | 5,000 | 10,000 | 15,000 | VNĐ |
| **Infrastructure (server/cloud) / khách** | 8,000 | 15,000 | 15,000 | VNĐ |
| **→ Tổng COGS / khách / tháng** | 33,000 | 50,000 | 60,000 | VNĐ |

**Gợi ý tính API cost:**
```
Từ economic.md (Credit-based 6/20/40):
- Free user: $0.14/tháng = 3,500 VNĐ
- Plus user: $0.45/tháng = 11,250 VNĐ
- Pro user: $0.90/tháng = 22,500 VNĐ
- Team (3 users): $1.35/tháng = 33,750 VNĐ → 11,250 VNĐ/user
- Team Plus (5 users): $2.26/tháng = 56,500 VNĐ → 11,300 VNĐ/user

Weighted average (100 users):
($67.32 / 100 users) × 25,000 = 16,830 VNĐ/user/tháng

Hoặc chỉ tính paying users (65 users):
($67.32 - $7.56) / 65 × 25,000 = 23,015 VNĐ/user/tháng

Base case: 25,000 VNĐ (conservative, có buffer cho growth)
```

**Gợi ý tính Hidden costs:**
```
Dù không cần labeling/retraining, vẫn có chi phí ẩn:

1. Monitoring & Logging:
   - Error tracking (Sentry, Datadog)
   - Performance monitoring
   - Cost: ~3,000-5,000 VNĐ/user/tháng

2. Customer Support:
   - Email support
   - Bug reports handling
   - User feedback processing
   - Cost: ~2,000-5,000 VNĐ/user/tháng

3. QA & Testing:
   - Manual testing new features
   - Regression testing
   - User acceptance testing
   - Cost: Phân bổ từ salary, ~3,000-5,000 VNĐ/user/tháng

4. Content Updates:
   - Cập nhật knowledge base
   - Thêm bài tập mới
   - Review quality
   - Cost: ~2,000-3,000 VNĐ/user/tháng

Optimistic: 5,000 VNĐ (minimal support, automated monitoring)
Base: 10,000 VNĐ (standard support, regular updates)
Pessimistic: 15,000 VNĐ (high-touch support, frequent updates)
```

**Gợi ý tính Infrastructure:**
```
Từ economic.md: $60/tháng infrastructure cho 100 users
= $0.60/user/tháng = 15,000 VNĐ/user/tháng

Base case: 15,000 VNĐ
```

---

### 3. Customer Behavior / Hành vi khách hàng

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **Monthly Churn Rate — % khách rời mỗi tháng** | 3.0% | 5.0% | 8.0% | % |
| **→ Số tháng ở lại trung bình** | 33.3 tháng | 20.0 tháng | 12.5 tháng | tháng |

**Công thức:**
```
Số tháng ở lại = 1 / Churn Rate

Ví dụ:
- Churn 3.0% → 1/0.03 = 33.3 tháng
- Churn 5.0% → 1/0.05 = 20.0 tháng
- Churn 8.0% → 1/0.08 = 12.5 tháng
```

---

### 4. Sales & Marketing / Chi phí thu hút khách

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **CAC — Tổng chi phí có 1 khách hàng mới** | 100,000 | 180,000 | 300,000 | VNĐ |

**Gợi ý:**
```
CAC phụ thuộc vào chiến lược marketing:

Optimistic (viral growth, word-of-mouth):
- CAC = 100,000 VNĐ (Facebook Ads, referral program)

Base (balanced marketing):
- CAC = 180,000 VNĐ (Google Ads, content marketing, influencer)

Pessimistic (paid acquisition heavy):
- CAC = 300,000 VNĐ (aggressive paid ads, high competition)

Rule of thumb: LTV/CAC > 3x là healthy
```

---

### 5. Fixed Costs / Chi phí cố định hàng tháng

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **Salaries — Lương team (PM/Dev/Designer)** | 60,000,000 | 90,000,000 | 120,000,000 | VNĐ/tháng |
| **Office, tools, admin** | 8,000,000 | 10,000,000 | 15,000,000 | VNĐ/tháng |
| **Marketing budget hàng tháng** | 40,000,000 | 25,000,000 | 15,000,000 | VNĐ/tháng |
| **→ Tổng Fixed Cost / tháng** | 108,000,000 | 125,000,000 | 150,000,000 | VNĐ/tháng |

**Gợi ý:**

**Salaries:**
```
Optimistic (lean team, junior):
- 1 PM: 15M
- 2 Devs: 20M × 2 = 40M
- 1 Designer: 10M
Total: 65M (tương đương $2,600)

Base (balanced team):
- 1 PM: 25M
- 2 Senior Devs: 30M × 2 = 60M
- 1 Designer: 15M
Total: 100M (tương đương $4,000)

Pessimistic (experienced team):
- 1 Senior PM: 35M
- 3 Senior Devs: 35M × 3 = 105M
- 1 Senior Designer: 20M
Total: 160M (tương đương $6,400)
```

**Office, tools, admin:**
```
Optimistic: 8M (remote, minimal tools)
Base: 10M (small office, standard tools)
Pessimistic: 15M (office rent, premium tools)
```

**Marketing budget:**
```
Optimistic: 40M (organic growth, content marketing)
Base: 25M (balanced paid + organic)
Pessimistic: 15M (limited budget, slow growth)
```

---

### 6. Initial Investment / Vốn đầu tư ban đầu

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **Vốn đầu tư ban đầu (build MVP, setup)** | 10,000,000 | 20,000,000 | 30,000,000 | VNĐ |
| **Phí gọi vốn (legal, pitch deck, advisor)** | 200,000,000 | 250,000,000 | 300,000,000 | VNĐ |
| **Tiền mặt ban đầu (sau khi đã trừ vốn đầu tư + phí gọi vốn)** | 150,000,000 | 300,000,000 | 450,000,000 | VNĐ |

**Gợi ý:**

**Vốn đầu tư MVP:**
```
Optimistic: 10M (prototype, minimal features)
Base: 20M (full MVP, basic features)
Pessimistic: 30M (polished MVP, advanced features)
```

**Phí gọi vốn:**
```
Bao gồm:
1. Legal & Documentation (20-50M):
   - Thành lập công ty
   - Shareholder agreement
   - Term sheet negotiation
   - Due diligence support

2. Pitch Deck & Materials (20-40M):
   - Professional pitch deck design
   - Financial model
   - Market research
   - Demo video

3. Advisor & Consultant (100-150M):
   - Fundraising advisor (2-5% deal size)
   - Business consultant
   - Financial advisor
   - Mentor fees

4. Networking & Events (20-40M):
   - Startup events
   - Investor meetings
   - Travel expenses
   - Demo day participation

5. Contingency (40-60M):
   - Unexpected costs
   - Extended fundraising timeline
   - Additional rounds

Optimistic: 200M (standard, Series A)
Base: 250M (competitive, multiple investors)
Pessimistic: 300M (extended timeline, multiple rounds)

**Margin tối thiểu để không âm:**
Với phí gọi vốn cao hơn, cần margin cao hơn để đạt profitability sớm.

Tính toán ngược:
- Revenue (100 users): $364.40/tháng = 9.1M VNĐ
- Infrastructure: $60/tháng = 1.5M VNĐ
- Max LLM cost để break-even: $304.40/tháng = 7.6M VNĐ

Current LLM cost (6/20/40): $67.32/tháng = 1.68M VNĐ
→ Có thể tăng LLM cost lên 4.5x mà vẫn break-even!

**Margin tối thiểu theo phí gọi vốn:**

Giả định Fixed Cost = 125M/tháng, Cash = 300M (12 tháng runway)

Phí gọi vốn 200M:
- Total raise needed: 200M + 300M + 20M = 520M
- Months to profitability: ~8-10 tháng
- Margin tối thiểu: 40% (để đạt profitability trước khi hết cash)

Phí gọi vốn 250M:
- Total raise needed: 250M + 300M + 20M = 570M
- Months to profitability: ~10-12 tháng
- Margin tối thiểu: 50% (để đạt profitability trong runway)

Phí gọi vốn 300M:
- Total raise needed: 300M + 300M + 20M = 620M
- Months to profitability: ~12-15 tháng
- Margin tối thiểu: 60% (để đạm profitability và có buffer)

**Kết luận:**
Với margin hiện tại 65%, bạn có thể thoải mái chọn phí gọi vốn 200-300M.
Recommend: 250M (base case) - Vừa đủ professional, vừa có buffer.
```

**Tiền mặt ban đầu:**
```
Optimistic: 150M (6 tháng runway với fixed cost 65M + marketing 40M)
Base: 300M (12 tháng runway với fixed cost 100M + marketing 25M)
Pessimistic: 450M (18 tháng runway với fixed cost 160M + marketing 15M)

Lưu ý: Đây là tiền mặt SAU KHI đã trừ:
- Vốn đầu tư MVP
- Phí gọi vốn

**Total raise needed:**
Optimistic: 10M + 200M + 150M = 360M
Base: 20M + 250M + 300M = 570M
Pessimistic: 30M + 300M + 450M = 780M
```

---

### 7. Discount Rate / Tỷ suất chiết khấu (cho NPV)

| Metric | Optimistic | Base | Pessimistic | Đơn vị |
|:---|---:|---:|---:|:---|
| **Annual discount rate (WACC)** | 20.0% | 20.0% | 20.0% | %/năm |
| **→ Monthly discount rate** | 1.5% | 1.5% | 1.5% | %/tháng |

**Công thức:**
```
Monthly rate = (1 + Annual rate)^(1/12) - 1

Ví dụ với 20% annual:
(1.20)^(1/12) - 1 = 1.5309% monthly

Gợi ý:
- Optimistic: 15% (low risk)
- Base: 20% (standard for startups)
- Pessimistic: 25% (high risk)
```

---

### 8. Decision Note / Ghi chú quyết định

**Câu hỏi cần trả lời:**

1. **Tại sao bạn chọn mức ARPU và CAC như trên?**
   - Logic gì để bảo vệ những con số này trước nhà đầu tư?
   
   **ARPU (159K base case):**
   - Dựa trên phân bố thực tế: 40 Plus (129K) + 12 Pro (159K) + 3 Team + 2 Team Plus
   - Weighted average từ 65 paying users = 139K-159K tùy cách tính
   - Base case 159K là conservative, giả định mix có nhiều Pro/Team users hơn
   - Optimistic 179K: nhiều Pro users (30% thay vì 18%)
   - Pessimistic 119K: chủ yếu Plus users, ít Pro/Team
   
   **CAC (180K base case):**
   - LTV/CAC ratio = (159K × 20 tháng) / 180K = 17.7x (rất healthy, >3x benchmark)
   - Base 180K: Google Ads (~50K/click × 3-4 clicks) + content marketing + influencer
   - Optimistic 100K: viral growth, referral program mạnh, word-of-mouth
   - Pessimistic 300K: paid ads đắt, competition cao, conversion thấp
   - Với margin 65%, có thể afford CAC cao mà vẫn profitable

2. **Toàn Việt Nam có khoảng 960,000 học sinh THPT.**
   - Quá chi phí thị Pay as you go.
   - Không cần label, retrain vì các model hiện tại đã đủ tốt.
   - QA sẽ do luôn team DEV a.k.a founder chịu trách nhiệm.
   
   **TAM Analysis:**
   - Total: 960,000 học sinh THPT
   - SAM (Serviceable Available Market): ~300,000 (31%)
     - Học sinh có smartphone/laptop + internet
     - Gia đình có khả năng chi trả 129K-159K/tháng
     - Khu vực thành thị + tỉnh lớn
   - SOM (Serviceable Obtainable Market): 50,000-60,000 (5-6% SAM)
     - Target trong 3-5 năm đầu
     - Tập trung vào early adopters: học sinh lớp 11-12, chuẩn bị thi THPTQG
   
   **Adoption rate:**
   - Base 2.5%/tháng = 30%/năm (realistic cho edtech B2C)
   - Optimistic 5%/tháng = viral growth với referral program mạnh
   - Pessimistic 1%/tháng = slow growth, cần nhiều marketing
   
   **Hidden costs (10K base case):**
   - **Không cần labeling/retraining:** Gemini 2.5 Flash Lite đã được train sẵn
   - **Nhưng vẫn có chi phí ẩn:**
     - Monitoring & Logging: Error tracking, performance monitoring (~3-5K)
     - Customer Support: Email support, bug reports (~2-5K)
     - QA & Testing: Manual testing, regression testing (~3-5K, phân bổ từ salary)
     - Content Updates: Cập nhật knowledge base, thêm bài tập (~2-3K)
   - **Credit system:** Trừ theo API cost thực tế, không cần estimate trước
   
   **Tại sao không Pay-as-you-go:**
   - Chi phí LLM thấp ($0.0012/credit) → không cần charge per-use
   - Subscription tạo predictable revenue, dễ forecast
   - Tâm lý: học sinh thích "unlimited" hơn là lo hết quota
   - Churn thấp hơn: đã trả tiền → có động lực dùng thường xuyên
   - **Credit system:** Công bằng hơn - user giỏi giải nhiều bài, user yếu giải ít bài

---

### Công thức tự động tính

### Tổng COGS:
```
Tổng COGS = API cost + Hidden costs + Infrastructure
```

### Số tháng ở lại:
```
Số tháng ở lại = 1 / (Churn Rate / 100)
```

### Tổng Fixed Cost:
```
Tổng Fixed Cost = Salaries + Office + Marketing budget
```

### Tổng Initial Investment:
```
Tổng Initial Investment = Vốn đầu tư MVP + Phí gọi vốn
```

### Cash Available:
```
Cash Available = Tiền mặt ban đầu (đã trừ Initial Investment)
```

### Monthly discount rate:
```
Monthly rate = (1 + Annual rate / 100)^(1/12) - 1
```

---

## Gợi ý giá trị cho 3 kịch bản

### Kịch bản OPTIMISTIC (Lạc quan):
- ARPU cao (179K) - nhiều Pro users
- Adoption rate cao (5%) - viral growth
- COGS thấp (33K) - efficient operations, minimal support
- Churn thấp (3%) - high retention
- CAC thấp (100K) - word-of-mouth
- Fixed cost thấp (108M) - lean team

### Kịch bản BASE (Cơ sở):
- ARPU trung bình (159K) - phân bố chuẩn
- Adoption rate trung bình (2.5%) - steady growth
- COGS trung bình (50K) - realistic operations, standard support
- Churn trung bình (5%) - normal retention
- CAC trung bình (180K) - balanced marketing
- Fixed cost trung bình (125M) - standard team

### Kịch bản PESSIMISTIC (Bi quan):
- ARPU thấp (119K) - nhiều Free/Plus users
- Adoption rate thấp (1%) - slow growth
- COGS cao (60K) - high-touch support, frequent updates
- Churn cao (8%) - low retention
- CAC cao (300K) - expensive acquisition
- Fixed cost cao (150M) - large team

---

## Tham khảo từ economic.md

### Chi phí LLM (Gemini 2.5 Flash Lite) - Credit System 6/20/40:
- Free: $0.14/tháng = 3,500 VNĐ (6 credits/ngày)
- Plus: $0.45/tháng = 11,250 VNĐ (20 credits/ngày)
- Pro: $0.90/tháng = 22,500 VNĐ (40 credits/ngày)
- Team: $1.35/tháng = 33,750 VNĐ (3 users × 20 credits)
- Team Plus: $2.26/tháng = 56,500 VNĐ (5 users × 20 credits)

### Pricing:
- Free: 0đ (6 credits = ~4 bài mix)
- Plus: 129,000đ (20 credits = ~12 bài mix)
- Pro: 159,000đ (40 credits = ~24 bài mix)
- Team: 329,000đ (3 users × 20 credits)
- Team Plus: 499,000đ (5 users × 20 credits)

### Phân bố users (100 users):
- 35 Free
- 40 Plus
- 12 Pro
- 3 Team (9 users)
- 2 Team Plus (10 users)

### Revenue & Cost (100 users) - Credit System:
- Total revenue: $364.40/tháng = 9,110,000 VNĐ
- LLM cost: $67.32/tháng = 1,683,000 VNĐ
- Infrastructure: $60/tháng = 1,500,000 VNĐ
- Total cost: $127.32/tháng = 3,183,000 VNĐ
- Net profit: $237.08/tháng = 5,927,000 VNĐ
- Margin: 65.1%

### Credit System Benefits:
- ✅ **Công bằng:** Credit trừ theo API cost thực tế
- ✅ **Số đẹp:** 6, 20, 40 - Dễ nhớ, dễ marketing
- ✅ **Margin cao:** 65.1% (cao hơn Fixed 61.7%)
- ✅ **Chặn abuse:** 40/5 = 8 ≈ Free 6
- ✅ **Gamification:** User có động lực học giỏi hơn

---

**Lưu ý:** Tỷ giá quy đổi: 1 USD = 25,000 VNĐ
