
export const universityAdmissionFormsnippet =`
const universityAdmissionForm = [
  {
    type: "content",
    variant: "heading",
    content: "University Admission Form",
    textAlign: "center",
  },

  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true,
    grid: { md: 6 },
  },

  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    grid: { md: 6 },
  },

  {
    label: "Applying For",
    name: "course",
    type: "select",
    options: [
      "B.Tech",
      "MBA",
      "BCA",
      "MCA",
    ],
    grid: { md: 6 },
  },

  {
    label: "Preferred Campus",
    name: "campus",
    type: "typeAhead",
    grid: { md: 6 },
  },

  {
    label: "Previous Qualifications",
    name: "qualification",
    type: "repeatableGroup",
  },

  {
    label: "Programming Skills",
    name: "skills",
    type: "multiSelect",
    searchable: true,
    options: [
      "C",
      "C++",
      "Java",
      "Python",
      "React",
    ],
    grid: { md: 12 },
  },

  {
    label: "Do you require hostel?",
    name: "hostel",
    type: "radio",
    options: ["Yes", "No"],
    grid: { md: 6 },
  },

  {
    type: "content",
    variant: "text",
    content: "Hostel preferences will be available after selecting Yes.",

    condition: {
      logic: "AND",
      rules: [
        {
          field: "hostel",
          operator: "equals",
          value: "Yes",
        },
      ],
    },
  },

  {
    label: "Hostel Type",
    name: "hostelType",
    type: "select",
    options: [
      "Single Sharing",
      "Double Sharing",
    ],

    condition: {
      logic: "AND",
      rules: [
        {
          field: "hostel",
          operator: "equals",
          value: "Yes",
        },
      ],
    },
  },

  {
    label: "Annual Family Income",
    name: "income",
    type: "number",
    prefix: "₹",
    precision: 0,
    grid: { md: 6 },
  },

  {
    label: "Scholarship Required",
    name: "scholarship",
    type: "checkbox",
    grid: { md: 6 },
  },
];
`

export const universityAdmissionFormFullSnippet =`
import { Form } from 'skemvora';

function Example() {

  const universityAdmissionForm = [
  {
    type: "content",
    variant: "heading",
    content: "University Admission Form",
    textAlign: "center",
  },

  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    required: true,
    grid: { md: 6 },
  },

  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    grid: { md: 6 },
  },

  {
    label: "Applying For",
    name: "course",
    type: "select",
    options: [
      "B.Tech",
      "MBA",
      "BCA",
      "MCA",
    ],
    grid: { md: 6 },
  },

  {
    label: "Preferred Campus",
    name: "campus",
    type: "typeAhead",
    grid: { md: 6 },
  },

  {
    label: "Previous Qualifications",
    name: "qualification",
    type: "repeatableGroup",
  },

  {
    label: "Programming Skills",
    name: "skills",
    type: "multiSelect",
    searchable: true,
    options: [
      "C",
      "C++",
      "Java",
      "Python",
      "React",
    ],
    grid: { md: 12 },
  },

  {
    label: "Do you require hostel?",
    name: "hostel",
    type: "radio",
    options: ["Yes", "No"],
    grid: { md: 6 },
  },

  {
    type: "content",
    variant: "text",
    content: "Hostel preferences will be available after selecting Yes.",

    condition: {
      logic: "AND",
      rules: [
        {
          field: "hostel",
          operator: "equals",
          value: "Yes",
        },
      ],
    },
  },

  {
    label: "Hostel Type",
    name: "hostelType",
    type: "select",
    options: [
      "Single Sharing",
      "Double Sharing",
    ],

    condition: {
      logic: "AND",
      rules: [
        {
          field: "hostel",
          operator: "equals",
          value: "Yes",
        },
      ],
    },
  },

  {
    label: "Annual Family Income",
    name: "income",
    type: "number",
    prefix: "₹",
    precision: 0,
    grid: { md: 6 },
  },

  {
    label: "Scholarship Required",
    name: "scholarship",
    type: "checkbox",
    grid: { md: 6 },
  },
];

    const handleSubmit = (values) => {
        console.log("Form Submitted:", values);
        alert("Form Submitted:" + JSON.stringify(values, null, 2));
    };

  return <Form data={universityAdmissionForm} />;
}

export default Example;`