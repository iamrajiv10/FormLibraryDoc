export const basicExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password'
  }
];

export const valueExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    value: 'MySecurePassword'
  }
];

export const disabledExampleData = [
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    value: 'MySecurePassword',
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
    value: 'MySecurePassword',

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