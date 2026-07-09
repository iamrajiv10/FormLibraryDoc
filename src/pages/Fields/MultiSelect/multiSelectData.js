export const basicExampleData = [
  {
    label: 'Select Skills',
    name: 'skills',
    type: 'multiSelect',
    options: ['React', 'JavaScript', 'Node.js', 'CSS']
  }
];

export const mandatoryExampleData = [
  {
    label: 'Skills',
    name: 'skills',
    type: 'multiSelect',
    options: ['React', 'Node.js'],
    required: true
  }
];

export const disabledExampleData = [
  {
    label: 'Skills',
    name: 'skills',
    type: 'multiSelect',
    options: ['React', 'Node.js'],
    disabled: true
  }
];

export const fullExampleData = [
  {
    label: 'Skills',
    name: 'skills',
    type: 'multiSelect',
    options: ['React', 'JavaScript', 'Node.js'],
    searchable: true,
    maxSelection: 3,
    required: true
  },
  {
    label: 'Languages',
    name: 'languages',
    type: 'multiSelect',
    options: ['English', 'Hindi', 'Spanish'],
    searchable: true
  }
];

