# Prompt tham khảo 5 — Audit ma sát UX của sản phẩm

**Dùng khi**: nhóm đã thử sản phẩm, cần đánh giá CHẤT LƯỢNG GIAO DIỆN người dùng — có ma sát ở đâu, có workarounds gì, có phải chat box là lựa chọn đúng không. Áp dụng Lens 3 (phần UX Innovation).
**Công cụ gợi ý**: Claude Sonnet/Opus, ChatGPT-4o, Gemini 1.5 Pro.
**Lưu kết quả vào**: slide deck `analysis-report.pdf` mục S2 (Workflow) + mục S5 (Product Judgment — UX)
**Thời gian**: 10-12 phút (cho mỗi sản phẩm)

---

## Trước khi vào prompt — 5 câu hỏi nhóm tự trả lời

UX Audit khác AI Feature Map: AI Feature Map đánh giá "AI tốt thế nào", UX Audit đánh giá "giao diện đưa AI đến user thế nào". Một sản phẩm có thể có AI cực kỳ thông minh nhưng UX tệ — user không tận dụng được.

1. **Khi user mở sản phẩm lần đầu**, họ thấy gì? Có hiểu cần làm gì không? (No clear beginning?)
2. **Khi user đã có kết quả AI**, họ biết bước tiếp theo không? Hay vẫn lúng túng? (No clear end?)
3. **User có phải "dịch" vấn đề của mình thành prompt không**? Hay sản phẩm hiểu được câu nói tự nhiên? (Translation work?)
4. **AI có nhớ context trong cùng session không**? Hay user phải nhắc lại mỗi lần? (Context retention?)
5. **AI có tích hợp với workflow của user không**? Hay user phải copy-paste ra ngoài? (Isolation?)

> **Cảnh báo**: "Chat is the path of least resistance for developers, not necessarily the best interface for users." — đừng tin rằng chat box = giao diện tốt. Có nhiều sản phẩm AI tốt KHÔNG dùng chat (Cursor Cmd+K, Descript edit-text-to-edit-video, Miro AI organize bằng drag).

---

## Prompt chính (paste sau context + log ảnh chụp)

```text
Bạn là UX researcher. Dựa trên BỐI CẢNH ở trên và TRẢI NGHIỆM nhóm tôi với sản phẩm [TÊN],
giúp nhóm tôi audit MA SÁT UX (UX Friction) của sản phẩm theo Lens 3 (UX Innovation).

PHẦN 1 — 4 VẤN ĐỀ CỦA CHAT INTERFACE

Đánh giá sản phẩm có gặp 4 vấn đề mà giao diện chat thường mắc phải:

VẤN ĐỀ 1 — No clear beginning or end
- User mở sản phẩm lần đầu có biết bắt đầu thế nào không?
- Sau khi có kết quả, user có biết khi nào "xong" không?
- Bằng chứng: ảnh chụp giao diện đầu (entry) + giao diện sau output.

VẤN ĐỀ 2 — Unnatural translation
- User phải "dịch" vấn đề của mình thành prompt phù hợp AI không?
- Hay sản phẩm hiểu được câu nói tự nhiên (Vietnamese, English, broken sentences)?
- Bằng chứng: câu prompt nhóm nhập + kết quả AI hiểu đúng / hiểu sai.

VẤN ĐỀ 3 — Poor context retention
- Trong cùng session, AI có nhớ user đã nói gì lúc đầu không?
- Khi user hỏi "Còn cái tôi vừa nói thì sao?", AI có hiểu không?
- Bằng chứng: thử nhiều turns trong cuộc trò chuyện + xem kết quả turn 3-4.

VẤN ĐỀ 4 — Isolation from tools
- AI có tích hợp với công cụ khác của user không? (Email, Calendar, Docs, IDE, CRM, ...)
- Hay user phải copy-paste kết quả ra ngoài?
- Bằng chứng: thử dùng kết quả cho công việc khác — có dễ không?

Với MỖI vấn đề: GIẢI QUYẾT TỐT / GIẢI QUYẾT MỘT PHẦN / GẶP VẤN ĐỀ + bằng chứng cụ thể.

PHẦN 2 — 3 FRICTION AREAS

FRICTION 1 — PHYSICAL LOAD
- Bao nhiêu click để có kết quả đầu tiên?
- Bao nhiêu tab user phải mở?
- Bao nhiêu lần copy-paste để dùng kết quả?

FRICTION 2 — COGNITIVE BURDEN
- User cần học cách viết prompt tốt mới có kết quả tốt không?
- Output của AI có yêu cầu review nhiều không (vd: phải sửa 30% code AI viết)?
- Có concept khó (vd: temperature, top-p) user phải hiểu không?

FRICTION 3 — USER WORKAROUNDS (quan trọng nhất!)
- Nhóm tôi đã làm gì để khắc phục yếu điểm của sản phẩm trong test?
- Vd: copy-paste sang Google Docs để format lại? Mở thêm tab kiểm chứng nguồn?
- "Workarounds = unmet needs" — đây là cơ hội cho sản phẩm khác.

PHẦN 3 — INTERFACE SPECTRUM

Sản phẩm nằm ở đâu trên spectrum?

```
Digital-Native <----------> Human-Native
(dashboards, forms,     (voice, gesture,
 chat boxes)             natural context)
