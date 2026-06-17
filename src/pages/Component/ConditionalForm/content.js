export const overviewContent = {
  title: 'ConditionalForm',
  description:
    'The ConditionalForm component extends the capabilities of the Form component by allowing fields to be displayed or hidden based on user input.',
  details:
    'Instead of presenting every field at once, ConditionalForm enables you to create dynamic experiences where questions appear only when they are relevant.',
  conclusion:
    "Whether you're building surveys, onboarding flows, application forms, or business workflows, ConditionalForm makes it easy to create intelligent forms that adapt to user responses."
};

export const whyUseContent = {
  title: 'Why Use ConditionalForm?',
  description:
    'Not every user should see every field.',
  scenarios: [
    {
      title: 'Employment Application',
      description:
        'Display employment-related fields only when the user is currently employed.'
    },
    {
      title: 'Education Form',
      description:
        'Show additional education-related questions only when relevant.'
    },
    {
      title: 'Survey Forms',
      description:
        'Display questions dynamically based on previous answers.'
    }
  ]
};

export const importContent = {
  title: 'Import'
};

export const basicExampleContent = {
  title: 'Basic Example',
  description:
    'The example below displays an additional field only when the user selects Yes.',
  result:
    'When the user selects Yes, the Company Name field becomes visible. When the user selects No, the field remains hidden.'
};

export const conditionsContent = {
  title: 'Understanding Conditions',
  description:
    'Conditions are defined using a condition object.',
  conclusion:
    'The library continuously evaluates these rules as users interact with the form.'
};

export const conditionStructureContent = {
  title: 'Condition Structure'
};

export const operatorsContent = {
  title: 'Supported Operators'
};

export const andLogicContent = {
  title: 'Multiple Conditions (AND Logic)',
  description:
    'A field can depend on multiple values simultaneously.',
  result:
    'The field becomes visible only when both conditions are satisfied.'
};

export const orLogicContent = {
  title: 'Multiple Conditions (OR Logic)',
  description:
    'Sometimes a field should appear when any condition is satisfied.',
  result:
    'The field appears when either condition evaluates to true.'
};

export const checkboxContent = {
  title: 'Checkbox Group Conditions',
  description:
    'ConditionalForm supports conditions based on CheckboxGroup fields.'
};

export const multipleCheckboxContent = {
  title: 'Multiple Checkbox Conditions',
  description:
    'ConditionalForm also supports requiring multiple selections.',
  conclusion:
    'This is particularly useful for qualification-based workflows.'
};

export const gridContent = {
  title: 'Using Grid Layout With Conditional Fields',
  description:
    'ConditionalForm fully supports responsive grid layouts.',
  conclusion:
    'Hidden fields are automatically removed from the layout and visible fields are repositioned accordingly.'
};

export const validationContent = {
  title: 'Validation With Conditional Fields',
  description:
    'Validation is only applied to fields that are currently visible.',
  conclusion:
    'This prevents users from receiving validation errors for fields they cannot see.'
};

export const combineFeaturesContent = {
  title: 'Combining ConditionalForm With Other Features',
  features: [
    'Validation',
    'Grid Layout',
    'Custom Buttons',
    'Initial Values',
    'Repeatable Groups'
  ]
};

export const bestPracticesContent = {
  title: 'Best Practices',
  practices: [
    {
      title: 'Keep Conditions Simple',
      description:
        'Simple conditions are easier to understand and maintain.'
    },
    {
      title: 'Group Related Questions',
      description:
        'Place dependent questions close to the field controlling them.'
    },
    {
      title: 'Avoid Deep Dependency Chains',
      description:
        'Avoid long chains of dependent fields that become difficult to follow.'
    },
    {
      title: 'Test All Paths',
      description:
        'Verify visible state, hidden state, validation behavior, and submission data.'
    }
  ]
};

export const nextStepsContent = {
  title: 'Next Steps',
  features: [
    'Repeatable Groups',
    'Validation',
    'Grid Layout',
    'Custom Buttons',
    'Initial Values',
    'Disabled Fields'
  ],
  conclusion:
    'These features can be combined with ConditionalForm to build highly dynamic and user-friendly form experiences.'
};

export const pageSections = [
  { id: 'why-use-conditional-form', title: 'Why Use ConditionalForm?' },
  { id: 'import', title: 'Import' },
  { id: 'basic-example', title: 'Basic Example' },
  { id: 'understanding-conditions', title: 'Understanding Conditions' },
  { id: 'condition-structure', title: 'Condition Structure' },
  { id: 'supported-operators', title: 'Supported Operators' },
  { id: 'and-logic', title: 'AND Logic' },
  { id: 'or-logic', title: 'OR Logic' },
  { id: 'checkbox-group-conditions', title: 'Checkbox Group Conditions' },
  { id: 'multiple-checkbox-conditions', title: 'Multiple Checkbox Conditions' },
  { id: 'grid-layout', title: 'Grid Layout' },
  { id: 'validation', title: 'Validation' },
  { id: 'combining-features', title: 'Combining Features' },
  { id: 'conditional-form-properties', title: 'Properties' },
  { id: 'best-practices', title: 'Best Practices' },
  { id: 'next-steps', title: 'Next Steps' }
];