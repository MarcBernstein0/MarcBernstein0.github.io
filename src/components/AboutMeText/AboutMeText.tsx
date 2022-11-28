import { Box } from "@mui/material";
import "./AboutMeText.css"

export default function AboutMeText(): JSX.Element {
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      // justifyContent="center"

      className="Text"
      >
    <p id="Text1"> I am a Software Engineer currently working as a Research Software Engineer at <br />
    Northeastern University. </p>
    <p id="Text2"> I studied Computer Science at Boston University and graduated in May 2022. </p>
    <p id="Text3">I have worked at Fidelity as Technical Intern, John Hancock as a Fullstack Software Engineer</p>
    {/* Integer ac imperdiet nunc.<br /> 
    Integer sem orci, molestie tempor ultrices ut, placerat ut metus.<br /> 
    Suspendisse ac volutpat metus. Nulla sed laoreet neque, non euismod leo.<br /> 
    Cras interdum aliquam sagittis. Cras laoreet nisl vitae purus fringilla iaculis.<br /> 
    Nullam non facilisis neque. Vestibulum semper felis non arcu malesuada consequat.<br /> */}
    </Box>
  );
}
