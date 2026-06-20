export const pageContent = {
  title: 'Checkbox Group Field',
  description:
    'The Checkbox Group Field is used when users need to select multiple options from a list. Unlike Radio Group fields, Checkbox Group allows users to choose one or more values at the same time.'
};

export const checkboxGroupProps = [
  {
    name: 'options',
    type: 'array',
    required: true,
    description: 'List of selectable options.'
  },
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description: 'Enables validation.'
  },
  {
    name: 'errorMessage',
    type: 'string',
    required: false,
    description: 'Custom validation message.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables selection.'
  },
  {
    name: 'style',
    type: 'object',
    required: false,
    description: 'Field styling.'
  },
  {
    name: 'labelStyle',
    type: 'object',
    required: false,
    description: 'Label styling.'
  },
  {
    name: 'grid',
    type: 'object',
    required: false,
    description: 'Responsive layout configuration.'
  }
];

export const commonUseCases = [
  'Technology Selection',
  'Skills Assessment',
  'Language Selection',
  'Interests & Hobbies',
  'Feature Preferences',
  'Survey Responses'
];

export const relatedDocs = {
  components: ['Form', 'ConditionalForm'],
  fields: [
    'Checkbox Field',
    'Radio Group',
    'Select Field',
    'Text Field',
    'Email Field'
  ],
  features: [
    'Conditional Rendering',
    'Validation',
    'Grid Layout',
    'Disabled Fields',
    'Field Styling'
  ]
};