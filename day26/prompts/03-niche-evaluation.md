# Prompt tham khảo 3 — Đánh giá niche của 1 sản phẩm AI

**Dùng khi**: nhóm đã chọn 1 hoặc 2 sản phẩm AI để test (Lab 2), cần đánh giá xem sản phẩm có niche đủ mạnh để tồn tại trước horizontal AI (ChatGPT, Claude, Gemini) hay không. Áp dụng Lens 2 — Niche Down.
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S5 — Niche Down (Lens 2)
**Thời gian**: 10-15 phút (cho mỗi sản phẩm)

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

Mục tiêu: trả lời câu hỏi cốt lõi "Sản phẩm này có thể chống lại horizontal AI platforms không?"

1. **Sản phẩm đang đánh ở niche nào**? Hay nó là horizontal AI? (Vd: Perplexity là horizontal search; Cursor là vertical IDE; Granola là vertical meeting notes.)
2. **Horizontal AI có làm được không**? Thử nghĩ: "Nếu mình mở ChatGPT/Claude/Gemini, làm cùng nhiệm vụ, kết quả có tệ hơn không?" Tệ hơn rõ → niche mạnh. Tệ hơn ít → niche yếu.
3. **Translation work tồn tại không**? Người dùng có phải dịch lại vấn đề của mình thành prompt để AI hiểu không? Có phải chỉnh sửa kết quả AI nhiều không? (Translation work = co cơ hội cho sản phẩm chuyên biệt.)
4. **Dữ liệu / tính năng / giao diện độc quyền nào**? Sản phẩm có data, function, hoặc UI mà ChatGPT/Copilot/Gemini không có (và khó copy được trong 6 tháng)?
5. **5 câu hỏi Niche của Lens 2** (nhớ lại): (1) Use case horizontal không giải được? (2) Proprietary data? (3) Proprietary functionality? (4) Better interaction model? (5) Deep integrations / high accuracy / citation? — Nhóm đã có ý ban đầu cho 5 câu này chưa?

> **Cảnh báo**: nếu sản phẩm nhóm test KHÔNG có niche rõ (vd Jasper trong ngành Viết lách), AI sẽ cố tìm cách bảo vệ — đừng để AI dẫn nhóm vào hướng "có niche không rõ". Cố gắng trả lời thẳng "không có niche", nếu đó là sự thật.

---

## Prompt chính (paste sau bối cảnh nhóm + log ảnh chụp + nhiệm vụ chung)

```text
Bạn là analyst chuyên về AI product strategy. Dựa trên BỐI CẢNH ở trên (ngành nhóm test, 2 sản phẩm, nhiệm vụ chung)
và TRẢI NGHIỆM nhóm đã thử nghiệm sản phẩm [TÊN SẢN PHẨM], giúp nhóm tôi đánh giá NICHE của sản phẩm này
dựa trên Lens 2 — Niche Down.

CÂU HỎI CỐT LÕI:
"Sản phẩm [TÊN] có thể chống lại horizontal AI platforms (ChatGPT, Claude, Gemini, Copilot)
hoặc incumbent AI features (Google Docs + Gemini, Notion AI, Microsoft Word + Copilot) không?"

ĐÁNH GIÁ theo 5 NICHE QUESTIONS của Lens 2:

Q1 — USE CASES horizontal tools KHÔNG giải được?
- Tìm 2-3 use cases mà horizontal AI (ChatGPT) sẽ THẤT BẠI hoặc kém hơn rõ ràng.
- Dấu hiệu: "Translation work" — user phải dịch lại vấn đề thành prompt phù hợp với AI.
- Vd CoCounsel: lawyers KHÔNG dùng ChatGPT cho court filing vì cần citation chính xác.

Q2 — PROPRIETARY DATA horizontal tools không có?
- Sản phẩm có dữ liệu riêng (database, knowledge graph, user-generated content) mà ChatGPT không có?
- Vd: CoCounsel có legal databases riêng. Granola có dữ liệu meeting context.

Q3 — PROPRIETARY FUNCTIONALITY?
- Sản phẩm có chức năng đặc thù (specialized operations, business rules, compliance requirements)?
- Vd: CoCounsel Skills (case law analysis, deposition prep) — không phải chỉ là "tóm tắt".

Q4 — Better INTERACTION MODEL than chat?
- Sản phẩm có giao diện CHUYÊN BIỆT, không phải chat box mặc định?
- Vd: Descript edit video bằng cách edit text. Miro AI organize với drag controls.
- Cursor có Cmd+K, Composer — không chỉ chat panel.

Q5 — Deep INTEGRATIONS / high ACCURACY / CITATION required?
- Sản phẩm tích hợp sâu với hệ thống khác (CRM, IDE, database)?
- Hoặc có yêu cầu chính xác cao (legal citation, medical accuracy)?

Với MỖI câu, ghi:
- PASS / FAIL / PARTIAL (đối với sản phẩm này)
- Bằng chứng cụ thể (từ ảnh chụp hoặc trải nghiệm trực tiếp)
- 1 câu giải thích

THE 10x BAR TEST:
Để win user từ horizontal AI, sản phẩm này phải 10x BETTER ở use case cụ thể.
- Sản phẩm có 10x better ở use case nào?
- 10x đo bằng gì? (Tốc độ? Chính xác? Hoàn thành nhiệm vụ? Độ tin cậy?)

ABSORPTION TEST:
"Nếu ChatGPT/Copilot/Gemini thêm tính năng tương tự vào tuần sau, sản phẩm này có còn đáng dùng không?"
- Trả lời CÓ / KHÔNG / CHỈ MỘT PHẦN.
- Lý do.

JASPER COMPARISON:
Jasper (case lecture) đã FAIL vì không có niche — ChatGPT + Google Docs + Notion AI làm "general writing" tốt đủ.
- Sản phẩm này có RỦI RO Jasper-style không?
- Vì sao có / không có?

VERDICT:
- Niche strength: STRONG / MEDIUM / WEAK
- Strongest niche signal: [...]
- Weakest niche signal: [...]
- Biggest horizontal-platform threat: [ChatGPT? Gemini? Copilot? Notion AI?]
- Estimated time until absorption (nếu sản phẩm có niche yếu): [3 tháng / 1 năm / 3 năm / không bị absorbed]

PHẢN BIỆN:
- Có sự thiên kiến nào trong đánh giá này không? (Vd: nhóm thích sản phẩm A nên đánh giá cao hơn?)
- Counter-narrative: ai có thể nói "sản phẩm này KHÔNG có niche" và lý do gì?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI quá optimistic (đánh giá sản phẩm cao hơn thực tế)

```text
Đánh giá của bạn nghe quá "marketing copy" — như AI bảo vệ sản phẩm.

