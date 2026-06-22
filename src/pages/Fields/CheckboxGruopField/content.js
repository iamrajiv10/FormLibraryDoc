export const pageContent = {
  title: 'Checkbox Group Field',
  description:
    'The Checkbox Group Field is used when users need to select multiple options from a list. Unlike Radio Group fields, Checkbox Group allows users to choose one or more values at the same time.'
};

export const checkboxGroupProps = [
  {
    property: 'label',
    type: 'string',
    required: 'Yes',
    description: 'Checkbox Group label.'
  },{
    property: 'name',
    type: 'string',
    required: 'Yes',
    description: 'Unique field identifier.'
  },{
    property: 'type',
    type: 'string',
    required: 'Yes',
    description: 'Enables validation.'
  },
  {
    property: 'options',
    type: 'array',
    required: 'Yes',
    description: 'List of selectable options.'
  },
  {
    property: 'required',
    type: 'boolean',
    required: 'No',
    description: 'Enables validation.'
  },
  {
    property: 'errorMessage',
    type: 'string',
    required: 'No',
    description: 'Custom validation message.'
  },
  {
    property: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disables selection.'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Field styling.'
  },
  {
    property: 'labelStyle',
    type: 'object',
    required: 'No',
    description: 'Label styling.'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
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