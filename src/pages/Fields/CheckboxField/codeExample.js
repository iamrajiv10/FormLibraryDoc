export const basicSnippet = `const formData = [
  {
    label: "I agree to the terms and conditions",
    name: "terms",
    type: "checkbox"
  }
];`;

export const basicFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "I agree to the terms and conditions",
      name: "terms",
      type: "checkbox"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Accept Terms and Conditions",
  name: "terms",
  type: "checkbox",
  required: true
}`;

export const requiredFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Accept Terms and Conditions",
      name: "terms",
      type: "checkbox",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Accept Terms and Conditions",
  name: "terms",
  type: "checkbox",
  required: true,
  errorMessage: "You must accept the terms before continuing."
}`;

export const errorMessageFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Accept Terms and Conditions",
      name: "terms",
      type: "checkbox",
      required: true,
      errorMessage: "You must accept the terms before continuing."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const disabledSnippet = `{
  label: "Email Notifications",
  name: "notifications",
  type: "checkbox",
  disabled: true
}`;

export const disabledFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Email Notifications",
      name: "notifications",
      type: "checkbox",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Remember me",
  name: "remember",
  type: "checkbox",

  style: {
    marginTop: "10px"
  }
}`;

export const styleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Remember me",
      name: "remember",
      type: "checkbox",

      style: {
        marginTop: "10px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const labelStyleSnippet = `{
  label: "Accept Privacy Policy",
  name: "privacy",
  type: "checkbox",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Accept Privacy Policy",
      name: "privacy",
      type: "checkbox",

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
    label: "I agree to receive updates",
    name: "updates",
    type: "checkbox",

    required: true,

    errorMessage: "Please accept this option.",

    style: {
      marginTop: "10px"
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

export const fullExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "I agree to receive updates",
      name: "updates",
      type: "checkbox",

      required: true,

      errorMessage: "Please accept this option.",

      style: {
        marginTop: "10px"
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