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
  conditionalRenderingContent,
  fullExampleContent,
  relatedDocsContent
} from './content';

import { example1Data, example5Data, example9Data } from './dateFieldData';

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

  gridSnippet,
  gridFullCode,

  styleSnippet,
  styleFullCode,

  labelStyleSnippet,
  labelStyleFullCode,

  conditionalSnippet,
  conditionalFullCode,

  fullExampleSnippet,
  fullExampleFullCode
} from './snippetCode';

// import { fullExampleFullCode } from './fullCode';

const DateFieldPage = () => {
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
          <InfoCallout>{basicExampleContent.conclusion}</InfoCallout>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          PROPERTIES
      ========================================== */}

      <ContentSection id="properties" title={propertiesContent.title}>
        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          required
        </Typography>

        <ContentBlock>{propertiesContent.required.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={requiredSnippet} fullCode={requiredFullCode} />
        <InfoCallout sx={{ mt: 2 }}>Validation happens when the form is submitted. Refer users to Validation documentation for detailed behavior.</InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          errorMessage
        </Typography>

        <ContentBlock>{propertiesContent.errorMessage.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={errorMessageSnippet} fullCode={errorMessageFullCode} />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          disabled
        </Typography>

        <ContentBlock>{propertiesContent.disabled.description}</ContentBlock>
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example5Data} />
          </Box>
        </LivePreview>
        <CodeBlock language="jsx" snippet={disabledSnippet} fullCode={disabledFullCode} />
        <InfoCallout sx={{ mt: 2 }}>The selected date remains visible but cannot be changed. Refer users to Disabled Fields documentation.</InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          grid
        </Typography>

        <ContentBlock>{propertiesContent.grid.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={gridSnippet} fullCode={gridFullCode} />
        <InfoCallout sx={{ mt: 2 }}>{propertiesContent.grid.info}</InfoCallout>

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          style
        </Typography>

        <ContentBlock>{propertiesContent.style.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={styleSnippet} fullCode={styleFullCode} />

        <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
          labelStyle
        </Typography>

        <ContentBlock>{propertiesContent.labelStyle.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={labelStyleSnippet} fullCode={labelStyleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          CONDITIONAL RENDERING SUPPORT
      ========================================== */}

      <ContentSection
        id="conditional-rendering"
        title={conditionalRenderingContent.title}
      >
        <ContentBlock>{conditionalRenderingContent.description}</ContentBlock>
        <CodeBlock language="jsx" snippet={conditionalSnippet} fullCode={conditionalFullCode} />
        <InfoCallout sx={{ mt: 2 }}>{conditionalRenderingContent.callout}</InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          FULL EXAMPLE
      ========================================== */}

      <ContentSection id="full-example" title={fullExampleContent.title}>
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={example9Data} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>{fullExampleContent.description}</InfoCallout>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
          SUPPORTED PROPERTIES
      ========================================== */}

      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable data={propsData} />
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

export default DateFieldPage;

