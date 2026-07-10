import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { Form, ConditionalForm } from 'skemvora';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  InfoCallout,
  BulletList,
  ChipGroup,
  PropsTable
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import { validationOverviewContent, basicExampleContent, propertiesContent, relatedDocsContent } from './content';

import {
  validationFormData,
  conditionalValidationFormData,
  disabledValidationFormData,
  fullValidationFormData,
  differentTypesValidationFormData
} from './validationData';

import {
  basicSnippet,
  basicFullCode,
  requiredSnippet,
  requiredFullCode,
  errorMessageSnippet,
  errorMessageFullCode,
  conditionalSnippet,
  conditionalFullCode,
  disabledSnippet,
  disabledFullCode,
  fullExampleSnippet,
  fullExampleFullCode,
  differentTypesSnippet
} from './snippetCode';

import { fullValidationPropsData } from './fullCode';


const ValidationPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={validationOverviewContent.title}
        description={validationOverviewContent.description}
        details={validationOverviewContent.details}
      />

      <InfoCallout sx={{ mb: 5 }}>{validationOverviewContent.conclusion}</InfoCallout>
      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
      <ContentSection id="basic-example" title={basicExampleContent.title}>
        <ContentBlock>{basicExampleContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={validationFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={basicSnippet} fullCode={basicFullCode} />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            What happens on submit?
          </Typography>
          <BulletList
            items={[
              'Validation runs',
              'Submission is stopped',
              'An error message is displayed near the field'
            ]}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                HOW IT WORKS
      ========================================== */}
      <ContentSection id="how-validation-works" title={validationOverviewContent.howItWorksTitle}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            p: 4,
            bgcolor: 'background.paper',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            mt: 2
          }}
        >
          <Typography variant="h6" color="primary">
            User fills form
          </Typography>
          <Typography variant="body1">↓</Typography>
          <Typography variant="h6" color="primary">
            Clicks Submit
          </Typography>
          <Typography variant="body1">↓</Typography>
          <Typography variant="h6" color="primary">
            Library checks required fields
          </Typography>
          <Typography variant="body1">↓</Typography>
          <Typography variant="h6" color="primary">
            Invalid fields show error messages
          </Typography>
          <Typography variant="body1">↓</Typography>
          <Typography variant="h6" color="primary">
            Valid form submits successfully
          </Typography>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                REQUIRED VALIDATION
      ========================================== */}
      <ContentSection id="required-validation" title={validationOverviewContent.requiredTitle}>
        <ContentBlock>{validationOverviewContent.requiredDescription}</ContentBlock>

        <CodeBlock language="jsx" snippet={requiredSnippet} fullCode={requiredFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CUSTOM ERROR MESSAGES
      ========================================== */}
      <ContentSection id="custom-error-messages" title={validationOverviewContent.customErrorTitle}>
        <ContentBlock>{validationOverviewContent.customErrorDescription}</ContentBlock>
        <CodeBlock language="jsx" snippet={errorMessageSnippet} fullCode={errorMessageFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DIFFERENT FIELD TYPES
      ========================================== */}
      <ContentSection id="different-field-types" title={validationOverviewContent.differentTypesTitle}>
        <ContentBlock>{validationOverviewContent.differentTypesDescription}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={differentTypesValidationFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={differentTypesSnippet} fullCode={undefined} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUBMIT VALIDATION BEHAVIOR
      ========================================== */}
      <ContentSection id="submit-validation" title={validationOverviewContent.submitBehaviorTitle}>
        <ContentBlock>{validationOverviewContent.submitBehaviorDescription}</ContentBlock>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            On submit:
          </Typography>
          <BulletList items={['All fields are validated', 'Invalid fields show errors', 'Valid data is submitted']} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONAL VALIDATION
      ========================================== */}
      <ContentSection id="conditional-validation" title={validationOverviewContent.conditionalTitle}>
        <ContentBlock>{validationOverviewContent.conditionalDescription}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <ConditionalForm data={conditionalValidationFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={conditionalSnippet} fullCode={conditionalFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DISABLED FIELDS
      ========================================== */}
      <ContentSection id="disabled-fields" title={validationOverviewContent.disabledTitle}>
        <ContentBlock>{validationOverviewContent.disabledDescription}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={disabledValidationFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={disabledSnippet} fullCode={disabledFullCode} />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Expected behavior
          </Typography>
          <BulletList
            items={['Disabled fields cannot be edited', 'Validation should not block submission due to disabled fields']}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                ERROR HANDLING
      ========================================== */}
      <ContentSection id="error-handling" title={validationOverviewContent.errorHandlingTitle}>
        <ContentBlock>{validationOverviewContent.errorHandlingDescription}</ContentBlock>
        <InfoCallout>{validationOverviewContent.errorHandlingCallout}</InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title={validationOverviewContent.fullExampleTitle}>
        <ContentBlock>{validationOverviewContent.fullExampleDescription}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={fullValidationFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title={propertiesContent.title}>
        <PropsTable data={fullValidationPropsData} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RELATED DOCUMENTATION
      ========================================== */}
      <ContentSection id="related-documentation" title={relatedDocsContent.title}>
        <ChipGroup title="Components" items={relatedDocsContent.components} />
        <ChipGroup title="Features" items={relatedDocsContent.features} />
        <ChipGroup title="Fields" items={relatedDocsContent.fields} />
      </ContentSection>
    </Box>
  );
};

export default ValidationPage;

