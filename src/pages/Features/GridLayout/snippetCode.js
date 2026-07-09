export const gridLayoutBasicSnippet = `const gridFormData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: { md: 12, xs: 12 }
  }
];

<Form data={gridFormData} />`;

export const gridLayoutBasicFullCode = `import { Form } from 'skemvora';


function Example() {
  const gridFormData = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Address",
      name: "address",
      type: "textarea",
      grid: { md: 12, xs: 12 }
    }
  ];

  return <Form data={gridFormData} />;
}

export default Example;`;

export const gridPropertySnippet = `grid: {
  md: 6,
  xs: 12
}`;

export const gridLayoutFullSnippet = `const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "City",
    name: "city",
    type: "text",
    grid: { md: 4, xs: 12 }
  },
  {
    label: "State",
    name: "state",
    type: "text",
    grid: { md: 4, xs: 12 }
  },
  {
    label: "Country",
    name: "country",
    type: "text",
    grid: { md: 4, xs: 12 }
  }
];

<Form data={formData} />`;

export const gridLayoutFullFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      grid: { md: 6, xs: 12 }
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      grid: { md: 12, xs: 12 }
    },
    {
      label: "Address",
      name: "address",
      type: "textarea",
      grid: { md: 12, xs: 12 }
    },
    {
      label: "City",
      name: "city",
      type: "text",
      grid: { md: 4, xs: 12 }
    },
    {
      label: "State",
      name: "state",
      type: "text",
      grid: { md: 4, xs: 12 }
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      grid: { md: 4, xs: 12 }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

