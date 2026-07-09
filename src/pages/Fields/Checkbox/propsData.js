export const checkboxPropsData = [
  {
    property: 'label',
    type: 'string',
    required: 'Yes',
    description: 'Checkbox label'
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
    description: 'Field type'
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
    description: 'Disables checkbox'
  },
  {
    property: 'grid',
    type: 'object',
    required: 'No',
    description: 'Responsive layout'
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

