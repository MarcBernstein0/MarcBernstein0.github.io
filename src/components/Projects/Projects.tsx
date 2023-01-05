import { Grid } from "@mui/material";
import ProjectCard from "./Cards/ProjectCards";

export default function Projects() {
  const projects = [{
    projectName: "Match Display",
    link: "https://github.com/MarcBernstein0/challonge-match-display",
    description: "Dispay pending matched of tournaments running on challonge.com",
    imageName: "MATCHDISPLAYLOGO.png"
  },
  {
    projectName: "Portfolio Site",
    link: "https://github.com/MarcBernstein0/MarcBernstein0.github.io",
    description: "Portfolio website built in React using typescript and hosted on github pages.",
    imageName: "image.jpg",
  },
  {
    projectName: "Test",
    link: "https://github.com/MarcBernstein0/MarcBernstein0.github.io",
    description: "Portfolio website built in React using typescript and hosted on github pages.",
    imageName: "image.jpg",
  }
  ]

  return (
    <Grid container 
      spacing={0}
      justifyContent="center"
      marginTop="5%">
      {projects.map(proj => (
        <Grid item xs={3}>
          <ProjectCard {...proj} />
        </Grid>
      ))}
    </Grid>

  );
}