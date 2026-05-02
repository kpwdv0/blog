// Warm muted tones — each post gets one consistently based on its slug
const palette = [
  '#D4D4D4',
  '#C8C8C8',
  '#BEBEBE',
  '#D0D0D0',
  '#C4C4C4',
  '#CCCCCC',
  '#BABABA',
  '#D8D8D8',
  '#C6C6C6',
  '#D2D2D2',
  '#C0C0C0',
  '#CACACA',
  '#DCDCDC',
];

export function postColor(slug: string): string {
  const hash = Array.from(slug).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return palette[hash % palette.length];
}
