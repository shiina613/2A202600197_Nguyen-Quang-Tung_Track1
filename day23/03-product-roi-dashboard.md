# 03 — Product ROI Dashboard cho SmartHint AI (v2 — sau red-team)

**Học viên (đại diện copy về):** Nguyễn Quang Tùng — 2A202600197
**Loại output:** Nhóm (WS3-WS5 — Day 23) — file chính 60đ
**Sản phẩm:** SmartHint AI — gia sư Socratic AI cho học sinh THPT lực học 6.0-8.0.
**Người dùng chính:** Học sinh 15-18 tuổi (end-user) + phụ huynh (buyer, dùng Parent Pulse).
**Phạm vi dashboard:** 1 product + 3 workflow chính + 1 workflow phụ huynh (tổng 4 workflow).
**Phiên bản:** v2 (đã red-team 4 vai và sửa từ v1).

> Bài học chỉ đạo: **Wow ≠ Adoption. Volume ≠ Value.** North Star của SmartHint **không phải** "% phiên hoàn thành" (đây là containment kiểu Klarna) mà là **"self-calc gate pass rate ở lần thử ≤2"** — đo chuyển hành vi từ "đoán/chép" sang "tự tính đúng".

---

## Executive Summary (1 trang — đọc trong 60 giây)

> **Câu hỏi nhóm trả lời:** SmartHint AI thực sự đi vào workflow học của học sinh THPT, hay chỉ "wow rồi bỏ"?
>
> **Quyết định sau red-team 4 vai (User · Risk · Workflow Owner · CFO):** **CONTINUE WITH GUARDRAILS** — chạy pilot 100-300 học sinh trong 8 tuần. Chỉ mở rộng >300 khi đạt đồng thời 3 gate định lượng (xem §"Decision Rules").

**Mô hình tóm tắt (đọc dọc):**

| Tầng | Câu hỏi 1 dòng | North-Star (W8 target) | Counter (chống Goodhart) |
|---|---|---:|---|
| **Adoption (NPT × ADKAR)** | Học sinh có dùng workflow mới đều không? | ≥ 35% học sinh active 3 tuần liên tiếp | Open rate phụ huynh ≥ 35% (cross-cohort) |
| **Quality** | AI có đúng & dạy thật không? | Gold-set classify ≥ 95% (teacher 200 bài) | QA random 5% phiên/tuần |
| **Value (hành vi)** | Học sinh có **hiểu**, không chỉ **hoàn thành**? | **Self-calc gate pass ≤2: ≥ 50% (W8) → ≥ 60% (W12)** | Re-ask rate 7-14 ngày ≤ 30% / ≤ 15% |
| **Trust (buyer)** | Phụ huynh có duy trì niềm tin? | % mở report 3 tuần liên tiếp ≥ 35% | Học sinh approve share report ≥ 80% |
| **Unit economics** | Có khả thi tài chính? | API cost / W4 active learner ≤ \$0.50/tháng | Cost / self-calc pass ≤ \$0.05 |

**Bản đồ file:** §A (Adoption Context — ADKAR/Mollick) → §B (Metrics — 4 layer × 4 workflow) → §C (Dashboard mock — 6 tile) → §D (Decision Memo + Decision Rules).

**5 thay đổi v1→v2 quan trọng nhất:** đổi North Star (containment → behavior change), thêm gold-set (trust architecture kiểu Morgan Stanley), thêm re-ask rate (Goodhart guard), thêm cost ratio (chống "đốt API để đẹp dashboard"), thay parent open rate 1-tuần → 3-tuần liên tiếp + cross-check student approve.

**Framework chính (đầy đủ citation cuối file):** ADKAR · Mollick task split · BCG 10-20-70 · NPT (May 2009) · Goodhart's Law · Klarna/Morgan Stanley pattern.

---

## Tự chấm theo 6 tiêu chí rubric (Day23-Lab-Assignment.md §6)

| # | Tiêu chí rubric | Vị trí trong dashboard | Trạng thái |
|---|---|---|---|
| 1 | Scope rõ: 1 product + 2-4 workflow | A.1 + A.2 + A.3 | ✅ 1 product + **4 workflow** |
| 2 | Chẩn đoán đúng rào cản adoption | A.4 (ADKAR) | ✅ **Desire** + lý do, không chọn tất cả |
| 3 | Tactic gắn với đúng rào cản | A.5 (3 tactic có barrier mapping) | ✅ 3 tactic mỗi cái map về Desire/Reinforcement |
| 4 | Metric productivity/quality/trust/value, không chỉ usage | B.1-B.3 | ✅ 8+ metric Quality/Trust/Value (re-ask, gold-set, approve, cost) |
| 5 | Baseline, target, data source, owner rõ | B.1-B.3 | ✅ Mỗi metric có 4 trường + **phương pháp đo W0** |
| 6 | Red-team risk + Fix + ≥2 thay đổi v1→v2 | "Red-team risks" + Part D §3 | ✅ 8 risks, **5 thay đổi v1→v2** (vượt 150%) |
| + | Decision rules continue/pivot/kill | Part D §1 + Decision Rules block | ✅ "Continue with guardrails" + 4 rule định lượng |

---

## Part A — Adoption Context

### A.1 Thách thức adoption nhóm chọn

