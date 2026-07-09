export const basicSnippet = `const formData = [
  {
    label:"Select Skills",
    name:"skills",
    type:"multiSelect",
    options:[
      "React",
      "JavaScript",
      "Node.js",
      "CSS"
    ]
  }
];`;

export const basicFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Select Skills",
      name:"skills",
      type:"multiSelect",
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

export const mandatorySnippet = `{
  label:"Skills",
  name:"skills",
  type:"multiSelect",
  options:[
    "React",
    "Node.js"
  ]
}`;

export const mandatoryFullCode = `import { Form } from 'skemvora';


function Example() {
  const formData = [
    {
      label:"Skills",
      name:"skills",
      type:"multiSelect",
      options:[
        "React",
        "Node.js"
      ],
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

export const fullExampleSnippet = `const formData=[
  {
    label:"Skills",
    name:"skills",
    type:"multiSelect",
    options:[
      "React",
      "JavaScript",
      "Node.js"
    ],
    searchable:true,
    maxSelection:3,
    required:true
  },
  {
    label:"Languages",
    name:"languages",
    type:"multiSelect",
    options:[
      "English",
      "Hindi",
      "Spanish"
    ],
    searchable:true
  }
];`;

export const fullExampleCode = `import { Form } from 'skemvora';


function Example() {
  const formData=[
    {
      label:"Skills",
      name:"skills",
      type:"multiSelect",
      options:[
        "React",
        "JavaScript",
        "Node.js"
      ],
      searchable:true,
      maxSelection:3,
      required:true
    },
    {
      label:"Languages",
      name:"languages",
      type:"multiSelect",
      options:[
        "English",
        "Hindi",
        "Spanish"
      ],
      searchable:true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`;

