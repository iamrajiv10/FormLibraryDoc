import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

import { Form } from 'formLibrary';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  InfoCallout,
  PropsTable,
  ChipGroup
} from '../../../components/Customs';

import {
  overviewContent,
  basicExampleContent,
  configurationContent,
  requiredPropertiesContent,
  optionalPropertiesContent,
  gridContent,
  fieldStylingContent,
  labelStylingContent,
  combinedContent,
  commonUseCasesContent,
  registrationFormContent,
  relatedDocsContent,
  nextStepContent
} from './content';

import {
  example1Data,
  example2Data,
  example3Data,
  example4Data,
  example5Data,
  example6Data,
  example7Data,
  example8Data,
  example9Data
} from './example';

import {
  example1Snippet,
  example1FullCode,
  example2Snippet,
  example2FullCode,
  example3Snippet,
  example3FullCode,
  example4Snippet,
  example4FullCode,
  example5Snippet,
  example5FullCode,
  example6Snippet,
  example6FullCode,
  example7Snippet,
  example7FullCode,
  example8Snippet,
  example8FullCode,
  example9Snippet,
  example9FullCode,
  configurationSnippet,
  configurationFullCode,
  submittedDataSnippet,
  submittedDataFullCode,
  gridLayoutSnippet,
  gridLayoutFullCode
} from './codeExample';

import { propsData } from './props';

