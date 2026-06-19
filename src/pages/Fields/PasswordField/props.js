export const propsData = [
  {
    property: 'label',
    type: 'string',
    required: 'Yes',
    description: 'Field label'
  },
  {
    property: 'name',
    type: 'string',
    required: 'Yes',
    description: 'Unique field identifier'
  },
  {
    property: 'type',
    type: 'string',
    required: 'Yes',
    description: 'Must be "password"'
  },
  {
    property: 'required',
    type: 'boolean',
    required: 'No',
    description: 'Enables validation'
  },
  {
    property: 'errorMessage',
    type: 'string',
    required: 'No',
    description: 'Custom validation message'
  },
  {
    property: 'value',
    type: 'string',
    required: 'No',
    description: 'Initial value'
  },
  {
    property: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disables editing'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Field styling'
  },
  {
    property: 'labelStyle',
    type: 'object',
    required: 'No',
    description: 'Label styling'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Responsive layout configuration'
  }
];