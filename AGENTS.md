<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## PR Review Focus Areas

When reviewing pull requests, prioritize the following:

- **Correctness bugs** — logic errors, off-by-one errors, incorrect assumptions
- **Security issues** — XSS, injection risks, exposed secrets, insecure dependencies
- **JS performance & optimization** — unnecessary re-renders, expensive operations in hot paths, missing memoization, bundle size impact, dead code, inefficient data structures
- **Accessibility** — missing ARIA attributes, poor focus management, non-semantic interactive elements
- **Semantic markup** — correct use of HTML elements (headings hierarchy, landmarks, lists, etc.)
- **TypeScript pitfalls** — unsafe `any`, missing null checks, incorrect type assertions, overly broad types
