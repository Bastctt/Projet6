import "./Gallery.css"

import datas from "../../datas/logements.json"

function Gallery() {
    return ( datas && datas.length>0 && (
        <section aria-label="Galerie appartements" className="gallery-appartements">
            {datas.map(data => {
                return (
                    
                    <div>Salut</div>
                )
                
            })}
        </section>
    ))
}

export default Gallery