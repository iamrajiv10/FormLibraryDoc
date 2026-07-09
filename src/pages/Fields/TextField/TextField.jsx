import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'skemvora';


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
  fullExampleContent,
  relatedDocsContent,
  nextStepContent
} from './content';

import {
  example1Data,
  example4Data,
  example5Data,
  example9Data
} from './textFieldData';

import { propsData } from './props';

import {
  basicExampleSnippet,
  basicExampleFullCode,

  requiredSnippet,
  requiredFullCode,

  errorMessageSnippet,
  errorMessageFullCode,

  disabledSnippet,
  disabledFullCode,

  initialValuesSnippet,
  initialValuesFullCode,

  placeholderSnippet,
  placeholderFullCode,

  gridSnippet,
  gridFullCode,

  styleSnippet,
  styleFullCode,

  labelStyleSnippet,
  labelStyleFullCode,

  prefixSnippet,
  prefixFullCode,

  suffixSnippet,
  suffixFullCode,

  validationSnippet,
  validationFullCode,

  customValidationSnippet,
  customValidationFullCode,

  fullExampleSnippet,
  fullExampleFullCode
} from './snippetCode';

const TextFieldPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <InfoCallout sx={{ mb: 5 }}>{overviewContent.conclusion}</InfoCallout>

      <Divider sx={{ my: 2 }} />
      {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

      <ContentSection id="basic-example" title={basicExampleContent.title}>
        <ContentBlock>{basicExampleContent.description}</ContentBlock>

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
          <InfoCallout>{basicExampleContent.conclusion}</InfoCallout>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          PROPERTIES
      ========================================== */}

      <ContentSection id="properties" title={propertiesContent.title}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          label
        </Typography>

        <ContentBlock>
          Defines the text displayed above the field.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={placeholderSnippet}
          fullCode={placeholderFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          required
        </Typography>

        <ContentBlock>
          Makes the field mandatory during validation.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <InfoCallout sx={{ mt: 2 }}>
          Validation happens when the form is submitted.
        </InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          errorMessage
        </Typography>

        <ContentBlock>
          Customize validation error message.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          disabled
        </Typography>

        <ContentBlock>
          Disables user interaction with the field.
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

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          initialValues Support
        </Typography>

        <ContentBlock>
          Prefilled values are passed through the Form component using initialValues.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={initialValuesSnippet}
          fullCode={initialValuesFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          placeholder
        </Typography>

        <ContentBlock>
          Displays hint text inside the field.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={placeholderSnippet}
          fullCode={placeholderFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          grid
        </Typography>

        <ContentBlock>
          Controls responsive field layout.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={gridSnippet}
          fullCode={gridFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          style
        </Typography>

        <ContentBlock>
          Customize field appearance.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          labelStyle
        </Typography>

        <ContentBlock>
          Customize label appearance.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />


        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          Prefix
        </Typography>

        <ContentBlock>
          Adds a static value before the input field content.<br />
          It is useful when the field needs a fixed indicator or symbol before the entered value.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={prefixSnippet}
          fullCode={prefixFullCode}
        />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          Suffix
        </Typography>

        <ContentBlock>
          Adds a static value after the input field content.<br />
          It is useful when the field needs additional information after the entered value.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={suffixSnippet}
          fullCode={suffixFullCode}
        />
      </ContentSection>



      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          STYLING
      ========================================== */}

      <ContentSection id="styling" title={stylingContent.title}>
        <ContentBlock>{stylingContent.description}</ContentBlock>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Field Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mt: 5, mb: 2 }}
        >
          Label Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Field-level styles override global form styles.
          </InfoCallout>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          VALIDATION
      ========================================== */}

      <ContentSection id="validation" title={validationContent.title}>
        <ContentBlock>{validationContent.description}</ContentBlock>

        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          required validation
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={validationSnippet}
          fullCode={validationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            If the field is left empty during submission, validation automatically prevents form submission.
          </InfoCallout>
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mt: 5, mb: 2 }}
        >
          custom validation message
        </Typography>

        <ContentBlock>
          Customize validation error message.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={customValidationSnippet}
          fullCode={customValidationFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

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

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          SUPPORTED PROPERTIES
      ========================================== */}

      <ContentSection
        id="supported-properties"
        title="Supported Properties"
      >
        <PropsTable data={propsData} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          RELATED DOCUMENTATION
      ========================================== */}

      <ContentSection
        id="related-documentation"
        title={relatedDocsContent.title}
      >
        <ChipGroup title="Components" items={relatedDocsContent.components} />
        <ChipGroup title="Other Fields" items={relatedDocsContent.fields} />
        <ChipGroup title="Advanced Features" items={relatedDocsContent.features} />
      </ContentSection>

      {/* ==========================================
          NEXT STEP
      ========================================== */}

      <ContentSection
        id="next-step"
        title={nextStepContent.title}
      >
        <InfoCallout>{nextStepContent.description}</InfoCallout>
      </ContentSection>
    </Box>
  );
};

export default TextFieldPage;

