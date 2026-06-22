import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';

// Pages
import Overview from '../pages/GettingStarted/OverView';
import Installation from '../pages/GettingStarted/Installation';

import FormComponent from '../pages/Component/Form';

import EmailFieldDoc from '../pages/Fields/EmailField';
import PasswordFieldDoc from '../pages/Fields/PasswordField';


import ConditionalFormPage from '../pages/Features/ConditionalForm';
import RepeatableGroupDoc from '../pages/Features/RepeatableGroup/RepeatableGroup';
import GridSystemDoc from '../pages/Features/GridSystem';
import GridLayoutDoc from '../pages/Features/GridLayout';
import ValidationDoc from '../pages/Features/Validation/Validation';
import InitialValuesDoc from '../pages/Features/InitialValues/InitialValues';
import DisabledFieldsDoc from '../pages/Features/DisabledFields/DisabledFields';



import RegistrationFormDoc from '../pages/Examples/RegistrationForm';


import EducationFormDoc from '../pages/Examples/EducationForm';
import QuickStart from '../pages/GettingStarted/QuickStart';
import TixtFieldPage from '../pages/Fields/TaxtField';
import EmailFieldPage from '../pages/Fields/EmailField';
import PasswordFieldPage from '../pages/Fields/PasswordField';
import NumberField from '../pages/Fields/NumberField';
import TextareaField from '../pages/Fields/TextAreaField';
import RadioGroup from '../pages/Fields/RadioGroup';
import CheckboxField from '../pages/Fields/Checkbox/Checkbox';


import CheckboxGroupField from '../pages/Fields/CheckboxGruopField';
import SelectFieldPage from '../pages/Fields/SelectField';
import TextFieldPage from '../pages/Fields/TextField/TextField';
import ConditionalFormComponent from '../pages/Component/ConditionalForm';

import FormStylingPage from '../pages/Features/FormStyling/FormStyling';
import ButtonConfigurationPage from '../pages/Features/ButtonConfiguration/ButtonConfiguration';
import ResponsiveLayoutDoc from '../pages/Features/ResponsiveLayout/ResponsiveLayout';
import DateFieldPage from '../pages/Fields/DateField/DateField';


const AppRoutes = ({ toggleTheme, mode }) => {
  return (
    <Routes>
      <Route path="/" element={<DocsLayout toggleTheme={toggleTheme} mode={mode} />}>
        {/* Default route */}
        <Route index element={<Overview />} />

        {/* Getting Started */}
        <Route path="overview" element={<Overview />} />
        <Route path="installation" element={<Installation />} />
        <Route path="quick-start" element={<QuickStart />} />

        {/* Components */}
        <Route path="components/static-form" element={<FormComponent />} />
        <Route path="components/conditional-form" element={<ConditionalFormComponent />} />

        {/* Fields */}
        <Route path="fields/email-field" element={<EmailFieldPage />} />
        <Route path="fields/password-field" element={<PasswordFieldPage />} />
        <Route path="fields/number-field" element={<NumberField />} />
        <Route path="fields/textarea-field" element={<TextareaField />} />
        <Route path="fields/radiogroup-field" element={<RadioGroup />} />
        <Route path="fields/checkbox-field" element={<CheckboxField />} />
        <Route path="fields/checkboxgroup-field" element={<CheckboxGroupField />} />
        <Route path="fields/select-field" element={<SelectFieldPage />} />
        <Route path="fields/text-field" element={<TextFieldPage />} />
        <Route path="fields/date-field" element={<DateFieldPage />} />


        {/* Features */}
        <Route path="features/conditional-form" element={<ConditionalFormPage />} />
        <Route path="features/repeatable-group" element={<RepeatableGroupDoc />} />
        <Route path="features/grid-layout" element={<GridLayoutDoc />} />
        <Route path="features/validation" element={<ValidationDoc />} />
        <Route path="features/initial-values" element={<InitialValuesDoc />} />
        <Route path="features/disabled-fields" element={<DisabledFieldsDoc />} />
        <Route path="features/form-styling" element={<FormStylingPage />} />
        <Route path="features/button-configuration" element={<ButtonConfigurationPage />} />
        <Route path="features/responsive-layout" element={<ResponsiveLayoutDoc />} />
        
        
        {/* Examples */}

        <Route path="examples/registration-form" element={<RegistrationFormDoc />} />
        <Route path="examples/education-form" element={<EducationFormDoc />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
