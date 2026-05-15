# 03 · Cost Calculation — Tính chi phí từng Config × 2 Scenarios

> **Mục tiêu**: Với mỗi config đã thiết kế ở `02-config-design.md`, tính cost/turn → cost/conversation → monthly cho cả 2 scenarios (low season + high season).
>
> **Thời gian**: 55 phút (phần lớn của Main phase)

---

## Setup chung — Tham số cố định

```text
System prompt:              500 tokens
User message:                80 tokens
Assistant response:         180 tokens (output)
1 prior turn (history):     260 tokens (80 user + 180 assistant)
RAG top-5 chunks:         1,250 tokens (cố định)
Web search results:         800 tokens (khi bật)
Web search API call:       $0.008 / call (Tavily)
LLM classifier:            ~170 tokens (150 in + 20 out)
```

**Scenario A — mùa thấp điểm**:

```text
Volume:            300 conversations / ngày
Turns/conv:        avg 4 lượt
Intent mix:        Guide 50%, Visa 25%, Weather 10%, Booking 10%, Complaint 5%
AI-served ratio:   85% (15% là Booking + Complaint = handoff)
```

**Scenario B — mùa cao điểm**:

```text
Volume:           1,200 conversations / ngày (×4)
Turns/conv:        avg 7 lượt
Intent mix:        Guide 30%, Visa 15%, Weather 10%, Booking 35%, Complaint 10%
AI-served ratio:   55% (45% là handoff)
```

**Human baseline**: $0.50 / conversation.

---

## Config 1 — Backpacker Bot

**Specs:** GPT-4o-mini ($0.15/$0.60 per 1M) | Web OFF | History Last 3 | Keyword classifier ($0)

### Cost per turn calculation

History tokens = min(T-1, 3) × 260

| Turn | History tokens | Input total | Output | Cost input | Cost output | Cost web | Cost classifier | Total/turn |
|------|---------------|-------------|--------|-----------|-------------|----------|----------------|-----------|
| T1 | 0 | 500+0+1250+80 = 1,830 | 180 | $0.000275 | $0.000108 | $0 | $0 | **$0.000383** |
| T2 | 260 | 500+260+1250+80 = 2,090 | 180 | $0.000314 | $0.000108 | $0 | $0 | **$0.000422** |
| T3 | 520 | 500+520+1250+80 = 2,350 | 180 | $0.000353 | $0.000108 | $0 | $0 | **$0.000461** |
| T4 | 780 | 500+780+1250+80 = 2,610 | 180 | $0.000392 | $0.000108 | $0 | $0 | **$0.000500** |
| T5 | 780 | 500+780+1250+80 = 2,610 | 180 | $0.000392 | $0.000108 | $0 | $0 | **$0.000500** |
| T6 | 780 | 500+780+1250+80 = 2,610 | 180 | $0.000392 | $0.000108 | $0 | $0 | **$0.000500** |
| T7 | 780 | 500+780+1250+80 = 2,610 | 180 | $0.000392 | $0.000108 | $0 | $0 | **$0.000500** |

*Note: Web OFF cho tất cả intent. Keyword classifier = $0. History cap ở 3 turns nên T5-T7 giống T4.*

### Cost per conversation by intent

**Scenario A (4 turns):**
- Guide (4t, no web): $0.000383 + $0.000422 + $0.000461 + $0.000500 = **$0.001766**
- Visa (4t, no web): **$0.001766** (same — web OFF)
- Weather (4t, no web): **$0.001766** (same — web OFF)
- Booking (1t handoff): **$0** (keyword classify + handoff, no LLM generation)
- Complaint (1t handoff): **$0** (keyword classify + handoff, no LLM generation)

**Scenario B (7 turns):**
- Guide (7t, no web): $0.000383+$0.000422+$0.000461+$0.000500×4 = **$0.003266**
- Visa (7t, no web): **$0.003266**
- Weather (7t, no web): **$0.003266**
- Booking (1t handoff): **$0**
- Complaint (1t handoff): **$0**

### Weighted average cost per conversation

**Scenario A:**
```
avg_cost_A = 50% × $0.001766 + 25% × $0.001766 + 10% × $0.001766 + 10% × $0 + 5% × $0
           = 85% × $0.001766
           = $0.001501
```

**Scenario B:**
```
avg_cost_B = 30% × $0.003266 + 15% × $0.003266 + 10% × $0.003266 + 35% × $0 + 10% × $0
           = 55% × $0.003266
           = $0.001796
```

### Monthly cost + comparison

