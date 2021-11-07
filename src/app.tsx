import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import { theme } from './themes';
import { UniversalStyle } from './app.style';
import Dashboard from './pages/Dashboard';

const App = (): JSX.Element => {
  const appTheme = 'light';
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[appTheme]}>
        <UniversalStyle />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <Dashboard paginate={paginate} currentPage={currentPage} />
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
