import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import defaultTheme from './assets/styles/themes/default';

import GlobalStyles from './assets/styles/globalStyles';
import { Container } from './styles';
import Header from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Container>
          <Header />
          <Routes />
        </Container>
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