Đẩy CRITICAL hơn:
- Q1: thay vì tìm use case horizontal "không làm được", tìm use case horizontal LÀM TỆ HƠN.
  Tệ ở mức bao nhiêu? 10% tệ hơn = không đủ niche. 10x tệ hơn = niche mạnh.
- Q2-Q5: với mỗi PASS, bạn có bằng chứng cụ thể (ảnh chụp, số liệu, quote user)?
- Absorption test: thay vì hỏi "có còn đáng dùng không?", hỏi "user sẽ ở lại với sản phẩm này
  hay chuyển sang ChatGPT tích hợp?"

Viết lại đánh giá với góc nhìn skeptical — như VC từ chối invest.
```

### Khi muốn so sánh với Jasper case cụ thể

```text
Tôi muốn hiểu sản phẩm này có rủi ro Jasper-style không.

Jasper (Oct 2022 → Sep 2023):
- Valuation $1.5B → CEO + CTO stepped down
- Revenue $120M → $55M trong 1 năm
- Vì sao fail: ChatGPT + Google Docs + Notion AI làm "general AI writing" tốt đủ.
- Jasper có template marketing (Facebook ad, blog post) — nhưng không đủ defensible.

So sánh sản phẩm [TÊN] với Jasper trên 4 chiều:
1. Have proprietary data? Jasper: KHÔNG. Sản phẩm này: ?
2. Have proprietary functionality? Jasper: template marketing — không đủ. Sản phẩm này: ?
3. Have better interaction model? Jasper: chat-like + form — không khác Google Docs + Gemini. Sản phẩm này: ?
4. Have deep integration / accuracy requirement? Jasper: KHÔNG. Sản phẩm này: ?

Verdict sau so sánh: sản phẩm này có rủi ro Jasper-style không (CAO / TRUNG BÌNH / THẤP)?
```

### Khi muốn áp dụng vào use case Việt Nam

```text
Đánh giá của bạn đang nhìn từ góc thị trường global.

Test ở thị trường Việt Nam:
- Người dùng VN có gặp horizontal AI (ChatGPT, Claude) khác người Mỹ không?
  (Hint: tiếng Việt yếu hơn, văn hoá khác, regulation NĐ 13/2023.)
- Sản phẩm này có tính năng đặc thù VN không? Hay là sản phẩm Mỹ chỉ dịch tiếng Việt?
- Có competitor VN nào không? (Vd: Edmicro cho EdTech, FPT.AI cho chatbot.)

Nếu sản phẩm KHÔNG có lợi thế VN-specific, niche ở VN có khác niche global không?
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

Trước khi paste vào slide deck mục S5:

1. **5 questions check**: Đã đánh giá đủ 5 niche questions chưa? Không bỏ sót câu nào?
2. **Evidence check**: Mỗi PASS/FAIL có bằng chứng cụ thể (ảnh chụp, observation, hoặc quote) không? Hay chỉ ý kiến?
3. **10x bar check**: Có claim "sản phẩm này 10x better" không? Nếu có, "10x" đo bằng gì?
4. **Absorption test**: Câu trả lời cho absorption test có thực tế không? Thử google "Cursor vs Copilot 2025" hoặc tương tự để verify.
5. **Skeptical voice check**: Có giọng phản biện trong phân tích không? Hay 100% là "sản phẩm tốt" hoặc 100% "sản phẩm tệ"?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Sản phẩm Cursor có niche mạnh vì là IDE cho developer. ChatGPT không phải IDE nên Cursor có vị thế."

