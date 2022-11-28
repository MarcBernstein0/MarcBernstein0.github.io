import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ResponsiveAppBar from './components/Nav/ResponsiveAppBar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';

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
const pages = ['Home', 'Skills', 'Projects', 'Resume', "Contact"];

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      {/* <Home /> */}
    </ThemeProvider>
  );
}

export default App;
