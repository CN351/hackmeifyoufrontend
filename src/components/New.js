import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";



export default function New({ data }) {
  console.log(data)

  return (<Grid item xs={3}>
    <Card sx={{ maxWidth: 400, borderRadius: 5 }} >
      <CardActionArea href={data.link}>

        <CardMedia
          component="img"
          alt="covid-19 News"
          height="220"
          width="auto"
          image={data.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.detail}
          </Typography>
          <br></br>

        </CardContent>
      </CardActionArea>

    </Card>
  </Grid>
  );
}
