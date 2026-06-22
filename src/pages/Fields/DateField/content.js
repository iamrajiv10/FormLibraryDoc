export const overviewContent = {
  title: 'DateField',
  description: 'DateField allows users to select a date value using a calendar-based input.',
  details:
    'It is useful for collecting information such as date of birth, appointment dates, joining dates, and event dates.',
  conclusion:
    'DateField is rendered automatically when the field type is set to "type: date". It supports validation, responsive layouts, styling customization, disabled state, and conditional rendering.'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description:
    'Add Live Preview. DateField is rendered automatically by the Form component when the field type is set to "type: date".',
  conclusion:
    'Show the rendered DateField example.'
};

export const propertiesContent = {
  title: 'Properties',
  mandatoryFields: ['label', 'name', 'type'],
  mandatoryExampleSnippet: `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date"
}`,
  mandatoryExampleFullCode: `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date"
  }
];`,

  label: {
    description: 'Defines the text displayed above the date field.',
    snippet: `{
  label: "Joining Date"
}`,
    fullCode: `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date"
  }
];`
  },

  name: {
    description: 'Unique identifier used to store the selected date value.',
    snippet: `{
  name: "joiningDate"
}`,
    fullCode: `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date"
  }
];`
  },

  type: {
    description: 'Defines the field type. For DateField: type:"date"',
    snippet: `{
  type: "date"
}`,
    fullCode: `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date"
  }
];`
  },

  placeholder: {
    description: 'Displays hint text inside the field.',
    snippet: `{
  placeholder: "Select date"
}`,
    fullCode: `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",
    placeholder: "Select date"
  }
];`
  },

  required: {
    description: 'Makes the date field mandatory during validation.'
  },

  errorMessage: {
    description: 'Customize validation error message.'
  },

  disabled: {
    description: 'Disables user interaction with the date field.'
  },

  grid: {
    description: 'Controls responsive field layout.',
    info:
      'md controls desktop width. xs controls mobile width. If xs is not provided, Form Library automatically treats it as 12.'
  },

  style: {
    description: 'Customize DateField appearance.'
  },

  labelStyle: {
    description: 'Customize label appearance.'
  }
};

export const stylingContent = {
  title: 'Styling'
};

export const conditionalRenderingContent = {
  title: 'Conditional Rendering Support',
  description:
    'DateField can be displayed conditionally using ConditionalForm.',
  callout:
    'The DateField appears only when the condition is satisfied. Refer users to ConditionalForm documentation.'
};

export const fullExampleContent = {
  title: 'Full Example',
  description:
    'Employee registration form. Fields: Employee Name, Joining Date, Contract End Date. Use required, grid, and styling.'
};

export const relatedDocsContent = {
  title: 'Related Documentation',
  components: ['Form', 'ConditionalForm'],
  features: [
    'Validation',
    'Grid Layout',
    'Disabled Fields',
    'Form Styling',
    'Conditional Rendering'
  ],
  fields: ['Text Field', 'Email Field', 'Select Field', 'TextArea']
};

