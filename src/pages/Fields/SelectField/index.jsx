import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'formLibrary';

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
    propertiesContent,
    stylingContent,
    validationContent,
    commonUseCasesContent,
    fullExampleContent,
    relatedDocsContent,
    nextStepContent
} from './content';

import {
    example1Data,
    example5Data,
    example9Data
} from './example';

import { propsData } from './props';

import {
    basicExampleSnippet,
    basicExampleFullCode,

    requiredSnippet,
    requiredFullCode,

    errorMessageSnippet,
    errorMessageFullCode,

    disabledSnippet,
    disabledFullCode,

    gridSnippet,
    gridFullCode,

    styleSnippet,
    styleFullCode,

    labelStyleSnippet,
    labelStyleFullCode,

    fieldStylingSnippet,
    fieldStylingFullCode,

    labelStylingSnippet,
    labelStylingFullCode,

    validationSnippet,
    validationFullCode,

    customValidationSnippet,
    customValidationFullCode,

    fullExampleSnippet,
    fullExampleFullCode,
    optionSnippet,
    optionFullCode
} from './codeExample';

const SelectFieldPage = () => {
    return (
        <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
            <PageHeader
                title={overviewContent.title}
                description={overviewContent.description}
                details={overviewContent.details}
            />

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
                        <Form data={example1Data} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={basicExampleSnippet}
                    fullCode={basicExampleFullCode}
                />

                <Box sx={{ mt: 3 }}>
                    <InfoCallout>
                        {basicExampleContent.conclusion}
                    </InfoCallout>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />
            {/* ==========================================
          PROPERTIES
      ========================================== */}

            <ContentSection id="properties" title={propertiesContent.title}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    options
                </Typography>

                <ContentBlock>
                    Defines the list of options displayed inside the dropdown.
                </ContentBlock>

                <CodeBlock
                    language="jsx"
                    snippet={optionSnippet}
                    fullCode={optionFullCode}
                />

                <InfoCallout sx={{ mt: 2 }}>
                    Users can select one option from the available choices.
                </InfoCallout>

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    required
                </Typography>

                <ContentBlock>
                    Marks the select field as mandatory.
                </ContentBlock>

                <CodeBlock
                    language="jsx"
                    snippet={requiredSnippet}
                    fullCode={requiredFullCode}
                />

                <InfoCallout sx={{ mt: 2 }}>
                    Default validation message:
                    <br />
                    This is a required field.
                </InfoCallout>
                <InfoCallout>
                    If the field is left empty during submission, validation
                    automatically prevents form submission.
                </InfoCallout>

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    errorMessage
                </Typography>

                <ContentBlock>
                    Customize the validation message displayed when the field is empty.
                </ContentBlock>

                <CodeBlock
                    language="jsx"
                    snippet={errorMessageSnippet}
                    fullCode={errorMessageFullCode}
                />


                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    disabled
                </Typography>

                <ContentBlock>
                    Display the field while preventing modifications.
                </ContentBlock>

                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Form data={example5Data} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={disabledSnippet}
                    fullCode={disabledFullCode}
                />

                

                
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
          STYLING
      ========================================== */}

            <ContentSection id="styling" title={stylingContent.title}>
                <ContentBlock>
                    {stylingContent.description}
                </ContentBlock>

                <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                    Field Styling Example
                </Typography>

                <CodeBlock
                    language="jsx"
                    snippet={fieldStylingSnippet}
                    fullCode={fieldStylingFullCode}
                />

                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        mt: 5,
                        mb: 2
                    }}
                >
                    Label Styling Example
                </Typography>

                <CodeBlock
                    language="jsx"
                    snippet={labelStylingSnippet}
                    fullCode={labelStylingFullCode}
                />

                <Box sx={{ mt: 3 }}>
                    <InfoCallout>
                        Field-level styles override global form styles.
                    </InfoCallout>
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    grid
                </Typography>

                <ContentBlock>
                    Control how the field is displayed within responsive layouts.
                </ContentBlock>

                <CodeBlock
                    language="jsx"
                    snippet={gridSnippet}
                    fullCode={gridFullCode}
                />

                <InfoCallout sx={{ mt: 2 }}>
                    Select Fields fully support Form Library&apos;s responsive grid system.
                </InfoCallout>
            </ContentSection>

            <Divider sx={{ my: 2 }} />
            
            {/* ==========================================
          FULL EXAMPLE
      ========================================== */}

            <ContentSection
                id="full-example"
                title={fullExampleContent.title}
            >
                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Form data={example9Data} />
                    </Box>
                </LivePreview>

                <CodeBlock
                    language="jsx"
                    snippet={fullExampleSnippet}
                    fullCode={fullExampleFullCode}
                />

                <Box sx={{ mt: 3 }}>
                    <InfoCallout>
                        {fullExampleContent.description}
                    </InfoCallout>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />
            {/* ==========================================
          SUPPORTED PROPERTIES
      ========================================== */}

            <ContentSection
                id="supported-properties"
                title="Supported Properties"
            >
                <PropsTable data={propsData} />
            </ContentSection>

<Divider sx={{ my: 2 }} />
            {/* ==========================================
          RELATED DOCUMENTATION
      ========================================== */}

            <ContentSection
                id="related-documentation"
                title={relatedDocsContent.title}
            >
                <ChipGroup
                    title="Components"
                    items={relatedDocsContent.components}
                />

                <ChipGroup
                    title="Other Fields"
                    items={relatedDocsContent.fields}
                />

                <ChipGroup
                    title="Advanced Features"
                    items={relatedDocsContent.features}
                />
            </ContentSection>

            {/* ==========================================
          NEXT STEP
      ========================================== */}

            <ContentSection
                id="next-step"
                title={nextStepContent.title}
            >
                <InfoCallout>
                    {nextStepContent.description}
                </InfoCallout>
            </ContentSection>
        </Box>
    );
};

export default SelectFieldPage;