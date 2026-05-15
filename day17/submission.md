# Day 17 Submission

Student: Nguyễn Quang Tùng - 2A202600197
Date: 24/04/2026

**Liên kết Day 16 — chuẩn cố định (Day 17 không mâu thuẫn):** [`../day16/submission.md`](../day16/submission.md). **GTM, buyer–user, D2C (Threads (Meta) + Zalo/FB), phổ điểm & %≥7, định giá 139.000 VNĐ/tháng, freemium, roadmap V2/V3:** lấy theo các mục *Members*, *Idea reframed*, *Access path*, *Bridge to Day 17* trong file đó; phần dưới là PRD/MVP triển khai trên nền đó. **Ngữ cảnh pain (đồng bộ Customer / Segment Card Day 16):** cốt lõi là **tự học** tại nhà; **ví dụ lúc đau nhất** thường là **buổi tối/đêm** (vd. 21h–23h — ít GV/gia sư/bạn hỗ trợ tức thì), chứ không gói cả bài toán chỉ trong “chỉ ban đêm mới khó”.

Product idea: SmartHint AI (Version 3.1 - Wedge Narrowed) - "Gia sư gỡ rối" ứng dụng mô hình Dual-Scaffolding (Trắc nghiệm định hướng + Ép tự tính toán) nhắm wedge **học sinh lớp 12 ôn thi tốt nghiệp THPT 2026**, dải điểm thi thử **5–7** (vùng "wall of 7" — **12,23%** thí sinh đạt **≥7** điểm môn Toán kỳ TN THPT **2025**; nguồn & cách trích **đồng bộ** Day 16). Lớp 11 thuộc roadmap **V2** (kích hoạt **7–8/2026** khi cohort 11 lên 12), lớp 10 (nếu mở) thuộc **V3** **sau PMF lớp 12–11** — **cùng nguyên tắc D2C** Day 16 (không qua trường/TT/GV; không B2B trường/TT).

**Chiến lược startup — cohort & moat (bổ sung sau phản biện):** Mỗi năm có **lớp 12 mới** và WOM kiểu “anh chị mách em bí kíp” là **kênh tự nhiên**, nhưng **không tự động** biến thành user/revenue cho SmartHint — em có thể được mách YouTube, group Zalo, app khác. Moat dài hạn (nếu có) là **được kiếm**: vị trí trong đầu ở ngách “ôn TN đúng dạng Phần II/III”, **bằng chứng học** (transfer, next-item), và **cộng đồng / thói quen** sau pilot — trong **cửa sổ thời gian** (ưu tiên 12–24 tháng đầu), không khẳng định đối thủ “không bao giờ” bắt chước được công nghệ; đối thủ lớn vẫn **có thể** thêm mode gợi ý từng bước, nên lợi thế cạnh tranh cần gắn **độ sâu nội dung theo đề + uy tín kết quả cảm nhận + UX quen trong ngách**.

**GTM — acquisition (bổ sung, khớp quyết định go-to-market hiện tại):** **Không** lấy **KOL scale / trend marketing trả phí** làm trụ cột (đắt, khó attribution, dễ lệch ngách). Ưu tiên **Threads** với **nội dung chân thật** (case kẹt Phần II/III, ôn đúng dạng) + **đãi ngộ beta rõ ràng** (lộ trình feedback, quyền lợi sớm, minh bạch để tránh astroturf) + **seed mỏng** (group ôn, Zalo/FB, micro-cộng đồng) — thuật toán có thể đẩy bài “ngẫu nhiên” nên vẫn cần **kế hoạch B** (nhiều touchpoint, đo nguồn). **Referral / code anh chị** (vd. thưởng phiên hoặc gói sau pilot) **không** nằm In-Scope MVP 3 tính năng; bật **sau** khi có baseline completion + next-item để tránh CAC ẩn (discount/free) làm nhiễu PMF.

> **Pivot note (v3.0 → v3.1):** Sau nghiên cứu đa lăng kính Toán THPT VN 2026 (xem `output/math_thpt_vn_2026_research.md`), tệp "THPT chung 15–18, điểm 6–8" được siết về **lớp 12** vì 4 yếu tố hội tụ: (1) **Product–curriculum fit gần 1:1** — dual-scaffolding khớp đúng Phần II (Đ/S 4 ý) + Phần III (trả lời ngắn) của đề tốt nghiệp mới 2025+; (2) Math anxiety cao nhất ở lớp 12 (Frontiers 2021, n=1.548 VN); (3) Countdown tháng 6/2026 = pain cấp tính, willingness chịu friction cao nhất; (4) **GTM & buyer (Day 16):** học sinh là **user + người chi trả (hoặc chủ động xin chi trả) + thuyết phục**; artifact “bằng chứng học tập” + Parent Pulse / báo cáo tuần (đẩy tuần *hoặc* HS kéo gửi PH) giảm ma sát với phụ huynh **stakeholder**. Nội dung MVP (Hàm số / Mũ–Log / Nguyên hàm) **vốn đã** là xương sống ôn TN lớp 12 — câu chữ chỉ điều chỉnh để khớp thực tế sản phẩm.

