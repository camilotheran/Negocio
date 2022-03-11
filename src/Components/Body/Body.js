import React from "react";
import { Container } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "../../Css/Body.css";
import Carruseles from "./Carruseles";

const Body = () => {

    // const onCurrentChange = current => {
    //     console.log(`click on the image: ${current}`)
    // }

    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    return(
        <Container>
            <div style={{paddingTop: "20px"}}>
                <ImageGallery  
                    items={images}
                    autoPlay={true} 
                    showPlayButton={false} 
                    showFullscreenButton={false} 
                    showThumbnails={false}
                    slideInterval={5000}
                    showBullets={true}
                    showNav={false}
                />
            </div>
            <div className="contenedor-productos">
                <Carruseles  
                    titulo="Productos recomendados" 
                    idFlechaIzquierda={"flecha-izquierda-1"}
                    idFlechaDerecha={"flecha-derecha-1"}
                    idContainerCarrusel={"carrusel-container-1"}
                />
            </div>
            <div className="contenedor-productos">
                <Carruseles  
                    titulo="Salsas" 
                    idFlechaIzquierda={"flecha-izquierda-2"}
                    idFlechaDerecha={"flecha-derecha-2"}
                    idContainerCarrusel={"carrusel-container-2"}
                />
            </div>
            <div className="contenedor-productos">
                <Carruseles  
                    titulo="Productos Desechables" 
                    idFlechaIzquierda={"flecha-izquierda-3"}
                    idFlechaDerecha={"flecha-derecha-3"}
                    idContainerCarrusel={"carrusel-container-3"}
                />
            </div>
        </Container>
    )
}
export default Body