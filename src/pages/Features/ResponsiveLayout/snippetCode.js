// Snippets used in the documentation CodeBlock components

export const basicResponsiveSnippet = `const formData = [
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
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: {
      md: 12,
      xs: 12
    }
  }
]

<Form data={formData} />`;

export const responsiveRowsSnippet = `{
  label: "First Name",
  name: "firstName",
  type: "text",
  grid: { md: 6, xs: 12 }
}

{
  label: "Last Name",
  name: "lastName",
  type: "text",
  grid: { md: 6, xs: 12 }
}

{
  label: "Email",
  name: "email",
  type: "email",
  grid: { md: 12, xs: 12 }
}

{
  label: "City",
  name: "city",
  type: "text",
  grid: { md: 4, xs: 12 }
}

{
  label: "State",
  name: "state",
  type: "text",
  grid: { md: 4, xs: 12 }
}

{
  label: "Country",
  name: "country",
  type: "text",
  grid: { md: 4, xs: 12 }
}`;

export const conditionalFormResponsiveSnippet = `{
  label: "Company Name",
  name: "companyName",
  type: "text",
  grid: {
    md: 6,
    xs: 12
  },
  condition: {
    logic: "AND",
    rules: [
      {
        field: "employed",
        operator: "equals",
        value: "Yes"
      }
    ]
  }
}`;

export const repeatableGroupResponsiveSnippet = `{
  fields: [
    {
      label: "University",
      name: "university",
      type: "text",
      grid: {
        md: 6,
        xs: 12
      }
    }
  ]
}`;

export const defaultMobileBehaviorSnippet = `// If xs is not provided:
grid: {
  md: 6
}

// The library automatically treats it as:
// xs: 12
`;

export const fullResponsiveExampleSnippet = `const formData = [
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
    type: "email",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "Phone",
    name: "phone",
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
]

<Form data={formData} />`;

