# Charming Divinations — Site

Public site for **Charming Divinations**, the practice of **Linda Webster**.

| Item | Value |
|------|-------|
| **Live** | https://charmingdivinations.vercel.app |
| **Alt** | https://charming-divinations.vercel.app |
| **GitHub** | https://github.com/dbuatti/charming-divinations |
| **Vercel** | https://vercel.com/daniele-buattis-projects/charming-divinations |

## Ground rules for copy

**Only claim what is verified.** See `../FACTS.md` for the source of truth.

- ✅ Kinesiology training at the College of Complimentary Medicine — client intake
  assessment, practical balances, clinical case study
- ✅ Founder and lead teacher, Council of the Root
- ✅ Creator, The Basically Brilliant Beginner
- ✅ Reads for people
- ❌ MTTC / CPD certification — **that is Daniele's, not Linda's**
- ❌ Any specific number of years practising
- ❌ Any named qualification not confirmed by Linda

Unknowns are shown as visible gaps, never invented. Prices and dates that are
undecided stay as `—`.

## Structure
```
landing-page/
├── index.html            # Home
├── pages/
│   ├── about.html        # Approach + background
│   ├── offer.html        # What I Offer — courses, readings, sessions
│   ├── council.html      # Council of the Root
│   ├── journal.html      # Writing
│   └── contact.html      # Contact + booking
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

Vercel's free tier caps CLI deploys at 100/day — **use `git push`**, not
`vercel --prod`.

## Still to add

- [ ] Portrait of Linda
- [ ] Year Linda began practising
- [ ] Any further qualifications she holds
- [ ] Fees for readings, kinesiology sessions, courses
- [ ] Dates for the Air Council session
- [ ] Real email address (currently `hello@charmingdivinations.com` — placeholder)
- [ ] Connect the contact form to a real inbox / Cal.com
- [ ] Connect the newsletter form to Buttondown or Mailchimp
- [ ] Consider a real domain: `charmingdivinations.com.au`
