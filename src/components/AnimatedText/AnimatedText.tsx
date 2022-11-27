import { Box } from "@mui/material";


export default function AnimatedText(): JSX.Element {
  return (
    <Box
      component="h1"
      display="flex"
      justifyContent="center"
      sx={{
        fontSize: "xx-large",
        margin: "auto",
        paddingTop: "10%"
      }}
    >
      Hi! I'm Marc Bernstein
    </Box>
  );
}
