# MathHint — Developer Specification

> **Version:** 1.0 | **Last updated:** 2026-05-05
> **Mô tả:** Gia sư AI Toán THPT, phương pháp Socratic (gợi ý, không đưa đáp án).
> **User:** Học sinh THPT | **Buyer:** Phụ huynh

---

## 1. Tech Stack

| Layer | Công nghệ | Ghi chú |
|:---|:---|:---|
| **Frontend** | HTML/CSS/JS → migrate React/Next.js | Hiện tại đã có prototype |
| **Backend** | FastAPI (Python) hoặc Node.js/Express | FastAPI ưu tiên vì SymPy là Python |
| **LLM (Primary)** | Gemini 2.5 Flash Lite | $0.10/$0.40 per 1M tokens, 1M context |
| **LLM (Fallback)** | GPT-4o mini | $0.15/$0.60 per 1M tokens, auto-switch |
| **Vector DB (RAG)** | ChromaDB | Lưu knowledge base toán THPT |
| **Database** | PostgreSQL | User, sessions, metrics |
| **Auth** | Firebase Auth hoặc Supabase Auth | OAuth (Google) + email/password |
| **Tính toán** | SymPy (Python) | LLM KHÔNG được tự tính toán |
| **Payment** | MoMo / VNPay / Stripe | Subscription model |
| **Push Notification** | Firebase Cloud Messaging | Báo cáo tối cho phụ huynh |

---

## 2. Kiến trúc hệ thống

```
┌─────────────────┐
│  Frontend       │
│  (React/Next)   │
│                 │
│  ├─ /student    │──── Chat UI, Daily Challenge, Profile
│  ├─ /parent     │──── Dashboard, Reports, Settings
│  └─ /login      │──── Auth (HS / PH)
└────────┬────────┘
         │ REST API / WebSocket
         ▼
┌─────────────────────────────────────────────────┐
│  Backend (FastAPI)                               │
│                                                  │
│  ┌──────────────┐  ┌────────────┐  ┌──────────┐ │
│  │ Assess       │  │ RAG Service│  │ SymPy    │ │
│  │ Gateway      │→ │ (ChromaDB) │  │ Compute  │ │
│  │ (Intent +    │  └────────────┘  └──────────┘ │
│  │  History)    │                                │
│  └──────┬───────┘  ┌────────────┐  ┌──────────┐ │
│         │          │ LLM Service│  │ Report   │ │
│         └────────→ │ (Gemini)   │  │ Generator│ │
│                    └────────────┘  └──────────┘ │
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │ PostgreSQL                                │   │
│  │ users, sessions, messages, metrics,       │   │
│  │ daily_challenges, streaks, badges         │   │
│  └──────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

---

## 3. Core Flow: Assess → Route → Mode

Mọi tin nhắn từ HS đều đi qua **Assess Gateway** trước.

```
Input (tin nhắn HS)
        │
        ▼
┌─────────────────────────────────────────────────┐
│  ASSESS GATEWAY (chạy ngầm, HS không thấy)     │
│                                                  │
│  Step 1: Phân loại intent                        │
│    - "Đạo hàm là gì?"      → EXPLAIN            │
│    - "Giải bài y=x³-3x²+2" → CHECK PREREQS      │
│    - "Tại sao y'=0?"        → EXPLAIN            │
│                                                  │
│  Step 2: Tra session history (nếu giải bài)     │
│    - Đã master prerequisites? → HINT             │
│    - Chưa từng học?          → HỎI HS            │
│    - Đã giải dạng này trước? → GỢI Ý CÁCH MỚI  │
│                                                  │
│  Step 3: Kiểm tra prerequisites                  │
│    - Topic "Cực trị" cần: [Đạo hàm]            │
│    - Topic "Tích phân" cần: [Nguyên hàm]        │
└──────────┬──────────────────┬────────────────────┘
           │                  │
           ▼                  ▼
   ┌──────────────┐   ┌──────────────┐
   │ EXPLAIN MODE │   │  HINT MODE   │
   │              │   │              │
   │ - RAG lookup │   │ - RAG lookup │
   │ - Full       │   │ - N hints    │
   │   explanation│   │   (dynamic)  │
   │ - Ví dụ     │   │ - Socratic   │
   │ - Citation   │   │ - Không đáp  │
   │              │   │   án         │
   └──────────────┘   └──────────────┘
