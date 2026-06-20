export const radioBasicSnippet = `const formData = [
  {
    label: "Are you satisfied?",
    name: "satisfaction",
    type: "radio",
    options: [
      "Yes",
      "No"
    ]
  }
];`;

export const radioBasicFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Are you satisfied?",
      name: "satisfaction",
      type: "radio",
      options: [
        "Yes",
        "No"
      ]
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioOptionsSnippet = `{
  label: "Gender",
  name: "gender",
  type: "radio",

  options: [
    "Male",
    "Female",
    "Other"
  ]
}`;

export const radioOptionsFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Gender",
      name: "gender",
      type: "radio",
      options: [
        "Male",
        "Female",
        "Other"
      ]
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioRequiredSnippet = `{
  label: "Are you employed?",
  name: "employed",
  type: "radio",

  options: [
    "Yes",
    "No"
  ],

  required: true
}`;

export const radioRequiredFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Are you employed?",
      name: "employed",
      type: "radio",
      options: [
        "Yes",
        "No"
      ],
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioErrorMessageSnippet = `{
  label: "Are you employed?",
  name: "employed",
  type: "radio",

  options: [
    "Yes",
    "No"
  ],

  required: true,

  errorMessage: "Please select an option."
}`;

export const radioErrorMessageFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Are you employed?",
      name: "employed",
      type: "radio",
      options: [
        "Yes",
        "No"
      ],
      required: true,
      errorMessage: "Please select an option."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioDisabledSnippet = `{
  label: "Account Status",
  name: "status",
  type: "radio",

  options: [
    "Active",
    "Inactive"
  ],

  disabled: true
}`;

export const radioDisabledFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Account Status",
      name: "status",
      type: "radio",
      options: [
        "Active",
        "Inactive"
      ],
      disabled: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioGridSnippet = `{
  label: "Select Category",
  name: "category",
  type: "radio",

  options: [
    "A",
    "B",
    "C"
  ],

  grid: {
    md: 6,
    xs: 12
  }
}`;

export const radioGridFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Category",
      name: "category",
      type: "radio",
      options: [
        "A",
        "B",
        "C"
      ],
      grid: {
        md: 6,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioStyleSnippet = `{
  label: "Preference",
  name: "preference",
  type: "radio",

  options: [
    "Option 1",
    "Option 2"
  ],

  style: {
    gap: "20px"
  }
}`;

export const radioStyleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Preference",
      name: "preference",
      type: "radio",
      options: [
        "Option 1",
        "Option 2"
      ],
      style: {
        gap: "20px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioLabelStyleSnippet = `{
  label: "Preference",
  name: "preference",
  type: "radio",

  options: [
    "Option 1",
    "Option 2"
  ],

  labelStyle: {
    color: "#1976d2",
    fontWeight: "600"
  }
}`;

export const radioLabelStyleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Preference",
      name: "preference",
      type: "radio",
      options: [
        "Option 1",
        "Option 2"
      ],
      labelStyle: {
        color: "#1976d2",
        fontWeight: "600"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const radioFullExampleSnippet = `const formData = [
  {
    label: "Are you happy?",
    name: "happy",
    type: "radio",

    options: [
      "Yes",
      "No"
    ],

    required: true,

    errorMessage: "Please select an option.",

    style: {
      gap: "15px"
    },

    labelStyle: {
      color: "#1976d2"
    },

    grid: {
      md: 6,
      xs: 12
    }
  }
];`;

export const radioFullExampleFullCode = `import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Are you happy?",
      name: "happy",
      type: "radio",

      options: [
        "Yes",
        "No"
      ],

      required: true,

      errorMessage: "Please select an option.",

      style: {
        gap: "15px"
      },

      labelStyle: {
        color: "#1976d2"
      },

      grid: {
        md: 6,
        xs: 12
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;