| Item | Scenario A (4 turns) | Scenario B (7 turns) |
|---|---|---|
| Cost / conversation (avg) | **$0.0015** | **$0.0018** |
| Monthly cost | $0.0015 × 300 × 30 = **$13.51** | $0.0018 × 1,200 × 30 = **$64.66** |
| Human baseline | $4,500 | $18,000 |
| **Rẻ hơn human** | **333×** | **278×** |
| **Savings %** | **99.7%** | **99.6%** |

**Sanity check:**

```text
Cost/conv $0.0015–$0.0018 — hợp lý cho GPT-4o-mini + no web + short history.
Monthly $13–$65 — cực rẻ, đúng với expectation cho cheapest config.
Rẻ hơn human 278–333× — impressive nhưng đánh đổi quality.
```

---

## Config 2 — First-Class Concierge

**Specs:** Claude Sonnet 4.6 ($3.00/$15.00 per 1M) | Web ON broad | History Full | LLM classifier (GPT-4o-mini)

### Cost per turn calculation

History tokens = (T-1) × 260 (Full history)
Web search: ON cho mọi AI-served turn → +800 tokens input + $0.008 API/turn
LLM classifier: 150 tokens in + 20 tokens out (GPT-4o-mini) = $0.15×150/1M + $0.60×20/1M = $0.0000225 + $0.000012 = **$0.0000345/call**

| Turn | History | Input total (w/ web) | Output | Cost model | Cost web API | Cost classifier | Total/turn |
|------|---------|---------------------|--------|-----------|-------------|----------------|-----------|
| T1 | 0 | 500+0+1250+800+80 = 2,630 | 180 | $0.00789+$0.00270 = $0.01059 | $0.008 | $0.0000345 | **$0.01862** |
| T2 | 260 | 500+260+1250+800+80 = 2,890 | 180 | $0.00867+$0.00270 = $0.01137 | $0.008 | $0.0000345 | **$0.01940** |
| T3 | 520 | 500+520+1250+800+80 = 3,150 | 180 | $0.00945+$0.00270 = $0.01215 | $0.008 | $0.0000345 | **$0.02018** |
| T4 | 780 | 500+780+1250+800+80 = 3,410 | 180 | $0.01023+$0.00270 = $0.01293 | $0.008 | $0.0000345 | **$0.02096** |
| T5 | 1,040 | 500+1040+1250+800+80 = 3,670 | 180 | $0.01101+$0.00270 = $0.01371 | $0.008 | $0.0000345 | **$0.02174** |
| T6 | 1,300 | 500+1300+1250+800+80 = 3,930 | 180 | $0.01179+$0.00270 = $0.01449 | $0.008 | $0.0000345 | **$0.02252** |
| T7 | 1,560 | 500+1560+1250+800+80 = 4,190 | 180 | $0.01257+$0.00270 = $0.01527 | $0.008 | $0.0000345 | **$0.02330** |

*Cost model breakdown: Input = tokens × $3.00/1M, Output = 180 × $15.00/1M = $0.00270 cố định*

### Cost per conversation by intent

**Scenario A (4 turns) — tất cả AI-served intents giống nhau (web ON broad):**
- Guide/Visa/Weather (4t): $0.01862+$0.01940+$0.02018+$0.02096 = **$0.07916**
- Booking (1t handoff): chỉ classifier = **$0.0000345**
- Complaint (1t handoff): chỉ classifier = **$0.0000345**

**Scenario B (7 turns):**
- Guide/Visa/Weather (7t): $0.01862+$0.01940+$0.02018+$0.02096+$0.02174+$0.02252+$0.02330 = **$0.14672**
- Booking (1t handoff): **$0.0000345**
- Complaint (1t handoff): **$0.0000345**

### Weighted average cost per conversation

**Scenario A:**
```
avg_cost_A = (50%+25%+10%) × $0.07916 + (10%+5%) × $0.0000345
           = 85% × $0.07916 + 15% × $0.0000345
           = $0.06729 + $0.0000052
           = $0.06729
```

**Scenario B:**
```
avg_cost_B = (30%+15%+10%) × $0.14672 + (35%+10%) × $0.0000345
           = 55% × $0.14672 + 45% × $0.0000345
           = $0.08070 + $0.0000155
           = $0.08071
```

### Monthly cost + comparison

| Item | Scenario A (4 turns) | Scenario B (7 turns) |
|---|---|---|
| Cost / conversation (avg) | **$0.0673** | **$0.0807** |
| Monthly cost | $0.0673 × 300 × 30 = **$605.61** | $0.0807 × 1,200 × 30 = **$2,905.56** |
| Human baseline | $4,500 | $18,000 |
| **Rẻ hơn human** | **7.4×** | **6.2×** |
| **Savings %** | **86.5%** | **83.9%** |

