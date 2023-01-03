import { Grid } from "@mui/material";
import ProjectCard from "./Cards/ProjectCards";

export default function Projects() {
  const projects = [{
      projectName: "Match Display",
      link: "https://github.com/MarcBernstein0/challonge-match-display",
      description: "A way to display pending matches for currently running tournaments being ran by a specific user of the challonge.com.",
      imageName: "MATCHDISPLAYLOGO.png"
    },
    {
      projectName: "Portfolio Site",
      link: "https://github.com/MarcBernstein0/MarcBernstein0.github.io",
      description: "Portfolio website built in React using typescript and hosted on github pages.",
      imageName: "image.jpg",
    }
]

  return (
    <Grid>
      {projects.map(proj => (
        <ProjectCard {...proj} />
      ))}
    </Grid>

  );
}