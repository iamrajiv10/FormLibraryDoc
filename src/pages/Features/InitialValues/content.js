export const overviewContent = {
  title: 'Initial Values',
  description: 'Initial Values allow developers to pre-populate form fields with existing data when the form loads.',
  details: 'Form Library supports a dedicated initialValues prop. The library maps values to fields using the field name (name property). This makes it ideal for edit forms, profile updates, saved drafts, and previously entered data.',
  conclusion: 'Use initialValues to prefill forms reliably—without mixing defaults inside field configs.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description: 'Create a form and pass initialValues so the corresponding fields display when the form loads.'
};

export const howItWorksContent = {
  title: 'How Initial Values Work',
  description: 'Mapping happens using the field name. If a field configuration includes name, the library copies matching values from initialValues.'
};

export const differentFieldsContent = {
  title: 'Using Initial Values With Different Fields',
  description: 'All supported fields can receive initial values with the same approach: use the field name as the key in initialValues.',
  examples: [
    'Text Field: { name: "firstName" }',
    'Select Field: { name: "country" }',
    'Radio Field: { name: "gender" }',
    'Checkbox Field: { name: "terms" }',
    'Checkbox Group: { name: "skills" }'
  ]
};

export const conditionalFormContent = {
  title: 'Initial Values With ConditionalForm',
  description: 'Initial values also work with conditional rendering. When initialValues satisfy a condition, ConditionalForm automatically renders dependent fields.'
};

export const disabledFieldsContent = {
  title: 'Initial Values With Disabled Fields',
  description: 'Disabled fields cannot be edited, but they can still be prefilled and displayed using initialValues.'
};

export const updatingValuesContent = {
  title: 'Updating Initial Values',
  description: 'Initial values are applied during initialization. If you need to update values dynamically, control the values from the parent and provide updated initialValues.'
};

export const fullExampleContent = {
  title: 'Full Example',
  description: 'A complete Edit Profile form using initialValues for text, select, and radio fields.'
};

export const propertiesContent = {
  title: 'Supported Properties'
};

export const relatedDocsContent = {
  title: 'Related Documentation',
  components: ['Form', 'ConditionalForm'],
  features: ['Validation', 'Grid Layout', 'Disabled Fields', 'Conditional Rendering', 'Repeatable Group'],
  fields: ['Text Field', 'Select Field', 'Radio Group', 'Checkbox Group']
};

