export const basicDisabledFieldsFullCode = `import { Form } from "formLibrary";

export default function Example() {
  const formData = [
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

  return (
    <Form
      data={formData}
    />
  );
}`;

export const disabledWithInitialValuesFullCode = `import { Form } from "formLibrary";

export default function Example() {
  const formData = [
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

  return (
    <Form
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

export const disabledWithConditionalFormFullCode = `import { ConditionalForm } from "formLibrary";

export default function Example() {
  const initialValues = {
    employed: "Yes",
    companyEmail: "company@example.com"
  };

  const formData = [
    {
      label:"Employed?",
      name:"employed",
      type:"radio",
      options:["Yes","No"]
    },
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

  return (
    <ConditionalForm
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

export const differentTypesDisabledFullCode = `import { Form } from "formLibrary";

export default function Example() {
  const formData = [
    { label:"Text Field", name:"textField", type:"text", disabled:true },
    { label:"Select Field", name:"selectField", type:"select", options:["India","USA"], disabled:true },
    { label:"Radio Group", name:"radioGroup", type:"radio", options:["Male","Female"], disabled:true },
    { label:"Checkbox", name:"checkbox", type:"checkbox", disabled:true },
    { label:"Checkbox Group", name:"checkboxGroup", type:"checkboxGroup", options:["Sports","Music","Tech"], disabled:true }
  ];

  return <Form data={formData} />;
}`;

export const fullDisabledFieldsFullCode = `import { Form } from "formLibrary";

export default function Example() {
  const formData = [
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

  return (
    <Form
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

export const fullDisabledPropsData = [
  {
    property: 'disabled',
    type: 'boolean',
    required: false,
    description: 'Prevent users from interacting with the field (value remains visible/preserved).'
  }
];

