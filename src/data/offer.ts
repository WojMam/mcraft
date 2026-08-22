// TODO: confirm with client — final session count and duration
export const offerOneOnOne = {
  label: 'Oferta',
  headline: 'Mental Craft 1:1',
  subline: 'Indywidualny proces łączący ruch, rozmowę i pracę nad kierunkiem zmiany.',
  sessions: '10 spotkań po około 100 minut',
  elements: [
    'Aktywność i ruch — ciało jako część procesu',
    'Rozmowa i mentoring — praca nad perspektywą i celami',
    'Kierunek zmiany — od wglądu do konkretnych kroków',
    'Wyciszenie — przestrzeń na refleksję i uważność',
  ],
  note: 'Proces dopasowany do Ciebie — nie szablon do skopiowania.',
  cta: 'Porozmawiajmy o współpracy',
} as const;

export const ebookTeaser = {
  label: 'Workbook',
  headline: 'Praca w własnym tempie.',
  description:
    'Podręcznik warsztatowy do samodzielnej pracy — wiedza i ćwiczenia praktyczne, które pozwalają wejść w Mental Craft we własnym rytmie.',
  cta: 'Wkrótce',
  placeholderNote: 'CONCEPT PLACEHOLDER',
} as const;

export const businessOffer = {
  label: 'Dla organizacji',
  headline: 'Mental Craft dla biznesu',
  description:
    'Warsztaty i praca z managerami oraz zespołami. Rozwój, zmiana perspektywy i sprawczość w kontekście organizacji.',
  cta: 'Porozmawiajmy o współpracy',
} as const;

export const finalCta = {
  headline: 'Nie musisz wiedzieć jeszcze, dokąd dojdziesz.',
  headlineAccent: 'Musisz zdecydować, czy ruszasz.',
  subline: 'Pierwszy krok to rozmowa — bez zobowiązań, bez presji.',
} as const;

export const contactForm = {
  nameLabel: 'Imię',
  namePlaceholder: 'Twoje imię',
  emailLabel: 'E-mail',
  emailPlaceholder: 'Twój adres e-mail',
  messageLabel: 'Wiadomość',
  messagePlaceholder: 'Napisz kilka słów o tym, co Cię tu sprowadza…',
  submitLabel: 'Wyślij wiadomość',
  successMessage:
    'Dziękujemy za wiadomość. Odezwiemy się wkrótce.',
} as const;
