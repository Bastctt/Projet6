import "./Gallery.css"
import Card from "../../Components/Card/Card"
import datas from "../../Datas/Hébergements.json"

function Gallery() {
    return ( datas && datas.length>0 && (
        <section aria-label="Galerie appartements" className="gallery-appartements">
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
                
            })}
        </section>
    ))
}

export default Gallery