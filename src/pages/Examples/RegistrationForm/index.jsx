import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'skemvora';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlockComponent from '../../../components/CodeBlock/CodeBlock'
import { employeeRegistrationForm } from './fullCode';
import { RegistrationFullSnippet, Registrationsnippet } from './codeSnippet';

const RegistrationFormPage = () => {
    const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form Submitted:\n" + JSON.stringify(values, null, 2));
  };

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

return (
    <Box sx={{ m: 'auto 3rem', bgcolor:"white" }} >
        <LivePreview>
            <Box sx={{ width: '100%', }}>
                <Form
                    data={employeeRegistrationForm}
                    onSubmit={handleSubmit}
                />
            </Box>
        </LivePreview>
                <CodeBlockComponent language="jsx" snippet={Registrationsnippet } fullCode={RegistrationFullSnippet } />
    </Box>
)
};

export default RegistrationFormPage;