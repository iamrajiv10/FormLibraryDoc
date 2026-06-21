// Example data for Repeatable Group documentation

export const repeatableGroupFormData = [
  {
    type: 'repeatableGroup',
    name: 'education',
    label: 'Education',
    addButtonPosition: 'header-right',
    deleteButtonPosition: 'header-right',
    fields: [
      {
        label: 'University Name',
        name: 'university',
        type: 'text',
        grid: { md: 6, xs: 12 }
      },
      {
        label: 'Institute Name',
        name: 'institute',
        type: 'text',
        grid: { md: 6, xs: 12 }
      },
      {
        label: 'Passing Year',
        name: 'year',
        type: 'number',
        grid: { md: 6, xs: 12 },
        required: true
      },
      {
        label: 'Degree Type',
        name: 'degreeType',
        type: 'select',
        options: ['Bachelors', 'Masters', 'PhD'],
        grid: { md: 6, xs: 12 }
      }
    ]
  }
];

