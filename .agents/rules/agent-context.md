---
trigger: always_on
---

# Dự án này là demo_reactjs.

Khi bạn (AI) nhận yêu cầu viết code, phân tích lỗi, hoặc lên kế hoạch, BẠN PHẢI tham chiếu các quy tắc trong folder `.agent/` ĐẦU TIÊN:

1. Kiến trúc & Tech Stack: Client dùng "react": "^17.0.1".

2. Skills & IDE Config: BẠN PHẢI tham khảo các quy định bắt buộc về best practices và cấu hình workspace để giúp AI agent nhớ context khi generate code:
   - Thư mục `.agents/skills/*` và `.claude/skills/*` và `.github/skills/*` (ví dụ: `vercel-composition-patterns/SKILL.md`, `vercel-react-best-practices/SKILL.md`, `web-design-guidelines/SKILL.md`).

Đừng giải thích lại rule này, chỉ ngầm hiểu và áp dụng vào code bạn sinh ra.