// Full code used in the documentation CodeBlock components

export const fullBasicButtonsFullCode = `
import React from 'react';
import { Form } from 'skemvora';


const formData = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' }
];

export default function ButtonConfigurationExample() {
  const handleBack = () => {
    console.log('Back');
  };

  return (
    <Form
      data={formData}
      buttons={[
        {
          label: 'Back',
          onClick: handleBack
        },
        {
          label: 'Submit',
          type: 'submit'
        }
      ]}
    />
  );
}
`;

export const fullExampleFullCode = `
import React from 'react';
import { Form } from 'skemvora';


const formData = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' }
];

export default function RegistrationWorkflow() {
  const handleBack = () => {
    console.log('Go back');
  };

  const saveLater = () => {
    console.log('Save & complete later');
  };

  return (
    <Form
      data={formData}
      buttons={[
        {
          label: 'Back',
          onClick: handleBack
        },
        {
          label: 'Save & Complete Later',
          onClick: saveLater
        },
        {
          label: 'Submit',
          type: 'submit'
        }
      ]}
    />
  );
}
`;

export const buttonConfigurationPropsData = [
  {
    property: 'buttons',
    type: 'array',
    required: 'No',
    description: 'Defines custom form buttons'
  },
  {
    property: 'label',
    type: 'string',
    required: 'Yes',
    description: 'Button text'
  },
  {
    property: 'type',
    type: 'string',
    required: 'No',
    description: 'Button type (e.g. "submit")'
  },
  {
    property: 'onClick',
    type: 'function',
    required: 'No',
    description: 'Button click handler'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Button styling'
  },
  {
    property: 'buttonsStyle',
    type: 'object',
    required: 'No',
    description: 'Button layout styling (alignment/spacing)'
  }
];

