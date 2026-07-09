export const basicDisabledFieldsSnippet = `const formData = [
 {
  label:"Name",
  name:"name",
  type:"text"
 },
 {
  label:"Email",
  name:"email",
  type:"email",
  disabled:true
 }
];

<Form
  data={formData}
/>`;

export const disabledWithInitialValuesSnippet = `const formData = [
  {
    label:"Email",
    name:"email",
    type:"email",
    disabled:true
  }
];

const initialValues = {
  email:"user@example.com"
};

<Form
  data={formData}
  initialValues={initialValues}
/>`;

export const disabledWithConditionalFormSnippet = `const formData = [
  {
    label:"Company Email",
    name:"companyEmail",
    type:"email",
    disabled:true,
    condition:{
      logic:"AND",
      rules:[
        {
          field:"employed",
          operator:"equals",
          value:"Yes"
        }
      ]
    }
  }
];

<ConditionalForm
  data={formData}
  initialValues={initialValues}
/>`;

export const differentTypesDisabledSnippet = `const formData = [
  { label:"Text Field", name:"textField", type:"text", disabled:true },
  { label:"Select Field", name:"selectField", type:"select", options:["India","USA"], disabled:true },
  { label:"Radio Group", name:"radioGroup", type:"radio", options:["Male","Female"], disabled:true },
  { label:"Checkbox", name:"checkbox", type:"checkbox", disabled:true },
  { label:"Checkbox Group", name:"checkboxGroup", type:"checkboxGroup", options:["Sports","Music","Tech"], disabled:true }
];

<Form data={formData} />`;

export const fullExampleSnippet = `const formData = [
  { label:"Name", name:"name", type:"text" },
  { label:"Email", name:"email", type:"email", disabled:true },
  { label:"Country", name:"country", type:"select", options:["India","USA"] },
  { label:"Account Type", name:"accountType", type:"select", options:["Free","Premium"], disabled:true }
];

const initialValues = {
  name:"John",
  email:"john@gmail.com",
  accountType:"Premium"
};

<Form
  data={formData}
  initialValues={initialValues}
/>`;

