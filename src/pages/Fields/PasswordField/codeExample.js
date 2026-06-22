export const basicSnippet = `const formData = [
  {
    label: "Password",
    name: "password",
    type: "password"
  }
];`;

export const basicFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Password",
  name: "password",
  type: "password",
  required: true
}`;

export const requiredFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Password",
  name: "password",
  type: "password",
  required: true,
  errorMessage: "Please enter your password."
}`;

export const errorMessageFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      errorMessage: "Please enter your password."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;


export const disabledSnippet = `{
  label: "Password",
  name: "password",
  type: "password",
  disabled: true
}`;

export const disabledFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const gridSnippet = `{
  label: "Password",
  name: "password",
  type: "password",

  grid: {
    md: 12,
    xs: 12
  }
}`;

export const gridFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",

      grid: {
        md: 12,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Password",
  name: "password",
  type: "password",

  style: {
    borderRadius: "8px",
    borderColor: "#1976d2"
  }
}`;

export const styleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",

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
  label: "Password",
  name: "password",
  type: "password",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",

      labelStyle: {
        color: "#1976d2",
        fontWeight: "600"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const validationSnippet = `{
  label: "Password",
  name: "password",
  type: "password",
  required: true,
  errorMessage: "Password is required."
}`;

export const validationFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",
      required: true,
      errorMessage: "Password is required."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Password",
    name: "password",
    type: "password",

    required: true,

    errorMessage: "Please enter your password.",

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

export const fullExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Password",
      name: "password",
      type: "password",

      required: true,

      errorMessage: "Please enter your password.",

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