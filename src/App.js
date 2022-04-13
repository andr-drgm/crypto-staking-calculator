import './App.css';
import NavigationBar from './components/NavigationBar';
import CalculatorV1 from './pages/CalculatorV1';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Donations from './components/Donations';
import { Container } from '@mui/material';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Container
          component="main"
          maxWidth="sm"
          sx={{ marginBottom: 2, '& .MuiTextField-root': { mb: 2 } }}
        >
          <CalculatorV1 />
          <Donations />
        </Container>

      </ThemeProvider>

    </div>
  );
}

const theme = createTheme({
  palette: {
    // type: 'light', 
    primary: {
      main: '#b68d37',
    },
    secondary: {
      main: '#375fb6',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default App;
