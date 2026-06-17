import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';

import { ConditionalForm } from 'formLibrary';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  InfoCallout,
  ChipGroup,
  FeatureCard,
  PropsTable
} from '../../../components/Customs';

import {
  overviewContent,
  whyUseContent,
  importContent,
  basicExampleContent,
  conditionsContent,
  conditionStructureContent,
  operatorsContent,
  andLogicContent,
  orLogicContent,
  checkboxContent,
  multipleCheckboxContent,
  gridContent,
  validationContent,
  combineFeaturesContent,
  bestPracticesContent,
  nextStepsContent
} from './content';

import {
  basicConditionalFormData,
  checkboxConditionalFormData
} from './example';

import {
  importSnippet,
  importFullCode,
  basicExampleSnippet,
  basicExampleFullCode,
  conditionStructureSnippet,
  conditionStructureFullCode,
  singleRuleSnippet,
  singleRuleFullCode,
  andLogicSnippet,
  andLogicFullCode,
  orLogicSnippet,
  orLogicFullCode,
  checkboxGroupFieldSnippet,
  checkboxGroupFieldFullCode,
  checkboxConditionSnippet,
  checkboxConditionFullCode,
  multipleCheckboxSnippet,
  multipleCheckboxFullCode,
  gridLayoutSnippet,
  gridLayoutFullCode,
  validationSnippet,
  validationFullCode
} from './codeExample';

import {
  propsData,
  operatorsData
} from './props';

