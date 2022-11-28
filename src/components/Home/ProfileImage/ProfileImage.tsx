import { Box } from "@mui/material";
import "./ProfileImage.css";

export default function ProfileImage(): JSX.Element {
  return (
      <Box
        component="img"
        className="Image"
        alt="Profile Image"
        src={require("../../../assets/image.jpg")}
      />
  );
}   
