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

<Form data={formData} />`;

export const basicExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
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

  return <Form data={formData} />;
}

export default Example;`;

export const multipleConditionsSnippet = `condition: {
  logic: "AND",
  rules: [
    {
      field: "selectedOptions",
      operator: "includes",
      value: "Option 2"
    },
    {
      field: "selectedOptions",
      operator: "includes",
      value: "Option 3"
    }
  ]
}`;

export const multipleConditionsFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Select Options",
      name: "selectedOptions",
      type: "checkboxGroup",
      options: ["Option 1", "Option 2", "Option 3"]
    },
    {
      label: "Additional Details",
      name: "details",
      type: "textarea",
      condition: {
        logic: "AND",
        rules: [
          {
            field: "selectedOptions",
            operator: "includes",
            value: "Option 2"
          },
          {
            field: "selectedOptions",
            operator: "includes",
            value: "Option 3"
          }
        ]
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const conditionPropertySnippet = `condition: {
  logic: "AND",
  rules: [
    {
      field: "employed",
      operator: "equals",
      value: "Yes"
    }
  ]
}`;

export const rulesPropertySnippet = `rules: [
  {
    field: "employed",
    operator: "equals",
    value: "Yes"
  }
]`;

export const fullExampleSnippet = `const formData = [
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
  },
  {
    label: "Select benefits",
    name: "benefits",
    type: "checkbox-group",
    options: ["Health Insurance", "Travel Insurance", "Dental Insurance"]
  },
  {
    label: "Additional Details",
    name: "additionalDetails",
    type: "textarea",
    condition: {
      logic: "AND",
      rules: [
        {
          field: "benefits",
          operator: "includes",
          value: "Health Insurance"
        },
        {
          field: "benefits",
          operator: "includes",
          value: "Travel Insurance"
        }
      ]
    }
  }
];

<Form data={formData} />`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
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
    },
    {
      label: "Select benefits",
      name: "benefits",
      type: "checkbox-group",
      options: ["Health Insurance", "Travel Insurance", "Dental Insurance"]
    },
    {
      label: "Additional Details",
      name: "additionalDetails",
      type: "textarea",
      condition: {
        logic: "AND",
        rules: [
          {
            field: "benefits",
            operator: "includes",
            value: "Health Insurance"
          },
          {
            field: "benefits",
            operator: "includes",
            value: "Travel Insurance"
          }
        ]
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;
