export const basicSnippet = `const validationFormData = [
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

<Form data={validationFormData} />`;

export const basicFullCode = `import { Form } from 'skemvora';


function Example() {
  const validationFormData = [
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

  return <Form data={validationFormData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: 'Email',
  name: 'email',
  type: 'email',
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true
  }
];

<Form data={formData} />`;

export const errorMessageSnippet = `{
  label: 'Email',
  name: 'email',
  type: 'email',
  required: true,
  errorMessage: 'Please enter your email address.'
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    required: true,
    errorMessage: 'Please enter your email address.'
  }
];

<Form data={formData} />`;

export const conditionalSnippet = `const formData = [
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

<ConditionalForm data={formData} />`;

export const conditionalFullCode = `import { ConditionalForm} from 'skemvora';


function Example() {
  const formData = [
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

  return <ConditionalForm data={formData} />;
}

export default Example;`;


export const disabledSnippet = `{
  label: 'Email',
  name: 'email',
  type: 'email',
  disabled: true,
  required: true
}`;

export const disabledFullCode = `const formData = [
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

<Form data={formData} />`;

export const differentTypesSnippet = `const formData = [
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

<Form data={formData} />`;

export const fullExampleSnippet = `const formData = [
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

<Form data={formData} />`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
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

  return <Form data={formData} />;
}

export default Example;`;

