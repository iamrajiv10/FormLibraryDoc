export const basicExampleData = [
  {
    label: 'Are you satisfied?',
    name: 'satisfaction',
    type: 'radio',
    options: ['Yes', 'No']
  }
];

export const requiredExampleData = [
  {
    label: 'Are you employed?',
    name: 'employed',
    type: 'radio',
    options: ['Yes', 'No'],
    required: true
  }
];

export const errorMessageExampleData = [
  {
    label: 'Are you employed?',
    name: 'employed',
    type: 'radio',
    options: ['Yes', 'No'],
    required: true,
    errorMessage: 'Please select an option.'
  }
];

export const disabledExampleData = [
  {
    label: 'Account Status',
    name: 'status',
    type: 'radio',
    options: ['Active', 'Inactive'],
    disabled: true
  }
];

export const fullExampleData = [
  {
    label: 'Are you happy?',
    name: 'happy',
    type: 'radio',
    options: ['Yes', 'No'],
    required: true,
    errorMessage: 'Please select an option.',
    style: {
      gap: '15px'
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