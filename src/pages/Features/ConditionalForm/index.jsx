import { Box, Divider, Typography } from '@mui/material';
import { ConditionalForm } from 'formLibrary';

import {
    PageHeader,
    ContentSection,
    ContentBlock,
    InfoCallout,
    BulletList,
    ChipGroup,
    PropsTable
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import {
    overviewContent,
    basicExampleContent,
    howItWorksContent,
    multipleConditionsContent,
    propertiesContent,
    stylingContent,
    fullExampleContent,
    relatedDocsContent
} from './content';

import {
    example1Data,
    multipleConditionsData,
    example9Data
} from './example';

import { propsData } from './props';

import {
    basicExampleSnippet,
    basicExampleFullCode,
    multipleConditionsSnippet,
    multipleConditionsFullCode,
    conditionPropertySnippet,
    rulesPropertySnippet,
    fullExampleSnippet,
    fullExampleFullCode
} from './codeExample';

const ConditionalFormPage = () => {
    return (
        <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
            <PageHeader
                title={overviewContent.title}
                description={overviewContent.description}
                details={overviewContent.details}
            />

            <Box sx={{ mt: 3, mb: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                    ConditionalForm works with different field types like:
                </Typography>
                <BulletList
                    items={[
                        'Radio',
                        'Select',
                        'Checkbox',
                        'Checkbox Group',
                        'Text fields'
                    ]}
                />
            </Box>

            <InfoCallout sx={{ mb: 5 }}>
                {overviewContent.conclusion}
            </InfoCallout>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                BASIC EXAMPLE
            ========================================== */}
            <ContentSection id="basic-example" title={basicExampleContent.title}>
                <ContentBlock>
                    {basicExampleContent.description}
                </ContentBlock>

                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <ConditionalForm data={example1Data} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={basicExampleSnippet}
                    fullCode={basicExampleFullCode}
                />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                HOW IT WORKS
            ========================================== */}
            <ContentSection id="how-it-works" title={howItWorksContent.title}>
                <ContentBlock>
                    {howItWorksContent.description}
                </ContentBlock>

                <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>field</Typography>
                <ContentBlock>The field name whose value should be checked.</ContentBlock>

                <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>operator</Typography>
                <ContentBlock>Defines the comparison type.</ContentBlock>
                <Box sx={{ pl: 2, mb: 2 }}>
                    <Typography variant="body1"><strong>Supported operators:</strong></Typography>
                    <BulletList items={['equals', 'includes']} />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>value</Typography>
                <ContentBlock>The value that needs to match.</ContentBlock>

                <Typography variant="h6" sx={{ fontWeight: 600, mt: 3, mb: 1 }}>logic</Typography>
                <ContentBlock>Used when multiple conditions are required.</ContentBlock>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                MULTIPLE CONDITIONS
            ========================================== */}
            <ContentSection id="multiple-conditions" title={multipleConditionsContent.title}>
                <ContentBlock>
                    {multipleConditionsContent.description}
                </ContentBlock>

                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <ConditionalForm data={multipleConditionsData} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={multipleConditionsSnippet}
                    fullCode={multipleConditionsFullCode}
                />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                PROPERTIES
            ========================================== */}
            <ContentSection id="properties" title={propertiesContent.title}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    condition
                </Typography>
                <ContentBlock>
                    Controls when a field should be visible.
                </ContentBlock>
                <CodeBlock
                    language="jsx"
                    snippet={conditionPropertySnippet}
                    fullCode={undefined}
                />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    logic
                </Typography>
                <ContentBlock>
                    <strong>AND:</strong> All conditions must be true.<br />
                    <em>Example: condition A AND condition B</em><br /><br />
                    <strong>OR:</strong> Any one condition can be true.<br />
                    <em>Example: condition A OR condition B</em>
                </ContentBlock>

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    rules
                </Typography>
                <ContentBlock>
                    Contains individual conditions.
                </ContentBlock>
                <CodeBlock
                    language="jsx"
                    snippet={rulesPropertySnippet}
                    fullCode={undefined}
                />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                SUPPORTED OPERATORS
            ========================================== */}
            <ContentSection id="supported-operators" title="Supported Operators">
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    equals
                </Typography>
                <ContentBlock>
                    Used for matching exact values.
                    <br /><br />
                    <em>Example: employed equals "Yes"</em>
                </ContentBlock>

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    includes
                </Typography>
                <ContentBlock>
                    Used for arrays like Checkbox Group.
                    <br /><br />
                    <em>Example: selectedOptions includes "Option 2"</em>
                </ContentBlock>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                CONDITIONAL RENDERING FLOW
            ========================================== */}
            <ContentSection id="rendering-flow" title="Conditional Rendering Flow">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    mt: 2
                }}>
                    <Typography variant="h6" color="primary">User Input</Typography>
                    <Typography variant="body1">↓</Typography>
                    <Typography variant="h6" color="primary">Form State Updates</Typography>
                    <Typography variant="body1">↓</Typography>
                    <Typography variant="h6" color="primary">Condition Evaluation</Typography>
                    <Typography variant="body1">↓</Typography>
                    <Typography variant="h6" color="primary">Matching Fields Become Visible</Typography>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                STYLING
            ========================================== */}
            <ContentSection id="styling" title={stylingContent.title}>
                <ContentBlock>
                    {stylingContent.description}
                </ContentBlock>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                FULL EXAMPLE
            ========================================== */}
            <ContentSection id="full-example" title={fullExampleContent.title}>
                <ContentBlock>
                    {fullExampleContent.description}
                </ContentBlock>

                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <ConditionalForm data={example9Data} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={fullExampleSnippet}
                    fullCode={fullExampleFullCode}
                />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                SUPPORTED PROPERTIES
            ========================================== */}
            <ContentSection id="supported-properties" title="Supported Properties">
                <PropsTable data={propsData} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                RELATED DOCUMENTATION
            ========================================== */}
            <ContentSection id="related-documentation" title={relatedDocsContent.title}>
                <ChipGroup title="Components" items={relatedDocsContent.components} />
                <ChipGroup title="Fields" items={relatedDocsContent.fields} />
                <ChipGroup title="Features" items={relatedDocsContent.features} />
            </ContentSection>
        </Box>
    );
};

export default ConditionalFormPage;
