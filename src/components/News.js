import React, { useState, useEffect } from "react";

import New from "./New";
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import ImageSlider from './imgslide/ImageSlider';
import { SliderData } from './imgslide/SliderData';

const News = () => {
  const [news, setNews] = useState([])
  const [VacDetail] = React.useState('Vaccination is a simple, safe, and effective way of protecting you against harmful diseases, before you come into contact with them. It uses your body’s natural defenses to build resistance to specific infections and makes your immune system stronger.')
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/news", {
  //     method: 'GET',
  //     headers: {
  //       'accept': 'application/json',
  //       'Access-Control-Allow-Origin': "*",
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'Access-Control-Allow-Credentials': 'true',

  //     }
  //   })
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setNews(result)
  //       }
  //     )
  // }, [])

  return (
    <>
      <div className="page-break">
        <p>KNOWLEDGE AND NEWS</p>
      </div>


      <ImageSlider slides={SliderData} />


      <div className='vaccine-banner'>

        <p className='vac-header'>Vaccine</p>
        <p className='vac-detail'>{VacDetail}</p>
        <Link to="/vaccine" style={{ color: 'white' }}>
          <button type="button" class="btn btn-outline-light" style={{ fontSize: 20, marginLeft: 1150, padding: 12.5, borderRadius: 25, marginBottom: 140 }}>
            Learn more
          </button>
        </Link>

      </div>

      <>
        <div className="knowledge-news-line1">
          <><Grid container columnSpacing={1}
            rowSpacing={8}>
            {news.map((data) => (

              <New key={data.topic} data={data} />

            ))}
          </Grid></>
        </div>
      </>
    </>
  );
};
export default News;
