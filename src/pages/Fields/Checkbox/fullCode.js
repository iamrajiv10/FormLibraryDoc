import { Form } from 'skemvora';


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

export default Example;

