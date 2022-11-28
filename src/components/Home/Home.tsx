import { Grid } from "@mui/material";
import AboutMeText from "./AboutMeText/AboutMeText";
import AnimatedText from "./AnimatedText/AnimatedText";
import ProfileImage from "./ProfileImage/ProfileImage";


const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{
        marginTop: "3%"
      }}>
        <AnimatedText />
        <AboutMeText />
      </Grid>
      <Grid item xs={6} sx={{
        marginTop: "3%"
      }}>
        <ProfileImage />
      </Grid>
    </Grid>
  );
}

export default Home;
