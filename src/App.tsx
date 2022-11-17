import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ScrollingBackground from './components/ScrollingBackground';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: blueGrey,
    divider: blueGrey[700],
    background: {
      default: blueGrey[900],
      paper: blueGrey[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  }
})

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      {/* <ScrollingBackground /> */}
    </ThemeProvider>
  );
}

export default App;
