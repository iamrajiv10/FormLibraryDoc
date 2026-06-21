// Full code used in the documentation CodeBlock components

export const basicResponsiveFullCode = `import { Form } from "formLibrary";

const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: {
      md: 6,
      xs: 12
    }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: {
      md: 6,
      xs: 12
    }
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: {
      md: 12,
      xs: 12
    }
  }
];

export default function ResponsiveLayoutBasicExample() {
  return <Form data={formData} />;
}`;

export const conditionalFormResponsiveFullCode = `import React from "react";
import { Form } from "formLibrary";

const formData = [
  {
    label: "Are you employed?",
    name: "employed",
    type: "radio",
    options: ["Yes", "No"],
    required: true
  },
  {
    label: "Company Name",
    name: "companyName",
    type: "text",
    grid: {
      md: 6,
      xs: 12
    },
    condition: {
      logic: "AND",
      rules: [
        {
          field: "employed",
          operator: "equals",
          value: "Yes"
        }
      ]
    }
  }
];

export default function ResponsiveWithConditionalForm() {
  return <Form data={formData} />;
}`;

export const repeatableGroupResponsiveFullCode = `import React from "react";
import { Form } from "formLibrary";

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      {
        label: "University",
        name: "university",
        type: "text",
        grid: {
          md: 6,
          xs: 12
        }
      }
    ]
  }
];

export default function ResponsiveWithRepeatableGroup() {
  return <Form data={formData} />;
}`;

export const fullResponsiveExampleFullCode = `import { Form } from "formLibrary";

const formData = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: { md: 6, xs: 12 }
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "Phone",
    name: "phone",
    type: "text",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: { md: 12, xs: 12 }
  },
  {
    label: "City",
    name: "city",
    type: "text",
    grid: { md: 4, xs: 12 }
  },
  {
    label: "State",
    name: "state",
    type: "text",
    grid: { md: 4, xs: 12 }
  },
  {
    label: "Country",
    name: "country",
    type: "text",
    grid: { md: 4, xs: 12 }
  }
];

export default function ResponsiveLayoutFullExample() {
  return <Form data={formData} />;
}`;

