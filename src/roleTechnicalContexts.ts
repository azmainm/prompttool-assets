export const roleTechnicalContexts: { [key: string]: string } = {
  'Senior Software Developer': `* **Stack**: Next.js 15.x, React 19.x, TypeScript 5.x, Tailwind 3.x
* **Test Pattern**: Jest + React Testing Library
* **Formatting**: Prettier default config`,

  'QA/Test Automation Engineer': `* **Jest 30.x**, **React Testing Library 15.x**
* **Playwright 1.x** for e2e (\`npx playwright test\`)
* **Coverage**: Istanbul (text report acceptable)`,

  'DevOps/Release Engineer': `* **Runner Image**: \`ubuntu-latest\`
* **Package Manager**: \`pnpm\`
* **Deploy**: \`vercel --prod\` or \`vercel --prebuilt\` (as specified by user)`,

  'UI/UX Designer': `* **Typography Scale**: base = \`1rem\`, line-height = \`1.5\`
* **Tailwind Colour Palette**: \`primary\`, \`secondary\`, \`neutral\``,

  'Product Manager': `* **Sprint length**: 2 weeks (override if user supplies different cadence)
* **Estimation scale**: Fibonacci 1–13`,

  'Technical Writer': `* **Doc root**: \`/docs\`
* **File naming**: kebab-case, \`.md\` extension
* (Optional) Must comply with any relevant accessibility guidelines (WCAG level AA) if stated.`,

  'Security Engineer': `* **Auth**: JWT HS256 tokens unless user specifies otherwise.
* **Default TLS**: minimum 1.2`,

  'Prompt Engineer': `* **Target Models**: \`gpt-4o\`, \`gpt-4o-mini\`
* **JSON Mode** preferred for returning structured data`,

  'Analytics/Data Engineer': `* **SQL Dialect**: Standard SQL (BigQuery-compatible)
* **Time Zone**: UTC for all timestamps`,

  'Accessibility Specialist': `* **Testing**: aXe Core CLI (\`npx axe\`) or Lighthouse
* **Primary screen reader targets**: NVDA (Windows), VoiceOver (macOS)`,

  'Grant Writer': `* **Default Formatting** (override with RFP rules):
  - Arial 11 pt, single-spaced, 1-inch margins
* **Budget Table**: Markdown table with USD amounts and a totals row
* **File Naming**: \`<FunderAbbrev>_<Program>_<Section>_<YYYY>.md\``,

  'Project Manager': `* **Sprint Length**: 2 weeks (or as specified by the user).
* **Estimation Scale**: Fibonacci (1, 2, 3, 5, 8, 13).
* **Task‑Tracking Tool**: (Optional) If referencing JIRA, GitHub Projects, etc., note fields or statuses.
* **KPI Sources**: (Optional) If using analytics tools (e.g., Mixpanel), specify which metrics tie to each story.`,

  'Marketing & Communications': `* **Brand Guidelines**: (Reference link or style guide if available)
* **Platform Constraints**:
  - Email providers (e.g., Mailchimp/HubSpot)
  - Social media character limits (Twitter, LinkedIn, Facebook)
  - Landing page/CMS templates (WordPress, Webflow)
* **KPI Tracking**: (e.g., UTM parameters, analytics IDs)
* **Legal Requirements**: (e.g., GDPR notices, CAN‑SPAM disclaimers, data opt-in)`,
};
