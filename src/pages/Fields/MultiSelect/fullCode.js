export const fullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Select Skills",
      name:"skills",
      type:"multiselect",
      options:[
        "React",
        "JavaScript",
        "Node.js",
        "CSS"
      ]
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

