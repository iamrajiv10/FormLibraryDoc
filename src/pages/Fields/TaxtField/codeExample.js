/* ==========================================
   BASIC EXAMPLE
========================================== */

export const example1Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text"
  }
];`;

export const example1FullCode = `import { Form } from 'skemvora';


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

/* ==========================================
   REQUIRED FIELD
========================================== */

export const example2Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  }
];`;

export const example2FullCode = `import { Form } from 'skemvora';


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

/* ==========================================
   CUSTOM ERROR MESSAGE
========================================== */

export const example3Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true,
    errorMessage: "Please enter your full name."
  }
];`;

export const example3FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      required: true,
      errorMessage: "Please enter your full name."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   INITIAL VALUE
========================================== */

export const example4Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    value: "John Doe"
  }
];`;

export const example4FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",
      value: "John Doe"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   DISABLED FIELD
========================================== */

export const example5Snippet = `const formData = [
  {
    label: "Employee ID",
    name: "employeeId",
    type: "text",
    value: "EMP001",
    disabled: true
  }
];`;

export const example5FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Employee ID",
      name: "employeeId",
      type: "text",
      value: "EMP001",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   FIELD STYLING
========================================== */

export const example6Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",

    style: {
      borderColor: "#1976d2",
      borderRadius: "8px"
    }
  }
];`;

export const example6FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",

      style: {
        borderColor: "#1976d2",
        borderRadius: "8px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   LABEL STYLING
========================================== */

export const example7Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",

    labelStyle: {
      color: "#1976d2",
      fontWeight: "600"
    }
  }
];`;

export const example7FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",

      labelStyle: {
        color: "#1976d2",
        fontWeight: "600"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   COMBINED EXAMPLE
========================================== */

export const example8Snippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",

    required: true,

    value: "John Doe",

    style: {
      borderRadius: "8px"
    },

    labelStyle: {
      color: "#1976d2"
    }
  }
];`;

export const example8FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Full Name",
      name: "fullName",
      type: "text",

      required: true,

      value: "John Doe",

      style: {
        borderRadius: "8px"
      },

      labelStyle: {
        color: "#1976d2"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   REGISTRATION FORM
========================================== */

export const example9Snippet = `const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    required: true
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    required: true
  }
];`;

export const example9FullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      required: true
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

/* ==========================================
   CONFIGURATION SNIPPET
========================================== */

export const configurationSnippet = `{
  label: "Full Name",
  name: "fullName",
  type: "text"
}`;

export const configurationFullCode = configurationSnippet;

/* ==========================================
   SUBMITTED DATA
========================================== */

export const submittedDataSnippet = `{
  fullName: "John Doe"
}`;

export const submittedDataFullCode = submittedDataSnippet;

/* ==========================================
   GRID LAYOUT
========================================== */

export const gridLayoutSnippet = `[
  {
    label: "First Name",
    name: "firstName",
    type: "text",

    grid: {
      md: 6,
      xs: 12
    }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",

    grid: {
      md: 6,
      xs: 12
    }
  }
]`;

export const gridLayoutFullCode = gridLayoutSnippet;