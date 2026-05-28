---
artifact: 5 — Solution Approach (phần khám phá)
bai-tap: Solution — tìm lời giải đã có sẵn trước khi tự xây
phase: Double Diamond vòng 2 · ◇ giãn (mở hết lựa chọn, chưa chốt)
time: ~8 phút (xem deck để biết khung giờ chính xác trong buổi)
input: 01-frame/3-FINAL-problem-framing.md · 00-context.md · prompts/04-find-solutions.md
nop-cuoi: Không — file trung gian (bản chốt ở 2-FINAL-solution.md)
---

# 1 — Find existing solutions (đừng xây lại từ số 0)

Mục tiêu: trước khi quyết Build / Buy / Boost / Partner, nhóm phải biết bài này đã có ai giải ở chỗ khác chưa, và họ giải bằng cách nào. Đây là nửa "giãn ra" của [Double Diamond](https://www.thefountaininstitute.com/blog/what-is-the-double-diamond-design-process) vòng 2 — mở hết các lời giải đang tồn tại, chưa chốt cái nào.

Lý do làm bước này: đây là chỗ nhiều nhóm hỏng mà không biết. Hỏng vì nhảy thẳng vào "tự build" cho oai, trong khi 80–90% nhu cầu nội bộ chỉ cần Boost hoặc Buy. Hỏng vì không hỏi "ai làm rồi" nên đi lại từ số 0. Gần như bài nào cũng đã có người giải ở một ngành khác — không thấy thì phí cả pilot.

Quy tắc: **không có nguồn = giả định.** Mỗi cái AI/web nói ra, hỏi lại "lấy ở đâu?". Không chỉ được nguồn thì đánh dấu 🧮 (giả định để giảng), đừng xài như fact.

## Bước 0 — Bài này thực ra là dạng bài gì? (2 phút)

Bỏ context AI20k sang một bên. Mô tả Quick Win của nhóm như một bài toán chung — không có chữ "học viên / coach / Discord". Vài ví dụ cho dễ hình dung:

- "câu hỏi của user → câu trả lời kèm nguồn" → đây là bài Q&A có citation
- "một đống văn bản lộn xộn → data có cấu trúc" → bài extraction
- "bài nộp → nhận xét theo rubric" → bài rubric grading

Dạng bài (the pattern) đó gần như chắc chắn đã có người làm ở ngành khác. Tìm ra dạng bài → tìm ra người đã giải nó.

- **Quick Win của nhóm, viết lại thành 1 dạng bài chung (không có chữ domain)**: Kiểm tra tính tuân thủ (Compliance checking) của một tài liệu dựa trên một danh sách tiêu chí (checklist/rubric) cho trước để tìm ra các mục bị thiếu.
- **Input → output thực chất là gì**: [Tài liệu (bản nháp) + Checklist/Rubric] → [Danh sách các tiêu chí bị vi phạm/bị thiếu kèm trích dẫn vị trí (nếu có)]
- **Ràng buộc không bỏ được (lấy từ `00-context.md`)**: Budget nhỏ (không train model riêng, ưu tiên dùng API có sẵn), Human review (AI chỉ báo thiếu, học viên/coach tự sửa/chấm điểm), Formative (chỉ feedback).

## Quy trình 8 phút

```text
2 phút  — Bước 0: gọi tên dạng bài
4 phút  — Phần A: deep research 4 tầng "ai giải dạng bài này rồi"
2 phút  — Phần B: rút về 2–3 hướng khả thi, đánh dấu nguồn
```

---

## Phần A — Deep research: ai giải dạng bài này rồi, giải sao?

Không phải gõ 1 câu vào AI rồi chép. Chạy 4 tầng, **tầng sau lấy kết quả tầng trước làm input**. Khung câu lệnh ở `prompts/04-find-solutions.md`.

Câu hỏi phụ (tự trả lời — viết ra cái nhóm *tìm thấy*, không phải cái nhóm *đoán*):

- Dạng bài này giống bài nào ở một ngành hoàn toàn khác? -> Giống bài review hợp đồng (Legal compliance), kiểm duyệt hồ sơ vay vốn thiếu giấy tờ (Banking).
- Hướng nào AI gợi ý mà nhóm **không kiểm được nguồn** — vậy có nên tin không? -> Xây dựng LLM Agent tự động sửa file.
- Một ca thất bại của người đi trước dạy nhóm tránh đúng điều gì? -> Đừng bắt LLM chấm điểm/đánh giá chất lượng lập luận ở phiên bản đầu, vì LLM sẽ "hallucinate" điểm số. Chỉ nên bắt nó kiểm tra sự tồn tại (Extraction/Checklist).
- Nhóm "đi từ mức mấy" — kế thừa được gì để khỏi bắt đầu từ 0? -> Đi từ mức 5: dùng LLM có sẵn (ChatGPT/Claude API) nhồi prompt kỹ thuật Few-shot prompting.

### Trả lời — điền theo 4 tầng

| Tầng | Hỏi AI/web câu gì | Tìm được gì | Nguồn / 🧮 nếu là giả định |
|---|---|---|---|
| 1 · Map | "Dạng bài [Compliance checking/Rubric extraction] thường giải bằng những hướng nào? 4–6 hướng, mỗi hướng khi nào nên dùng." | 1. Dùng Rule-based (Regex/Keyword). 2. Dùng NLP/NER (trích xuất thực thể). 3. LLM (Few-shot prompting). 4. LLM Agent pipeline (có RAG). | 🧮 (Kiến thức phổ quát về AI) |
| 2 · Tiền lệ | "Đội nào (ngành bất kỳ) đã làm [Compliance checking tài liệu] ở quy mô tương tự? Họ làm cách nào?" | Ngành Legal/Kế toán dùng LLM API kết hợp với Prompt định dạng rõ checklist (Ví dụ: Ironclad AI review hợp đồng). | 🧮 (Mô hình Legal AI) |
| 3 · Phản chứng | "Ca nào làm [Rubric grading bằng LLM] thất bại? Nguyên nhân gốc là cách làm hay chuyện khác?" | Nhiều hệ thống EdTech thất bại khi bắt LLM "chấm điểm". Nguyên nhân: độ ảo giác (hallucination) cao, không nhất quán. Cách khắc phục: giới hạn AI chỉ "tìm xem có thông tin này không" chứ không "đánh giá hay dở". | 🧮 (Báo cáo EdTech) |
| 4 · Thu hẹp | "Với ràng buộc [budget nhỏ · có người review · formative], hướng nào khả thi cho pilot 6 tuần?" | Dùng LLM API (như OpenAI GPT-4o-mini hoặc Claude 3 Haiku) tích hợp vào Discord bot (Boost) hoặc tạo một tool UI đơn giản (Build nội bộ) với prompt cấu trúc chặt chẽ (System prompt chứa Rubric). | 🧮 (Best practice cho tool nội bộ) |

---

## Phần B — Rút về 2–3 hướng khả thi

Câu hỏi phụ:

- Hướng nào *kế thừa được nhiều nhất* từ người đã làm? -> Hướng dùng LLM API + Few-shot prompt.
- Hướng nào nghe hay nhưng nhóm **không có nguồn** để tin? -> Dùng RAG + Agent tự động đối chiếu chéo nhiều file phức tạp.

### Trả lời

| Hướng giải khả thi | Ai làm rồi (gần bài mình nhất) | Nguồn / 🧮 | Hợp ràng buộc `00-context`? |
|---|---|---|---|
| 1. Boost Discord: Tích hợp bot Discord gọi LLM API để duyệt file. | Các cộng đồng học tập trực tuyến (Discord edtech). | 🧮 | Có vì budget siêu nhỏ (xài chung Discord), dễ tiếp cận user. |
| 2. Build Tool Web: Dùng Streamlit + LLM API tạo tool upload file. | Các internal tool nội bộ doanh nghiệp. | 🧮 | Có vì dễ code (Python Streamlit), prompt quản lý tập trung, human in the loop. |

**"Đi từ 5 lên" — nhóm kế thừa cụ thể cái gì** (1–2 câu):

```text
Thay vì tự build logic từ 0, nhóm sẽ kế thừa các foundation model giá rẻ (Claude 3 Haiku / GPT-4o-mini) và kỹ thuật prompt "Checklist/Extraction" đã được chứng minh hiệu quả trong ngành Legal.
```

---

## Phát hiện ban đầu

Ghi nhanh 2–3 cái đáng chú ý nhất (chưa phải quyết định — quyết định ở file FINAL):

- Tool chỉ có giá trị khi **Prompt** chứa rubric rất chặt chẽ và có ví dụ (Few-shot).
- Nên Build bằng Streamlit (UI web) thay vì Boost Discord, vì upload file slide/pdf/md lên Discord thường bị trôi và khó hiển thị format feedback dài.

## Câu hỏi mở (mang sang bước chốt)

- Ai sẽ là người viết và tối ưu cái prompt chứa Rubric? (Cần chuyên môn của Instructor).

---

## Tổng kiểm tra trước khi sang `2-FINAL-solution.md`

| Hạng mục | Xong? |
|---|---|
| Gọi được dạng bài trong 1 câu, không còn chữ domain | [x] |
| Đủ 4 tầng deep research, tầng nào cũng có kết quả | [x] |
| Mỗi kết quả có nguồn, hoặc đánh dấu 🧮 nếu là giả định | [x] |
| Rút về 2–3 hướng + nói được "đi từ 5 lên" cái gì | [x] |

Hàng nào chưa xong → quay lại Phần A, đừng sang bước chốt vội.

Sau bước này, mở `2-FINAL-solution.md` — chốt Build/Buy/Boost/Partner + data & ai review + bản vẽ trực quan (đây là bản nộp của phase này).

*Liên quan: handbook §A5 · `prompts/04-find-solutions.md` · `00-context.md`*
