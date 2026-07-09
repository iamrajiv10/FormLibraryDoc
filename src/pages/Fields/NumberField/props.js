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
    description: 'Must be "number"'
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
    description: 'Disables editing'
  },
  {
    property: 'prefix',
    type: 'string',
    required: 'No',
    description: 'Displays content before number value'
  },
  {
    property: 'suffix',
    type: 'string',
    required: 'No',
    description: 'Displays content after number value'
  },
  {
    property: 'maxDigits',
    type: 'number',
    required: 'No',
    description: 'Limits maximum digits allowed'
  },
  {
    property: 'precision',
    type: 'number',
    required: 'No',
    description: 'controls decimal places'
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