```

### Hint Mode Rules
- **Số gợi ý:** Không cố định. Model tự detect số gợi ý phù hợp dựa trên độ phức tạp của bài toán.
  - Bài đơn giản (PT bậc 1, đạo hàm cơ bản): 1–2 gợi ý
  - Bài trung bình (cực trị, lượng giác cơ bản): 2–3 gợi ý
  - Bài phức tạp (tích phân từng phần, hàm hợp nhiều lớp): 3–5 gợi ý
- **Hint đầu:** Gợi ý hướng đi (nhẹ nhất)
- **Hint giữa:** Gợi ý phương pháp cụ thể, từng bước
- **Hint cuối:** Gợi ý chi tiết bước đầu tiên, gần như dẫn tay
- **Sau khi hết hints:** Đưa cách giải tổng quát (KHÔNG đưa đáp án số)

---

## 4. Data Models

### 4.1 Users

```sql
CREATE TABLE users (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    role          VARCHAR(20) NOT NULL CHECK (role IN ('student', 'parent')),
    full_name     VARCHAR(100) NOT NULL,
    school        VARCHAR(200),
    grade         INT CHECK (grade BETWEEN 10 AND 12),
    parent_id     UUID REFERENCES users(id),  -- link HS → PH
    avatar_url    VARCHAR(500),
    target_score  DECIMAL(3,1),
    subscription_tier VARCHAR(20) DEFAULT 'free' CHECK (tier IN ('free', 'plus', 'pro', 'team', 'team_plus')),
    daily_limit   INT DEFAULT 5,              -- 5, 15, 40, etc.
    created_at    TIMESTAMP DEFAULT NOW(),
    updated_at    TIMESTAMP DEFAULT NOW()
);
```

### 4.1.1 Device Sessions & OTP (Pro tier only)

```sql
CREATE TABLE device_sessions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(id) NOT NULL,
    device_id       VARCHAR(255) NOT NULL,     -- Unique device identifier
    device_name     VARCHAR(100),              -- "iPhone 13", "MacBook Pro"
    device_type     VARCHAR(50),               -- "mobile", "desktop", "tablet"
    ip_address      VARCHAR(45),
    user_agent      TEXT,
    is_active       BOOLEAN DEFAULT TRUE,
    last_activity   TIMESTAMP DEFAULT NOW(),
    created_at      TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, device_id)
);

CREATE TABLE otp_codes (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(id) NOT NULL,
    otp_code        VARCHAR(6) NOT NULL,
    device_id       VARCHAR(255) NOT NULL,
    expires_at      TIMESTAMP NOT NULL,
    is_used         BOOLEAN DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_otp_user_device ON otp_codes(user_id, device_id, is_used);
```

### 4.1.2 Daily Usage Tracking

```sql
CREATE TABLE daily_usage (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(id) NOT NULL,
    usage_date      DATE NOT NULL,
    problems_solved INT DEFAULT 0,
    created_at      TIMESTAMP DEFAULT NOW(),
    updated_at      TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, usage_date)
);

CREATE INDEX idx_daily_usage_user_date ON daily_usage(user_id, usage_date);
```

### 4.2 Sessions & Messages

```sql
CREATE TABLE chat_sessions (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID REFERENCES users(id) NOT NULL,
    topic       VARCHAR(100),       -- "cuc_tri", "tich_phan"
    sub_topic   VARCHAR(100),       -- "ham_bac_3", "ham_bac_4"
    status      VARCHAR(20) DEFAULT 'active',
    created_at  TIMESTAMP DEFAULT NOW()
);

