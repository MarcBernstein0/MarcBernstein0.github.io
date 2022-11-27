import { Box, Grid } from "@mui/material";
import AnimatedText from "../AnimatedText/AnimatedText";
import "./ProfileImage.css";

export default function ProfileImage(): JSX.Element {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{
        marginTop: "3%",
      }}>
        <AnimatedText />

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
