import { Box } from '@mui/material';
import { Form } from 'formLibrary';

import {
  PageHeader,
  ContentSection,
  InfoCallout,
  PropertyExample,
  PropsSection,
  ChipGroup,
  NextStepCard
} from '../../../components/Customs';

import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  overviewContent,
  dateSelectionContent,
  stylingContent,
  validationContent,
  relatedDocs
} from './content';

import {
  basicDateFieldData,
  requiredDateFieldData,
  errorMessageDateFieldData,
  disabledDateFieldData,
  styleDateFieldData,
  labelStyleDateFieldData,
  fullExampleDateFieldData
} from './example';

import { dateFieldProps } from './props';

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
import LivePreview from '../../../components/LivePreview/LivePreview';

const DateFieldPage = () => {
  return (
    <>
      <PageHeader
        title="Date Field"
        description="Collect date-based information using browser-native date inputs and calendar pickers."
      />

      <ContentSection>
        {overviewContent.map((paragraph, index) => (
          <InfoCallout
            key={index}
            severity="info"
            sx={index !== overviewContent.length - 1 ? { mb: 2 } : {}}
          >
            {paragraph}
          </InfoCallout>
        ))}
      </ContentSection>

      <ContentSection
        id="basic-example"
        title="Basic Example"
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={basicDateFieldData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={basicSnippet}
          fullCode={basicFullCode}
        />

        <InfoCallout severity="info">
          Date Fields are rendered when the field type is set to
          {' '}
          <strong>"date"</strong>
          . Users can either type a date manually or select one using the
          browser's built-in date picker.
        </InfoCallout>
      </ContentSection>

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="required"
          description="Marks the date field as mandatory."
          data={requiredDateFieldData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when the field is empty."
          data={errorMessageDateFieldData}
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />

        <PropertyExample
          title="disabled"
          description="Display the field while preventing modifications."
          data={disabledDateFieldData}
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        />

        <PropertyExample
          title="style"
          description="Apply custom styling directly to the date field."
          data={styleDateFieldData}
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <PropertyExample
          title="labelStyle"
          description="Apply custom styling to the field label."
          data={labelStyleDateFieldData}
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />
      </ContentSection>

      <ContentSection
        id="date-selection"
        title="Date Selection"
      >
        <InfoCallout severity="info">
          Date Fields support both manual date entry and calendar-based
          selection through the browser's built-in date picker. This provides
          a familiar user experience across desktop and mobile devices while
          maintaining a consistent date format.
        </InfoCallout>

        {dateSelectionContent.map((item, index) => (
          <InfoCallout
            key={index}
            severity="success"
            sx={{ mt: 2 }}
          >
            {item}
          </InfoCallout>
        ))}
      </ContentSection>

      <ContentSection
        id="styling"
        title="Styling"
      >
        <InfoCallout severity="info">
          Date Fields support both field-level styling and global styling.
          Field-level styles always take precedence over global styles.
        </InfoCallout>

        <PropertyExample
          title="Field Styling"
          description="Customize the appearance of a specific Date Field."
          data={styleDateFieldData}
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <PropertyExample
          title="Label Styling"
          description="Customize the appearance of the field label."
          data={labelStyleDateFieldData}
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />
      </ContentSection>

      <ContentSection
        id="validation"
        title="Validation"
      >
        <InfoCallout severity="info">
          Date Fields support Form Library's built-in validation system.
        </InfoCallout>

        <PropertyExample
          title="Required Validation"
          description="Prevent form submission when the field is empty."
          data={requiredDateFieldData}
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <PropertyExample
          title="Custom Validation Message"
          description="Display a custom validation message instead of the default message."
          data={errorMessageDateFieldData}
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />
      </ContentSection>

            <ContentSection
        id="full-example"
        title="Full Example"
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={fullExampleDateFieldData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <InfoCallout severity="success">
          This example demonstrates validation, styling, and responsive layouts
          working together in a single Date Field configuration.
        </InfoCallout>
      </ContentSection>

      <ContentSection
        id="supported-properties"
        title="Supported Properties"
      >
        <PropsSection properties={dateFieldProps} />
      </ContentSection>

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}
        >
          <Box>
            <ChipGroup
              title="Components"
              items={relatedDocs.components}
            />
          </Box>

          <Box>
            <ChipGroup
              title="Other Fields"
              items={relatedDocs.fields}
            />
          </Box>

          <Box>
            <ChipGroup
              title="Advanced Features"
              items={relatedDocs.features}
            />
          </Box>
        </Box>
      </ContentSection>

      <NextStepCard
        title="Textarea"
        description="Learn how Form Library handles multi-line text input and longer user responses."
      />
    </>
  );
};

export default DateFieldPage;