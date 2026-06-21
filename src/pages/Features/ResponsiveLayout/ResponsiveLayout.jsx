import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';

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
  responsiveLayoutExampleData,
  responsiveLayoutFullFormData
} from './responsiveLayoutData';

import {
  basicResponsiveSnippet,
  responsiveRowsSnippet,
  conditionalFormResponsiveSnippet,
  repeatableGroupResponsiveSnippet,
  defaultMobileBehaviorSnippet,
  fullResponsiveExampleSnippet
} from './snippetCode';

import {
  basicResponsiveFullCode,
  conditionalFormResponsiveFullCode,
  repeatableGroupResponsiveFullCode,
  fullResponsiveExampleFullCode
} from './fullCode';

const ResponsiveLayoutPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title="Responsive Layout"
        description="Form Library provides built-in responsive behavior so forms automatically adapt to different screen sizes."
        details="Developers can create desktop-friendly multi-column forms that automatically transform into mobile-friendly layouts. Responsive behavior is controlled using the grid property."
      />

      <InfoCallout sx={{ mb: 5 }}>
        Form fields can define responsive widths per breakpoint, so the same configuration renders as multi-column on desktop and stacked on mobile.
      </InfoCallout>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
      <ContentSection id="basic-example" title="Basic Example">
        <ContentBlock>Add Live Preview.</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={responsiveLayoutExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={basicResponsiveSnippet}
          fullCode={basicResponsiveFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DESKTOP VS MOBILE BEHAVIOR
      ========================================== */}
      <ContentSection id="desktop-vs-mobile" title="Desktop vs Mobile Behavior">
        <ContentBlock>
          The same form automatically adjusts based on available screen width.
        </ContentBlock>

        <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Desktop (md)
          </Typography>
          <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
            First Name{' '}
            <span style={{ padding: '0 8px' }}>|</span>
            {' '}Last Name
            <br />
            <br />
            Address
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Mobile (xs)
          </Typography>
          <Typography sx={{ mb: 0, fontFamily: 'monospace' }}>
            First Name
            <br />
            Last Name
            <br />
            Address
          </Typography>
        </Paper>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                GRID BREAKPOINTS
      ========================================== */}
      <ContentSection id="grid-breakpoints" title="Grid Breakpoints">
        <ContentBlock>Responsive layout uses a 12-column grid system.</ContentBlock>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          xs
        </Typography>
        <ContentBlock>
          Used for mobile screens.
          <br />
          <br />
          Example:
          <br />
          <code style={{ fontFamily: 'monospace' }}>xs:12</code>
          <br />
          Field takes full width.
        </ContentBlock>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          md
        </Typography>
        <ContentBlock>
          Used for desktop/tablet layouts.
          <br />
          <br />
          Example:
          <br />
          <code style={{ fontFamily: 'monospace' }}>md:6</code>
          <br />
          Field takes half width.
        </ContentBlock>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DEFAULT MOBILE BEHAVIOR
      ========================================== */}
      <ContentSection id="default-mobile" title="Default Mobile Behavior">
        <ContentBlock>
          If <strong>xs</strong> is not provided, the library automatically applies:
          <br />
          <br />
          <code style={{ fontFamily: 'monospace' }}>xs:12</code>
          <br />
          This ensures fields do not remain side-by-side on mobile.
        </ContentBlock>

        <Box sx={{ mt: 3 }}>
          <CodeBlock language="jsx" snippet={defaultMobileBehaviorSnippet} fullCode={undefined} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RESPONSIVE ROWS
      ========================================== */}
      <ContentSection id="responsive-rows" title="Responsive Rows">
        <ContentBlock>
          Different fields can have different layouts.
        </ContentBlock>

        <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Row 1:
          </Typography>
          <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
            First Name | Last Name
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Row 2:
          </Typography>
          <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
            Email
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Row 3:
          </Typography>
          <Typography sx={{ mb: 0, fontFamily: 'monospace' }}>
            City | State | Country
          </Typography>
        </Paper>

        <Box sx={{ mt: 3 }}>
          <CodeBlock language="jsx" snippet={responsiveRowsSnippet} fullCode={undefined} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONALFORM
      ========================================== */}
      <ContentSection id="with-conditional-form" title="Responsive Layout With ConditionalForm">
        <ContentBlock>
          Responsive layout works together with conditional rendering.
        </ContentBlock>

        <Box sx={{ mt: 3 }}>
          <CodeBlock
            language="jsx"
            snippet={conditionalFormResponsiveSnippet}
            fullCode={conditionalFormResponsiveFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <BulletList
            items={[
              'The field follows responsive layout',
              'The field appears only when condition matches'
            ]}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                REPEATABLE GROUP
      ========================================== */}
      <ContentSection id="with-repeatable-group" title="Responsive Layout With Repeatable Group">
        <ContentBlock>
          Fields inside Repeatable Group also support responsive behavior.
        </ContentBlock>

        <Box sx={{ mt: 3 }}>
          <CodeBlock
            language="jsx"
            snippet={repeatableGroupResponsiveSnippet}
            fullCode={repeatableGroupResponsiveFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Every repeated item follows the same responsive rules.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title="Full Example">
        <ContentBlock>
          Create a complete registration form example.
        </ContentBlock>

        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Layout
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', lineHeight: 1.9 }}>
            First Name: md:6
            <br />
            Last Name: md:6
            <br />
            Email: md:12
            <br />
            Phone: md:12
            <br />
            City: md:4
            <br />
            State: md:4
            <br />
            Country: md:4
          </Typography>
        </Box>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={responsiveLayoutFullFormData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullResponsiveExampleSnippet}
          fullCode={fullResponsiveExampleFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable
          data={[
            {
              property: 'grid',
              type: 'object',
              required: 'No',
              description: 'Controls responsive layout for a field'
            },
            {
              property: 'grid.xs',
              type: 'number',
              required: 'No',
              description: 'Mobile column width (defaults to 12 if omitted)'
            },
            {
              property: 'grid.md',
              type: 'number',
              required: 'No',
              description: 'Desktop/tablet column width'
            }
          ]}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RELATED DOCUMENTATION
      ========================================== */}
      <ContentSection id="related-documentation" title="Related Documentation">
        <ChipGroup title="Components" items={['Form', 'ConditionalForm']} />
        <ChipGroup
          title="Features"
          items={[
            'Grid Layout',
            'Conditional Rendering',
            'Repeatable Group',
            'Validation',
            'Form Styling'
          ]}
        />
        <ChipGroup title="Fields" items={['Text Field', 'Select Field', 'TextArea']} />
      </ContentSection>
    </Box>
  );
};

export default ResponsiveLayoutPage;