CREATE TABLE messages (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id  UUID REFERENCES chat_sessions(id) NOT NULL,
    role        VARCHAR(10) NOT NULL CHECK (role IN ('user', 'assistant')),
    content     TEXT NOT NULL,
    mode        VARCHAR(20),        -- 'explain', 'hint', 'assess'
    hint_number INT,                -- 1, 2, 3, NULL
    citations   JSONB,              -- [{"id": "CONCEPT_001", "title": "..."}]
    created_at  TIMESTAMP DEFAULT NOW()
);
```

### 4.3 Student Knowledge State

```sql
CREATE TABLE knowledge_state (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID REFERENCES users(id) NOT NULL,
    topic       VARCHAR(100) NOT NULL,     -- "dao_ham", "cuc_tri"
    mastery     DECIMAL(3,2) DEFAULT 0.0,  -- 0.00 → 1.00
    methods_used JSONB,                    -- ["bang_xet_dau", "y_double_prime"]
    total_problems INT DEFAULT 0,
    self_solved    INT DEFAULT 0,          -- solved with ≤ 2 hints
    last_practiced TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, topic)
);
```

### 4.4 Streaks & Gamification

```sql
CREATE TABLE streaks (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id       UUID REFERENCES users(id) UNIQUE NOT NULL,
    current_streak INT DEFAULT 0,
    longest_streak INT DEFAULT 0,
    last_active    DATE,
    updated_at     TIMESTAMP DEFAULT NOW()
);

CREATE TABLE badges (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id     UUID REFERENCES users(id) NOT NULL,
    badge_type  VARCHAR(50) NOT NULL,  -- "streak_7", "master_dao_ham", "self_solve_10"
    earned_at   TIMESTAMP DEFAULT NOW()
);

CREATE TABLE daily_challenges (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date            DATE NOT NULL,
    topic           VARCHAR(100) NOT NULL,
    difficulty      VARCHAR(20),        -- 'easy', 'medium', 'hard'
    problem_text    TEXT NOT NULL,
    solution_steps  JSONB,              -- verified solution for checking
    source_problem_id UUID,             -- reference to curated problem bank
    created_at      TIMESTAMP DEFAULT NOW()
);
```

### 4.5 Parent Reports

```sql
CREATE TABLE parent_reports (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id     UUID REFERENCES users(id) NOT NULL,
    student_id    UUID REFERENCES users(id) NOT NULL,
    report_type   VARCHAR(20) NOT NULL,  -- 'daily', 'weekly'
    report_date   DATE NOT NULL,
    data          JSONB NOT NULL,
    -- data example:
    -- {
    --   "problems_solved": 5,
    --   "self_solved_ratio": 0.8,
    --   "topics_practiced": ["cuc_tri"],
    --   "streak": 14,
    --   "progress_vs_last_week": 0.12,
    --   "weak_topics": ["luong_giac"],
    --   "strong_topics": ["dao_ham"]
    -- }
    sent_at       TIMESTAMP,
    created_at    TIMESTAMP DEFAULT NOW()
);
```

---

## 5. RAG Knowledge Base Structure

```
knowledge_base/
├── concepts/                          # Khái niệm
│   ├── dao_ham.md                     # [CONCEPT_001]
│   ├── cuc_tri_cuc_dai_cuc_tieu.md   # [CONCEPT_002]
│   ├── bang_bien_thien.md             # [CONCEPT_003]
│   ├── nguyen_ham.md                  # [CONCEPT_004]
│   ├── tich_phan.md                   # [CONCEPT_005]
│   ├── phuong_trinh_bac_2.md         # [CONCEPT_006]
│   └── luong_giac_co_ban.md          # [CONCEPT_007]
│
├── methods/                           # Cách giải tổng quát
│   ├── tim_cuc_tri_bang_y_prime.md    # [METHOD_001]
│   ├── tim_cuc_tri_bang_y_double.md   # [METHOD_002]
│   ├── giai_pt_bac2_delta.md         # [METHOD_003]
│   ├── giai_pt_bac2_viet.md          # [METHOD_004]
│   ├── tinh_tich_phan_doi_bien.md    # [METHOD_005]
│   └── tinh_tich_phan_tung_phan.md   # [METHOD_006]
│
├── examples/                          # Bài tập ví dụ + lời giải
│   ├── cuc_tri_ham_bac_3.md          # [EXAMPLE_001]
│   ├── cuc_tri_ham_bac_4.md          # [EXAMPLE_002]
│   ├── pt_bac2_co_ban.md             # [EXAMPLE_003]
│   └── tich_phan_co_ban.md           # [EXAMPLE_004]
│
├── prerequisites/                     # Dependency map
│   └── topic_prerequisites.json
│       # {
│       #   "cuc_tri": ["dao_ham"],
│       #   "bang_bien_thien": ["dao_ham", "cuc_tri"],
│       #   "tich_phan": ["nguyen_ham"],
│       #   "tich_phan_tung_phan": ["tich_phan", "dao_ham"]
│       # }
│
└── problem_bank/                      # Kho đề curated (Daily Challenge)
    ├── cuc_tri/
    │   ├── easy_001.json
    │   ├── medium_001.json
    │   └── hard_001.json
    └── dao_ham/
        ├── easy_001.json
        └── medium_001.json
