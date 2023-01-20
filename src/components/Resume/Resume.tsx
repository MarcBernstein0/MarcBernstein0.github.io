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
        src={require("../../assets/Marc_Bernstein_Software_Engineering_Resume_1_19_2022.pdf")}
        className="Fade-In"
        />
    </Grid>

  );
}
// /home/marc/Projects/MarcBernstein0.github.io/src/assets/Marc_Bernstein_Software_Engineering_Resume_1_19_2022.pdf
// /Users/marcbernstein/Documents/projects/personal/MarcBernstein0.github.io/src/assets/Bernstein_Marc_Resume_8_5_2022.pdf
export default Resume;