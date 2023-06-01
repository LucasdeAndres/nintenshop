import React from 'react'
import mario from "../../assets/imgs/sale_mario.jpg"
import metroid from "../../assets/imgs/sale_metroid.jpg"
import pokemon from "../../assets/imgs/sale_pokemon.jpg"

export function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={mario} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={metroid} class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src={pokemon} class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  )
}
