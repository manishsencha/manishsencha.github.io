import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../CSS/ProjectCard.css";
import { Button, CardActions } from "@material-ui/core";
export default function Projectcard(props) {
  return (
    <Card className="card" style={{ marginTop: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          href={props.link}
          target="_blank"
          style={{ height: 50, width: 200 }}
          size="small"
          variant="contained"
        >
          Github
        </Button>
        <Button
          href={props.demo}
          target="_blank"
          style={{ height: 50, width: 200 }}
          size="small"
          variant="contained"
          color="secondary"
        >
          Demo
        </Button>
        
      </CardActions>
    </Card>
  );
}