```

### Problem Bank Format (JSON)

```json
{
  "id": "PROB_CT_E001",
  "topic": "cuc_tri",
  "difficulty": "easy",
  "problem": "Tìm cực trị của hàm số y = x³ - 3x² + 2",
  "prerequisites": ["dao_ham"],
  "solution": {
    "steps": [
      "Tính y' = 3x² - 6x",
      "Cho y' = 0 → 3x(x-2) = 0 → x = 0 hoặc x = 2",
      "y'' = 6x - 6",
      "y''(0) = -6 < 0 → x=0 là cực đại, y_max = 2",
      "y''(2) = 6 > 0 → x=2 là cực tiểu, y_min = -2"
    ],
    "answer": {"cuc_dai": {"x": 0, "y": 2}, "cuc_tieu": {"x": 2, "y": -2}}
  },
  "hints": [
    "Em hãy nhớ lại, đại lượng nào đặc trưng cho sự biến thiên của hàm số?",
    "Đúng rồi, đạo hàm! Hãy tính y' rồi giải y' = 0 xem ra mấy nghiệm?",
    "y' = 3x² - 6x. Phân tích thành 3x(x-2) = 0. Vậy x = ?"
  ],
  "general_method": "Để tìm cực trị: (1) Tính y', (2) Giải y'=0, (3) Xét dấu y'' hoặc bảng xét dấu y' để xác định cực đại/cực tiểu.",
  "variant_template": {
    "pattern": "y = ax³ + bx² + c",
    "variable_ranges": {"a": [1,5], "b": [-10,-1], "c": [-5,5]}
  }
}
```

---

## 6. API Endpoints

### 6.1 Auth

```
POST /api/auth/register     - Đăng ký (HS hoặc PH)
POST /api/auth/login         - Đăng nhập
POST /api/auth/link-parent   - Link HS với PH (bằng mã mời)
```

### 6.2 Chat (Student)

```
POST /api/chat/send
  Body: { session_id, message, device_id }
  Response: {
    mode: "explain" | "hint" | "assess",
    content: "...",
    hint_number: 1 | 2 | 3 | null,
    citations: [{id, title}],
    badge_earned: null | "streak_7",
    daily_usage: { used: 12, limit: 40 },
    device_conflict: null | { message, active_device }
  }

POST /api/chat/sessions          - Tạo session mới
GET  /api/chat/sessions          - Lấy danh sách sessions
GET  /api/chat/sessions/:id      - Lấy messages trong session
```

### 6.2.1 Device Management & OTP (Pro tier only)

```
POST /api/devices/login
  Body: { device_id, device_name, device_type, email }
  Response: {
    status: "success" | "otp_required",
    message: "...",
    active_device: { device_name, last_activity } | null
  }

