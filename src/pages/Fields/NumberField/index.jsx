import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'skemvora';

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
  disabledExampleData,
  gridExampleData,
  styleExampleData,
  labelStyleExampleData,
  fullExampleData,
  prefixExampleData,
  suffixExampleData,
  maxDigitExampleData,
  precisionExampleData
} from './example';

import {
  basicSnippet,
  basicFullCode,
  requiredSnippet,
  requiredFullCode,
  errorMessageSnippet,
  errorMessageFullCode,
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
  fullExampleCode,
  prefixSnippet,
  prefixFullCode,
  suffixSnippet,
  suffixFullCode,
  maxDigitSnippet,
  maxDigitFullCode,
  precisionSnippet,
  precisionFullCode
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
            <Divider sx={{ my: 2 }} />

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
            "number"
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
            <Divider sx={{ my: 2 }} />

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
          note='Default validation message: This is a required field.'
        >
        </PropertyExample>
            <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when the field is empty."
          previewData={errorMessageExampleData}
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
          note='Example: Please enter you age.'
        >
        </PropertyExample>
                    <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="disabled"
          description="Display the field while preventing modifications."
          previewData={disabledExampleData}
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        >
        </PropertyExample>

        <PropertyExample
          title="grid"
          description="Control how the field is displayed within responsive layouts."
          previewData={gridExampleData}
          snippet={gridSnippet}
          fullCode={gridFullCode}
        >
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

        <PropertyExample
          title="prefix"
          description="Adds a static value before the number input."
          previewData={prefixExampleData}
          snippet={prefixSnippet}
          fullCode={prefixFullCode}
        />

        <PropertyExample
          title="suffix"
          description="Adds a static value after the number input."
          previewData={suffixExampleData}
          snippet={suffixSnippet}
          fullCode={suffixFullCode}
        />

        <PropertyExample
          title="maxDigits"
          description="Defines the maximum number of digits allowed in the number field."
          previewData={maxDigitExampleData}
          snippet={maxDigitSnippet}
          fullCode={maxDigitFullCode}
          note={'The user can enter up to 10 digits only.'}
        />

        <PropertyExample
          title="precision"
          description="Controls the number of decimal places allowed in the value."
          previewData={precisionExampleData}
          snippet={precisionSnippet}
          fullCode={precisionFullCode}
          note={'Allowed: 100.25  . Use "0" if do not want decimal value.'}
        />
      </ContentSection>
            <Divider sx={{ my: 2 }} />

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

        <InfoCallout>
          Field-level styles override global form styles.
        </InfoCallout>
      </ContentSection>
            <Divider sx={{ my: 2 }} />

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

        <InfoCallout >
          If the field is left empty during submission, validation automatically
          prevents form submission.
        </InfoCallout>
        <Box sx={{my:4}}></Box>

        <CodeSection
          title="Custom Validation Message"
          snippet={validationMessageSnippet}
        />

        <InfoCallout
        >
          Age is required.
        </InfoCallout>
      </ContentSection>

            <Divider sx={{ my: 2 }} />

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
            <Divider sx={{ my: 2 }} />

      <PropsSection
        id="supported-properties"
        title="Supported Properties"
        data={propsData}
      />
                  <Divider sx={{ my: 2 }} />


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