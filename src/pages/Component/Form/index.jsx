import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  InfoCallout,
  ChipGroup,
  StepSection,
  PropsTable
} from '../../../components/Customs';

import {
  overviewContent,
  whyUseFormContent,
  benefitsContent,
  importContent,
  basicExampleContent,
  fieldConfigurationContent,
  fieldTypesContent,
  submitContent,
  changeContent,
  validationContent,
  initialValuesContent,
  disabledFieldsContent,
  gridContent,
  stylingContent,
  buttonsContent,
  relatedFeaturesContent,
  nextStepsContent
} from './content';

import { basicFormData } from './example';

import {
  importSnippet,
  importFullCode,
  basicExampleSnippet,
  basicExampleFullCode,
  fieldConfigurationSnippet,
  fieldConfigurationFullCode,
  submitSnippet,
  submitFullCode,
  submitResponseSnippet,
  submitResponseFullCode,
  onChangeSnippet,
  onChangeFullCode,
  validationSnippet,
  validationFullCode,
  initialValueSnippet,
  initialValueFullCode,
  disabledFieldSnippet,
  disabledFieldFullCode,
  gridLayoutSnippet,
  gridLayoutFullCode,
  globalStylingSnippet,
  globalStylingFullCode,
  fieldLevelStylingSnippet,
  fieldLevelStylingFullCode,
  customButtonsSnippet,
  customButtonsFullCode,
  defaultErrorSnippet,
  defaultErrorFullCode
} from './codeExample';

import {
  propsData,
  fieldPropertiesData,
  fieldTypesData
} from './props';
import { Form } from 'formLibrary';