| Trường | Trả lời |
|---|---|
| **Thách thức áp dụng AI** | Học sinh quen chép đáp án ăn liền từ QANDA (mở app → chụp đề → chép đáp án) sẽ **không kiên nhẫn** với workflow Socratic Dual-Scaffolding (đọc gợi ý → tự tính → gõ kết quả → lặp lại). Wow (lần đầu thấy AI gợi ý thân thiện) cao nhưng **adoption (workflow học mới đi vào nề nếp) thấp**. |
| **Tình huống xuất phát từ ai / ở đâu?** | Pilot cohort SmartHint giả định 100-300 học sinh đầu tiên (kế thừa MVP Day 17). Tín hiệu kẹt sẽ xuất hiện ở W2-W3: học sinh mở app nhưng skip Tier-2 self-calc, hoặc dùng fallback liên tục. |
| **Dấu hiệu bị kẹt** | (1) Phiên 1-3 hoàn thành cao nhưng W2 retention rớt mạnh; (2) Self-calc gate pass rate ở lần thử ≤2 < 40% (học sinh đoán bừa rồi qua, không hiểu); (3) Fallback usage > 40% phiên; (4) Phụ huynh mở report tuần 1 nhưng tuần 3-4 bỏ. |
| **Vì sao thách thức này đáng giải quyết?** | Toàn bộ giả định rủi ro lớn nhất của MVP (Day 17 Riskiest Assumption) nằm ở đây. Nếu adoption không xảy ra, SmartHint trở thành "QANDA chậm hơn" — competitor sẽ kill ngay. Theo [BCG 2024](https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value), 74% công ty kẹt ở đoạn scale value — 90% nỗ lực nằm ở **people + process** (10-20-70 rule), không ở model. |

### A.2 Sản phẩm / công cụ AI

| Trường | Trả lời |
|---|---|
| **Tên sản phẩm** | SmartHint AI |
| **Người dùng chính** | Học sinh THPT 15-18 tuổi, lực học 6.0-8.0, ôn THPT 2026 hoặc đang học chương trình lớp 10-12 |
| **Buyer** | Phụ huynh (mong tín hiệu tiến bộ đáng tin, không muốn giám sát vi mô) |
| **Bối cảnh sử dụng** | Tự học ở nhà buổi tối (19:00-23:00) và cuối tuần. Khi học sinh kẹt 1 bài toán → bật SmartHint thay vì chép QANDA |
| **Mục tiêu kinh doanh** | (a) Đo được W4 retention học sinh ≥ 25% trong pilot 8 tuần để chứng minh PMF cho seed funding; (b) Giữ chi phí API ≤ $0.50/W4 active learner để có gross margin > 70% khi launch freemium |
| **Mục tiêu học tập** | Học sinh chuyển từ "đoán/chép đáp án" sang "tự tính đúng từ lần thử ≤2" ở các dạng toán đã học |
| **Không nằm trong phạm vi (Day 23)** | Dashboard cho B2B school deal; dashboard cho gói trả phí (chưa launch ở pilot) |

### A.3 Workflow chính (4 workflow)

| # | Workflow | Vai trò AI (Mollick task split) | Mode (Centaur/Cyborg) | Điểm người kiểm tra | Khi AI sai thì xử lý thế nào? |
|---|---|---|---|---|---|
| **W1** | Phân loại đề + Tier-1 hint | **Delegated** — AI nhận diện dạng toán → đề xuất câu hỏi A/B/C gợi hướng | Centaur (handoff rõ) | Content Lead chấm gold-set 200 bài/tháng + QA random 5% session/tuần | Phân loại sai dạng → fallback hint cứng (do giáo viên biên soạn) + đánh dấu bài vào queue audit |
| **W2** | Self-calc gate | **Just Me (học sinh) + Delegated (AI check)** — học sinh tự tính, AI chỉ chấm đúng/sai và ghi vị trí lỗi | Centaur | AI auto-check, không có người kiểm real-time. QA Lead sample 5%/tuần để chấm AI có chấm đúng | Sai 3 lần liên tiếp ở 1 step → kích hoạt fallback video 30-45s; ghi vào "stuck-points" để Content team xem lại |
| **W3** | Empathetic error handling | **Delegated** — AI gợi ý vị trí sai (nhầm dấu, nhầm công thức) với giọng động viên, không lộ đáp án | Cyborg (đan xen) | Content Reviewer + UX Researcher review tone qua transcript anonymized | Học sinh báo cáo "AI mỉa mai / khó hiểu" → flag transcript, đưa vào prompt regression test |
| **W4** | Parent Progress Pulse | **Automated** — AI tổng hợp dữ liệu tuần → bản tóm tắt phụ huynh (mức tổng quan, không transcript) | Centaur | **Học sinh xem trước & approve báo cáo** trước khi gửi phụ huynh (privacy contract của Day 17 PRD) | Học sinh từ chối approve → báo cáo bị giữ lại + ghi event "withhold" để PM Family theo dõi tín hiệu trust |

### A.4 Chẩn đoán ADKAR

| Stage | Nhận định nhóm |
|---|---|
| Awareness | **OK** — học sinh biết SmartHint khác QANDA (qua landing + onboarding) |
| Desire | **YẾU (barrier chính)** — học sinh quen "lười nghĩ", muốn ăn liền |
| Knowledge | OK — workflow Socratic Dual-Scaffolding đủ đơn giản để học bằng onboarding 60s |
| Ability | **YẾU (workflow phụ huynh)** — phụ huynh ít công nghệ, mở email kém |
| Reinforcement | **YẾU (phụ)** — chưa có cơ chế kéo học sinh quay lại tuần 3-4 sau khi novelty hết |

**Barrier chính (chỉ chọn 1):**

