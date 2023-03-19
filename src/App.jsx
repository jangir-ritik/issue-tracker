import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Navigate, useSearchParams, BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material'

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar.jsx';
import { lightTheme, darkTheme } from './Components/ThemeProvider.jsx';

const NoMatch = () => <p>Page Not Found</p>;

const App = () => {
  const [searchParams] = useSearchParams()
  const [themeMode, setThemeMode] = useState('light');
  const boxStyle = { 
    backgroundColor: themeMode === 'light' ? lightTheme.palette.background.default : darkTheme.palette.background.default,
    color: themeMode === 'light' ? lightTheme.palette.text.primary : darkTheme.palette.text.primary,
}

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <Box sx={boxStyle} component="div">
        <PrimarySearchAppBar themeMode={themeMode} setThemeMode={setThemeMode} />
        <Box sx={{ marginTop: 2, height: '100vh' }} component="main">
          <Routes>
            <Route path="/" element={<Navigate status={searchParams} to="/issues" />} />
            <Route path="/issues" element={<IssueList themeMode={themeMode} setThemeMode={setThemeMode} status={searchParams} />} />
            <Route path="/issues/:id" themeMode={themeMode} setThemeMode={setThemeMode} element={<IssueEdit />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          {/* </div> */}
        </Box>
        <div className="footer">
          Made with love and confusion thanks to react router dom.
        </div>
      </Box>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('contents')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module.hot) {
  module.hot.accept();
}