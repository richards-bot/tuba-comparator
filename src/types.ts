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
  imageUrl: string;
  imageAttribution: string;
  whereToBuy: { name: string; url: string }[];
  shortSummary: string;
  detailedDescription: string;
  review: {
    rating: number;
    verdict: string;
    pros: string[];
    cons: string[];
  };
}
