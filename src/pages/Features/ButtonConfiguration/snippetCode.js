// Snippets used in the documentation CodeBlock components

export const basicButtonsSnippet = `
<Form
  data={formData}
  buttons={[
    {
      label: "Back",
      onClick: handleBack
    },
    {
      label: "Submit",
      type: "submit"
    }
  ]}
  buttonContainerStyle={{ 
    display: "flex", gap: "12px", justifyContent: "space-between", marginTop: "12px" 
  }}
/>
`;

export const defaultSubmitSnippet = `
<Form data={formData} />
`;

export const customButtonsSnippet = `
<Form
  data={formData}
  buttons={[
    {
      label: "Back",
      onClick: handleBack
    },
    {
      label: "Save Later",
      onClick: saveLater
    },
    {
      label: "Submit",
      type: "submit"
    }
  ]}
/>
`;

export const submitButtonSnippet = `
{
  label: "Submit",
  type: "submit"
}
`;

export const customActionButtonSnippet = `
{
  label: "Save Later",
  onClick: saveLater
}
`;

export const buttonLayoutSnippet = `
<Form
  data={formData}
  buttons={[
    { label: "Back", onClick: handleBack },
    { label: "Next", type: "submit" }
  ]}
  buttonsStyle={{
    display: "flex",
    justifyContent: "space-between"
  }}
/>
`;

export const buttonStylingSnippet = `
{
  label: "Submit",
  type: "submit",
  style: {
    borderRadius: "8px"
  }
}
`;

export const validationFlowSnippet = `
{
  label: "Submit",
  type: "submit"
}
`;

export const conditionalFormButtonsSnippet = `
<Form
  data={formData}
  buttons={[
    { label: "Back", onClick: handleBack },
    { label: "Submit", type: "submit" }
  ]}
/>
`;

export const fullExampleSnippet = `
<Form
  data={formData}
  buttons={[
    { label: "Back", onClick: handleBack },
    { label: "Save & Complete Later", onClick: saveLater },
    { label: "Submit", type: "submit" }
  ]}
/>
`;

