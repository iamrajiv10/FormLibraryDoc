import { Box, Typography } from '@mui/material';
import { Form } from 'formLibrary';

import {
  PageHeader,
  ContentSection,
  BulletList,
  PropsSection,
  PropertyExample,
  CodeSection,
  RelatedSection,
  NextStepCard,
  InfoCallout,
  ChipGroup
} from '../../../components/Customs';

import {
  overviewContent,
  relatedDocs,
  nextStepContent
} from './content';

import {
  basicExampleData,
  requiredExampleData,
  errorMessageExampleData,
  valueExampleData,
  disabledExampleData,
  gridExampleData,
  styleExampleData,
  labelStyleExampleData,
  fullExampleData
} from './example';

import {
  basicSnippet,
  basicFullCode,
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
  stylingFieldSnippet,
  stylingLabelSnippet,
  validationSnippet,
  validationMessageSnippet,
  fullExampleSnippet,
  fullExampleCode
} from './codeExample';

import { propsData } from './props';
import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

function NumberField() {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <ContentSection
        id="basic-example"
        title="Basic Example"
      >
        <Typography >
          Number Fields are rendered when the field type is set to
          <Typography
            component="span"
            sx={{
              mx: 1,
              fontFamily: 'monospace',
              color: 'primary.main'
            }}
          >
            "password"
          </Typography>
          .
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={basicSnippet}
          fullCode={basicFullCode}
        />

        <InfoCallout>
          Like all Form Library fields, Number Fields support validation,
          responsive layouts, styling customization, initial values,
          disabled states, and conditional rendering.
        </InfoCallout>
      </ContentSection>

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="required"
          description="Marks the number field as mandatory."
          previewData={requiredExampleData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        >
          <Typography variant="body2" color="text.secondary">
            Default validation message:
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontFamily: 'monospace'
            }}
          >
            This is a required field.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when the field is empty."
          previewData={errorMessageExampleData}
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        >
          <Typography variant="body2" color="text.secondary">
            Example:
          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontFamily: 'monospace'
            }}
          >
            Please enter your age.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="value"
          description="Provide an initial value for the field."
          previewData={valueExampleData}
          snippet={valueSnippet}
          fullCode={valueFullCode}
        >
          <Typography
            variant="subtitle2"
            sx={{ mt: 3, mb: 1 }}
          >
            Common use cases
          </Typography>

          <BulletList
            items={[
              'Displaying existing data',
              'Edit forms',
              'Saved drafts',
              'Profile management screens'
            ]}
          />
        </PropertyExample>

        <PropertyExample
          title="disabled"
          description="Display the field while preventing modifications."
          previewData={disabledExampleData}
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        >
          <Typography
            variant="subtitle2"
            sx={{ mt: 3, mb: 1 }}
          >
            Common examples
          </Typography>

          <BulletList
            items={[
              'Employee records',
              'Profile review screens',
              'System generated values'
            ]}
          />
        </PropertyExample>

        <PropertyExample
          title="grid"
          description="Control how the field is displayed within responsive layouts."
          previewData={gridExampleData}
          snippet={gridSnippet}
          fullCode={gridFullCode}
        >
          <Typography >
            Number Fields fully support Form Library's responsive grid system.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="style"
          description="Apply custom styling directly to the number field."
          previewData={styleExampleData}
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <PropertyExample
          title="labelStyle"
          description="Apply styling to the field label."
          previewData={labelStyleExampleData}
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />
      </ContentSection>

      <ContentSection
        id="styling"
        title="Styling"
      >
        <Typography >
          Number Fields support both field-level styling and global styling.
        </Typography>

        <CodeSection
          title="Field Styling Example"
          snippet={stylingFieldSnippet}
        />

        <CodeSection
          title="Label Styling Example"
          snippet={stylingLabelSnippet}
        />

        <Typography sx={{ mt: 2 }}>
          Field-level styles override global form styles.
        </Typography>
      </ContentSection>

      <ContentSection
        id="validation"
        title="Validation"
      >
        <Typography >
          Number Fields support Form Library&apos;s built-in validation system.
        </Typography>

        <CodeSection
          title="Required Validation"
          snippet={validationSnippet}
        />

        <Typography >
          If the field is left empty during submission, validation automatically
          prevents form submission.
        </Typography>

        <CodeSection
          title="Custom Validation Message"
          snippet={validationMessageSnippet}
        />

        <Typography
          sx={{
            mt: 2,
            fontFamily: 'monospace'
          }}
        >
          Age is required.
        </Typography>
      </ContentSection>

      <ContentSection
        id="full-example"
        title="Full Example"
      >
        <Typography >
          This example demonstrates validation, styling, responsive layouts,
          and initial values working together.
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 450 }}>
            <Form data={fullExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleCode}
        />
      </ContentSection>

      <PropsSection
        id="supported-properties"
        title="Supported Properties"
        data={propsData}
      />

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Components
        </Typography>

        <ChipGroup items={relatedDocs.components} />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 4,
            mb: 2
          }}
        >
          Other Fields
        </Typography>

        <ChipGroup items={relatedDocs.fields} />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mt: 4,
            mb: 2
          }}
        >
          Advanced Features
        </Typography>

        <ChipGroup items={relatedDocs.features} />
      </ContentSection>

      <ContentSection
        id="next-step"
        title="Next Step"
      >
        <InfoCallout>
          {nextStepContent.description}
        </InfoCallout>
      </ContentSection>

    </Box>
  );
}

export default NumberField;