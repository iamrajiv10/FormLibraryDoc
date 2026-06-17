import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import {
    PageHeader,
    ContentSection,
    ContentBlock,
    BulletList,
    FeatureCard,
    InfoCallout,
    FeatureBulletList
} from '../../../components/Customs';

import {
    overviewContent,
    whyFormLibraryContent,
    philosophyContent,
    featuresContent,
    howItWorksContent,
    mainComponentsContent,
    useCasesContent,
    nextStepsContent
} from './content';

import {
    configurationSnippet,
    configurationFullCode
} from './codeExample';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

const Overview = () => {
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
                {overviewContent.additionalDetails}
            </ContentBlock>

            <ContentBlock>
                {overviewContent.conclusion}
            </ContentBlock>

            {/* ==========================================
          WHY FORM LIBRARY
      ========================================== */}

            <ContentSection title={whyFormLibraryContent.title}>
                <ContentBlock>
                    {whyFormLibraryContent.intro}
                </ContentBlock>

                <BulletList items={whyFormLibraryContent.challenges} />

                <ContentBlock>
                    {whyFormLibraryContent.conclusion}
                </ContentBlock>
            </ContentSection>

            {/* ==========================================
          CORE PHILOSOPHY
      ========================================== */}

            <ContentSection title="Core Philosophy">
                <ContentBlock>
                    Form Library follows three simple principles:
                </ContentBlock>

                <Grid container spacing={3}>
                    {philosophyContent.map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <FeatureCard
                                title={item.title}
                                description={item.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </ContentSection>

            {/* ==========================================
          FEATURES
      ========================================== */}

            <ContentSection title="Key Features">
                <FeatureBulletList items={featuresContent} />
            </ContentSection>

            {/* ==========================================
          HOW IT WORKS
      ========================================== */}

            <ContentSection title={howItWorksContent.title}>
                <ContentBlock>
                    {howItWorksContent.description}
                </ContentBlock>

                <CodeBlock
                    language="jsx"
                    snippet={configurationSnippet}
                    fullCode={configurationFullCode}
                />

                <Box sx={{ mt: 3 }}>
                    <ContentBlock>
                        {howItWorksContent.conclusion}
                    </ContentBlock>
                </Box>
            </ContentSection>

            {/* ==========================================
          MAIN COMPONENTS
      ========================================== */}

            <ContentSection title="Main Components">
                <ContentBlock>
                    The library currently provides two primary components.
                </ContentBlock>

                <Grid container spacing={3}>
                    {mainComponentsContent.map((component) => (
                        <Grid item xs={12} md={6} key={component.title}>
                            <FeatureCard
                                title={component.title}
                                description={component.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </ContentSection>

            {/* ==========================================
          USE CASES
      ========================================== */}

            <ContentSection title={useCasesContent.title}>
                <ContentBlock>
                    Form Library is a good choice when:
                </ContentBlock>

                <BulletList items={useCasesContent.items} />
            </ContentSection>

            {/* ==========================================
          NEXT STEPS
      ========================================== */}

            <ContentSection title={nextStepsContent.title}>
                <InfoCallout>
                    <Typography>
                        {nextStepsContent.description}
                    </Typography>
                </InfoCallout>
            </ContentSection>
        </Box>
    );
};

export default Overview;