**Sanity check:**

```text
Cost/conv $0.067–$0.081 — hợp lý cho Claude Sonnet + web search mỗi turn + full history.
Monthly $606–$2,906 — đắt nhất trong 3 configs nhưng vẫn rẻ hơn human 6-7×.
So với Config 1: đắt hơn ~45× (monthly) — chênh lệch lớn, phản ánh đúng model tier gap.
```

---

## Config 3 — Smart Navigator

**Specs:**
- Guide + Weather: GPT-4o-mini ($0.15/$0.60 per 1M)
- Visa: Claude Haiku 4.5 ($1.00/$5.00 per 1M)
- Web: ON selective (Visa + Weather only)
- History: Last 5
- Classifier: GPT-4o-mini LLM ($0.0000345/call)

### Cost per turn — GUIDE intent (GPT-4o-mini, no web, Last 5)

History = min(T-1, 5) × 260

| Turn | History | Input total | Output | Cost model | Cost web | Cost classifier | Total/turn |
|------|---------|-------------|--------|-----------|----------|----------------|-----------|
| T1 | 0 | 1,830 | 180 | $0.000275+$0.000108 = $0.000383 | $0 | $0.0000345 | **$0.000417** |
| T2 | 260 | 2,090 | 180 | $0.000314+$0.000108 = $0.000422 | $0 | $0.0000345 | **$0.000456** |
| T3 | 520 | 2,350 | 180 | $0.000353+$0.000108 = $0.000461 | $0 | $0.0000345 | **$0.000495** |
| T4 | 780 | 2,610 | 180 | $0.000392+$0.000108 = $0.000500 | $0 | $0.0000345 | **$0.000534** |
| T5 | 1,040 | 2,870 | 180 | $0.000431+$0.000108 = $0.000539 | $0 | $0.0000345 | **$0.000573** |
| T6 | 1,300 | 3,130 | 180 | $0.000470+$0.000108 = $0.000578 | $0 | $0.0000345 | **$0.000612** |
| T7 | 1,300 | 3,130 | 180 | $0.000470+$0.000108 = $0.000578 | $0 | $0.0000345 | **$0.000612** |

*Note: Last 5 → history cap ở turn 6+ = 5×260 = 1,300 tokens*

### Cost per turn — VISA intent (Claude Haiku 4.5, web ON, Last 5)

| Turn | History | Input total (w/ web) | Output | Cost model | Cost web API | Cost classifier | Total/turn |
|------|---------|---------------------|--------|-----------|-------------|----------------|-----------|
| T1 | 0 | 500+0+1250+800+80 = 2,630 | 180 | $0.00263+$0.00090 = $0.00353 | $0.008 | $0.0000345 | **$0.01156** |
| T2 | 260 | 2,890 | 180 | $0.00289+$0.00090 = $0.00379 | $0.008 | $0.0000345 | **$0.01182** |
| T3 | 520 | 3,150 | 180 | $0.00315+$0.00090 = $0.00405 | $0.008 | $0.0000345 | **$0.01208** |
| T4 | 780 | 3,410 | 180 | $0.00341+$0.00090 = $0.00431 | $0.008 | $0.0000345 | **$0.01234** |
| T5 | 1,040 | 3,670 | 180 | $0.00367+$0.00090 = $0.00457 | $0.008 | $0.0000345 | **$0.01260** |
| T6 | 1,300 | 3,930 | 180 | $0.00393+$0.00090 = $0.00483 | $0.008 | $0.0000345 | **$0.01286** |
| T7 | 1,300 | 3,930 | 180 | $0.00393+$0.00090 = $0.00483 | $0.008 | $0.0000345 | **$0.01286** |

### Cost per turn — WEATHER intent (GPT-4o-mini, web ON, Last 5)

