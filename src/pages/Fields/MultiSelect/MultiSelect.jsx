import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'skemvora';


import {
  PageHeader,
  ContentSection,
  PropsSection,
  PropertyExample,
  CodeSection,
  InfoCallout,
  ChipGroup,
} from '../../../components/Customs';

import { overviewContent, relatedDocs, nextStepContent } from './content';
import { basicExampleData, mandatoryExampleData, fullExampleData } from './multiSelectData';
import {
  basicSnippet,
  basicFullCode,
  mandatorySnippet,
  mandatoryFullCode,
  fullExampleSnippet,
  fullExampleCode,
} from './snippetCode';

import { propsData } from './props';
import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

function MultiSelect() {
  return (
    <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <Divider sx={{ my: 2 }} />

      <ContentSection id="basic-example" title="Basic Example">
        <Typography>
          MultiSelect is rendered automatically when the field type is set to
          <Typography
            component="span"
            sx={{
              mx: 1,
              fontFamily: 'monospace',
              color: 'primary.main'
            }}
          >
            "multiSelect"
          </Typography>
          .
        </Typography>


        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 450 }}>
            <Form data={basicExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock language="jsx" snippet={basicSnippet} fullCode={basicFullCode} />

        <InfoCallout>
          Like all Form Library fields, MultiSelect Fields support validation,
          responsive layouts, styling customization, initial values,
          disabled states, and conditional rendering.
        </InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection
        id="properties"
        title="Properties"
      >
        <PropertyExample
          title="required"
          description="Marks the number field as mandatory."
          // previewData={requiredExampleData}
          // snippet={requiredSnippet}
          // fullCode={requiredFullCode}
          note='Default validation message: This is a required field.'
        >
        </PropertyExample>
        <Divider sx={{ my: 2 }} />
      </ContentSection>

      <ContentSection id="mandatory" title="These fields are mandatory">
        <Typography sx={{ mb: 2 }}>
          For MultiSelect the mandatory properties are:
        </Typography>

        <Box component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>label</li>
          <li>name</li>
          <li>type</li>
          <li>options</li>
        </Box>

        <PropertyExample
          title="Required definition"
          description="Minimum configuration needed to render a MultiSelect field."
          previewData={mandatoryExampleData}
          snippet={mandatorySnippet}
          fullCode={mandatoryFullCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="conditional-rendering" title="Conditional Rendering Support">
        <Typography sx={{ mb: 2 }}>
          MultiSelect can be used with ConditionalForm to display fields based on selected values.
        </Typography>

        <CodeSection
          title="Dependent field example"
          snippet={`{
  label:"Select Interests",
  name:"interests",
  type:"multiSelect",
  options:[
    "Coding",
    "Design",
    "Marketing"
  ]
}`}
        />

        <Box sx={{ height: 12 }} />

        <CodeBlock
          language="jsx"
          snippet={`{
  label:"Coding Experience",
  name:"experience",
  type:"text",

  condition:{
    logic:"AND",
    rules:[
      {
        field:"interests",
        operator:"includes",
        value:"Coding"
      }
    ]
  }
}`}
        />


        <InfoCallout>
          The dependent field appears when the selected values contain the required option.
        </InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="full-example" title="Full Example">
        <Typography>
          Create complete example: Profile form with Skills and Languages.
        </Typography>

        <LivePreview>
          <Box sx={{ width: '100%', maxWidth: 520 }}>
            <Form data={fullExampleData} />
          </Box>
        </LivePreview>

        <CodeBlock
          language="jsx"
          snippet={fullExampleSnippet}
          fullCode={fullExampleCode}
        />
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="properties" >
        <PropsSection
          id="supported-properties"
          title="Supported Properties"
          data={propsData}
        />

        <InfoCallout>
          Refer users to Validation, Disabled Fields, Grid Layout, Form Styling, and ConditionalForm
          documentation for deeper details.
        </InfoCallout>
      </ContentSection>

      <Divider sx={{ my: 2 }} />

      <ContentSection id="related-documentation" title="Related Documentation">
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Components
        </Typography>

        <ChipGroup items={relatedDocs.components} />

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Other Fields
        </Typography>

        <ChipGroup items={relatedDocs.fields} />

        <Typography variant="h6" sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
          Advanced Features
        </Typography>

        <ChipGroup items={relatedDocs.features} />
      </ContentSection>

      <ContentSection id="next-step" title="Next Step">
        <InfoCallout>{nextStepContent.description}</InfoCallout>
      </ContentSection>
    </Box>
  );
}

export default MultiSelect;

