import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 75vw;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <ContentWrapper>
          <Router>
            <div>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>
            </div>
          </Router>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
}

export default App;
