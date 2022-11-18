import { Box, Grid } from "@mui/material";
import "./ProfileImage.css";

export default function ProfileImage(): JSX.Element {
  return (
    // <Grid container justifyContent="right" sx={{
    //   marginTop: "8%",
    //   marginLeft: "-15%"
    // }}>
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{
        marginTop: "8%"
      }}>
        <h1>Placeholder text</h1>
      </Grid>
      <Grid item xs={6} sx={{
        marginTop: "8%"
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