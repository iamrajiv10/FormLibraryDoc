import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

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

import { repeatableGroupFormData } from './repeatableGroupData';

import {
  basicRepeatableSnippet,
  repeatableUsageSnippet,
  howItWorksSnippet,
  addButtonPositionSnippet,
  deleteButtonPositionSnippet,
  gridLayoutSnippet,
  validationSnippet,
  initialValuesSnippet,
  conditionalRenderingSnippet,
  fullExampleSnippet
} from './snippetCode';

import {
  basicRepeatableFullCode,
  repeatableUsageFullCode,
  howItWorksFullCode,
  addButtonPositionFullCode,
  deleteButtonPositionFullCode,
  gridLayoutFullCode,
  validationFullCode,
  initialValuesFullCode,
  conditionalRenderingFullCode,
  fullExampleFullCode,
  repeatableGroupPropsData
} from './fullCode';

const RepeatableGroupPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title="Repeatable Group"
        description="Repeatable Group allows developers to create dynamic sections where users can add or remove multiple sets of fields."
        details="Instead of creating duplicate fields manually, developers can define one group structure and allow users to create multiple entries dynamically."
      />

      <InfoCallout sx={{ mb: 5 }}>
        Repeatable Group is ideal for repeating data like education history, work experience, addresses, or certifications.
      </InfoCallout>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="common-examples" title="Common Examples">
        <BulletList
          items={['Education history', 'Work experience', 'Multiple addresses', 'Certifications']}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="basic-example" title="Basic Example">
        <ContentBlock>Add Live Preview.</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={repeatableGroupFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={basicRepeatableSnippet} fullCode={basicRepeatableFullCode} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Initially one group appears. Users can click <strong>Add</strong> to create another education entry.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="how-it-works" title="How Repeatable Group Works">
        <ContentBlock>
          Repeatable Group contains:
        </ContentBlock>
        <BulletList items={['group name', 'fields configuration', 'add control', 'delete control']} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            <strong>Flow:</strong>
          </ContentBlock>
        </Box>

        <Typography
          sx={{
            mt: 1,
            mb: 0,
            p: 3,
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
            bgcolor: 'background.paper'
          }}
        >
          <div>User clicks Add</div>
          <div style={{ marginTop: 8 }}>↓</div>
          <div style={{ marginTop: 8 }}>New field group is created</div>
          <div style={{ marginTop: 8 }}>↓</div>
          <div style={{ marginTop: 8 }}>User fills information</div>
          <div style={{ marginTop: 8 }}>↓</div>
          <div style={{ marginTop: 8 }}>User can add more groups</div>
        </Typography>

        <Box sx={{ mt: 3 }}>
          <CodeBlock language="jsx" snippet={howItWorksSnippet} fullCode={howItWorksFullCode} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="adding-multiple-entries" title="Adding Multiple Entries">
        <ContentBlock>
          Each group maintains its own values.
        </ContentBlock>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontFamily: 'monospace', lineHeight: 1.8 }}>
            Education 1
            <br />
            University
            <br />
            Institute
            <br />
            Year
            <br />
            <br />
            Click Add
            <br />
            <br />
            Education 2
            <br />
            University
            <br />
            Institute
            <br />
            Year
          </Typography>
        </Box>

        <CodeBlock language="jsx" snippet={repeatableUsageSnippet} fullCode={repeatableUsageFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="delete-group" title="Delete Group">
        <ContentBlock>
          Users can remove unwanted entries. Delete action removes only that specific group.
        </ContentBlock>

        <Box sx={{ mt: 2 }}>
          <Typography sx={{ fontFamily: 'monospace', lineHeight: 1.8 }}>
            Education 1
            <br />
            [Delete]
          </Typography>
        </Box>

        <CodeBlock language="jsx" snippet={deleteButtonPositionSnippet} fullCode={deleteButtonPositionFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="add-button-position" title="Add Button Position">
        <ContentBlock>
          Developers can control where the add button appears.
        </ContentBlock>

        <BulletList items={['header-left', 'header-right', 'bottom-left', 'bottom-right']} />

        <CodeBlock language="jsx" snippet={addButtonPositionSnippet} fullCode={addButtonPositionFullCode} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Example: <strong>addButtonPosition="header-right"</strong>
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="delete-button-position" title="Delete Button Position">
        <ContentBlock>
          Delete button position can also be configured.
        </ContentBlock>

        <BulletList items={['header-left', 'header-right', 'bottom-left', 'bottom-right']} />

        <CodeBlock language="jsx" snippet={deleteButtonPositionSnippet} fullCode={deleteButtonPositionFullCode} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Example: <strong>deleteButtonPosition="header-right"</strong>
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="grid-layout" title="Repeatable Group With Grid Layout">
        <ContentBlock>
          Repeatable Group supports grid layout inside fields. Each repeated item follows the same responsive layout.
        </ContentBlock>

        <CodeBlock language="jsx" snippet={gridLayoutSnippet} fullCode={gridLayoutFullCode} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Example uses <strong>grid.md</strong> and <strong>grid.xs</strong> per field.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="with-validation" title="Repeatable Group With Validation">
        <ContentBlock>
          Fields inside Repeatable Group support normal validation. Each added group is validated separately.
        </ContentBlock>

        <CodeBlock language="jsx" snippet={validationSnippet} fullCode={validationFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="initial-values" title="Repeatable Group With Initial Values">
        <ContentBlock>
          Existing data can be loaded into repeatable sections.
        </ContentBlock>

        <CodeBlock language="jsx" snippet={initialValuesSnippet} fullCode={initialValuesFullCode} />

        <Box sx={{ mt: 3 }}>
          <ContentBlock>
            Multiple groups can be prefilled.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="conditional-rendering" title="Repeatable Group With Conditional Rendering">
        <ContentBlock>
          Fields inside repeatable groups can also use conditions. Each repeated section maintains its own conditional logic.
        </ContentBlock>

        <CodeBlock language="jsx" snippet={conditionalRenderingSnippet} fullCode={conditionalRenderingFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="full-example" title="Full Example">
        <ContentBlock>
          Scenario: Education history form.
          <br />
          Allow: Add multiple education records, delete records, grid layout, validation.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={repeatableGroupFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable data={repeatableGroupPropsData} />

        <Box sx={{ mt: 3 }}>
          <ChipGroup
            title="Related Documentation"
            items={[
              'Form',
              'ConditionalForm',
              'Grid Layout',
              'Validation',
              'Initial Values',
              'Button Configuration',
              'Form Styling'
            ]}
          />
        </Box>
      </ContentSection>
    </Box>
  );
};

export default RepeatableGroupPage;