```

Vd:
- Slack: Digital-Native (chat + UI buttons).
- Cursor (Cmd+K): Hybrid (digital but inline trong file).
- Descript: Hybrid (edit video bằng edit text = unconventional digital).
- Granola: Hybrid (lurks trong background of meeting).
- Sản phẩm [TÊN] ở đâu?

PHẦN 4 — CHAT VS CHUYÊN BIỆT

Câu hỏi quan trọng: sản phẩm dùng chat box có đúng không?
- Chat box là path of LEAST RESISTANCE for developers — không nhất thiết là BEST cho user.
- Sản phẩm này nếu BỎ chat, dùng giao diện khác (form? canvas? inline edit? workflow visualization?), có TỐT HƠN không?

PHẦN 5 — VERDICT

UX Friction Score: HIGH FRICTION / MEDIUM / LOW FRICTION.

3 cơ hội cải thiện UX (nếu sản phẩm muốn build tốt hơn):
1. [...]
2. [...]
3. [...]

3 điểm mạnh UX hiện tại:
1. [...]
2. [...]
3. [...]

PHẢN BIỆN:
- Có bias nào trong audit (vd: nhóm quen với ChatGPT nên thấy mọi sản phẩm khác "lạ")?
- Sản phẩm có user persona khác nhóm test không (vd: power user vs casual)? Audit có công bằng không?
```

---

## Iterate — đẩy AI sâu hơn nếu output chưa đủ

### Khi AI không tìm thấy workarounds

```text
Phần 2 Friction 3 (User Workarounds) bạn vừa đưa quá nhẹ — như sản phẩm không có vấn đề.

Đẩy SÂU hơn — nghĩ lại quá trình nhóm tôi đã làm:
- Có lúc nào copy-paste kết quả AI ra Notepad hoặc Google Docs không? Vì sao?
- Có lúc nào mở tab thứ 2 để kiểm tra nguồn AI dẫn không?
- Có lúc nào nhập câu hỏi 2 lần (vì lần đầu AI hiểu sai)?
- Có lúc nào phải "trick" AI bằng cách viết prompt khác đi?
- Có lúc nào dùng feature khác để bù cho feature AI yếu (vd: search trong codebase thay vì hỏi AI)?

Mỗi workaround = 1 unmet need = 1 cơ hội cải thiện.
Liệt kê ít nhất 3 workarounds cụ thể.
```

### Khi muốn chấm điểm dạng so sánh