```markdown
Desire (học sinh) là barrier chính. Học sinh đã biết SmartHint giúp gì
(Awareness OK), đã biết cách dùng (Knowledge OK), nhưng KHÔNG MUỐN
chuyển từ "chép đáp án" sang "tự tính". Reinforcement là barrier phụ.

Lý do chọn Desire làm chính: nếu fix Desire, học sinh chủ động đi qua
self-calc → từ đó hình thành habit → Reinforcement tự đến. Ngược lại,
nếu fix Reinforcement (gửi notification, streak ép buộc) mà không xử lý
Desire, học sinh sẽ "fake hoàn thành" — đúng bẫy Klarna + Goodhart's Law
(metric trở thành mục tiêu sẽ mất khả năng đo thực tế).
```

### A.5 3 tactic áp dụng (chọn từ 5 Adoption Moves, slide 22/28)

| # | Tactic | Nhắm vào barrier | Áp dụng cho workflow | Người phụ trách | Khi nào hoàn thành |
|---|---|---|---|---|---|
| 1 | **Explain the how** — Onboarding 90s minh hoạ 1 ví dụ cụ thể: "Hôm qua bạn Minh điểm 5.5 → 8 nhờ tự tính 4 bước này"; video learner-testimonial 30s | Desire (học sinh) | W1, W2 | PM Learning | T+2 tuần kể từ pilot start |
| 2 | **Prioritize high-impact tasks** — Pilot khởi đầu chỉ với 3 chuyên đề học sinh "thấy gần thi" (Hàm số, Mũ-Log, Nguyên hàm — đúng PRD Day 17), không mở chuyên đề khó như Số phức | Desire + Ability | W1, W2 | PM Content | T+0 (sẵn sàng từ ngày 1 pilot) |
| 3 | **Turn enthusiasts into teachers** — Top 10% học sinh có pass rate cao nhất được mời share "tip 1 dòng" vào feed cohort; phụ huynh của họ được phỏng vấn 10 phút làm testimonial cho marketing. **KHÔNG công khai leaderboard ranking** (tránh bẫy JPMorgan: dashboard ranking tạo nỗi sợ, làm giảm Desire) | Reinforcement + Desire cohort mới | W2, W4 | Community Lead | T+6 tuần (cần ≥30 active để có ứng viên) |

---

## Part B — Product ROI Dashboard

> **Quy tắc:** Mọi metric đều có (1) phương pháp đo W0 baseline, (2) target, (3) data source cụ thể, (4) owner là role cụ thể, (5) rule khi đỏ. Không có nguồn dữ liệu = không phải metric.
>
> **Quy ước baseline:** Pilot SmartHint chưa chạy → "W0 baseline" = đo trong tuần 1 pilot trên cohort 100-300, dùng làm điểm so sánh cho W4 & W8. Mọi target dưới đây là **target W8** (cuối pilot 8 tuần).

### B.1 Metric toàn product (3 chỉ số chung)

| Layer | Metric | Phương pháp đo W0 baseline | Target (W8 pilot) | Data source | Owner | Red-team risk | Fix ở v2 |
|---|---|---|---:|---|---|---|---|
| **Activation** | % learner hoàn thành ≥1 hint chain CÓ self-calc pass ở lần ≤2 trong session đầu tiên | Đo W0 (tuần 1) trên cohort 100; điều kiện cho target là W0 + ≥10 điểm phần trăm | ≥ 45% | Event log app (`session_first_pass`) | PM Learning | "Hoàn thành chain" có thể bị fake nếu học sinh đoán bừa | **Đổi từ v1**: v1 chỉ đo "% hoàn thành session". v2 thêm điều kiện "có self-calc pass ở lần ≤2" để loại đoán bừa (chống Goodhart) |
| **Retention** | W4 active learner = có ≥3 phiên/tuần × 4 tuần liên tiếp, mỗi phiên có ≥1 self-calc pass | Cohort table tuần 4 + tuần 8; baseline = retention W4 của cohort tuần 1 đầu | ≥ 25% cohort pilot | Event log + cohort table | PM Growth | DAU/MAU không phù hợp cho học sinh (học theo cadence bài kiểm tra, không daily) | **Đổi từ v1**: v1 dùng "DAU/MAU > 40%". v2 đổi sang W4 cohort vì cadence học sinh là weekly (slide 17/28: "Daily support triage daily matter; monthly finance close daily là sai metric") |
| **Trust/Value** | Self-reported "tôi tự tin hơn khi lên bảng / làm bài kiểm tra" sau W8 (5-point, % chọn 4-5) | Pre-survey W0 với chính cohort + **control group N=30** dùng gia sư truyền thống cùng kỳ | ≥ 60% và **không thấp hơn control** | In-app survey W8 + control survey | UX Researcher | Self-report dễ social-desirability bias | **Đổi từ v1**: v1 chỉ self-report SmartHint cohort. v2 thêm **control group** dùng gia sư để so sánh (theo bài học [DWP Copilot trial methodology](https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial) — comparison group cho ước lượng đáng tin hơn self-report) |

### B.2 Metric theo từng workflow

#### W1 — Phân loại đề + Tier-1 hint

