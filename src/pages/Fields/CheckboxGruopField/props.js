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