## 1. MVP Boundary Sheet

### Riskiest Assumption (Giả định rủi ro nhất - Tử huyệt của dự án)
Học sinh **lớp 12** điểm thi thử 5–7 (quen chép đáp án ăn liền từ QANDA) sẽ chịu friction của luồng UX "Gợi mở từng bước" của SmartHint **vì áp lực kỳ thi TN tháng 6/2026** lớn hơn cám dỗ shortcut. Nếu ma sát suy nghĩ vẫn lớn hơn động lực kỳ thi, họ sẽ thoát app và quay lại QANDA — nghĩa là ngay cả **cohort dễ thuyết phục nhất** (deadline cận, pain cao) cũng không đủ để justify mô hình.

### In-Scope (3 tính năng cốt lõi — đúng checkpoint Day 17: tối đa 3; map Need Day 16 — mục 1 là **một luồng cốt lõi** phục vụ đồng thời Need #1 và #2, không tách thành hai sản phẩm)

1. **Core Socratic Dual-Scaffolding + Empathetic Error Handling (một luồng in-app):** Tầng 1: câu hỏi trắc nghiệm (A/B/C) gợi đường lối. Tầng 2: học sinh tự tính và gõ kết quả (fill-in) để đi tiếp. Khi sai, AI không nhả đáp án; chỉ ra lỗi cục bộ (vd. nhầm dấu) với giọng điệu động viên để giảm bỏ cuộc. **Map Need Day 16:** phần dual-scaffolding → **Need #1** (mở khoá tư đúng lúc bế tắc); phần empathetic error / nhịp retry → **Need #2** (phục hồi effort sau chuỗi sai, tránh thoát sang QANDA). **Test giả định:** ma sát suy nghĩ < cám dỗ shortcut QANDA trong countdown TN (Riskiest Assumption ở trên).

2. **Parent Progress Pulse:** Báo cáo tuần tổng quan (thời lượng, phiên hoàn thành, chuyên đề đã luyện); không raw transcript chat. **Map Need Day 16:** **Need #3** (khía cạnh **artifact / bằng chứng học thật** cho buyer). **Test giả định:** buyer tin “con học thật” mà không gây phản tác dụng retention học sinh.

3. **Transparency & Control Layer:** Onboarding nêu rõ phụ huynh thấy/không thấy gì; học sinh xem trước bản gửi phụ huynh và có thể thêm ghi chú ngữ cảnh. **Map Need Day 16:** **Need #3** (khía cạnh **minh bạch + quyền kiểm soát** cho user, giảm xung đột buyer–user). **Test giả định:** giảm cảm giác “bị đeo xích” (Hypothesis 4 / buyer–user harmony).

### Out-of-Scope (Làm sau MVP)
- Dashboard giám sát thời gian thực cho phụ huynh: Chưa làm ở MVP để tránh cảm giác "bị theo dõi 24/7".
- Transcript đầy đủ từng câu chat của học sinh: Không chia sẻ trong MVP; chỉ cho phép phụ huynh xem insight tổng hợp theo tuần.
- **Monetization / Ads / Viral ép (ưu tiên sau pilot UX):** Theo Day 16 — **freemium giới hạn phiên**; **chưa** ưu tiên quảng cáo, viral loop **ép** Share, hay tối ưu doanh thu trong giai đoạn chứng minh ma sát vs QANDA. **Giá làm việc khi bật billing:** **139.000 VNĐ/tháng**; **HS trả (Momo) vs PH trả** — validate sau retention (Day 16 §8 / sizing).
- **Chấm / phân tích bài làm viết tay** của học sinh (OCR chữ tay, bám từng dòng trên giấy): **Out-of-Scope MVP** — độ phức tạp và yêu cầu tin cậy cao hơn **digitize đề in**. **In-Scope đầu vào:** **text**, **công thức gõ tay** (ô toán / LaTeX-lite), và **ảnh đề bài dạng chữ in** (sách, đề photo rõ) để đưa vào cùng luồng Dual-Scaffolding.
- **Feed / social trong app, leaderboard công khai, streak ép buộc hiển thị cho PH:** Tránh áp lực xã hội và scope creep; giữ guardrail không so sánh cohort (đã nêu ở Success Metrics).
- **B2B trường / trung tâm / giáo viên làm kênh phân phối chính:** Trái nguyên tắc D2C Day 16; có thể xem lại sau khi đã có PMF consumer.
- **Mở rộng môn / lớp ngoài wedge đã khóa** (vd. Vật lý, Hóa, lớp 10) trước khi có dữ liệu retention + next-item trên tệp lớp 12.
- **Chương trình referral / mã giới thiệu (vd. “tháng free” theo code anh chị) gắn billing:** Làm **sau pilot** khi đã có tín hiệu ma sát vs QANDA; thiết kế kèm rào chắn abuse — tránh dồn growth trước khi Riskiest Assumption được falsify/confirm.

