# 01 — Case Evidence Matrix (Klarna AI Customer Support)

**Học viên:** Nguyễn Quang Tùng — 2A202600197
**Loại output:** Cá nhân (WS1 — Day 23)
**Case được giao:** Klarna — AI customer support assistant (warning / cảnh báo)
**Nhãn nguồn:** practitioner + major news (theo phân loại Day 23 Reference §10)
**Vì sao chọn Klarna:** Giống SmartHint AI ở chỗ là **consumer-facing AI**, dễ rơi vào bẫy "volume cao che mất quality". Klarna đã trải qua vòng đầy đủ: hype → triển khai → công bố ROI ấn tượng → 1 năm sau **rút lại một phần và đưa con người trở lại CS**. Đây là một trong những case tốt nhất để học **measurement trap** (slide Day 23 §17-18) và **Goodhart's Law**: khi 1 chỉ số trở thành mục tiêu, nó thường mất khả năng đo đúng thực tế.

---

## A. Case Evidence Matrix

| Trường | Trả lời |
|---|---|
| **Case** | Klarna AI customer support assistant (2024-2025) |
| **AI được dùng trong workflow nào?** | Customer support frontline — phân loại chat đến, trả lời các câu hỏi thường gặp (đơn hàng, hoàn tiền, tranh chấp, thông tin tài khoản), gợi ý bước xử lý cho case phức tạp, escalate cho agent khi cần |
| **Người dùng chính là ai?** | (1) Khách hàng cuối của Klarna khi cần hỗ trợ; (2) Support agent (vai trò bị thu hẹp sau khi AI lên) |
| **Họ đo metric gì?** | Theo [OpenAI Klarna case study 2024](https://openai.com/index/klarna/): (1) **Volume** — 2.3 triệu cuộc trò chuyện do AI xử lý; (2) **Containment / Coverage** — khoảng 2/3 tổng số chat; (3) **Average handling time** — giảm từ ~11 phút xuống dưới 2 phút; (4) **FTE-equivalent saving** — tương đương ~700 nhân sự full-time; (5) **Profit impact** — ước tính ~$40M trong năm đầu (theo công bố của Klarna 2024) |
| **Metric đó thuộc layer nào?** | Activation + Productivity. **Thiếu hoàn toàn Quality và Trust.** Value chỉ được tính qua cost-saving, không qua experience/retention. |
| **Metric đó chứng minh được gì?** | (a) AI có khả năng thay thế một phần lớn frontline support ở loại case đơn giản; (b) Khi triển khai đại trà, công ty có thể cắt giảm chi phí frontline đáng kể trong ngắn hạn; (c) Median resolution time có thể giảm ~5-6 lần. |
| **Metric đó chưa chứng minh được gì?** | (a) Khách hàng có **hài lòng** sau tương tác với AI hay không (CSAT theo độ phức tạp của case không công bố); (b) Khách hàng có **quay lại hỏi tiếp** cùng vấn đề trong 7-30 ngày không (repeat inquiry rate); (c) Khi AI sai, khách có nhận được người thật **kịp thời** không (escalation success); (d) Customer **retention** & **NPS** của Klarna có giảm sau khi AI lên không. |
| **Thiếu metric nào?** | (1) **Repeat inquiry rate** trong 7-30 ngày sau câu trả lời AI; (2) **CSAT tách theo độ phức tạp của case** (simple / medium / complex); (3) **Escalation success rate** — case phức tạp được escalate có được giải quyết tốt không; (4) **Brand sentiment / NPS delta** trước & sau khi AI lên; (5) **Cost per *resolved* ticket** (không phải cost per *handled* ticket — vì 1 case bị xử lý xong nhưng khách quay lại hỏi = 1 cost phát sinh thêm) |
| **Rủi ro lớn nhất** | **Containment metric che mất service quality + Goodhart's Law.** "AI xử lý 2/3 chat" nghe rất ấn tượng, nhưng nếu trong 2/3 đó có 20% case bị xử lý kém → khách quay lại → trải nghiệm xấu lan ra, NPS giảm, churn tăng. Theo [Reuters 09/2025](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/), Klarna đã **điều chỉnh chiến lược, bổ sung yếu tố con người trở lại CS** — đây là tín hiệu công khai rằng metric công bố trước đó chưa kể hết câu chuyện. Đây cũng là ví dụ kinh điển của **Goodhart's Law**: khi "containment rate" trở thành KPI nội bộ, đội ngũ có động lực push case cho AI xử lý kể cả khi case không phù hợp. |
| **Bài học cho dashboard nhóm** | Đối với SmartHint AI, **"hoàn thành phiên học"** = "containment" của Klarna. Volume cao không chứng minh hiểu thật. Nhóm phải đo: (a) re-ask rate (học sinh có quay lại hỏi cùng dạng bài trong 7-14 ngày không); (b) self-calc pass rate ở lần thử ≤2 (hiểu thật hay đoán); (c) fallback bounce-back rate (sau khi AI sai, học sinh có quay lại không); (d) tỷ lệ học sinh chủ động chia sẻ report với phụ huynh (trust thật, không phải mở 1 lần). |

---

## Bài học chốt cho dashboard SmartHint AI

```markdown
Klarna dạy tôi rằng:

(1) Volume và containment KHÔNG đo được hiểu / hài lòng / niềm tin lâu dài.
(2) Khi không tách metric theo độ phức tạp, một con số "trung bình đẹp"
    có thể che mất nhóm case bị xử lý kém — và chính nhóm đó là nguồn churn.
(3) Một năm sau khi công bố ROI ấn tượng, Klarna phải đưa con người
    trở lại CS. Bài học: nếu không đo quality + trust ngay từ đầu,
    sẽ phải sửa khi đã có thiệt hại brand.

Vì vậy dashboard SmartHint AI phải:

(1) KHÔNG dùng "% phiên hoàn thành" làm North Star (đây là containment của
    SmartHint). Đổi sang "self-calc gate pass rate ở lần thử ≤2" — đo
    chuyển hành vi từ "đoán/chép" sang "tự tính đúng".
(2) Tách metric theo độ phức tạp dạng toán (cơ bản / vận dụng / vận dụng cao)
    để không bị "trung bình che mất nhóm yếu".
(3) Đo re-ask rate 7-14 ngày — nếu học sinh phải hỏi lại cùng dạng,
    nghĩa là chưa hiểu, dù phiên trước có "hoàn thành".
(4) Đo bounce-back sau fallback — sau khi AI sai, học sinh có quay lại
    làm cùng dạng bài không? Đây là metric trust phục hồi.
```

---

## Tự kiểm tra (theo template)

- [x] Không chỉ kể chuyện case — có nêu cụ thể metric Klarna đo (volume, containment, AHT, FTE-saving, profit)
- [x] Có nêu metric cụ thể, có số liệu được công bố
- [x] Có nói metric chứng minh được gì (cost-saving, throughput) và chưa chứng minh được gì (CSAT theo complexity, repeat inquiry, NPS delta)
- [x] Có ≥1 bài học áp dụng vào dashboard nhóm (4 bài học cụ thể ở phần chốt)

---

## Nguồn

| Nhãn | Nguồn | Dùng để làm gì |
|---|---|---|
| practitioner / công ty công bố | [OpenAI customer story — Klarna 2024](https://openai.com/index/klarna/) | Volume 2.3M chat, 2/3 chat, AHT 11→<2 phút, ~700 FTE-equivalent, ~$40M profit |
| major news | [Reuters 09/2025 — "Sweden's Klarna shifts AI focus to cost cuts and growth"](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/) | Công bố đưa con người trở lại CS — tín hiệu metric cũ chưa kể hết câu chuyện |
| course material | Slide Day 23 "Failure Case Study — Klarna + IBM Watson (21/28)" | Phân loại "operating metrics che mất service quality" |
| framework | Goodhart's Law (Goodhart 1975, được dùng rộng rãi) | Khi 1 metric trở thành mục tiêu, nó mất khả năng đo đúng thực tế |
| framework | [Normalization Process Theory — May et al. 2009](https://link.springer.com/article/10.1186/1748-5908-4-29) | "AI thành routine" cần ≥ tuần lặp lại, không tuần đầu |

---

## Source-quality disclaimer (theo Day 23 Reference §10 — "trust nguồn")

| Số liệu | Loại nguồn | Mức độ tin cậy | Khi đưa vào dashboard SmartHint |
|---|---|---|---|
| 2.3M chat / ~2/3 containment / AHT 11→<2 phút | **Practitioner (company-reported, không audit độc lập)** | Tin được về thứ tự độ lớn, không tin tuyệt đối về số tuyệt đối — thường được PR tô đẹp | Dùng làm **tham chiếu định tính** ("AI có thể giảm AHT ~5-6 lần ở case đơn giản"), **không** copy vào target cho SmartHint |
| ~700 FTE-equivalent saving / ~$40M profit impact | **Practitioner (Klarna 2024 investor communication)** | Là **ước tính** của công ty, không phải đo trước-sau qua audit độc lập | Coi như upper bound, không dùng làm baseline cho ROI SmartHint |
| Klarna "đưa con người trở lại CS" 2025 | **Major news (Reuters, dẫn nguồn Klarna)** | Có công bố chính thức từ công ty + reporting độc lập | **Bằng chứng mạnh** rằng metric công bố 2024 chưa kể hết câu chuyện |

> Ý nghĩa cho nhóm: Day 23 Reference §10 nói rõ — practitioner numbers tốt cho **direction**, không tốt cho **target tuyệt đối**. Vì vậy `03-product-roi-dashboard.md` đặt target W8 dựa trên **W0 baseline đo trên chính SmartHint** (cohort 100 trong 1 tuần), không copy số Klarna.