const TextFieldPage = () => {
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
        {overviewContent.conclusion}
      </ContentBlock>

      {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

      <ContentSection
        id="basic-example"
        title={basicExampleContent.title}
      >
        <ContentBlock>
          {basicExampleContent.description}
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example1Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example1Snippet}
          fullCode={example1FullCode}
        />
      </ContentSection>

      {/* ==========================================
          CONFIGURATION
      ========================================== */}

      <ContentSection
        id="configuration"
        title={configurationContent.title}
      >
        <ContentBlock>
          {configurationContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={configurationSnippet}
          fullCode={configurationFullCode}
        />
      </ContentSection>

      {/* ==========================================
          REQUIRED PROPERTIES
      ========================================== */}

      <ContentSection
        id="required-properties"
        title={requiredPropertiesContent.title}
      >
        {/* LABEL */}

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          label
        </Typography>

        <ContentBlock>
          Text displayed above the input field.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={`{
  label: "Full Name"
}`}
          fullCode={`{
  label: "Full Name"
}`}
        />

        {/* NAME */}

        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            name
          </Typography>

          <ContentBlock>
            Unique identifier for the field.
          </ContentBlock>

          <CodeBlock
            language="jsx"
            snippet={`{
  name: "fullName"
}`}
            fullCode={`{
  name: "fullName"
}`}
          />

          <ContentBlock>
            This key is used in:
          </ContentBlock>

          <BulletList
            items={[
              'Form values',
              'Validation',
              'Conditional rendering',
              'Submission data'
            ]}
          />

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mt: 3,
              mb: 2
            }}
          >
            Example submitted data
          </Typography>

          <CodeBlock
            language="json"
            snippet={submittedDataSnippet}
            fullCode={submittedDataFullCode}
          />
        </Box>

        {/* TYPE */}

        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            type
          </Typography>

          <ContentBlock>
            Defines the type of field to render.
          </ContentBlock>

          <CodeBlock
            language="jsx"
            snippet={`{
  type: "text"
}`}
            fullCode={`{
  type: "text"
}`}
          />

          <InfoCallout>
            For Text Fields, this value must always be:
            <br />
            <strong>"text"</strong>
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          OPTIONAL PROPERTIES
      ========================================== */}

      <ContentSection
        id="optional-properties"
        title={optionalPropertiesContent.title}
      >
        {/* REQUIRED */}

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          required
        </Typography>

        <ContentBlock>
          Marks the field as mandatory.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example2Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example2Snippet}
          fullCode={example2FullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Default error message:
            <br />
            <strong>This is a required field.</strong>
          </InfoCallout>
        </Box>

        {/* ERROR MESSAGE */}

        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            errorMessage
          </Typography>

          <ContentBlock>
            Customize the validation message.
          </ContentBlock>

          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Form data={example3Data} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={example3Snippet}
            fullCode={example3FullCode}
          />
        </Box>

        {/* VALUE */}

        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            value
          </Typography>

          <ContentBlock>
            Provide an initial value.
          </ContentBlock>

          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Form data={example4Data} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={example4Snippet}
            fullCode={example4FullCode}
          />

          <Box sx={{ mt: 3 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                mb: 2
              }}
            >
              Common use cases
            </Typography>

            <BulletList
              items={[
                'Edit forms',
                'Saved drafts',
                'User profile screens'
              ]}
            />
          </Box>
        </Box>

        {/* DISABLED */}

        <Box sx={{ mt: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            disabled
          </Typography>

          <ContentBlock>
            Prevent users from modifying the field.
          </ContentBlock>

          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Form data={example5Data} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={example5Snippet}
            fullCode={example5FullCode}
          />

          <Box sx={{ mt: 3 }}>
            <InfoCallout>
              The value remains visible but cannot be edited.
            </InfoCallout>
          </Box>
        </Box>
      </ContentSection>

            {/* ==========================================
          RESPONSIVE GRID LAYOUT
      ========================================== */}

      <ContentSection
        id="responsive-grid-layout"
        title={gridContent.title}
      >
        <ContentBlock>
          {gridContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={gridLayoutSnippet}
          fullCode={gridLayoutFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <InfoCallout>
            {gridContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          FIELD STYLING
      ========================================== */}

      <ContentSection
        id="field-styling"
        title={fieldStylingContent.title}
      >
        <ContentBlock>
          {fieldStylingContent.description}
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example6Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example6Snippet}
          fullCode={example6FullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Use field-level styling when only one field requires custom appearance.
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          LABEL STYLING
      ========================================== */}

      <ContentSection
        id="label-styling"
        title={labelStylingContent.title}
      >
        <ContentBlock>
          {labelStylingContent.description}
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example7Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example7Snippet}
          fullCode={example7FullCode}
        />
      </ContentSection>

      {/* ==========================================
          COMBINING MULTIPLE OPTIONS
      ========================================== */}

      <ContentSection
        id="combining-options"
        title={combinedContent.title}
      >
        <ContentBlock>
          {combinedContent.description}
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example8Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example8Snippet}
          fullCode={example8FullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {combinedContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          COMMON USE CASES
      ========================================== */}

      <ContentSection
        id="common-use-cases"
        title={commonUseCasesContent.title}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Personal Information
        </Typography>

        <BulletList
          items={commonUseCasesContent.personalInformation}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Address Information
          </Typography>

          <BulletList
            items={commonUseCasesContent.addressInformation}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Professional Information
          </Typography>

          <BulletList
            items={commonUseCasesContent.professionalInformation}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Educational Information
          </Typography>

          <BulletList
            items={commonUseCasesContent.educationalInformation}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          REGISTRATION FORM EXAMPLE
      ========================================== */}

      <ContentSection
        id="registration-form"
        title={registrationFormContent.title}
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example9Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={example9Snippet}
          fullCode={example9FullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {registrationFormContent.description}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          SUPPORTED PROPERTIES
      ========================================== */}

      <ContentSection
        id="supported-properties"
        title="Supported Properties"
      >
        <PropsTable data={propsData} />
      </ContentSection>

      {/* ==========================================
          RELATED DOCUMENTATION
      ========================================== */}

      <ContentSection
        id="related-documentation"
        title={relatedDocsContent.title}
      >
        <ChipGroup
          title="Components"
          items={relatedDocsContent.components}
        />

        <ChipGroup
          title="Other Fields"
          items={relatedDocsContent.fields}
        />

        <ChipGroup
          title="Advanced Features"
          items={relatedDocsContent.features}
        />
      </ContentSection>

      {/* ==========================================
          NEXT STEP
      ========================================== */}

      <ContentSection
        id="next-step"
        title={nextStepContent.title}
      >
        <InfoCallout>
          {nextStepContent.description}
        </InfoCallout>
      </ContentSection>
    </Box>
  );
};

export default TextFieldPage;