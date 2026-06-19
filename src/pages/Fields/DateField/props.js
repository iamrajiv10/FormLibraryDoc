export const dateFieldProps = [
  {
    name: 'required',
    type: 'boolean',
    required: false,
    description: 'Marks the date field as mandatory.'
  },
  {
    name: 'errorMessage',
    type: 'string',
    required: false,
    description: 'Custom validation message displayed when validation fails.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Disables user interaction with the field.'
  },
  {
    name: 'grid',
    type: 'object',
    required: false,
    description: 'Controls responsive layout behavior.'
  },
  {
    name: 'style',
    type: 'object',
    required: false,
    description: 'Applies custom styling to the field.'
  },
  {
    name: 'labelStyle',
    type: 'object',
    required: false,
    description: 'Applies custom styling to the field label.'
  }
];