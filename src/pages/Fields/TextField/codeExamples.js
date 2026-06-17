export const example1Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text"
  }
];`;

export const example1FullCode = `import { Form } from "formLibrary";

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

export const example2Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  }
];`;

export const example2FullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const example3Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    disabled: true,
    value: "John Doe"
  }
];`;

export const example3FullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      disabled: true,
      value: "John Doe"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const example4Snippet = `const formData = [
  {
    label: "Country",
    name: "country",
    type: "text",
    value: "India"
  }
];`;

export const example4FullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Country",
      name: "country",
      type: "text",
      value: "India"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const example5Snippet = `const formData = [
  {
    label: "Email",
    name: "email",
    type: "text",
    style: {
      borderColor: "green"
    },
    labelStyle: {
      color: "green"
    }
  }
];`;

export const example5FullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Email",
      name: "email",
      type: "text",
      style: {
        borderColor: "green"
      },
      labelStyle: {
        color: "green"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;
