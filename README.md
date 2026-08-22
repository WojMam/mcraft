# Mental Craft — Alpha One-Pager

Pierwsza wersja alfa strony marki **Mental Craft — Przemysław Duda**.

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

## Project structure

```
src/
  components/     # Sekcje strony (Hero, Method, Story, Offer…)
  data/           # Treści łatwe do edycji (site, offer, story, content…)
  layouts/        # Layout.astro — head, SEO, OG
  pages/          # index.astro — składanie sekcji
  scripts/        # main.ts — menu, scroll reveal, formularz
  styles/         # global.css — Tailwind + tokeny marki
public/
  assets/logo/    # Oficjalne logo PNG (skopiowane z assets/logo/)
assets/logo/      # Materiały źródłowe logo (nie modyfikować)
exemplary/        # Materiały referencyjne klienta (nie modyfikować)
```

## Content editing

Najczęściej edytowane pliki:

| Plik | Zawartość |
|------|-----------|
| `src/data/site.ts` | Meta, SEO, tagline |
| `src/data/content.ts` | Hero, StuckMoment, Idea |
| `src/data/method.ts` | Kroki POCZUJ / ZROZUM / ZMIEŃ |
| `src/data/story.ts` | Historia Przemysława |
| `src/data/offer.ts` | Oferta 1:1, workbook, B2B, formularz |
| `src/data/navigation.ts` | Nawigacja i CTA |

## Assets

**Logo** — wyłącznie oficjalne PNG z `assets/logo/`:

| Plik w `public/assets/logo/` | Zastosowanie |
|------------------------------|--------------|
| `header.png` | Header desktop (poziomy, biały) |
| `symbol.png` | Mobile header, favicon, dekoracja hero |
| `footer.png` | Footer (pionowy zwarty) |

Nie modyfikuj plików w `assets/logo/` — to materiały źródłowe.

**Zdjęcia** — pliki w `exemplary/` to kompozycje social media (tekst, logo, UI). Nie są używane jako zdjęcia na stronie. Potrzebne czyste fotografie do hero/story.

## Open questions / TODO

- [ ] **Finalna forma programu 1:1** — obecnie: 10 spotkań po około 100 minut (`src/data/offer.ts`)
- [ ] **Dane kontaktowe** — e-mail, telefon, social media
- [ ] **Integracja formularza** — obecnie frontend z neutralnym submit (`src/scripts/main.ts`, komentarz `TODO: integrate contact form`)
- [ ] **Okładka workbooka** — mockup oznaczony jako CONCEPT PLACEHOLDER (`EbookTeaser.astro`)
- [ ] **Oferta B2B** — kierunek bez szczegółów pakietów
- [ ] **Czyste fotografie Przemysława** — do hero i sekcji Story
- [ ] **Favicon** — obecnie oficjalny symbol PNG; ewentualna konwersja do `.ico`
- [ ] **Czy „pierwsza godzina darmowa" nadal obowiązuje** — w materiałach social, nie na stronie
- [ ] **Kanoniczna forma tagline** — kropki vs przecinki
- [ ] **Analytics** — do dodania przy deploy
- [ ] **Przyszła sprzedaż produktów cyfrowych** — checkout, płatności
