export const disabledFieldsFormData = [
  {
    label: 'Name',
    name: 'name',
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    disabled: true
  }
];

export const disabledFieldsInitialValuesData = {
  initialValues: {
    email: 'user@example.com'
  },
  formData: [
    {
      label: 'Name',
      name: 'name',
      type: 'text'
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      disabled: true
    }
  ]
};

export const disabledFieldsConditionalFormData = {
  initialValues: {
    employed: 'Yes',
    companyEmail: 'company@example.com'
  },
  formData: [
    {
      label: 'Employed?',
      name: 'employed',
      type: 'radio',
      options: ['Yes', 'No']
    },
    {
      label: 'Company Email',
      name: 'companyEmail',
      type: 'email',
      disabled: true,
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
  ]
};

export const disabledDifferentFieldTypesData = [
  {
    label: 'Text Field',
    name: 'textField',
    type: 'text',
    disabled: true
  },
  {
    label: 'Select Field',
    name: 'selectField',
    type: 'select',
    options: ['India', 'USA'],
    disabled: true
  },
  {
    label: 'Radio Group',
    name: 'radioGroup',
    type: 'radio',
    options: ['Male', 'Female'],
    disabled: true
  },
  {
    label: 'Checkbox',
    name: 'checkbox',
    type: 'checkbox',
    disabled: true
  },
  {
    label: 'Checkbox Group',
    name: 'checkboxGroup',
    type: 'checkboxGroup',
    options: ['Sports', 'Music', 'Tech'],
    disabled: true
  }
];

export const disabledFullExampleData = {
  initialValues: {
    name: 'John',
    email: 'john@gmail.com',
    accountType: 'Premium'
  },
  formData: [
    {
      label: 'Name',
      name: 'name',
      type: 'text'
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      disabled: true
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['India', 'USA']
    },
    {
      label: 'Account Type',
      name: 'accountType',
      type: 'select',
      options: ['Free', 'Premium'],
      disabled: true
    }
  ]
};

