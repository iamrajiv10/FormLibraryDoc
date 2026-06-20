export const basicExampleData = [
  {
    label: 'Select Skills',
    name: 'skills',
    type: 'checkboxGroup',
    options: ['React', 'JavaScript', 'CSS']
  }
];

export const requiredExampleData = [
  {
    label: 'Select Skills',
    name: 'skills',
    type: 'checkboxGroup',
    options: ['React', 'JavaScript', 'Node.js'],
    required: true
  }
];

export const errorMessageExampleData = [
  {
    label: 'Select Skills',
    name: 'skills',
    type: 'checkboxGroup',
    options: ['React', 'JavaScript'],
    required: true,
    errorMessage: 'Please select at least one skill.'
  }
];

export const disabledExampleData = [
  {
    label: 'Selected Features',
    name: 'features',
    type: 'checkboxGroup',
    options: ['Feature 1', 'Feature 2'],
    disabled: true
  }
];

export const styleExampleData = [
  {
    label: 'Select Options',
    name: 'options',
    type: 'checkboxGroup',
    options: ['Option 1', 'Option 2'],
    style: {
      gap: '15px'
    }
  }
];

export const labelStyleExampleData = [
  {
    label: 'Select Options',
    name: 'options',
    type: 'checkboxGroup',
    options: ['Option 1', 'Option 2'],
    labelStyle: {
      color: '#1976d2',
      fontWeight: '600'
    }
  }
];

export const fullExampleData = [
  {
    label: 'Select Technologies',
    name: 'technologies',
    type: 'checkboxGroup',
    options: ['React', 'Node.js', 'MongoDB'],
    required: true,
    errorMessage: 'Please select at least one technology.',
    style: {
      gap: '15px'
    },
    labelStyle: {
      color: '#1976d2'
    },
    grid: {
      md: 12,
      xs: 12
    }
  }
];