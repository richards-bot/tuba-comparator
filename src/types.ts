export interface Tuba {
  id: string;
  brand: string;
  model: string;
  key: 'BBb' | 'CC' | 'Eb' | 'F';
  valves: number;
  bore: string;
  weightKg: number;
  finish: string;
  level: 'Student' | 'Intermediate' | 'Professional';
  tone: 'Dark' | 'Warm' | 'Balanced' | 'Bright';
  priceGbp: number;
  whereToBuy: { name: string; url: string }[];
  notes: string;
}
