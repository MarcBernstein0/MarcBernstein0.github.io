import { Box, Grid } from "@mui/material";
import "./ProfileImage.css";

export default function ProfileImage(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{
        marginTop: "3%"
      }}>
        <Box
          component="h1"
          display="flex"
          justifyContent="center"
          sx={{
            fontSize: "xx-large"
          }}
        >Placeholder text</Box>

      </Grid>
      <Grid item xs={6} sx={{
        marginTop: "3%"
      }}>
      <Box
        component="img"
        className="Image"
        alt="Profile Image"
        src={require("../../assets/image.jpg")}
      />
      </Grid>
    </Grid>
  );
}   