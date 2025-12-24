export const PERSONALIZED_WELCOME_EMAIL_PROMPT = `
Generate highly personalized HTML content for the {{intro}} section of a welcome email.

User profile:
{{userProfile}}

GOAL:
Write content that clearly feels written ONLY for this user by directly using their:
- Investment goals
- Risk tolerance
- Preferred sectors/industries
- Experience level
- Interested stocks/companies
- Investment timeline (short-term, long-term, retirement)

PERSONALIZATION RULES:
- Explicitly reference their goals, interests, or sectors by name
- Match tone to their experience (new → learning, experienced → advanced tools)
- Reflect their risk style (conservative → safety, aggressive → growth)
- Make them feel understood and supported

OPENING RULE:
Do NOT start with “Welcome”. Use alternatives like:
“Thanks for joining”, “Great to have you”, “You’re all set”, “Perfect timing”, etc.

FORMAT (STRICT):
- Output ONLY clean HTML (no markdown, no backticks)
- Exactly ONE paragraph:
<p class="mobile-text" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">...</p>
- Exactly TWO sentences
- 35–50 words total
- Use <strong> for key personalized details
- Do NOT include: “Here’s what you can do right now”

SECOND SENTENCE:
Reinforce personalization or explain how the platform helps their specific goals.
`;
