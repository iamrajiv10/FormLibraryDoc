export const validationOverviewContent = {
  title: 'Validation',
  description: 'Form Library provides a built-in validation system to handle user input before form submission.',
  details:
    'Validation allows developers to define required fields and customize error messages without writing extra validation logic. Validation works directly with your field configuration.',
  conclusion: 'Validation runs automatically on submit and prevents submission when required fields are invalid.',

  howItWorksTitle: 'How Validation Works',
  requiredTitle: 'Required Validation',
  requiredDescription: 'The required property marks a field as mandatory. If the user leaves it empty, validation fails.',

  customErrorTitle: 'Custom Error Messages',
  customErrorDescription: 'Developers can customize the validation message using errorMessage.',

  differentTypesTitle: 'Validation With Different Field Types',
  differentTypesDescription:
    'All fields follow the same validation approach. Set required: true for any supported field type.',

  submitBehaviorTitle: 'Submit Validation Behavior',
  submitBehaviorDescription:
    'Validation is triggered when the submit action happens. Invalid fields display errors and valid data is submitted.',

  conditionalTitle: 'Validation With ConditionalForm',
  conditionalDescription:
    'Validation also works with conditional fields. Required validation applies only to visible fields (hidden conditional fields are ignored).',

  disabledTitle: 'Validation With Disabled Fields',
  disabledDescription:
    'Disabled fields are not editable. Validation should not block submission because a disabled field cannot be modified by the user.',

  errorHandlingTitle: 'Error Handling',
  errorHandlingDescription:
    'Validation errors are shown near the related field so users know exactly what needs attention.',
  errorHandlingCallout: 'Tip: Provide errorMessage for a clearer, user-friendly message.' ,

  fullExampleTitle: 'Full Example',
  fullExampleDescription:
    'A complete validation configuration with required fields, a custom error message, and a checkbox requirement.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description:
    'Define required fields in your form configuration. When the user submits without entering values, validation runs and submission is stopped.'
};

export const propertiesContent = {
  title: 'Supported Properties'
};

export const relatedDocsContent = {
  title: 'Related Documentation',
  components: ['Form', 'ConditionalForm'],
  features: ['Grid Layout', 'Conditional Rendering', 'Initial Values', 'Disabled Fields', 'Repeatable Group', 'Validation'],
  fields: ['Text Field', 'Email Field', 'Select Field', 'Checkbox', 'Radio Group', 'Checkbox Group']
};

