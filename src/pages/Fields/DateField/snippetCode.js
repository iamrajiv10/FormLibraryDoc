export const basicExampleSnippet = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date"
  }
];`;

export const basicExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label: "Date of Birth",
      name: "dateOfBirth",
      type: "date"
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const requiredSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  required: true
}`;

export const requiredFullCode = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    required: true
  }
];`;

export const errorMessageSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  required: true,
  errorMessage: "Please select a date"
}`;

export const errorMessageFullCode = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    required: true,
    errorMessage: "Please select a date"
  }
];`;

export const disabledSnippet = `{
  label: "Date of Birth",
  name: "dateOfBirth",
  type: "date",
  disabled: true
}`;

export const disabledFullCode = `const formData = [
  {
    label: "Date of Birth",
    name: "dateOfBirth",
    type: "date",
    disabled: true
  }
];`;

export const gridSnippet = `{
  label: "Joining Date",
  name: "joiningDate",
  type: "date",

  grid: {
    md: 6,
    xs: 12
  }
}`;

export const gridFullCode = `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",

    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const styleSnippet = `{
  label: "Joining Date",
  name: "joiningDate",
  type: "date",

  style: {
    borderRadius: "8px"
  }
}`;

export const styleFullCode = `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",

    style: {
      borderRadius: "8px"
    }
  }
];`;

export const labelStyleSnippet = `{
  label: "Joining Date",
  name: "joiningDate",
  type: "date",

  labelStyle: {
    fontWeight: "bold"
  }
}`;

export const labelStyleFullCode = `const formData = [
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",

    labelStyle: {
      fontWeight: "bold"
    }
  }
];`;

export const conditionalSnippet = `{
  label: "Joining Date",
  name: "joiningDate",
  type: "date",

  condition: {
    logic: "AND",
    rules: [
      {
        field: "employeeType",
        operator: "equals",
        value: "Full Time"
      }
    ]
  }
}`;

export const conditionalFullCode = `const formData = [
  {
    label: "Employee Type",
    name: "employeeType",
    type: "select",
    options: ["Full Time", "Part Time"]
  },
  {
    label: "Joining Date",
    name: "joiningDate",
    type: "date",

    condition: {
      logic: "AND",
      rules: [
        {
          field: "employeeType",
          operator: "equals",
          value: "Full Time"
        }
      ]
    }
  }
];`;

export const fullExampleSnippet = `const formData=[
  {
    label:"Employee Name",
    name:"employeeName",
    type:"text",
    required:true,
    grid:{
      md:6,
      xs:12
    }
  },
  {
    label:"Joining Date",
    name:"joiningDate",
    type:"date",
    required:true,
    grid:{
      md:6,
      xs:12
    }
  },
  {
    label:"Contract End Date",
    name:"contractEndDate",
    type:"date",
    grid:{
      md:12,
      xs:12
    }
  }
]`;

export const fullExampleFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData=[
    {
      label:"Employee Name",
      name:"employeeName",
      type:"text",
      required:true,
      grid:{
        md:6,
        xs:12
      }
    },
    {
      label:"Joining Date",
      name:"joiningDate",
      type:"date",
      required:true,
      grid:{
        md:6,
        xs:12
      }
    },
    {
      label:"Contract End Date",
      name:"contractEndDate",
      type:"date",
      grid:{
        md:12,
        xs:12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

