import { Box } from "@mui/material";

function Resume() {
  return (
    <Box
      component="iframe"
      src={require("./Bernstein_Marc_Resume_8_5_2022.pdf")}
    >

    </Box>
    // <iframe src={require("./Bernstein_Marc_Resume_8_5_2022.pdf")} width="1000px" height="100%" />
  );
}
// /Users/marcbernstein/Documents/projects/personal/MarcBernstein0.github.io/src/assets/Bernstein_Marc_Resume_8_5_2022.pdf
export default Resume;
