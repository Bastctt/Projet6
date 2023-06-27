import "./Gallery.scss"
import Card from "../../Components/Card/Card"
import datas from "../../Datas/hebergement.json"

function Gallery() {
    if (datas && datas.length > 0) {
        return (
            <section aria-label="Galerie appartements" className="gallery-appartements">
                {datas.map(data => (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                ))}
            </section>
        );
    }
    return null;
}

export default Gallery;
