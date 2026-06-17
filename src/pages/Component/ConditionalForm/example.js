export const basicConditionalFormData = [
  {
    label: 'Are you employed?',
    name: 'employed',
    type: 'radio',
    options: ['Yes', 'No']
  },
  {
    label: 'Company Name',
    name: 'companyName',
    type: 'text',
    condition: {
      logic: 'AND',
      rules: [
        {
          field: 'employed',
          operator: 'equals',
          value: 'Yes'
        }
      ]
    }
  }
];

export const checkboxConditionalFormData = [
  {
    label: 'Skills',
    name: 'skills',
    type: 'checkboxGroup',
    options: ['React', 'Node.js', 'Python']
  },
  {
    label: 'Years of React Experience',
    name: 'reactExperience',
    type: 'number',
    condition: {
      logic: 'AND',
      rules: [
        {
          field: 'skills',
          operator: 'includes',
          value: 'React'
        }
      ]
    }
  }
];