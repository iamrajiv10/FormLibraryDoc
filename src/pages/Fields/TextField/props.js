export const propsData = [
  { property: 'label', type: 'string', required: 'Yes', description: 'Field label displayed to the user' },
  { property: 'name', type: 'string', required: 'Yes', description: 'Unique field identifier' },
  { property: 'type', type: 'string', required: 'Yes', description: 'Must be "text"' },
  { property: 'required', type: 'boolean', required: 'No', description: 'Marks field as required' },
  { property: 'disabled', type: 'boolean', required: 'No', description: 'Disables field editing' },
  { property: 'value', type: 'string', required: 'No', description: 'Prefilled field value' },
  { property: 'className', type: 'string', required: 'No', description: 'Custom CSS class for the field' },
  { property: 'style', type: 'object', required: 'No', description: 'Custom field styling' },
  { property: 'labelClassName', type: 'string', required: 'No', description: 'Custom CSS class for the label' },
  { property: 'labelStyle', type: 'object', required: 'No', description: 'Custom styling for the label' },
  { property: 'grid', type: 'object', required: 'No', description: 'Grid layout configuration' },
];