| Turn | History | Input total (w/ web) | Output | Cost model | Cost web API | Cost classifier | Total/turn |
|------|---------|---------------------|--------|-----------|-------------|----------------|-----------|
| T1 | 0 | 2,630 | 180 | $0.000395+$0.000108 = $0.000503 | $0.008 | $0.0000345 | **$0.008537** |
| T2 | 260 | 2,890 | 180 | $0.000434+$0.000108 = $0.000542 | $0.008 | $0.0000345 | **$0.008576** |
| T3 | 520 | 3,150 | 180 | $0.000473+$0.000108 = $0.000581 | $0.008 | $0.0000345 | **$0.008615** |
| T4 | 780 | 3,410 | 180 | $0.000512+$0.000108 = $0.000620 | $0.008 | $0.0000345 | **$0.008654** |
| T5 | 1,040 | 3,670 | 180 | $0.000551+$0.000108 = $0.000659 | $0.008 | $0.0000345 | **$0.008693** |
| T6 | 1,300 | 3,930 | 180 | $0.000590+$0.000108 = $0.000698 | $0.008 | $0.0000345 | **$0.008732** |
| T7 | 1,300 | 3,930 | 180 | $0.000590+$0.000108 = $0.000698 | $0.008 | $0.0000345 | **$0.008732** |

### Cost per conversation by intent

**Scenario A (4 turns):**
- Guide (4t): $0.000417+$0.000456+$0.000495+$0.000534 = **$0.001902**
- Visa (4t, web ON): $0.01156+$0.01182+$0.01208+$0.01234 = **$0.04780**
- Weather (4t, web ON): $0.008537+$0.008576+$0.008615+$0.008654 = **$0.034382**
- Booking (1t handoff): classifier only = **$0.0000345**
- Complaint (1t handoff): classifier only = **$0.0000345**

**Scenario B (7 turns):**
- Guide (7t): $0.000417+$0.000456+$0.000495+$0.000534+$0.000573+$0.000612+$0.000612 = **$0.003699**
- Visa (7t, web ON): $0.01156+$0.01182+$0.01208+$0.01234+$0.01260+$0.01286+$0.01286 = **$0.08612**
- Weather (7t, web ON): $0.008537+$0.008576+$0.008615+$0.008654+$0.008693+$0.008732+$0.008732 = **$0.060539**
- Booking (1t handoff): **$0.0000345**
- Complaint (1t handoff): **$0.0000345**

### Weighted average cost per conversation

**Scenario A:**
```
avg_cost_A = 50% × $0.001902 + 25% × $0.04780 + 10% × $0.034382 + 10% × $0.0000345 + 5% × $0.0000345
           = $0.000951 + $0.011950 + $0.003438 + $0.0000035 + $0.0000017
           = $0.016343
```

**Scenario B:**
```
avg_cost_B = 30% × $0.003699 + 15% × $0.08612 + 10% × $0.060539 + 35% × $0.0000345 + 10% × $0.0000345
           = $0.001110 + $0.012918 + $0.006054 + $0.0000121 + $0.0000035
           = $0.020097
```

### Monthly cost + comparison

| Item | Scenario A (4 turns) | Scenario B (7 turns) |
|---|---|---|
| Cost / conversation (avg) | **$0.0163** | **$0.0201** |
| Monthly cost | $0.0163 × 300 × 30 = **$146.79** | $0.0201 × 1,200 × 30 = **$723.50** |
| Human baseline | $4,500 | $18,000 |
| **Rẻ hơn human** | **30.7×** | **24.9×** |
| **Savings %** | **96.7%** | **96.0%** |

**Sanity check:**

```text
Cost/conv $0.016–$0.020 — hợp lý: nằm giữa Config 1 ($0.0015) và Config 2 ($0.067).
Web search cost ($0.008/turn) chiếm phần lớn cost cho Weather intent — đúng vì model rẻ.
Visa intent đắt hơn Guide ~25× (do Haiku 4.5 + web search) — hợp lý.
Monthly $147–$724 — sweet spot giữa Budget ($14–$65) và Premium ($606–$2,906).
```

---

## Config 4 — DeepSeek Maverick (optional)

**Specs:** DeepSeek V4 Pro ($1.74/$3.48 per 1M) cho tất cả | Web ON selective (Visa+Weather) | History Last 5 | Keyword classifier ($0)

### Cost per turn — Guide intent (no web, Last 5)

| Turn | History | Input total | Output | Cost model | Cost web | Total/turn |
|------|---------|-------------|--------|-----------|----------|-----------|
| T1 | 0 | 1,830 | 180 | $0.003184+$0.000626 = $0.003810 | $0 | **$0.003810** |
| T2 | 260 | 2,090 | 180 | $0.003637+$0.000626 = $0.004263 | $0 | **$0.004263** |
| T3 | 520 | 2,350 | 180 | $0.004089+$0.000626 = $0.004715 | $0 | **$0.004715** |
| T4 | 780 | 2,610 | 180 | $0.004541+$0.000626 = $0.005167 | $0 | **$0.005167** |
| T5 | 1,040 | 2,870 | 180 | $0.004994+$0.000626 = $0.005620 | $0 | **$0.005620** |
| T6 | 1,300 | 3,130 | 180 | $0.005446+$0.000626 = $0.006072 | $0 | **$0.006072** |
| T7 | 1,300 | 3,130 | 180 | $0.005446+$0.000626 = $0.006072 | $0 | **$0.006072** |

