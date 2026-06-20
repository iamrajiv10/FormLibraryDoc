export const basicExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea'
  }
];

export const requiredExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    required: true
  }
];

export const errorMessageExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    required: true,
    errorMessage: 'Please enter a description.'
  }
];

export const disabledExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    disabled: true
  }
];

export const styleExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    style: {
      borderRadius: '8px',
      borderColor: '#1976d2'
    }
  }
];

export const labelStyleExampleData = [
  {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    labelStyle: {
      color: '#1976d2',
      fontWeight: '600'
    }
  }
];

export const fullExampleData = [
  {
    label: 'Additional Details',
    name: 'details',
    type: 'textarea',
    required: true,
    errorMessage: 'Please provide additional details.',
    style: {
      borderRadius: '8px'
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