```text
So sánh UX Friction của 2 sản phẩm trong cùng ngành:

Sản phẩm A: [...]
Sản phẩm B: [...]

Lập bảng so sánh:
| Yếu tố | Sản phẩm A | Sản phẩm B | Sản phẩm thắng |
|---|---|---|---|
| Số click để có kết quả | __ click | __ click | [A/B] |
| Translation work cần thiết | [Cần/Không] | [Cần/Không] | [A/B] |
| Context retention quality | [Tốt/Trung bình/Yếu] | [...] | [A/B] |
| Tích hợp với workflow | [...] | [...] | [A/B] |
| Workarounds nhóm phải làm | __ lần | __ lần | [A/B] |

Tổng kết: sản phẩm nào UX TỐT HƠN tổng thể? Lý do?
```

### Khi sản phẩm chỉ là chat box

```text
Sản phẩm này 100% là chat box (ChatGPT, Claude.ai, Gemini chat).
Đánh giá riêng: chat box có ĐÚNG cho use case này không?

Use case nhóm tôi test: [nhập từ group-members.md hoặc bối cảnh nhóm]

Thử nghĩ:
- Nếu thay chat bằng FORM (multi-field input), có tốt hơn không?
- Nếu thay bằng CANVAS (visual editor), có tốt hơn không?
- Nếu thay bằng WORKFLOW VIEW (steps), có tốt hơn không?
- Nếu giữ chat nhưng có STRUCTURED OUTPUT (bảng + cards), có tốt hơn không?

Vd Perplexity dùng "chat + cards + tables" — đây là chat IMPROVED.
Vd Cursor Cmd+K = INLINE EDIT, không phải chat.

Đề xuất giao diện thay thế cho sản phẩm này (nếu nó muốn cải thiện UX).
```

---

## Phản biện sau khi có output — 5 câu nhóm tự hỏi

1. **4 chat problems check**: Đã đánh giá đủ 4 vấn đề chat interface? Không bỏ qua vấn đề nào?
2. **3 friction areas check**: Đã đánh giá Physical / Cognitive / Workarounds? Đặc biệt Workarounds — có thực sự ghi cụ thể không?
3. **Interface Spectrum check**: Đã xác định sản phẩm nằm ở đâu trên spectrum? Có giải thích lý do?
4. **Chat vs chuyên biệt check**: Có suy nghĩ về việc sản phẩm CÓ NÊN dùng chat không, hay chỉ chấp nhận chat?
5. **Bias check**: Audit có công bằng không? Có bias "nhóm chỉ quen ChatGPT nên thấy mọi thứ khác lạ"?

---

## Ví dụ tốt vs ví dụ chưa tốt

### Chưa tốt

> "Sản phẩm Notion AI có UX ổn. Người dùng nhập câu hỏi và AI trả lời."

Vấn đề: không có bằng chứng, không đánh giá 4 vấn đề + 3 friction.

### Tốt

