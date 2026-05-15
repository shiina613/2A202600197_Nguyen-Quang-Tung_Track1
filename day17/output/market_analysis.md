## Problem Validation

**JTBD Statement:**
When đang bế tắc với bài tập Toán lúc 11h đêm, học sinh (Target User) wants một hướng dẫn giải quyết từng bước (chứ không phải bị chửi mắng hay giám sát), so they can hoàn thành bài tập, đi ngủ sớm và tránh bị điểm kém ngày mai.

**Evidence:**
| # | Nguồn | Loại evidence | Tóm tắt |
|---|---|---|---|
| 1 | Báo cáo QANDA | Direct | QANDA nhận hàng triệu truy vấn mỗi ngày, đặc biệt tăng vọt vào khung giờ tối/đêm (homework hours). Điều này chứng minh nhu cầu tìm kiếm "đáp án/hướng dẫn" là khổng lồ và có thật. |
| 2 | Diễn đàn học sinh | Proxy | Hàng loạt group Facebook "Hỏi đáp bài tập", "Giải toán nhanh" có hàng chục nghìn bài đăng mỗi tối. Học sinh sẵn sàng chờ 30p-1h để có người giải hộ. |

**Workaround hiện tại:** 
- Dùng QANDA/Photomath (chụp phát ra đáp án luôn, không cần nghĩ).
- Nhắn tin hỏi bạn bè học giỏi.
- Quăng bài lên group Facebook nhờ vả.

**Pain Intensity:** 
- **Đối với Phụ huynh:** 🔴 High — Đau đớn vì mất tiền thuê gia sư, mua app nhưng con vẫn đối phó, học vẹt, điểm trên lớp không tăng.
- **Đối với Học sinh:** 🟡 Medium — Vẫn xoay sở lách luật được bằng QANDA, nhưng nhiều lúc QANDA giải sai hoặc không ra đáp án cho dạng bài mới.

**Kết luận:** Vấn đề có thật, NHƯNG có sự bất đồng lớn giữa Pain của người dùng (muốn làm xong bài) và Pain của người mua (muốn con hiểu bản chất).

---

## Customer Segmentation

| Segment | Specific | Painful | Visible | Reachable | Verdict |
|---|---|---|---|---|---|
| Phụ huynh học sinh THPT (Tier 1,2) | ✅ | ✅ | ✅ | ✅ | ⭐ Primary |
| Giáo viên dạy thêm/Trung tâm | ✅ | 🟡 | ✅ | 🟡 | Secondary |
| Bản thân học sinh (tự trả tiền) | ✅ | 🟡 | ✅ | ❌ | Drop (Không có thẻ thanh toán) |

**Primary Segment Card:**
- Segment name: Phụ huynh đô thị (35-50 tuổi) có con học THPT lực học Trung Bình-Khá.
- Operational context: Bận rộn đi làm cả ngày, tối về không đủ kiến thức Toán cấp 3 để kèm con.
- Recurring workflow: Cuối tháng xem bảng điểm, tá hỏa vì điểm kém dù đã chi tiền mua khóa học/gia sư.
- Pain moment: Nghi ngờ con dùng ChatGPT chép bài nhưng không có bằng chứng, bất lực trong việc kiểm soát chất lượng tự học.
- Why now: Trào lưu AI bùng nổ, phụ huynh sợ hãi con cái sẽ lười tư duy đi.
- Access path: Group Facebook Hội phụ huynh, Zalo Ads nhắm target độ tuổi và sở thích giáo dục.

---

## Competitive Landscape

### Bản đồ đối thủ
| Đối thủ | Loại | Target | Pricing | Điểm mạnh | Điểm yếu |
|---|---|---|---|---|---|
| **Vuihoc/Hocmai** | Indirect | Cả Phụ huynh & HS | $10-$50/tháng | Brand cực mạnh, hệ thống bài giảng Video đồ sộ. | Yếu mảng "Giải cứu bài tập" realtime bằng AI lúc nửa đêm. |
| **QANDA** | Direct | Học sinh | Freemium | Quét ảnh OCR ra đáp án siêu nhanh, lượng data khổng lồ. | Giúp học sinh "chép bài" nhanh hơn chứ không bắt tư duy. Phụ huynh ghét. |
| **ChatGPT** | Incumbent| General | Free/$20 | Giải được mọi thứ nếu biết cách prompt. | Sinh ảo giác, sai kiến thức toán. Dễ bị học sinh lừa để lấy đáp án. |

### Khoảng trống thị trường (Gap)
Thị trường đang chia làm 2 thái cực: (1) App chiều lòng Học sinh (như QANDA) bằng cách đưa đáp án luôn -> Phụ huynh ghét. (2) App chiều lòng Phụ huynh (Trung tâm gia sư/Vuihoc) bắt học sinh cày bừa nặng nhọc -> Học sinh ghét và tìm cách trốn tránh.
**Khoảng trống:** Một nền tảng đứng giữa làm "Sứ giả hòa bình" (Peacemaker): Ép học sinh tư duy (làm hài lòng phụ huynh) nhưng thông qua Gamification và phần thưởng (làm hài lòng học sinh).

### Differentiator tiềm năng
Gamification Socratic: Hệ thống AI gợi ý từng bước (Socratic) được thiết kế như một trò chơi, học sinh giải thành công sẽ nhận được Coin/Streak để đổi phần thưởng thực tế. Báo cáo gửi phụ huynh không mang tính "giám sát dọa nạt" mà là "báo cáo thành tích" để phụ huynh thưởng con.

