export const basicExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number'
  }
];

export const requiredExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    required: true
  }
];

export const errorMessageExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    required: true,
    errorMessage: 'Please enter your age.'
  }
];

export const valueExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    value: 25
  }
];

export const disabledExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    value: 25,
    disabled: true
  }
];

export const gridExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    grid: {
      md: 6,
      xs: 12
    }
  }
];

export const styleExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    style: {
      borderRadius: '8px',
      borderColor: '#1976d2'
    }
  }
];

export const labelStyleExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    labelStyle: {
      color: '#1976d2',
      fontWeight: '600'
    }
  }
];

export const fullExampleData = [
  {
    label: 'Years of Experience',
    name: 'experience',
    type: 'number',
    required: true,
    errorMessage: 'Please enter your years of experience.',
    value: 5,
    style: {
      borderRadius: '8px'
    },
    labelStyle: {
      color: '#1976d2'
    },
    grid: {
      md: 6,
      xs: 12
    }
  }
];