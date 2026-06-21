// Snippets used in the documentation CodeBlock components

export const basicRepeatableSnippet = `
const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      { label: "University Name", name: "university", type: "text" },
      { label: "Institute Name", name: "institute", type: "text" },
      { label: "Passing Year", name: "year", type: "number" }
    ]
  }
];

<Form data={formData} />
`;

export const repeatableUsageSnippet = `
<Form
  data={formData}
/>
`;

export const howItWorksSnippet = `
// User clicks Add
// A new group is created
// User fills values
// User can add more groups
`;

export const addButtonPositionSnippet = `
{
  type: "repeatableGroup",
  name: "education",
  label: "Education",
  addButtonPosition: "header-right",
  fields: [
    { label: "University Name", name: "university", type: "text" },
    { label: "Institute Name", name: "institute", type: "text" },
    { label: "Passing Year", name: "year", type: "number" }
  ]
}
`;

export const deleteButtonPositionSnippet = `
{
  type: "repeatableGroup",
  name: "education",
  label: "Education",
  deleteButtonPosition: "header-right",
  fields: [
    { label: "University Name", name: "university", type: "text" },
    { label: "Institute Name", name: "institute", type: "text" },
    { label: "Passing Year", name: "year", type: "number" }
  ]
}
`;

export const gridLayoutSnippet = `
fields: [
  {
    label: "University",
    name: "university",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Year",
    name: "year",
    type: "number",
    grid: { md: 6, xs: 12 }
  }
]
`;

export const validationSnippet = `
{
  label: "University",
  name: "university",
  type: "text",
  required: true
}
`;

export const initialValuesSnippet = `
<Form
  data={formData}
  initialValues={{
    education: [
      { university: "ABC University", year: 2024 },
      { university: "XYZ University", year: 2022 }
    ]
  }}
/>
`;

export const conditionalRenderingSnippet = `
// Example idea:
// If user selects a specific degreeType, show/hide another field
// (the conditional logic remains inside each repeated group)
`;

export const fullExampleSnippet = `
const repeatableFormData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    addButtonPosition: "header-right",
    deleteButtonPosition: "header-right",
    fields: [
      { label: "University", name: "university", type: "text", grid: { md: 6, xs: 12 } },
      { label: "Institute", name: "institute", type: "text", grid: { md: 6, xs: 12 } },
      { label: "Year", name: "year", type: "number", required: true, grid: { md: 6, xs: 12 } },
      {
        label: "Degree Type",
        name: "degreeType",
        type: "select",
        options: ["Bachelors", "Masters", "PhD"],
        grid: { md: 6, xs: 12 }
      }
    ]
  }
];

<Form data={repeatableFormData} />
`;

