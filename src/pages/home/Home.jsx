import React from 'react'
import { Cards } from '../../components/cards/Cards'
import { Header } from '../../components/header/Header'
import nintendoSwitch from "../../assets/imgs/nintendo_switch.png"
import games from "../../assets/jsons/games.json"
import { Footer } from '../../components/footer/Footer'
import "./home.css"

export const Home = () => {


  return (
    <div className='home'>
        <Header/>
        <div className='home_intro'>
            <div className='home_intro_text'>
                <h1>Welcome to Nintenshop</h1>
                <p>This webpage is a fan ecommerce project
                    for my portfolio. 
                    In this page you will be able to explore Nintendo games,
                    create an user and be able to simulate buying a game.
                    Obviusly this page is not an official Nintendo page
                    and you wont be able to buy real games.
                </p>
                <p> Hope you guys have fun!</p>
            </div>
            <div className='home_intro_img'>
                <img src={nintendoSwitch} alt="nintendo switch" />
            </div>
        </div>
        <div className='home_popular_games'>
            <h2>Popular Games</h2>
            <div className='popular_games_cards'>
                {games.map((game => {
                    return <Cards key={game.id} img={game.imagenes[0]} title={game.nombre} price={game.precio}/>
                }))}
            </div>
        </div>
        <Footer/>
    </div>
  )
}
