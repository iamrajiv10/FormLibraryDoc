import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';

import FormComponent from '../../Component/Form';
import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  InfoCallout,
  ChipGroup,
  StepSection
} from '../../../components/Customs';

import {
  overviewContent,
  buildContent,
  propertyTableData,
  nextBuildContent
} from './content';

import { quickStartFormData } from './example';

import {
  formConfigSnippet,
  formConfigFullCode,
  renderFormSnippet,
  renderFormFullCode,
  handleSubmitSnippet,
  handleSubmitFullCode,
  submitResponseSnippet,
  submitResponseFullCode,
  validationSnippet,
  validationFullCode,
  handleChangeSnippet,
  handleChangeFullCode,
  traditionalApproachSnippet,
  traditionalApproachFullCode,
  formLibraryApproachSnippet,
  formLibraryApproachFullCode
} from './codeExample';
import { Form } from 'formLibrary';


const QuickStart = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        pb: 10
      }}
    >
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <ContentBlock>
        Form Library allows you to build forms using simple configuration
        objects instead of manually creating labels, inputs, validation logic,
        and layouts.
      </ContentBlock>

      <ContentBlock>
        By defining your form structure as data, you can build consistent and
        maintainable forms with significantly less code.
      </ContentBlock>

      <ContentBlock>{overviewContent.conclusion}</ContentBlock>

      <ContentSection title={buildContent.title}>
        <ContentBlock>
          In this example, we'll create a simple registration form containing:
        </ContentBlock>

        <BulletList items={buildContent.fields} />

        <Typography
          variant="h6"
          sx={{
            mt: 4,
            mb: 2,
            fontWeight: 600
          }}
        >
          Live Preview
        </Typography>

        <LivePreview>
          <Box
            sx={{
              width: '100%',
              maxWidth: 500
            }}
          >
            <Form data={quickStartFormData} />
          </Box>
        </LivePreview>
      </ContentSection>

      <StepSection
        step="1"
        title="Create Your Form Configuration"
      >
        <ContentBlock>
          Every form in Form Library starts with a configuration object.
        </ContentBlock>

        <ContentBlock>
          Create an array containing the fields you want to display.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={formConfigSnippet}
          fullCode={formConfigFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <ContentBlock>
            Each object describes a single field.
          </ContentBlock>

          <TableContainer
            component={Paper}
            variant="outlined"
            sx={{
              borderRadius: 2
            }}
          >
            <Table>
              <TableBody>
                {propertyTableData.map((row) => (
                  <TableRow key={row.property}>
                    <TableCell
                      sx={{
                        width: 180,
                        fontWeight: 600,
                        fontFamily: 'monospace'
                      }}
                    >
                      {row.property}
                    </TableCell>

                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </StepSection>

      <StepSection
        step="2"
        title="Render The Form"
      >
        <ContentBlock>
          Import the Form component and pass the configuration using the data
          prop.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={renderFormSnippet}
          fullCode={renderFormFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            The library automatically generates the complete user interface
            based on your configuration.
          </InfoCallout>
        </Box>

        <Box sx={{ mt: 3 }}>
          <BulletList
            items={[
              'Labels',
              'Inputs',
              'Radio groups',
              'Validation handling',
              'Error messages',
              'Responsive layout support'
            ]}
          />
        </Box>
      </StepSection>

      <StepSection
        step="3"
        title="Handle Form Submission"
      >
        <ContentBlock>
          Most forms need to process user data after submission.
        </ContentBlock>

        <ContentBlock>
          Use the onSubmit prop to receive all form values when the user submits
          the form.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={handleSubmitSnippet}
          fullCode={handleSubmitFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <ContentBlock>
            When submitted, the form returns an object containing all field
            values.
          </ContentBlock>

          <CodeBlock
            language="json"
            snippet={submitResponseSnippet}
            fullCode={submitResponseFullCode}
          />
        </Box>
      </StepSection>

      <StepSection
        step="4"
        title="Validation"
      >
        <ContentBlock>
          Validation can be enabled by setting the required property.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={validationSnippet}
          fullCode={validationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Default error message:
            <br />
            <strong>This is a required field.</strong>
          </InfoCallout>
        </Box>

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Custom error messages can also be configured when needed.
          </ContentBlock>
        </Box>
      </StepSection>

      <StepSection
        step="5"
        title="Track Field Changes"
      >
        <ContentBlock>
          If you need to monitor user input before submission, use the onChange
          prop.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={handleChangeSnippet}
          fullCode={handleChangeFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <BulletList
            items={[
              'Auto-save functionality',
              'Live calculations',
              'Dynamic content updates',
              'Conditional workflows'
            ]}
          />
        </Box>
      </StepSection>

      <ContentSection title="Understanding The Core Concept">
        <ContentBlock>
          The most important thing to understand about Form Library is that
          forms are generated from configuration data.
        </ContentBlock>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600
              }}
            >
              Traditional Approach
            </Typography>

            <CodeBlock
              language="html"
              snippet={traditionalApproachSnippet}
              fullCode={traditionalApproachFullCode}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600
              }}
            >
              Form Library Approach
            </Typography>

            <CodeBlock
              language="jsx"
              snippet={formLibraryApproachSnippet}
              fullCode={formLibraryApproachFullCode}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <ContentBlock>
            The library takes care of rendering the user interface and managing
            user interactions.
          </ContentBlock>

          <ContentBlock>
            This approach reduces repetitive code and makes forms easier to
            maintain as applications grow.
          </ContentBlock>
        </Box>
      </ContentSection>

      <ContentSection title="What Can You Build Next?">
        <ChipGroup
          title="Components"
          items={nextBuildContent.components}
        />

        <ChipGroup
          title="Field Types"
          items={nextBuildContent.fieldTypes}
        />

        <ChipGroup
          title="Features"
          items={nextBuildContent.features}
        />
      </ContentSection>

      <ContentSection title="Next Step">
        <InfoCallout>
          Now that you've built your first form, continue to the Form component
          documentation to learn about all available configuration options,
          layouts, styling capabilities, and advanced features.
        </InfoCallout>
      </ContentSection>
    </Box>
  );
};

export default QuickStart;