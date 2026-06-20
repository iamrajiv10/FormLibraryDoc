import { Box } from '@mui/material';
import { Form } from 'formLibrary';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  InfoCallout,
  BulletList,
  PropertyExample,
  PropsSection
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  overviewContent,
  commonUseCases,
  relatedFields,
  advancedFeatures
} from './content';

import {
  basicExampleData,
  requiredExampleData,
  errorMessageExampleData,
  disabledExampleData,
  fullExampleData
} from './example';

import {
  radioBasicSnippet,
  radioBasicFullCode,
  radioOptionsSnippet,
  radioOptionsFullCode,
  radioRequiredSnippet,
  radioRequiredFullCode,
  radioErrorMessageSnippet,
  radioErrorMessageFullCode,
  radioDisabledSnippet,
  radioDisabledFullCode,
  radioGridSnippet,
  radioGridFullCode,
  radioStyleSnippet,
  radioStyleFullCode,
  radioLabelStyleSnippet,
  radioLabelStyleFullCode,
  radioFullExampleSnippet,
  radioFullExampleFullCode
} from './codeExample';

import { propsData } from './props';

const RadioGroup = () => {
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
        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={radioBasicSnippet}
          fullCode={radioBasicFullCode}
        />

        <ContentBlock>
          Radio Group Fields are rendered when the field type is set to
          {' '}<strong>"radio"</strong>.
        </ContentBlock>

        <ContentBlock>
          Like all Form Library fields, Radio Groups support validation,
          responsive layouts, styling customization, disabled states,
          and conditional rendering.
        </ContentBlock>
      </ContentSection>

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="options"
          description="Defines the available choices displayed inside the radio group."
          snippet={radioOptionsSnippet}
          fullCode={radioOptionsFullCode}
        >
          <InfoCallout>
            The user can select only one option from the available choices.
          </InfoCallout>
        </PropertyExample>

        <PropertyExample
          title="required"
          description="Marks the radio group as mandatory."
          snippet={radioRequiredSnippet}
          fullCode={radioRequiredFullCode}
          note="This is a required field."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={requiredExampleData} />
            </Box>
          </LivePreview>
        </PropertyExample>

        <PropertyExample
          title="errorMessage"
          description="Customize the validation message displayed when no option is selected."
          snippet={radioErrorMessageSnippet}
          fullCode={radioErrorMessageFullCode}
          note="Please select an option."
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={errorMessageExampleData} />
            </Box>
          </LivePreview>
        </PropertyExample>

        <PropertyExample
          title="disabled"
          description="Display the radio group while preventing selection changes."
          snippet={radioDisabledSnippet}
          fullCode={radioDisabledFullCode}
        >
          <LivePreview>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Form data={disabledExampleData} />
            </Box>
          </LivePreview>

          <InfoCallout>
            The options remain visible but cannot be changed.
          </InfoCallout>
        </PropertyExample>

        <PropertyExample
          title="grid"
          description="Control how the field is displayed within responsive layouts."
          snippet={radioGridSnippet}
          fullCode={radioGridFullCode}
        >
          <InfoCallout>
            Radio Group Fields fully support Form Library&apos;s responsive grid system.
            If xs is not provided, Form Library automatically treats it as xs: 12.
          </InfoCallout>
        </PropertyExample>

        <PropertyExample
          title="style"
          description="Apply custom styling directly to the radio group field."
          snippet={radioStyleSnippet}
          fullCode={radioStyleFullCode}
        >
          <InfoCallout>
            Use this when a specific Radio Group requires custom styling.
          </InfoCallout>
        </PropertyExample>

        <PropertyExample
          title="labelStyle"
          description="Apply styling to the field label."
          snippet={radioLabelStyleSnippet}
          fullCode={radioLabelStyleFullCode}
        />
      </ContentSection>

            <ContentSection
        id="radio-selection-behavior"
        title="Radio Selection Behavior"
      >
        <ContentBlock>
          Radio Groups allow only one option to be selected at a time.
        </ContentBlock>

        <InfoCallout>
          ○ Yes
          <br />
          ● No
        </InfoCallout>

        <ContentBlock>
          Selecting another option automatically removes the previous selection.
        </ContentBlock>

        <ContentBlock>
          This makes Radio Groups suitable for single-choice decisions.
        </ContentBlock>
      </ContentSection>

      <ContentSection
        id="conditional-rendering-support"
        title="Conditional Rendering Support"
      >
        <ContentBlock>
          Radio Group fields can be used with ConditionalForm to display other
          fields based on the selected value.
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={`{
  label: "Are you employed?",
  name: "employed",
  type: "radio",

  options: [
    "Yes",
    "No"
  ]
}`}
          fullCode={`{
  label: "Are you employed?",
  name: "employed",
  type: "radio",

  options: [
    "Yes",
    "No"
  ]
}`}
        />

        <ContentBlock>
          A dependent field can be displayed when:
        </ContentBlock>

        <InfoCallout>
          employed === "Yes"
        </InfoCallout>

        <ContentBlock>
          This allows dynamic forms where fields appear based on user selections.
        </ContentBlock>
      </ContentSection>

      <ContentSection
        id="styling"
        title="Styling"
      >
        <ContentBlock>
          Radio Group Fields support both field-level styling and global styling.
        </ContentBlock>

        <PropertyExample
          title="Field Styling Example"
          snippet={`{
  label: "Select Option",
  name: "option",
  type: "radio",

  options: [
    "A",
    "B"
  ],

  style: {
    marginTop: "10px"
  }
}`}
          fullCode={`import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Option",
      name: "option",
      type: "radio",
      options: ["A", "B"],
      style: {
        marginTop: "10px"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`}
        />

        <PropertyExample
          title="Label Styling Example"
          snippet={`{
  label: "Select Option",
  name: "option",
  type: "radio",

  options: [
    "A",
    "B"
  ],

  labelStyle: {
    color: "#1565c0",
    fontWeight: "bold"
  }
}`}
          fullCode={`import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Option",
      name: "option",
      type: "radio",
      options: ["A", "B"],
      labelStyle: {
        color: "#1565c0",
        fontWeight: "bold"
      }
    }
  ];

  return <Form data={formData} />;
}

export default Example;`}
        />

        <InfoCallout>
          Field-level styles override global form styles.
        </InfoCallout>
      </ContentSection>

      <ContentSection
        id="validation"
        title="Validation"
      >
        <ContentBlock>
          Radio Groups support Form Library&apos;s built-in validation system.
        </ContentBlock>

        <PropertyExample
          title="Required Validation"
          snippet={`{
  label: "Select Plan",
  name: "plan",
  type: "radio",

  options: [
    "Basic",
    "Premium"
  ],

  required: true
}`}
          fullCode={`import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Plan",
      name: "plan",
      type: "radio",
      options: ["Basic", "Premium"],
      required: true
    }
  ];

  return <Form data={formData} />;
}

export default Example;`}
        />

        <ContentBlock>
          If the user does not select any option, validation prevents form submission.
        </ContentBlock>

        <PropertyExample
          title="Custom Validation Message"
          snippet={`{
  label: "Select Plan",
  name: "plan",
  type: "radio",

  options: [
    "Basic",
    "Premium"
  ],

  required: true,

  errorMessage: "Please select a plan."
}`}
          fullCode={`import { Form } from "formLibrary";

function Example() {
  const formData = [
    {
      label: "Select Plan",
      name: "plan",
      type: "radio",
      options: ["Basic", "Premium"],
      required: true,
      errorMessage: "Please select a plan."
    }
  ];

  return <Form data={formData} />;
}

export default Example;`}
          note="Please select a plan."
        />
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
          snippet={radioFullExampleSnippet}
          fullCode={radioFullExampleFullCode}
        />

        <ContentBlock>
          This example demonstrates options, validation, styling, and responsive
          layouts working together.
        </ContentBlock>
      </ContentSection>

      <PropsSection data={propsData} />

      <ContentSection
        id="related-documentation"
        title="Related Documentation"
      >
        <Box sx={{ mb: 4 }}>
          <BulletList
            title="Components"
            items={[
              'Form',
              'ConditionalForm'
            ]}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <BulletList
            title="Other Fields"
            items={[
              'Checkbox Group',
              'Select Field',
              'Text Field',
              'Email Field',
              'Password Field'
            ]}
          />
        </Box>

        <BulletList
          title="Advanced Features"
          items={[
            'Conditional Rendering',
            'Validation',
            'Grid Layout',
            'Disabled Fields',
            'Field Styling'
          ]}
        />
      </ContentSection>

      <ContentSection
        id="next-step"
        title="Next Step"
      >
        <InfoCallout>
          Continue to the Checkbox Group documentation to learn how Form Library
          handles multiple selections and group-based inputs.
        </InfoCallout>
      </ContentSection>
    </Box>
  );
};

export default RadioGroup;