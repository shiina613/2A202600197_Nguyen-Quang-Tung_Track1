## AI Model Comparison for SmartHint MVP

As-of date: 2026-05-11  
Pricing unit: USD per 1M tokens

| Criterion | Option A: Gemini 2.5 Flash-Lite | Option B: GPT-4o-mini | Option C: Claude Haiku 3.5 |
|---|---:|---:|---:|
| **Input Cost** | $0.10 (Standard) / $0.05 (Batch/Flex) | $0.15 (Standard) | $0.80 |
| **Output Cost** | $0.40 (Standard) / $0.20 (Batch/Flex) | $0.60 (Standard) | $4.00 |
| **Cost Positioning** | Rất rẻ cho traffic lớn | Rất rẻ, cân bằng tốt | Cao hơn đáng kể cho cùng bài toán |
| **Fit cho MVP Socratic** | Tốt (ưu tiên chi phí) | Tốt (phương án dự phòng) | Trung bình (chi phí cao cho freemium) |

## Kết luận

- Chọn **Gemini 2.5 Flash-Lite** làm model chính cho MVP để tối ưu chi phí và khả năng scale phiên học hằng ngày.
- **Plan B:** Nếu chất lượng gợi ý chưa đạt ngưỡng, chuyển nhóm bài khó sang **GPT-4o-mini** theo route-based serving.

## Sources (Official)

- Google Gemini API Pricing: https://ai.google.dev/gemini-api/docs/pricing
- OpenAI API Pricing: https://platform.openai.com/docs/pricing
- Anthropic Claude Pricing: https://docs.anthropic.com/en/docs/about-claude/pricing
