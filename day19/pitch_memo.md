# PITCH MEMO — SmartHint AI

**Audience:** Seed VC (ThinkZone Ventures / Antler Vietnam)

---

## 1. THE PROBLEM

Mỗi năm, hơn **1,1 triệu** học sinh lớp 12 Việt Nam thi tốt nghiệp THPT môn Toán — nhưng chỉ **12,23%** đạt **≥7 điểm** (phổ điểm TN 2025). Nhóm **353.000 em** dải 5–7đ — đông nhất và "gần đích" nhất — bế tắc hàng đêm ở Phần II (Đúng/Sai) và Phần III (trả lời ngắn) của đề mới. Công cụ hiện có (QANDA, ChatGPT) chỉ **giải hộ** — kém hữu dụng nhất đúng ở phần phân hoá điểm cao nhất, nơi học sinh phải **tự tính ra số**.

## 2. THE INSIGHT

Đề Toán TN mới (2025+) vô tình tạo ra một **khe sản phẩm**: Phần III "trả lời ngắn" yêu cầu học sinh gõ số — "chụp ra đáp án" của solver **không chuyển được vào phòng thi**. Ai nắm được vòng lặp **"gợi ý → tự tính → đúng"** trên đúng cấu trúc đề này sẽ sở hữu cohort ôn TN mỗi năm.

## 3. THE SOLUTION

**SmartHint AI** là gia sư AI kiểu Socratic, dùng phương pháp **Dual-Scaffolding** (Trắc nghiệm định hướng + Ép tự tính toán) — align trực tiếp với cấu trúc Phần II + III đề Bộ GD&ĐT. Differentiator cốt lõi so với QANDA/ChatGPT: **không có nút "xem full lời giải"** — mọi kết quả số học sinh gõ đều được **kiểm chứng bằng tool tính toán thực** (không để LLM tính nhẩm), RAG bắt buộc trích nguồn từ bank 18 đề tham khảo Bộ. AI chạy trên **Gemini 2.5 Flash-Lite** (chi phí API ~37.200đ/user/tháng ở mức dùng 70 phút/ngày), cho phép định giá **139.000 VNĐ/tháng** với **gross margin ~73%**.

## 4. WHY NOW

**(1)** Đề Toán TN mới (Phần II Đ/S 4 ý + Phần III trả lời ngắn) áp dụng từ 2025 — solver cũ mất lợi thế đúng chỗ phân hoá. **(2)** Thông tư 29/2024 siết dạy thêm tại trường (hiệu lực 14/2/2025) → phụ huynh tìm kênh ngoài; chi phí trung tâm ~2tr/tháng. **(3)** Countdown tháng **6/2026** — pain cấp tính, willingness chịu friction cao nhất. **(4)** Chi phí API Foundation Model giảm 80% so với 2 năm trước (Gemini Flash-Lite: $0.10/1M token input), cho phép freemium AI Tutor lần đầu khả thi tại VN.

## 5. TRACTION / PROOF

- **Wedge cohort:** 353.000 học sinh lớp 12 dải 5–7đ (31,4% từ 1.126.172 thí sinh Toán TN 2025).
- **PMF signals (Day 17):** Target Session Completion Rate >60%, next-item correctness (bài cùng dạng, không AI) là North Star transfer learning.
- **Unit Economics (Day 18):** ARPU 139.000đ/tháng × tenure 4–6 tháng (ARPU mùa ôn ~556K–834K). Chi phí API+hidden costs ~37.200đ/user/tháng (kiểu 2, bình thường). **Gross Margin ~73%**. LTV/CAC mục tiêu >3x. CAC Payback mục tiêu <6 tháng (trước kỳ thi).
- **Pilot plan:** 2 tuần Wizard of Oz (Zalo) + 2 tuần closed beta; target **200 học sinh** lớp 12 Hà Nội + TP.HCM.

## 6. THE ASK

Gọi **700 triệu VNĐ** (~$27K) pre-seed để:
- **Tháng 1–2:** Ship MVP Dual-Scaffolding trên 3 chuyên đề (Hàm số, Mũ-Log, Nguyên hàm) + bank Phần II/III từ 18 đề Bộ; chạy WOZ + closed beta 200 HS.
- **Tháng 3–4:** Validate Session Completion >60% + next-item correctness; bật freemium trên Threads + Zalo/FB nhóm ôn TN.
- **Tháng 5–6:** Scale lên **3.000 paid users** trước kỳ thi 27/6/2026; pre-launch cohort lớp 11 (V2) qua referral.
- **12-month milestone:** 10.000 paid users, MRR ~1,39 tỷ VNĐ, runway ≥18 tháng.
