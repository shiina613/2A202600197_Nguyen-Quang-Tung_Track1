# 💰 MathHint — Business Economics & Pricing Strategy

> **Version:** 1.1 | **Last updated:** 2026-05-05
> **Primary Model:** Gemini 2.5 Flash Lite — $0.10 input / $0.40 output per 1M tokens
> **Fallback Model:** GPT-4o mini — $0.15 input / $0.60 output per 1M tokens

---

## 📋 TABLE OF CONTENTS

1. [Pricing Strategy](#pricing-strategy)
2. [Cost Analysis](#cost-analysis)
3. [Worst-Case Scenarios](#worst-case-scenarios)
4. [API Fallback Strategy](#api-fallback-strategy)
5. [Data Validation Plan](#data-validation-plan)
6. [Financial Projections](#financial-projections)

---

## 🎯 PRICING STRATEGY

### Credit System Overview

**⚠️ LƯU Ý QUAN TRỌNG:**
- **Quy đổi dưới đây chỉ là ước tính cho marketing** (để user dễ hiểu)
- **Thực tế technical:** Credit bị trừ theo **chi phí API thực tế** mà user tiêu
- **Công thức:** `credits_deducted = (actual_API_cost / base_cost_per_credit)`

**Quy đổi Credit ước tính (cho marketing):**

| Độ khó | Turns ước tính | Chi phí ước tính | Credits ước tính | Thời gian | Ví dụ |
|:---|:---:|:---:|:---:|:---:|:---|
| **Dễ** | ~3 turns | ~$0.0007 | ~1 credit | ~4 phút | PT bậc 1, đạo hàm cơ bản |
| **Trung bình** | ~5 turns | ~$0.0012 | ~2 credits | ~9 phút | Cực trị, lượng giác cơ bản |
| **Khó** | ~7 turns | ~$0.0017 | ~3 credits | ~15 phút | Tích phân từng phần, hàm hợp |

**Thực tế technical:**
```python
# Base cost per credit (để quy đổi)
BASE_COST_PER_CREDIT = $0.0006  # Tương đương ~1 credit cho bài dễ

# Khi user giải bài:
actual_cost = sum(API_cost_per_turn)  # Chi phí thực tế từ Gemini
credits_to_deduct = actual_cost / BASE_COST_PER_CREDIT

# Ví dụ:
# - Bài dễ (3 turns): $0.0007 / $0.0006 = 1.17 credits
# - Bài TB (5 turns): $0.0012 / $0.0006 = 2.00 credits
# - Bài khó (7 turns): $0.0017 / $0.0006 = 2.83 credits
# - Bài cực khó (10 turns): $0.0024 / $0.0006 = 4.00 credits
```

**Lợi ích của cách tính này:**
- ✅ **Công bằng tuyệt đối:** Trả đúng cho những gì tiêu
- ✅ **Linh hoạt:** Không cần AI detect difficulty trước
- ✅ **Transparent:** User thấy rõ mỗi turn tốn bao nhiêu
- ✅ **Chống game:** Không thể "hack" bằng cách chọn bài dễ

### Pricing Tiers (Credit-Based)

**⚠️ Quy đổi bài/credits dưới đây là ước tính cho marketing. Thực tế credit bị trừ theo chi phí API thực tế.**

| Tier | Giá | Members | Credits/người | Bài dễ* | Bài TB* | Bài khó* | Mix* (40/40/20) | Thời gian* | OTP | Chi phí | Margin |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Free** | 0đ | 1 | 6 credits | ~6 bài | ~3 bài | ~2 bài | ~4 bài | 25-30 phút | ❌ | $0.14 | N/A |
| **Plus** | 129K | 1 | 20 credits | ~20 bài | ~10 bài | ~6-7 bài | ~12 bài | 1.2-1.5 giờ | ❌ | $0.45 | 91.3% |
| **Pro** | 159K | 1 | 40 credits | ~40 bài | ~20 bài | ~13 bài | ~24 bài | 2.8-3.2 giờ | ✅ | $0.90 | 85.9% |
| **Team** | 329K | 3 | 20 credits | ~20 bài | ~10 bài | ~6-7 bài | ~12 bài | 1.2-1.5 giờ | ❌ | $1.35 | 89.8% |
| **Team Plus** | 499K | 5 | 20 credits | ~20 bài | ~10 bài | ~6-7 bài | ~12 bài | 1.2-1.5 giờ | ❌ | $2.26 | 88.7% |

**Ghi chú:**
- **\* Ước tính cho marketing:** Số bài thực tế phụ thuộc vào chi phí API user tiêu
- **Mix (40/40/20):** Giả định user giải 40% bài dễ, 40% bài TB, 20% bài khó
- **Thời gian:** Tính theo mix thực tế (4 phút × 40% + 9 phút × 40% + 15 phút × 20%)
- **Công bằng:** User giỏi (ít turns) → Nhiều bài hơn. User yếu (nhiều turns) → Ít bài hơn nhưng value tương đương
- **Thực tế technical:** `credits_deducted = actual_API_cost / $0.0006`

### Pricing Psychology

**1. Anchoring — Pro chỉ đắt hơn 30K**
```
Plus: 129K (20 credits = 10-12 bài) ────┐
                                         │ +30K (23%)
Pro:  159K (40 credits = 20-24 bài) ────┘ → "Thêm 30K tăng gấp 2x credits!"
```

**2. Decoy Effect — Team làm Plus trông hợp lý**
- Solo: Plus 129K/người (20 credits)
- Nhóm 3: Team 329K → 110K/người (20 credits, rẻ hơn 19K)
- Nhóm 5: Team Plus 499K → 100K/người (20 credits, rẻ hơn 29K)

**3. Price Points tâm lý**
- Plus: 129K (dưới 150K)
- Pro: 159K (dưới 200K)
- Team: 329K (dưới 350K)
- Team Plus: 499K (just under 500K)

**4. Credit System Benefits**
- ✅ **Công bằng:** Bài khó tốn nhiều credits hơn
- ✅ **Linh hoạt:** User tự chọn giải bài dễ (nhiều bài) hay khó (ít bài)
- ✅ **Gamification:** Khuyến khích cải thiện skill để giải nhiều bài hơn
- ✅ **Transparent:** User biết rõ mỗi bài tốn bao nhiêu credits
- ✅ **Số đẹp:** 6, 20, 40 - Dễ nhớ, dễ tính

---

## 💵 CHI TIẾT TỪNG GÓI

### 🆓 FREE — 6 credits/ngày

**Tương đương ước tính (cho marketing):**
- ~6 bài dễ (24 phút)
- ~3 bài trung bình (27 phút)
- ~2 bài khó (30 phút)
- **Mix thực tế:** ~4 bài (25-30 phút học)

**⚠️ Thực tế:** Credit bị trừ theo chi phí API thực tế. Nếu user giỏi (ít turns) → Giải được nhiều bài hơn.

**Economics:**
- Chi phí: $0.14/user/tháng
- Revenue: $0
- Margin: N/A (loss leader)

**Referral bonus:**
- Mời 1 bạn → +2 credits/ngày (max 12 credits/ngày)
- Max tương đương: ~8 bài mix (50-60 phút)

**Target:**
- Hook users mới
- Viral growth
- Conversion funnel

---

### 💙 PLUS — 20 credits/ngày (129K VND)

**Tương đương ước tính (cho marketing):**
- ~20 bài dễ (1.3 giờ)
- ~10 bài trung bình (1.5 giờ)
- ~6-7 bài khó (1.5-1.75 giờ)
- **Mix thực tế:** ~12 bài (1.2-1.5 giờ học)

**⚠️ Thực tế:** Credit bị trừ theo chi phí API thực tế. User giỏi có thể giải 14-16 bài, user yếu 8-10 bài.

**Economics:**
- Chi phí: $0.45/user/tháng
- Revenue: $5.20/tháng
- Gross margin: 91.3%
- Target: 70-80% paid users

**Lý do chọn 20 credits:**
- Đủ cho 80% users (Casual + Regular)
- Học đều đặn, bền vững (1.2-1.5 giờ/ngày)
- Số đẹp, dễ nhớ
- Không quá nhiều → Khuyến khích upgrade Pro

---

### 🔥 PRO — 40 credits/ngày + OTP (159K VND)

**Tương đương ước tính (cho marketing):**
- ~40 bài dễ (2.7 giờ)
- ~20 bài trung bình (3 giờ)
- ~13 bài khó (3.25 giờ)
- **Mix thực tế:** ~24 bài (2.8-3.2 giờ học)

**⚠️ Thực tế:** Credit bị trừ theo chi phí API thực tế. User giỏi có thể giải 28-32 bài, user yếu 16-20 bài.

**Thời gian học tương ứng:**
- Typical: 16-20 bài mix (2-2.5 giờ) ✅ Hợp lý cho power users
- Max: 24-28 bài mix (2.8-3.5 giờ) ⚠️ Chỉ trong mùa ôn thi

**OTP khi đổi thiết bị:**
- 1 thiết bị active cùng lúc
- OTP qua email khi login thiết bị mới
- Không giới hạn số lần đổi

**Economics:**
- Chi phí: $0.90/user/tháng
- Revenue: $6.40/tháng
- Gross margin: 85.9%
- Target: 15-20% paid users

**Lý do chọn 40 credits:**
- **Thực tế sử dụng:** 16-20 bài mix/ngày = 2-2.5 giờ học (hợp lý cho power users)
- **Buffer cho mùa thi:** 40 credits cho phép học nhiều hơn trong 1-2 tháng ôn thi (2.8-3.2 giờ)
- **⭐ Chặn abuse (lý do chính):** 40 credits / 5 người = 8 credits/người
  - 8 credits ≈ 4 bài TB hoặc 2-3 bài khó (ước tính)
  - Tương đương Free (6 credits ≈ 3 bài TB)
  - Không hấp dẫn để share!
- **Số đẹp:** 40 = 2 × 20 (gấp đôi Plus)
- **Không khuyến khích overwork:** >40 credits = >3.5 giờ chỉ Toán (không bền vững)

---

### 👨‍👩‍👦 TEAM — 3 members, 20 credits/người (329K VND)

**Tương đương ước tính mỗi người (cho marketing):**
- ~20 bài dễ (1.3 giờ)
- ~10 bài trung bình (1.5 giờ)
- ~6-7 bài khó (1.5-1.75 giờ)
- **Mix thực tế:** ~12 bài (1.2-1.5 giờ học)

**⚠️ Thực tế:** Credit bị trừ theo chi phí API thực tế của từng member.

**Pricing logic:**
```
3 × Plus (129K) = 387K
Discount 15% → 329K
Tiết kiệm: 58K
```

**Economics:**
- Chi phí: $1.35/team/tháng
- Revenue: $13.20/tháng
- Gross margin: 89.8%
- Giá/người: 110K (rẻ hơn Plus 19K)

**Target:**
- Gia đình 2-3 con THPT (70%)
- Nhóm bạn học 3 người (30%)

**Anti-abuse:**
- 20 credits/người (không share được)
- Mỗi member có account riêng

---

### 👨‍👩‍👧‍👦 TEAM PLUS — 5 members, 20 credits/người (499K VND)

**Tương đương ước tính mỗi người (cho marketing):**
- ~20 bài dễ (1.3 giờ)
- ~10 bài trung bình (1.5 giờ)
- ~6-7 bài khó (1.5-1.75 giờ)
- **Mix thực tế:** ~12 bài (1.2-1.5 giờ học)

**⚠️ Thực tế:** Credit bị trừ theo chi phí API thực tế của từng member.

**Pricing logic:**
```
5 × Plus (129K) = 645K
Discount 23% → 499K
Tiết kiệm: 146K
```

**Economics:**
- Chi phí: $2.26/team/tháng
- Revenue: $20.00/tháng
- Gross margin: 88.7%
- Giá/người: 100K (rẻ hơn Plus 29K)

**Target:**
- Gia đình 4-5 con THPT (40%)
- Lớp học nhỏ / nhóm ôn thi (40%)
- Anh chị em họ cùng học (20%)

**Anti-abuse:**
- 20 credits/người (không share được)
- Mỗi member có account riêng

---

## 📊 COST ANALYSIS

### Chi phí/bài theo skill level (Credit System)

| Skill Level | % Users | Avg turns/bài | Thời gian/bài | Chi phí/bài | Credits/bài |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Weak** (Điểm <5) | 30% | 7 turns | 15 phút | $0.0017 | 3 credits (khó) |
| **Average** (Điểm 5-7) | 50% | 5 turns | 9 phút | $0.0012 | 2 credits (TB) |
| **Strong** (Điểm 7-10) | 20% | 3 turns | 4 phút | $0.0007 | 1 credit (dễ) |

**Chi phí trung bình (weighted):**
```
$0.0017 × 30% + $0.0012 × 50% + $0.0007 × 20% = $0.0013/bài
```

**Credits trung bình (weighted):**
```
3 credits × 30% + 2 credits × 50% + 1 credit × 20% = 2.1 credits/bài
```

**→ Sử dụng $0.0015/bài cho conservative estimate (buffer 15%)**

### Thời gian học/ngày (Credit-Based)

| Nhóm | % Users | Credits/ngày | Bài mix | Giờ học | Tính khả thi |
|:---|:---:|:---:|:---:|:---:|:---|
| **Casual** | 40% | 10-20 credits | 6-12 bài | 0.75-1.5 giờ | ✅ Hợp lý - Học nhẹ nhàng |
| **Regular** | 40% | 20-40 credits | 12-24 bài | 1.5-3 giờ | ✅ Chăm chỉ - Học đều đặn |
| **Power** | 15% | 40-60 credits | 24-36 bài | 3-4.5 giờ | ⚠️ Rất chăm - Trước kỳ thi |
| **Super** | 5% | 60-80 credits | 36-48 bài | 4.5-6 giờ | ❌ Không thực tế - Chỉ riêng Toán |

**Nhận xét thực tế:**
- **80% users (Casual + Regular):** 10-40 credits/ngày = 6-24 bài mix = 0.75-3 giờ → **Hợp lý và bền vững**
- **15% Power users:** 40-60 credits/ngày = 24-36 bài mix = 3-4.5 giờ → **Chỉ trong mùa ôn thi** (1-2 tháng/năm)
- **5% Super users:** 60-80 credits/ngày = 36-48 bài mix = 4.5-6 giờ → **Không thực tế** cho học sinh bình thường
  - Học sinh THPT còn 10+ môn khác
  - Cần thời gian cho hoạt động ngoại khóa, nghỉ ngơi
  - Chỉ có thể là: Học sinh chuyên Toán, hoặc ôn thi THPTQG giai đoạn nước rút

**Kết luận:**
- **Plus (30 credits/ngày):** Đủ cho 80% users (Casual + Regular) - Học đều đặn, bền vững
  - Tương đương: 18 bài mix hoặc 15 bài TB hoặc 30 bài dễ
- **Pro (60 credits/ngày):** Đủ cho 95% users, kể cả Power users trong mùa thi
  - Tương đương: 36 bài mix hoặc 30 bài TB hoặc 60 bài dễ
  - **Lý do chọn 60 thay vì 40:** Không phải vì học sinh cần 60 credits/ngày thường xuyên
  - **Mục đích chính:** Chặn abuse - 60 credits / 5 người = 12 credits/người (< Free 10 credits nếu giải bài TB/khó)
  - **Buffer cho mùa thi:** Cho phép học nhiều hơn 1-2 tháng trước kỳ thi
- **80+ credits/ngày:** Không cần thiết - Không ai học Toán 6+ giờ/ngày bền vững
  - Học sinh THPT còn 10+ môn khác
  - Cần thời gian nghỉ ngơi, hoạt động ngoại khóa
  - Nếu thực sự cần >60 credits → Nên dùng Team Plus (5 người × 30 credits = 150 credits/ngày)

### Chi phí cho 100 users (Credit-Based với Gemini 2.5 Flash Lite)

**Giả định phân bố:**
- 40% bài dễ (1 credit)
- 40% bài trung bình (2 credits)
- 20% bài khó (3 credits)
- Weighted average: 1.8 credits/bài

```
Distribution:
  35 Free users (6 credits):     35 × 6 × 30 × $0.0012 = $7.56
  40 Plus users (20 credits):    40 × 20 × 30 × $0.0012 = $28.80
  12 Pro users (40 credits):     12 × 40 × 30 × $0.0012 = $17.28
  3 Team (9 users, 20 credits):  9 × 20 × 30 × $0.0012 = $6.48
  2 Team Plus (10 users, 20 credits): 10 × 20 × 30 × $0.0012 = $7.20
─────────────────────────────────────────
Total LLM cost: $67.32/tháng
Infrastructure: $60/tháng
Total cost: $127.32/tháng

Revenue:
  35 Free: $0
  40 Plus: $208.00
  12 Pro: $76.80
  3 Team: $39.60
  2 Team Plus: $40.00
─────────────────────────────────────────
Total revenue: $364.40/tháng

Net profit: $237.08/tháng
Margin: 65.1% ✅
```

**Perfect! Đạt đúng target 65% margin!**

**So sánh các versions:**
- Fixed-based: Margin 61.7% (LLM cost $79.40)
- Credit-based (30/60): Margin 55.5% (LLM cost $102.24)
- Credit-based (25/50): Margin 60.3% (LLM cost $84.78)
- **Credit-based (20/40): Margin 65.1% (LLM cost $67.32)** ✅

**Break-even:** 35 paid users (mix)

**Lý do chi phí thấp hơn:**
- Giảm 33% credits so với 30/60 (30→20, 60→40)
- Giảm 20% credits so với 25/50 (25→20, 50→40)
- Chi phí giảm tương ứng
- Margin tăng từ 60.3% → 65.1%

**So sánh với GPT-4o Mini (fallback):**
- Gemini cost: $67.32 → Margin 65.1%
- GPT-4o Mini cost: $128.64 → Margin 44.7%
- Trade-off: Gemini rẻ hơn 48%, margin cao hơn 20.4%

---

## 🔒 ANTI-ABUSE: CREDIT SYSTEM + OTP (CHỈ PRO)

### Cơ chế Credit System (Technical Implementation)

**1. Credit deduction theo chi phí API thực tế**
```python
# Base cost per credit (để quy đổi)
BASE_COST_PER_CREDIT = 0.0006  # USD

def deduct_credits_after_problem(user_id, session_id):
    """
    Trừ credits SAU KHI user giải xong bài, dựa trên chi phí API thực tế.
    """
    # Tính tổng chi phí API cho bài này
    messages = get_session_messages(session_id)
    total_cost = 0
    
    for msg in messages:
        if msg.role == 'assistant':
            # Gemini 2.5 Flash Lite pricing
            input_cost = msg.input_tokens * 0.10 / 1_000_000
            output_cost = msg.output_tokens * 0.40 / 1_000_000
            total_cost += (input_cost + output_cost)
    
    # Quy đổi sang credits
    credits_to_deduct = total_cost / BASE_COST_PER_CREDIT
    
    # Round up để tránh user "game" hệ thống
    credits_to_deduct = math.ceil(credits_to_deduct * 10) / 10  # Round to 0.1
    
    # Deduct
    user.credits_used_today += credits_to_deduct
    
    # Log để analytics
    log_credit_usage(user_id, session_id, total_cost, credits_to_deduct)
    
    return credits_to_deduct

# Ví dụ thực tế:
# - Bài dễ (3 turns, $0.0007): 0.0007 / 0.0006 = 1.17 credits
# - Bài TB (5 turns, $0.0012): 0.0012 / 0.0006 = 2.00 credits
# - Bài khó (7 turns, $0.0017): 0.0017 / 0.0006 = 2.83 credits
# - Bài cực khó (10 turns, $0.0024): 0.0024 / 0.0006 = 4.00 credits
```

**2. Daily limit reset**
- Hard limit: Credits theo tier (10, 30, 60)
- Reset mỗi 00:00 hàng ngày
- Không rollover (để tránh hoarding)

**3. Real-time credit tracking**
```python
def check_credits_before_turn(user_id):
    """
    Check trước mỗi turn xem user còn đủ credits không.
    Estimate dựa trên avg cost/turn.
    """
    user = get_user(user_id)
    avg_cost_per_turn = 0.00049  # Gemini avg
    estimated_credits_needed = avg_cost_per_turn / BASE_COST_PER_CREDIT
    
    if user.credits_remaining < estimated_credits_needed:
        raise InsufficientCreditsError(
            f"Bạn cần ~{estimated_credits_needed:.1f} credits cho turn này. "
            f"Còn lại: {user.credits_remaining:.1f} credits. "
            f"Upgrade để tiếp tục!"
        )
```

### Tại sao Credit System chặn abuse?

**Scenario: 5 bạn share 1 acc Pro (60 credits)**

```
Chia đều: 60 / 5 = 12 credits/người

Thực tế (dựa trên chi phí API):
- User giỏi (3 turns/bài): 12 credits ≈ 10 bài
- User TB (5 turns/bài): 12 credits ≈ 6 bài
- User yếu (7 turns/bài): 12 credits ≈ 4 bài

So sánh Free (10 credits):
- User giỏi: 10 credits ≈ 8 bài
- User TB: 10 credits ≈ 5 bài
- User yếu: 10 credits ≈ 3 bài

→ Pro share cho 5 người ≈ Free hoặc thấp hơn!
→ Không hấp dẫn để share!
```

**User thật (Pro solo):**
- 60 credits = 30-50 bài tùy skill level
- Đủ cho power users
- Công bằng: Giỏi → Giải nhiều bài, Yếu → Giải ít bài nhưng value tương đương

### OTP khi đổi thiết bị (CHỈ PRO)

**Cơ chế:**
```
User login thiết bị mới:
1. Hệ thống phát hiện device_id khác
2. Gửi OTP (6 số) qua email
3. User nhập OTP → Đăng xuất thiết bị cũ
4. Login thiết bị mới thành công

User login cùng thiết bị:
→ Không cần OTP, login thẳng
```

**Tâm lý học chặn abuse:**
```
Scenario: 5 bạn chia sẻ 1 acc Pro

- Bạn A login → OK
- Bạn B login → Chủ acc nhận OTP
- Bạn C login → Chủ acc nhận OTP
- Bạn D login → Chủ acc nhận OTP

→ Chủ acc nhận 10-15 OTP/ngày
→ Cực kỳ phiền!
→ Tự nguyện không chia sẻ nữa
```

**User thật:**
- Chỉ nhận OTP khi đổi thiết bị (1-2 lần/ngày)
- Không phiền

### Ưu điểm Credit System

- ✅ **Công bằng tuyệt đối:** Trả đúng cho chi phí API thực tế
- ✅ **Chặn abuse tự nhiên:** Share không hấp dẫn
- ✅ **Khuyến khích học đúng:** Cải thiện skill → Giải nhiều bài hơn
- ✅ **Transparent:** User thấy rõ mỗi bài tốn bao nhiêu credits
- ✅ **Flexible:** Không cần AI detect difficulty trước
- ✅ **Gamification:** Tạo động lực "tiết kiệm" credits bằng cách học giỏi hơn
- ✅ **Chống game:** Không thể "hack" bằng cách chọn bài dễ

### Ưu điểm OTP (Pro only)

- ✅ Cực kỳ đơn giản
- ✅ User experience tốt
- ✅ Chặn abuse tự nhiên
- ✅ Không giới hạn số lần đổi
- ✅ Fair pricing

---

## 🚨 WORST-CASE SCENARIOS

### Scenario A: 100% Pro users, dùng max 60 credits/ngày

**Với Gemini 2.5 Flash Lite ($0.0012/credit):**
```
100 users × 60 credits/ngày × 30 ngày × $0.0012 = $216/tháng

Revenue: 100 × $6.40 = $640/tháng
Total cost: $216 + $60 = $276/tháng
Net profit: $364/tháng
Margin: 56.9%
```

**Kết luận:** Ngay cả 100% Pro users dùng max, margin vẫn >56%.

---

### Scenario B: 100% users giải toàn bài khó (3 credits/bài)

**Worst-case distribution:**
```
35 Free × 10 credits × 30 ngày × $0.0017 = $17.85
40 Plus × 30 credits × 30 ngày × $0.0017 = $61.20
12 Pro × 60 credits × 30 ngày × $0.0017 = $36.72
3 Team (9 users) × 30 credits × 30 ngày × $0.0017 = $13.77
2 Team Plus (10 users) × 30 credits × 30 ngày × $0.0017 = $15.30
─────────────────────────────────────────
Total LLM cost: $144.84/tháng
Total cost: $204.84/tháng
Revenue: $364.40/tháng
Net profit: $159.56/tháng
Margin: 43.8%
```

**Kết luận:** Ngay cả 100% users giải toàn bài khó, margin vẫn >43%.

---

### Scenario C: Gemini tăng giá 2x

**Current pricing:**
```
Chi phí/credit: $0.0012

100 users (phân bố chuẩn):
LLM cost: $102.24/tháng
Total cost: $162.24/tháng
Revenue: $364.40/tháng
Net profit: $202.16/tháng
Margin: 55.5%
```

**Nếu tăng giá 2x:**
```
Chi phí/credit: $0.0012 → $0.0024

LLM cost: $102.24 × 2 = $204.48/tháng
Total cost: $264.48/tháng
Revenue: $364.40/tháng
Net profit: $99.92/tháng
Margin: 27.4%
```

**Mitigation:**
- Switch to GPT-4o mini: $0.0024 → $0.0037 (+54%)
- Hoặc tăng giá 15%: Revenue $419.06 → Margin 36.9%
- Timeline: < 1 ngày (auto-fallback)

---

## 🔄 API FALLBACK STRATEGY

### Primary Model: Gemini 2.5 Flash Lite

**Lý do chọn Gemini 2.5 Flash Lite làm primary:**
- ✅ **Chi phí thấp nhất:** $0.10/$0.40 per 1M tokens (rẻ hơn GPT-4o mini 33%)
- ✅ **Context window lớn:** 1M tokens (đủ cho RAG + history)
- ✅ **Quality tốt:** Reasoning và instruction-following xuất sắc
- ✅ **Stable pricing:** Google có track record ổn định

**Chi phí với Gemini 2.5 Flash Lite:**
```
Input: 3,300 tokens × $0.10 / 1M = $0.000330
Output: 400 tokens × $0.40 / 1M = $0.000160
Total: $0.000490/turn

Chi phí/bài (5 turns): $0.00245 ≈ $0.0025
```

**Economics:**
- Pro (30 bài/ngày): 30 × 30 × $0.0025 = $2.25/tháng
- Revenue: $6.40/tháng
- Margin: **64.8%** (rất khỏe)

### Fallback Models

| Model | Cost/turn | Cost/bài (5 turns) | Use Case |
|:---|:---:|:---:|:---|
| **Gemini 2.5 Flash Lite** (Primary) | $0.000490 | $0.0025 | Default |
| **GPT-4o Mini** | $0.000735 | $0.0037 | Nếu Gemini có vấn đề |
| **Claude 3.5 Haiku** | $0.001330 | $0.0067 | Nếu cả 2 trên fail |
| **Llama 3.1 70B** | $0.000260 | $0.0013 | Long-term (self-host) |

### Fallback Timeline

**Nếu Gemini có vấn đề (downtime, rate limit, pricing):**

```
Immediate (< 1 hour):
- Auto-switch to GPT-4o mini
- Monitor quality metrics
- Alert team

Short-term (1-7 days):
- Investigate root cause
- Test Claude 3.5 Haiku if needed
- Communicate with users if necessary

Long-term (1-3 months):
- Evaluate self-hosting Llama 3.1 70B
- Negotiate enterprise pricing with providers
- Implement advanced caching
```

### Multi-Provider Strategy

**Benefits:**
- ✅ **No vendor lock-in:** Có thể switch trong vài giờ
- ✅ **Price negotiation:** Leverage để đàm phán giá tốt hơn
- ✅ **Quality comparison:** A/B test liên tục
- ✅ **Risk mitigation:** Không phụ thuộc 1 provider

---

## 📊 DATA VALIDATION PLAN

### Assumptions cần validate

| Assumption | Current Estimate | Impact if Wrong |
|:---|:---:|:---|
| **Turns/bài** | 5-7 turns | ±20-30% cost |
| **Thời gian học/ngày** | 3-4 giờ | ±30% revenue |
| **Skill distribution** | 30/50/20% | ±15% cost |
| **Conversion rates** | 15-30% | ±50% revenue |

### Timeline (3 months)

**Month 1: Pilot Recruitment**
- Target: 100 học sinh THPT
- Budget: $500 (incentives)

**Month 2: Data Collection**
- Track: Turns/bài, Bài/ngày, Retention, Time/bài
- Tools: Mixpanel, PostgreSQL
- Budget: $300

**Month 3: Analysis + Adjust**
- Compare actual vs estimated
- Adjust pricing if needed
- Deliverable: Updated pitch deck

**Total Budget: $1,500**

### Go/No-Go Criteria

**✅ GO if:**
- Avg turns/bài < 10
- Retention D7 > 30%
- Conversion > 10%
- Margin > 40%

**❌ NO-GO if:**
- Avg turns/bài > 12
- Retention D7 < 20%
- Conversion < 5%
- Margin < 30%

---

## 📈 FINANCIAL PROJECTIONS

### Economics Summary (Credit-Based)

| Scenario | LLM Cost | Total Cost | Revenue | Net Profit | Margin |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Gemini 2.5 Flash Lite (Primary)** | $67.32 | $127.32 | $364.40 | $237.08 | **65.1%** ✅ |
| **GPT-4o Mini (Fallback)** | $128.64 | $188.64 | $364.40 | $175.76 | **48.2%** |
| **Claude Haiku (Backup)** | $208.28 | $268.28 | $364.40 | $96.12 | **26.4%** |

**So sánh các Credit versions:**

| Version | Free | Plus | Pro | LLM Cost | Margin | Status |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Original (30/60)** | 10 | 30 | 60 | $102.24 | 55.5% | ❌ |
| **Adjusted (25/50)** | 8 | 25 | 50 | $84.78 | 60.3% | ⚠️ |
| **Final (20/40)** | 6 | 20 | 40 | $67.32 | **65.1%** | ✅ |

**So sánh Fixed vs Credit:**

| Model | Fixed Margin | Credit (20/40) | Winner |
|:---|:---:|:---:|:---:|
| **Gemini 2.5 Flash Lite** | 61.7% | **65.1%** | Credit ✅ |
| **GPT-4o Mini** | 41.9% | 48.2% | Credit ✅ |

**Kết luận:**
- Credit 20/40: Margin 65.1% (cao hơn Fixed 3.4%)
- Công bằng hơn nhiều cho user
- Chặn abuse tự nhiên
- Gamification tốt hơn
- **Số đẹp:** 6, 20, 40 - Dễ nhớ, dễ tính

### Key Metrics (Credit-Based)

| Metric | Value | Industry Benchmark |
|:---|:---:|:---|
| **Gross Margin** | 65.1% (Gemini) | SaaS: 70-80% ✅ |
| **Break-even** | 35 paid users | Depends on CAC |
| **LTV/CAC** | 2.0-8x | >3x is good ✅ |
| **Churn risk** | Low | Subscription model |
| **Scalability** | High | Variable cost model ✅ |
| **Fairness** | Excellent | Credit-based ✅ |

**Ghi chú:** 
- Margin với Gemini đạt **65.1%**, gần với SaaS benchmark (70-80%)
- Cao hơn Fixed (61.7%) **+3.4%** và vẫn **công bằng hơn nhiều**
- Thực tế margin có thể cao hơn vì nhiều user không dùng hết credits
- **Credits đẹp:** 6, 20, 40 - Dễ nhớ, dễ marketing

### Growth Projections (Credit-Based)

```
Year 1: 500 users → $90K revenue → $59K profit (65% margin)
Year 2: 2,000 users → $360K revenue → $234K profit (65% margin)
Year 3: 5,000 users → $900K revenue → $585K profit (65% margin)
```

**Assumptions:**
- Phân bố users giống 100 users pilot
- 40% bài dễ, 40% TB, 20% khó
- Users dùng 80% credits (realistic, không phải 100%)
- Gemini pricing stable
- **Credits: Free 6, Plus 20, Pro 40** (số đẹp, dễ nhớ)

---

## 📋 BẢNG TỔNG KẾT (CREDIT-BASED)

| Metric | Value | Note |
|:---|:---:|:---|
| **Pricing Model** | Credit-based (API cost) | Credits trừ theo chi phí API thực tế |
| **Base cost/credit** | $0.0006 | Để quy đổi API cost → credits |
| **Primary Model** | Gemini 2.5 Flash Lite | $0.10/$0.40 per 1M tokens |
| **Fallback Model** | GPT-4o mini | $0.15/$0.60 per 1M tokens |
| **Chi phí/credit** | $0.0012 (avg) | Weighted average cho economics |
| **Free limit** | 6 credits/ngày | ~4 bài mix (~25-30 phút) |
| **Plus limit** | 20 credits/ngày | ~12 bài mix (~1.2-1.5 giờ) |
| **Pro limit** | 40 credits/ngày | ~24 bài mix (~2.8-3.2 giờ) |
| **Anti-abuse** | Credit (API-based) + OTP (Pro) | Công bằng tuyệt đối |
| **LLM cost (100 users)** | $67.32/tháng | Gemini 2.5 Flash Lite |
| **Total cost** | $127.32/tháng | LLM + Infrastructure |
| **Revenue** | $364.40/tháng | Phân bố chuẩn |
| **Net profit** | $237.08/tháng | **65.1% margin** ✅ |
| **Break-even** | 35 paid users | Mix tiers |
| **Fallback** | GPT-4o mini | Auto-switch nếu cần |

**Quy đổi Credits (Ước tính cho marketing):**

| Tier | Credits | Bài dễ* | Bài TB* | Bài khó* | Mix* | Thời gian* |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Free** | 6 | ~6 | ~3 | ~2 | ~4 | 25-30 phút |
| **Plus** | 20 | ~20 | ~10 | ~6-7 | ~12 | 1.2-1.5 giờ |
| **Pro** | 40 | ~40 | ~20 | ~13 | ~24 | 2.8-3.2 giờ |

**\* Lưu ý:** Số bài thực tế phụ thuộc vào chi phí API user tiêu. User giỏi (ít turns) giải được nhiều bài hơn.

**Ưu điểm số credits 6/20/40:**
- ✅ **Số đẹp:** Dễ nhớ, dễ tính (6, 20, 40)
- ✅ **Tỉ lệ đẹp:** Pro = 2 × Plus (40 = 2 × 20)
- ✅ **Margin target:** Đạt đúng 65.1%
- ✅ **Công bằng:** Credit theo API cost thực tế
- ✅ **Chặn abuse:** 40/5 = 8 ≈ Free 6

---

## ✅ KẾT LUẬN

### Tại sao Credit-Based Strategy này robust?

1. ✅ **Công bằng hơn nhiều**
   - User giỏi giải bài dễ → Nhiều bài hơn (30-60 bài)
   - User yếu giải bài khó → Ít bài hơn (10-20 bài) nhưng value tương đương
   - Bài khó tốn nhiều credits hơn (3x bài dễ)

2. ✅ **Chặn abuse tự nhiên**
   - **Pro 60 credits / 5 người = 12 credits/người**
   - 12 credits = 6 bài TB hoặc 4 bài khó
   - Ít hơn Free (10 credits = 5 bài TB)
   - Không hấp dẫn để share!

3. ✅ **Strong margins ngay cả worst-case**
   - Gemini (primary): 55.5% margin
   - 100% Pro max usage: 56.9% margin
   - 100% users giải bài khó: 43.8% margin
   - GPT-4o mini (fallback): 29.9% margin

4. ✅ **Conservative assumptions**
   - Chi phí/credit: $0.0012 (weighted average)
   - Users dùng 100% credits (thực tế ~80%)
   - Không assume tối ưu LLM
   - Infrastructure có buffer

5. ✅ **Clear mitigation strategies**
   - Tối ưu LLM → +5% margin
   - Switch model → +25% margin
   - Credit system chặn abuse → +3% margin
   - Tăng giá 15% → +10% margin

6. ✅ **API fallback được cover**
   - Primary: Gemini 2.5 Flash Lite (rẻ nhất, quality tốt)
   - Fallback: GPT-4o mini (quality xuất sắc, ecosystem mature)
   - Auto-switch trong < 1 giờ nếu có vấn đề
   - Multi-vendor strategy → Không bị lock-in

7. ✅ **Gamification & User Experience**
   - User có động lực cải thiện skill
   - Transparent: Biết rõ mỗi bài tốn bao nhiêu
   - Flexible: Tự chọn giải bài dễ hay khó
   - Fair: Trả tiền cho value thực tế nhận được

### So sánh Fixed vs Credit

| Aspect | Fixed-Based | Credit-Based | Winner |
|:---|:---:|:---:|:---:|
| **Margin** | 61.7% | 55.5% | Fixed (-6.2%) |
| **Fairness** | Low | Excellent | Credit ✅ |
| **Anti-abuse** | Good | Excellent | Credit ✅ |
| **User Experience** | Simple | Gamified | Credit ✅ |
| **Transparency** | Low | High | Credit ✅ |
| **Flexibility** | None | High | Credit ✅ |

**Trade-off:** -6.2% margin để có fairness + anti-abuse + UX tốt hơn nhiều

### Khuyến nghị

**✅ Triển khai Credit-Based với confidence:**
- Primary model: Gemini 2.5 Flash Lite (rẻ nhất, quality tốt)
- Margin 55.5% (good, trade-off cho fairness)
- Fallback strategy rõ ràng (GPT-4o mini, Claude, Llama)
- Clear path to profitability
- **Công bằng hơn nhiều** cho cả user và business
- **Chặn abuse tự nhiên** không cần phức tạp
- **Gamification** tạo động lực học tập

**Economics tốt + Fairness xuất sắc. Triển khai Credit-Based! 🚀**

---

**Tài liệu liên quan:**
- `spec.md` — Technical specification
- `DATA_VALIDATION_PLAN.md` — Chi tiết validation plan
- `API_PRICING_RISK_SUMMARY.md` — Chi tiết risk mitigation
