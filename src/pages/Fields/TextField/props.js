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
    description: 'Must be "text"'
  },
  {
    property: 'placeholder',
    type: 'string',
    required: 'No',
    description: 'Hint text inside the field'
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
    property: 'disabled',
    type: 'boolean',
    required: 'No',
    description: 'Disables field interaction'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Responsive layout configuration'
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
  }
];

