import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

// import { Form } from 'skemvora';

import { Form } from 'skemvora';


import {
    PageHeader,
    ContentSection,
    ContentBlock,
    InfoCallout,
    PropsTable,
    BulletList,
    ChipGroup,
} from '../../../components/Customs';

import LivePreviewComponent from '../../../components/LivePreview/LivePreview';
import CodeBlockComponent from '../../../components/CodeBlock/CodeBlock';

import { buttonConfigurationFormData } from './buttonConfigurationData';

import {
    basicButtonsSnippet,
    defaultSubmitSnippet,
    customButtonsSnippet,
    submitButtonSnippet,
    customActionButtonSnippet,
    buttonLayoutSnippet,
    buttonStylingSnippet,
    validationFlowSnippet,
    conditionalFormButtonsSnippet,
    fullExampleSnippet
} from './snippetCode';

import { fullBasicButtonsFullCode, fullExampleFullCode, buttonConfigurationPropsData } from './fullCode';

const ButtonConfigurationPage = () => {
    const handleBack = () => { };
    const saveLater = () => { };

    return (
        <Box sx={{ pb: 8, maxWidth: '1000px', mx: 'auto' }}>
            <PageHeader
                title="Button Configuration"
                description="Form Library provides flexible button configuration so developers can control which actions are available at the bottom of the form."
                details="Instead of fixed buttons, you can define button labels, click handlers, ordering, styling, and layout—so you can build workflows like Next/Back, Save & Continue Later, or simple submit forms."
            />

            <InfoCallout sx={{ mb: 5 }}>
                Configure which buttons render at the bottom of the form and how they behave.
            </InfoCallout>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                BASIC EXAMPLE
      ========================================== */}
            <ContentSection id="basic-example" title="Basic Example">
                <ContentBlock>Add Live Preview.</ContentBlock>

                <LivePreviewComponent>
                    <Box sx={{ width: '100%', maxWidth: 520 }}>
                        <Form
                            data={buttonConfigurationFormData}
                            buttons={[
                                {
                                    label: 'Back',
                                    onClick: handleBack
                                },
                                {
                                    label: 'Submit',
                                    type: 'submit'
                                }
                            ]}
                            buttonContainerStyle={{ display: "flex", gap: "12px", justifyContent: "center", marginTop: "12px" }}
                        />
                    </Box>
                </LivePreviewComponent>

                <CodeBlockComponent language="jsx" snippet={basicButtonsSnippet} fullCode={fullBasicButtonsFullCode} />

                <Box sx={{ mt: 3 }}>
                    <ContentBlock>
                        Users can provide their own buttons instead of using the default submit button.
                    </ContentBlock>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                DEFAULT SUBMIT BUTTON
      ========================================== */}
            <ContentSection id="default-submit" title="Default Submit Button">
                <ContentBlock>
                    If buttons are not provided, Form Library automatically shows the default submit button.
                </ContentBlock>

                <CodeBlockComponent language="jsx" snippet={defaultSubmitSnippet} fullCode={undefined} />

                <Box sx={{ mt: 3 }}>
                    <BulletList items={['Submit button is automatically rendered.']} />
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                CUSTOM BUTTONS
      ========================================== */}
            <ContentSection id="custom-buttons" title="Custom Buttons">
                <ContentBlock>Users can define multiple buttons.</ContentBlock>

                <CodeBlockComponent language="jsx" snippet={customButtonsSnippet} fullCode={undefined} />

                <Box sx={{ mt: 3 }}>
                    <ContentBlock>
                        Each button can have its own action.
                    </ContentBlock>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                BUTTON TYPES
      ========================================== */}
            <ContentSection id="button-types" title="Button Types">
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Submit Button
                    </Typography>
                    <ContentBlock>Used for final form submission.</ContentBlock>
                    <CodeBlockComponent language="json" snippet={submitButtonSnippet} fullCode={undefined} />
                    <Box sx={{ mt: 3 }}>
                        <BulletList
                            items={[
                                'validation runs',
                                'invalid fields show errors',
                                'submit happens only when validation passes'
                            ]}
                        />
                    </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        Custom Action Button
                    </Typography>
                    <ContentBlock>Used for custom actions.</ContentBlock>
                    <CodeBlockComponent language="json" snippet={customActionButtonSnippet} fullCode={undefined} />
                    <Box sx={{ mt: 3 }}>
                        <BulletList items={['save draft', 'move to previous step', 'custom workflow actions']} />
                    </Box>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                BUTTON LAYOUT
      ========================================== */}
            <ContentSection id="button-layout" title="Button Layout">
                <ContentBlock>Users can control button alignment.</ContentBlock>

                <CodeBlockComponent language="jsx" snippet={buttonLayoutSnippet} fullCode={undefined} />

                <Box sx={{ mt: 3 }}>
                    <ContentBlock>
                        buttonsStyle can be used to align buttons (e.g. space-between for Back/Next).
                    </ContentBlock>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                BUTTON STYLING
      ========================================== */}
            <ContentSection id="button-styling" title="Button Styling">
                <ContentBlock>Buttons can have custom styles.</ContentBlock>
                <CodeBlockComponent language="json" snippet={buttonStylingSnippet} fullCode={undefined} />
                <Box sx={{ mt: 3 }}>
                    <ContentBlock>Each button can have independent styling.</ContentBlock>
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                WITH VALIDATION
      ========================================== */}
            <ContentSection id="with-validation" title="Button Configuration With Validation">
                <ContentBlock>Submit button triggers validation.</ContentBlock>
                <CodeBlockComponent language="json" snippet={validationFlowSnippet} fullCode={undefined} />
                <Box sx={{ mt: 3 }}>
                    <BulletList items={['Click Submit', 'Validate fields', 'Show errors if invalid', 'Submit data if valid']} />
                </Box>
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                WITH CONDITIONALFORM
      ========================================== */}
            <ContentSection id="with-conditional-form" title="Button Configuration With ConditionalForm">
                <ContentBlock>
                    Buttons work with ConditionalForm because they are independent from field rendering.
                </ContentBlock>
                <CodeBlockComponent language="jsx" snippet={conditionalFormButtonsSnippet} fullCode={undefined} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                FULL EXAMPLE
      ========================================== */}
            <ContentSection id="full-example" title="Full Example">
                <ContentBlock>Scenario: Registration workflow</ContentBlock>
                <ContentBlock>Buttons: Back, Save & Complete Later, Submit</ContentBlock>

                <LivePreviewComponent>
                    <Box sx={{ width: '100%', maxWidth: 520 }}>
                        <Form
                            data={buttonConfigurationFormData}
                            buttons={[
                                { label: 'Back', onClick: handleBack },
                                { label: 'Save & Complete Later', onClick: saveLater },
                                { label: 'Submit', type: 'submit' }
                            ]}
                            buttonsStyle={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}
                        />
                    </Box>
                </LivePreviewComponent>

                <CodeBlockComponent language="jsx" snippet={fullExampleSnippet} fullCode={fullExampleFullCode} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                SUPPORTED PROPERTIES
      ========================================== */}
            <ContentSection id="supported-properties" title="Supported Properties">
                <PropsTable data={buttonConfigurationPropsData} />
            </ContentSection>

            <Divider sx={{ my: 2 }} />

            {/* ==========================================
                RELATED DOCUMENTATION
      ========================================== */}
            <ContentSection id="related-documentation" title="Related Documentation">
                <ChipGroup title="Components" items={['Form', 'ConditionalForm']} />
                <ChipGroup
                    title="Features"
                    items={['Validation', 'Conditional Rendering', 'Grid Layout', 'Form Styling', 'Initial Values', 'Repeatable Group']}
                />
                <ChipGroup title="Fields" items={['Text Field', 'Select Field']} />
            </ContentSection>
        </Box>
    );
};

export default ButtonConfigurationPage;

