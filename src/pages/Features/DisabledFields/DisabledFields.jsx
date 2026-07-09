import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

import { ConditionalForm, Form } from 'formLibrary';

import {
  BulletList,
  ChipGroup,
  ContentBlock,
  ContentSection,
  InfoCallout,
  PageHeader,
  PropsTable
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';


import {
  disabledFieldsFormData,
  disabledFieldsInitialValuesData,
  disabledFieldsConditionalFormData,
  disabledDifferentFieldTypesData,
  disabledFullExampleData
} from './disabledFieldsData';

import {
  basicDisabledFieldsSnippet,
  disabledWithInitialValuesSnippet,
  disabledWithConditionalFormSnippet,
  differentTypesDisabledSnippet,
  fullExampleSnippet
} from './snippetCode';

import {
  basicDisabledFieldsFullCode,
  disabledWithInitialValuesFullCode,
  disabledWithConditionalFormFullCode,
  differentTypesDisabledFullCode,
  fullDisabledFieldsFullCode,
  fullDisabledPropsData
} from './fullCode';

const DisabledFieldsPage = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title="Disabled Fields"
        description="Disabled Fields allow developers to display form fields that users can view but cannot modify."
        details="This is useful when some information should be visible but should not be changed by the user. Disabled fields maintain their value and UI appearance while preventing user interaction."
      />

      <InfoCallout sx={{ mb: 5 }}>
        Disabled fields allow developers to show information without letting users change it.
      </InfoCallout>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
      <ContentSection id="basic-example" title="Basic Example">
        <ContentBlock>Add Live Preview.</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={disabledFieldsFormData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={basicDisabledFieldsSnippet} fullCode={basicDisabledFieldsFullCode} />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Usage
          </Typography>
          <ContentBlock>
            <strong>Form</strong> receives the field configuration via <strong>data</strong>. The Email field will be visible but the user cannot edit it.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                HOW DISABLED FIELDS WORK
      ========================================== */}
      <ContentSection id="how-disabled-fields-work" title="How Disabled Fields Work">
        <ContentBlock>
          The <strong>disabled</strong> property is added inside the field configuration.
        </ContentBlock>

        <CodeBlock
          language="json"
          snippet={`{
  label:"Email",
  name:"email",
  type:"email",
  disabled:true
}`}
          fullCode={undefined}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            When disabled:
          </Typography>
          <BulletList
            items={['field remains visible', 'user interaction is blocked', 'value is preserved', 'styling remains consistent']}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DISABLED FIELDS WITH INITIAL VALUES
      ========================================== */}
      <ContentSection id="disabled-fields-with-initial-values" title="Disabled Fields With Initial Values">
        <ContentBlock>
          Edit profile forms often require showing existing information that should not be changed.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={disabledFieldsInitialValuesData.formData} initialValues={disabledFieldsInitialValuesData.initialValues} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={disabledWithInitialValuesSnippet}
          fullCode={disabledWithInitialValuesFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Result
          </Typography>
          <ContentBlock>
            Email is displayed with existing data but cannot be edited.
          </ContentBlock>
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONALFORM
      ========================================== */}
      <ContentSection id="disabled-fields-with-conditional-form" title="Disabled Fields With ConditionalForm">
        <ContentBlock>
          Disabled fields can also be used inside <strong>ConditionalForm</strong>.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <ConditionalForm
              data={disabledFieldsConditionalFormData.formData}
              initialValues={disabledFieldsConditionalFormData.initialValues}
            />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={disabledWithConditionalFormSnippet}
          fullCode={disabledWithConditionalFormFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Explanation
          </Typography>
          <BulletList
            items={['the field follows conditional rendering rules', 'it becomes visible when the condition matches', 'it remains disabled']}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DIFFERENT FIELD TYPES
      ========================================== */}
      <ContentSection id="disabled-fields-with-different-types" title="Disabled Fields With Different Field Types">
        <ContentBlock>
          The <strong>disabled</strong> property is supported across all field types.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={disabledDifferentFieldTypesData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={differentTypesDisabledSnippet}
          fullCode={differentTypesDisabledFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Examples
          </Typography>
          <BulletList
            items={[
              'Text Field: disabled:true',
              'Select Field: disabled:true',
              'Radio Group: disabled:true',
              'Checkbox: disabled:true',
              'Checkbox Group: disabled:true'
            ]}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DISABLED VS EDITABLE
      ========================================== */}
      <ContentSection id="disabled-vs-editable" title="Disabled vs Editable Fields">
        <ContentBlock>
          Disabled fields are visible but user interaction is prevented.
        </ContentBlock>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Editable
          </Typography>
          <BulletList items={['User can enter value', 'User can modify value', 'User can select options']} />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Disabled
          </Typography>
          <BulletList items={['User can view value', 'User cannot modify value', 'User cannot interact with field']} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title="Full Example">
        <ContentBlock>
          Scenario: User profile update.
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={disabledFullExampleData.formData} initialValues={disabledFullExampleData.initialValues} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullDisabledFieldsFullCode} />

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Rules
          </Typography>
          <BulletList items={['Name editable', 'Email disabled', 'Account Type disabled']} />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable data={fullDisabledPropsData} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                RELATED DOCUMENTATION
      ========================================== */}
      <ContentSection id="related-documentation" title="Related Documentation">
        <ChipGroup title="Components" items={['Form', 'ConditionalForm']} />
        <ChipGroup
          title="Features"
          items={['Initial Values', 'Validation', 'Grid Layout', 'Conditional Rendering', 'Repeatable Group', 'Disabled Fields']}
        />
        <ChipGroup
          title="Fields"
          items={['Text Field', 'Select Field', 'Checkbox', 'Radio Group', 'Checkbox Group', 'Email Field']}
        />
      </ContentSection>
    </Box>
  );
};

export default DisabledFieldsPage;

