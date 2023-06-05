import React from 'react'
import mario from "../../assets/imgs/sale_mario.jpg"
import metroid from "../../assets/imgs/sale_metroid.jpg"
import pokemon from "../../assets/imgs/sale_pokemon.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

export function CarouselSales() {
  return (
    <div className='carousel_sales_page'>
        <Carousel autoPlay={true} ariaLabel='sales carousel' infiniteLoop={true} showArrows={true} showStatus={false} showThumbs={false}>
                  <div>
                      <img src={mario} alt="mario kart 8 cover showing the discount"/>
                  </div>
                  <div>
                      <img src={metroid} alt="metroid prime cover showing the discount"/>
                  </div>
                  <div>
                      <img src={pokemon} alt="pokken cover showing the discount" />
                   </div>
        </Carousel>
    </div>
  )
}