### Non-Goals (Ranh giới đỏ - Tuyệt đối không làm)
- Nút "Xem toàn bộ lời giải" (Show full solution): Trực tiếp cạnh tranh với QANDA và phá vỡ giá trị sư phạm cốt lõi.
- Tính năng Camera Giám sát / Theo dõi học tập.
- Cơ chế phạt, bêu xấu, hoặc gửi cảnh báo tiêu cực trực tiếp cho phụ huynh dựa trên 1 phiên học đơn lẻ.

## 2. PRD Skeleton

### Problem Statement
**Học sinh lớp 12** ôn thi tốt nghiệp THPT 2026, dải điểm thi thử Toán **5–7**, **khi tự học** tại nhà thường bế tắc với các nhóm câu **phân hoá** của đề mới: Phần II (Đúng/Sai 4 ý) và Phần III (trả lời ngắn — gõ số). **Ví dụ cao điểm pain: buổi tối/đêm** (vd. 21h–23h) — ít GV / gia sư / bạn hỏi được ngay, nên ma sát “mở QANDA cho nhanh” dễ tăng; ban ngày vẫn tự học được và vẫn khó về bài, nhưng kênh hỗ trợ người thường rộng hơn. Dùng QANDA thì chỉ hiểu bề mặt (giải vắn tắt/nhảy bước, không khớp dạng câu Phần III); thuê gia sư 1:1 thì tốn kém và **không có mặt ngay** trong nhiều khung **tự học** — **đặc biệt khuya** (vd. 23h); trung tâm sau Thông tư 29/2024 có chi phí cao hơn (báo VOV: ~2tr/tháng nhiều nơi).

