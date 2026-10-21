# Charming Divinations — Site

Public site for **Charming Divinations**, the practice of **Linda Webster**.

| Item | Value |
|------|-------|
| **Live** | https://charmingdivinations.vercel.app |
| **Alt** | https://charming-divinations.vercel.app |
| **GitHub** | https://github.com/dbuatti/charming-divinations |
| **Vercel** | https://vercel.com/daniele-buattis-projects/charming-divinations |

---

## Brand identity

Implemented from the **Celestial Brand Board**. The palette, typefaces, logo and
graphic motifs are the deliverable; the *content* comes from what Linda actually
does — see `../FACTS.md` for the source of truth.

### Palette
| Name | Hex | Use |
|------|-----|-----|
| Cosmic Navy | `#0B1020` | Background — the foundation |
| Mystic Purple | `#6B2D6B` | Secondary backgrounds, spiritual accents |
| Nebula Teal | `#2E7D8F` | Supporting accents, celestial imagery |
| Antique Gold | `#D4AF6A` | Headings, borders, icons, the logo |
| Soft Blush | `#F3C6D6` | Light section, softer messaging |

Proportions as a starting point: 50% navy, 20% purple/teal, 15% gold, 10% light
space, 5% blush.

### Type
- **Playfair Display** — headings (600/700, italic for emphasis)
- **Montserrat** — body, UI, labels (300/400/500/600)

### Motifs
Triquetra (balance, connection, transformation) · stars (guidance, divine timing) ·
moon (intuition, cycles) · constellations (path, direction) · mandala (protection,
wholeness).

### Logo assets
Extracted from `c7359429855444b2a4447ce9e698839f.png` — the gold artwork isolated
on transparency, so it sits cleanly on the navy.

| File | What it is |
|------|-----------|
| `assets/logo-mark.png` | Triquetra emblem, gold on transparent |
| `assets/logo-lockup.png` | Emblem + wordmark + descriptor, gold on transparent |
| `assets/icon.png` | 512px emblem on a navy rounded tile (app/social icon) |
| `assets/favicon.png` | 64px emblem |
| `assets/hero-poster.png` | The original portrait artwork, used in the hero |

**Production note from the brand board:** the artwork should ultimately be supplied
as clean SVG and transparent PNG. These are raster extracts and are good enough
for web, but an SVG master would be sharper at large sizes.

---

## Ground rules for copy

**Only claim what is verified.** See `../FACTS.md`.

✅ Confirmed about Linda:
- Kinesiology training at the College of Complimentary Medicine — client intake
  assessment, practical balances, clinical case study
- Founder and lead teacher, Council of the Root
- Creator, The Basically Brilliant Beginner
- Reads for people
- Teaches: colour, chakras, elements, protection, scrying, tarot basics, divination
  in other forms, basic witchcraft, crystal work, meeting guides

❌ Do not claim:
- MTTC / CPD certification — **that is Daniele's**
- Any specific number of years practising
- Any named qualification not confirmed by Linda
- Current clinical practice (plausible, but unconfirmed)

⚠️ **The brand board is AI-generated.** The service names (Tarot Readings / Charm
Casting / Spiritual Support), the taglines, and the contact details printed in the
mockups (`hello@charmingdivinations.com`, `@charmingdivinations`,
`www.charmingdivinations.com`, follower counts) are **proposals and placeholders**.
Confirm each with Linda before relying on it.

Unknowns are shown as visible gaps on the page, never invented. Prices and dates
that are undecided stay as `—`.

---

## Structure
```
landing-page/
├── index.html            # Home
├── pages/
│   ├── offer.html        # What I Offer — readings, casting, council, course, body work
│   ├── council.html      # Council of the Root
│   ├── about.html        # Approach + background
│   ├── journal.html      # Writing
│   └── contact.html      # Contact + booking
├── assets/               # Logo extracts
├── css/main.css
├── js/main.js
├── 404.html
├── sitemap.xml
└── vercel.json
```

## Deploying

```bash
git add -A
git commit -m "update"
git push origin main     # auto-deploys, ~60s
```

Vercel's free tier caps deployments at 100/day **per account**. If you hit
*"Resource is limited — try again in 24 hours"*, wait for the UTC day to roll over
(00:00 UTC = 10:00am AEDT) and push again. Use `git push`, not `vercel --prod`.

---

## Still to add

- [ ] Portrait of Linda
- [ ] Year Linda began practising
- [ ] Any further qualifications she holds
- [ ] Fees for readings, castings, courses, sessions
- [ ] Dates for the Air Council session
- [ ] Confirm the email, Instagram handle and domain
- [ ] Confirm the tagline — currently *"Trust your intuition. Discover your path."*
      Alternatives on the board: *"Find meaning in the mysterious."*,
      *"A little magic. A deeper connection."*, *"Guidance, clarity and connection."*,
      *"Where intuition meets possibility."*
- [ ] Connect the contact form to a real inbox (Cal.com or Formspree)
- [ ] Connect the newsletter form to Buttondown or Mailchimp
- [ ] Consider registering the domain `charmingdivinations.com.au`
- [ ] Source an SVG master of the logo
