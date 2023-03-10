import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Navigate, useSearchParams, BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import PrimarySearchAppBar from './Components/PrimarySearchAppBar.jsx';
import { lightTheme, darkTheme } from './Components/ThemeProvider.jsx';

const NoMatch = () => <p>Page Not Found</p>;

const App = () => { 
  const [searchParams] = useSearchParams()
  const [themeMode, setThemeMode] = useState('light');

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <div>
        {/* <div className="header"> */}
          {/* <h1>Issue Tracker</h1> */}
          <PrimarySearchAppBar themeMode={themeMode} setThemeMode={setThemeMode}/>
        {/* </div> */}
        <div className="contents">
          <Routes>
            <Route path="/" element={<Navigate status={searchParams} to="/issues" />} />
            <Route path="/issues" element={<IssueList status={searchParams} />} />
            <Route path="/issues/:id" element={<IssueEdit />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <div className="footer">
          Made with love and confusion thanks to react router dom.
        </div>
      </div>
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