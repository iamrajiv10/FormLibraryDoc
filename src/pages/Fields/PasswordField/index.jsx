import React from 'react';
import { Box, Typography } from '@mui/material';
import { Form } from 'formLibrary';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  InfoCallout,
  ChipGroup,
  PropertyExample,
  PropsSection
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  overviewContent,
  relatedDocs
} from './content';

import {
  basicExampleData,
  valueExampleData,
  disabledExampleData,
  fullExampleData
} from './example';

import { propsData } from './props';

import {
  basicSnippet,
  basicFullCode,
  requiredSnippet,
  requiredFullCode,
  errorMessageSnippet,
  errorMessageFullCode,
  valueSnippet,
  valueFullCode,
  disabledSnippet,
  disabledFullCode,
  gridSnippet,
  gridFullCode,
  styleSnippet,
  styleFullCode,
  labelStyleSnippet,
  labelStyleFullCode,
  validationSnippet,
  validationFullCode,
  fullExampleSnippet,
  fullExampleFullCode
} from './codeExample';

function PasswordFieldPage() {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <ContentSection
        id="basic-example"
        title="Basic Example"
      >
        <ContentBlock>
          Password Fields are rendered when the field type is set to
          <Typography
            component="span"
            sx={{
              mx: 1,
              fontFamily: 'monospace',
              color: 'primary.main'
            }}
          >
            "password"
          </Typography>
          .
        </ContentBlock>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={basicSnippet}
          fullCode={basicFullCode}
        />

        <InfoCallout>
          Like all Form Library fields, Password Fields support validation,
          responsive layouts, styling customization, initial values,
          disabled states, and conditional rendering.
        </InfoCallout>
      </ContentSection>

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="required"
          description="Marks the password field as mandatory."
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
          note="Default validation message: This is a required field."
        />

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when the field is empty."
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
          note="Example message: Please enter your password."
        />

        <PropertyExample
          title="value"
          description="Provide an initial value for the field."
          snippet={valueSnippet}
          fullCode={valueFullCode}
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Form data={valueExampleData} />
            </Box>
          </LivePreview>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mt: 3,
              mb: 2
            }}
          >
            Common Use Cases
          </Typography>

          <BulletList
            items={[
              'Edit Profile Forms',
              'Saved Drafts',
              'Account Recovery Workflows',
              'Review Screens'
            ]}
          />
        </PropertyExample>

        <PropertyExample
          title="disabled"
          description="Display the field while preventing modifications."
          snippet={disabledSnippet}
          fullCode={disabledFullCode}
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 400 }}>
              <Form data={disabledExampleData} />
            </Box>
          </LivePreview>

          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mt: 3,
              mb: 2
            }}
          >
            Common Examples
          </Typography>

          <BulletList
            items={[
              'Employee Management Systems',
              'User Profile Pages',
              'Customer Portals'
            ]}
          />
        </PropertyExample>

        <PropertyExample
          title="grid"
          description="Control how the field is displayed within responsive layouts."
          snippet={gridSnippet}
          fullCode={gridFullCode}
          note="Password Fields fully support Form Library's responsive grid system."
        />

                <PropertyExample
          title="style"
          description="Apply custom styling directly to the password field."
          snippet={styleSnippet}
          fullCode={styleFullCode}
          note="Use this when a specific Password Field requires custom styling."
        />

        <PropertyExample
          title="labelStyle"
          description="Apply styling to the field label."
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
          note="This allows labels to align with branding and design requirements."
        />
      </ContentSection>

      <ContentSection
        id="styling"
        title="Styling"
      >
        <ContentBlock>
          Password Fields support both field-level styling and global styling.
          Field-level styles override global form styles.
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Field Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2, mt: 4 }}
        >
          Label Styling Example
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />
      </ContentSection>

      <ContentSection
        id="validation"
        title="Validation"
      >
        <ContentBlock>
          Password Fields support Form Library's built-in validation system.
        </ContentBlock>

        <PropertyExample
          title="Required Validation"
          description="Validation automatically prevents submission when required fields are empty."
          snippet={requiredSnippet}
          fullCode={requiredFullCode}
        />

        <PropertyExample
          title="Custom Validation Message"
          description="Provide a custom error message for failed validation."
          snippet={validationSnippet}
          fullCode={validationFullCode}
          note="Example: Password is required."
        />
      </ContentSection>

      <ContentSection
        id="full-example"
        title="Full Example"
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={fullExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleFullCode}
        />

        <InfoCallout>
          This example demonstrates validation, styling,
          responsive layouts, and initial values working together.
        </InfoCallout>
      </ContentSection>

      <PropsSection data={propsData} />

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2 }}
        >
          Components
        </Typography>

        <ChipGroup items={relatedDocs.components} />

        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2, mt: 4 }}
        >
          Other Fields
        </Typography>

        <ChipGroup items={relatedDocs.fields} />

        <Typography
          variant="h6"
          sx={{ fontWeight: 600, mb: 2, mt: 4 }}
        >
          Advanced Features
        </Typography>

        <ChipGroup items={relatedDocs.features} />
      </ContentSection>

      <ContentSection
        id="next-step"
        title="Next Step"
      >
        <InfoCallout>
          Continue to the Number Field documentation to learn how
          Form Library handles numeric inputs and quantity-based
          form data.
        </InfoCallout>
      </ContentSection>
    </Box>
  );
}

export default PasswordFieldPage;