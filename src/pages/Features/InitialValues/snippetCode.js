export const basicExampleSnippet = `const initialValues = {
  firstName:"John",
  email:"john@example.com",
  age:25
};

<Form
  data={formData}
  initialValues={initialValues}
/>`;

export const basicExampleFullCode = `import { Form } from 'skemvora';


export default function Example() {
  const formData = [
    { label:"First Name", name:"firstName", type:"text" },
    { label:"Email", name:"email", type:"email" },
    { label:"Age", name:"age", type:"number" }
  ];

  const initialValues = {
    firstName:"John",
    email:"john@example.com",
    age:25
  };

  return (
    <Form
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

export const conditionalExampleSnippet = `const initialValues = {
  employed:"Yes",
  companyName:"Acme Inc."
};

<ConditionalForm
  data={formData}
  initialValues={initialValues}
/>`;

export const conditionalExampleFullCode = `import { ConditionalForm} from 'skemvora';


export default function Example() {
  const formData = [
    {
      label:"Are you employed?",
      name:"employed",
      type:"radio",
      options:["Yes","No"]
    },
    {
      label:"Company Name",
      name:"companyName",
      type:"text",
      condition:{
        logic:"AND",
        rules:[
          { field:"employed", operator:"equals", value:"Yes" }
        ]
      }
    }
  ];

  const initialValues = {
    employed:"Yes",
    companyName:"Acme Inc."
  };

  return (
    <ConditionalForm
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

export const fullExampleSnippet = `const initialValues = {
  name:"Rajiv",
  email:"rajiv@gmail.com",
  country:"India",
  gender:"Male"
};

<Form
  data={formData}
  initialValues={initialValues}
/>`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


export default function Example() {
  const formData = [
    { label:"Name", name:"name", type:"text" },
    { label:"Email", name:"email", type:"email" },
    {
      label:"Country",
      name:"country",
      type:"select",
      options:["India","USA"]
    },
    {
      label:"Gender",
      name:"gender",
      type:"radio",
      options:["Male","Female"]
    }
  ];

  const initialValues = {
    name:"Rajiv",
    email:"rajiv@gmail.com",
    country:"India",
    gender:"Male"
  };

  return (
    <Form
      data={formData}
      initialValues={initialValues}
    />
  );
}`;

