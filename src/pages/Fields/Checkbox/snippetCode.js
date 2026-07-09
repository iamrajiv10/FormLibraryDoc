export const basicExampleSnippet = `const formData = [
  {
    label: "Accept Terms and Conditions",
    name: "terms",
    type: "checkbox"
  }
];`;

export const basicExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Accept Terms and Conditions",
      name: "terms",
      type: "checkbox"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Accept Terms",
  name: "terms",
  type: "checkbox",
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: "Accept Terms",
    name: "terms",
    type: "checkbox",
    required: true
  }
];`;

export const errorMessageSnippet = `{
  required: true,
  errorMessage: "Please accept the terms"
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: "Accept Terms",
    name: "terms",
    type: "checkbox",
    required: true,
    errorMessage: "Please accept the terms"
  }
];`;

export const disabledSnippet = `{
  disabled: true
}`;

export const disabledFullCode = `const formData = [
  {
    label: "Accept Terms",
    name: "terms",
    type: "checkbox",
    disabled: true
  }
];`;

export const gridSnippet = `{
  grid: {
    md: 6,
    xs: 12
  }
}`;

export const gridFullCode = `const formData = [
  {
    label: "Accept Terms",
    name: "terms",
    type: "checkbox",
    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const styleSnippet = `{
  style: {
    marginTop: "10px"
  }
}`;

export const styleFullCode = `const formData = [
  {
    label: "Receive Updates",
    name: "updates",
    type: "checkbox",
    style: {
      marginTop: "10px"
    }
  }
];`;

export const labelStyleSnippet = `{
  labelStyle: {
    fontWeight: "bold"
  }
}`;

export const labelStyleFullCode = `const formData = [
  {
    label: "Receive Updates",
    name: "updates",
    type: "checkbox",
    labelStyle: {
      fontWeight: "bold"
    }
  }
];`;

export const conditionalSnippet = `{
  label: "Show Additional Details",
  name: "showDetails",
  type: "checkbox"
}`;

export const conditionalFullCode = `const formData = [
  {
    label: "Show Additional Details",
    name: "showDetails",
    type: "checkbox"
  },
  {
    label: "Additional Details",
    name: "details",
    type: "text",
    condition: {
      logic: "AND",
      rules: [
        {
          field: "showDetails",
          operator: "equals",
          value: true
        }
      ]
    }
  }
];`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Accept Terms and Conditions",
    name: "terms",
    type: "checkbox",
    required: true
  },
  {
    label: "Receive Email Updates",
    name: "updates",
    type: "checkbox",
    style: {
      marginTop: "10px"
    }
  }
];`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Accept Terms and Conditions",
      name: "terms",
      type: "checkbox",
      required: true
    },
    {
      label: "Receive Email Updates",
      name: "updates",
      type: "checkbox",
      style: {
        marginTop: "10px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

