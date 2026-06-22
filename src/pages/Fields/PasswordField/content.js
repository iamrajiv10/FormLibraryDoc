export const overviewContent = {
  title: 'Password Field',
  description:
    'The Password Field is used to collect sensitive information such as passwords, PINs, access codes, and other confidential values.',
  details:
    'Unlike a standard text field, a Password Field masks user input to help protect sensitive information from being displayed on the screen. Password Fields are commonly used in authentication, account registration, password reset, and account recovery workflows.'
};

export const propertiesContent = [
  {
    title: 'required',
    description: 'Marks the password field as mandatory.'
  },
  {
    title: 'errorMessage',
    description:
      'Customize the validation message displayed when the field is empty.'
  },
  {
    title: 'disabled',
    description: 'Display the field while preventing modifications.'
  },
  {
    title: 'grid',
    description:
      'Control how the field is displayed within responsive layouts.'
  },
  {
    title: 'style',
    description: 'Apply custom styling directly to the password field.'
  },
  {
    title: 'labelStyle',
    description: 'Apply styling to the field label.'
  }
];

export const relatedDocs = {
  components: ['Form', 'ConditionalForm'],
  fields: [
    'Text Field',
    'Email Field',
    'Number Field',
    'Date Field',
    'Textarea'
  ],
  features: [
    'Validation',
    'Grid Layout',
    'Initial Values',
    'Disabled Fields',
    'Field Styling'
  ]
};