### Target User
- **End-user & vai trò chi / thuyết phục (Day 16):** Học sinh **lớp 12** (17–18 tuổi), điểm thi thử TN dải **5–7**, đang ôn cho kỳ thi tháng 6/2026, muốn vượt "wall of 7" (**12,23%** thí sinh đạt **≥7** điểm Toán TN 2025 — đồng bộ Day 16) nhưng dễ bỏ giữa chừng vì áp lực và quen QANDA. Học sinh là **người dùng + người chi trả (hoặc chủ động xin chi trả) + người thuyết phục**; artifact “bằng chứng học tập” (Day 16) bổ trợ Parent Pulse / báo cáo tuần trong PRD.
- **MVP chỉ phục vụ tệp lớp 12;** lớp 11 → **V2** (7–8/2026); lớp 10 (nếu mở) → **V3 sau PMF lớp 12–11** — **D2C** như Day 16 (không trường/TT/GV; không B2B).
- **Stakeholder / Buyer (phụ huynh):** Người cần **thuyết phục hoặc phê duyệt chi** (Day 16 Need #3); cần bằng chứng tiến bộ (artifact / báo cáo tuần) nhưng không muốn con phụ thuộc "tool giải hộ"; không xung đột với HS-centric GTM đã khóa Day 16.

### User Stories
- Story 1 (Định hướng): As a học sinh đang nhìn một bài toán trống trơn không biết bắt đầu từ đâu, I want nhận được một câu hỏi trắc nghiệm nhiều lựa chọn (vd. A/B/C) gợi ý hướng giải — khớp tầng 1 Dual-Scaffolding, so that tôi có thể bắt tay vào làm mà không bị quá tải não bộ.
- Story 2 (Thực thi): As a học sinh, I want AI chỉ ra lỗi sai nhỏ của tôi (VD: nhầm dấu trừ) bằng một giọng điệu thân thiện, so that tôi tự sửa được lỗi mà không cảm thấy mình ngu ngốc.
- Story 3 (Buyer-safe): As a phụ huynh, I want nhận báo cáo tiến bộ hằng tuần ở mức tổng quan, so that tôi biết con có học thật mà không tạo áp lực giám sát vi mô.
- Story 4 (Transparency): As a học sinh, I want biết chính xác dữ liệu nào được chia sẻ cho phụ huynh và được xem trước báo cáo, so that tôi không có cảm giác bị "đeo xích" hay theo dõi bí mật.
- Story 5 (Bằng chứng học — mediation): As a học sinh, I want có **nhật ký tiến bộ dạng cấu trúc** (phiên, chuyên đề, checkpoint, thời lượng — không phải transcript từng dòng chat) trong app của tôi, so that khi xung đột với phụ huynh tôi có thể **cùng căn cứ một bản tóm tắt đã preview / cùng rule với Parent Pulse** thay vì “lời nói đối lời nói” hoặc phải lộ toàn bộ chat.

### AI-Specific
**Model Selection:**
- Model: Gemini 2.5 Flash-Lite (`gemini-2.5-flash-lite`).
- Giá API (official, mốc 2026-05-11):
  - Standard: Input $0.10/1M token (text/image/video), Output $0.40/1M token.
  - Batch/Flex: Input $0.05/1M token (text/image/video), Output $0.20/1M token.
- Lý do: Model chi phí thấp trong dòng Gemini 2.5, phù hợp **freemium giới hạn phiên + WOZ → closed beta** (Day 16) trước khi billing đầy đủ theo **139.000 VNĐ/tháng**.
- Trade-off chấp nhận: Độ chính xác ở các bài quá dị có thể kém hơn model cao cấp (GPT-4o, Claude tier cao), đổi lại chi phí thấp và dễ scale phiên luyện tập hằng ngày.
- Trade-off **không** chấp nhận: (1) Latency vượt ngưỡng đã chọn cho một lượt gợi ý (trigger fallback tại 5s); (2) Sai số có thể **kiểm chứng bằng** tool tính toán thực mà không qua validator; (3) Gửi raw transcript hoặc PII học đường lên log/debug ngoài phạm vi Trust Constraints.

**Data Requirements:**
- Prompt tĩnh theo cơ chế "Socratic Dual-Scaffolding", kết hợp thư viện các dạng toán **lớp 12 ôn TN** chuẩn Bộ GD&ĐT (RAG nhẹ); tham chiếu trực tiếp **18 đề tham khảo Bộ GD&ĐT 2025** ([Drive Cục Quản lý Chất lượng](https://drive.google.com/drive/folders/1sUh3HxfURV9zCsmEHYqeXDZINhV0DizA)).
- Dữ liệu ngày 1: Bộ bài mẫu theo 3 chuyên đề ưu tiên (Hàm số, Mũ-Log, Nguyên hàm) — đây cũng là **xương sống Phần II + III đề TN 2025+**; bank bài chia theo định dạng câu (TN nhiều phương án / Đ/S / trả lời ngắn) để khớp đúng cấu trúc đề.
- **Đầu vào phiên (MVP):** **(1) text** mô tả / paste đề; **(2) công thức gõ tay** cho bước fill-in và hiển thị; **(3) ảnh đề chữ in** — pipeline **OCR hoặc multimodal** (vd. Gemini image) **chỉ để digitize đề** → text có cấu trúc rồi vào prompt/RAG; nếu ảnh mờ/OCR fail → HS **sửa tay** hoặc chọn bài **từ bank** (fallback vận hành). Không dùng ảnh để **chấm bài làm viết tay** trong MVP.
- Tần suất cập nhật: Batch hàng tuần dựa trên log "điểm kẹt" mà học sinh thường sai, ưu tiên **dạng trả lời ngắn (Phần III)** vì đây là phần phân hoá điểm cao nhất.

**Fallback UX:** (gắn nhãn handbook) **Chính — Graceful handover (MVP thực tế):** team **chưa** có pipeline **hint cứng từng checkpoint** và **video micro-bước** lúc ship vòng đầu; thay vào đó, khi AI không đủ tin / lỗi, hệ thống chuyển sang màn **Tổng quan dạng bài** — nội dung **lookup theo taxonomy / tag dạng** gắn với bài trong bank (Hàm số / Mũ–Log / Nguyên hàm × Phần II / III), **đã biên tập hoặc template tĩnh** (GV duyệt), **không** để LLM tự viết freestyle cho màn này. **Trong phạm vi tổng quan được phép:** mục tiêu dạng, **khung bước** (high-level), điều kiện & sai lầm điển hình **theo dạng** (không theo số đề cụ thể). **Ngoài phạm vi (cấm — trùng Non-Goals):** đáp án / số chốt / lời giải từng dòng cho **đề đang mở**; nút kiểu “xem full lời giải”. **Phụ — Expectation management:** luôn có dòng cảnh báo rõ AI có thể sai. Human-in-the-loop: học sinh **xác nhận** trước khi gửi insight cho phụ huynh (Transparency layer — không tự động đẩy raw chat).
- **Roadmap sau MVP:** khi đủ nội dung GV + sản xuất, bổ sung lớp **hint cứng rule-based theo checkpoint** rồi **video 30–45s một bước** như tầng handover sâu hơn (vẫn không full solution).
- Trigger:
  1) Timeout > 5 giây ở một lượt gợi ý, hoặc  
  2) AI đánh giá sai/không nhất quán 2 lần liên tiếp với cùng một bước tính, hoặc  
  3) Học sinh thất bại 3 lần liên tục ở cùng một checkpoint.
- Action:
  1) Mở **Tổng quan dạng bài** (theo tag dạng của bài hiện tại) + CTA **Đã đọc — quay lại checkpoint**; log sự kiện `fallback_pattern_overview` để đo tỉ lệ fallback (guardrail <25%).  
  2) Nếu sau khi quay lại vẫn kẹt cùng checkpoint (policy pilot: thêm tối đa 1–2 lượt thử hoặc chốt theo session): **không** mở full solution; ưu tiên **đổi sang bài cùng dạng dễ hơn trong bank** hoặc **kết thúc phiên có kiểm soát** + gợi ý quay lại sau; giai đoạn WOZ có thể **can thiệp người** thay automation sâu.  
  3) Kèm thông báo quản trị kỳ vọng: "AI có thể sai ở vài bước; tổng quan chỉ nhắc **dạng bài**, bạn vẫn phải tự tính cho **đề này**."

