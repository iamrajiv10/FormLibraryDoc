export const overviewContent = {
  title: 'ConditionalForm',
  description: 'ConditionalForm is an advanced form component that allows fields to be displayed dynamically based on user input.',
  details: 'It helps build interactive forms where some fields appear, disappear, or change based on values selected in previous fields.',
  conclusion: 'It allows developers to create dynamic workflows without manually handling show/hide logic.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description: 'In this example, the "Company Name" field only appears if you select "Yes" for the "Are you employed?" field.',
};

export const howItWorksContent = {
  title: 'How Conditional Rendering Works',
  description: 'ConditionalForm uses the condition property inside the field configuration. The condition object contains field, operator, value, and logic.',
};

export const multipleConditionsContent = {
  title: 'Multiple Conditions',
  description: 'You can combine multiple fields using logic rules. In this example, the textarea only appears when both Option 2 AND Option 3 are selected.'
};

export const propertiesContent = {
  title: 'Properties'
};

export const stylingContent = {
  title: 'Styling',
  description: 'ConditionalForm supports all normal Form styling options because fields are still controlled by the same field configuration system.'
};

export const fullExampleContent = {
  title: 'Full Example',
  description: 'A complete employment form scenario combining multiple conditional fields based on radio and checkbox group inputs.'
};

export const relatedDocsContent = {
  title: 'Related Documentation',
  components: ['Form', 'ConditionalForm'],
  fields: [
    'Radio Group',
    'Checkbox Group',
    'Select Field'
  ],
  features: [
    'Grid Layout',
    'Repeatable Group',
    'Validation'
  ]
};
