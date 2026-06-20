export const basicExampleData = [
  {
    label: 'I agree to the terms and conditions',
    name: 'terms',
    type: 'checkbox'
  }
];

export const requiredExampleData = [
  {
    label: 'Accept Terms and Conditions',
    name: 'terms',
    type: 'checkbox',
    required: true
  }
];

export const disabledExampleData = [
  {
    label: 'Email Notifications',
    name: 'notifications',
    type: 'checkbox',
    disabled: true
  }
];

export const styledExampleData = [
  {
    label: 'Receive Updates',
    name: 'updates',
    type: 'checkbox',
    labelStyle: {
      color: '#1976d2',
      fontWeight: '600'
    }
  }
];

export const fullExampleData = [
  {
    label: 'I agree to receive updates',
    name: 'updates',
    type: 'checkbox',
    required: true,
    errorMessage: 'Please accept this option.',
    style: {
      marginTop: '10px'
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