const ConditionalFormPage = () => {
  return (
    <Box
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        pb: 10
      }}
    >
      <PageHeader
        title={overviewContent.title}
        description={overviewContent.description}
        details={overviewContent.details}
      />

      <ContentBlock>
        {overviewContent.conclusion}
      </ContentBlock>

      {/* ==========================================
          WHY USE CONDITIONAL FORM
      ========================================== */}

      <ContentSection
        id="why-use-conditional-form"
        title={whyUseContent.title}
      >
        <ContentBlock>
          {whyUseContent.description}
        </ContentBlock>

        {whyUseContent.scenarios.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </ContentSection>

      {/* ==========================================
          IMPORT
      ========================================== */}

      <ContentSection
        id="import"
        title={importContent.title}
      >
        <CodeBlock
          language="jsx"
          snippet={importSnippet}
          fullCode={importFullCode}
        />
      </ContentSection>

      {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

      <ContentSection
        id="basic-example"
        title={basicExampleContent.title}
      >
        <ContentBlock>
          {basicExampleContent.description}
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600
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
            <ConditionalForm
              data={basicConditionalFormData}
            />
          </Box>
        </LivePreview>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600
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
            {basicExampleContent.result}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          UNDERSTANDING CONDITIONS
      ========================================== */}

      <ContentSection
        id="understanding-conditions"
        title={conditionsContent.title}
      >
        <ContentBlock>
          {conditionsContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={conditionStructureSnippet}
          fullCode={conditionStructureFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {conditionsContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          CONDITION STRUCTURE
      ========================================== */}

      <ContentSection
        id="condition-structure"
        title={conditionStructureContent.title}
      >
        <ContentBlock>
          A condition contains two primary parts:
        </ContentBlock>

        <BulletList
          items={[
            'Logic',
            'Rules'
          ]}
        />

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600
            }}
          >
            Example Rule
          </Typography>

          <CodeBlock
            language="jsx"
            snippet={singleRuleSnippet}
            fullCode={singleRuleFullCode}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          OPERATORS
      ========================================== */}

      <ContentSection
        id="supported-operators"
        title={operatorsContent.title}
      >
        <TableContainer
          component={Paper}
          variant="outlined"
        >
          <Table>
            <TableBody>
              {operatorsData.map((row) => (
                <TableRow
                  key={row.operator}
                >
                  <TableCell
                    sx={{
                      width: 180,
                      fontFamily: 'monospace',
                      fontWeight: 600
                    }}
                  >
                    {row.operator}
                  </TableCell>

                  <TableCell>
                    {row.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ContentSection>

      {/* ==========================================
          AND LOGIC
      ========================================== */}

      <ContentSection
        id="and-logic"
        title={andLogicContent.title}
      >
        <ContentBlock>
          {andLogicContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={andLogicSnippet}
          fullCode={andLogicFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {andLogicContent.result}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          OR LOGIC
      ========================================== */}

      <ContentSection
        id="or-logic"
        title={orLogicContent.title}
      >
        <ContentBlock>
          {orLogicContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={orLogicSnippet}
          fullCode={orLogicFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {orLogicContent.result}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          CHECKBOX GROUP CONDITIONS
      ========================================== */}

      <ContentSection
        id="checkbox-group-conditions"
        title={checkboxContent.title}
      >
        <ContentBlock>
          {checkboxContent.description}
        </ContentBlock>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600
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
            <ConditionalForm
              data={checkboxConditionalFormData}
            />
          </Box>
        </LivePreview>

        <Box sx={{ mt: 4 }}>
          <CodeBlock
            language="jsx"
            snippet={checkboxGroupFieldSnippet}
            fullCode={checkboxGroupFieldFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <CodeBlock
            language="jsx"
            snippet={checkboxConditionSnippet}
            fullCode={checkboxConditionFullCode}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          MULTIPLE CHECKBOX CONDITIONS
      ========================================== */}

      <ContentSection
        id="multiple-checkbox-conditions"
        title={multipleCheckboxContent.title}
      >
        <ContentBlock>
          {multipleCheckboxContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={multipleCheckboxSnippet}
          fullCode={multipleCheckboxFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {multipleCheckboxContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          GRID LAYOUT
      ========================================== */}

      <ContentSection
        id="grid-layout"
        title={gridContent.title}
      >
        <ContentBlock>
          {gridContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={gridLayoutSnippet}
          fullCode={gridLayoutFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {gridContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      {/* ==========================================
          VALIDATION
      ========================================== */}

      <ContentSection
        id="validation"
        title={validationContent.title}
      >
        <ContentBlock>
          {validationContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={validationSnippet}
          fullCode={validationFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {validationContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

            {/* ==========================================
          COMBINING FEATURES
      ========================================== */}

      <ContentSection
        id="combining-features"
        title={combineFeaturesContent.title}
      >
        <ContentBlock>
          ConditionalForm works seamlessly with several advanced features available throughout Form Library.
        </ContentBlock>

        <ChipGroup
          items={combineFeaturesContent.features}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2
            }}
          >
            Why Combine Features?
          </Typography>

          <BulletList
            items={[
              'Show validation only when fields are visible',
              'Build responsive conditional layouts',
              'Create dynamic multi-step workflows',
              'Display conditional fields using preloaded values',
              'Create advanced repeating conditional sections'
            ]}
          />
        </Box>
      </ContentSection>

      {/* ==========================================
          CONDITIONAL FORM PROPERTIES
      ========================================== */}

      <ContentSection
        id="conditional-form-properties"
        title="ConditionalForm Properties"
      >
        <ContentBlock>
          The ConditionalForm component accepts the following props.
        </ContentBlock>

        <PropsTable data={propsData} />
      </ContentSection>

      {/* ==========================================
          BEST PRACTICES
      ========================================== */}

      <ContentSection
        id="best-practices"
        title={bestPracticesContent.title}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}
        >
          {bestPracticesContent.practices.map((practice) => (
            <FeatureCard
              key={practice.title}
              title={practice.title}
              description={practice.description}
            />
          ))}
        </Box>
      </ContentSection>

      {/* ==========================================
          NEXT STEPS
      ========================================== */}

      <ContentSection
        id="next-steps"
        title={nextStepsContent.title}
      >
        <ContentBlock>
          Now that you understand conditional rendering, explore other advanced capabilities available in Form Library.
        </ContentBlock>

        <ChipGroup
          title="Features"
          items={nextStepsContent.features}
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

export default ConditionalFormPage;