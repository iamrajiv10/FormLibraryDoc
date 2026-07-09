export const gridPropertyFullCode = `// Every field can define its own responsive width
const fieldConfig = {
  label: "First Name",
  name: "firstName",
  type: "text",
  grid: {
    md: 6, // 6/12 => half width on desktop/tablet
    xs: 12 // full width on mobile
  }
};`;

export const propsData = [
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Controls responsive layout for a field'
  },
  {
    property: 'grid.md',
    type: 'number',
    required: 'No',
    description: 'Desktop/tablet column width (out of 12)'
  },
  {
    property: 'grid.xs',
    type: 'number',
    required: 'No',
    description: 'Mobile column width (out of 12). Defaults to 12 if omitted'
  }
];

