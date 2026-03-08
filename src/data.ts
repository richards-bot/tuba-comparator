import type { Tuba } from './types';

export const tubas: Tuba[] = [
  {
    id: 'yamaha-ybb-105',
    brand: 'Yamaha',
    model: 'YBB-105',
    key: 'BBb',
    valves: 3,
    bore: '0.689"',
    weightKg: 9.1,
    finish: 'Lacquer',
    level: 'Student',
    tone: 'Balanced',
    priceGbp: 4200,
    imageUrl: 'images/tuba-1.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=yamaha%20ybb-105' },
      { name: 'Gear4music', url: 'https://www.gear4music.com/search?query=ybb-105' }
    ],
    shortSummary: 'Solid student BBb with dependable intonation and easy response.',
    detailedDescription:
      'The YBB-105 is often chosen by schools and early brass students because it is predictable and forgiving. It gives a stable center to notes, speaks quickly in the mid register, and handles ensemble work without fuss.',
    review: {
      rating: 4.1,
      verdict: 'A smart first serious tuba for students and school programmes.',
      pros: ['Reliable build quality', 'Easy to play in tune', 'Good entry-level value'],
      cons: ['Less tonal depth than pro-level horns', '3-valve layout limits some advanced fingering options']
    }
  },
  {
    id: 'besson-new-standard',
    brand: 'Besson',
    model: 'BE165 New Standard',
    key: 'BBb',
    valves: 4,
    bore: '0.730"',
    weightKg: 10.4,
    finish: 'Silver',
    level: 'Intermediate',
    tone: 'Warm',
    priceGbp: 6700,
    imageUrl: 'images/tuba-2.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [
      { name: 'Phil Parker', url: 'https://www.philparker.co.uk/?s=besson+tuba' },
      { name: 'Dawkes', url: 'https://www.dawkes.co.uk/search?query=besson%20tuba' }
    ],
    shortSummary: 'Classic brass-band warmth with a broad, supportive low register.',
    detailedDescription:
      'This Besson model is aimed at players stepping up from beginner horns, especially in British brass band contexts. The silver finish and wider bore support a round, lyrical sound and strong blend in section playing.',
    review: {
      rating: 4.3,
      verdict: 'Great step-up horn if you want a traditional warm BBb character.',
      pros: ['Rich band-friendly tone', '4 valves add flexibility', 'Comfortable for ensemble work'],
      cons: ['Heavier than some comparably priced options', 'Not the fastest soloistic response']
    }
  },
  {
    id: 'miraphone-1291',
    brand: 'Miraphone',
    model: '1291 BBb',
    key: 'BBb',
    valves: 5,
    bore: '0.835"',
    weightKg: 11.2,
    finish: 'Lacquer',
    level: 'Professional',
    tone: 'Dark',
    priceGbp: 12600,
    imageUrl: 'images/tuba-3.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=miraphone%201291' },
      { name: 'Schagerl Store', url: 'https://www.schagerl.com/en/search?s=miraphone%201291' }
    ],
    shortSummary: 'Large orchestral BBb with serious projection and low-end authority.',
    detailedDescription:
      'The 1291 is widely regarded as a powerhouse instrument. It fills large halls, keeps composure at high dynamics, and still offers enough colour for lyrical orchestral writing. Best suited to advanced players comfortable with larger horns.',
    review: {
      rating: 4.7,
      verdict: 'A commanding pro BBb for players who need weight and projection.',
      pros: ['Huge, dark core sound', 'Excellent projection', '5-valve flexibility'],
      cons: ['Premium price bracket', 'Can feel physically demanding for smaller players']
    }
  },
  {
    id: 'eastman-ebc832',
    brand: 'Eastman',
    model: 'EBC832 CC',
    key: 'CC',
    valves: 5,
    bore: '0.748"',
    weightKg: 10.8,
    finish: 'Lacquer',
    level: 'Professional',
    tone: 'Balanced',
    priceGbp: 9800,
    imageUrl: 'images/tuba-4.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [
      { name: 'Dillon Music', url: 'https://www.dillonmusic.com/search?type=product&q=eastman+ebc832' },
      { name: 'WWBW', url: 'https://www.wwbw.com/search?Ntt=eastman%20ebc832' }
    ],
    shortSummary: 'Modern CC that balances agility, tone clarity, and orchestral versatility.',
    detailedDescription:
      'The EBC832 is often chosen by serious students and working professionals who want a responsive piston CC without stepping into the very highest price tier. It handles solo, chamber, and orchestral jobs confidently.',
    review: {
      rating: 4.5,
      verdict: 'One of the best value pro-leaning CC options in this range.',
      pros: ['Fast response', 'Flexible tonal profile', 'Strong price-to-performance ratio'],
      cons: ['Less sheer mass than the largest CC/BBb instruments', 'Availability can vary by dealer']
    }
  },
  {
    id: 'b-and-s-56af',
    brand: 'B&S',
    model: 'PT-6P 56AF',
    key: 'CC',
    valves: 5,
    bore: '0.748"',
    weightKg: 11.0,
    finish: 'Silver',
    level: 'Professional',
    tone: 'Dark',
    priceGbp: 14500,
    imageUrl: 'images/tuba-5.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=B%26S%20PT-6P' },
      { name: 'Dawkes', url: 'https://www.dawkes.co.uk/search?query=PT-6P' }
    ],
    shortSummary: 'High-end CC with massive orchestral presence and depth.',
    detailedDescription:
      'The PT-6P family has a long reputation in professional orchestral circles. It is built for players who want a broad sonic footprint, dense core, and strong control across dynamic extremes.',
    review: {
      rating: 4.8,
      verdict: 'Flagship-level orchestral tool for experienced players.',
      pros: ['Outstanding orchestral presence', 'Deep and stable low register', 'Premium finish and build'],
      cons: ['Very expensive', 'Requires strong technique to fully control']
    }
  },
  {
    id: 'wessex-fb',
    brand: 'Wessex',
    model: 'Berg F Tuba',
    key: 'F',
    valves: 5,
    bore: '0.689"',
    weightKg: 8.4,
    finish: 'Lacquer',
    level: 'Intermediate',
    tone: 'Bright',
    priceGbp: 5200,
    imageUrl: 'images/tuba-6.svg',
    imageAttribution: 'Illustrative render',
    whereToBuy: [{ name: 'Wessex Tubas', url: 'https://wessex-tubas.com/collections/tubas' }],
    shortSummary: 'Affordable F tuba suited to solo/chamber use and doubling players.',
    detailedDescription:
      'This F model is intended for players who need an agile upper-register instrument without a boutique-level spend. It works well for lighter repertoire, chamber settings, and players expanding beyond BBb/CC.',
    review: {
      rating: 4.2,
      verdict: 'A very practical entry point into F tuba territory.',
      pros: ['Accessible price for F tuba', 'Lightweight and nimble feel', 'Useful for solo/chamber roles'],
      cons: ['Less low-end weight than larger pro F models', 'Finish consistency can vary between batches']
    }
  }
];
