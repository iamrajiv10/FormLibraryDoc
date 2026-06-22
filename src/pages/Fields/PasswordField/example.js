export const basicExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
];

export const disabledExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    disabled: true
  }
];

export const fullExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    required: true,
    errorMessage: 'Please enter your password.',

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