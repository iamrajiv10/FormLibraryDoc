import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { ConditionalForm, Form } from 'skemvora';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlockComponent from '../../../components/CodeBlock/CodeBlock'
import { universityAdmissionForm } from './fullCode';
import { universityAdmissionFormFullSnippet, universityAdmissionFormsnippet } from './codeSnippet';

const AddmitionFormPage = () => {
    const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert("Form Submitted:\n" + JSON.stringify(values, null, 2));
  };

return (
    <Box sx={{ m: 'auto 3rem', bgcolor:"white" }} >
        <LivePreview>
            <Box sx={{ width: '100%', }}>
                <ConditionalForm
                    data={universityAdmissionForm }
                    onSubmit={handleSubmit}
                />
            </Box>
        </LivePreview>
                <CodeBlockComponent language="jsx" snippet={universityAdmissionFormsnippet } fullCode={universityAdmissionFormFullSnippet } />
    </Box>
)
};

export default AddmitionFormPage;