export const propsData = [
  {
    property: 'data',
    type: 'Array',
    required: 'Yes',
    description: 'Conditional form configuration'
  },
  {
    property: 'onSubmit',
    type: 'Function',
    required: 'No',
    description: 'Submit callback'
  },
  {
    property: 'onChange',
    type: 'Function',
    required: 'No',
    description: 'Value change callback'
  },
  {
    property: 'buttons',
    type: 'Array',
    required: 'No',
    description: 'Custom button configuration'
  },
  {
    property: 'globalStyles',
    type: 'Object',
    required: 'No',
    description: 'Global styling configuration'
  }
];

export const operatorsData = [
  {
    operator: 'equals',
    description: 'Value matches exactly'
  },
  {
    operator: 'notEquals',
    description: 'Value does not match'
  },
  {
    operator: 'includes',
    description: 'Used for checkbox groups and arrays'
  },
  {
    operator: 'notIncludes',
    description: 'Value is not present in array'
  }
];