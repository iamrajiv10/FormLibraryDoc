// Full code used in the documentation CodeBlock components

export const basicRepeatableFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      { label: "University Name", name: "university", type: "text" },
      { label: "Institute Name", name: "institute", type: "text" },
      { label: "Passing Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupBasicExample() {
  return <Form data={formData} />;
}
`;

export const repeatableUsageFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      { label: "University Name", name: "university", type: "text" },
      { label: "Institute Name", name: "institute", type: "text" },
      { label: "Passing Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupUsage() {
  return <Form data={formData} />;
}
`;

export const howItWorksFullCode = `
// Repeatable Group behavior is controlled by the library.
// When users click Add, the library creates a new group entry,
// and each entry stores its own values under repeatableGroup.name.
`;

export const addButtonPositionFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    addButtonPosition: "header-right",
    fields: [
      { label: "University Name", name: "university", type: "text" },
      { label: "Institute Name", name: "institute", type: "text" },
      { label: "Passing Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupAddPosition() {
  return <Form data={formData} />;
}
`;

export const deleteButtonPositionFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    deleteButtonPosition: "header-right",
    fields: [
      { label: "University Name", name: "university", type: "text" },
      { label: "Institute Name", name: "institute", type: "text" },
      { label: "Passing Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupDeletePosition() {
  return <Form data={formData} />;
}
`;

export const gridLayoutFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

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
        grid: { md: 6, xs: 12 }
      },
      {
        label: "Year",
        name: "year",
        type: "number",
        grid: { md: 6, xs: 12 }
      }
    ]
  }
];

export default function RepeatableGroupGridLayout() {
  return <Form data={formData} />;
}
`;

export const validationFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

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
        required: true
      },
      { label: "Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupValidation() {
  return <Form data={formData} />;
}
`;

export const initialValuesFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      { label: "University", name: "university", type: "text" },
      { label: "Year", name: "year", type: "number" }
    ]
  }
];

export default function RepeatableGroupInitialValues() {
  return (
    <Form
      data={formData}
      initialValues={{
        education: [
          { university: "ABC University", year: 2024 },
          { university: "XYZ University", year: 2022 }
        ]
      }}
    />
  );
}
`;

export const conditionalRenderingFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const formData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    fields: [
      {
        label: "Degree Type",
        name: "degreeType",
        type: "select",
        options: ["Bachelors", "Masters", "PhD"]
      }

      // Add a conditional field inside repeatable group (library-dependent shape)
      // so the conditional logic is evaluated per repeated entry.
    ]
  }
];

export default function RepeatableGroupConditionalRendering() {
  return <Form data={formData} />;
}
`;

export const fullExampleFullCode = `
import React from 'react';
import { Form } from 'formLibrary';

const repeatableFormData = [
  {
    type: "repeatableGroup",
    name: "education",
    label: "Education",
    addButtonPosition: "header-right",
    deleteButtonPosition: "header-right",
    fields: [
      {
        label: "University",
        name: "university",
        type: "text",
        grid: { md: 6, xs: 12 }
      },
      {
        label: "Institute",
        name: "institute",
        type: "text",
        grid: { md: 6, xs: 12 }
      },
      {
        label: "Year",
        name: "year",
        type: "number",
        required: true,
        grid: { md: 6, xs: 12 }
      },
      {
        label: "Degree Type",
        name: "degreeType",
        type: "select",
        options: ["Bachelors", "Masters", "PhD"],
        grid: { md: 6, xs: 12 }
      }
    ]
  }
];

export default function RepeatableGroupFullExample() {
  return <Form data={repeatableFormData} />;
}
`;

export const repeatableGroupPropsData = [
  {
    property: 'type',
    type: 'string',
    required: 'Yes',
    description: 'Must be repeatableGroup'
  },
  {
    property: 'name',
    type: 'string',
    required: 'Yes',
    description: 'Unique group identifier'
  },
  {
    property: 'fields',
    type: 'array',
    required: 'Yes',
    description: 'Fields inside each group'
  },
  {
    property: 'addButtonPosition',
    type: 'string',
    required: 'No',
    description: 'Controls add button placement (header-left/header-right/bottom-left/bottom-right)'
  },
  {
    property: 'deleteButtonPosition',
    type: 'string',
    required: 'No',
    description: 'Controls delete button placement (header-left/header-right/bottom-left/bottom-right)'
  }
];