| Layer | Metric | W0 baseline | Target W8 | Data source | Owner | Red-team risk | Fix ở v2 |
|---|---|---|---:|---|---|---|---|
| Activation | % session học sinh chọn ≥1 Tier-1 option (không bỏ giữa) | Đo W0 tuần 1 | ≥ 80% | Event log (`tier1_option_selected`) | PM Learning | Học sinh có thể chọn bừa cho qua | Cross-check: pass rate Tier-2 của những người chọn Tier-1 đúng dạng |
| Productivity | Median time chọn Tier-1 option | Đo W0 tuần 1 | < 30s | Event log | PM Learning | Quá nhanh có thể là đoán bừa | Tách metric theo độ phức tạp dạng (cơ bản / vận dụng) |
| **Quality** | **% bài AI phân loại đúng dạng (so với teacher gold-set 200 bài)** | Build gold-set trước T+0 (Content Lead, T-2 tuần); chạy eval lần đầu T+0 | **≥ 95%** trước khi mở cohort > 300 | Gold-set eval / tháng | **Content Lead** | AI sai phân loại → học sinh học sai cả buổi, không ai biết | **Đổi từ v1**: v1 chưa có gold-set. v2 thêm gold-set 200 bài + QA sample 5%/tuần (bài học [Morgan Stanley trust architecture trước scale](https://openai.com/index/morgan-stanley/)) |
| Trust | % session học sinh KHÔNG bỏ ngang sau khi nhận Tier-1 | Đo W0 tuần 1 | ≥ 75% | Event log | PM Learning | "Không bỏ" có thể là để app chạy nền | Cross-check với event time-active (loại session inactive > 5 phút) |
| Value | % session học sinh self-report "có hướng giải" cuối phiên (end-of-session 1-tap) | Đo W0 tuần 1 | ≥ 70% | In-app prompt | UX Researcher | 1-tap dễ tap bừa | Cap rate ở 1 lần/tuần để tránh prompt fatigue |

#### W2 — Self-calc gate (NORTH STAR của SmartHint)

| Layer | Metric | W0 baseline | Target W8 | Data source | Owner | Red-team risk | Fix ở v2 |
|---|---|---|---:|---|---|---|---|
| Activation | % session vượt qua ≥1 self-calc gate | Đo W0 tuần 1 | ≥ 70% | Event log (`gate_pass`) | PM Learning | "Vượt qua" sau N lần thử là khác nhau | Tách theo số lần thử (xem Quality bên dưới) |
| Engagement | Median số self-calc gate / session | Đo W0 tuần 1 | ≥ 3 | Event log | PM Learning | Quá nhiều gate có thể gây nản | Theo dõi bounce rate sau gate thứ 3, 4, 5 |
| Productivity | Median time / gate | Đo W0 tuần 1 | 30s - 3 phút | Event log | PM Learning | Quá nhanh = đoán, quá chậm = nản | Cảnh báo khi > 5 phút (kích hoạt fallback) |
| **Quality** | **🌟 NORTH STAR: % gate pass đúng từ lần thử ≤2 (= hiểu, không đoán)** | Đo W0 tuần 1 → kỳ vọng baseline ~30-35% (giả thuyết: học sinh chưa quen tự tính) | **≥ 50% (W8)** → ≥ 60% (W12) | Event log + answer log | **PM Learning** | Vẫn có thể có hỗ trợ bên ngoài (bạn bè, copilot) | Cross-check với re-ask rate 7d (nếu hiểu thật, ít re-ask) — chống Goodhart bằng cặp metric kéo nhau |
| Trust | % session dùng fallback ≤ 25% (theo PRD Day 17) | Đo W0 tuần 1 | ≤ 25% | Event log (`fallback_triggered`) | PM Learning | Fallback rate thấp có thể vì học sinh bỏ thay vì fallback | Cross-check với bounce-back: trong 7 ngày sau fallback, học sinh có quay lại làm cùng dạng không |
| **Value (mới ở v2)** | **Re-ask rate 7-14 ngày** sau khi pass gate (% học sinh hỏi LẠI cùng dạng bài) | Đo từ W2 (cần lookback 7d nên W0 chưa đủ data) | ≤ 30% trong 7 ngày, ≤ 15% trong 14 ngày | Event log + dạng-bài-classifier | PM Learning | Re-ask có thể là dạng khác nhưng class nhầm | Đánh dấu dạng bằng teacher gold-set, không bằng AI classifier (avoid AI tự chấm chính nó) |

#### W3 — Empathetic error handling

| Layer | Metric | W0 baseline | Target W8 | Data source | Owner | Red-team risk | Fix ở v2 |
|---|---|---|---:|---|---|---|---|
| Activation | % session có ≥1 error event được handle | Đo W0 tuần 1 | ≥ 60% (phải có lỗi để học) | Event log | PM Learning | "Quá ít lỗi" có thể là dấu hiệu bài quá dễ | Tách theo độ phức tạp dạng |
| Quality | % error response được học sinh đánh giá "hữu ích" (👍/👎 in-line) | Đo W0 tuần 1 | ≥ 70% 👍 | In-app feedback | UX Researcher | Bias positive | Cross-check với rate học sinh SỬA được sau hint |
| **Trust** | **% học sinh sửa được lỗi từ lần hint ≤2** (đo hint có dẫn về đúng không) | Đo W0 tuần 1 | ≥ 65% | Event log (so sánh trước/sau hint) | PM Learning | Sửa được nhưng vẫn không hiểu | Cross-check với re-ask rate W2 |
| Value | % học sinh báo cáo "AI khó hiểu / mỉa mai" (negative tone) | Đo W0 tuần 1 + audit 5% transcript random | ≤ 5% | In-app feedback + transcript audit | UX Researcher | Báo cáo thấp có thể vì học sinh ngại | Audit 5% transcript random/tuần, không chỉ dựa user report |

#### W4 — Parent Progress Pulse

| Layer | Metric | W0 baseline | Target W8 | Data source | Owner | Red-team risk | Fix ở v2 |
|---|---|---|---:|---|---|---:|---|
| Activation | % phụ huynh **kết nối tài khoản** với học sinh (link parent-child) | Đo W0 tuần 1 (sau onboarding) | ≥ 50% cohort | Account table | PM Family | Liên kết không = mở report | Đo cùng Engagement bên dưới |
| Engagement | % phụ huynh mở report trong 48h sau khi gửi, **3 tuần liên tiếp** | Cần lookback 3 tuần nên đo từ W3 trở đi | ≥ 35% | Email/notif open log | PM Family | Mở 1 tuần do tò mò, không phải habit | **Đổi từ v1**: v1 chỉ đo "% mở report tuần". v2 yêu cầu 3 tuần liên tiếp (bài học [Klarna 2024-2025](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/): metric 1 tuần không đo trust bền) |
| **Trust** | **% học sinh chủ động APPROVE report được gửi** (= tin báo cáo không "tố cáo" mình) | Đo W0 tuần 1 | ≥ 80% | Approve log (event `parent_report_approved`) | PM Family | Học sinh approve vì áp lực gia đình | Cross-check với "% học sinh share thêm thông tin tự nguyện" (như goal/khó khăn) |
| Quality | % phụ huynh phản hồi "report giúp hiểu con đang học gì" (in-app survey W4) | Pre-survey W0 với phụ huynh tham gia pilot | ≥ 60% chọn 4-5 trên 5-point | In-app survey | UX Researcher | Self-report bias | So sánh với cohort control không có report (phụ huynh self-report cảm nhận chung) |
| Value | % phụ huynh sau W8 KHÔNG yêu cầu transcript chi tiết (= privacy contract giữ vững) | Đo từ W1 (support ticket log) | ≥ 90% | Support ticket log (gồm email/Zalo/call) | PM Family | Phụ huynh có thể yêu cầu kênh khác | Theo dõi cả support call + email + Zalo |

### B.3 Unit economics guardrail (thêm ở v2 sau red-team CFO)

| Layer | Metric | W0 baseline | Target W8 | Data source | Owner | Red-team risk | Fix |
|---|---|---|---:|---|---|---|---|
| **Cost** | API cost / W4 active learner / tháng | Đo từ tuần 1 (API billing chia cho cohort active) | ≤ $0.50 (model Gemini 2.5 Flash-Lite từ PRD Day 17 — $0.10 input / $0.40 output per 1M token) | API billing + active learner table | Founder/Tech Lead | Cost có thể tăng đột biến nếu học sinh dùng quá nhiều token | Rate-limit mềm: cảnh báo khi 1 học sinh vượt 50K token/tuần |
| **Cost-Value** | API cost / 1 "self-calc pass ở lần ≤2" (= chi phí trên 1 đơn vị "hiểu") | Đo từ tuần 2 (cần đủ pass events) | ≤ $0.05 | API billing / event log | Founder | Mẫu số có thể bị thổi nếu pass rate bị fake | Cross-check với re-ask rate (Quality W2) |

---

## Part C — Dashboard Mock (6 tile)

```text
┌──────────────────────────────────────────┐ ┌──────────────────────────────────────────┐
│ TILE 1 — PRODUCT HEALTH (North Star)     │ │ TILE 2 — W1: PHÂN LOẠI ĐỀ                │
│ Metric: Self-calc gate pass rate (lần≤2) │ │ Metric: AI phân loại đúng dạng           │
│ W0: TBD   Target W8: ≥ 50%               │ │ W0: TBD   Target: ≥ 95% (gold-set)       │
│ Status: GREEN / AMBER / RED              │ │ Status: GREEN / AMBER / RED              │
│ Action if red (3 ngày):                  │ │ Action if red (5 ngày):                  │
│  • PM Learning audit 50 session sample   │ │  • Content Lead chạy lại gold-set        │
│  • Có cần đơn giản hoá Tier-2 không?     │ │  • Tăng QA random từ 5% → 10%            │
│  • Retro 30 phút + propose fix           │ │  • Đình chỉ mở cohort mới đến khi xanh   │
└──────────────────────────────────────────┘ └──────────────────────────────────────────┘

┌──────────────────────────────────────────┐ ┌──────────────────────────────────────────┐
│ TILE 3 — W2: SELF-CALC + RE-ASK 7D       │ │ TILE 4 — QUALITY + TRUST                 │
│ Pass-rate ≤2: TBD / Target ≥ 50%         │ │ Re-ask 7d: TBD / Target ≤ 30%            │
│ Re-ask 7d:   TBD / Target ≤ 30%          │ │ Fallback bounce-back: TBD / ≥ 60%        │
│ Status: GREEN / AMBER / RED              │ │ Status: GREEN / AMBER / RED              │
│ Action if red (7 ngày):                  │ │ Action if red (7 ngày):                  │
│  • Pass-rate OK + re-ask cao →           │ │  • UX Researcher audit transcript fb     │
│    tăng độ khó gate                      │ │  • 5 user interview trong 3 ngày         │
│  • Cả hai thấp → đổi prompt + retest     │ │  • Founder review prompt rule trong 1 wk │
└──────────────────────────────────────────┘ └──────────────────────────────────────────┘

┌──────────────────────────────────────────┐ ┌──────────────────────────────────────────┐
│ TILE 5 — UNIT ECONOMICS + W4 RETENTION   │ │ TILE 6 — DECISION                        │
│ API cost / W4 learner: TBD / ≤ $0.50     │ │ Continue / Pivot / Kill: CONTINUE w/G    │
│ W4 retention:          TBD / ≥ 25%       │ │ Metric mạnh nhất: Self-calc pass ≤2      │
│ Status: GREEN / AMBER / RED              │ │ Before scale > 300 learner:              │
│ Action if red:                           │ │  1. Gold-set pass rate ≥ 95% (T+4w)      │
│  • Cost cao → batch mode + cache prompt  │ │  2. Self-calc pass ≥ 50% (T+8w)          │
│  • Retention thấp → onboarding A/B test  │ │  3. Parent approve rate ≥ 80% (T+8w)     │
└──────────────────────────────────────────┘ └──────────────────────────────────────────┘
```

### Decision Rules (định lượng, gắn với mỗi tile)

| Rule | Khi nào áp dụng | Hành động cụ thể |
|---|---|---|
| **Continue** | TILE 1 ≥ target + TILE 4 không đỏ + TILE 5 không đỏ | Tiếp tục pilot, chuẩn bị scale W9-W12 |
| **Pivot** | TILE 1 ≥ 70% target nhưng Engagement (TILE 3) < 50% | Giữ scope nhưng đổi tactic onboarding / chuyên đề — KHÔNG mở rộng feature mới |
| **Pause** | Dữ liệu < 30 phiên/ngày trong 2 tuần liên tiếp | Dừng mở rộng 2 tuần để collect đủ baseline; không decision với dữ liệu nhiễu |
| **Kill** | TILE 4 đỏ ≥ 2 tuần liên tiếp (re-ask > 45% hoặc bounce-back < 40%) HOẶC NPS phụ huynh < 0 | Dừng workflow đang đỏ; rollback prompt + audit fail mode |

---

## Part D — Decision Memo

```markdown
# Decision Memo — SmartHint AI (Day 23 v2)

1. Nhóm khuyến nghị: CONTINUE WITH GUARDRAILS.
   Cụ thể: tiếp tục pilot 100-300 học sinh trong 8 tuần với Dashboard v2 làm
   gate cho mở rộng. Không scale lên 1,000+ học sinh cho đến khi đạt 3 điều kiện
   ở mục 4.

2. Metric mạnh nhất để bảo vệ quyết định là:
   "Self-calc gate pass rate ở lần thử ≤2" (NORTH STAR mới).
   Vì sao đây là evidence quan trọng:
   - Đo CHUYỂN HÀNH VI (từ "đoán/chép" sang "tự tính đúng"), không đo usage.
   - Không thể fake dễ dàng: học sinh phải nhập kết quả tính toán, AI check.
   - Trực tiếp gắn với riskiest assumption của MVP (Day 17): học sinh có
     kiên nhẫn với Socratic không?
   - Không rơi vào bẫy Klarna (volume cao che mất quality) — ràng buộc
     "lần thử ≤2" loại bỏ trường hợp đoán bừa qua gate.
   - Chống Goodhart's Law: cross-check với re-ask rate 7d — hai metric kéo
     nhau, khó cùng bị fake.

3. Metric / giả định nhóm đã sửa sau red-team:

   V1 → V2 #1 (NORTH STAR):
   V1: "Session Completion Rate > 60%" (kế thừa từ PRD Day 17).
   V2: "Self-calc gate pass rate ở lần thử ≤2 ≥ 50% (W8) → ≥ 60% (W12)".
   Vì sao V1 YẾU: "Hoàn thành session" = containment kiểu Klarna — đo
   activity, không đo hiểu. 1 học sinh có thể hoàn thành bằng (a) đoán
   bừa, (b) nhờ bạn, (c) tự tính — cả 3 đều completed=TRUE. V1 không
   phân biệt được. Đúng bẫy Klarna (OpenAI 2024 → Reuters 2025 phải đưa
   con người trở lại CS).
   Vì sao V2 TỐT HƠN: Pass rate ở lần thử ≤2 đo CHUYỂN HÀNH VI (tự tính
   đúng từ lần thử ≤2). Học sinh phải tự nhập số, AI check số học rẻ &
   khó fake. Ràng buộc "≤2 lần thử" loại đoán bừa. Cặp với re-ask 7d
   chống Goodhart's Law (2 metric kéo nhau, khó cùng fake).

   V1 → V2 #2 (PARENT TRUST):
   V1: "% phụ huynh mở report tuần > 50%".
   V2: Tách thành (a) "% phụ huynh mở 3 tuần liên tiếp ≥ 35%" + (b) "% học
   sinh chủ động APPROVE báo cáo ≥ 80%".
   Vì sao V1 YẾU: 1 tuần do tò mò novelty, không phải habit. Cũng chỉ đo
   1 phía (phụ huynh), không đo phía học sinh có TIN báo cáo hay không
   — nếu báo cáo "tố cáo" học sinh, học sinh sẽ tắt notify hoặc dùng app
   ngầm, trust mất ngầm mà dashboard không thấy.
   Vì sao V2 TỐT HƠN: "3 tuần liên tiếp" đo habit, không tò mò (Klarna
   teaching: metric ngắn hạn che mất quality dài hạn). Cross-check 2
   chiều mới đo trust thật. NPT: cần cả "Cognitive Participation"
   (phụ huynh đụng vào) + "Collective Action" (cả nhà chấp nhận
   workflow) mới gọi là routine.

   V1 → V2 #3 (QUALITY GUARDRAIL):
   V1: Không có gold-set + không có QA sample.
   V2: Thêm "% AI phân loại đúng dạng ≥ 95% trên teacher gold-set 200 bài
   trước khi mở cohort > 300" + QA random 5% session/tuần.
   Vì sao V1 YẾU: Nếu AI phân loại sai dạng (vd nhầm Hàm số bậc 2 sang
   Hàm bậc 3), học sinh học SAI cả buổi mà không ai phát hiện. Trust
   architecture rỗng = scale = tai họa silent. Day 17 PRD đã nói có
   fallback nhưng chưa có gate quality.
   Vì sao V2 TỐT HƠN: Morgan Stanley dạy trust architecture phải có
   TRƯỚC scale (98% advisor adopt vì có eval + compliance). Gold-set là
   "ground truth" do giáo viên duyệt — AI không thể tự chấm chính nó.
   Đây cũng là gate scale: < 95% = đình chỉ mở cohort.

   V1 → V2 #4 (RE-ASK RATE):
   V1: Không có metric "học sinh có hỏi lại cùng dạng bài không".
   V2: Thêm "Re-ask rate 7-14 ngày ≤ 30% / ≤ 15%".
   Vì sao V1 YẾU: Pass rate độc lập có thể bị fake — học sinh có thể pass
   gate đúng từ lần ≤2 bằng cách hỏi bạn rồi gõ vào. Không có metric phụ
   để cross-check, North Star đứng 1 mình thì là target tốt cho việc fake.
   Vì sao V2 TỐT HƠN: Nếu pass rate cao mà re-ask rate cũng cao = hiểu
   GIẢ. Hai metric kéo nhau theo hướng ngược chiều → chống Goodhart's
   Law theo nguyên lý "không 1 metric đứng 1 mình". Mỗi pass có thật
   sẽ kéo re-ask xuống tự nhiên.

   V1 → V2 #5 (UNIT ECONOMICS):
   V1: Không có metric cost.
   V2: Thêm "API cost / W4 active learner ≤ $0.50/tháng" và
   "API cost / self-calc pass ≤ $0.05".
   Vì sao V1 YẾU: Adoption tốt mà gross margin âm = SmartHint scale =
   chết tiền. CFO red-team chỉ ra rằng các metric value khác (confidence,
   retention) đều self-report — không có evidence về tài chính.
   Vì sao V2 TỐT HƠN: "Cost / unit-of-understanding" (= chi phí trên 1
   self-calc pass) là metric độc đáo — đo efficiency của AI khi tạo ra
   1 đơn vị giá trị thật, không phải 1 phiên đẹp. BCG 10-20-70 nói 70%
   effort ở people/process, nhưng 10% còn lại (model + cost) cũng phải
   khoẻ — không thì dashboard adoption cũng vô nghĩa.

4. Trước khi scale (cohort > 300 học sinh), nhóm phải đạt đồng thời:

   1. Teacher gold-set pass rate ≥ 95% trên 200 bài (3 chuyên đề Hàm số,
      Mũ-Log, Nguyên hàm). Owner: Content Lead. Deadline: T+4 tuần.

   2. Self-calc gate pass rate (lần ≤2) ≥ 50% trên cohort pilot 100-300,
      đo trong 8 tuần liên tục. Owner: PM Learning. Deadline: T+8 tuần.

   3. Parent approve rate ≥ 80% + parent open rate 3 tuần liên tiếp ≥ 35%.
      Owner: PM Family. Deadline: T+8 tuần.

   Áp dụng Decision Rules: trượt 1 trong 3 → PIVOT (không scale, đổi tactic
   workflow yếu nhất). Trượt nặng cả 3 (< 60% target) → KILL workflow đó.
   Dữ liệu nhiễu (< 30 phiên/ngày) → PAUSE 2 tuần.
```

---

## Red-team handshake — 2 chiều (theo `02-templates/05-red-team-template.md`)

### Chiều A — Nhóm chúng tôi ĐI red-team nhóm khác (vai được giao: **Risk**)

Giả định nhóm bị phản biện làm về **AI coding assistant cho team kỹ thuật SME** (1 trong 3 ví dụ scope tốt slide).

| # | Metric / giả định bị chất vấn | Câu hỏi phản biện (vai Risk) | Rủi ro nhóm kia nên ghi vào v2 |
|---|---|---|---|
| 1 | "% PR có sử dụng AI suggestion = 80%" làm North Star | AI gợi ý 1 dòng vs AI viết cả function — đều count = 1. Khi merge xảy ra **bug do AI gợi ý**, ai trace lại được, ai chịu? | Tách metric theo "% PR có AI-generated code ≥ 30 LOC" + "% PR rollback trong 7d do AI bug" + log AI provenance ở commit metadata |
| 2 | Không có audit trail cho AI suggestion bị accepted | Nếu 6 tháng sau ngân hàng kiểm tra security: "function `validateUser()` này AI viết hay người viết?" — không biết. Compliance fail. | Thêm git note hoặc PR label `ai-generated` (theo pattern Microsoft/GitHub Copilot for Business audit logs) — gate scale với industry-regulated client |
| 3 | "AI giảm code review time 40%" tính như thế nào? Khi reviewer **skip** review vì tin AI → bug lọt → tốn 10× thời gian sửa sau merge | "Median review time" có gắn với **bug-escape rate trong 30 ngày sau merge** không? Nếu không, đây là benchmark fallacy giống Klarna AHT. | Cặp metric "review time" với "bug-escape rate 30d" — cả 2 cùng đạt mới Continue; review nhanh + bug-escape tăng = Pivot/Pause |

### Chiều B — Nhóm chúng tôi BỊ red-team (4 vai)

| # | Vai red-team | Rủi ro nêu ra | Metric / giả định bị chất vấn | Đã sửa ở v2 |
|---|---|---|---|---|
| 1 | CFO | "Confidence self-reported không kéo doanh thu" + thiếu cost metric | Trust/Value toàn product chỉ self-report | Thêm Unit Economics block (B.3) + control group cho self-report |
| 2 | CFO | Không có cost per "đơn vị hiểu" | Không có (gap v1) | Thêm "API cost / self-calc pass ≤ $0.05" |
| 3 | User (học sinh) | Self-calc gate ép gõ trên mobile nhỏ — ma sát quá lớn | Productivity gate (median time) | Cảnh báo > 5 phút → fallback; tách metric theo device |
| 4 | User (học sinh) | Streak/leaderboard có thể ép học khi mệt + lặp lại bẫy JPMorgan (ranking → nỗi sợ → giảm Desire) | Tactic #3 (turn enthusiasts) | Đổi từ leaderboard "số phiên" sang "tip 1 dòng từ học sinh top pass rate"; KHÔNG công khai ranking |
| 5 | Risk | AI phân loại sai dạng → học sai cả buổi | W1 không có gold-set | Thêm gold-set 200 bài + QA 5%/tuần; metric phân loại ≥ 95% là gate scale |
| 6 | Risk | Parent report có thể che mất "con đang học sai" | W4 chỉ đo mở report | Thêm "% học sinh approve report" + tách dạng đang yếu trong report |
| 7 | Workflow Owner | Owner ghi "team" quá chung | Owner cột B.1 ban đầu | Đổi owner thành role cụ thể: PM Learning, PM Family, Content Lead, UX Researcher, Founder, Tech Lead |
| 8 | Workflow Owner | Khi metric đỏ, ai làm gì trong bao lâu? | Tile mock chưa có action | Mỗi tile có "Action if red" cụ thể + deadline 3-7 ngày |

**Tổng cộng 5 thay đổi cụ thể v1 → v2** (rubric yêu cầu ≥ 2 — vượt 150%).

---

## Nguồn & framework đã dùng

| Khung | Dùng ở đâu | Nguồn |
|---|---|---|
| ADKAR (Prosci) | A.4 chẩn đoán barrier | [Prosci ADKAR](https://www.prosci.com/adkar/adkar-model) |
| Mollick task split (Just Me / Delegated / Automated) | A.3 cột "Vai trò AI" | [Co-Intelligence — Ethan Mollick](https://www.penguinrandomhouse.com/books/740825/co-intelligence-by-ethan-mollick/) |
| Centaur vs Cyborg | A.3 cột "Mode" | Mollick, *Centaurs and Cyborgs on the Jagged Frontier* |
| BCG 10-20-70 + 74% AI scale failure | A.1 justify thách thức | [BCG 2024](https://www.bcg.com/press/24october2024-ai-adoption-in-2024-74-of-companies-struggle-to-achieve-and-scale-value) |
| McKinsey State of AI 2024 (workflow redesign > tool insertion) | A.1 framing | [McKinsey QuantumBlack 2024](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-2024) |
| Klarna pattern (containment ≠ quality) | North Star justification, V1→V2 #1 | [OpenAI Klarna case 2024](https://openai.com/index/klarna/) + [Reuters 09/2025](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/) |
| Morgan Stanley trust architecture | V1→V2 #3 (gold-set) | [OpenAI Morgan Stanley](https://openai.com/index/morgan-stanley/) |
| DWP/GDS methodology (control group) | B.1 Trust/Value V1→V2 | [DWP Copilot trial evaluation (UK gov)](https://www.gov.uk/government/publications/an-evaluation-of-dwps-microsoft-copilot-365-trial/an-evaluation-of-dwps-microsoft-365-copilot-trial) |
| JPMorgan ranking caveat | Tactic #3 (không công khai leaderboard) | [Business Insider 2026](https://www.businessinsider.com/jpmorgan-track-software-engineers-ai-use-dashboards-2026-4) |
| KPMG dashboard gaming | A.4 lý do Desire | [Business Insider — KPMG dashboard](https://www.businessinsider.com/kpmg-dashboard-consultants-ai-adoption-use-tracker-employees-2026-5) |
| Goodhart's Law | Chống fake metric, cross-check cặp metric | Phổ biến — slide Day 23 §17 nhắc "metric kéo hành vi sai" |
| Normalization Process Theory (NPT) | V1→V2 #2 (parent trust 2 chiều) | [May et al. 2009](https://link.springer.com/article/10.1186/1748-5908-4-29) |

---

## Checklist trước khi nộp

- [x] Có 1 product cụ thể: SmartHint AI
- [x] Có 4 workflow chính (W1-W4), mỗi cái có AI role + human checkpoint + failure path + Mode
- [x] Có 1 barrier ADKAR chính: Desire (học sinh) + lý do
- [x] Có 3 tactic gắn với barrier, owner và deadline
- [x] Dashboard có metric toàn product (B.1) + theo workflow (B.2) + unit economics (B.3)
- [x] KHÔNG chỉ đo usage: có Quality (gold-set), Trust (approve rate), Value (re-ask rate), Cost
- [x] **Mỗi metric có phương pháp đo W0 baseline cụ thể** (không "n/a")
- [x] Có ≥ 1 metric Quality / Trust / Value (có 8+ trên toàn dashboard)
- [x] Có Red-team risk + Fix (8 risks, 5 fix)
- [x] Có ≥ 2 thay đổi rõ v1 → v2 (**5 thay đổi cụ thể**)
- [x] Decision Memo có continue / pivot / kill + Decision Rules định lượng
- [x] Citation đầy đủ ở "Nguồn & framework đã dùng"
