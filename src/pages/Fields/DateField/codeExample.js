export const basicSnippet = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date"
  }
];`;

export const basicFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  required: true
}`;

export const requiredFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  required: true,
  errorMessage: "Please select your date of birth."
}`;

export const errorMessageFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",
      required: true,
      errorMessage: "Please select your date of birth."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const disabledSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  disabled: true
}`;

export const disabledFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",

  style: {
    borderRadius: "8px",
    borderColor: "#1976d2"
  }
}`;

export const styleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",

      style: {
        borderRadius: "8px",
        borderColor: "#1976d2"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const labelStyleSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",

      labelStyle: {
        color: "#1976d2",
        fontWeight: "600"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date",

    required: true,

    errorMessage: "Please select your date of birth.",

    style: {
      borderRadius: "8px"
    },

    labelStyle: {
      color: "#1976d2"
    },

    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const fullExampleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date",

      required: true,

      errorMessage: "Please select your date of birth.",

      style: {
        borderRadius: "8px"
      },

      labelStyle: {
        color: "#1976d2"
      },

      grid: {
        md: 6,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;