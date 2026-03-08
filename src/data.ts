import type { Tuba } from './types';

export const tubas: Tuba[] = [
  {
    id: 'yamaha-ybb-105', brand: 'Yamaha', model: 'YBB-105', key: 'BBb', valves: 3,
    bore: '0.689"', weightKg: 9.1, finish: 'Lacquer', level: 'Student', tone: 'Balanced',
    priceGbp: 4200,
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=yamaha%20ybb-105' },
      { name: 'Gear4music', url: 'https://www.gear4music.com/search?query=ybb-105' }
    ],
    notes: 'Solid student BBb. Reliable intonation and easy response.'
  },
  {
    id: 'besson-new-standard', brand: 'Besson', model: 'BE165 New Standard', key: 'BBb', valves: 4,
    bore: '0.730"', weightKg: 10.4, finish: 'Silver', level: 'Intermediate', tone: 'Warm',
    priceGbp: 6700,
    whereToBuy: [
      { name: 'Phil Parker', url: 'https://www.philparker.co.uk/?s=besson+tuba' },
      { name: 'Dawkes', url: 'https://www.dawkes.co.uk/search?query=besson%20tuba' }
    ],
    notes: 'British brass-band classic colour; broader low register.'
  },
  {
    id: 'miraphone-1291', brand: 'Miraphone', model: '1291 BBb', key: 'BBb', valves: 5,
    bore: '0.835"', weightKg: 11.2, finish: 'Lacquer', level: 'Professional', tone: 'Dark',
    priceGbp: 12600,
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=miraphone%201291' },
      { name: 'Schagerl Store', url: 'https://www.schagerl.com/en/search?s=miraphone%201291' }
    ],
    notes: 'Big orchestral sound with excellent projection.'
  },
  {
    id: 'eastman-ebc832', brand: 'Eastman', model: 'EBC832 CC', key: 'CC', valves: 5,
    bore: '0.748"', weightKg: 10.8, finish: 'Lacquer', level: 'Professional', tone: 'Balanced',
    priceGbp: 9800,
    whereToBuy: [
      { name: 'Dillon Music', url: 'https://www.dillonmusic.com/search?type=product&q=eastman+ebc832' },
      { name: 'WWBW', url: 'https://www.wwbw.com/search?Ntt=eastman%20ebc832' }
    ],
    notes: 'Modern piston CC design with nimble response.'
  },
  {
    id: 'b-and-s-56af', brand: 'B&S', model: 'PT-6P 56AF', key: 'CC', valves: 5,
    bore: '0.748"', weightKg: 11.0, finish: 'Silver', level: 'Professional', tone: 'Dark',
    priceGbp: 14500,
    whereToBuy: [
      { name: 'Thomann', url: 'https://www.thomann.de/gb/search_dir.html?sw=B%26S%20PT-6P' },
      { name: 'Dawkes', url: 'https://www.dawkes.co.uk/search?query=PT-6P' }
    ],
    notes: 'Powerful large-orchestra staple; huge low end.'
  },
  {
    id: 'wessex-fb', brand: 'Wessex', model: 'Berg F Tuba', key: 'F', valves: 5,
    bore: '0.689"', weightKg: 8.4, finish: 'Lacquer', level: 'Intermediate', tone: 'Bright',
    priceGbp: 5200,
    whereToBuy: [
      { name: 'Wessex Tubas', url: 'https://wessex-tubas.com/collections/tubas' }
    ],
    notes: 'Affordable F option for solo/chamber work.'
  }
];
