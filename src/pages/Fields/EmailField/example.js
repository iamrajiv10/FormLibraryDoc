export const example1Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email'
  }
];

export const example2Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    required: true
  }
];

export const example3Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    required: true,
    errorMessage: 'Please enter your email address.'
  }
];

export const example4Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    value: 'john@example.com'
  }
];

export const example5Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    value: 'john@example.com',
    disabled: true
  }
];

export const example9Data = [
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',

    required: true,

    errorMessage: 'Please enter your email address.',

    value: 'john@example.com',

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