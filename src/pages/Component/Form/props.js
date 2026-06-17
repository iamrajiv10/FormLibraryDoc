export const propsData = [
  {
    property: 'data',
    type: 'Array',
    required: 'Yes',
    description: 'Form configuration'
  },
  {
    property: 'onSubmit',
    type: 'Function',
    required: 'No',
    description: 'Submit callback'
  },
  {
    property: 'onChange',
    type: 'Function',
    required: 'No',
    description: 'Value change callback'
  },
  {
    property: 'buttons',
    type: 'Array',
    required: 'No',
    description: 'Custom button configuration'
  },
  {
    property: 'globalStyles',
    type: 'Object',
    required: 'No',
    description: 'Global form styling'
  }
];

export const fieldPropertiesData = [
  {
    property: 'label',
    type: 'string',
    description: 'Text displayed above the field'
  },
  {
    property: 'name',
    type: 'string',
    description: 'Unique field identifier'
  },
  {
    property: 'type',
    type: 'string',
    description: 'Field type to render'
  },
  {
    property: 'required',
    type: 'boolean',
    description: 'Enables required validation'
  },
  {
    property: 'value',
    type: 'any',
    description: 'Initial value'
  },
  {
    property: 'disabled',
    type: 'boolean',
    description: 'Disables field interaction'
  },
  {
    property: 'style',
    type: 'object',
    description: 'Field-specific styling'
  },
  {
    property: 'labelStyle',
    type: 'object',
    description: 'Label-specific styling'
  },
  {
    property: 'grid',
    type: 'object',
    description: 'Responsive layout settings'
  }
];

export const fieldTypesData = [
  { type: 'text', description: 'Single-line text input' },
  { type: 'email', description: 'Email input' },
  { type: 'password', description: 'Password input' },
  { type: 'number', description: 'Numeric input' },
  { type: 'date', description: 'Date selection' },
  { type: 'textarea', description: 'Multi-line input' },
  { type: 'radio', description: 'Single choice selection' },
  { type: 'checkbox', description: 'Boolean selection' },
  { type: 'checkboxGroup', description: 'Multiple choice selection' },
  { type: 'select', description: 'Dropdown selection' }
];