### Success Metrics
- **Định nghĩa Session Completion (để team đo thống nhất):** Học sinh hoàn thành **toàn bộ các checkpoint** của **một bài** trong phiên (từ vào bài đến đáp án cuối hợp lệ / thoát đúng luồng), không tính “chỉ mở app” hoặc chat rời rạc không kết thúc bài.
- **Baseline pilot (mốc đo thực tế đầu tiên):** Là bộ chỉ số thu được từ **WOZ + closed beta đầu** với **cùng định nghĩa metric** và **cùng wedge** (lớp 12, 5–7), trước khi coi các ngưỡng dưới đây (vd. completion >60%, fallback <25%) là cam kết cứng với mentor/investor. Baseline cho biết cohort thật đang ở đâu; các tuần sau so **trước/sau** khi chỉnh UX, prompt hoặc bank bài. **Tuần 1–2:** ưu tiên ghi nhận baseline và tách nhiễu (khớp mục *Lộ trình đo* §4); các % trong PRD là **hypothesis ngưỡng** — có thể **điều chỉnh** sau baseline nếu lệch giả định, vẫn giữ benchmark ngoại vi làm cảnh báo hình học.
- **North Star Metric:** Session Completion Rate trên cohort lớp 12 (tỷ lệ phiên đạt định nghĩa trên). Mục tiêu > 60%; ngưỡng tối thiểu để không-fail = 45% (đối chiếu **benchmark ngoại vi**, không dùng để claim PMF cho wedge VN: Forasoft mô tả diligence ba sản phẩm AI tutor seed-stage cuối 2024 — day-1 mở app ~35–55% paid acquisition, **day-7 retention ~18%**; một phần sụt gắn “chatbot trả lời” thay vì chiến lược sư phạm nhúng sâu — [AI Tutors and Adaptive Learning in 2026](https://www.forasoft.com/blog/article/ai-tutors-adaptive-learning-2026). Team dùng con số này làm **cảnh báo hình học** cho ngưỡng completion/consistency, không so sánh 1:1 cohort hay quốc gia).
- **Mastery Metric (mới — học theo Khanmigo):** **Next-item correctness** — tỷ lệ học sinh giải đúng **bài tiếp theo cùng dạng** mà KHÔNG có AI hỗ trợ. Đây là proxy cho transfer learning, quan trọng hơn completion vì đo "có thực sự học được không" thay vì "có ngồi đến cuối phiên không".
- **Secondary Metric:** W1/W2 Retention Rate. Đo "gây nghiện" tự nhiên của Dual-Scaffolding với cohort lớp 12 (cohort-cap sau 6/2026 — Day 16 *Cohort longevity*); lead V2 lớp 11 **Q2/2026** như roadmap Day 16.
- **Guardrail Metric:** Tỷ lệ phiên phải kích hoạt fallback < 25%.
- **Buyer Trust Metric:** Tỷ lệ phụ huynh mở báo cáo tuần > 50% và không làm giảm W1 retention của học sinh quá 5 điểm phần trăm. **Cấm tuyệt đối** ngôn ngữ so sánh ("top X%", "bằng bạn", percentile cohort) trong báo cáo — research cho thấy social comparison là biến trung gian gây hại cho học sinh VN, đặc biệt nữ sinh (Psychology in Russia 2021).
- **Vanity metric bị loại bỏ:** Downloads, pageviews, tổng số tin nhắn chat không đi đến bước tự giải.

### Dependencies & Constraints
- **Dependencies:** Google AI API (text + **image input** cho ảnh đề in, theo pricing multimodal), kho bài chuẩn THPT nội bộ, hệ thống lưu transcript/event theo từng bước; **bảng taxonomy + trang “Tổng quan dạng bài”** tương ứng (mỗi dạng ưu tiên 1 màn ngắn đã duyệt — ship theo 3 chuyên đề MVP); tùy stack có thể thêm **OCR chuyên biệt** cho ảnh đề in — **không** bắt buộc nếu multimodal đủ tốt trong pilot.
- **Product Constraints:** Không có nút "xem full lời giải". MVP hỗ trợ **(1) text**, **(2) công thức gõ tay** (ô toán / LaTeX-lite), **(3) ảnh đề bài dạng chữ in** — chỉ để **đưa đề vào app** (digitize), không cam kết đọc **bài làm viết tay** hay chữ xấu/nghiêng nặng. Fallback không thay bằng lời giải mẫu của **chính đề đang làm**.
- **Ops Constraints:** 1 PM + 1 dev + 1 giáo viên cộng tác nội dung; thời gian test MVP: 2 tuần Wizard of Oz + 2 tuần closed beta.
- **Trust Constraints (bắt buộc):**
  - Không chia sẻ raw chat log cho phụ huynh trong MVP.
  - Báo cáo chỉ theo chu kỳ tuần, không có push real-time theo từng lỗi sai.
  - Tông ngôn ngữ báo cáo ưu tiên "tiến bộ và đề xuất hỗ trợ", không dùng ngôn ngữ quy chụp/trừng phạt.
  - **Learning evidence (học sinh):** Nhật ký / timeline **cấu trúc** trong app (phiên có mục tiêu, chuyên đề, Phần II/III, checkpoint, proxy chất lượng gần next-item — không headline bằng “số tin chat”). Khi cần hòa giải PH–HS, **chỉ** dùng nội dung **cùng class** với báo cáo đã xem trước / Parent Pulse (opt-in, không tự đẩy transcript). Chi tiết field & nguyên tắc UI: `output/progress_log_parent_evidence_spec.md`.
- **Nguồn pricing dùng trong PRD (official):**
  - Google Gemini API Pricing: https://ai.google.dev/gemini-api/docs/pricing
  - OpenAI API Pricing: https://platform.openai.com/docs/pricing
  - Anthropic Claude Pricing: https://docs.anthropic.com/en/docs/about-claude/pricing

## 3. Hypothesis Table

### Hypothesis 1 (Dành cho Product: Dual-Scaffolding UX)
"Chúng tôi tin rằng việc chẻ nhỏ bài toán thành Trắc nghiệm (mớm đường lối) + Bắt tự gõ (ép tính toán) sẽ giúp **học sinh lớp 12 dải điểm thi thử 5–7** (wedge Day 16–17) không bỏ cuộc giữa chừng. Chúng tôi biết mình đúng khi Session Completion Rate đạt >60% và tỷ lệ bỏ phiên giữa chừng <30%."
- **Riskiest assumption:** Cùng Riskiest Assumption ở MVP Boundary — áp lực TN không đủ để thắng ma sát và shortcut QANDA.
- **Cách test cheapest:** Wizard of Oz qua Zalo. Người thật đóng vai AI, nhắn tin trắc nghiệm cho học sinh. Nếu học sinh phản hồi kết quả tính toán liên tục đến hết bài, giả thuyết được chứng minh.

### Hypothesis 2 (Dành cho Product: Empathetic Error Handling)
"Chúng tôi tin rằng việc AI khích lệ thay vì chê bai khi học sinh giải sai sẽ tạo ra cảm giác an toàn tâm lý để tiếp tục thử lại. Chúng tôi biết mình đúng khi tỷ lệ học sinh gõ lại đáp án sau lần sai đầu tiên đạt >80% và số phiên dừng ngay sau lỗi đầu tiên <20%."
- **Riskiest assumption:** Copy “thân thiện” bị nhận là sến hoặc không đủ cụ thể → học sinh vẫn rage-quit như với hint chung chung.
- **Cách test cheapest:** Log lại các phiên chat Wizard of Oz. Lọc các đoạn hội thoại có kết quả sai. Đếm số lượng học sinh tiếp tục tương tác để sửa sai thay vì bỏ cuộc.

### Hypothesis 3 (Dành cho Buyer-User Harmony)
"Chúng tôi tin rằng báo cáo tuần dạng tổng quan (Progress Pulse) sẽ tăng niềm tin của phụ huynh mà không gây phản tác dụng lên trải nghiệm học sinh. Chúng tôi biết mình đúng khi tỷ lệ phụ huynh mở báo cáo >50% và W1 retention của học sinh không giảm quá 5 điểm phần trăm."
- **Riskiest assumption:** Học sinh cảm thấy bị “báo cáo hộ” dù không có transcript → giảm dùng app dù phụ huynh hài lòng.
- **Cách test cheapest:** Chạy A/B 2 nhóm Wizard of Oz (có/không có báo cáo tổng quan) trong 2 tuần, so sánh tỷ lệ mở báo cáo và tỷ lệ quay lại của học sinh.

### Hypothesis 4 (Dành cho cảm giác công bằng của user)
"Chúng tôi tin rằng cơ chế minh bạch dữ liệu chia sẻ + quyền xem trước báo cáo sẽ giảm cảm giác bị kiểm soát ở học sinh. Chúng tôi biết mình đúng khi >70% học sinh trả lời 'Em hiểu rõ phụ huynh thấy gì' và tỷ lệ phản hồi tiêu cực về giám sát <15%."
- **Riskiest assumption:** Xem trước báo cáo tăng cognitive load onboarding → dropout trước khi vào giá trị Dual-Scaffolding.
- **Cách test cheapest:** Mini survey 1 câu sau tuần đầu sử dụng, kết hợp phân tích từ khóa phản hồi tự do (ví dụ: 'bị theo dõi', 'khó chịu', 'mất tự do').

## 4. PMF Scorecard (Bộ lọc PMF đa chiều)

### Lộ trình đo (tuần 1–8 sau pilot có cohort đủ dày)
- **Tuần 1–2 — chỉ học phân cực, không “PMF tuần”:** Với mẫu rất nhỏ (WOZ + beta đầu), completion / next-item / fallback chỉ dùng để **tách tín hiệu khỏi nhiễu** (ai bỏ sớm vì UX vs vì shortcut QANDA) và chỉnh luồng — **không** trình bày nội bộ hay ngoài như đã đạt/không đạt PMF.
- **Tuần 1–4 — leading:** Session Completion (định nghĩa ở Success Metrics) + **next-item correctness** (cùng dạng, không AI); ưu tiên hai chỉ số này khi mẫu nhỏ vì falsify nhanh Riskiest Assumption (ma sát vs QANDA).
- **Tuần 5–8 — PMF signal phụ:** Sean Ellis (“Rất thất vọng” nếu mất app) với ngưỡng >40% **chỉ khi** đã có đủ user lặp lại (tránh hỏi sớm trên toàn newbie).
- **Stretch (không dùng để tự đánh giá PMF sớm):** Organic WOM — % đăng ký mới có attribution “bạn bè giới thiệu” >30%; chỉ theo dõi sau khi retention W1 ổn định, tránh nhầm growth với PMF.

### 1. Aha Moment (mô tả trải nghiệm) + proxy đo được
- **Aha (qualitative):** Sau lần sai, học sinh nhận micro-correction cụ thể (vd. nhầm dấu), sửa và **hoàn thành checkpoint/bài** thay vì rage-quit.
- **Proxy hành vi (Actionable):** (1) **Retry-after-microhint rate** — % lần sai mà học sinh gõ lại / đi tiếp trong **60 giây** sau hint thấu cảm; (2) **Checkpoint complete sau ≥1 sai** — % checkpoint hoàn thành khi đã có ít nhất một lần sai trước đó trong cùng bài. Hai proxy này gắn trực tiếp với Need #2 (ở lại phiên sau chuỗi sai).

### 2. Actionable Metrics (bổ sung cho North Star đã nêu ở PRD)
- **Activation:** Tỷ lệ học sinh hoàn thành **phiên Socratic đầu tiên** (đủ định nghĩa session completion cho bài đầu).
- **W1 Retention:** Tỷ lệ quay lại trong 7 ngày (thói quen); cohort lớp 12, nhận diện rủi ro cohort-cap sau 6/2026.

### 3. PMF method (chốt theo handbook)
- **Chính (4–8 tuần):** **Aha Moment tracking** + **Retention W1** (kết hợp completion + next-item correctness làm leading).
- **Phụ (khi đủ lặp lại):** **Sean Ellis Test** (>40% “Rất thất vọng”).
- **Không dùng làm bar PMF sớm:** Organic WOM (chỉ stretch), DAU tổng, số tin nhắn không kết thúc bài.

## 5. AI Critique Log & Pivot History

| Điểm AI / Mentor chỉ ra | Action | Lý do và thay đổi cốt lõi |
|---|---|---|
| Bẫy "Camera Giám Sát" (The Buyer vs User Dilemma) | **Pivot có kiểm soát** | Không làm giám sát vi mô. Giữ lại "Parent Progress Pulse" theo tuần ở mức tổng quan để dung hòa nhu cầu buyer và bảo vệ cảm giác an toàn của user. |
| Ma sát quá lớn (Cognitive Overload) cho tệp TB-Khá | **Pivot UX** | Áp dụng "Dual-Scaffolding": Không bắt gõ Socratic tự luận từ đầu, mà dùng Trắc nghiệm để khơi thông đường lối, chỉ bắt gõ ở khâu tính toán. |
| Điểm mù văn hóa và tâm lý | **Tối ưu** | Dừng ép Share / ads / “tống tiền PH” sớm; **ưu tiên chứng minh UX & transfer** (Day 16). Monetization theo **freemium giới hạn phiên** + **139.000 VNĐ/tháng** khi bật billing — HS (Momo) vs PH trả, validate sau retention (Day 16). |
| Unit Economics | **Khắc phục** | Chuyển sang benchmark theo bảng giá official (mốc 2026-05-11): Gemini 2.5 Flash-Lite Standard Input $0.10/1M, Output $0.40/1M để khóa giả định chi phí theo dữ liệu thật thay vì ước lượng cũ. |
| Persona "THPT chung 15–18, điểm 6–8" quá rộng so với năng lực MVP và không khớp một thước đo (điểm trường vs điểm thi TN) | **Pivot wedge → v3.1** | Siết về **lớp 12, dải điểm thi thử 5–7, ôn TN tháng 6/2026** (đồng bộ Day 16). Lý do (chi tiết ở `output/math_thpt_vn_2026_research.md`): (1) Dual-scaffolding khớp Phần II + III; (2) MVP 3 chuyên đề = xương sống ôn TN; (3) Frontiers 2021 — anxiety lớp 12; (4) GTM HS-centric + artifact PH (Day 16). V2/V3: **D2C** đúng Day 16 — không B2B trường/TT. |
| Metric thiếu transfer learning — chỉ đo engagement | **Bổ sung** | Thêm **next-item correctness** (theo Khan Academy): học sinh giải đúng bài tiếp theo cùng dạng KHÔNG có AI. Đây là proxy PMF thực, đặc biệt phù hợp dạng trả lời ngắn (Phần III) của đề TN. |
| Phản biện startup: cohort lớp 12 mới mỗi năm ≠ tự động có moat; “log” xung đột PH–HS dễ va chạm cam kết không transcript | **Làm rõ sản phẩm** | Thêm mục **chiến lược cohort & moat** (moat phải kiếm; cửa sổ thời gian; đối thủ có thể copy). Chuẩn hóa **Learning evidence** cho HS + mediation **cùng rule** Parent Pulse / preview; spec: `output/progress_log_parent_evidence_spec.md`. |
| Chưa có hint cứng / video khi ship MVP đầu | **Fallback MVP** | Handover thực tế = **Tổng quan dạng bài** (nội dung tĩnh theo taxonomy, không spoil đề hiện tại); **hint cứng theo checkpoint + video micro-bước** ghi rõ **roadmap sau MVP** khi có nội dung & sản xuất. |

**Thay đổi lớn nhất giữa Version A và Version B (đối chiếu `submission_A.md`):** Pivot wedge (persona rộng → lớp 12 ôn TN 5–7đ), kiến trúc Dual-Scaffolding + Parent Pulse không giám sát vi mô, đổi model/economics sang Gemini Flash-Lite + benchmark giá official; **đồng bộ Day 16:** HS-centric GTM, **12,23%** & nguồn phổ điểm, **freemium + 139.000 VNĐ/tháng** khi billing, **D2C** (Threads + Zalo/FB, không B2B); bổ sung next-item correctness và non-goals. **Bản chỉnh sau đó:** cohort/moat theo ngôn ngữ startup; **Learning evidence** + Story 5; mở rộng out-of-scope cho đúng pass signal handbook; **GTM acquisition** (Threads + beta, không trụ cột KOL scale; referral sau pilot); **Fallback MVP** = tổng quan dạng bài (chưa có hint cứng/video lúc ship đầu).

## 6. Self-assessment

**Mắt xích yếu nhất trong chuỗi MVP Boundary → PRD → Hypothesis → PMF:** Hypothesis 1 (Riskiest Assumption về ma sát vs QANDA) — nếu sai thì mọi metric khác chỉ đo “còn sót lại ai” chứ không chứng minh wedge.

**Open questions muốn làm rõ tiếp:**
1. Trọng số động giữa Session Completion và next-item correctness khi mẫu nhỏ (đã ghi tuần 1–4 ưu tiên cả hai; cần pilot để chốt ngưỡng tối thiểu từng metric).
2. Sau tháng 6/2026, cohort-cap: chuẩn hóa North Star cho lớp 11 (V2) thế nào để không đổi thước đo giữa các wave?

**Câu hỏi:** Tại sao chúng tôi tin rằng SmartHint v3.1 sẽ thắng QANDA **trong ngách hẹp lớp 12 ôn TN 2026**?
**Trả lời:** Chúng tôi không đánh trực diện vào sức mạnh OCR và kho data khổng lồ của QANDA. Chúng tôi đánh vào **giao điểm hẹp**: cấu trúc đề mới Phần II (Đ/S 4 ý) và Phần III (trả lời ngắn) của Bộ GD&ĐT 2025+, nơi "chụp ra đáp án" của QANDA **kém hữu dụng nhất** (đề Phần III phải tự tính ra số, đề Phần II phải đánh giá Đ/S từng ý có lập luận). Đây là **product–curriculum fit** — không phải positioning.

QANDA cung cấp Đáp án (End-result). SmartHint cung cấp **kỹ năng làm đúng dạng câu phân hoá** + sự tự tin khi tự chốt bước + câu chuyện “ôn cho ngày thi” khớp deadline. Với **Empathetic Hint** (micro-correction + khích lệ, cohort 5–7đ), giá trị cảm nhận là **đồng hành ôn TN** chứ không phải “xong bài tối nay bằng mọi giá”. Học sinh **biết** shortcut giúp tối nay nhưng không thay thế **luyện đúng dạng trong phòng thi** — giả thuyết hành vi cần **pilot** (completion + next-item) chứ không kết luận từ văn mô tả.

**Moat (thành thật kiểu startup):** QANDA hoặc app khác **có thể** thêm mode gợi ý từng bước theo thời gian; lợi thế SmartHint nếu chạy đúng là **độ sâu nội dung theo đề TN + thói quen & WOM trong ngách** (anh chị khóa trước mách em khóa sau — nhưng WOM **không độc quyền**, phải **cạnh tranh** với kênh miễn phí). Moat không khẳng định “họ không clone được UX”, mà là **cửa sổ** để trở thành tên gọi đầu tiên cho “ôn Phần II/III có kiểm chứng transfer” nếu chứng minh được next-item và retention.

**Kế hoạch sống sót sau tháng 6/2026 (trích ý roadmap Day 16):** Pre-launch cohort lớp 11 (sẽ thành lớp 12 năm học 2026–2027) qua **Threads + referral** (kèm Zalo/FB nhóm ôn), không partnership trường/TT/GV; mở rộng V2/V3 **chỉ D2C** — Threads (Meta), cộng đồng Zalo/FB, ASO, referral học sinh — chi tiết cột mốc **Q2/Q3/2027** xem [`../day16/submission.md`](../day16/submission.md) mục *Roadmap mở rộng* và *Cohort longevity*.
