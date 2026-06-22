import { Box, Divider, Typography } from '@mui/material';
import { Form } from 'formLibrary';

import {
    PageHeader,
    ContentSection,
    ContentBlock,
    InfoCallout,
    ChipGroup,
    PropsTable,
} from '../../../components/Customs';

import LivePreview from '../../../components/LivePreview/LivePreview';
import CodeBlock from '../../../components/CodeBlock/CodeBlock';

import { basicExampleData, fullExampleData } from './checkboxData';

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
    conditionalSnippet,
    conditionalFullCode,
    fullExampleSnippet,
    fullExampleFullCode
} from './snippetCode';

import { checkboxPropsData } from './propsData';

const CheckboxPage = () => {
    return (
        <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
            <PageHeader
                title="Checkbox"
                description={
                    'Checkbox allows users to select or confirm a single boolean value.'
                }
                details={
                    'It is commonly used for options where users need to accept, enable, or confirm something.'
                }
            />

            <InfoCallout sx={{ mb: 5 }}>
                Checkbox is rendered automatically when the field type is set to
                {' '}
                <strong>"checkbox"</strong>.
                <br />
                <br />
                Checkbox supports:
                <br />
                - validation
                <br />
                - disabled state
                <br />
                - responsive layouts
                <br />
                - styling customization
                <br />
                - conditional rendering
            </InfoCallout>

            <Divider sx={{ my: 2 }} />
            {/* ==========================================
          BASIC EXAMPLE
      ========================================== */}

            <ContentSection id="basic-example" title="Basic Example">
                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Form data={basicExampleData} />
                    </Box>
                </LivePreview>
                <CodeBlock language="jsx" snippet={basicExampleSnippet} fullCode={basicExampleFullCode} />

                <Box sx={{ mt: 3 }}>
                    <InfoCallout>
                        Checkbox is rendered automatically when <strong>type: "checkbox"</strong> is used.
                    </InfoCallout>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            
            {/* ==========================================
          PROPERTIES
      ========================================== */}

            <ContentSection id="properties" title="Properties">
                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    required
                </Typography>
                <ContentBlock>
                    Makes checkbox selection mandatory during validation.
                    <br />
                    Useful for cases like:
                    <br />
                    - accepting terms
                    <br />
                    - confirming agreements
                    <br />
                    <br />
                    Validation happens when the form is submitted.
                    <br />
                    Refer users to Validation documentation for detailed behavior.
                </ContentBlock>
                <CodeBlock language="jsx" snippet={requiredSnippet} fullCode={requiredFullCode} />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    errorMessage
                </Typography>
                <ContentBlock>Customize validation error message.</ContentBlock>
                <CodeBlock language="jsx" snippet={errorMessageSnippet} fullCode={errorMessageFullCode} />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    disabled
                </Typography>
                <ContentBlock>
                    Disables checkbox interaction. The checkbox remains visible but the user cannot change its value.
                    <br />
                    Refer users to Disabled Fields documentation.
                </ContentBlock>
                <CodeBlock language="jsx" snippet={disabledSnippet} fullCode={disabledFullCode} />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    grid
                </Typography>
                <ContentBlock>
                    Controls responsive field layout.
                    <br />
                    - md controls desktop width
                    <br />
                    - xs controls mobile width
                    <br />
                    <br />
                    If xs is not provided, Form Library automatically treats it as 12.
                    <br />
                    Refer users to Grid Layout documentation.
                </ContentBlock>
                <CodeBlock language="jsx" snippet={gridSnippet} fullCode={gridFullCode} />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    style
                </Typography>
                <ContentBlock>Customize checkbox appearance.</ContentBlock>
                <CodeBlock language="jsx" snippet={styleSnippet} fullCode={styleFullCode} />

                <Typography variant="h5" sx={{ fontWeight: 600, mt: 5, mb: 2 }}>
                    labelStyle
                </Typography>
                <ContentBlock>Customize checkbox label appearance.</ContentBlock>
                <CodeBlock language="jsx" snippet={labelStyleSnippet} fullCode={labelStyleFullCode} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
          CONDITIONAL RENDERING SUPPORT
      ========================================== */}

            <ContentSection
                id="conditional-rendering"
                title="# Conditional Rendering Support"
            >
                <ContentBlock>
                    Checkbox can be used with ConditionalForm to show or hide other fields based on its value.
                </ContentBlock>

                <CodeBlock language="jsx" snippet={conditionalSnippet} fullCode={conditionalFullCode} />

                <InfoCallout sx={{ mt: 2 }}>
                    The dependent field appears only when the checkbox is selected.
                    <br />
                    Refer users to ConditionalForm documentation.
                </InfoCallout>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
          FULL EXAMPLE
      ========================================== */}

            <ContentSection id="full-example" title="Full Example">
                <LivePreview>
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Form data={fullExampleData} />
                    </Box>
                </LivePreview>

                <CodeBlock language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />

                <Box sx={{ mt: 3 }}>
                    <InfoCallout>
                        Registration form scenario demonstrating required validation, disabled state, and styling.
                    </InfoCallout>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
          SUPPORTED PROPERTIES
      ========================================== */}

            <ContentSection id="supported-properties" title="Supported Properties">
                <PropsTable data={checkboxPropsData} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
          RELATED DOCUMENTATION
      ========================================== */}

            <ContentSection id="related-documentation" title="Related Documentation">
                <ChipGroup title="Components" items={['Form', 'ConditionalForm']} />
                <ChipGroup
                    title="Features"
                    items={['Validation', 'Grid Layout', 'Disabled Fields', 'Form Styling', 'Conditional Rendering']}
                />
                <ChipGroup
                    title="Fields"
                    items={['Checkbox Group', 'Radio Group', 'Select Field', 'Text Field']}
                />
            </ContentSection>

            {/* ==========================================
          NEXT STEP
      ========================================== */}

            <ContentSection id="next-step" title="Next Step">
                <InfoCallout>
                    Continue to the ConditionalForm documentation to see how checkbox values can drive dynamic form flows.
                </InfoCallout>
            </ContentSection>
        </Box>
    );
};

export default CheckboxPage;

