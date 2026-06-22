export const basicExampleSnippet = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email"
  }
];`;

export const basicExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Email Address",
      name: "email",
      type: "email"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true
  }
];`;

export const errorMessageSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true,
  errorMessage: "Please enter your email address."
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    errorMessage: "Please enter your email address."
  }
];`;

export const valueSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
}`;

export const valueFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
  }
];`;

export const disabledSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  disabled: true
}`;

export const disabledFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    disabled: true
  }
];`;

export const gridSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",

  grid: {
    md: 12,
    xs: 12
  }
}`;

export const gridFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",

    grid: {
      md: 12,
      xs: 12
    }
  }
];`;

export const styleSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",

  style: {
    borderColor: "#1976d2",
    borderRadius: "8px"
  }
}`;

export const styleFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",

    style: {
      borderColor: "#1976d2",
      borderRadius: "8px"
    }
  }
];`;

export const labelStyleSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",

    labelStyle: {
      color: "#1976d2",
      fontWeight: "600"
    }
  }
];`;

export const fieldStylingSnippet = `{
  label: "Work Email",
  name: "workEmail",
  type: "email",

  style: {
    borderRadius: "10px",
    padding: "12px"
  }
}`;

export const fieldStylingFullCode = `const formData = [
  {
    label: "Work Email",
    name: "workEmail",
    type: "email",

    style: {
      borderRadius: "10px",
      padding: "12px"
    }
  }
];`;

export const labelStylingSnippet = `{
  label: "Work Email",
  name: "workEmail",
  type: "email",

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`;

export const labelStylingFullCode = `const formData = [
  {
    label: "Work Email",
    name: "workEmail",
    type: "email",

    labelStyle: {
      color: "#1565c0",
      fontWeight: "bold"
    }
  }
];`;

export const validationSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true
}`;

export const validationFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true
  }
];`;

export const customValidationSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true,
  errorMessage: "Email address is required."
}`;

export const customValidationFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true,
    errorMessage: "Email address is required."
  }
];`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",

    required: true,

    errorMessage: "Please enter your email address.",

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
      label: "Email Address",
      name: "email",
      type: "email",

      required: true,

      errorMessage: "Please enter your email address.",

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