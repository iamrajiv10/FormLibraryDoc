import { Box, Typography } from '@mui/material';
import { Form } from 'formLibrary';

import {
  PageHeader,
  ContentSection,
  BulletList,
  PropsSection,
  PropertyExample,
  ChipGroup
} from '../../../components/Customs';

import { pageContent, checkboxGroupProps, commonUseCases, relatedDocs } from './content';

import {
  basicExampleData,
  requiredExampleData,
  errorMessageExampleData,
  disabledExampleData,
  styleExampleData,
  labelStyleExampleData
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
  labelStyleFullCode
} from './codeExample';
import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

const CheckboxGroupField = () => {
  return (
    <Box>
      <PageHeader
        title={pageContent.title}
        description={pageContent.description}
      />

      {/* -------------------------------- */}
      {/* Basic Example */}
      {/* -------------------------------- */}

      <ContentSection
        id="basic-example"
        title="Basic Example"
      >
        <Typography paragraph>
          Checkbox Group Fields are rendered when the field type is set to
          {' '}
          <strong>"checkboxGroup"</strong>.
        </Typography>

        <Typography paragraph>
          Like all Form Library fields, Checkbox Group Fields support validation,
          responsive layouts, styling customization, disabled states, and
          conditional rendering.
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
      </ContentSection>

      {/* -------------------------------- */}
      {/* Properties */}
      {/* -------------------------------- */}

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropsSection props={checkboxGroupProps} />
      </ContentSection>

      {/* -------------------------------- */}
      {/* options */}
      {/* -------------------------------- */}

      <PropertyExample
        id="options"
        title="options"
        description="Defines the list of options displayed inside the checkbox group."
      >
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
      </PropertyExample>

      {/* -------------------------------- */}
      {/* required */}
      {/* -------------------------------- */}

      <PropertyExample
        id="required"
        title="required"
        description="Marks the checkbox group as mandatory."
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
          Default error message:
        </Typography>

        <CodeBlock
          language="text"
          snippet="This is a required field."
        />
      </PropertyExample>

      {/* -------------------------------- */}
      {/* errorMessage */}
      {/* -------------------------------- */}

      <PropertyExample
        id="error-message"
        title="errorMessage"
        description="Customize the validation message displayed when no option is selected."
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={errorMessageExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />
      </PropertyExample>

      {/* -------------------------------- */}
      {/* disabled */}
      {/* -------------------------------- */}

      <PropertyExample
        id="disabled"
        title="disabled"
        description="Display the checkbox group while preventing changes."
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
      </PropertyExample>

      {/* -------------------------------- */}
      {/* style */}
      {/* -------------------------------- */}

      <PropertyExample
        id="style"
        title="style"
        description="Apply custom styling directly to the checkbox group field."
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={styleExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />
      </PropertyExample>

      {/* -------------------------------- */}
      {/* labelStyle */}
      {/* -------------------------------- */}

      <PropertyExample
        id="label-style"
        title="labelStyle"
        description="Apply styling to the checkbox group label."
      >
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={labelStyleExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />
      </PropertyExample>

            {/* -------------------------------- */}
      {/* Selection Behavior */}
      {/* -------------------------------- */}

      <ContentSection
        id="selection-behavior"
        title="Selection Behavior"
      >
        <Typography paragraph>
          Checkbox Group allows users to select multiple options simultaneously.
        </Typography>

        <Typography paragraph>
          Unlike Radio Groups, selecting one option does not remove previously
          selected values.
        </Typography>

        <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
          Common Example
        </Typography>

        <BulletList
          items={[
            'React',
            'JavaScript',
            'CSS'
          ]}
        />

        <Typography paragraph sx={{ mt: 2 }}>
          Users can select any combination of these options.
        </Typography>
      </ContentSection>

      {/* -------------------------------- */}
      {/* Conditional Rendering Support */}
      {/* -------------------------------- */}

      <ContentSection
        id="conditional-rendering"
        title="Conditional Rendering Support"
      >
        <Typography paragraph>
          Checkbox Group fields work seamlessly with ConditionalForm and can be
          used to display fields based on selected values.
        </Typography>

        <Typography paragraph>
          Example conditions:
        </Typography>

        <BulletList
          items={[
            'options includes "Option 2"',
            'options includes "Option 2" AND options includes "Option 3"',
            'skills includes "React"',
            'technologies includes "Node.js"'
          ]}
        />

        <Typography paragraph sx={{ mt: 2 }}>
          This makes Checkbox Group one of the most powerful field types for
          building dynamic workflows.
        </Typography>
      </ContentSection>

      {/* -------------------------------- */}
      {/* Styling */}
      {/* -------------------------------- */}

      <ContentSection
        id="styling"
        title="Styling"
      >
        <Typography paragraph>
          Checkbox Group Fields support both field-level styling and label-level
          styling.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Field Styling Example
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={styleExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={styleSnippet}
          fullCode={styleFullCode}
        />

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Label Styling Example
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={labelStyleExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={labelStyleSnippet}
          fullCode={labelStyleFullCode}
        />

        <Typography sx={{ mt: 2 }}>
          Field-level styles override global form styles.
        </Typography>
      </ContentSection>

      {/* -------------------------------- */}
      {/* Validation */}
      {/* -------------------------------- */}

      <ContentSection
        id="validation"
        title="Validation"
      >
        <Typography paragraph>
          Checkbox Group supports Form Library&apos;s built-in validation system.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
          Required Validation
        </Typography>

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

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Custom Validation Message
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Form data={errorMessageExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={errorMessageSnippet}
          fullCode={errorMessageFullCode}
        />
      </ContentSection>

      {/* -------------------------------- */}
      {/* Common Use Cases */}
      {/* -------------------------------- */}

      <ContentSection
        id="common-use-cases"
        title="Common Use Cases"
      >
        <ChipGroup items={commonUseCases} />
      </ContentSection>

      {/* -------------------------------- */}
      {/* Supported Properties */}
      {/* -------------------------------- */}

      <ContentSection
        id="supported-properties"
        title="Supported Properties"
      >
        <PropsSection props={checkboxGroupProps} />
      </ContentSection>

      {/* -------------------------------- */}
      {/* Related Documentation */}
      {/* -------------------------------- */}

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Components
        </Typography>

        <ChipGroup items={relatedDocs.components} />

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Other Fields
        </Typography>

        <ChipGroup items={relatedDocs.fields} />

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Advanced Features
        </Typography>

        <ChipGroup items={relatedDocs.features} />
      </ContentSection>

      {/* -------------------------------- */}
      {/* Next Step */}
      {/* -------------------------------- */}

      <ContentSection
        id="next-step"
        title="Next Step"
      >
        <Typography>
          Continue to the Select Field documentation to learn how Form Library
          handles dropdown-based single selection fields.
        </Typography>
      </ContentSection>
    </Box>
  );
};

export default CheckboxGroupField;