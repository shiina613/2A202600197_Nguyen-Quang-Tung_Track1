# MVP Boundary Sheet: SmartHint AI

## Riskiest Assumption
Học sinh Trung bình-Khá (quen chép đáp án ăn liền từ QANDA) sẽ từ bỏ sự lười biếng để kiên nhẫn tương tác với luồng UX "Gợi mở từng bước" của SmartHint. Nếu ma sát của việc suy nghĩ quá lớn, họ sẽ thoát app và quay lại QANDA.

## In-Scope (3 tính năng cốt lõi)
1. **Core Socratic Dual-Scaffolding (Khung chat 2 tầng):** Tầng 1 dùng câu hỏi trắc nghiệm (A/B/C) để gợi ý đường lối. Tầng 2 bắt buộc học sinh tự tính toán bước đó và gõ kết quả để đi tiếp.
2. **Empathetic Error Handling:** Khi học sinh gõ sai kết quả tính toán, AI không đưa đáp án mà chỉ ra vị trí sai (ví dụ: nhầm dấu) và động viên thử lại.
3. **Parent Progress Pulse:** Báo cáo tuần mức tổng quan (thời lượng học, số phiên hoàn thành, chuyên đề đã luyện), không gửi transcript chi tiết.

## Out-of-Scope
- Dashboard giám sát thời gian thực cho phụ huynh.
- Chia sẻ transcript đầy đủ từng câu chat của học sinh.
- Mọi hình thức kiếm tiền và tăng trưởng ảo (Monetization/Ads/Viral Loops): tạm gác, MVP miễn phí hoàn toàn.
- Đọc và phân tích bài giải viết tay có sẵn của học sinh: chưa làm do giới hạn OCR.

## Non-Goals
- Nút "Xem toàn bộ lời giải" (Show full solution).
- Tính năng camera giám sát/theo dõi học tập.

## Scope Review Gate
- In-Scope chỉ gồm tính năng test trực tiếp giả định lõi.
- Out-of-Scope dài hơn In-Scope.
- Non-Goals có ranh giới đỏ rõ ràng.
