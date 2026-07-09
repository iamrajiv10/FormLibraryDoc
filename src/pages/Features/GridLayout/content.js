export const overviewContent = {
  title: 'Grid Layout',
  description: 'Grid Layout lets you control how wide each field is across screen sizes so multiple fields can share the same row.',
  details: 'Instead of rendering all fields in a single column, you can define responsive column widths per field using the grid property. The layout adapts automatically on desktop and mobile.',
  conclusion: 'Use grid.md and grid.xs to build responsive multi-column forms with consistent spacing and readable stacking on small screens.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description: 'Define grid widths per field. Two fields with md:6 can sit side-by-side on desktop, while xs:12 stacks them on mobile.'
};

export const howItWorksContent = {
  title: 'How Grid Layout Works',
  description: 'Every field can define its own grid size using the grid property. Together md and xs determine where the field renders across breakpoints.'
};

export const responsiveContent = {
  title: 'Responsive Behavior',
  description: 'Grid Layout follows responsive rules. Desktop/tablet uses md widths; mobile uses xs widths. If xs is missing, the library treats it as xs:12.'
};

export const gridCalculationContent = {
  title: 'Grid Width Calculation',
  description: 'The library uses a 12-column system. Use column values (md/xs) that add up naturally to create rows and multi-row layouts.'
};

export const multipleRowsContent = {
  title: 'Multiple Rows',
  description: 'Fields can create different row combinations based on their column widths. For example: City/State/Country (md:4 each) form a 3-column row.'
};

export const conditionalCompatibilityContent = {
  title: 'Using Grid With ConditionalForm',
  description: 'Grid Layout works with ConditionalForm. A field can have both grid and condition, so it will follow its grid placement and only render when the condition matches.' ,
  codeSnippet: `{
  label: "Company Name",
  name: "companyName",
  type: "text",
  grid: { md: 6, xs: 12 },
  condition: {
    logic: "AND",
    rules: [
      {
        field: "employed",
        operator: "equals",
        value: "Yes"
      }
    ]
  }
}`
};

export const fullExampleContent = {
  title: 'Full Example',
  description: 'A complete form configuration using grid sizes across fields: side-by-side on desktop for name, full width for email/address, and 3 columns for city/state/country.'
};

export const propertiesContent = {
  title: 'Supported Properties'
};

export const relatedDocsContent = {
  title: 'Related Documentation',
  components: ['Form', 'ConditionalForm'],
  features: ['Conditional Rendering', 'Validation', 'Repeatable Group'],
  fields: ['Text Field', 'Select Field', 'Checkbox Group', 'Textarea Field']
};

