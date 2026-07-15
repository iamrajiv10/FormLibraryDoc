
const mockUniversityOptions = async (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const universities = [
        { label: "Delhi University", value: "delhi-university" },
        { label: "Mumbai University", value: "mumbai-university" },
        { label: "Anna University", value: "anna-university" },
        { label: "JNTU Hyderabad", value: "jntu-hyderabad" },
        { label: "Savitribai Phule Pune University", value: "sppu" },
        { label: "IIT Delhi", value: "iit-delhi" },
        { label: "IIT Bombay", value: "iit-bombay" },
        { label: "NIT Trichy", value: "nit-trichy" },
        { label: "BITS Pilani", value: "bits-pilani" },
        { label: "VIT University", value: "vit-university" }
      ];

      resolve(
        universities.filter(item =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 1000);
  });
};

const mockCampusOptions = async (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const campuses = [
        { label: "Ahmedabad Campus", value: "ahmedabad" },
        { label: "Bangalore Campus", value: "bangalore" },
        { label: "Chennai Campus", value: "chennai" },
        { label: "Delhi Campus", value: "delhi" },
        { label: "Hyderabad Campus", value: "hyderabad" },
        { label: "Kolkata Campus", value: "kolkata" },
        { label: "Mumbai Campus", value: "mumbai" },
        { label: "Pune Campus", value: "pune" }
      ];

      resolve(
        campuses.filter(item =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 1000);
  });
};

export const universityAdmissionForm = [
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
    minSearchLength: 2,
    loadOptions: mockCampusOptions,
  },

  {
    type: "repeatableGroup",
    label: "Previous Qualifications",
    name: "qualifications",

    addButtonPosition: "header-right",

    fields: [
      {
        label: "Qualification",
        name: "qualification",
        type: "select",
        required: true,
        options: [
          "10th",
          "12th",
          "Diploma",
          "Bachelors",
          "Masters"
        ],
        grid: { md: 4 }
      },

      {
        label: "University / Board",
        name: "university",
        type: "typeAhead",
        required: true,
        grid: { md: 4 },
        minSearchLength: 2,
        loadOptions: mockUniversityOptions,
      },

      {
        label: "Institute Name",
        name: "instituteName",
        type: "text",
        required: true,
        grid: { md: 4 }
      },

      {
        label: "Passing Year",
        name: "passingYear",
        type: "number",
        maxDigits: 4,
        precision: 0,
        required: true,
        grid: { md: 4 }
      },

      {
        label: "Percentage / CGPA",
        name: "percentage",
        type: "number",
        precision: 2,
        suffix: "%",
        required: true,
        grid: { md: 4 }
      }
    ]
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