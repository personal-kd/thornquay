# Thornquay Financial Corp. website: handover

Static HTML site for **thornquay.ca**. No build step, no framework. Upload the folder as is to any static host (Netlify, Vercel, Cloudflare Pages, Webflow embed, cPanel) or drop the pages into your CMS.

## Structure

```
index.html                               Home
approach.html                            Approach (5-step process)
solutions.html                           Solutions
who-we-serve.html                        Who we serve
advisors.html                            For advisors
about.html                               About (no bios, by request)
insights.html                            Insights index
insights-insurance-based-financing.html  Article
insights-exit-first.html                 Article
insights-legacy-arrangements.html        Article
faq.html                                 Questions
contact.html                             Contact
assets/site.css                          All styles (brand tokens at the top)
assets/site.js                           Mobile menu + copy-email button
assets/img/                              Logos (SVG), favicon, apple-touch-icon, 512 icon, og-image.png
```

Every page shares the same header and footer markup. If you move to a CMS or templating, lift those into partials.

## Brand

- Colours are CSS variables at the top of `assets/site.css`: Quay Navy `#0F1B2D`, Harbour `#25374F`, Brass `#A8834E`, Brass Text `#7A5A2B`, Limestone `#EAE7DF`, Surface `#F5F4F0`, Slate `#566170`.
- Fonts load from Google Fonts: Cormorant Garamond (500, 600, 500 italic) for headings, Libre Franklin (400, 500, 600) for text. Self-host them if you prefer; both are SIL Open Font License.
- Logos in `assets/img` are outlined SVGs, no font needed. Use the light file on light backgrounds, the dark file on navy.
- The hero arches on the home page are CSS, with a short rise animation that turns off for users with reduced motion enabled.
- Full brand guidelines: ask KD for the Thornquay Brand Guidelines link.

## To do before launch

1. **Contact form.** The contact page currently shows the email address with a copy button. Add a form (fields: name, email, phone, "I am a client / an advisor", what you want to fund, timeline, message, consent checkbox) that sends to **info@thornquay.ca**. Netlify Forms, Formspree or the host's native form handler all work. Success message: "Thanks. We will be in touch within one business day." Make sure info@thornquay.ca exists in Google Workspace.
2. **Placeholders.** Phone number on the contact page shows `[Phone number]`.
3. **Legal review.** The disclaimer (footer), insurance-based financing copy, FAQ and the three insights articles must be reviewed by counsel before going live. Do not add claims about returns, approval, tax outcomes or regulation.
4. **Analytics and cookies.** None included. If you add analytics, add a cookie notice that defaults to declining non-essential cookies.
5. **Domain setup.** Point thornquay.ca and www to the host, force HTTPS, redirect www to the apex (or the reverse, pick one). Canonical tags already use `https://thornquay.ca/`.
6. **SEO extras.** Add `sitemap.xml` and `robots.txt`. Each page already has a title, meta description, canonical and Open Graph tags; the share image is `assets/img/og-image.png` (1200 x 630).
7. **Photography.** None yet. If added, follow the brand guidelines: cool, quiet harbour and stone imagery, one arch-framed image per page, no text set directly on photos.

## Rules to keep

- No em dashes in copy.
- No names, client details or bios on the site.
- Keep the footer disclaimer on every page, including "Thornquay is not a bank."
- Thornquay Financial Corp. · Ontario Corporation No. 1001794659 · 133 Richmond Street West, Suite 207, Toronto, Ontario M5H 2L3.