POST /api/devices/verify-otp
  Body: { device_id, otp_code }
  Response: {
    status: "success" | "error",
    message: "..."
  }

POST /api/devices/resend-otp
  Body: { device_id }
  Response: {
    status: "success",
    message: "OTP đã được gửi lại"
  }

GET  /api/devices/list
  Response: {
    devices: [{ device_id, device_name, is_active, last_activity }]
  }
```

### 6.3 Student Profile & Gamification

```
GET  /api/student/profile        - Thông tin HS
GET  /api/student/knowledge      - Knowledge state (mastery per topic)
GET  /api/student/streak         - Streak hiện tại
GET  /api/student/badges         - Danh sách badges
GET  /api/student/stats          - Thống kê tổng hợp
```

### 6.4 Daily Challenge

```
GET  /api/challenge/today        - Bài thử thách hôm nay
POST /api/challenge/submit       - Nộp bài (kiểm tra bằng SymPy)
```

### 6.5 Parent Dashboard

```
GET  /api/parent/children                - DS con đã link
GET  /api/parent/reports/:student_id     - Báo cáo daily/weekly
GET  /api/parent/reports/:student_id/weekly  - Báo cáo tuần
GET  /api/parent/children/:id/knowledge  - Knowledge state của con
```

---

## 7. Subscription & Usage Enforcement

### 7.1 Daily Limit Check (All tiers)

```python
def check_daily_limit(user_id, date):
    """
    Check if user has reached daily limit.
    Returns: { allowed: bool, used: int, limit: int }
    """
    user = get_user(user_id)
    usage = get_daily_usage(user_id, date)
    
    return {
        "allowed": usage.problems_solved < user.daily_limit,
        "used": usage.problems_solved,
        "limit": user.daily_limit
    }
```

### 7.2 OTP Device Verification (Pro tier only)

```python
def login_with_device_check(user_id, device_id, email):
    """
    Check if device is new and require OTP if needed.
    Returns: { status: str, message: str }
    """
    user = get_user(user_id)
    
    # Only enforce for Pro tier
    if user.subscription_tier != 'pro':
        create_session(user_id, device_id)
        return {"status": "success"}
    
    # Check active session
    active_session = get_active_session(user_id)
    
    # No active session or same device → Login directly
    if not active_session or active_session.device_id == device_id:
        create_session(user_id, device_id)
        return {"status": "success"}
    
    # Different device → Send OTP
    otp = generate_otp()  # 6-digit random number
    save_otp(user_id, device_id, otp, expires_in_minutes=5)
    send_email(email, f"Mã xác nhận đăng nhập: {otp}")
    
    return {
        "status": "otp_required",
        "message": "Vui lòng nhập mã OTP đã gửi qua email",
        "active_device": active_session.device_name
    }

def verify_otp_and_login(user_id, device_id, otp_code):
    """
    Verify OTP and login to new device.
    Returns: { status: str, message: str }
    """
    # Check OTP
    otp_record = get_otp(user_id, device_id)
    
    if not otp_record or otp_record.is_used:
        return {"status": "error", "message": "OTP không hợp lệ"}
    
    if otp_record.expires_at < now():
        return {"status": "error", "message": "OTP đã hết hạn"}
    
    if otp_record.otp_code != otp_code:
        return {"status": "error", "message": "OTP không đúng"}
    
    # Mark OTP as used
    mark_otp_used(otp_record.id)
    
    # Logout all other devices
    logout_all_devices(user_id)
    
    # Login new device
    create_session(user_id, device_id)
    
    return {"status": "success", "message": "Đăng nhập thành công"}

def generate_otp():
    """Generate 6-digit OTP"""
    import random
    return str(random.randint(100000, 999999))
```

### 7.3 Tại sao OTP hiệu quả chặn abuse?

**Tâm lý học:**
```python
# Scenario: 5 bạn chia sẻ 1 acc Pro

# Buổi sáng (8-10h):
# - Bạn A login → OK (first device)
# - Bạn B login → OTP gửi cho chủ acc
# - Chủ acc share OTP → Bạn A bị logout

