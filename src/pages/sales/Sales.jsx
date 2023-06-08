import { CarouselSales } from '../../components/carouselSales/CarouselSales'
import React from 'react'
import { Header } from '../../components/header/Header'
import { FilterSales } from '../../components/filterSales/FilterSales'
import { CardSales } from '../../components/cardSales/CardSales'
import { Footer } from '../../components/footer/Footer'
import games from "../../assets/jsons/games.json"

export function Sales() {
  return (
    <div className='sales'>
        <Header />
        <CarouselSales />
        <FilterSales />
        <div className='sales_games_cards'>
                {games.map((game => {
                    if (game.sale !== "no"){
                    return <CardSales key={game.id} img={game.imagenes[0]} title={game.nombre} price={game.precio} sale={game.sale}/>
                    }else return null
                }))}
            </div>
         <Footer/>   
    </div>
  )
}
