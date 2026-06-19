import { Box, Typography } from '@mui/material';
import { Form } from 'formLibrary';

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

import {
  overviewContent,
  basicExampleContent,
  propertiesContent,
  stylingContent,
  validationContent,
  commonUseCasesContent,
  fullExampleContent,
  relatedDocsContent,
  nextStepContent
} from './content';

import {
  example1Data,
  example4Data,
  example5Data,
  example9Data
} from './example';

import { propsData } from './props';

import {
  basicExampleSnippet,
  basicExampleFullCode,

  requiredSnippet,
  requiredFullCode,

  errorMessageSnippet,
  errorMessageFullCode,

  valueSnippet,
  valueFullCode,

  disabledSnippet,
  disabledFullCode,

  gridSnippet,
  gridFullCode,

  styleSnippet,
  styleFullCode,

  labelStyleSnippet,
  labelStyleFullCode,

  fieldStylingSnippet,
  fieldStylingFullCode,

  labelStylingSnippet,
  labelStylingFullCode,

  validationSnippet,
  validationFullCode,

  customValidationSnippet,
  customValidationFullCode,

  fullExampleSnippet,
  fullExampleFullCode
} from './codeExample';

const EmailFieldPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <InfoCallout sx={{ mb: 5 }}>
        {overviewContent.conclusion}
      </InfoCallout>

      {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

      <ContentSection id="basic-example" title={basicExampleContent.title}>
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
          snippet={basicExampleSnippet}
          fullCode={basicExampleFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {basicExampleContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          PROPERTIES
      ========================================== */}

      <ContentSection id="properties" title={propertiesContent.title}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          required
        </Typography>

        <ContentBlock>
          Marks the email field as mandatory.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <InfoCallout sx={{ mt: 2 }}>
          Default validation message:
          <br />
          This is a required field.
        </InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          errorMessage
        </Typography>

        <ContentBlock>
          Customize the validation message displayed when the field is empty.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          value
        </Typography>

        <ContentBlock>
          Provide an initial value for the field.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example4Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={valueSnippet}
          fullCode={valueFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            Common use cases
          </Typography>

          <BulletList
            items={[
              'Edit Profile Forms',
              'Account Settings',
              'Saved Drafts',
              'Review Screens'
            ]}
          />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          disabled
        </Typography>

        <ContentBlock>
          Display the field while preventing modifications.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example5Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
            Common examples
          </Typography>

          <BulletList
            items={[
              'Employee Management Systems',
              'User Profile Pages',
              'Customer Portals'
            ]}
          />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          grid
        </Typography>

        <ContentBlock>
          Control how the field is displayed within responsive layouts.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={gridSnippet}
          fullCode={gridFullCode}
        />

        <InfoCallout sx={{ mt: 2 }}>
          Email Fields fully support Form Library&apos;s responsive grid system.
        </InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          style
        </Typography>

        <ContentBlock>
          Apply custom styling directly to the email field.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <InfoCallout sx={{ mt: 2 }}>
          Use this when a specific email field requires custom styling.
        </InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          labelStyle
        </Typography>

        <ContentBlock>
          Apply styling to the field label.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />

        <InfoCallout sx={{ mt: 2 }}>
          This allows labels to match branding or design requirements.
        </InfoCallout>
      </ContentSection>

            {/* ==========================================
          STYLING
      ========================================== */}

      <ContentSection id="styling" title={stylingContent.title}>
        <ContentBlock>
          {stylingContent.description}
        </ContentBlock>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Field Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={fieldStylingSnippet}
          fullCode={fieldStylingFullCode}
        />

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mt: 5,
            mb: 2
          }}
        >
          Label Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={labelStylingSnippet}
          fullCode={labelStylingFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Field-level styles override global form styles.
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          VALIDATION
      ========================================== */}

      <ContentSection id="validation" title={validationContent.title}>
        <ContentBlock>
          {validationContent.description}
        </ContentBlock>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Required Validation
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={validationSnippet}
          fullCode={validationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            If the field is left empty during submission, validation
            automatically prevents form submission.
          </InfoCallout>
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mt: 5,
            mb: 2
          }}
        >
          Custom Validation Message
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={customValidationSnippet}
          fullCode={customValidationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Email address is required.
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
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Authentication
        </Typography>

        <BulletList
          items={commonUseCasesContent.authentication}
        />

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Registration Forms
          </Typography>

          <BulletList
            items={commonUseCasesContent.registration}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            Contact Forms
          </Typography>

          <BulletList
            items={commonUseCasesContent.contactForms}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
            User Management Systems
          </Typography>

          <BulletList
            items={commonUseCasesContent.userManagement}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          FULL EXAMPLE
      ========================================== */}

      <ContentSection
        id="full-example"
        title={fullExampleContent.title}
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example9Data} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {fullExampleContent.description}
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

export default EmailFieldPage;