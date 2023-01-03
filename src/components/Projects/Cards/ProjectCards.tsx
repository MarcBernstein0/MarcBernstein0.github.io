import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function ProjectCards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        href='https://github.com/MarcBernstein0/challonge-match-display'
        target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={require("../../../assets/MATCHDISPLAYLOGO.png")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Match Display
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A way to display pending matches for currently running tournaments 
            being ran by a specific user of the challonge.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}