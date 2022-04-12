import './App.css';
import NavigationBar from './components/NavigationBar';
import CalculatorV1 from './pages/CalculatorV1';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <CalculatorV1 />
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
