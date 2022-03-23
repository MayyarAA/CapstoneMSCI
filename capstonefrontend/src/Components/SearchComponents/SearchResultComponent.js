import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  CardMedia,
  CardHeader,
  Typography,
  IconButton,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material/";
import { makeStyles } from "@mui/styles";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import goldenstyle from "../../images/goldenstyle.jpeg";
import prettylittlething from "../../images/prettylittlething.png";
import colourexperts from "../../images/colourexperts.png";
import chateauGC from "../../images/chateauGC.png";
import onestudio from "../../images/onestudio.png";
import educo from "../../images/educo.png";
import dsquare from "../../images/dsquare.webp";
import evolve from "../../images/evolve.png";
import Card from "react-bootstrap/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
function ShopObject(shopName, shopShortDescr, shopeLongDescr, shopImage) {
  this.shopName = shopName;
  this.shopShortDescr = shopShortDescr;
  this.shopeLongDescr = shopeLongDescr;
  this.shopImage = shopImage;
}
function SearchResultComponent() {
  const navigate = useNavigate();
  let result = <Row>barber1</Row>;
  let listOfShops = [];
  listOfShops.push(
    new ShopObject(
      "golden style",
      "modern gender neutral style shop",
      "long dscr",
      goldenstyle
    )
  );
  listOfShops.push(
    new ShopObject(
      "chateau GC ",
      "Upscale service, taking care of everything",
      "long dscr",
      chateauGC
    )
  );
  listOfShops.push(
    new ShopObject(
      "prettylittlethings shop",
      "beautify shop dedicated to making you look pretty",
      "long dscr",
      prettylittlething
    )
  );
  listOfShops.push(
    new ShopObject(
      "colourexperts",
      "Professional colouring shop, for all hair types",
      "long dscr",
      colourexperts
    )
  );
  listOfShops.push(
    new ShopObject(
      "studio one",
      "experience complete, undivided attention from our skilled professionals",
      "long dscr",
      onestudio
    )
  );
  listOfShops.push(
    new ShopObject(
      "educo",
      "Our hairstylists at educo are professionally committed to connecting with their clients",
      "long dscr",
      educo
    )
  );
  listOfShops.push(
    new ShopObject(
      "dsquare",
      "evolving Midtown and hosts some of the best stylist talent in the city",
      "long dscr",
      dsquare
    )
  );
  listOfShops.push(
    new ShopObject(
      "evolve",
      "We believe that a visit to the salon should be relaxing yet luxurious",
      "long dscr",
      evolve
    )
  );

  let directToShopPage = (shopName) => {
    navigate("/ServiceProviderallservices");
  };
  if (true) {
    result = (
      <Container>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Row xs={1} md={2} className="g-4">
            {listOfShops.map((shopResult) => {
              const labelId = `checkbox-list-secondary-label-${shopResult.shopName}`;
              return (
                <div>
                  <ListItem
                    style={{ paddingBottom: "2%" }}
                    key={shopResult.shopName}
                  >
                    <Card style={{ width: "100%" }}>
                      <Card.Header>
                        <Card.Img
                          style={{
                            width: "20%",
                            padding: "2%",
                          }}
                          variant="top"
                          src={shopResult.shopImage}
                        />
                      </Card.Header>

                      <Card.Body>
                        <Card.Title>
                          {shopResult.shopName.toUpperCase()}
                        </Card.Title>
                        <Card.Text>{shopResult.shopShortDescr}</Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={() => {
                            directToShopPage(shopResult.shopName);
                          }}
                        >
                          View Services
                        </Button>
                      </Card.Body>
                    </Card>
                  </ListItem>
                </div>
              );
            })}
          </Row>
        </List>
      </Container>
    );
  }
  return <div>{result}</div>;
}
function SearchResultComponentV2() {
  cardComponent = (shopName, shopDscr, img, longDscr) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {shopName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shopDscr}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  };
  return (
    <div>
      {cardComponent(
        "barber1",
        "modern gender netueral barber",
        "../../images/calendariconv1.png",
        "goldie barber shop is here to provide you with all the services you need"
      )}
    </div>
  );
}

export { SearchResultComponent };

let cardComponent = (skillname, dscr, img, fullDetail) => {
  return (
    <div>
      <Card>
        <CardHeader title={skillname} subheader={dscr} />
        <CardMedia image={img} title={skillname} />

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"></IconButton>
          <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="h6" color="textSecondary" component="p">
            {fullDetail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
