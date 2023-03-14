import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, Route, Navigate, useSearchParams, BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Item from '@mui/material/Grid'
import Layout from './Components/Layout.jsx';

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
        <PrimarySearchAppBar themeMode={themeMode} setThemeMode={setThemeMode}/>
        {/* <br /> */}
        {/* <div className="contents"> */}
        <Box sx={{ marginTop: 2 }} component="main">
            <Routes>
              <Route path="/" element={<Navigate status={searchParams} to="/issues" />} />
              <Route path="/issues" element={<IssueList status={searchParams} />} />
              <Route path="/issues/:id" element={<IssueEdit />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
        {/* </div> */}
        </Box>
        <div className="footer">
          Made with love and confusion thanks to react router dom.
        </div>
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
          // style={{ backgroundColor: themeMode.palette.background.default, color: themeMode.palette.text.primary }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              This is item 1
            </Grid>
          ))}
        </Grid> */}
        {/* <Layout /> */}
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