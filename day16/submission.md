# Day 16 Submission — SmartHint AI

## Members
Nguyễn Quang Tùng - 2A202600197

> **Đồng bộ với Day 17:** Cùng tên sản phẩm **SmartHint AI** và wedge v3.1 (lớp 12 ôn TN 2026, điểm thi thử 5–7). Bản phân tích workshop có thể vẫn nhắc *MathHint* trong file `output/` — chỉ là nhãn làm việc cũ, không đổi ý tưởng.  
> **Định giá (v3.3):** Gói **theo tháng**, mức làm việc **139.000 VNĐ/tháng** (đơn vị tiền trong bài: **VNĐ**). Mục **6** dùng **ARPU mùa ôn** = `139.000 × số tháng đăng ký trung bình` (giả định tenure — cần pilot billing).  
> **GTM & buyer (bổ sung v3.2 — chiến lược thực thi):** **Học sinh** là **người dùng + người chi trả (hoặc người chủ động xin chi trả) + người thuyết phục**; app cung cấp **artifact “bằng chứng học tập”** (tóm tắt tiến bộ, dạng Phần II/III đã luyện — không raw chat) để HS gửi PH khi cần. Day 17 PRD vẫn có Parent Progress Pulse / minh bạch — có thể hiểu là **báo cáo đẩy tuần** *hoặc* **bản tóm tắt kéo theo nhu cầu**; Day 16 khóa **ưu tiên vận hành pilot:** kênh **Threads (Meta)** + **Zalo / Facebook** (nhóm & tin ôn TN) + HS làm trung tâm quyết định dùng app. *(“Thread” = nền tảng Threads, không phải chuỗi chat trong Zalo/Facebook.)*  
> **Non-GTM (cố ý loại):** **Không** tiếp cận qua **giáo viên / trường / trung tâm dạy thêm** dưới dạng partnership B2B2C — **xung đột lợi ích trực tiếp** với định vị “ôn ngoài giờ, thay thế một phần gia sư–TT” và với hành vi HS **tự học** (ví dụ đau nhất thường là **buổi tối/đêm**, khi ít ai hỏi được); mọi mở rộng sau này cũng ưu tiên **D2C** (Threads (Meta), cộng đồng Zalo/FB, ASO, referral học sinh).  
> **Số liệu & trích dẫn:** Các claim có **URL/DOI ngay trong bài**; chỗ ghi *[Cần duyệt]* là nguồn yếu hoặc cần xác nhận thời điểm. Bảng đối chiếu đầy đủ: [`output/data_citations_audit.md`](output/data_citations_audit.md).  
> **Độ mới:** Phổ điểm Toán **toàn quốc** “mới nhất” = sau kỳ thi — tại **5/2026** **chưa có** phổ điểm THPT **2026** (thi thường ~6/2026). Dùng **2025** cho % quốc gia; bổ sung **khảo sát Hà Nội 3/2026** làm proxy **địa phương** mới hơn — *vì sao từng nguồn không có bản mới / hoặc không thay được* nằm ở **mục “Độ mới dữ liệu”** trong file audit.

---

## 1. Idea reframed

Original idea:
> "Hỗ trợ bài tập — Gợi ý thông minh không cho đáp án" (Socratic AI Tutor) dành cho môn Toán THPT (lớp 10-12).

**Wedge narrowing (cập nhật cùng Day 17 v3.1):** Sau nghiên cứu đa lăng kính (xem `../day17/output/math_thpt_vn_2026_research.md`), thu hẹp **MVP wedge** về **học sinh lớp 12 ôn thi tốt nghiệp THPT 2026**, dải điểm thi thử **5–7**. Lớp 11 thuộc roadmap V2 (kích hoạt 7–8/2026 khi cohort 11 lên 12), **D2C** (Threads (Meta), ASO, referral) — không qua trường/TT/GV; lớp 10 (nếu mở) thuộc V3 **cùng nguyên tắc D2C**, vì pain TN yếu hơn nên chỉ xem xét **sau** khi PMF lớp 12–11; **không** dùng kênh B2B trường/trung tâm. Lý do nén lại: **product–curriculum fit gần 1:1** với cấu trúc đề Toán mới của Bộ GD&ĐT (Phần II Đ/S 4 ý + Phần III trả lời ngắn — chính là cơ chế dual-scaffolding), pain cấp tính (countdown tháng 6/2026), và thước đo điểm thi TN cho phép định nghĩa cohort sắc nét hơn "TB-Khá 6–8" chung chung.