> **UX Audit — Notion AI**
>
> **PHẦN 1 — 4 vấn đề chat interface**
>
> 1. **No clear beginning/end**: GIẢI QUYẾT MỘT PHẦN.
>    Sản phẩm Notion AI xuất hiện inline trong page Notion — user thấy "/ai" command tự nhiên. Nhưng khi xong, không có signal rõ "kết thúc" — user phải tự quyết khi nào ngừng.
>    Bằng chứng: ảnh `product-A-3-output.png` cho thấy output xuất hiện inline + button "Try again" / "Keep" / "Discard".
>
> 2. **Unnatural translation**: GIẢI QUYẾT.
>    User nhập câu tiếng Việt tự nhiên "Tóm tắt page này" — Notion AI hiểu đúng. Không cần prompt engineering.
>
> 3. **Poor context retention**: GẶP VẤN ĐỀ.
>    Notion AI mỗi command là 1 invocation độc lập — không nhớ user đã hỏi gì 5 phút trước trong cùng page. Khi nhóm thử "Sửa lại theo phong cách tôi vừa yêu cầu", AI không biết.
>
> 4. **Isolation from tools**: GIẢI QUYẾT.
>    Notion AI hoạt động TRONG Notion — context (page content, database) tự động được dùng. Không cần copy-paste.
>
> **PHẦN 2 — 3 Friction Areas**
>
> 1. **Physical load**: THẤP.
>    1 click vào "/" + chọn AI = 2 click để có kết quả.
>
> 2. **Cognitive burden**: TRUNG BÌNH.
>    User cần biết các command (/translate, /summarize, /rewrite) — có document nhưng phải học. Có template gợi ý.
>
> 3. **User workarounds**: 4 cái nhóm đã làm:
>    - Copy output Notion AI sang Google Docs để format lại (Notion AI không có bullet list đẹp).
>    - Mở thêm Claude.ai để so sánh tone giọng (Notion AI tiếng Việt hơi mềm).
>    - Refresh page khi AI bị stuck (gặp 1 lần khi context dài).
>    - Hỏi lại 2 lần khi câu đầu AI hiểu nhầm context.
>
> Workarounds = unmet needs: Notion AI thiếu (a) consistent formatting, (b) Vietnamese tone control, (c) reliable session memory.
>
> **PHẦN 3 — Interface Spectrum**
>
> Notion AI: HYBRID — vừa Digital-Native (commands trong page) vừa Inline-Native (kết quả thay thế trực tiếp). Khác chat box rõ rệt.
>
> **PHẦN 4 — Chat vs chuyên biệt**
>
> Notion AI ĐÚNG khi KHÔNG dùng chat box. Inline AI commands phù hợp với context "đang viết doc" — user không muốn switch sang chat tab.
>
> So với Notion thử dùng chat box (như ChatGPT panel) — sẽ tệ hơn vì break flow.
>
> **VERDICT**: UX Friction Score = LOW FRICTION (mạnh nhất là Inline + No Translation Work).
>
> 3 cơ hội cải thiện:
>
> 1. Session memory across commands trong cùng page.
> 2. Vietnamese tone control (formal/casual).
> 3. Better discoverability cho /commands (hiện chỉ có shortcut menu).

Khác biệt: bằng chứng ảnh chụp + 4 workarounds cụ thể + verdict có lý do + improvement areas cụ thể.

---

## Anti-pattern khi prompt — tránh

| Đừng làm | Nên làm |
|---|---|
| Audit UX "tốt" / "tệ" mơ hồ | 4 vấn đề + 3 friction + Interface Spectrum cụ thể |
| Bỏ qua workarounds | Liệt kê ít nhất 3 workarounds cụ thể |
| Mặc nhiên chat box = OK | Hỏi "có giao diện khác tốt hơn không?" |
| Không có bằng chứng ảnh | Mỗi đánh giá phải tham chiếu ảnh trong screenshots/ |
| Đánh giá 1 chiều | So sánh với phương án thay thế (form, inline, canvas) |
| Tin AI cho điểm cao | Bắt AI tìm 3 workarounds — có workarounds = có friction |

---

## Format save vào slide deck

```markdown
### Mục S2 — Workflow Evidence (UX audit)

**4 vấn đề chat interface**: [tóm tắt]
**3 Friction Areas**: [Physical, Cognitive, Workarounds]

### Mục S5 — Product Judgment (Lens 3 UX)

UX Friction Score: HIGH / MEDIUM / LOW

Interface Spectrum: Digital-Native / Hybrid / Human-Native

3 cơ hội cải thiện:
1. [...]
2. [...]
3. [...]
```

---

## Câu hỏi mở rộng — nâng cao phản biện (optional)

```text
Sau khi audit UX, giúp tôi đặt 3 câu hỏi STRESS-TEST:

1. **Power user vs casual**: Audit của tôi đang nhìn từ góc nào? Power user (rành tech) sẽ thấy
   UX hợp lý. Casual user (lần đầu dùng AI) sẽ thấy khó. Sản phẩm thiên về ai?

2. **Tiếng Việt vs English**: Test ở câu tiếng Việt vs tiếng Anh có khác nhau không?
   Sản phẩm có UX tốt với tiếng Anh nhưng tệ tiếng Việt không?

3. **Long session test**: Audit của tôi đang test session ngắn (5-15 phút). Trong session 2 giờ,
   UX có degrade không? (Vd: context window đầy, AI hallucinate tăng, tốc độ chậm dần.)

Trả lời 3 câu này để hiểu giới hạn audit hiện tại.
```
