import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


interface projectCardProps {
  projectName: string;
  link: string;
  description: string;
  imageName: string;
}

export default function ProjectCard({projectName, link, description, imageName} : projectCardProps) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      maxHeight: 500
      }}>
      <CardActionArea
        href={link}
        target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={require("../../../assets/" + imageName)}
          alt={{projectName} + " image"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}