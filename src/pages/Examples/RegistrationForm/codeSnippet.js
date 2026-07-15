


export const Registrationsnippet =`
const employeeRegistrationForm = [
  {
    type: "content",
    variant: "heading",
    content: "Employee Registration",
    textAlign: "center",
  },

  {
    type: "content",
    variant: "text",
    content: "Please complete all required information.",
  },

  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: { md: 6 },
    required: true,
  },

  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: { md: 6 },
    required: true,
  },

  {
    label: "Email",
    name: "email",
    type: "email",
    grid: { md: 6 },
    required: true,
  },

  {
    label: "Password",
    name: "password",
    type: "password",
    grid: { md: 6 },
    required: true,
  },

  {
    label: "Phone Number",
    name: "phone",
    type: "number",
    maxDigits: 10,
    precision: 0,
    grid: { md: 6 },
    required: true,
  },

  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    grid: { md: 6 },
  },

  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    grid: { md: 6 },
  },

  {
    label: "Department",
    name: "department",
    type: "select",
    options: [
      "Engineering",
      "HR",
      "Finance",
      "Marketing",
    ],
    grid: { md: 6 },
  },

  {
    label: "Skills",
    name: "skills",
    type: "multiSelect",
    searchable: true,
    maxSelection: 5,
    options: [
      "React",
      "Node.js",
      "Java",
      "Python",
      "MongoDB",
      "AWS",
    ],
    grid: { md: 12 },
  },

  {
    label: "Current Company",
    name: "company",
    type: "typeAhead",
    grid: { md: 12 },
    minSearchLength: 2,
    loadOptions: mockLoadOptions
  },

  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: { md: 12 },
  },

  {
    label: "Terms",
    name: "terms",
    type: "checkbox",
    required: true,
  },
];
`






export const RegistrationFullSnippet =`
import { Form } from 'skemvora';

function Example() {

  const employeeRegistrationForm = [
  {
    type: "content",
    variant: "heading",
    content: "Employee Registration",
    textAlign: "center",
  },
  {
    type: "content",
    variant: "text",
    content: "Please complete all required information.",
  },
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    grid: { md: 6 },
    required: true,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    grid: { md: 6 },
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    grid: { md: 6 },
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    grid: { md: 6 },
    required: true,
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "number",
    maxDigits: 10,
    precision: 0,
    grid: { md: 6 },
    required: true,
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date",
    grid: { md: 6 },
  },
  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: ["Male", "Female", "Other"],
    grid: { md: 6 },
  },
  {
    label: "Department",
    name: "department",
    type: "select",
    options: [
      "Engineering",
      "HR",
      "Finance",
      "Marketing",
    ],
    grid: { md: 6 },
  },
  {
    label: "Skills",
    name: "skills",
    type: "multiSelect",
    searchable: true,
    maxSelection: 5,
    options: [
      "React",
      "Node.js",
      "Java",
      "Python",
      "MongoDB",
      "AWS",
    ],
    grid: { md: 12 },
  },
  {
    label: "Current Company",
    name: "company",
    type: "typeAhead",
    grid: { md: 12 },
    minSearchLength: 2,
    loadOptions: mockLoadOptions,
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    grid: { md: 12 },
  },
  {
    label: "Terms",
    name: "terms",
    type: "checkbox",
    required: true,
  },
];

  const mockLoadOptions = async (searchTerm) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const db = [
          { label: "Microsoft", value: "microsoft" },
          { label: "Microsoft India", value: "microsoft-india" },
          { label: "Microsoft Azure", value: "microsoft-azure" },
          { label: "Apple", value: "apple" },
          { label: "Google", value: "google" }
        ];
        resolve(db.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase())));
      }, 1500); // 1.5s delay to show loading state
    });
  };

  const handleSubmit = (values) => {
      console.log("Form Submitted:", values);
      alert("Form Submitted:" + JSON.stringify(values, null, 2));
  };

  return <Form data={employeeRegistrationForm} />;
}

export default Example;`