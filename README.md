# Mental Craft — Alpha One-Pager

Strona marki **Mental Craft — Przemysław Duda**.

Kierunek wizualny: **Controlled Fire Editorial** — ciemna, editorialowa estetyka personal brand z oszczędnym pomarańczowym akcentem.

## Running locally

```bash
npm install
npm run dev
```

Development server: [http://localhost:4321](http://localhost:4321)

```bash
npm run build    # produkcyjny build do dist/
npm run preview  # podgląd buildu
```

GitHub Pages: `https://wojmam.github.io/mcraft/` (`astro.config.mjs` → `base: '/mcraft'`).

## Project structure

```
src/
  components/     # Sekcje strony (Hero, Method, Story, Offer…)
  data/           # Treści łatwe do edycji
  layouts/        # Layout.astro — head, SEO, OG
  pages/          # index.astro
  scripts/        # main.ts — menu, reveal, method sticky, form
  styles/         # global.css — Tailwind + tokeny marki
  utils/          # withBase() — ścieżki pod GitHub Pages
public/
  assets/logo/    # Oficjalne logo PNG
  assets/photos/  # Czyste zdjęcia klienta (obecnie puste — slots gotowe)
assets/logo/      # Materiały źródłowe logo (nie modyfikować)
```

## Content editing

| Plik | Zawartość |
|------|-----------|
| `src/data/site.ts` | Meta, SEO, tagline |
| `src/data/content.ts` | Hero, StuckMoment, Idea |
| `src/data/method.ts` | POCZUJ / ZROZUM / ZMIEŃ |
| `src/data/story.ts` | Historia Przemysława |
| `src/data/offer.ts` | Oferta 1:1, workbook, B2B, formularz |
| `src/data/photos.ts` | Ścieżki slotów zdjęć |
| `src/data/navigation.ts` | Nawigacja i CTA |

## Photos (Iteration 2)

W repozytorium **nie ma czystych fotografii** Przemysława (folder `exemplary/` zawierał wyłącznie kompozycje social-media — usunięty z repo, nie używany jako zdjęcia).

Layouty Hero / Story / Final CTA są **gotowe na zdjęcia**. Wystarczy wrzucić pliki:

| Plik w `public/assets/photos/` | Miejsce |
|--------------------------------|---------|
| `portrait-hero.jpg` | Hero (prawa strona) |
| `story-outdoor.jpg` | Story — szeroki kadr |
| `story-activity.jpg` | Story — kadr pionowy |
| `portrait-cta.jpg` | Final CTA (tło desktop) |

Bez plików slot pokazuje editorial placeholder (symbol + glow) — **bez TODO w UI**.

TODO: client should provide clean portrait / outdoor photo for these placements.

## Logo

Wyłącznie oficjalne PNG z `assets/logo/`:

| Plik w `public/assets/logo/` | Zastosowanie |
|------------------------------|--------------|
| `header.png` | Header desktop |
| `symbol.png` | Mobile header, favicon, placeholdery |
| `footer.png` | Footer |

## Open questions / TODO

- [ ] **Czyste fotografie Przemysława** — portrait hero, outdoor/activity story, partial CTA
- [ ] **Finalna forma programu 1:1** — obecnie w `offer.ts`: ok. 10 spotkań · ok. 100 min (30/60/10)
- [ ] **Dane kontaktowe** — e-mail, telefon, social
- [ ] **Integracja formularza** — UI gotowe, submit nieaktywny (`TODO: integrate contact form`)
- [ ] **Okładka workbooka** — CONCEPT PLACEHOLDER
- [ ] **Oferta B2B** — kierunek bez pakietów
- [ ] **Kanoniczna forma tagline** — kropki vs przecinki
- [ ] **Analytics** — przy deploy
- [ ] **Przyszła sprzedaż produktów cyfrowych**
