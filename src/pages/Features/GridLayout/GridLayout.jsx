import React from 'react';
import { Box, Divider, Paper, Typography } from '@mui/material';

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

import { Form } from 'formLibrary';


import {
  overviewContent,
  basicExampleContent,
  howItWorksContent,
  responsiveContent,
  gridCalculationContent,
  multipleRowsContent,
  conditionalCompatibilityContent,
  fullExampleContent,
  propertiesContent,
  relatedDocsContent
} from './content';


import { gridLayoutExampleData, gridLayoutMultipleRowsData, gridLayoutFullData } from './gridLayoutData';

import { gridLayoutBasicSnippet, gridLayoutBasicFullCode, gridLayoutFullSnippet, gridLayoutFullFullCode, gridPropertySnippet } from './snippetCode';
import { gridPropertyFullCode } from './fullCode';
import { propsData } from './fullCode';



const GridLayoutPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <Box sx={{ mt: 3, mb: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Grid Layout helps you build multi-column forms that stay readable on every screen size.
        </Typography>
        <BulletList
          items={[
            'Each field can define its own responsive width using grid.md and grid.xs',
            'Fields share the same row when their column widths allow it',
            'Layout automatically stacks on mobile (xs defaults to 12)'
          ]}
        />
      </Box>

      <InfoCallout sx={{ mb: 5 }}>{overviewContent.conclusion}</InfoCallout>
      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
      <ContentSection id="basic-example" title={basicExampleContent.title}>
        <ContentBlock>{basicExampleContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={gridLayoutExampleData} />

          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={gridLayoutBasicSnippet}
          fullCode={gridLayoutBasicFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                HOW IT WORKS
      ========================================== */}
      <ContentSection id="how-it-works" title={howItWorksContent.title}>
        <ContentBlock>{howItWorksContent.description}</ContentBlock>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          md
        </Typography>
        <ContentBlock>
          Controls field width on medium and larger screens.
          <br />
          <br />
          <strong>Example:</strong> md:6 means the field takes half width.
          <br />
          Two fields with md:6 can appear in the same row.
        </ContentBlock>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          xs
        </Typography>
        <ContentBlock>
          Controls field width on mobile screens.
          <br />
          <br />
          <strong>Example:</strong> xs:12 means the field takes full width on mobile.
        </ContentBlock>

        <Box sx={{ mt: 4 }}>
          <CodeBlock language="jsx" snippet={gridPropertySnippet} fullCode={gridPropertyFullCode} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RESPONSIVE BEHAVIOR
      ========================================== */}
      <ContentSection id="responsive-behavior" title={responsiveContent.title}>
        <ContentBlock>{responsiveContent.description}</ContentBlock>

        <Paper variant="outlined" sx={{ p: 3, mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Desktop (md)
          </Typography>
          <Typography sx={{ mb: 2, fontFamily: 'monospace' }}>
            | First Name | Last Name |
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

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            If <strong>xs</strong> is not provided, the library treats it as <strong>xs:12</strong> so fields stack properly on smaller screens.
          </InfoCallout>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                GRID WIDTH CALCULATION
      ========================================== */}
      <ContentSection id="grid-calculation" title={gridCalculationContent.title}>
        <ContentBlock>{gridCalculationContent.description}</ContentBlock>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            12-column system
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', lineHeight: 1.9 }}>
            • md:12 = full width
            <br />
            • md:6 = half width
            <br />
            • md:4 = one third width
            <br />
            • md:3 = one fourth width
          </Typography>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Example: md:4 + md:4 + md:4
          </Typography>
          <Typography sx={{ fontFamily: 'monospace', lineHeight: 1.9 }}>
            | Field | Field | Field |
          </Typography>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                MULTIPLE ROWS
      ========================================== */}
      <ContentSection id="multiple-rows" title={multipleRowsContent.title}>
        <ContentBlock>{multipleRowsContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={gridLayoutMultipleRowsData} />

          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={gridLayoutFullSnippet}
          fullCode={gridLayoutFullFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONAL COMPATIBILITY
      ========================================== */}
      <ContentSection id="conditional-compatibility" title={conditionalCompatibilityContent.title}>
        <ContentBlock>{conditionalCompatibilityContent.description}</ContentBlock>

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
          Example
        </Typography>

        <CodeBlock language="jsx" snippet={conditionalCompatibilityContent.codeSnippet} fullCode={undefined} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title={fullExampleContent.title}>
        <ContentBlock>{fullExampleContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={gridLayoutFullData} />

          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={gridLayoutFullSnippet} fullCode={gridLayoutFullFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title={propertiesContent.title}>
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

export default GridLayoutPage;

