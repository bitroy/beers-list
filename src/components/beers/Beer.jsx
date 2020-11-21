import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  cardItem: {
    margin: theme.spacing(2),
    display: "flex",
    height: "85%",
    backgroundColor: "black",
    color: "white",
  },
  media: {
    width: "15%",
  },
}));

const Beer = ({ image, name, style, abv, ounces }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardItem}>
      <CardMedia
        className={classes.media}
        component="img"
        alt={name}
        image={image}
      />
      <CardContent component="section">
        <Typography variant="h5" component="p">
          Name: {name}
        </Typography>
        <Typography variant="h6" component="p">
          Style: {style}
        </Typography>
        <Typography variant="h6" component="p">
          Alcohol By Volume: {abv}
        </Typography>
        <Typography variant="h6" component="p">
          Ounces: {ounces}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(Beer);