### Cost per turn — Visa/Weather intent (web ON, Last 5)

| Turn | History | Input total (w/ web) | Output | Cost model | Cost web API | Total/turn |
|------|---------|---------------------|--------|-----------|-------------|-----------|
| T1 | 0 | 2,630 | 180 | $0.004576+$0.000626 = $0.005202 | $0.008 | **$0.013202** |
| T2 | 260 | 2,890 | 180 | $0.005029+$0.000626 = $0.005655 | $0.008 | **$0.013655** |
| T3 | 520 | 3,150 | 180 | $0.005481+$0.000626 = $0.006107 | $0.008 | **$0.014107** |
| T4 | 780 | 3,410 | 180 | $0.005933+$0.000626 = $0.006559 | $0.008 | **$0.014559** |
| T5 | 1,040 | 3,670 | 180 | $0.006386+$0.000626 = $0.007012 | $0.008 | **$0.015012** |
| T6 | 1,300 | 3,930 | 180 | $0.006838+$0.000626 = $0.007464 | $0.008 | **$0.015464** |
| T7 | 1,300 | 3,930 | 180 | $0.006838+$0.000626 = $0.007464 | $0.008 | **$0.015464** |

### Cost per conversation

**Scenario A (4 turns):**
- Guide: $0.003810+$0.004263+$0.004715+$0.005167 = **$0.017955**
- Visa (web ON): $0.013202+$0.013655+$0.014107+$0.014559 = **$0.055523**
- Weather (web ON): **$0.055523** (same model + web)
- Booking/Complaint: **$0** (keyword + handoff)

**Scenario B (7 turns):**
- Guide: $0.003810+$0.004263+$0.004715+$0.005167+$0.005620+$0.006072+$0.006072 = **$0.035719**
- Visa/Weather (web ON): $0.013202+$0.013655+$0.014107+$0.014559+$0.015012+$0.015464+$0.015464 = **$0.101463**
- Booking/Complaint: **$0**

### Weighted average + Monthly

**Scenario A:**
```
avg_cost_A = 50%×$0.017955 + 25%×$0.055523 + 10%×$0.055523 + 15%×$0
           = $0.008978 + $0.013881 + $0.005552
           = $0.028411
```

**Scenario B:**
```
avg_cost_B = 30%×$0.035719 + 15%×$0.101463 + 10%×$0.101463 + 45%×$0
           = $0.010716 + $0.015219 + $0.010146
           = $0.036081
```

| Item | Scenario A | Scenario B |
|---|---|---|
| Cost / conversation (avg) | **$0.0284** | **$0.0361** |
| Monthly cost | $0.0284 × 300 × 30 = **$255.70** | $0.0361 × 1,200 × 30 = **$1,298.92** |
| Human baseline | $4,500 | $18,000 |
| **Rẻ hơn human** | **17.6×** | **13.9×** |
| **Savings %** | **94.3%** | **92.8%** |

---

## Quality + Speed estimate (qualitative)

| Config | Quality (Low/Med/High) | Speed (Low/Med/High) | Lý do |
|---|---|---|---|
| 1: Backpacker Bot | Low (70%) | High (~200ms) | GPT-4o-mini nhanh + rẻ nhưng miss nuance, no web = outdated info |
| 2: First-Class Concierge | High (90%) | Low (~2-3s) | Sonnet 4.6 hiểu context tốt + web fresh + full history, nhưng chậm |
| 3: Smart Navigator | Medium-High (82%) | Medium (~500ms avg) | Mix model: Guide nhanh+rẻ, Visa chính xác. Avg speed phụ thuộc intent |
| 4: DeepSeek Maverick | High (85%) | Medium (~1-2s) | V4 Pro strong quality, nhanh hơn Sonnet, web selective đủ cho Visa/Weather |

---

## Bảng kiểm trước khi sang file tiếp theo

- [x] Tất cả ≥3 configs đã có cost/conv + monthly cho cả 2 scenarios
- [x] Đã so sánh từng config với human baseline ($0.50/conv)
- [x] Có quality + speed estimate cho mỗi config
- [x] Đã sanity check — không có số "quá lạ"

Xong → mở `04-comparison-table.md`.
