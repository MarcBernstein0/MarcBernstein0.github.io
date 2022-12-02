import { Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function AnimatedText(): JSX.Element {
  return (
    <Box
      component="h1"
      display="flex"
      justifyContent="center"
      sx={{
        fontSize: "xxx-large",
        margin: "auto",
        paddingTop: "15%",
        fontWeight: 700
      }}
    >
      <TypeAnimation 
        sequence={[
          "Hi! I'm Marc Bernstein.",
        ]}
        speed={40}
      />
    </Box>
  );
}
