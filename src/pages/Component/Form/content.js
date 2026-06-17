export const overviewContent = {
  title: 'Form',
  description:
    'The Form component is the foundation of Form Library.',
  details:
    'It allows you to generate complete forms from a configuration object, eliminating the need to manually create and manage individual input fields, labels, validation logic, and layouts.',
  conclusion:
    "Whether you're building a simple contact form or a complex business workflow, the Form component provides a flexible and consistent way to create forms while keeping your code clean and maintainable."
};

export const whyUseFormContent = {
  title: 'Why Use Form?',
  description:
    'Traditional forms often require repetitive code for:',
  items: [
    'Labels',
    'Inputs',
    'Validation',
    'Error handling',
    'Layout management',
    'Styling',
    'State management'
  ],
  conclusion:
    'The Form component solves this problem by allowing you to describe your form as data and letting the library generate the user interface automatically.'
};

export const benefitsContent = [
  'Configuration-driven form generation',
  'Consistent user experience',
  'Built-in validation support',
  'Responsive layouts',
  'Customizable styling',
  'Reusable form definitions',
  'Reduced boilerplate code'
];

export const importContent = {
  title: 'Import',
  description:
    'Import the Form component into your application.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description:
    'The example below demonstrates a simple registration form.',
  conclusion:
    'This example demonstrates the core concept of Form Library: describe your form structure through configuration and let the component handle the rendering.'
};

export const fieldConfigurationContent = {
  title: 'Understanding Field Configuration',
  description:
    'Every field within a form is represented by an object.',
  conclusion:
    'For complete field documentation, visit the individual Field pages.'
};

export const fieldTypesContent = {
  title: 'Supported Field Types',
  description:
    'The Form component supports multiple field types.'
};

export const submitContent = {
  title: 'Handling Form Submission',
  description:
    'The onSubmit prop is used to receive form values after successful validation.',
  conclusion:
    'Validation is automatically performed before the submit callback is executed.'
};

export const changeContent = {
  title: 'Tracking Form Changes',
  description:
    'Use the onChange prop to receive updates whenever field values change.'
};

export const validationContent = {
  title: 'Validation',
  description:
    'Form Library includes built-in validation support.',
  errorMessage: 'This is a required field.'
};

export const initialValuesContent = {
  title: 'Initial Values',
  description:
    'Initial values allow forms to display existing data.',
  useCases: [
    'Edit screens',
    'Draft recovery',
    'User profile forms',
    'Review workflows'
  ]
};

export const disabledFieldsContent = {
  title: 'Disabled Fields',
  description:
    'Fields can be displayed in a read-only state.',
  conclusion:
    'Disabled fields remain visible but cannot be modified.'
};

export const gridContent = {
  title: 'Responsive Grid Layout',
  description:
    'The Form component supports responsive layouts through the grid property.',
  desktopExample: 'First Name      Last Name',
  mobileExample: 'First Name\n\nLast Name',
  conclusion:
    'If xs is not specified, Form Library automatically treats it as 12. This ensures fields stack correctly on smaller devices.'
};

export const stylingContent = {
  title: 'Styling',
  description:
    'Form Library supports both global styling and field-level styling.',
  globalUseCases: [
    'Brand consistency',
    'Theme customization',
    'Shared design systems'
  ],
  conclusion:
    'Field-level styles take precedence over global styles.'
};

export const buttonsContent = {
  title: 'Custom Buttons',
  description:
    'By default, Form Library renders a Submit button.',
  conclusion:
    'For advanced workflows, custom button configurations can be provided.',
  workflows: [
    'Submit Forms',
    'Back / Next Navigation',
    'Save and Continue Later',
    'Review and Confirm',
    'Multi-Step Processes'
  ]
};

export const relatedFeaturesContent = {
  title: 'Related Features',
  features: [
    'ConditionalForm',
    'Repeatable Groups',
    'Validation',
    'Responsive Grid Layout'
  ]
};

export const nextStepsContent = {
  title: 'Next Steps',
  fieldDocumentation: [
    'Text Field',
    'Email Field',
    'Password Field',
    'Number Field',
    'Date Field',
    'Textarea',
    'Radio Group',
    'Checkbox',
    'Checkbox Group',
    'Select'
  ],
  advancedFeatures: [
    'ConditionalForm',
    'Repeatable Groups',
    'Validation',
    'Grid Layout',
    'Custom Buttons',
    'Styling'
  ],
  conclusion:
    "By understanding the Form component, you'll be able to build everything from simple contact forms to complex enterprise workflows using the same configuration-driven approach."
};