# Buổi trưa (12-14h):
# - Bạn C login → OTP gửi cho chủ acc
# - Chủ acc share OTP → Bạn B bị logout

# Buổi chiều (16-18h):
# - Bạn D login → OTP gửi cho chủ acc
# - ...

# Kết quả:
# - Chủ acc nhận 10-15 OTP/ngày
# - Cực kỳ phiền!
# - Tự nguyện không chia sẻ nữa
```

**User thật:**
```python
# - Chỉ nhận OTP khi đổi thiết bị (điện thoại → laptop)
# - Thường chỉ 1-2 lần/ngày
# - Không phiền
```

---

## 8. Anti-Hallucination Pipeline

```
Request
   │
   ▼
┌─────────────────┐
│ 1. Assess       │ Intent + history + prerequisites
│    Gateway      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 2. RAG Lookup   │ ChromaDB → concepts, methods, examples
│    + Citation   │ Mỗi response phải kèm [REF: ID]
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 3. SymPy        │ Mọi phép tính → SymPy (KHÔNG để LLM tính)
│    Tool Call    │ LLM chỉ format kết quả thành ngôn ngữ tự nhiên
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 4. LLM Generate │ Gemini 2.5 Flash Lite
│    (Socratic)   │ System prompt: Socratic method, cite sources
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ 5. Confidence   │ Score > 0.9: gửi bình thường
│    Check        │ Score 0.7-0.9: gửi + cảnh báo
│                 │ Score < 0.7: từ chối, đề nghị hỏi thầy/cô
└────────┬────────┘
         │
         ▼
   Response + Citations
```

### Quy tắc cho LLM (System Prompt)

```
Bạn là MathHint, gia sư Toán THPT.

QUY TẮC TUYỆT ĐỐI:
1. KHÔNG BAO GIỜ đưa ra đáp án số trực tiếp.
2. KHÔNG BAO GIỜ tự tính toán. Dùng tool SymPy cho mọi phép tính.
3. LUÔN dẫn nguồn [REF: ID] khi nhắc đến khái niệm hoặc phương pháp.
4. Nếu không chắc chắn, nói thẳng: "Mình chưa chắc, em hỏi thầy/cô nhé!"

CHẾ ĐỘ EXPLAIN:
- Giải thích khái niệm đầy đủ, có ví dụ minh họa.
- Dùng ngôn ngữ thân thiện, gần gũi.

CHẾ ĐỘ HINT:
- Số gợi ý KHÔNG cố định. Tự đánh giá độ phức tạp bài toán để quyết định tổng số hints (1–5).
- Hint đầu: Gợi ý hướng đi (nhẹ nhất).
- Hint giữa: Gợi ý phương pháp cụ thể, từng bước.
- Hint cuối: Gợi ý chi tiết bước đầu tiên, gần như dẫn tay.
- Sau khi hết hints: Nêu cách giải tổng quát (KHÔNG nêu đáp án).

GIỌNG ĐIỆU:
- Thân thiện, khích lệ, không phán xét.
- Dùng "em" / "mình". Không dùng "bạn" hay "tôi".
- Khi HS làm đúng: khen cụ thể ("Em tính đạo hàm chính xác rồi!").
- Khen ngợi nỗ lực, không chỉ kết quả.
```

---

## 9. Gamification System

### Badge Types

| Badge | Điều kiện | Icon |
|:---|:---|:---|
| `streak_3` | 3 ngày liên tục | 🔥 |
| `streak_7` | 7 ngày liên tục | 🔥🔥 |
| `streak_30` | 30 ngày liên tục | 🔥🔥🔥 |
| `self_solve_10` | Tự giải 10 bài (≤2 hints) | 🧠 |
| `self_solve_50` | Tự giải 50 bài | 🧠⭐ |
| `master_{topic}` | Mastery ≥ 0.9 cho topic | 🏆 |
| `first_challenge` | Hoàn thành Daily Challenge đầu tiên | 🎯 |
| `explorer` | Thử phương pháp mới cho cùng dạng bài | 🔬 |

### Mastery Calculation

```python
def update_mastery(user_id, topic, hints_used, solved):
    """
    mastery tăng/giảm dựa trên số hints cần dùng.
    - Giải với 0-1 hint: +0.15
    - Giải với 2 hints:  +0.10
    - Giải với 3 hints:  +0.05
    - Cần xem general method: +0.02
    - Không giải được:   -0.05
    
    mastery ∈ [0.0, 1.0]
    """
