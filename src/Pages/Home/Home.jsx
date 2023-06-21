import React from "react"
import  "./Home.css"
import Banner from '../../Components/Banner/Banner';
import Gallery from '../../Components/Gallery/Gallery'


function Home() {
  return (
    <main role="main">
        <Banner>
          <div className="div-home">Chez vous, partout et ailleurs</div>
        </Banner>
          <h2 className="visually-hidden">Accueil - Appartements</h2>
        <Gallery />
    </main>
  )
}

export default Home