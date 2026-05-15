# 02 — Case Comparison: Morgan Stanley (success) vs Klarna (warning)

**Học viên (đại diện copy về):** Nguyễn Quang Tùng — 2A202600197
**Loại output:** Nhóm — mỗi thành viên copy về repo cá nhân (WS2 — Day 23)

Cách chọn cặp: hai case này giống nhau ở chỗ **đều là customer/professional-facing AI có quy mô lớn**, nhưng khác nhau ở **kiến trúc niềm tin (trust architecture)**. Morgan Stanley triển khai trong môi trường high-stakes regulated (wealth management) và có eval + expert feedback + compliance **trước** scale. Klarna công bố ROI ấn tượng dựa trên volume + speed, nhưng 1 năm sau phải điều chỉnh đưa con người trở lại CS.

**Lăng kính NPT (Normalization Process Theory — May et al. 2009):**

- Morgan Stanley = **Collective Action đã đổi** (workflow advisor đổi, kiến thức nội bộ truy xuất qua AI assistant, handoff rõ).
- Klarna = **Cognitive Participation thiếu bền** (1 năm đầu lan rộng nhưng routine chưa ổn — sau đó phải sửa).

---

## Bảng so sánh

| Trường | Case thành công / tín hiệu tốt — **Morgan Stanley AI @ Assistant** | Case cảnh báo — **Klarna AI Customer Support** |
|---|---|---|
| **Case** | Morgan Stanley "@ Morgan Stanley Assistant" cho financial advisor (2023-2024, công bố 2024) — [OpenAI case](https://openai.com/index/morgan-stanley/) | Klarna AI customer support assistant (2024) — [OpenAI case](https://openai.com/index/klarna/) → điều chỉnh 2025 ([Reuters](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/)) |
| **Workflow có AI** | (1) Truy xuất kiến thức nội bộ từ kho ~100K research document; (2) Soạn nháp email/báo cáo cho khách; (3) Tóm tắt meeting; (4) Tra cứu sản phẩm tài chính & quy định | (1) Phân loại chat đến; (2) Trả lời câu hỏi thường gặp; (3) Hoàn tiền/đơn hàng đơn giản; (4) Escalate case phức tạp |
| **Người dùng chính** | Financial advisor (chuyên gia, high-stakes, regulated) — KHÔNG phải khách hàng cuối | Khách hàng cuối + support agent (low-context, varied complexity) |
| **Metric chính được công bố** | (a) **98% advisor team adopt** (adoption density); (b) Internal knowledge retrieval improved; (c) **Eval framework** với expert feedback + compliance review trước scale; (d) AHT giảm cho task tra cứu | (a) **2.3M chat** AI xử lý; (b) **~2/3 tổng chat**; (c) AHT giảm **11 phút → <2 phút**; (d) Tương đương **~700 FTE**; (e) **~$40M profit impact** |
| **Metric đó chứng minh được gì?** | Có **adoption thật** (không chỉ access) + **trust architecture** (eval + expert review + compliance) **trước khi scale rộng**. Đo cả ngưỡng **Adoption** chứ không dừng ở Pilot/Deployment. | Khả năng **thay thế frontline ở case đơn giản** + **cost-saving trong ngắn hạn**. AI có thể chạy đại trà ở quy mô lớn. |
| **Metric đó chưa chứng minh được gì?** | Chưa rõ **giá trị khách hàng cuối** (advisor có ra quyết định tốt hơn không, khách hàng có satisfaction cao hơn không). Chỉ chứng minh productivity advisor, chưa chứng minh outcome khách hàng. | Chưa chứng minh **chất lượng dịch vụ** (CSAT theo độ phức tạp), **niềm tin lâu dài** (NPS delta), **escalation success**. Reuters 09/2025: Klarna phải đưa con người trở lại CS. |
| **Thiếu metric nào?** | Customer outcome metric: client retention, AUM growth, advisor satisfaction về quyết định cuối, audit trail của recommendation có lưu được không. | Repeat inquiry rate 7-30 ngày, CSAT theo complexity, escalation success rate, NPS / brand sentiment delta, cost per **resolved** ticket (không phải handled ticket). |
| **Bài học cho dashboard nhóm** | (1) **Trust architecture trước scale** — phải có eval framework (gold-set + expert review) trước khi mở rộng; (2) **Adoption density** (% team thật sự adopt) > raw volume; (3) Trong high-stakes domain, **methodology đo lường** quan trọng ngang metric. | (1) **Containment / volume KHÔNG đo trust** — nếu không có metric quality + repeat inquiry, một KPI đẹp có thể che mất nhóm case bị xử lý kém; (2) **Tách metric theo độ phức tạp** để không bị "trung bình che mất tail"; (3) Trong consumer domain, **NPS / retention** phải là guardrail. |

---

## Đối chiếu cho SmartHint AI

| Khía cạnh | Học từ Morgan Stanley | Tránh kiểu Klarna |
|---|---|---|
| **Trust architecture** | Trước khi mở SmartHint cho 1,000+ học sinh, phải có **teacher gold-set 200 bài** + content reviewer check ngẫu nhiên 5% sample hàng tuần. AI phân loại sai dạng = học sai cả buổi. | Không công bố "X triệu phiên đã hoàn thành" như metric thành công nếu không kèm pass rate self-calc + re-ask rate. Volume KHÔNG bằng học. |
| **Adoption density** | Đo **% học sinh hoàn thành ≥3 phiên có self-calc pass trong 14 ngày** (= adoption thật), không chỉ "% người dùng đã đăng ký". | Không lấy "DAU" làm North Star — vì giống "% chat AI xử lý" của Klarna, đẹp nhưng không kéo hành vi học. |
| **Methodology > metric** | Mỗi metric phải có: baseline cụ thể, target, data source, owner, **rule khi đỏ**. Không có nguồn dữ liệu = không phải metric. | Không cộng dồn "% phiên hoàn thành" mà bỏ qua "học sinh phải hỏi lại trong 7 ngày" — đó chính là bẫy Klarna. |
| **Tách theo complexity** | Tách metric theo **độ phức tạp dạng toán** (cơ bản / vận dụng / vận dụng cao) để biết AI yếu ở đâu, không che bằng trung bình. | Tránh báo cáo phụ huynh kiểu "con học 12 phiên tuần này" mà không nói dạng nào đang yếu — sẽ tạo cảm giác sai. |

---

## Câu chốt nhóm

```markdown
Case thành công (Morgan Stanley) dạy nhóm tôi rằng:
    Adoption thật = (a) % team thật sự dùng vào workflow + (b) trust architecture
    (eval + expert review + compliance) HOÀN THÀNH trước khi scale.
    Methodology đo lường quan trọng ngang metric — không có nguồn dữ liệu,
    không có owner, không có rule khi đỏ = không phải metric.

Case cảnh báo (Klarna) dạy nhóm tôi rằng:
    Containment & volume KHÔNG đo trust. Một KPI trung bình đẹp có thể
    che mất nhóm case/người dùng bị phục vụ kém. Một năm sau khi công bố
    ROI ấn tượng, Klarna phải đưa con người trở lại CS — phí brand đắt
    hơn phí AI tiết kiệm được.

Vì vậy dashboard SmartHint AI phải:
    (1) North Star = "self-calc gate pass rate ở lần thử ≤2", KHÔNG phải
        "% phiên hoàn thành" (đây là containment của SmartHint).
    (2) Trust architecture: teacher gold-set 200 bài + QA sample 5%/tuần
        TRƯỚC khi mở cohort >300 học sinh.
    (3) Metric tách theo độ phức tạp dạng toán + tách theo cohort (học sinh /
        phụ huynh) — không cộng trung bình.
    (4) Mỗi metric có nguồn dữ liệu, owner cụ thể (PM, Content Lead, CX Lead),
        và rule rõ khi đỏ (ai chạy retrospective trong bao lâu).
    (5) Re-ask rate 7-14 ngày + fallback bounce-back rate = đo hiểu thật &
        trust phục hồi, không dừng ở "phiên đã đóng".
```

---

## Tự kiểm tra

- [x] Không chỉ kể chuyện case — có metric cụ thể với số liệu được công bố
- [x] Có nêu metric chứng minh được gì và chưa chứng minh được gì cho cả hai case
- [x] Có ≥1 bài học áp dụng vào dashboard nhóm (5 bài học cụ thể)
- [x] Đối chiếu trực tiếp với SmartHint AI ở 4 khía cạnh
- [x] Có citation chuẩn (OpenAI case studies + Reuters + NPT framework)

---

## Nguồn

| Nhãn | Nguồn |
|---|---|
| practitioner | [OpenAI Morgan Stanley case](https://openai.com/index/morgan-stanley/) — 98% advisor team adopt + eval framework |
| practitioner | [OpenAI Klarna case 2024](https://openai.com/index/klarna/) — 2.3M chat, 2/3 containment, 11→<2 phút |
| major news | [Reuters 09/2025 — Klarna shifts AI focus](https://www.reuters.com/business/swedens-klarna-shifts-ai-focus-cost-cuts-growth-2025-09-10/) — đưa con người trở lại CS |
| framework | [NPT — May et al. 2009](https://link.springer.com/article/10.1186/1748-5908-4-29) — Coherence / Cognitive Participation / Collective Action / Reflexive Monitoring |
| course material | Slide Day 23 §20 "Morgan Stanley + DWP/GDS" và §21 "Klarna + Watson" |

---

## Source-quality disclaimer (cùng tinh thần `01`)

| Số liệu | Loại | Tin cậy | Cách dùng |
|---|---|---|---|
| Morgan Stanley **98% advisor team adopt** | Practitioner (Morgan Stanley + OpenAI co-publish) | Đáng tin về định hướng (high adoption density), không kiểm tra được số chính xác | Dùng làm **chuẩn so sánh adoption density** — không copy thành target SmartHint |
| Morgan Stanley **eval framework + expert review trước scale** | Practitioner + slide course | Đáng tin (có công bố methodology) | **Copy pattern** vào trust architecture SmartHint (teacher gold-set + QA sample) |
| Klarna metrics 2024 | Company-reported, chưa audit độc lập | Tin về định hướng, không tin tuyệt đối | Dùng làm **anti-pattern**, không làm baseline |
| Klarna 2025 reversal | Major news (Reuters) | Bằng chứng mạnh nhất | Dùng để gắn vào red-team risk "metric công bố che mất quality" |

> Lý do quan trọng: nếu nhóm copy số Klarna/MS làm target → rơi vào lỗi **"benchmark fallacy"** (slide §17 reference). Số của công ty khác chỉ là **direction**, không phải **target**.
