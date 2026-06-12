import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DocsLayout from '../layouts/DocsLayout';

// Pages
import Installation from '../pages/GettingStarted/Installation';
import QuickStart from '../pages/GettingStarted/QuickStart';

import TextFieldDoc from '../pages/Components/TextField';
import EmailFieldDoc from '../pages/Components/EmailField';
import PasswordFieldDoc from '../pages/Components/PasswordField';

import ConditionalFormDoc from '../pages/Features/ConditionalForm';
import RepeatableGroupDoc from '../pages/Features/RepeatableGroup';
import GridSystemDoc from '../pages/Features/GridSystem';

import RegistrationFormDoc from '../pages/Examples/RegistrationForm';
import EducationFormDoc from '../pages/Examples/EducationForm';

const AppRoutes = ({ toggleTheme, mode }) => {
  return (
    <Routes>
      <Route path="/" element={<DocsLayout toggleTheme={toggleTheme} mode={mode} />}>
        {/* Default route */}
        <Route index element={<Installation />} />
        
        {/* Getting Started */}
        <Route path="installation" element={<Installation />} />
        <Route path="quick-start" element={<QuickStart />} />

        {/* Components */}
        <Route path="components/text-field" element={<TextFieldDoc />} />
        <Route path="components/email-field" element={<EmailFieldDoc />} />
        <Route path="components/password-field" element={<PasswordFieldDoc />} />

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
