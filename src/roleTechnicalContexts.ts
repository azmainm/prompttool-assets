import { CodingRoles, RoleTechnicalContexts } from './roleTypes';

export const roleTechnicalContexts: RoleTechnicalContexts = {
  [CodingRoles.SENIOR_SOFTWARE_DEVELOPER]: `* **Stack**: Next.js 15.x, React 19.x, TypeScript 5.x, Tailwind 3.x
* **Test Pattern**: Jest + React Testing Library
* **Formatting**: Prettier default config`,

  [CodingRoles.QA_TEST_AUTOMATION_ENGINEER]: `* **Jest 30.x**, **React Testing Library 15.x**
* **Playwright 1.x** for e2e (\`npx playwright test\`)
* **Coverage**: Istanbul (text report acceptable)`,

  [CodingRoles.DEVOPS_RELEASE_ENGINEER]: `* **Runner Image**: \`ubuntu-latest\`
* **Package Manager**: \`pnpm\`
* **Deploy**: \`vercel --prod\` or \`vercel --prebuilt\` (as specified by user)`,

  [CodingRoles.UI_UX_DESIGNER]: `* **Typography Scale**: base = \`1rem\`, line-height = \`1.5\`
* **Tailwind Colour Palette**: \`primary\`, \`secondary\`, \`neutral\``,

  [CodingRoles.PRODUCT_MANAGER]: `* **Sprint length**: 2 weeks (override if user supplies different cadence)
* **Estimation scale**: Fibonacci 1–13`,

  [CodingRoles.SECURITY_ENGINEER]: `* **Auth**: JWT HS256 tokens unless user specifies otherwise.
* **Default TLS**: minimum 1.2`,

  [CodingRoles.ANALYTICS_DATA_ENGINEER]: `* **SQL Dialect**: Standard SQL (BigQuery-compatible)
* **Time Zone**: UTC for all timestamps`,

  [CodingRoles.PROJECT_MANAGER]: `* **Sprint Length**: 2 weeks (or as specified by the user).
* **Estimation Scale**: Fibonacci (1, 2, 3, 5, 8, 13).
* **Task‑Tracking Tool**: (Optional) If referencing JIRA, GitHub Projects, etc., note fields or statuses.
* **KPI Sources**: (Optional) If using analytics tools (e.g., Mixpanel), specify which metrics tie to each story.`,
};
