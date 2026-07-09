export const initialValuesExampleData = {
  initialValues: {
    firstName: 'John',
    email: 'john@example.com',
    age: 25,
  },
  formData: [
    {
      label: 'First Name',
      name: 'firstName',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Age',
      name: 'age',
      type: 'number',
    },
  ],
};

export const conditionalInitialValuesData = {
  initialValues: {
    employed: 'Yes',
    companyName: 'Acme Inc.',
  },
  formData: [
    {
      label: 'Are you employed?',
      name: 'employed',
      type: 'radio',
      options: ['Yes', 'No'],
    },
    {
      label: 'Company Name',
      name: 'companyName',
      type: 'text',
      condition: {
        logic: 'AND',
        rules: [
          {
            field: 'employed',
            operator: 'equals',
            value: 'Yes',
          },
        ],
      },
    },
  ],
};

export const fullInitialValuesData = {
  initialValues: {
    name: 'Rajiv',
    email: 'rajiv@gmail.com',
    country: 'India',
    gender: 'Male',
  },
  formData: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      label: 'Country',
      name: 'country',
      type: 'select',
      options: ['India', 'USA'],
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'radio',
      options: ['Male', 'Female'],
    },
  ],
};

