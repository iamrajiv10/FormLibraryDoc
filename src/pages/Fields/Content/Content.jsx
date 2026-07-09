import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'skemvora';


import {
  PageHeader,
  ContentSection,
  PropertyExample,
  CodeSection,
  InfoCallout,
  ChipGroup,
  PropsSection,
  ContentBlock
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  overviewContent,
  relatedDocs,
  nextStepContent
} from './contentData';

import {
  basicExampleData,
  requiredExampleData
} from './contentData';

import {
  basicSnippet,
  basicFullCode,
  requiredSnippet,
  requiredFullCode
} from './snippetCode';

import {
  fullExampleSnippet,
  fullExampleFullCode
} from './snippetCode';

import {
  contentStyleFieldSnippet,
  contentStyleFieldFullCode,
  contentStyleGlobalSnippet,
  contentStyleGlobalFullCode
} from './snippetCode';

import { propsData } from './contentData';

function ContentField() {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <Divider sx={{ my: 2 }} />

      <ContentSection id="basic-example" title="Basic Example">
        <Typography>
          Content Fields are rendered when the field type is set to
          <Typography
            component="span"
            sx={{
              mx: 1,
              fontFamily: 'monospace',
              color: 'primary.main'
            }}
          >
            "content"
          </Typography>
          .
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={basicSnippet} fullCode={basicFullCode} />

        <InfoCallout>
          Content Field does not collect user input and does not contribute any value to the submitted form data.
        </InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="mandatory-fields" title="These fields are mandatory">
        <PropertyExample
          title="type"
          description="Defines that this object should be rendered as a Content Field."
          previewData={requiredExampleData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="content"
          description="Defines the text or message displayed inside the form."
          previewData={requiredExampleData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="properties" title="Properties">
        <PropertyExample
          title="type"
          description="Defines that this object should be rendered as a Content Field."
          previewData={[{ type: 'content' }]}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="content"
          description="Defines the text or message displayed inside the form."
          previewData={[{ type: 'content', content: 'Please fill all required fields.' }]}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="variant"
          description="Controls the visual type of the content (heading, subHeading, text)."
          previewData={[{ type: 'content', variant: 'heading', content: 'Personal Details' }]}
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="textAlign"
          description="Controls content alignment (left, center, right)."
          previewData={[{ type: 'content', content: 'Welcome', textAlign: 'center' }]}
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="style"
          description="Allows custom inline styling for a specific content block."
          previewData={[{
            type: 'content',
            content: 'Important',
            style: { color: 'red', fontSize: '20px', fontWeight: 'bold' }
          }]}
          snippet={contentStyleFieldSnippet}
          fullCode={contentStyleFieldFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="className"
          description="Allows users to apply their own CSS class."
          previewData={[{ type: 'content', content: 'Custom Heading', className: 'my-heading' }]}
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="grid"
          description="Supports the existing responsive grid system."
          previewData={[{ type: 'content', content: 'Personal Information', grid: { md: 12, xs: 12 } }]}
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <Divider sx={{ my: 2 }} />

        <PropertyExample
          title="condition"
          description="Allows Content Field to appear conditionally."
          previewData={[{
            type: 'content',
            content: 'You selected employment',
            condition: {
              logic: 'AND',
              rules: [{ field: 'employed', operator: 'equals', value: 'Yes' }]
            }
          }]}
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="styling-support" title="Styling Support">
        <Typography>
          Content Field supports global styling using <Typography component="span" sx={{ fontFamily: 'monospace' }}>formStyles</Typography>.
        </Typography>

        <CodeSection
          title="Field Styling"
          snippet={contentStyleFieldSnippet}
          fullCode={contentStyleFieldFullCode}
        />

        <CodeSection
          title="Global Styling"
          snippet={contentStyleGlobalSnippet}
          fullCode={contentStyleGlobalFullCode}
        />

        <InfoCallout>
          Styling priority: Default Library CSS → formStyles → field.style
        </InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="full-example" title="Full Example">
        <Typography>
          Scenario: Registration form sections.
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 450 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="important-behavior" title="Important Behavior">
        <ContentBlock>
          Content Field:
          <br />
          ✓ Form rendering
          <br />
          ✓ Conditional logic
          <br />
          ✓ Grid layout
          <br />
          ✓ Styling system
          <br />
          <br />
          Does not support:
          <br />
          ✗ Validation
          <br />
          ✗ Form values
          <br />
          ✗ Submission payload
          <br />
          <br />
          Explain: Content Field is a display-only component inside the form schema.
        </ContentBlock>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsSection data={propsData} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="related-documentation" title="Related Documentation">
        <ChipGroup items={relatedDocs.components} />
      </ContentSection>

      <ContentSection id="next-step" title="Next Step">
        <InfoCallout>{nextStepContent.description}</InfoCallout>
      </ContentSection>
    </Box>
  );
}

export default ContentField;

