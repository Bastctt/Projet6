import React from "react"
import  "./Home.css"
import Banner from '../../Components/Banner/Banner';


function Home() {
  return (
    <main role="main">
        <Banner>
        <div className="div-home">Chez vous, partout et ailleurs</div>
        </Banner>
      <h2 className="visually-hidden">Accueil - Appartements</h2>
      
    </main>
  )
}

export default Home