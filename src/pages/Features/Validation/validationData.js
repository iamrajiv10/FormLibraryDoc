export const validationFormData = [
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    required: true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
    errorMessage: 'Please enter your email address.'
  }
];

export const requiredValidationFormData = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true
  }
];

export const conditionalValidationFormData = [
  {
    label: 'Are you employed?',
    name: 'employed',
    type: 'radio',
    options: ['Yes', 'No'],
    required: true
  },
  {
    label: 'Company Name',
    name: 'companyName',
    type: 'text',
    required: true,
    condition: {
      logic: 'AND',
      rules: [
        {
          field: 'employed',
          operator: 'equals',
          value: 'Yes'
        }
      ]
    }
  }
];

export const disabledValidationFormData = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    disabled: true,
    required: true
  },
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    required: true
  }
];

export const differentTypesValidationFormData = [
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    required: true
  },
  {
    label: 'Country',
    name: 'country',
    type: 'select',
    options: ['India', 'USA'],
    required: true
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'radio',
    options: ['Male', 'Female'],
    required: true
  },
  {
    label: 'Accept Terms',
    name: 'terms',
    type: 'checkbox',
    required: true
  },
  {
    label: 'Select Interests',
    name: 'interests',
    type: 'checkboxGroup',
    options: ['Sports', 'Music', 'Tech'],
    required: true
  }
];

export const fullValidationFormData = [
  {
    label: 'Full Name',
    name: 'fullName',
    type: 'text',
    required: true
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
    errorMessage: 'Email is required.'
  },
  {
    label: 'Country',
    name: 'country',
    type: 'select',
    options: ['India', 'USA'],
    required: true
  },
  {
    label: 'Accept Terms',
    name: 'terms',
    type: 'checkbox',
    required: true
  }
];

