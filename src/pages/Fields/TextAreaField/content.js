export const supportedProperties = [
  {
    property: 'label',
    type: 'string',
    required: 'Yes',
    description: 'Field label'
  },
  {
    property: 'name',
    type: 'string',
    required: 'Yes',
    description: 'Unique field identifier'
  },
  {
    property: 'type',
    type: 'string',
    required: 'Yes',
    description: 'Must be "textarea"'
  },
  {
    property: 'required',
    type: 'boolean',
    required: 'No',
    description: 'Enables validation'
  },
  {
    property: 'errorMessage',
    type: 'string',
    required: 'No',
    description: 'Custom validation message'
  },
  {
    property: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disables editing'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Field styling'
  },
  {
    property: 'labelStyle',
    type: 'object',
    required: 'No',
    description: 'Label styling'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Responsive layout configuration'
  }
];

export const relatedDocs = {
  components: ['Form', 'ConditionalForm'],
  fields: [
    'Text Field',
    'Email Field',
    'Password Field',
    'Number Field',
    'Date Field'
  ],
  features: [
    'Validation',
    'Grid Layout',
    'Disabled Fields',
    'Field Styling'
  ]
};