Reframed as a product opportunity:
> **[Observed gap]** Các công cụ giải toán AI hiện tại (Photomath, ChatGPT, QANDA) tập trung vào "giải bài hộ" — đưa đáp án và lời giải chi tiết ngay lập tức. Với QANDA tại VN, phỏng vấn đại diện Mathpresso trên báo ghi nhận khoảng **4,7 triệu** lượt tải tích luỹ và **1,8 triệu** MAU — [VnExpress](https://vnexpress.net/ung-dung-hoc-toan-han-quoc-thu-hut-1-8-trieu-hoc-sinh-viet-4196938.html). **Độ mới:** nội dung bài lồng ngữ cảnh **~2020** (Covid-19, MAU toàn cầu “cuối 2020”); **không phải** vì domain hay công ty “chết”, mà vì **thiếu MAU VN định kỳ** công khai + báo **không gắn ngày** rõ — xem [`output/data_citations_audit.md`](output/data_citations_audit.md) mục *Độ mới dữ liệu*. Với **đề Toán TN mới** (22 câu / 34 lệnh / 90 phút, áp dụng từ 2025), Phần III "trả lời ngắn" yêu cầu học sinh tự tính ra số — "chụp ra đáp án" của kiểu solver **kém hữu dụng nhất** chính ở phần phân hoá điểm cao nhất này. RCT **Tutor CoPilot** (Human–AI hỗ trợ gia sư) báo cáo học sinh **+4 điểm phần trăm** khả năng đạt mastery (*p* &lt; 0,01), hiệu quả hơn với nhóm gia sư xếp hạng thấp hơn — [arXiv:2410.03017](https://arxiv.org/abs/2410.03017) (Wang et al., 2024); tổng quan [Stanford SCALE](https://scale.stanford.edu/publications/tutor-copilot-human-ai-approach-scaling-real-time-expertise) (*ngữ cảnh: gia sư người + AI, không phải app-only*).
>
> **[Founding belief]** Nếu AI được thiết kế để "dạy cách nghĩ" thay vì "giải hộ", và **align trực tiếp với cấu trúc đề thi TN 2026 mà học sinh lớp 12 đang đếm ngược**, thì ngay cả học sinh dải 5–7 điểm thi thử (vùng "wall of 7" — **12,23%** thí sinh đạt **≥7** điểm môn Toán kỳ TN THPT **2025**, **1.126.172** thí sinh dự thi — thống kê theo báo chí dẫn báo cáo 15/7/2025: [VietnamNet](https://vietnamnet.vn/pho-diem-mon-toan-thi-tot-nghiep-thpt-2025-khac-biet-the-nao-so-voi-nam-truoc-2421864.html); PDF tổng hợp trên [Báo Đồng Tháp (mirror)](https://cdn2.baodongthap.vn/image/upload/others/202507/17806_Bao_cao_15_7_2025_Version3__1_.pdf)) cũng có thể vượt qua bài khó bằng chính sức mình — reward đó gắn với **transfer** sang phòng thi (Phần II/III) hơn là thỏa mãn tức thì từ solver.

---

## 2. Customer / Segment Card

- **Segment name:** **Học sinh lớp 12** ôn thi tốt nghiệp THPT 2026, dải điểm thi thử Toán **5–7**, **tự học** Toán tại nhà, thường bế tắc ở Phần II (Đ/S) và Phần III (trả lời ngắn) của đề mới — **ví dụ cao điểm pain: buổi tối/đêm**, khi ít GV / gia sư / bạn hỏi được ngay.
- **Operational context:** **Ngữ cảnh chính:** tự làm bài tập + luyện đề mock TN **trong lúc tự học** tại nhà. **Peak pain (ví dụ):** khung **21h–23h** — lúc đó thường **không** có giáo viên, gia sư, hoặc bạn bè hỗ trợ tức thì (ma sát shortcut QANDA dễ tăng); ban ngày vẫn có thể tự học và vẫn bế tắc về mặt bài, nhưng **kênh hỏi người** rộng hơn. Khối lượng học cao: báo chí mô tả lịch **12–15 giờ/ngày** trong bối cảnh áp lực “degree mindset” — [VnExpress International](https://e.vnexpress.net/news/news/in-a-degree-mindset-society-vietnamese-students-carry-heavy-academic-burden-3740791.html) (*báo chí, không phải khảo sát đại diện toàn quốc*); thêm góc **2024–2025**: học thêm dày (ví dụ 12 buổi/tuần) — [Lao Động](https://news.laodong.vn/giao-duc/thoi-khoa-bieu-12-buoituan-hoc-sinh-kiet-suc-vi-hoc-them-1419652.ld).
- **Recurring workflow:** Đọc đề → thử giải → bế tắc ở một bước logic (đặc biệt Phần III: hình không gian, tối ưu hàm số, ứng dụng tích phân, xác suất) → mất kiên nhẫn → mở QANDA/ChatGPT chụp đề → đọc lời giải → chép lại → qua bài tiếp theo mà không thực sự hiểu → vào phòng thi vẫn không tự tính được.
- **Pain moment:** Khoảnh khắc bế tắc kéo dài 3–5 phút khi luyện đề TN — cảm giác bất lực, muốn bỏ cuộc hoặc "chụp cho nhanh". Pain này được khuếch đại bởi **countdown tháng 6/2026** và phổ điểm **2025**: **56,39%** thí sinh môn Toán **dưới 5 điểm** (635.102/1.126.172) — [VietnamNet](https://vietnamnet.vn/pho-diem-mon-toan-thi-tot-nghiep-thpt-2025-khac-biet-the-nao-so-voi-nam-truoc-2421864.html).
- **Why now:** (1) **Đề Toán TN mới** (Phần II + III) khiến "chụp ra đáp án" của solver giảm hữu dụng đúng chỗ phân hoá điểm; (2) **Proxy địa phương sát mùa thi 2026 (Hà Nội):** khảo sát chất lượng lớp 12 ngày **12–13/3/2026** (>124k HS) — phổ **Toán nghiêng dải 3–5**, điểm trung bình ~**5,31** — [VTC News, 02/04/2026](https://vtcnews.vn/khao-sat-lop-12-ha-noi-diem-toan-gan-day-pho-diem-o-nguong-3-5-ar1010887.html) (*chỉ HN; **không** thay thế phổ điểm toàn quốc 2025*); (3) **Thông tư 29/2024** (hiệu lực 14/2/2025) siết dạy thêm tại trường — phụ huynh tìm kênh ngoài, báo chí phản ánh áp lực chi và giá buổi học TT — [VOV](https://vov.vn/xa-hoi/mien-hoc-phi-nhung-phu-huynh-van-nang-ganh-vi-chi-phi-tang-post1253021.vov); ngữ cảnh **~2 triệu đồng/tháng** các khoản đóng trường (THCS/TH phổ thông TP.HCM) — [Tuổi Trẻ 12/03/2025](https://tuoitre.vn/mien-hoc-phi-nhung-van-phai-dong-2-trieu-moi-thang-phu-huynh-mong-truong-giam-them-20250312151221533.htm) (*proxy áp lực chi — **[cần duyệt]** cách diễn đạt*); (4) Math anxiety **cao hơn ở khối lớp cao hơn** trong mẫu THPT VN (*n*=1.548) — [DOI 10.3389/feduc.2021.742130](https://doi.org/10.3389/feduc.2021.742130) (2021; **bài vẫn hoạt động**, chưa có thay cùng construct trong lần rà — xem audit); (5) Smartphone: mẫu *n*=950 học sinh Trung Việt Nam — **99,9%** có dấu hiệu nomophobia, TB **5,73 giờ/ngày** — [Researcher.Life entry](https://discovery.researcher.life/article/smartphone-use-nomophobia-and-academic-achievement-in-vietnamese-high-school-students/afb71c1876ce304eb722bf1dae7d9e5e) (*aggregator — không phải “nghiên cứu mất”; cần DOI gốc*; xem audit).
- **Access path (D2C — không qua GV/TT/trường):** (1) **Ưu tiên:** **Threads (Meta)** (feed ngắn, trending) **+** nhóm & kênh **Zalo & Facebook** ôn TN (case walkthrough Phần II/III, social proof trong cùng cohort) — kênh mạnh nếu có nội dung giá trị + quan hệ admin nhóm; (2) **Nội dung ngắn + referral học sinh** (Reels/TikTok/studygram — minh hoạ “tự làm được Phần III” thay vì chụp QANDA); (3) **ASO** & từ khóa store ("đề thi tốt nghiệp THPT 2026 toán", "luyện trả lời ngắn") — sau khi có bằng chứng retention pilot.

One-sentence description:
> Học sinh lớp 12 **khi tự học** luyện đề Toán TN — **ví dụ lúc đau nhất thường là buổi tối/đêm** — nếu bế tắc ở Phần II/III thì hay chụp QANDA thay vì cố tự tính — nhưng biết rõ cách đó không cứu được mình ngày 27/6/2026 trong phòng thi.

---

## 3. Need Map (2–3 needs)

### Need #1 (priority) — Cần được "mở khoá" tư duy đúng lúc bế tắc

- **Statement (JTBD):** When tôi đang **tự học** Toán và bế tắc hoàn toàn ở một bước logic **(vd. buổi tối/đêm — ít ai hỏi được ngay)**, I want được gợi ý vừa đủ (một câu hỏi dẫn dắt, một hint nhỏ) thay vì bị cho đáp án ngay, so I can tự tìm ra cách giải và nhớ được phương pháp cho lần sau.
- **Current workaround:** (1) Chụp ảnh lên Photomath/ChatGPT → đọc lời giải → chép lại (hiểu bề mặt, không nhớ lâu). (2) Nhắn tin hỏi bạn/nhóm Zalo lớp → phải chờ, thường nhận được đáp án thay vì hướng dẫn. (3) Xem video giải trên YouTube → mất 10-15 phút tìm đúng bài, nội dung dài, không tương tác.
- **Pain signal:** Học sinh tự báo cáo "hiểu lúc xem giải nhưng gặp bài tương tự vẫn không làm được" — hiện tượng "illusion of competence" được nghiên cứu giáo dục ghi nhận rộng rãi. Phụ huynh phàn nàn "con làm bài tập xong hết nhưng vào phòng thi vẫn điểm thấp".
- **Evidence / proxy evidence:**
  - **[Fact]** Tutor CoPilot (Wang et al., 2024): +4pp mastery, RCT Human–AI — [arXiv:2410.03017](https://arxiv.org/abs/2410.03017); [Stanford SCALE](https://scale.stanford.edu/publications/tutor-copilot-human-ai-approach-scaling-real-time-expertise).
  - **[Fact]** Photomath thuộc Google sau M&A 2024; quy mô người dùng công bố trước đó thường được trích **100M+ learners** / hàng trăm triệu bài giải — cần số **mới nhất** từ blog Google / Play; hiện dùng [9to5Google — Photomath on Google](https://9to5google.com/2024/02/29/photomath-google-app/) (*[cần duyệt]* cập nhật download chính thức).
  - **[Proxy]** Trên các group phụ huynh THPT tại Việt Nam, bài viết "con tôi phụ thuộc ChatGPT để làm bài" xuất hiện ngày càng nhiều từ Q4/2024.
- **Why underserved:** Default experience của Photomath/QANDA và phần lớn người dùng ChatGPT vẫn là **đáp án/lời giải nhanh** (đúng metric retention của họ). Một học sinh *có thể* tự prompt Socratic trong ChatGPT, nhưng thiếu **packaging theo khối Phần II/III đề TN**, thiếu **guardrail sản phẩm** (không có nút “xem full lời giải”), và thiếu **dữ liệu điểm kẹt theo dạng câu VN** — đó là khoảng trống sản phẩm, không phải khoảng trống “không ai làm được bằng AI”.

### Need #2 — Phục hồi effort sau chuỗi sai (để không thoát sang shortcut solver)

- **Statement (JTBD):** When tôi đang **tự làm** một câu Phần II/III **trong phiên tự học** **(vd. buổi tối — peak fatigue + ít hỗ trợ xã hội)**, đã thử 2–3 hướng giải mà vẫn sai và cảm giác “mình kém Toán”, I want phản hồi **không phán xét**, **đặt tên đúng lỗi đang mắc** (khi suy luận/tool cho phép), và **một bước nhỏ hơn** để tôi còn khả năng tiếp tục, so I can **ở lại phiên ôn theo format TN** thay vì bỏ bài hoặc mở QANDA/ChatGPT để “xong cho nhanh”.
- **Current workaround:** (1) Tự vượt qua bằng ý chí (hiếm khi đủ khi đã kiệt). (2) Nhờ bạn bè giảng hộ — HS dải 5–7 thường **ngại bị đánh giá** (“dễ thế cũng hỏi”), sợ thái độ mất kiên nhẫn. (3) Bỏ bài, lướt điện thoại, hoặc **chuyển sang solver** để giảm căng thẳng tức thì.
- **Pain signal (quan sát / hoặc đo pilot):** Chuỗi **2–3 attempt sai liên tiếp** trên cùng một câu Phần II/III trùng thời điểm HS **dễ thoát phiên** — **hypothesis vận hành** (đo WOZ/analytics: time-to-exit sau lần sai thứ 2; session completion sau chuỗi sai). Ở tầng học đường, **math anxiety** trong mẫu THPT Việt Nam (*n*=1.548; lo âu khi làm Toán **cao hơn ở khối lớp cao hơn**) — [DOI 10.3389/feduc.2021.742130](https://doi.org/10.3389/feduc.2021.742130) — dùng làm **proxy cảm xúc–nhận thức** (không thay cho log hành vi app).
- **Evidence / proxy evidence:**
  - **[Fact — đúng phạm vi]** Tutor CoPilot (2024): trong bối cảnh **gia sư người + AI**, AI hỗ trợ gia sư dùng **câu hỏi gợi mở** và ít “cho đáp án ngay” hơn — [arXiv:2410.03017](https://arxiv.org/abs/2410.03017). **Không** suy ra trực tiếp cho app tự học một mình; “AI không thở dài / không phán xét” vẫn là **giả thuyết sản phẩm**.
  - **[Proxy — học đường VN]** Cùng DOI Frontiers: neo Need #2 vào **áp lực cảm xúc khi làm Toán** trong bối cảnh thi cử (không kéo retention EdTech ngôn ngữ sang Toán THPT).
  - **[Assumption]** Văn hoá “sợ sai / sợ mất mặt” làm tầng affective nhạy hơn với cohort 5–7đ **khi tự học** — **đặc biệt buổi tối/đêm** (ví dụ đau nhất: mệt + ít người hỏi); cần **playbook thoại + nhịp retry** mặc định, không phụ thuộc HS tự prompt.
  - **[Pilot metric]** Trong 2 tuần WOZ: **session completion** sau ≥2 lần sai; **tỉ lệ tự báo mở app solver trong 30 phút sau phiên** (khảo sát ngắn + hành vi tự báo nếu chưa có instrumentation).
- **Why underserved:** Gia sư người hay bạn bè có giới hạn kiên nhẫn/cảm xúc. Solver (Photomath, QANDA) tối ưu **giảm căng thẳng bằng đáp án**. ChatGPT có thể an ủi nếu prompt đúng nhưng **không đóng gói** nhịp “an toàn tâm lý + bước nhỏ + align Phần II/III”. Cần **productized playbook** (lời thoại, nhịp retry, không phán xét) chứ không chỉ model chung. **Nếu Need #2 yếu, Need #1 (Socratic) bị phá** vì HS thoát sang shortcut **ngay sau khúc nản**.

### Need #3 — Học sinh cần “bằng chứng học thật” để tự tin trả phí / thuyết phục phụ huynh; phụ huynh cần transparency mà không cần raw chat

- **Statement (JTBD):** When tôi (học sinh) muốn dùng app ôn đúng format đề thay vì QANDA nhưng PH lo con “học vẹt” hoặc không muốn chi tiêu thêm, I want có một **bản tóm tắt bằng chứng** (thời lượng ôn, dạng Phần II/III đã luyện, tiến bộ theo tuần — **không** transcript chat) để gửi Zalo cho PH hoặc để PH yên tâm, so I can **tiếp tục dùng SmartHint** mà không xung đột gia đình và (khi cần) xin ngân sách gói ôn hợp lý.
- **Current workaround:** (1) Chỉ nói miệng “con học rồi” → PH không tin. (2) Chụp màn hình chat QANDA/ChatGPT → PH thấy là “chép giải”. (3) PH ngồi kèm → không khả thi trong nhiều khung **tự học** (vd. khuya) / không biết Toán THPT.
- **Pain signal:** HS ngại xin tiền app; PH từ chối vì không có bằng chứng khác với “solver”. Mất cơ hội chuyển đổi sang mô hình học có guardrail.
- **Evidence / proxy evidence:**
  - **[Fact — cần duyệt URL gốc]** Austrade / Ken Research (2024) thường được trích **~24%** thu nhập hộ gia đình VN cho giáo dục — khoá **PDF Austrade “Vietnam education”** hoặc báo cáo Ken trước khi trích trong deck; tạm thời xem mục audit `output/data_citations_audit.md`.
  - **[Proxy]** App quản lý thời gian / “parental control” có download cao tại VN — PH quen trả tiền cho **minh bạch hành vi**, không chỉ cho “đáp án nhanh”.
  - **[Assumption — GTM v3.2]** Với wedge lớp 12, **HS thường là người chủ động cài app / Momo nhỏ**; PH là **người cần thuyết phục** hoặc **người phê duyệt chi** — artifact “bằng chứng” giảm ma sát; nếu sau này pivot sang PH trả subscription trực tiếp, funnel vẫn tận dụng được cùng artifact.
- **Why underserved:** Solver (Photomath, QANDA, ChatGPT mặc định) không sinh **bằng chứng học tập có cấu trúc** (spoil vs tự tính); HS không có “tài liệu một trang” để chứng minh mình đang ôn **đúng dạng TN** thay vì chép.

---

## 4. Strategy Statement

For **học sinh lớp 12 ôn thi tốt nghiệp THPT 2026, dải điểm thi thử 5–7**
who struggle with **việc bế tắc ở Phần II/III đề mới mà không có ai hướng dẫn đúng lúc — dẫn đến chụp QANDA dù biết shortcut này không giúp ngày 27/6/2026**,
our product helps them **tự giải đúng dạng câu phân hoá của đề TN bằng chính sức mình, vượt "wall of 7"**
through **phương pháp Dual-Scaffolding (Trắc nghiệm định hướng + Ép tự tính toán) align trực tiếp với cấu trúc Phần II + III đề Bộ GD&ĐT 2025+, kết hợp Empathetic Error Handling phù hợp tâm lý cohort 5–7đ**,
unlike **QANDA/Photomath/ChatGPT vốn đưa đáp án ngay (kém hữu dụng nhất ở Phần III trả lời ngắn)**,
because we can leverage **(1)** vòng lặp dữ liệu “điểm kẹt” theo dạng Phần II/III trên bank đề tham khảo Bộ; **(2)** **engine tin cậy:** tầng suy luận / chính sách gợi ý ổn định (**temperature = 0**), mọi kiểm tra số & so khớp kết quả qua **tool tính toán thực**, RAG kiến thức **bắt buộc trích dẫn nguồn** (chunk/tài liệu nội bộ); **(3)** artifact “bằng chứng” cho HS thuyết phục PH — thứ stack “answer-first” không tối ưu để thu thập.

---

## 5. Moat Hypothesis

**Moat mechanism:** Vòng lặp học hỏi sư phạm & cảm xúc (Pedagogical-Emotional Learning Flywheel)

If we deploy 10,000+ phiên Socratic trong bối cảnh Toán THPT Việt Nam, the following improve:

1. **Kho dữ liệu "điểm kẹt":** Biết chính xác học sinh hay bế tắc ở bước nào của từng dạng bài → hint ngày càng đúng chỗ, đúng lúc → trải nghiệm tốt hơn → nhiều người dùng hơn → nhiều data hơn.
2. **Thư viện UX Tâm lý học (Dopamine Hacks):** Tích lũy các pattern Easter Eggs và kịch bản khen ngợi/đồng cảm (VD: "Đoạn này lừa được nhiều bạn, em sắc bén đấy!") dựa trên data thực tế → tạo Instant Gratification đúng thời điểm bế tắc → Retention tăng dựa trên động lực nội tại của học sinh thay vì phụ thuộc phụ huynh ép buộc.
3. **Domain knowledge Toán VN + audit trail:** Bank bài + RAG có nguồn → gợi ý sát chương trình / đề tham khảo, có thể **kiểm định nội bộ**; kết hợp log “hint → tự làm đúng” tạo dataset mà solver không ưu tiên thu thập.

Why competitors cannot easily replicate this:
> Photomath/ChatGPT được tối ưu để **trả lời đúng & nhanh** — vòng lặp sản phẩm của họ thường thưởng “đúng đáp án nhanh”, không thưởng “học sinh có tự làm được sau gợi ý không” hay “bỏ cuộc ở bước nào”. Pivot sang Socratic đồng nghĩa đổi **north-star metric** và risk cannibalize traffic/quảng cáo — khó về tổ chức, nhưng **không phải không thể**.

**Nếu đối thủ lớn copy ý tưởng (kịch bản startup phải chịu được):** moat không nằm ở “họ không làm được” mà ở **tốc độ vòng lặp VN + niềm tin cộng đồng ôn TN (Threads + Zalo/FB) + bank bài/điểm kẹt đã validate + chất lượng engine (tool verify + RAG có nguồn)**. Cụ thể: (1) **Time-to-curriculum** — pack 18 đề tham khảo + tag Phần II/III + rubric gợi ý theo từng lỗi sai, ship trước mùa thi; (2) **Distribution D2C** — **Threads (Meta)** + Zalo/Facebook + nội dung ngắn + referral HS (**không** phụ thuộc deal trường/TT/GV); (3) **Trust** — artifact bằng chứng cho PH, không spoil full solution, cam kết mềm + nút “ôn lại dạng bài” (micro-lesson, không tương đương lời giải full); (4) **Data flywheel** — đo *hint → tự làm được* và **next-item correctness** (Day 17), không chỉ DAU.

---

## 6. Initial TAM / SAM / SOM view

> **Lưu ý phương pháp (cập nhật v3.1):** Sizing được tính 2 lớp: **(A) wedge MVP = lớp 12 ôn TN 2026** dùng cho quyết định launch; **(B) full vision = THPT lớp 10–12** giữ lại cho roadmap V2/V3 và pitch dài hạn. Không gộp 2 con số này khi báo cáo PMF lớp 12.

> **Định giá làm việc (v3.3 — gói theo tháng):** **139.000 VNĐ/tháng** (mức trung bình làm việc). **ARPU một mùa ôn TN (wedge)** = `139.000 × số tháng đăng ký trung bình`; sizing mục A dùng **4–6 tháng**/user trong chu kỳ ôn trước kỳ thi (**[cần duyệt]** — validate pilot billing).

### A. Wedge MVP — Lớp 12 ôn TN 2026 (con số dùng cho quyết định)

| Layer | Estimate | Key assumptions | Confidence |
|---|---|---|---|
| **TAM (lớp 12)** | ~**626 – 939 tỷ VNĐ**/mùa ôn (chu kỳ cohort) | **1.126.172** thí sinh dự thi môn Toán TN **2025** — [VietnamNet](https://vietnamnet.vn/pho-diem-mon-toan-thi-tot-nghiep-thpt-2025-khac-biet-the-nao-so-voi-nam-truoc-2421864.html) / [PDF mirror báo cáo 15/7/2025](https://cdn2.baodongthap.vn/image/upload/others/202507/17806_Bao_cao_15_7_2025_Version3__1_.pdf). Kịch bản trần lý thuyết: **100%** thí sinh trả **139.000 VNĐ/tháng** trong **4** hoặc **6 tháng** (`1.126.172 × 139.000 × tháng`) — **không** phải dự báo thâm nhập. | med |
| **SAM (lớp 12 cohort 5–7đ)** | ~**197 – 295 tỷ VNĐ**/mùa ôn | Cohort 5–7đ: **≈353K** thí sinh Toán (31,4% từ phổ điểm; **[cần duyệt]**). Cùng **139.000 VNĐ/tháng** × **4–6 tháng**; chỉ HS có smartphone + ôn nhà (chưa trừ churn/free). | low-med |
| **SOM (12 tháng đầu)** | ~**2 – 8 tỷ VNĐ** doanh thu (mùa pilot) | **3.000–10.000 paid users**; doanh thu ≈ `paid × 139.000 × tenure` (ví dụ **~4,5–5,5 tháng**/user năm đầu — **[cần duyệt]**). Conversion ~3–5% từ free tier. Địa bàn ưu tiên: Hà Nội + TP.HCM + Hải Phòng. | low |

### B. Full vision — THPT 10–12 (giữ lại cho V2/V3 và pitch)

| Layer | Estimate | Key assumptions | Confidence |
|---|---|---|---|
| **TAM (tham chiếu ngành)** | *Không dùng làm trần sản phẩm trực tiếp* | **IMARC** — “Vietnam online education market” (định nghĩa **rộng**, đơn vị gốc trên site thường là **USD**) — [IMARC — online education](https://www.imarcgroup.com/vietnam-online-education-market). Dùng làm **bối cảnh ngành**; TAM tiền mặt SmartHint lấy từ **bottom-up VNĐ** ở hàng SAM/SOM. | med |
| **TAM (sản phẩm, trần lý thuyết)** | ~**3,3 – 5,0 nghìn tỷ VNĐ**/năm | ~**3M** học sinh THPT (khoá nguồn Bộ/GSO khi trình bày chính thức) × **139.000 VNĐ/tháng** × **8–12 tháng** trả phí giả định/user/năm — **trần vật lý**, không kỳ vọng thâm nhập. [Doanh nhân Hội nhập](https://doanhnhanhoinhap.vn/thuc-day-edtech-nang-cao-chat-luong-giao-duc-o-viet-nam/) (secondary, ngữ cảnh EdTech). | low |
| **SAM** | ~**330 – 1.000 tỷ VNĐ**/năm | ~300K–600K học sinh THPT có smartphone + tự học Toán + thành thị × **139.000 VNĐ/tháng** × **8–12 tháng**/user/năm (≈ **1,11 – 1,67 triệu VNĐ**/user/năm). Chưa tách churn. **[cần duyệt]** tenure theo khối lớp. | low-med |
| **SOM** | ~**6,5 – 20 tỷ VNĐ**/năm (24–36 tháng) | Sau khi PMF lớp 12 confirmed: V2 lớp 11 (7–8/2026) + V3 mở rộng **D2C** (lớp 10–11, nội dung, ASO) — **không** B2B trường/TT. Mức quy từ lộ trình paid + tenure (**[cần duyệt]**). | low |

**Top 3 unknowns requiring further research:**

1. **Willingness-to-pay từ HS vs PH (GTM v3.2):** HS có chấp nhận trả Momo/tiền vặt cho gói ôn ngắn không, hay mọi conversion đều đi qua PH? Artifact “bằng chứng” có **tăng tỉ lệ PH đồng ý** đủ lớn không — cần 10–15 phỏng vấn cặp HS–PH + thử nghiệm thanh toán.
2. **Ranh giới “giả trân” vs empathy:** Tầng thoại có thể mềm (Empathetic Error Handling) trong khi tầng logic cứng (temperature 0) — cần A/B tone và kiểm tra cringe / trust.
3. **Mỏi mệt thị giác & tải nhận thức khi tự học (vd. đêm khuya):** Dual-scaffolding + số bước gợi ý biến thiên — cân bằng gamification tối thiểu vs màn hình tối giản **trong khung peak pain** (vd. ~23h).

**Bảng chứng cứ cần khoá (startup — không để slide “bay”):**

| Claim trong bài | Hành động |
|-------------------|-----------|
| Phổ điểm Toán TN 2025 (1.126.172; ≥7 **12,23%**; &lt;5 **56,39%**; …) | Đối chiếu **thông cáo/PDF Bộ**; hiện đang trích qua [VietnamNet](https://vietnamnet.vn/pho-diem-mon-toan-thi-tot-nghiep-thpt-2025-khac-biet-the-nao-so-voi-nam-truoc-2421864.html) + [PDF mirror](https://cdn2.baodongthap.vn/image/upload/others/202507/17806_Bao_cao_15_7_2025_Version3__1_.pdf). |
| QANDA VN (MAU / download) | Đang dùng [VnExpress / Mathpresso VN](https://vnexpress.net/ung-dung-hoc-toan-han-quoc-thu-hut-1-8-trieu-hoc-sinh-viet-4196938.html) — **cần duyệt** năm số liệu; bổ sung PR mới nếu có. |
| Tutor CoPilot +4pp | Đã gắn [arXiv:2410.03017](https://arxiv.org/abs/2410.03017) + [SCALE](https://scale.stanford.edu/publications/tutor-copilot-human-ai-approach-scaling-real-time-expertise). |
| 12–15h học; áp lực thi | [VnExpress International](https://e.vnexpress.net/news/news/in-a-degree-mindset-society-vietnamese-students-carry-heavy-academic-burden-3740791.html) + [Lao Động 2024](https://news.laodong.vn/giao-duc/thoi-khoa-bieu-12-buoituan-hoc-sinh-kiet-suc-vi-hoc-them-1419652.ld) — báo chí. |
| Math anxiety VN | [DOI 10.3389/feduc.2021.742130](https://doi.org/10.3389/feduc.2021.742130) (2021). |
| Nomophobia n=950 | [Researcher.Life entry](https://discovery.researcher.life/article/smartphone-use-nomophobia-and-academic-achievement-in-vietnamese-high-school-students/afb71c1876ce304eb722bf1dae7d9e5e) — tìm **DOI gốc** trước deck chính thức. |
| SAM cohort 5–7 ≈ **31,4%** | Công thức: %≥5 − %≥7 từ phổ điểm cùng nguồn — **[cần duyệt]** với bảng phân phối chính thức. |
| TAM/SAM wedge (139.000 VNĐ/tháng × tenure) | Pilot + bảng billing | Giả định **4–6 tháng**/mùa ôn; tenure thực đổi thì scale lại toàn bộ sizing (**toàn bộ bằng VNĐ**). |
| TAM IMARC vs TAM bottom-up VNĐ | Đọc [IMARC Vietnam online education](https://www.imarcgroup.com/vietnam-online-education-market) — **tách** TAM ngành (scope rộng, USD trên site) khỏi **TAM/SAM sản phẩm (VNĐ)** trong slide. |

**File tổng hợp để duyệt:** [`output/data_citations_audit.md`](output/data_citations_audit.md).

**Giả thuyết kinh tế tối thiểu (chưa validated — dùng để hỏi nhà đầu tư / tự sanity check):**

| Tham số | Giả định làm việc | Cách phá trong 60–90 ngày |
|---------|-------------------|---------------------------|
| Giá & tenure wedge | **139.000 VNĐ/tháng**; tenure mùa ôn **4–6 tháng** (giả định) | Billing thật pilot + phỏng vấn **HS + PH** (Momo / PH quẹt); đo **tháng trả phí trung bình** sau kỳ thi |
| CAC kênh Zalo/cộng đồng | Thấp nếu organic; tăng nếu chạy ads | Theo dõi cost / paid user theo cohort pilot |
| Payback | Cần ngắn hơn thời gian còn lại đến 6/2026 | So sánh LTV ước tính với CAC + churn sau 2 tuần dùng |

**Judgment:**

- [x] Worth pursuing now
- [ ] Worth pursuing but not now
- [ ] Not worth pursuing as currently framed

> **Reasoning:** Wedge **lớp 12 ôn TN 2026** đáp ứng: (1) **Pain cấp tính** + countdown 6/2026; (2) **Product–curriculum fit** Phần II/III; (3) **GTM v3.2:** HS là **user + người chủ động chi / thuyết phục**, PH là **stakeholder** — **bằng chứng học tập** giảm ma sát thanh toán & niềm tin (song song với khả năng PH trả trực tiếp sau này); (4) **Khe sản phẩm** — Socratic + align đề + engine **tool verify + RAG trích nguồn** + không full solution; (5) **Chỉ D2C** — tránh xung đột với GV/TT/trường. Rủi ro churn sau 6/2026 — roadmap V2–V3 **cộng đồng & HS**; **kỳ TN lặp lại hằng năm** nhưng cohort phải **tích lead lớp 11 sớm** trước cliff.

---

## 7. Positioning Note (2 sentences)

**What we are:**
> SmartHint AI là gia sư AI kiểu Socratic **ưu tiên thị trường VN**, align đề Toán TN mới (Phần II + Phần III) — Dual-Scaffolding ép tự tính, **kiểm số bằng tool**, **RAG có nguồn** — cho **học sinh lớp 12 dải 5–7đ** vượt "wall of 7"; kèm **bằng chứng học tập** để HS thuyết phục PH khi cần.

**What we are not / not yet:**
> Không phải máy giải toán nhanh; **chưa** phục vụ lớp 10–11 ở MVP; không cam kết điểm số — chỉ cam kết **nếu làm theo gợi ý và chịu tư duy thì được thiết kế để tự làm được**, và có **“ôn lại dạng bài”** (micro ôn, không tương đương nút xem full lời giải).

---

## 8. Self-assessment before Day 17

Trong 6 mắt xích (Idea → Customer → Need → Strategy → Moat → Market Size), mắt xích nào yếu nhất?

> **Market Size (wedge lớp 12)** — SAM **~197 – 295 tỷ VNĐ**/mùa (theo **139.000 VNĐ/tháng** × tenure 4–6 tháng) vẫn nhạy **số tháng trả phí thực** và **HS trả vs PH trả**; cần khoá bằng pilot billing + phỏng vấn cặp HS–PH.
>
> **Moat** cũng cần kiểm chứng thêm: data "điểm kẹt theo dạng câu Phần II/III" có thực sự tạo competitive advantage trước khi Google/QANDA pivot vào cùng wedge — đặc biệt khi đề tham khảo Bộ GD&ĐT là **public** và OCR + nội dung GDPT 2018 ai cũng có thể scrape.
>
> **Cohort longevity** (rủi ro mới phát sinh từ wedge narrowing): cohort lớp 12 tự churn sau tháng 6/2026 — roadmap V2 (lớp 11) và V3 (mở rộng D2C) cần **lead & nội dung Threads** sớm; **không** dựa B2B trường/TT.

Open questions đã/đang giải quyết ở Day 17:
1. **Scope MVP (Đã giải quyết):** 3 chuyên đề lớp 12 ôn TN (Hàm số, Mũ-Log, Nguyên hàm) — bank chia theo định dạng câu Phần I/II/III.
2. **Kiến trúc UX Flow (Đã giải quyết):** Dual-Scaffolding (Trắc nghiệm A/B/C định hướng + Fill-in-the-blank ép tự tính), align Phần II + III của đề mới. Empathetic Error Handling cho cohort 5–7đ.
3. **Pricing model** — **gói theo tháng**, mức làm việc **139.000 VNĐ/tháng**; freemium giới hạn phiên; **HS trả (Momo)** vs **PH trả**; validate **tenure trung bình** (giả định sizing **4–6 tháng**/mùa ôn).

**Siết cho startup (ưu tiên thực thi, không chỉ bài tập):**

- **North star (đề xuất):** tỉ lệ phiên Phần II/III mà HS **tự nhập đúng kết quả sau ≤N gợi ý** (không mở full solution); **N** dao động **1–5** theo **độ khó / taxonomy dạng bài** (trần cố định), không random từng phiên; kết quả so khớp qua **tool tính**, không để LLM “tính nhẩm”.
- **Leading indicators:** thời gian đến hint đầu tiên; **share / mở** artifact bằng chứng gửi PH; repeat session 48h; **next-item correctness không AI** (Day 17).
- **Cạnh tranh QANDA (đo thực tế):** không có API “đang mở QANDA”; dùng **hỗn hợp tín hiệu** — khảo sát ngắn sau phiên, hành vi bỏ giữa chừng bất thường, WOZ hỏi nhẹ — và **next-item correctness** làm thước giá trị dù HS không thú nhận app khác.
- **Kill / pivot partial:** nếu **tổng hợp tín hiệu** cho thấy HS chủ yếu vẫn shortcut bên ngoài **và** north star / transfer không lên → giảm friction (nhịp gợi ý, scan đề) trước khi scale **Threads / Zalo–FB**.
- **Kiến trúc AI (đã khóa hướng):** reasoning / routing gợi ý **temperature = 0**; lớp thoại user có thể **mềm hơn** (empathy) tách bước; RAG **bắt buộc** metadata nguồn; mọi phép so sánh số qua **tool**.
- **Pháp lý / uy tín:** không hứa điểm; cam kết mềm “làm theo gợi ý → thiết kế để tự làm được” + **ôn lại dạng bài** (micro, không full solution).

---

## 9. Bridge to Day 17

**Bản thực thi (MVP, PRD skeleton, giả thuyết, PMF):** [`../day17/submission.md`](../day17/submission.md).

Day 16 đã trả lời (cập nhật v3.1 — wedge lớp 12):

- **Real opportunity:** Tool AI giải hộ (QANDA, Photomath, ChatGPT) **kém hữu dụng nhất** ở Phần III trả lời ngắn của đề Toán TN mới — Socratic Dual-Scaffolding align đúng cấu trúc đề là antidote.
- **Early customer:** **Học sinh lớp 12** ôn TN 2026, dải điểm thi thử 5–7, **tự học** luyện đề — **ví dụ đau nhất thường là buổi tối/đêm** — không phải toàn bộ THPT.
- **Real need:** Tự giải đúng dạng Phần II/III + không bỏ cuộc khi countdown + **bằng chứng học tập** để HS giữ trust PH / xin ngân sách.
- **Product move:** Socratic Dual-Scaffolding align Phần II + III; Empathetic Error Handling phù hợp tâm lý cohort 5–7đ.
- **Moat:** Dữ liệu "điểm kẹt theo dạng câu Phần II/III" trên 18 đề tham khảo Bộ + kịch bản đồng cảm + domain knowledge Toán lớp 12 GDPT 2018 (bao gồm các điểm mới như xác suất có điều kiện, Bayes, ứng dụng tích phân).
- **Market:** **Wedge lớp 12 SAM ~197 – 295 tỷ VNĐ/mùa** (139.000 VNĐ/tháng × tenure 4–6 tháng), full vision THPT SAM **~330 – 1.000 tỷ VNĐ/năm** (cùng giá × 8–12 tháng/user — **[cần duyệt]**); timing đúng (đề mới + Thông tư 29 + countdown TN); **khe sản phẩm** = Socratic + align Phần II/III + guardrail không spoil — không khẳng định “không ai làm được” mà **phải thắng bằng tốc độ ship và dữ liệu điểm kẹt VN**.

Day 17 đã trả lời:

- **What exactly do we build first?** MVP Dual-Scaffolding cho **3 chuyên đề ôn TN lớp 12** (Hàm số, Mũ-Log, Nguyên hàm) — bank bài chia theo định dạng Phần II/III.
- **Viết PRD:** Đã hoàn tất PRD Skeleton; non-goals cứng (không nút full solution, không real-time monitor); **Parent Pulse / báo cáo tuần** trong PRD có thể **song song** với artifact **kéo (HS chủ động gửi PH)** — Day 16 v3.2 nhấn **HS-centric GTM**; đồng bộ wording khi cập nhật PRD.
- Assumption ưu tiên validate: **học sinh lớp 12** chịu friction Dual-Scaffolding thay vì shortcut QANDA, **vì áp lực kỳ thi TN tháng 6/2026**.
- Experiment 2 tuần đầu: Wizard of Oz qua Zalo với cohort lớp 12, ưu tiên dạng câu Phần III.

**Roadmap mở rộng (V2/V3 — D2C):**
- **Q2/2026 — V2 chuẩn bị:** Pre-launch cohort lớp 11 (sẽ thành 12 năm 2026–2027) qua **Threads + referral** (kèm Zalo/FB nhóm ôn), không partnership trường/TT/GV.
- **Q3/2026 — V2 launch:** Mở chính thức lớp 11 + 12, cùng stack kênh D2C.
- **2027 — V3 (nếu PMF đủ):** Mở rộng lớp 10 hoặc sâu hơn nội dung — **chỉ D2C**; lớp 10 không có pain TN toàn quốc như lớp 12 nên ưu tiên thấp hơn; **không** B2B trường/trung tâm vì xung đột lợi ích với định vị sản phẩm.
