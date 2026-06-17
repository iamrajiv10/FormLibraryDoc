export const formConfigSnippet = `const formData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    required: true
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female"]
  }
];`;

export const formConfigFullCode = formConfigSnippet;

export const renderFormSnippet = `import { Form } from "form-library";

function App() {
  return (
    <Form
      data={formData}
    />
  );
}

export default App;`;

export const renderFormFullCode = renderFormSnippet;

export const handleSubmitSnippet = `import { Form } from "form-library";

function App() {

  const handleSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Form
      data={formData}
      onSubmit={handleSubmit}
    />
  );
}

export default App;`;

export const handleSubmitFullCode = handleSubmitSnippet;

export const submitResponseSnippet = `{
  fullName: "John Doe",
  email: "john@example.com",
  password: "secret123",
  gender: "Male"
}`;

export const submitResponseFullCode = submitResponseSnippet;

export const validationSnippet = `{
  label: "Email Address",
  name: "email",
  type: "email",
  required: true
}`;

export const validationFullCode = validationSnippet;

export const handleChangeSnippet = `const handleChange = (formValues) => {
  console.log(formValues);
};

<Form
  data={formData}
  onChange={handleChange}
/>`;

export const handleChangeFullCode = handleChangeSnippet;

export const traditionalApproachSnippet = `<input />
<input />
<input />`;

export const traditionalApproachFullCode = traditionalApproachSnippet;

export const formLibraryApproachSnippet = `[
  {
    label: "Full Name",
    name: "fullName",
    type: "text"
  }
]`;

export const formLibraryApproachFullCode = formLibraryApproachSnippet;