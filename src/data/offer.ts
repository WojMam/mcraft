// TODO: confirm with client — final session count, duration split, and packaging
export const offerOneOnOne = {
  label: 'Oferta',
  headline: 'Mental Craft 1:1',
  subline:
    'Indywidualny proces łączący ruch, rozmowę i pracę nad kierunkiem zmiany.',
  // TODO: confirm with client
  sessions: 'Cykl ok. 10 spotkań · ok. 100 min każde',
  sessionAnatomyLabel: 'Anatomia jednego spotkania',
  sessionStructure: [
    { duration: '30 min', label: 'Ruch' },
    { duration: '60 min', label: 'Rozmowa' },
    { duration: '10 min', label: 'Wyciszenie' },
  ],
  processElements: [
    'Indywidualne dopasowanie procesu do Twojej sytuacji',
    'Regularna praca nad perspektywą, celem i kierunkiem zmiany',
    'Przekładanie wniosków na konkretne działania między spotkaniami',
    'Utrwalanie zmiany — praca własna wspierająca cały cykl',
  ],
  note: 'Proces dopasowany do Ciebie — nie szablon do skopiowania.',
  cta: 'Porozmawiajmy o współpracy',
} as const;

export const ebookTeaser = {
  label: 'Workbook',
  headline: 'Praca we własnym tempie.',
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
  focusAreas: ['Managerowie', 'Zespoły', 'Sprawczość'],
  cta: 'Porozmawiajmy o współpracy',
} as const;

export const finalCta = {
  headline: 'Nie musisz wiedzieć jeszcze, dokąd dojdziesz.',
  headlineAccent: 'Musisz zdecydować, czy ruszasz.',
  subline:
    'Napisz bezpośrednio do mnie. Pierwsza rozmowa — bez zobowiązań, bez presji.',
} as const;

export const contactForm = {
  nameLabel: 'Imię',
  namePlaceholder: 'Twoje imię',
  emailLabel: 'E-mail',
  emailPlaceholder: 'Twój adres e-mail',
  messageLabel: 'Wiadomość',
  messagePlaceholder: 'Napisz kilka słów o tym, co Cię tu sprowadza…',
  submitLabel: 'Wyślij wiadomość',
  unavailableNote: 'Formularz uruchomimy wkrótce.',
} as const;
