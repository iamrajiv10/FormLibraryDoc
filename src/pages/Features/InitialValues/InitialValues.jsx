import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { ConditionalForm, Form } from 'skemvora';

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
  howItWorksContent,
  differentFieldsContent,
  conditionalFormContent,
  disabledFieldsContent,
  updatingValuesContent,
  fullExampleContent,
  propertiesContent,
  relatedDocsContent
} from './content';

import { initialValuesExampleData, conditionalInitialValuesData, fullInitialValuesData } from './initialValuesData';


import {
  basicExampleSnippet,
  basicExampleFullCode,
  conditionalExampleSnippet,
  conditionalExampleFullCode,
  fullExampleSnippet,
  fullExampleFullCode
} from './snippetCode';

import { fullValidationPropsData } from './fullCode';

const InitialValuesPage = () => {
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
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form
              data={initialValuesExampleData.formData}
              initialValues={initialValuesExampleData.initialValues}
            />
          </Box>
        </LivePreview>


        <CodeBlock language="jsx" snippet={basicExampleSnippet} fullCode={basicExampleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                HOW IT WORKS
      ========================================== */}
      <ContentSection id="how-it-works" title={howItWorksContent.title}>
        <ContentBlock>{howItWorksContent.description}</ContentBlock>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>
            Mapping uses the field name
          </Typography>
          <ContentBlock>
            When a field config has <strong>name</strong>, Form Library copies matching values from{' '}
            <strong>initialValues</strong>.
          </ContentBlock>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Example
          </Typography>
          <CodeBlock
            language="json"
            snippet={`{
  name:"email"
}`}
            fullCode={`{
  email:"test@gmail.com"
}`}
          />
        </Box>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                USING WITH DIFFERENT FIELDS
      ========================================== */}
      <ContentSection id="different-fields" title={differentFieldsContent.title}>
        <ContentBlock>{differentFieldsContent.description}</ContentBlock>

        <BulletList items={differentFieldsContent.examples} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                CONDITIONALFORM
      ========================================== */}
      <ContentSection id="conditional-form" title={conditionalFormContent.title}>
        <ContentBlock>{conditionalFormContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <ConditionalForm
              data={conditionalInitialValuesData.formData}
              initialValues={conditionalInitialValuesData.initialValues}
            />

          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={conditionalExampleSnippet}
          fullCode={conditionalExampleFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                DISABLED FIELDS
      ========================================== */}
      <ContentSection id="disabled-fields" title={disabledFieldsContent.title}>
        <ContentBlock>{disabledFieldsContent.description}</ContentBlock>

        <InfoCallout sx={{ mt: 3 }}>
          Disabled fields are not editable, but initial values still populate their display.
        </InfoCallout>

        <CodeBlock
          language="json"
          snippet={`{
  email:"user@gmail.com"
}`}
          fullCode={`{
  label:"Email",
  name:"email",
  type:"email",
  disabled:true
}`}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                UPDATING
      ========================================== */}
      <ContentSection id="updating-values" title={updatingValuesContent.title}>
        <ContentBlock>{updatingValuesContent.description}</ContentBlock>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
      <ContentSection id="full-example" title={fullExampleContent.title}>
        <ContentBlock>{fullExampleContent.description}</ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form
              data={fullInitialValuesData.formData}
              initialValues={fullInitialValuesData.initialValues}
            />

          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
      <ContentSection id="supported-properties" title={propertiesContent.title}>
        <PropsTable data={fullValidationPropsData} />
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

export default InitialValuesPage;

