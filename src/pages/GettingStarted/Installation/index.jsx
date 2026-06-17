import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
  PageHeader,
  ContentSection,
  ContentBlock,
  BulletList,
  FeatureCard,
  InfoCallout
} from '../../../components/Customs';

import {
  installationContent,
  prerequisitesContent,
  verifyInstallationContent,
  firstFormContent,
  noCssRequiredContent,
  packageStructureContent,
  commonIssuesContent,
  nextStepContent
} from './content';

import {
  npmInstallSnippet,
  npmInstallFullCode,
  yarnInstallSnippet,
  yarnInstallFullCode,
  verifyImportSnippet,
  verifyImportFullCode,
  firstFormConfigSnippet,
  firstFormConfigFullCode,
  firstFormRenderSnippet,
  firstFormRenderFullCode,
  conditionalFormSnippet,
  conditionalFormFullCode,
  localInstallationSnippet,
  localInstallationFullCode,
  reinstallSnippet,
  reinstallFullCode,
  moduleNotFoundSnippet,
  moduleNotFoundFullCode
} from './codeExample';

const Installation = () => {
  return (
    <Box 
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        pb: 10
      }}>
      <PageHeader
        title={installationContent.title}
        description={installationContent.description}
        details={installationContent.details}
      />

      <ContentSection title={prerequisitesContent.title}>
        <ContentBlock>
          {prerequisitesContent.description}
        </ContentBlock>

        <BulletList items={prerequisitesContent.requirements} />

        <Typography
          variant="subtitle1"
          sx={{
            mt: 3,
            mb: 1,
            fontWeight: 600
          }}
        >
          Recommended
        </Typography>

        <BulletList items={prerequisitesContent.recommended} />
      </ContentSection>

      <ContentSection title="Install the Package">
        <Typography
          variant="h6"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          Using npm
        </Typography>

        <CodeBlock
          language="bash"
          snippet={npmInstallSnippet}
          fullCode={npmInstallFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Using yarn
          </Typography>

          <CodeBlock
            language="bash"
            snippet={yarnInstallSnippet}
            fullCode={yarnInstallFullCode}
          />
        </Box>
      </ContentSection>

      <ContentSection title={verifyInstallationContent.title}>
        <ContentBlock>
          {verifyInstallationContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={verifyImportSnippet}
          fullCode={verifyImportFullCode}
        />

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {verifyInstallationContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      <ContentSection title={firstFormContent.title}>
        <ContentBlock>
          {firstFormContent.description}
        </ContentBlock>

        <CodeBlock
          language="jsx"
          snippet={firstFormConfigSnippet}
          fullCode={firstFormConfigFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <CodeBlock
            language="jsx"
            snippet={firstFormRenderSnippet}
            fullCode={firstFormRenderFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <InfoCallout>
            {firstFormContent.conclusion}
          </InfoCallout>
        </Box>
      </ContentSection>

      <ContentSection title={noCssRequiredContent.title}>
        {noCssRequiredContent.paragraphs.map((paragraph) => (
          <ContentBlock key={paragraph}>
            {paragraph}
          </ContentBlock>
        ))}

        <CodeBlock
          language="jsx"
          snippet={verifyImportSnippet}
          fullCode={verifyImportFullCode}
        />
      </ContentSection>

      <ContentSection title={packageStructureContent.title}>
        <ContentBlock>
          {packageStructureContent.description}
        </ContentBlock>

        <Stack spacing={3}>
          <FeatureCard
            title="Form"
            description="The core component used to build standard forms."
          />

          <FeatureCard
            title="ConditionalForm"
            description="A component designed for forms that require conditional field rendering."
          />
        </Stack>

        <Box sx={{ mt: 4 }}>
          <CodeBlock
            language="jsx"
            snippet={conditionalFormSnippet}
            fullCode={conditionalFormFullCode}
          />
        </Box>
      </ContentSection>

      <ContentSection title="Development Installation">
        <ContentBlock>
          If you're working locally and want to test an unreleased version of the library, you can install it directly from a local path.
        </ContentBlock>

        <CodeBlock
          language="json"
          snippet={localInstallationSnippet}
          fullCode={localInstallationFullCode}
        />

        <Box sx={{ mt: 4 }}>
          <CodeBlock
            language="bash"
            snippet={reinstallSnippet}
            fullCode={reinstallFullCode}
          />
        </Box>
      </ContentSection>

      <ContentSection title={commonIssuesContent.title}>
        <FeatureCard
          title="Module Not Found"
          description="Verify that the package has been installed successfully, node_modules exists, and the package name matches the import statement."
        />

        <Box sx={{ mt: 3 }}>
          <CodeBlock
            language="text"
            snippet={moduleNotFoundSnippet}
            fullCode={moduleNotFoundFullCode}
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <FeatureCard
            title="Using a Local Package"
            description="Ensure the local file path is correct and dependencies have been reinstalled after updating package.json."
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <FeatureCard
            title="Styles Not Appearing"
            description="Reinstall dependencies, restart the development server, and verify the library build contains generated assets."
          />
        </Box>
      </ContentSection>

      <ContentSection title={nextStepContent.title}>
        <InfoCallout>
          {nextStepContent.description}
        </InfoCallout>
      </ContentSection>
    </Box>
  );
};

export default Installation;