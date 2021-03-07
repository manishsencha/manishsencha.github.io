import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../CSS/UrlShortenerCard.css";
export default function Urlshortenercard() {
  return (
        <a
         className="btn"
          href="https://github.com/manishsencha/URL-Shortener"
          target="_blank"
          rel="noreferrer"
        >
    <Card className="card">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="URL-Shortener"
          image={require("../Images/UrlShortener.png").default}
          title="URL-Shortener"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            URL-Shortener
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This Tool is developed using Express framework and a library called
            shortid and It is also connected to mongodb database which stores
            the Full Urls and Corresponding ShortUrls.
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </a>
  );
}
