export const basicSnippet = `const formData = [
  {
    type: "content",
    content: "Personal Information"
  }
];`;

export const basicFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      type: "content",
      content: "Personal Information"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  type: "content",
  content: "User Details"
}`;

export const requiredFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      type: "content",
      content: "User Details"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const contentStyleFieldSnippet = `{
  type: "content",
  variant: "heading",
  content: "Important",
  style: {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold"
  }
}`;

export const contentStyleFieldFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      type: "content",
      variant: "heading",
      content: "Important",
      style: {
        color: "red",
        fontSize: "20px",
        fontWeight: "bold"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const contentStyleGlobalSnippet = `<Form
  formStyles={{
    content: {
      color: "#333"
    },
    contentHeading: {
      fontSize: "24px",
      fontWeight: "bold"
    },
    contentText: {
      fontSize: "14px"
    }
  }}
/>`;

export const contentStyleGlobalFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      type: "content",
      variant: "heading",
      content: "Personal Details"
    }
  ];

  return (
    <Form
      data={formData}
      formStyles={{
        content: {
          color: "#333"
        },
        contentHeading: {
          fontSize: "24px",
          fontWeight: "bold"
        },
        contentText: {
          fontSize: "14px"
        }
      }}
    />
  );
}

export default Example;`;

export const fullExampleSnippet = `const formData = [
  {
    type: "content",
    variant: "heading",
    content: "Personal Details"
  },
  {
    label: "Full Name",
    name: "name",
    type: "text"
  },
  {
    type: "content",
    variant: "text",
    content: "Please enter information correctly."
  },
  {
    type: "content",
    variant: "heading",
    content: "Address Details"
  },
  {
    label: "Address",
    name: "address",
    type: "textarea"
  }
];`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      type: "content",
      variant: "heading",
      content: "Personal Details"
    },
    {
      label: "Full Name",
      name: "name",
      type: "text"
    },
    {
      type: "content",
      variant: "text",
      content: "Please enter information correctly."
    },
    {
      type: "content",
      variant: "heading",
      content: "Address Details"
    },
    {
      label: "Address",
      name: "address",
      type: "textarea"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

