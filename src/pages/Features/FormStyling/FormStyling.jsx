import React from 'react';
import { Box, Divider } from '@mui/material';

import { Form } from 'skemvora';


import {
  PageHeader,
  ContentSection,
  ContentBlock,
  InfoCallout,
  PropsTable,
  CodeSection,
  BulletList,
  ChipGroup,
  RelatedSection,
} from '../../../components/Customs';

import LivePreviewComponent from '../../../components/LivePreview/LivePreview';
import CodeBlockComponent from '../../../components/CodeBlock/CodeBlock';

import { formStylingBasicData, formStylingFullData } from './formStylingData';

import {
  basicStylingSnippet,
  globalStylingSnippet,
  fieldLevelSnippet,
  labelStylingSnippet,
  prioritySnippet,
  labelAndGridSnippet,
  conditionalFormSnippet,
  fullExampleSnippet
} from './snippetCode';

import { basicStylingFullCode, fullExampleFullCode, supportedPropertiesData } from './fullCode';

const FormStylingPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title="Form Styling"
        description="Form Library provides multiple ways to customize the appearance of forms without modifying internal components."
        details="Developers can control individual field styling, label styling, and global form styling—so forms match different designs, brands, and application themes."
      />

      <InfoCallout sx={{ mb: 5 }}>
        Form Library supports flexible styling at multiple levels: global form styles, field styles, and label-only styles.
      </InfoCallout>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                STYLING APPROACH
      ========================================== */}
      <ContentSection id="styling-approach" title="Styling Approach">
        <ContentBlock>
          Form Library supports three levels of styling:
        </ContentBlock>

        <BulletList
          items={[
            'Global Form Styling (applied to all fields)',
            'Field Styling (applied to a specific field)',
            'Label Styling (applied only to field labels)'
          ]}
        />

        <ContentBlock>
          <strong>Priority:</strong> Field-level styles override global styles.
        </ContentBlock>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
      <ContentSection id="basic-example" title="Basic Example">
        <ContentBlock>Add Live Preview.</ContentBlock>

        <LivePreviewComponent>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form
              data={formStylingBasicData}
              formStyles={{
                label: { color: 'blue' },
                field: { borderRadius: '10px' },
                gap: '20px'
              }}
            />
          </Box>
        </LivePreviewComponent>

        <CodeBlockComponent
          language="jsx"
          snippet={basicStylingSnippet}
          fullCode={basicStylingFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            <strong>Explanation:</strong> all fields inherit these styles.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                GLOBAL FORM STYLING
      ========================================== */}
      <ContentSection id="global-form-styling" title="Global Form Styling">
        <ContentBlock>
          <strong>formStyles</strong> allows you to customize common styles across the entire form.
        </ContentBlock>

        <CodeBlockComponent language="jsx" snippet={globalStylingSnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>Global styles apply automatically to all fields.</ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FIELD LEVEL STYLING
      ========================================== */}
      <ContentSection id="field-level-styling" title="Field Level Styling">
        <ContentBlock>
          Individual fields can override global styles using the <strong>style</strong> property.
        </ContentBlock>

        <CodeBlockComponent language="json" snippet={fieldLevelSnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>Only this field receives these custom styles.</ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                LABEL STYLING
      ========================================== */}
      <ContentSection id="label-styling" title="Label Styling">
        <ContentBlock>
          Labels can be styled independently using <strong>labelStyle</strong>.
        </ContentBlock>

        <CodeBlockComponent language="json" snippet={labelStylingSnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>This affects only the label, not the input field.</ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                STYLING PRIORITY
      ========================================== */}
      <ContentSection id="styling-priority" title="Styling Priority">
        <ContentBlock>
          Hierarchy:
          <br /> Global Styles ↓ Field Styles ↓ Component Default Styles
        </ContentBlock>

        <CodeBlockComponent language="jsx" snippet={prioritySnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Example result: if global borderColor is blue but the field style sets borderColor to green, the final result is <strong>green</strong>.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                STYLING FORM LAYOUT
      ========================================== */}
      <ContentSection id="styling-form-layout" title="Styling Form Layout">
        <ContentBlock>
          Spacing can also be controlled.
        </ContentBlock>

        <CodeBlockComponent
          language="jsx"
          snippet={`formStyles={{\n  gap: "25px"\n}}`}
          fullCode={undefined}
        />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>Controls spacing between fields.</ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                STYLING WITH GRID LAYOUT
      ========================================== */}
      <ContentSection id="styling-with-grid" title="Styling With Grid Layout">
        <ContentBlock>
          Styling works together with Grid Layout.
        </ContentBlock>

        <CodeBlockComponent language="json" snippet={labelAndGridSnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Grid controls placement. Style controls appearance.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONALFORM
      ========================================== */}
      <ContentSection id="styling-with-conditional-form" title="Styling With ConditionalForm">
        <ContentBlock>
          ConditionalForm supports the same styling system because fields are still controlled through configuration.
        </ContentBlock>

        <CodeBlockComponent language="json" snippet={conditionalFormSnippet} fullCode={undefined} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>The field keeps styling after it becomes visible.</ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title="Full Example">
        <ContentBlock>
          Scenario: Registration form.
        </ContentBlock>

        <LivePreviewComponent>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form
              data={formStylingFullData}
              formStyles={{
                label: { color: '#1976d2' },
                gap: '20px'
              }}
            />
          </Box>
        </LivePreviewComponent>

        <CodeBlockComponent language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />

        <Box sx={{ mt: 3 }}>
          <BulletList items={['Global label styling', 'Global gap', 'Email custom border']} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable data={supportedPropertiesData} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RELATED DOCUMENTATION
      ========================================== */}
      <ContentSection id="related-documentation" title="Related Documentation">
        <Box sx={{ mb: 3 }}>
          <ContentBlock>
            <strong>Components</strong>
          </ContentBlock>
          <ChipGroup title="Components" items={['Form', 'ConditionalForm']} />
        </Box>

        <ChipGroup title="Features" items={['Grid Layout', 'Initial Values', 'Disabled Fields', 'Validation', 'Repeatable Group']} />

        <ChipGroup title="Fields" items={['Text Field', 'Email Field', 'Select Field']} />
      </ContentSection>
    </Box>
  );
};

export default FormStylingPage;

