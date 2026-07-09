export const basicExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number'
  }
];

export const requiredExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    required: true
  }
];

export const errorMessageExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    required: true,
    errorMessage: 'Please enter your age.'
  }
];



export const disabledExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    disabled: true
  }
];

export const gridExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    grid: {
      md: 6,
      xs: 12
    }
  }
];

export const styleExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    style: {
      borderRadius: '8px',
      borderColor: '#1976d2'
    }
  }
];

export const labelStyleExampleData = [
  {
    label: 'Age',
    name: 'age',
    type: 'number',
    labelStyle: {
      color: '#1976d2',
      fontWeight: '600'
    }
  }
];

export const prefixExampleData = [
  {
    label:"Price",
    name:"price",
    type:"number",
    prefix:"₹"
  }
];

export const suffixExampleData = [
  {
    label:"Discount",
    name:"discount",
    type:"number",
    suffix:"%"
  }
]

export const maxDigitExampleData = [
  {
 label:"Account Number",
 name:"accountNumber",
 type:"number",
 maxDigits:10
}
]

export const precisionExampleData = [
  {
 label:"Amount",
 name:"amount",
 type:"number",
 precision:2
}
]

export const fullExampleData = [
  {
    label: 'Years of Experience',
    name: 'experience',
    type: 'number',
    required: true,
    errorMessage: 'Please enter your years of experience.',
    maxDigits: 2,
    style: {
      borderRadius: '8px'
    },
    labelStyle: {
      color: '#1976d2'
    },
    grid: {
      md: 6,
      xs: 12
    }
  }
];