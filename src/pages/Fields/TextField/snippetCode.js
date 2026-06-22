export const basicExampleSnippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text"
  }
];`;

export const basicExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const placeholderSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  placeholder: "Enter your name"
}`;

export const placeholderFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Enter your name"
  }
];`;

export const requiredSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  }
];`;

export const errorMessageSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  required: true,
  errorMessage: "Name is required"
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true,
    errorMessage: "Name is required"
  }
];`;

export const disabledSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  disabled: true
}`;

export const disabledFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    disabled: true
  }
];`;

export const initialValuesSnippet = `const initialValues = {
  fullName: "John"
};

<Form data={formData} initialValues={initialValues} />;`;

export const initialValuesFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text"
    }
  ];

  const initialValues = {
    fullName: "John"
  };

  return <Form data={formData} initialValues={initialValues} />;
}

export default Example;`;

export const gridSnippet = `{
  label: "First Name",
  name: "firstName",
  type: "text",
  grid: {
    md: 6,
    xs: 12
  }
}`;

export const gridFullCode = `const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const styleSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  style: {
    borderRadius: "8px"
  }
}`;

export const styleFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    style: {
      borderRadius: "8px"
    }
  }
];`;

export const labelStyleSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  labelStyle: {
    fontWeight: "bold"
  }
}`;

export const labelStyleFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    labelStyle: {
      fontWeight: "bold"
    }
  }
];`;

export const validationSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  required: true
}`;

export const validationFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  }
];`;

export const customValidationSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text",
  required: true,
  errorMessage: "Name is required"
}`;

export const customValidationFullCode = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true,
    errorMessage: "Name is required"
  }
];`;

export const fullExampleSnippet = `const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true,
    placeholder: "Enter first name",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: true,
    placeholder: "Enter last name",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    required: true,
    placeholder: "Enter email",
    grid: { md: 12, xs: 12 }
  }
];`;

export const fullExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true,
      placeholder: "Enter first name",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      required: true,
      placeholder: "Enter last name",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      required: true,
      placeholder: "Enter email",
      grid: { md: 12, xs: 12 }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