```

---

## 10. Push Notification Schedule

| Thời gian | Đối tượng | Nội dung |
|:---|:---|:---|
| **19:00** | Học sinh | "🔔 Daily Challenge mới! Hôm nay: {topic}" |
| **20:30** | Học sinh (chưa active) | "📝 Bài thử thách đang chờ em..." (Zeigarnik) |
| **21:00** | Phụ huynh | "📊 Báo cáo hôm nay: Con đã giải {n} bài..." |
| **Chủ nhật 9:00** | Phụ huynh | "📈 Báo cáo tuần: Tiến bộ {x}%, master {n} chủ đề" |

---

## 11. Implementation Phases

### Phase 1 — MVP (6-8 tuần)

| Tuần | Task | Output |
|:---|:---|:---|
| 1-2 | Backend skeleton + Auth + DB schema | FastAPI + PostgreSQL + Firebase Auth |
| 2-3 | RAG setup: ChromaDB + 50 bài knowledge base | Curated content cho Đạo hàm + Cực trị |
| 3-4 | Assess Gateway + Explain/Hint modes | Core chat flow hoạt động |
| 4-5 | SymPy integration + Anti-hallucination pipeline | Tool-use + confidence scoring |
| 5-6 | Frontend React migration + Chat UI | Kết nối API thực |
| 6-7 | Parent dashboard + Daily report | Push notification |
| 7-8 | Streak/badge system + Daily Challenge | Gamification cơ bản |

### Phase 2 — Growth (tuần 9-16)

- **OTP device verification** (Pro tier)
- Mở rộng knowledge base (Tích phân, Lượng giác, PT Bậc 2)
- AI variant generator + SymPy verify cho Daily Challenge
- Weekly report cho phụ huynh
- Payment integration (MoMo/VNPay)
- Dark mode, settings persistence

### Phase 3 — Scale (tuần 17+)

- Mobile app (React Native)
- Mở rộng môn học (Lý, Hóa, Anh)
- Admin dashboard (content management, analytics)
- A/B testing framework cho prompt engineering
- Community features (opt-in leaderboard)

---

## 12. Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/mathhint

# LLM
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash-lite

# Fallback LLM
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini

# ChromaDB
CHROMA_HOST=localhost
CHROMA_PORT=8000
CHROMA_COLLECTION=mathhint_knowledge

# Firebase
FIREBASE_PROJECT_ID=mathhint
FIREBASE_API_KEY=your_firebase_api_key

# App
APP_SECRET_KEY=your_secret
CONFIDENCE_THRESHOLD_HIGH=0.9
CONFIDENCE_THRESHOLD_LOW=0.7
MAX_HINTS=5
DAILY_FREE_LIMIT=5
DAILY_PLUS_LIMIT=15
DAILY_PRO_LIMIT=40
OTP_EXPIRY_MINUTES=5
SESSION_TIMEOUT_HOURS=24
```

---

## 13. Tài liệu liên quan

| File | Mô tả |
|:---|:---|
| `product_analysis.md` | Đánh giá sản phẩm từ góc nhìn PM |
| `strategy_deep_dive.md` | Phân tích chiến lược chi tiết (tâm lý, marketing, anti-hallucination) |
| `model_comparison.md` | So sánh GPT-4o Mini vs Gemini 2.5 Flash Lite |
| `index.html` | Prototype giao diện chat HS |
| `parent.html` | Prototype dashboard phụ huynh |
| `login.html` | Prototype trang đăng nhập |
