export const basicSnippet = `const formData = [
  {
    label: "Age",
    name: "age",
    type: "number"
  }
];`;

export const basicFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Age",
  name: "age",
  type: "number",
  required: true
}`;

export const requiredFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const errorMessageSnippet = `{
  label: "Age",
  name: "age",
  type: "number",
  required: true,
  errorMessage: "Please enter your age."
}`;

export const errorMessageFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",
      required: true,
      errorMessage: "Please enter your age."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;


export const disabledSnippet = `{
  label: "Age",
  name: "age",
  type: "number",
  disabled: true
}`;

export const disabledFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const gridSnippet = `{
  label: "Age",
  name: "age",
  type: "number",

  grid: {
    md: 6,
    xs: 12
  }
}`;

export const gridFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",

      grid: {
        md: 6,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const styleSnippet = `{
  label: "Age",
  name: "age",
  type: "number",

  style: {
    borderRadius: "8px",
    borderColor: "#1976d2"
  }
}`;

export const styleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",

      style: {
        borderRadius: "8px",
        borderColor: "#1976d2"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const labelStyleSnippet = `{
  label: "Age",
  name: "age",
  type: "number",

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const labelStyleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Age",
      name: "age",
      type: "number",

      labelStyle: {
        color: "#1976d2",
        fontWeight: "600"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const prefixSnippet = `{
  label:"Price",
  name:"price",
  type:"number",
  prefix:"₹"
}`;

export const prefixFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Price",
      name:"price",
      type:"number",
      prefix:"₹"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;


export const suffixSnippet = `{
  label:"Discount",
  name:"discount",
  type:"number",
  suffix:"%"
}`;

export const suffixFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Discount",
      name:"discount",
      type:"number",
      suffix:"%"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const maxDigitSnippet = `{
    label:"Account Number",
    name:"accountNumber",
    type:"number",
    maxDigits:10
}`;

export const maxDigitFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Account Number",
      name:"accountNumber",
      type:"number",
      maxDigits:10
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const precisionSnippet = `{
    label:"Amount",
    name:"amount",
    type:"number",
    precision:2
}`;

export const precisionFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Amount",
      name:"amount",
      type:"number",
      precision:2
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;


export const stylingFieldSnippet = `{
  label: "Age",
  name: "age",
  type: "number",

  style: {
    borderRadius: "10px",
    padding: "12px"
  }
}`;

export const stylingLabelSnippet = `{
  label: "Age",
  name: "age",
  type: "number",

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`;

export const validationSnippet = `{
  label: "Age",
  name: "age",
  type: "number",
  required: true
}`;

export const validationMessageSnippet = `{
  label: "Age",
  name: "age",
  type: "number",
  required: true,
  errorMessage: "Age is required."
}`;

export const fullExampleSnippet = `const formData = [
  {
    label: "Years of Experience",
    name: "experience",
    type: "number",

    required: true,

    errorMessage: "Please enter your years of experience.",

    maxDigits: 2

    style: {
      borderRadius: "8px"
    },

    labelStyle: {
      color: "#1976d2"
    },

    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const fullExampleCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Years of Experience",
      name: "experience",
      type: "number",

      required: true,

      errorMessage: "Please enter your years of experience.",

      maxDigits: 2
      
      style: {
        borderRadius: "8px"
      },

      labelStyle: {
        color: "#1976d2"
      },

      grid: {
        md: 6,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;