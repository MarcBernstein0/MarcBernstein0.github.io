import { Box, Grid } from "@mui/material";
import "./Resume.css"

function Resume() {
  return (
    <Grid
      container
      justifyContent="center"
    >
      <Box
        marginTop="3%"
        component="iframe"
        title="pdf"
        display="flex"
        alignItems="center"
        justifyContent="center"
        src={require("../../assets/Bernstein_Marc_Resume_8_5_2022.pdf")}
        className="Fade-In"
        />
    </Grid>

  );
}
// /Users/marcbernstein/Documents/projects/personal/MarcBernstein0.github.io/src/assets/Bernstein_Marc_Resume_8_5_2022.pdf
export default Resume;