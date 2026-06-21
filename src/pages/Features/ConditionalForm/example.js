export const example1Data = [
  {
    label: "Are you employed?",
    name: "employed",
    type: "radio",
    options: ["Yes", "No"]
  },
  {
    label: "Company Name",
    name: "companyName",
    type: "text",
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

export const multipleConditionsData = [
  {
    label: "Select Options",
    name: "selectedOptions",
    type: "checkboxGroup",
    options: ["Option 1", "Option 2", "Option 3"]
  },
  {
    label: "Additional Details",
    name: "details",
    type: "textarea",
    condition: {
      logic: "AND",
      rules: [
        {
          field: "selectedOptions",
          operator: "includes",
          value: "Option 2"
        },
        {
          field: "selectedOptions",
          operator: "includes",
          value: "Option 3"
        }
      ]
    }
  }
];

export const example9Data = [
  {
    label: "Are you employed?",
    name: "employed",
    type: "radio",
    options: ["Yes", "No"]
  },
  {
    label: "Company Name",
    name: "companyName",
    type: "text",
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
  },
  {
    label: "Select benefits",
    name: "benefits",
    type: "checkbox-group",
    options: ["Health Insurance", "Travel Insurance", "Dental Insurance"]
  },
  {
    label: "Additional Details",
    name: "additionalDetails",
    type: "textarea",
    condition: {
      logic: "AND",
      rules: [
        {
          field: "benefits",
          operator: "includes",
          value: "Health Insurance"
        },
        {
          field: "benefits",
          operator: "includes",
          value: "Travel Insurance"
        }
      ]
    }
  }
];
