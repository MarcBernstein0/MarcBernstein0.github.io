import { createTheme, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import AboutMeText from './components/AboutMeText/AboutMeText';
import AnimatedText from './components/AnimatedText/AnimatedText';
import ResponsiveAppBar from './components/Nav/ResponsiveAppBar';
import ProfileImage from './components/ProfileImage/ProfileImage';

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
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{
          marginTop: "3%",
        }}>
          <AnimatedText />
          <AboutMeText />
        </Grid>
        <Grid item xs={6} sx={{
          marginTop: "3%"
        }}>
          <ProfileImage />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
