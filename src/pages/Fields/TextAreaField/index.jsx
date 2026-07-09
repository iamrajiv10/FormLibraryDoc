import { Box, Typography, Grid, Divider } from '@mui/material';
import { Form } from 'skemvora';


import {
  PageHeader,
  InfoCallout,
  PropertyExample,
  RelatedSection,
  NextStepCard,
  FeatureCard,
  ContentSection,
  ChipGroup
} from '../../../components/Customs';

import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  basicExampleData,
  requiredExampleData,
  errorMessageExampleData,
  disabledExampleData,
  styleExampleData,
  labelStyleExampleData,
  fullExampleData
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
  styleSnippet,
  styleFullCode,
  labelStyleSnippet,
  labelStyleFullCode,
  fullExampleSnippet,
  fullExampleFullCode
} from './codeExample';

import { textareaFieldProps } from './props';
import { relatedDocs } from './content';
import { PropsTable } from '../../../components/Customs';
import LivePreview from '../../../components/LivePreview/LivePreview';

const TextareaField = () => {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title="Textarea Field"
        description="The Textarea Field is used to collect multi-line text input from users."
      />
            <Divider sx={{ my: 2 }} />

      <ContentSection id="basic-example" title="Basic Example">
        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Textarea fields are ideal for descriptions, comments, messages,
          feedback, and any other content that requires multiple lines.
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={basicSnippet}
          fullCode={basicFullCode}
        />

        <InfoCallout>
          Textarea Fields are rendered when the field type is set to{' '}
          <strong>"textarea"</strong>. They support validation, responsive
          layouts, styling customization, disabled states, and conditional
          rendering.
        </InfoCallout>
      </ContentSection>
            <Divider sx={{ my: 2 }} />


      <ContentSection id="properties" title="Properties">
        <PropertyExample
          title="required"
          description="Marks the textarea field as mandatory."
          data={requiredExampleData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <InfoCallout>
          If the field is empty during submission, Form Library automatically
          displays the default validation message:
          <strong> This is a required field.</strong>
        </InfoCallout>
        <Box sx={{ mb: 5 }}></Box>

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message."
          data={errorMessageExampleData}
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
          
        />

        <InfoCallout>
          Use custom error messages to provide more meaningful feedback to users.
        </InfoCallout>
        <Box sx={{ mb: 5 }}></Box>


        <PropertyExample
          title="disabled"
          description="Prevent users from editing the textarea."
          data={disabledExampleData}
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        />

        <InfoCallout>
          Disabled fields remain visible but cannot be modified.
        </InfoCallout>
        <Box sx={{ mb: 5 }}></Box>


        <PropertyExample
          title="style"
          description="Apply custom styling to a specific textarea field."
          data={styleExampleData}
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <InfoCallout>
          Field-level styles override global form styling.
        </InfoCallout>
        <Box sx={{ mb: 5 }}></Box>


        <PropertyExample
          title="labelStyle"
          description="Customize the appearance of the field label."
          data={labelStyleExampleData}
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />

        <InfoCallout>
          Label styling is useful for branding and design consistency.
        </InfoCallout>
      </ContentSection>

                  <Divider sx={{ my: 2 }} />

      <ContentSection id="textarea-behavior" title="Textarea Behavior">
        <Typography paragraph>
          Unlike standard text fields, textarea fields are designed for longer
          content and support multiple lines of user input.
        </Typography>

        <Typography paragraph>
          Typical use cases include:
        </Typography>

        <ul>
          <li>Descriptions</li>
          <li>Comments</li>
          <li>Feedback</li>
          <li>Support Messages</li>
          <li>Additional Notes</li>
        </ul>
      </ContentSection>
                  <Divider sx={{ my: 2 }} />

      <ContentSection id="validation" title="Validation">
        <PropertyExample
          title="Required Validation"
          description="Textarea fields support Form Library's built-in validation system."
          data={requiredExampleData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <InfoCallout>
          Validation automatically prevents form submission when required
          textarea fields are empty.
        </InfoCallout>
      </ContentSection>
                  <Divider sx={{ my: 2 }} />

      <ContentSection id="full-example" title="Full Example">
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={fullExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <InfoCallout>
          This example combines validation, styling, responsive layouts, and
          custom labels.
        </InfoCallout>
      </ContentSection>

            <Divider sx={{ my: 2 }} />


      <ContentSection id="supported-properties" title="Supported Properties">
        <PropsTable data={textareaFieldProps} />
      </ContentSection>

            <Divider sx={{ my: 2 }} />


<ContentSection
                id="related-documentation"
                title={relatedDocs.title}
            >
                <ChipGroup
                    title="Components"
                    items={relatedDocs.components}
                />

                <ChipGroup
                    title="Other Fields"
                    items={relatedDocs.fields}
                />

                <ChipGroup
                    title="Advanced Features"
                    items={relatedDocs.features}
                />
            </ContentSection>


      {/* <NextStepCard
        title="Radio Group"
        description="Learn how Form Library handles single-selection fields with multiple options."
      /> */}
    </Box>
  );
};

export default TextareaField;