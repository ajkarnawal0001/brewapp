import React from "react";
import CarouselSlider from "react-carousel-slider";
import styled from "styled-components";
let autoSliding = {
  items: [
    {
      id:1,
      imgSrc:
        "https://wallpaperaccess.com/full/1437584.jpg",
    },
    {
      id:2,
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE81rT99UZWXlX_GS2RztoFMK8cDf2hqleQ&usqp=CAU",
    },
    {
      id:3,
      imgSrc:
        "https://blog-digital.aakash.ac.in/wp-content/uploads/2018/10/online-education-1140x570.png",
    },
    {id:4,
      imgSrc:
        "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg",
    },
  ],
};

export const RightCarousel = () => {
  let manner = {
    autoSliding: { interval: "4s" },
    duration: "2s",
  };
  let sliderBoxStyle = {
    height: "200px",
    background: "transparent",
  };
  let itemsStyle = {
    objectFit:"cover"
  };
  // let mobileRegx = /Mobi/;
  // if (mobileRegx.test(navigator.userAgent)) {
  // }

  let buttonSetting = {
    placeOn: "middle-inside",
    hoverEvent: true,
    style: {
      left: {
        height: "0px",
        width: "0px",
        color: "#929393",
        background: "rgba(225, 228, 232, 0.8)",
        borderRadius: "50%",
      },
      right: {
        height: "0px",
        width: "0px",
        color: "#929393",
        background: "rgba(225, 228, 232, 0.8)",
        borderRadius: "50%",
      },
    },
  };

  return (
    <Crs>
    <CarouselSlider
      slideItems={autoSliding.items}
      manner={manner}
      buttonSetting={buttonSetting}
      sliderBoxStyle={sliderBoxStyle}
      itemsStyle={itemsStyle}
    />
    </Crs>
  );
};

const Crs = styled.div`
  max-width:70%;
  margin:1rem auto;
`