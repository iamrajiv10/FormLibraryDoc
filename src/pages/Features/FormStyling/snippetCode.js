// Snippets shown in the documentation CodeBlock components

export const basicStylingSnippet = `
<Form
  data={formData}
  formStyles={{
    label: {
      color: "blue"
    },
    field: {
      borderRadius: "10px"
    },
    gap: "20px"
  }}
/>
`;

export const globalStylingSnippet = `
formStyles={{
  label: {
    color: "#333",
    fontWeight: "600"
  },
  field: {
    borderColor: "#1976d2"
  },
  gap: "20px"
}}
`;

export const fieldLevelSnippet = `
{
  label: "Email",
  name: "email",
  type: "email",
  style: {
    borderColor: "green",
    borderRadius: "8px"
  }
}
`;

export const labelStylingSnippet = `
{
  label: "Email",
  name: "email",
  type: "email",
  labelStyle: {
    color: "purple",
    fontWeight: "bold"
  }
}
`;

export const prioritySnippet = `
// Global styles
formStyles={{
  field: { borderColor: "blue" }
}}

// Field styles override global
{
  name: "email",
  type: "email",
  style: { borderColor: "green" }
}
`;

export const labelAndGridSnippet = `
{
  label: "First Name",
  name: "firstName",
  type: "text",
  grid: {
    md: 6,
    xs: 12
  },
  style: {
    borderRadius: "10px"
  }
}
`;

export const conditionalFormSnippet = `
{
  label: "Company Name",
  name: "companyName",
  type: "text",
  condition: {
    logic: "AND",
    rules: [
      {
        field: "employed",
        operator: "equals",
        value: "Yes"
      }
    ]
  },
  style: {
    borderColor: "green"
  }
}
`;

export const fullExampleSnippet = `
const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text"
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text"
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    style: {
      borderColor: "green"
    }
  }
];

<Form
  data={formData}
  formStyles={{
    label: {
      color: "#1976d2"
    },
    gap: "20px"
  }}
/>
`;