Vấn đề: không có bằng chứng cụ thể, không trả lời 5 niche questions, không có absorption test.

### Tốt

> **Đánh giá niche của Cursor**
>
> **Q1 — Horizontal không giải được?** PARTIAL.
>
> Cursor giải tốt hơn ChatGPT cho use case "edit nhiều file đồng thời" (Cmd+K, Composer). Nhưng cho use case "viết function đơn lẻ", ChatGPT làm tương đương — chỉ tốn extra copy-paste.
>
> Bằng chứng: nhóm thử nghiệm viết hàm Levenshtein, Cursor cho output trong 8s với code chạy được; ChatGPT cũng cho code chạy được, copy-paste mất 15s extra.
>
> Verdict: niche "edit multi-file" mạnh, niche "single function" yếu.
>
> **Q2 — Proprietary data?** FAIL.
>
> Cursor không có data riêng. Index codebase của user là feature, không phải data riêng của Cursor.
>
> **Q3 — Proprietary functionality?** PASS — partial.
>
> Cmd+K (inline edit), Composer (multi-file edit), Apply Changes (diff review) — đây là functions riêng. NHƯNG Claude Code đang catch up.
>
> **Q4 — Better interaction model?** PASS.
>
> Cmd+K trong chính file code, không cần switch tab. Composer dùng diff view không phải chat. Đây là 10x better cho developer flow so với chat ChatGPT.
>
> Bằng chứng: ảnh chụp `product-A-3-output.png` cho thấy Cursor đặt code TRỰC TIẾP vào file, ChatGPT yêu cầu copy-paste.
>
> **Q5 — Deep integration?** PASS.
>
> Cursor là IDE (fork VS Code), tích hợp vào toàn bộ developer workflow (Git, terminal, debugger).
>
> **10x BAR**: Cursor 10x better cho "developer doing focused coding session" — đo bằng "task completion time" và "context switches per hour".
>
> **ABSORPTION TEST**: GitHub Copilot đã thêm Chat, Workspace, Multi-file edit. Cursor lead về UX, nhưng Microsoft có distribution + budget khổng lồ. Estimated time until absorption: **12-24 tháng**, nếu Cursor không xây thêm moat (vd: data flywheel từ user editing patterns).
>
> **JASPER COMPARISON**: Risk MEDIUM. Cursor có niche rõ hơn Jasper (developer workflow vs general writing), nhưng dependence trên VS Code + OpenAI/Anthropic APIs = "rented land" warning.
>
> **VERDICT**: Niche strength **MEDIUM** (mạnh cho power user, yếu cho casual developer).

Khác biệt: có bằng chứng cụ thể (Q1 timing, ảnh chụp), 10x đo cụ thể, absorption test có timeframe, có Jasper comparison.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Hỏi "sản phẩm này có niche không" mơ hồ | Bắt AI trả lời 5 questions cụ thể |
| Để AI mặc nhận sản phẩm tốt | Buộc AI làm absorption test với timeframe |
| Không tham chiếu Jasper case | So sánh với Jasper để có baseline failure |
| Tin AI claim "10x better" không verify | Bắt AI giải thích "10x" đo bằng gì |
| Quên bằng chứng ảnh chụp | Mỗi PASS/FAIL phải tham chiếu ảnh trong slide deck hoặc folder `screenshots/` |
| Bỏ phản biện | Bắt AI viết counter-narrative |

---

## Format save vào slide deck mục S5

```markdown
### Lens 2 — Niche Down (Sản phẩm A)

**5 Niche Questions**:

- Q1 — Use cases horizontal không giải được? [PASS/FAIL/PARTIAL] — [bằng chứng]
- Q2 — Proprietary data? [...]
- Q3 — Proprietary functionality? [...]
- Q4 — Better interaction model? [...]
- Q5 — Deep integration / accuracy / citation? [...]

**10x Bar**: [...]

**Absorption Test**: [CÓ / KHÔNG / MỘT PHẦN] — timeframe ___

**Jasper Comparison Risk**: [HIGH / MEDIUM / LOW]

**Niche Verdict**: [STRONG / MEDIUM / WEAK]
- Strongest signal: [...]
- Weakest signal: [...]
- Biggest threat: [...]
```

Lặp lại cho Sản phẩm B.

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi đánh giá niche, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **5-year horizon**: Trong 5 năm tới, nếu horizontal AI tiến bộ 10x (cost giảm, capability tăng),
   sản phẩm này còn niche không? Niche bị thu hẹp ở đâu?

2. **Counterfactual**: Nếu sản phẩm này ra mắt SAU ChatGPT 5 (giả sử 2027), có còn vị thế hôm nay không?
   (Hint: timing là quan trọng — niche được build trên ChatGPT 3.5 có thể không tồn tại nếu start với GPT-5.)

3. **Buy vs Build vs Partner**: Nếu Microsoft / Google / Anthropic muốn "absorb" sản phẩm này,
   họ sẽ chọn cách nào: mua lại (acquisition), build feature riêng, hay partner?
   Cách họ chọn nói lên gì về niche của sản phẩm?

Trả lời 3 câu này để có góc nhìn dài hạn.
```
