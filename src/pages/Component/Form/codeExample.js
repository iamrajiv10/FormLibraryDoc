export const importSnippet = `import { Form } from "formLibrary";`;

export const importFullCode = importSnippet;

/* ==========================================
   BASIC EXAMPLE
========================================== */

export const basicExampleSnippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female"]
  }
];

<Form data={formData} />`;

export const basicExampleFullCode = basicExampleSnippet;

/* ==========================================
   FIELD CONFIGURATION
========================================== */

export const fieldConfigurationSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true
}`;

export const fieldConfigurationFullCode =
  fieldConfigurationSnippet;

/* ==========================================
   FORM SUBMISSION
========================================== */

export const submitSnippet = `const handleSubmit = (formValues) => {
  console.log(formValues);
};

<Form
  data={formData}
  onSubmit={handleSubmit}
/>`;

export const submitFullCode = submitSnippet;

export const submitResponseSnippet = `{
  fullName: "John Doe",
  email: "john@example.com",
  password: "secret123",
  gender: "Male"
}`;

export const submitResponseFullCode =
  submitResponseSnippet;

/* ==========================================
   ON CHANGE
========================================== */

export const onChangeSnippet = `const handleChange = (formValues) => {
  console.log(formValues);
};

<Form
  data={formData}
  onChange={handleChange}
/>`;

export const onChangeFullCode = onChangeSnippet;

/* ==========================================
   REQUIRED VALIDATION
========================================== */

export const validationSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true
}`;

export const validationFullCode = validationSnippet;

/* ==========================================
   INITIAL VALUES
========================================== */

export const initialValueSnippet = `{
  label: "Country",
  name: "country",
  type: "text",
  value: "India"
}`;

export const initialValueFullCode =
  initialValueSnippet;

/* ==========================================
   DISABLED FIELD
========================================== */

export const disabledFieldSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  value: "john@example.com",
  disabled: true
}`;

export const disabledFieldFullCode =
  disabledFieldSnippet;

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

export const gridLayoutFullCode =
  gridLayoutSnippet;

/* ==========================================
   GLOBAL STYLING
========================================== */

export const globalStylingSnippet = `<Form
  data={formData}
  globalStyles={{
    labelColor: "#333",
    fieldBorderColor: "#1976d2",
    labelGap: "8px",
    fieldGap: "20px"
  }}
/>`;

export const globalStylingFullCode =
  globalStylingSnippet;

/* ==========================================
   FIELD LEVEL STYLING
========================================== */

export const fieldLevelStylingSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",

  style: {
    borderColor: "green"
  },

  labelStyle: {
    color: "green"
  }
}`;

export const fieldLevelStylingFullCode =
  fieldLevelStylingSnippet;

/* ==========================================
   CUSTOM BUTTONS
========================================== */

export const customButtonsSnippet = `const buttons = [
  {
    label: "Back",
    type: "button"
  },
  {
    label: "Next",
    type: "submit"
  }
];

<Form
  data={formData}
  buttons={buttons}
/>`;

export const customButtonsFullCode =
  customButtonsSnippet;

/* ==========================================
   DEFAULT ERROR MESSAGE
========================================== */

export const defaultErrorSnippet = `"This is a required field."`;

export const defaultErrorFullCode =
  defaultErrorSnippet;