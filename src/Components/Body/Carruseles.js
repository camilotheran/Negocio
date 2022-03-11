import React from "react";
import "../../Css/Carruseles.css"
import "../../Css/Body.css"
import { FaCartArrowDown,IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/all";
import { Button, Image } from "react-bootstrap";
import { useEffect } from "react";

const Carruseles = (props) => {

    useEffect(()=>{

        const fila = document.getElementById(props.idContainerCarrusel);
        const flechaDerecha = document.getElementById(props.idFlechaDerecha);
        const flechaIzquierda = document.getElementById(props.idFlechaIzquierda);
        
        // evento de flecha derecha 
        const flechaEventDerecha =  () => {
            fila.scrollLeft += fila.offsetWidth ;
        }
        flechaDerecha.addEventListener('click', flechaEventDerecha);

        // evento de flecha izquierda 
        const flechaEventIzquierda =  () => {
            fila.scrollLeft -= fila.offsetWidth ;
        }
        flechaIzquierda.addEventListener('click', flechaEventIzquierda);

        return (() => flechaDerecha.removeEventListener('click', flechaEventDerecha,flechaEventIzquierda))
    })
    

    return(
        <>
            <div className="carrusel container">  
                <div className="carrusel-header">
                    <h3>{props.titulo}</h3>
                </div>
                <div className="carrusel-principal">
                    <Button  id={props.idFlechaIzquierda} className="flecha-izquierda"><IoIosArrowDropleftCircle /></Button>
                    <div id={props.idContainerCarrusel} className="carrusel-container">
                        <div className="carousel"> 
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1019/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1019/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1019/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1015/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1019/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                            <div className="carrusel-caja-img">
                                <Image className="carrusel-img" src="https://picsum.photos/id/1018/1000/600/" />
                                <p className="carrusel-text bold">titulo del producto</p>
                                <div className="df-js">
                                    <p className="carrusel-text size-14">$ precio del producto</p>
                                    <Button className="button-car df-jc"><FaCartArrowDown/></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button id={props.idFlechaDerecha} className="flecha-derecha"><IoIosArrowDroprightCircle /></Button>
                </div>
            </div>
        </>
    )
}
export default Carruseles