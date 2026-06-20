export const basicSnippet = `const formData = [
  {
    label: "Description",
    name: "description",
    type: "textarea"
  }
];`;

export const basicFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Description",
  name: "description",
  type: "textarea",
  required: true
}`;

export const requiredFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Description",
  name: "description",
  type: "textarea",
  required: true,
  errorMessage: "Please enter a description."
}`;

export const errorMessageFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea",
      required: true,
      errorMessage: "Please enter a description."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const disabledSnippet = `{
  label: "Description",
  name: "description",
  type: "textarea",
  disabled: true
}`;

export const disabledFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Description",
  name: "description",
  type: "textarea",

  style: {
    borderRadius: "8px",
    borderColor: "#1976d2"
  }
}`;

export const styleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea",

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
  label: "Description",
  name: "description",
  type: "textarea",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Description",
      name: "description",
      type: "textarea",

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
    label: "Additional Details",
    name: "details",
    type: "textarea",

    required: true,

    errorMessage: "Please provide additional details.",

    style: {
      borderRadius: "8px"
    },

    labelStyle: {
      color: "#1976d2"
    },

    grid: {
      md: 12,
      xs: 12
    }
  }
];`;

export const fullExampleFullCode = `import { Form } from 'formLibrary';

function Example() {
  const formData = [
    {
      label: "Additional Details",
      name: "details",
      type: "textarea",

      required: true,

      errorMessage: "Please provide additional details.",

      style: {
        borderRadius: "8px"
      },

      labelStyle: {
        color: "#1976d2"
      },

      grid: {
        md: 12,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;