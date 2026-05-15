## Flaw Mitigation Plan (For Founder)

> **Cập nhật:** Bản dưới là **gợi ý điền** sau khi bạn nhờ hỗ trợ — hãy chỉnh lại bằng tên trường/đối tác/thời điểm thật trước khi nộp.

| Lỗ hổng Agent chỉ ra | Chiến lược phòng thủ (Mitigation) | Rủi ro còn sót |
|---|---|---|
| QANDA/Mathpresso: quy mô user, doanh thu, MAU, LLM (Q-Tutor), đã có mặt tại VN — lấy gì để không bị nghiền khi họ copy luồng “ôn TN + gợi ý từng bước”? | **Không tranh “chụp bài → đáp án”.** Neo định vị *product–curriculum*: bank bài + luồng **khớp Phần II (Đ/S 4 ý) + Phần III (trả lời ngắn)** theo đề tham khảo Bộ; Dual-Scaffolding + **không nút full solution** là cam kết thương hiệu khác QANDA. Song song mở **B2B pilot** (trường/trung tâm nhỏ) để có kênh phân phối không phụ thuộc app store ranking. | Họ vẫn có thể ship “chế độ TN” + marketing; moat vẫn mỏng nếu không tích lũy log điểm kẹt theo *định dạng đề VN*. |
| Cửa sổ cohort lớp 12 đóng sau kỳ TN 2026 — chứng minh transfer + retention trước khi user biến mất? | Làm **rõ pipeline trước tháng 6:** cohort lớp 11 (theo roadmap submission), **2–3 MOU pilot** B2B; đo **next-item correctness** (bài sau cùng dạng *không* AI) và lưu case study ngắn. Chuẩn bị **reuse nội dung** cho kỳ thi sau (versioning bank bài). | B2B ký chậm → vẫn “hụt hơi” sau tháng 6 nếu không có user kế tiếp. |
| Riskiest assumption: HS 5–7đ chịu ma sát Dual-Scaffolding thay vì QANDA/ChatGPT — bằng chứng WoZ/beta? | **Wizard of Oz Zalo** với script TN cố định; log từng checkpoint; tiêu chí pass/fail theo `submission.md` (completion >60%, drop mid-session <30%). Cohort **đại diện** theo trường/band điểm (ghi rõ trong báo cáo). | Mẫu nhỏ / thiên lệch → kết luận PMF non-scientific; vẫn cần closed beta app. |
| Không Ads, không viral, không share — cơ học đủ mẫu + WOM? | **Kênh “thấp ma sát” nhưng có người:** GV cộng tác + CTHSSS, group phụ huynh/lớp 12 *theo trường đối tác*, giới thiệu từ trung tâm pilot. WOM: **giới thiệu miệng trong cùng lớp/trường** (không cần nút Share trong app). Điều chỉnh PMF doc: organic >30% là *mục tiêu sau* khi đã có vài trường anchor, không xung đột “không ép share” nếu định nghĩa là referral tự nhiên ngoài sản phẩm. | Tốc độ tuyển mẫu chậm; phụ thuộc quan hệ cá nhân. |
| Gemini Flash-Lite sai ở bài lạ — fallback + video có đủ? | Giữ **guardrail** <25% phiên fallback; thứ tự: hint cứng GV → video 1 bước → copy quản trị kỳ vọng “AI có thể sai”. Audit định kỳ log bước sai 2 lần liên tiếp. | Niềm tin phụ huynh nếu lỗi lặp trên bài “dễ”; cần người review nội dung. |
| MVP “đề bài trống” + nhập text — ma sát so với OCR đối thủ? | **Giảm ma sát ngày 1:** ưu tiên **chọn bài từ bank** (đúng 3 chuyên đề + đúng dạng Phần II/III) thay vì bắt gõ cả đề dài; form nhập số/biểu thức rút gọn cho Phần III. Free-text chỉ mở rộng khi đã có retention. | Vẫn kém trải nghiệm “chụp ảnh là xong” cho bài lạ ngoài bank. |

---

## Phụ lục: Gợi ý Pre-mortem (3 lý do *nội bộ* — bạn viết lại bằng giọng của mình)

Nếu 12 tháng nữa phá sản, **không** đổ lỗi “hết tiền” một cách rỗng — thử 3 hướng đào sâu:

1. **Đã tin vào pivot UX mà không đo đủ sớm:** WoZ/beta không đạt completion/next-item → vẫn là ý tưởng đẹp, không phải sản phẩm.
2. **Phân phối B2B và cohort 11 không chạy song song:** sau tháng 6 không còn user, không có pipeline trường.
3. **Chất lượng AI + nội dung không khớp kỳ vọng TN:** fallback quá nhiều hoặc sai bước → HS quay lại QANDA, phụ huynh mất niềm tin vào Parent Pulse.

---

## Phụ lục: Gợi ý đối đáp đoạn “anti-fan” (khẩu hiệu — bạn chọn 3–4 ý đưa vào slide/PRD)

| Anti-fan nói | Góc trả lời (logic, không xúc cảm) |
|---|---|
| “Bắt làm thêm bài lúc 11h” | Không phải “thêm bài”; là **cùng một bài** đang kẹt, tách bước để khớp **phòng thi** (Phần II/III), tránh ảo giác “hiểu” sau khi chép. |
| “Không full lời giải = cố làm chậm” | **Cốình** trade-off: đổi tốc độ chép lấy khả năng làm được trong phòng thi; đối tượng wedge là người **đã** nhận ra shortcut không cứu TN. |
| “Parent Pulse = báo cáo cho phụ huynh” | MVP: **tổng quan tuần**, không transcript; học sinh **xem trước** + minh bạch onboarding — giảm “giám sát lén”. |
| “Model rẻ hallucinate” | Fallback rule + video một bước + ngưỡng kích hoạt; metric guardrail; không claim “luôn đúng”. |
| “Sau tháng 6 cohort tan” | Đã nhận trong PRD; giảm rủi ro bằng **lớp 11 + B2B** trước deadline, không bằng lời hứa sau TN. |

---

*File phục vụ bài Day 17; bổ sung hỗ trợ founder sau Devil's Advocate.*
