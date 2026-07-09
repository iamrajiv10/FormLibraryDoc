export const propsData = [
  {
    property: 'condition',
    type: 'object',
    required: 'Yes',
    description: 'Controls when the field should render'
  },
  {
    property: 'logic',
    type: 'string',
    required: 'Yes',
    description: 'Defines how multiple rules are evaluated'
  },
  {
    property: 'rules',
    type: 'array',
    required: 'Yes',
    description: 'Contains field comparison rules'
  },
  {
    property: 'field',
    type: 'string',
    required: 'Yes',
    description: 'Field name to evaluate'
  },
  {
    property: 'operator',
    type: 'string',
    required: 'Yes',
    description: 'Comparison operation'
  },
  {
    property: 'value',
    type: 'string',
    required: 'Yes',
    description: 'Expected value'
  }
];
