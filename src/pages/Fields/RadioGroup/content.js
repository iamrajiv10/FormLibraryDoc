export const overviewContent = {
  title: 'Radio Group Field',
  description:
    'The Radio Group Field is used when users need to select one option from multiple choices.',
  details:
    'Unlike text inputs, Radio Groups provide predefined options and allow only one selection at a time. They are commonly used for preferences, categories, statuses, and decision-based inputs.'
};

export const propertiesContent = [
  {
    title: 'options',
    description: 'Defines the available choices displayed inside the radio group.'
  },
  {
    title: 'required',
    description: 'Marks the radio group as mandatory.'
  },
  {
    title: 'errorMessage',
    description: 'Customize the validation message displayed when no option is selected.'
  },
  {
    title: 'disabled',
    description: 'Display the radio group while preventing selection changes.'
  },
  {
    title: 'grid',
    description: 'Control how the field is displayed within responsive layouts.'
  },
  {
    title: 'style',
    description: 'Apply custom styling directly to the radio group field.'
  },
  {
    title: 'labelStyle',
    description: 'Apply styling to the field label.'
  }
];

export const commonUseCases = [
  'Preferences',
  'Status Selection',
  'Survey Questions',
  'Category Selection',
  'Decision Making'
];

export const relatedDocs = {
  title: 'Related Documentation',
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