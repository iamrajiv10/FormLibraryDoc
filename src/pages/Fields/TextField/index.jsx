import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';
import { Form } from 'formLibrary';

import {
  example1Data,
  example2Data,
  example3Data,
  example4Data,
  example5Data
} from './examples';

import {
  example1Snippet, example1FullCode,
  example2Snippet, example2FullCode,
  example3Snippet, example3FullCode,
  example4Snippet, example4FullCode,
  example5Snippet, example5FullCode
} from './codeExamples';

import { propsData } from './props';
import { overviewContent, exampleDescriptions, notesContent } from './content';

const TextFieldDoc = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        {overviewContent.title}
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        {overviewContent.description}
      </Typography>
      <Typography variant="body1" paragraph>
        {overviewContent.details}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4, mb: 2 }}>
        {exampleDescriptions.basic.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exampleDescriptions.basic.description}
      </Typography>
      <LivePreview>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form data={example1Data} />
        </Box>
      </LivePreview>
      <CodeBlock language="jsx" snippet={example1Snippet} fullCode={example1FullCode} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        {exampleDescriptions.required.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exampleDescriptions.required.description}
      </Typography>
      <LivePreview>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form data={example2Data} />
        </Box>
      </LivePreview>
      <CodeBlock language="jsx" snippet={example2Snippet} fullCode={example2FullCode} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        {exampleDescriptions.disabled.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exampleDescriptions.disabled.description}
      </Typography>
      <LivePreview>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form data={example3Data} />
        </Box>
      </LivePreview>
      <CodeBlock language="jsx" snippet={example3Snippet} fullCode={example3FullCode} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        {exampleDescriptions.prefilled.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exampleDescriptions.prefilled.description}
      </Typography>
      <LivePreview>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form data={example4Data} />
        </Box>
      </LivePreview>
      <CodeBlock language="jsx" snippet={example4Snippet} fullCode={example4FullCode} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        {exampleDescriptions.customStyling.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {exampleDescriptions.customStyling.description}
      </Typography>
      <LivePreview>
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Form data={example5Data} />
        </Box>
      </LivePreview>
      <CodeBlock language="jsx" snippet={example5Snippet} fullCode={example5FullCode} />

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 3 }}>
        Field Configuration
      </Typography>
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'action.hover' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Property</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Required</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {propsData.map((row) => (
              <TableRow key={row.property}>
                <TableCell sx={{ fontFamily: 'monospace', color: 'primary.main' }}>{row.property}</TableCell>
                <TableCell sx={{ fontFamily: 'monospace', color: 'error.main' }}>{row.type}</TableCell>
                <TableCell>{row.required}</TableCell>
                <TableCell>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 6, mb: 2 }}>
        Notes
      </Typography>
      <Box component="ul" sx={{ typography: 'body1', pl: 3 }}>
        {notesContent.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </Box>
    </Box>
  );
};

export default TextFieldDoc;
