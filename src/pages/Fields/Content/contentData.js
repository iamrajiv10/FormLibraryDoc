export const overviewContent = {
  title: 'Content Field',
  description: 'Content Field is a non-input field that allows developers to display static information inside a form.',
  details: [
    'Unlike normal fields, Content Field does not collect user input and does not contribute any value to the submitted form data.',
    'It is used to add information, headings, instructions, messages, or descriptions between form fields while keeping the complete form structure schema-driven.'
  ]
};

export const relatedDocs = {
  components: ['Form', 'ConditionalForm'],
  fields: ['Text Field', 'TextArea', 'Checkbox', 'Select Field'],
  features: ['Grid Layout', 'Conditional Rendering', 'Form Styling']
};

export const nextStepContent = {
  title: 'Next Step',
  description: 'Continue to the Text Field documentation to see how user input is collected and validated in Form Library.'
};

export const basicExampleData = [
  {
    type: 'content',
    content: 'Personal Information'
  }
];

export const requiredExampleData = [
  {
    type: 'content',
    content: 'User Details'
  }
];

export const propsData = [
  {
    property: 'type',
    type: 'string',
    required: 'Yes',
    description: 'Defines content field'
  },
  {
    property: 'content',
    type: 'string',
    required: 'Yes',
    description: 'Text displayed'
  },
  {
    property: 'variant',
    type: 'string',
    required: 'No',
    description: 'Content style type'
  },
  {
    property: 'textAlign',
    type: 'string',
    required: 'No',
    description: 'Content alignment'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Custom styling'
  },
  {
    property: 'className',
    type: 'string',
    required: 'No',
    description: 'Custom CSS class'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Responsive layout'
  },
  {
    property: 'condition',
    type: 'object',
    required: 'No',
    description: 'Conditional visibility'
  }
];

