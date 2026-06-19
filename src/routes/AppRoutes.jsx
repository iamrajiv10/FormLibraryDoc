import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';

// Pages
import Overview from '../pages/GettingStarted/OverView';
import Installation from '../pages/GettingStarted/Installation';

import FormComponent from '../pages/Component/Form';

import TextFieldDoc from '../pages/Fields/TextField';
import EmailFieldDoc from '../pages/Fields/EmailField';
import PasswordFieldDoc from '../pages/Fields/PasswordField';

import ConditionalFormDoc from '../pages/Features/ConditionalForm';
import RepeatableGroupDoc from '../pages/Features/RepeatableGroup';
import GridSystemDoc from '../pages/Features/GridSystem';

import RegistrationFormDoc from '../pages/Examples/RegistrationForm';
import EducationFormDoc from '../pages/Examples/EducationForm';
import QuickStart from '../pages/GettingStarted/QuickStart';
import ConditionalFormPage from '../pages/Component/ConditionalForm';
import TextFieldPage from '../pages/Fields/TaxtField';
import EmailFieldPage from '../pages/Fields/EmailField';
import PasswordFieldPage from '../pages/Fields/PasswordField';
import NumberField from '../pages/Fields/NumberField';
import DateFieldPage from '../pages/Fields/DateField';

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
        <Route path="components/conditional-form" element={<ConditionalFormPage />} />

        {/* Fields */}
        <Route path="fields/text-field-Page" element={<TextFieldPage />} />
        <Route path="fields/text-field" element={<TextFieldDoc />} />
        <Route path="fields/email-field" element={<EmailFieldPage />} />
        <Route path="fields/password-field" element={<PasswordFieldPage />} />
        <Route path="fields/number-field" element={<NumberField />} />
        <Route path="fields/date-field" element={<DateFieldPage />} />

        {/* Features */}
        <Route path="features/conditional-form" element={<ConditionalFormDoc />} />
        <Route path="features/repeatable-group" element={<RepeatableGroupDoc />} />
        <Route path="features/grid-system" element={<GridSystemDoc />} />

        {/* Examples */}
        <Route path="examples/registration-form" element={<RegistrationFormDoc />} />
        <Route path="examples/education-form" element={<EducationFormDoc />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
