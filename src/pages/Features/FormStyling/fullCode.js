// Full code used in the documentation CodeBlock components

export const basicStylingFullCode = `
import React from 'react';
import { Form } from 'skemvora';


const formData = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email' }
];

export default function Example() {
  return (
    <Form
      data={formData}
      formStyles={{
        label: {
          color: "blue"
        },
        field: {
          borderRadius: "10px"
        },
        gap: "20px"
      }}
    />
  );
}
`;

export const fullExampleFullCode = `
import React from 'react';
import { Form } from 'skemvora';


const formData = [
  {
    label: 'First Name',
    name: 'firstName',
    type: 'text'
  },
  {
    label: 'Last Name',
    name: 'lastName',
    type: 'text'
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    style: {
      borderColor: 'green'
    }
  }
];

export default function RegistrationForm() {
  return (
    <Form
      data={formData}
      formStyles={{
        label: {
          color: '#1976d2'
        },
        gap: '20px'
      }}
    />
  );
}
`;

export const supportedPropertiesData = [
  {
    property: 'formStyles',
    type: 'object',
    required: 'Yes',
    description: 'Global form styling'
  },
  {
    property: 'style',
    type: 'object',
    required: 'No',
    description: 'Field specific styling'
  },
  {
    property: 'labelStyle',
    type: 'object',
    required: 'No',
    description: 'Label specific styling'
  },
  {
    property: 'gap',
    type: 'string',
    required: 'No',
    description: 'Controls spacing between fields'
  }
];

