/**
 * Photo slots for Iteration 2.
 * Drop clean client files into public/assets/photos/ using the filenames below.
 * Social-media composites (text/logo/CTA burned in) must NOT be used here.
 *
 * TODO: client should provide clean portrait / outdoor photo for these placements
 */
export const photoSlots = {
  heroPortrait: {
    src: 'assets/photos/portrait-hero.jpg',
    alt: 'Przemysław Duda',
  },
  storyOutdoor: {
    src: 'assets/photos/story-outdoor.jpg',
    alt: 'Przemysław Duda w terenie',
  },
  storyActivity: {
    src: 'assets/photos/story-activity.jpg',
    alt: 'Przemysław Duda w ruchu',
  },
  ctaPortrait: {
    src: 'assets/photos/portrait-cta.jpg',
    alt: 'Przemysław Duda',
  },
} as const;
