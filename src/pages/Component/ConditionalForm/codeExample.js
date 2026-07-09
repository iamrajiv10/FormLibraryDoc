/* ==========================================
   IMPORT
========================================== */

export const importSnippet = `import { ConditionalForm} from 'skemvora';
`;

export const importFullCode = importSnippet;

/* ==========================================
   BASIC EXAMPLE
========================================== */

export const basicExampleSnippet = `const formData = [
  {
    label: "Are you employed?",
    name: "employed",
    type: "radio",
    options: ["Yes", "No"]
  },
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
    }
  }
];

<ConditionalForm data={formData} />`;

export const basicExampleFullCode = basicExampleSnippet;

/* ==========================================
   CONDITION STRUCTURE
========================================== */

export const conditionStructureSnippet = `condition: {
  logic: "AND",
  rules: [
    {
      field: "employed",
      operator: "equals",
      value: "Yes"
    }
  ]
}`;

export const conditionStructureFullCode =
  conditionStructureSnippet;

/* ==========================================
   SINGLE RULE EXAMPLE
========================================== */

export const singleRuleSnippet = `{
  field: "employmentStatus",
  operator: "equals",
  value: "Employed"
}`;

export const singleRuleFullCode =
  singleRuleSnippet;

/* ==========================================
   AND LOGIC
========================================== */

export const andLogicSnippet = `condition: {
  logic: "AND",
  rules: [
    {
      field: "employed",
      operator: "equals",
      value: "Yes"
    },
    {
      field: "ageGroup",
      operator: "equals",
      value: "Adult"
    }
  ]
}`;

export const andLogicFullCode = andLogicSnippet;

/* ==========================================
   OR LOGIC
========================================== */

export const orLogicSnippet = `condition: {
  logic: "OR",
  rules: [
    {
      field: "student",
      operator: "equals",
      value: "Yes"
    },
    {
      field: "employee",
      operator: "equals",
      value: "Yes"
    }
  ]
}`;

export const orLogicFullCode = orLogicSnippet;

/* ==========================================
   CHECKBOX GROUP FIELD
========================================== */

export const checkboxGroupFieldSnippet = `{
  label: "Skills",
  name: "skills",
  type: "checkboxGroup",
  options: [
    "React",
    "Node.js",
    "Python"
  ]
}`;

export const checkboxGroupFieldFullCode =
  checkboxGroupFieldSnippet;

/* ==========================================
   CHECKBOX CONDITION
========================================== */

export const checkboxConditionSnippet = `{
  label: "Years of React Experience",
  name: "reactExperience",
  type: "number",

  condition: {
    logic: "AND",
    rules: [
      {
        field: "skills",
        operator: "includes",
        value: "React"
      }
    ]
  }
}`;

export const checkboxConditionFullCode =
  checkboxConditionSnippet;

/* ==========================================
   MULTIPLE CHECKBOX CONDITIONS
========================================== */

export const multipleCheckboxSnippet = `condition: {
  logic: "AND",
  rules: [
    {
      field: "skills",
      operator: "includes",
      value: "React"
    },
    {
      field: "skills",
      operator: "includes",
      value: "Node.js"
    }
  ]
}`;

export const multipleCheckboxFullCode =
  multipleCheckboxSnippet;

/* ==========================================
   GRID LAYOUT
========================================== */

export const gridLayoutSnippet = `{
  label: "Employment Status",
  name: "employed",
  type: "radio",

  grid: {
    md: 6,
    xs: 12
  }
}

{
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

export const gridLayoutFullCode =
  gridLayoutSnippet;

/* ==========================================
   VALIDATION
========================================== */

export const validationSnippet = `{
  label: "Company Name",
  required: true,

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

export const validationFullCode =
  validationSnippet;

/* ==========================================
   VISIBLE FIELD VALIDATION
========================================== */

export const validationExplanationSnippet = `If the field is hidden,
validation is skipped.

If the field becomes visible,
validation is automatically enforced.`;

export const validationExplanationFullCode =
  validationExplanationSnippet;

/* ==========================================
   FEATURE COMBINATION EXAMPLES
========================================== */

export const conditionalValidationSnippet = `{
  label: "Company Name",
  required: true,

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

export const conditionalValidationFullCode =
  conditionalValidationSnippet;

export const conditionalGridSnippet = `{
  label: "Company Name",
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

export const conditionalGridFullCode =
  conditionalGridSnippet;

export const conditionalInitialValueSnippet = `{
  label: "Company Name",
  name: "companyName",
  type: "text",
  value: "OpenAI",

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

export const conditionalInitialValueFullCode =
  conditionalInitialValueSnippet;

/* ==========================================
   DEPENDENCY CHAIN EXAMPLE
========================================== */

export const dependencyChainSnippet = `Field A controls Field B

Field B controls Field C

Field C controls Field D`;

export const dependencyChainFullCode =
  dependencyChainSnippet;