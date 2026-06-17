export const npmInstallSnippet = `npm install form-library`;

export const npmInstallFullCode = `npm install form-library`;

export const yarnInstallSnippet = `yarn add form-library`;

export const yarnInstallFullCode = `yarn add form-library`;

export const verifyImportSnippet = `import { Form } from "form-library";`;

export const verifyImportFullCode = `import { Form } from "form-library";`;

export const firstFormConfigSnippet = `const formData = [
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
  }
];`;

export const firstFormConfigFullCode = firstFormConfigSnippet;

export const firstFormRenderSnippet = `import { Form } from "form-library";

function App() {
  return (
    <Form
      data={formData}
    />
  );
}

export default App;`;

export const firstFormRenderFullCode = firstFormRenderSnippet;

export const conditionalFormSnippet = `import { ConditionalForm } from "form-library";`;

export const conditionalFormFullCode = conditionalFormSnippet;

export const localInstallationSnippet = `{
  "dependencies": {
    "form-library": "file:../path-to-form-library"
  }
}`;

export const localInstallationFullCode = localInstallationSnippet;

export const reinstallSnippet = `npm install`;

export const reinstallFullCode = reinstallSnippet;

export const moduleNotFoundSnippet = `Cannot resolve 'form-library'`;

export const moduleNotFoundFullCode = moduleNotFoundSnippet;