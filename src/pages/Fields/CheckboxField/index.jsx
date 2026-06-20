import { Box, Typography } from '@mui/material';
import { Form } from 'formLibrary';

import {
  ContentSection,
  CodeSection,
  PropsSection,
  PropertyExample,
  ChipGroup
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  overviewContent,
  useCases,
  relatedComponents,
  relatedFields,
  advancedFeatures
} from './content';

import {
  basicExampleData,
  requiredExampleData,
  disabledExampleData,
  styledExampleData,
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

import { propsData } from './props';

export default function CheckboxField() {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        {overviewContent.title}
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        paragraph
      >
        {overviewContent.description}
      </Typography>

      <Typography paragraph>
        {overviewContent.details}
      </Typography>

      <ContentSection
        id="basic-example"
        title="Basic Example"
      >
        <Typography paragraph>
          The Checkbox Field is used when users need to select or confirm a
          single option.
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

        <Typography sx={{ mt: 3 }}>
          Checkbox Fields are rendered when the field type is set to
          <strong> "checkbox"</strong>.
        </Typography>

        <Typography sx={{ mt: 2 }}>
          Like all Form Library fields, Checkbox Fields support validation,
          responsive layouts, styling customization, disabled states, and
          conditional rendering.
        </Typography>
      </ContentSection>

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="required"
          description="Marks the checkbox as mandatory."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={requiredExampleData} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={requiredSnippet}
            fullCode={requiredFullCode}
          />

          <Typography sx={{ mt: 2 }}>
            If the checkbox is not selected during submission, Form Library
            automatically displays a validation message.
          </Typography>

          <Typography
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: 'action.hover',
              fontFamily: 'monospace'
            }}
          >
            This is a required field.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when the checkbox is not selected."
        >
          <CodeBlock
            language="jsx"
            snippet={errorMessageSnippet}
            fullCode={errorMessageFullCode}
          />

          <Typography
            sx={{
              mt: 2,
              p: 2,
              borderRadius: 2,
              bgcolor: 'action.hover',
              fontFamily: 'monospace'
            }}
          >
            You must accept the terms before continuing.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="disabled"
          description="Display the checkbox while preventing changes."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={disabledExampleData} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={disabledSnippet}
            fullCode={disabledFullCode}
          />

          <Typography sx={{ mt: 2 }}>
            The checkbox remains visible but cannot be checked or unchecked.
          </Typography>
        </PropertyExample>

        <PropertyExample
          title="style"
          description="Apply custom styling directly to the checkbox field."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={styledExampleData} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={styleSnippet}
            fullCode={styleFullCode}
          />
        </PropertyExample>

        <PropertyExample
          title="labelStyle"
          description="Apply styling to the checkbox label."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={styledExampleData} />
            </Box>
          </LivePreview>

          <CodeBlock
            language="jsx"
            snippet={labelStyleSnippet}
            fullCode={labelStyleFullCode}
          />
        </PropertyExample>
      </ContentSection>

            <ContentSection
        id="checkbox-behavior"
        title="Checkbox Behavior"
      >
        <Typography paragraph>
          Checkbox Fields represent a single true/false value.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          Unchecked State
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'action.hover',
            fontFamily: 'monospace',
            mb: 3
          }}
        >
          ☐ Subscribe to updates
        </Box>

        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, mb: 1 }}
        >
          Checked State
        </Typography>

        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'action.hover',
            fontFamily: 'monospace'
          }}
        >
          ☑ Subscribe to updates
        </Box>

        <Typography sx={{ mt: 3 }}>
          The user can toggle the checkbox between selected and unselected
          states.
        </Typography>
      </ContentSection>

      <ContentSection
        id="conditional-rendering-support"
        title="Conditional Rendering Support"
      >
        <Typography paragraph>
          Checkbox Fields can be used with ConditionalForm to display other
          fields based on whether the checkbox is selected.
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={`{
  label: "Do you want to provide additional details?",
  name: "provideDetails",
  type: "checkbox"
}`}
          fullCode={`{
  label: "Do you want to provide additional details?",
  name: "provideDetails",
  type: "checkbox"
}`}
        />

        <Typography sx={{ mt: 3 }}>
          A dependent field can be displayed when:
        </Typography>

        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 2,
            bgcolor: 'action.hover',
            fontFamily: 'monospace'
          }}
        >
          provideDetails === true
        </Box>

        <Typography sx={{ mt: 3 }}>
          This allows forms to dynamically show or hide fields based on user
          choices.
        </Typography>
      </ContentSection>

      <ContentSection
        id="styling"
        title="Styling"
      >
        <Typography paragraph>
          Checkbox Fields support both field-level styling and global styling.
        </Typography>

        <CodeSection title="Field Styling Example">
          <CodeBlock
            language="jsx"
            snippet={`{
  label: "Receive Updates",
  name: "updates",
  type: "checkbox",

  style: {
    gap: "10px"
  }
}`}
            fullCode={`{
  label: "Receive Updates",
  name: "updates",
  type: "checkbox",

  style: {
    gap: "10px"
  }
}`}
          />
        </CodeSection>

        <CodeSection title="Label Styling Example">
          <CodeBlock
            language="jsx"
            snippet={`{
  label: "Receive Updates",
  name: "updates",
  type: "checkbox",

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`}
            fullCode={`{
  label: "Receive Updates",
  name: "updates",
  type: "checkbox",

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`}
          />
        </CodeSection>

        <Typography sx={{ mt: 3 }}>
          Field-level styles override global form styles.
        </Typography>
      </ContentSection>

      <ContentSection
        id="validation"
        title="Validation"
      >
        <Typography paragraph>
          Checkbox Fields support Form Library's built-in validation system.
        </Typography>

        <CodeSection title="Required Validation">
          <CodeBlock
            language="jsx"
            snippet={`{
  label: "I accept the privacy policy",
  name: "privacy",
  type: "checkbox",
  required: true
}`}
            fullCode={`{
  label: "I accept the privacy policy",
  name: "privacy",
  type: "checkbox",
  required: true
}`}
          />
        </CodeSection>

        <Typography sx={{ mt: 3 }}>
          If the checkbox is not selected, validation prevents form
          submission.
        </Typography>

        <CodeSection title="Custom Validation Message">
          <CodeBlock
            language="jsx"
            snippet={`{
  label: "I accept the privacy policy",
  name: "privacy",
  type: "checkbox",
  required: true,
  errorMessage: "Please accept the privacy policy."
}`}
            fullCode={`{
  label: "I accept the privacy policy",
  name: "privacy",
  type: "checkbox",
  required: true,
  errorMessage: "Please accept the privacy policy."
}`}
          />
        </CodeSection>

        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: 2,
            bgcolor: 'action.hover',
            fontFamily: 'monospace'
          }}
        >
          Please accept the privacy policy.
        </Box>
      </ContentSection>

      <ContentSection
        id="full-example"
        title="Full Example"
      >
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

        <Typography sx={{ mt: 3 }}>
          This example demonstrates validation, styling, and responsive layouts
          working together.
        </Typography>
      </ContentSection>

      <PropsSection
        id="supported-properties"
        title="Supported Properties"
        propsData={propsData}
      />

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <ChipGroup
          title="Components"
          items={relatedComponents}
        />

        <ChipGroup
          title="Other Fields"
          items={relatedFields}
        />

        <ChipGroup
          title="Advanced Features"
          items={advancedFeatures}
        />
      </ContentSection>

      <ContentSection
        id="next-step"
        title="Next Step"
      >
        <Typography>
          Continue to the Checkbox Group documentation to learn how Form Library
          handles selecting multiple options from a list.
        </Typography>
      </ContentSection>
    </Box>
  );
}