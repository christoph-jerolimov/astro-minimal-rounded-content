export interface LayoutOption {
  key: string;
  label: string;
  description: string;
}

/** The four ways of keeping the rounded box static while its content scrolls. */
export const layouts: LayoutOption[] = [
  {
    key: 'box-scroll',
    label: '1 · Box scrolls',
    description:
      'The bordered box fills the viewport and is itself the scroll container (overflow-y: auto on the box).',
  },
  {
    key: 'inner-scroll',
    label: '2 · Inner wrapper scrolls',
    description:
      'The bordered box is a static frame (overflow: hidden); an inner wrapper inside it scrolls.',
  },
  {
    key: 'max-height',
    label: '3 · Max-height cap',
    description:
      'The box grows with its content up to the viewport height, then scrolls (max-height instead of height).',
  },
  {
    key: 'fixed',
    label: '4 · Fixed position',
    description:
      'The box is taken out of the grid with position: fixed and inset values, and scrolls internally.',
  },
];

export const defaultLayout = layouts[0].key;

export function getLayout(key: string): LayoutOption {
  const found = layouts.find((l) => l.key === key);
  if (!found) throw new Error(`Unknown layout "${key}"`);
  return found;
}

/** For getStaticPaths(): one route per layout option. */
export function layoutPaths() {
  return layouts.map((l) => ({ params: { layout: l.key } }));
}
