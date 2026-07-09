export const basicExampleSnippet = `const formData = [ 
 { 
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] 
 } 
];`;

export const basicExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Country", 
      name: "country", 
      type: "select", 
      options: [ "India", "USA", "Canada" ] 
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;


export const optionSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
}`;

export const optionFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
  }
];`;


export const requiredSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
    required: true
  }
];`;

export const errorMessageSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
  required: true,
  errorMessage: "Please select your country."
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
    required: true,
    errorMessage: "Please select your country."
  }
];`;


export const valueFullCode = `const formData = [
  {
    label: "Email Address",
    name: "email",
    type: "email",
  }
];`;

export const disabledSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
  disabled: true
}`;

export const disabledFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
    disabled: true
  }
];`;

export const gridSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,

  grid: {
    md: 12,
    xs: 12
  }
}`;

export const gridFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    grid: {
      md: 12,
      xs: 12
    }
  }
];`;

export const styleSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,

  style: {
    borderColor: "#1976d2",
    borderRadius: "8px"
  }
}`;

export const styleFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    style: {
      borderColor: "#1976d2",
      borderRadius: "8px"
    }
  }
];`;

export const labelStyleSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    labelStyle: {
      color: "#1976d2",
      fontWeight: "600"
    }
  }
];`;

export const fieldStylingSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,

  style: {
    borderRadius: "10px",
    padding: "12px"
  }
}`;

export const fieldStylingFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    style: {
      borderRadius: "10px",
      padding: "12px"
    }
  }
];`;

export const labelStylingSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`;

export const labelStylingFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    labelStyle: {
      color: "#1565c0",
      fontWeight: "bold"
    }
  }
];`;

export const validationSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
  required: true
}`;

export const validationFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
    required: true
  }
];`;

export const customValidationSnippet = `{
  label: "Country", 
  name: "country", 
  type: "select", 
  options: [ "India", "USA", "Canada" ] ,
  required: true,
  errorMessage: "Country is required."
}`;

export const customValidationFullCode = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,
    required: true,
    errorMessage: "Country is required."
  }
];`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Country", 
    name: "country", 
    type: "select", 
    options: [ "India", "USA", "Canada" ] ,

    required: true,

    errorMessage: "Please select a country.",

    style: {
      borderRadius: "8px"
    },

    labelStyle: {
      color: "#1976d2"
    },

    grid: {
      md: 12,
      xs: 12
    }
  }
];`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Country", 
      name: "country", 
      type: "select", 
      options: [ "India", "USA", "Canada" ] ,

      required: true,

      errorMessage: "Please select a country.",

      style: {
        borderRadius: "8px"
      },

      labelStyle: {
        color: "#1976d2"
      },

      grid: {
        md: 12,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;