const FormPage = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        pb: 10
      }}
    >
      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <ContentBlock>
        {overviewContent.conclusion}
      </ContentBlock>

      {/* ==========================================
          WHY USE FORM
      ========================================== */}

      <ContentSection title={whyUseFormContent.title}>
        <ContentBlock>
          {whyUseFormContent.description}
        </ContentBlock>

        <BulletList items={whyUseFormContent.items} />

        <ContentBlock>
          {whyUseFormContent.conclusion}
        </ContentBlock>
      </ContentSection>

      {/* ==========================================
          BENEFITS
      ========================================== */}

      <ContentSection title="Benefits">
        <ChipGroup
          items={benefitsContent}
        />
      </ContentSection>

      {/* ==========================================
          IMPORT
      ========================================== */}

      <ContentSection title={importContent.title}>
        <ContentBlock>
          {importContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={importSnippet}
          fullCode={importFullCode}
        />
      </ContentSection>

      {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

      <ContentSection title={basicExampleContent.title}>
        <ContentBlock>
          {basicExampleContent.description}
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Live Preview
        </Typography>

        <LivePreview>
          <Box
            sx={{
              width: '100%',
              maxWidth: 500
            }}
          >
            <Form data={basicFormData} />
          </Box>
        </LivePreview>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Code Example
          </Typography>

          <CodeBlock
            language="jsx"
            snippet={basicExampleSnippet}
            fullCode={basicExampleFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {basicExampleContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          FIELD CONFIGURATION
      ========================================== */}

      <ContentSection title={fieldConfigurationContent.title}>
        <ContentBlock>
          {fieldConfigurationContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={fieldConfigurationSnippet}
          fullCode={fieldConfigurationFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Common Field Properties
          </Typography>

          <TableContainer
            component={Paper}
            variant="outlined"
          >
            <Table>
              <TableBody>
                {fieldPropertiesData.map((row) => (
                  <TableRow key={row.property}>
                    <TableCell
                      sx={{
                        fontFamily: 'monospace',
                        fontWeight: 600,
                        width: 180
                      }}
                    >
                      {row.property}
                    </TableCell>

                    <TableCell
                      sx={{
                        fontFamily: 'monospace',
                        width: 120
                      }}
                    >
                      {row.type}
                    </TableCell>

                    <TableCell>
                      {row.description}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {fieldConfigurationContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          FIELD TYPES
      ========================================== */}

      <ContentSection title={fieldTypesContent.title}>
        <ContentBlock>
          {fieldTypesContent.description}
        </ContentBlock>

        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table>
            <TableBody>
              {fieldTypesData.map((row) => (
                <TableRow key={row.type}>
                  <TableCell
                    sx={{
                      fontFamily: 'monospace',
                      fontWeight: 600,
                      width: 180
                    }}
                  >
                    {row.type}
                  </TableCell>

                  <TableCell>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Each field type includes its own documentation page with examples and configuration options.
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          FORM SUBMISSION
      ========================================== */}

      <ContentSection title={submitContent.title}>
        <ContentBlock>
          {submitContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={submitSnippet}
          fullCode={submitFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Returned Data
          </Typography>

          <CodeBlock
            language="json"
            snippet={submitResponseSnippet}
            fullCode={submitResponseFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {submitContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          TRACK CHANGES
      ========================================== */}

      <ContentSection title={changeContent.title}>
        <ContentBlock>
          {changeContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={onChangeSnippet}
          fullCode={onChangeFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Common Use Cases
          </Typography>

          <BulletList
            items={[
              'Auto-save functionality',
              'Real-time calculations',
              'Dynamic UI updates',
              'Analytics tracking',
              'Preview screens'
            ]}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          VALIDATION
      ========================================== */}

      <ContentSection title={validationContent.title}>
        <ContentBlock>
          {validationContent.description}
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Required Field
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={validationSnippet}
          fullCode={validationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            Default error: <strong>{validationContent.errorMessage}</strong>
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          INITIAL VALUES
      ========================================== */}

      <ContentSection title={initialValuesContent.title}>
        <ContentBlock>
          {initialValuesContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={initialValueSnippet}
          fullCode={initialValueFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Common Use Cases
          </Typography>

          <BulletList
            items={initialValuesContent.useCases}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          DISABLED FIELDS
      ========================================== */}

      <ContentSection title={disabledFieldsContent.title}>
        <ContentBlock>
          {disabledFieldsContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={disabledFieldSnippet}
          fullCode={disabledFieldFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {disabledFieldsContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          GRID LAYOUT
      ========================================== */}

      <ContentSection title={gridContent.title}>
        <ContentBlock>
          {gridContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={gridLayoutSnippet}
          fullCode={gridLayoutFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Result
          </Typography>

          <Paper
            variant="outlined"
            sx={{
              p: 3
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600 }}
            >
              Desktop
            </Typography>

            <Typography sx={{ mb: 3 }}>
              First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last Name
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600 }}
            >
              Mobile
            </Typography>

            <Typography>
              First Name
            </Typography>

            <Typography>
              Last Name
            </Typography>
          </Paper>

          <Box sx={{ mt: 3 }}>
            <InfoCallout>
              {gridContent.conclusion}
            </InfoCallout>
          </Box>
        </Box>
      </ContentSection>

      {/* ==========================================
          STYLING
      ========================================== */}

      <ContentSection title={stylingContent.title}>
        <ContentBlock>
          {stylingContent.description}
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Global Styling
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={globalStylingSnippet}
          fullCode={globalStylingFullCode}
        />

        <Box sx={{ mt: 3, mb: 4 }}>
          <BulletList
            items={stylingContent.globalUseCases}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2
          }}
        >
          Field-Level Styling
        </Typography>

        <CodeBlock
          language="jsx"
          snippet={fieldLevelStylingSnippet}
          fullCode={fieldLevelStylingFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {stylingContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          CUSTOM BUTTONS
      ========================================== */}

      <ContentSection title={buttonsContent.title}>
        <ContentBlock>
          {buttonsContent.description}
        </ContentBlock>

        <ContentBlock>
          {buttonsContent.conclusion}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={customButtonsSnippet}
          fullCode={customButtonsFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Supported Workflows
          </Typography>

          <BulletList
            items={buttonsContent.workflows}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          FORM PROPERTIES
      ========================================== */}

      <ContentSection title="Form Properties">
        <PropsTable data={propsData} />
      </ContentSection>

      {/* ==========================================
          RELATED FEATURES
      ========================================== */}

      <ContentSection title={relatedFeaturesContent.title}>
        <ChipGroup
          items={relatedFeaturesContent.features}
        />
      </ContentSection>

      {/* ==========================================
          NEXT STEPS
      ========================================== */}

      <ContentSection title={nextStepsContent.title}>
        <ChipGroup
          title="Field Documentation"
          items={nextStepsContent.fieldDocumentation}
        />

        <ChipGroup
          title="Advanced Features"
          items={nextStepsContent.advancedFeatures}
        />

        <Box sx={{ mt: 4 }}>
          <InfoCallout>
            {nextStepsContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>
    </Box>
  );
};

export default FormPage;