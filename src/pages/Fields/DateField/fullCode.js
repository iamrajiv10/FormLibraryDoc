export const fullExampleFullCode = `import { Form } from "formLibrary";

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

