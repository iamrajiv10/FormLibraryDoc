export const basicSnippet = `const formData = [
  {
    label: "Select Skills",
    name: "skills",
    type: "checkboxGroup",
    options: ["React", "JavaScript", "CSS"]
  }
];`;

export const basicFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Skills",
      name: "skills",
      type: "checkboxGroup",
      options: ["React", "JavaScript", "CSS"]
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Select Skills",
  name: "skills",
  type: "checkboxGroup",
  options: ["React", "JavaScript", "Node.js"],
  required: true
}`;

export const requiredFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Skills",
      name: "skills",
      type: "checkboxGroup",
      options: ["React", "JavaScript", "Node.js"],
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Select Skills",
  name: "skills",
  type: "checkboxGroup",
  options: ["React", "JavaScript"],
  required: true,
  errorMessage: "Please select at least one skill."
}`;

export const errorMessageFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Skills",
      name: "skills",
      type: "checkboxGroup",
      options: ["React", "JavaScript"],
      required: true,
      errorMessage: "Please select at least one skill."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const disabledSnippet = `{
  label: "Selected Features",
  name: "features",
  type: "checkboxGroup",
  options: ["Feature 1", "Feature 2"],
  disabled: true
}`;

export const disabledFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Selected Features",
      name: "features",
      type: "checkboxGroup",
      options: ["Feature 1", "Feature 2"],
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Select Options",
  name: "options",
  type: "checkboxGroup",
  options: ["Option 1", "Option 2"],
  style: {
    gap: "15px"
  }
}`;

export const styleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Options",
      name: "options",
      type: "checkboxGroup",
      options: ["Option 1", "Option 2"],
      style: {
        gap: "15px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const labelStyleSnippet = `{
  label: "Select Options",
  name: "options",
  type: "checkboxGroup",
  options: ["Option 1", "Option 2"],
  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Options",
      name: "options",
      type: "checkboxGroup",
      options: ["Option 1", "Option 2"],
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
    label: "Select Technologies",
    name: "technologies",
    type: "checkboxGroup",
    options: ["React", "Node.js", "MongoDB"],
    required: true,
    errorMessage: "Please select at least one technology.",
    style: {
      gap: "15px"
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
      label: "Select Technologies",
      name: "technologies",
      type: "checkboxGroup",
      options: ["React", "Node.js", "MongoDB"],
      required: true,
      errorMessage: "Please select at least one technology.",
      style: {
        gap: "15px"
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