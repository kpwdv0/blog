// Warm muted tones — each post gets one consistently based on its slug
const palette = [
  '#D6C8B8',
  '#C8B8A8',
  '#BEB0A0',
  '#D0BEB0',
  '#C4B4A4',
  '#CCBCAC',
  '#BAA898',
  '#D8C4B0',
  '#C6B2A0',
  '#D2C0AE',
  '#C0AE9E',
  '#CABAB0',
  '#D4C2B4',
];

export function postColor(slug: string): string {
  const hash = Array.from(slug).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return palette[hash % palette.length];
}