---

## Market Sizing — TAM / SAM / SOM

### Approach: Bottom-up

**TAM (Total Addressable Market)**
- Tổng số học sinh THPT tại Việt Nam: ~2.8 triệu học sinh (Nguồn: Bộ GD&ĐT 2023).
- Giả định tệp Phụ huynh đô thị, có khả năng chi trả cho EdTech chiếm khoảng 20%: 560,000 học sinh.
- ARPU (Doanh thu trên mỗi user/năm): 99,000 VNĐ * 12 tháng = 1,200,000 VNĐ (~$48 USD).
- **TAM = 560,000 * $48 = $26.8 Triệu USD / năm.**

**SAM (Serviceable Addressable Market)**
- Chỉ tập trung vào học sinh có lực học Trung bình - Khá (Nhóm Giỏi không cần app này, nhóm Yếu Kém cần gia sư 1:1). Giả định nhóm này chiếm 50% TAM.
- **SAM = TAM × 50% = $13.4 Triệu USD.**

**SOM (Serviceable Obtainable Market)**
- Mục tiêu chiếm lĩnh 2% SAM trong 18 tháng đầu (chạy Ads + Viral Zalo).
- **SOM = $13.4M × 2% = $268,000 USD / năm ARR (Doanh thu định kỳ hàng năm).**
- Logic: Với mức ARPU 1.2M VNĐ, SOM này tương đương khoảng 5,600 user trả phí (Paying Users). Đây là con số hoàn toàn khả thi qua kênh Zalo Ads.

### Sanity Check
- SOM $268K/năm đủ nuôi team 4-5 người (Dev, PM, MKT) ở Việt Nam. Tuy nhiên biên lợi nhuận bị ảnh hưởng bởi chi phí API (Gemini/Mathpix).
- Để đạt 5,600 user trả phí, cần khoảng 56,000 - 100,000 user tải app/dùng thử (giả định tỷ lệ chuyển đổi 5-10%).

---

## Why Now?

| Lực đẩy | Evidence | Tác động |
|---|---|---|
| Tech enabler | LLMs (đặc biệt Gemini 2.5 Flash Lite) đã rẻ và suy luận toán học cực tốt. | Có thể chạy hệ thống Hint Engine và Validator tự động với chi phí vài trăm đồng/bài giải. |
| Market shift | Chi tiêu cho EdTech tại VN liên tục tăng, tầng lớp trung lưu sẵn sàng chi trả cho giáo dục. | Phụ huynh sẵn sàng rút ví cho gói 99k/tháng nếu thấy hiệu quả. |
| Cultural | Nỗi sợ "AI làm con lười đi" đang bùng nổ trong giới phụ huynh. | Định vị "AI rèn tư duy Socratic thay vì chép bài" đánh trúng tâm lý lo âu này. |

**Timing verdict:** Đúng lúc (Perfect Timing). Thị trường đang rất khát một giải pháp giúp "kiểm soát" mặt trái của AI (học sinh lạm dụng ChatGPT để chép).

---

## Market Analysis — Kết luận

### Scorecard tổng hợp

| Dimension | Score | Ghi chú |
|---|---|---|
| Problem Validation | ⭐⭐⭐⭐☆ | Vấn đề có thật, nhưng conflict lợi ích giữa Buyer và User là rất lớn. |
| Customer Clarity | ⭐⭐⭐⭐⭐ | Chân dung Phụ huynh sợ con học vẹt rất rõ ràng. |
| Competitive Position | ⭐⭐⭐☆☆ | Cạnh tranh khốc liệt với QANDA, Vuihoc, cần phải có chiến lược Gamification xuất sắc để sống sót. |
| Market Size | ⭐⭐⭐☆☆ | Niche market (Socratic Math THPT) ở Việt Nam khá nhỏ (SOM ~$268K), đủ sống nhưng khó thành Unicorn. |
| Timing | ⭐⭐⭐⭐⭐ | Perfect timing nhờ sự ra mắt của các LLMs giá rẻ và nỗi sợ AI của phụ huynh. |

### Verdict: 🟡 CONDITIONAL GO

**Lý do:**
Thị trường đủ lớn để làm một mô hình kinh doanh sinh lời (Micro-SaaS hoặc SME EdTech), Timing hoàn hảo. NHƯNG, bạn không thể đi bằng con đường "Direct-to-Parent dùng app làm camera giám sát". Bạn bắt buộc phải Pivot cấu trúc sản phẩm.

### Rủi ro lớn nhất
1. Học sinh tẩy chay ngầm (như đã phân tích ở phiên Devil's Advocate). -> Mitigate: Tráo đổi động lực bằng Gamification, biến app thành công cụ kiếm phần thưởng.
2. Chi phí API ăn mòn lợi nhuận (Unit Economics). -> Mitigate: Tối ưu prompt trên Gemini Flash Lite, giới hạn số câu hỏi khó mỗi ngày.

### Next steps
1. Bỏ qua ý tưởng làm App giám sát cứng nhắc. Thiết kế lại UI/UX theo hướng Gamification (Bọc viên thuốc đắng "suy nghĩ" vào lớp đường "trò chơi/phần thưởng").
2. Triển khai Landing Page bán gói "Thử thách 30 ngày tự giải Toán nhận quà" cho Phụ huynh, chưa cần code app vội.
3. Chạy Zalo Ads test tỷ lệ chuyển đổi (Conversion Rate) với tệp phụ huynh Hà Nội/HCM.
