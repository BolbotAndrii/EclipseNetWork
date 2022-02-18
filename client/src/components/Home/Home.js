import React, {useEffect, useState} from 'react';
import {HomePage} from "../content";
import {Moon, Planet, PlanetLight, Light} from "../layers";
import classNames from "classnames";
import style from './Home.module.css';
import moon from '../../assets/img/layer-1/planet-1.png';
import light_1 from '../../assets/img/layer-1/light-1.png';
import light_2 from '../../assets/img/layer-1/light-2.png';

const Home = ({moveDown, moveRight, width, modalHandler}) => {
    const [mouseX, setMouseX] = useState(window.innerWidth / 2)
    const [position, setPosition] = useState(0)

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax");
            elem.addEventListener("mousemove", (e) => {
                setMouseX(e.pageX)
                mouseMove(e)
            });
        }
    }, [width, mouseX]);

    function mouseMove(e) {
        const bg = document.querySelector("#bg");
        const light = document.querySelector("#light");
        const parallaxElem = document.querySelectorAll('[data-elem="parallax"]')

        let brightness = (((e.pageX / 1000) * 0.3) + 0.4).toFixed(3)


        if (width > 1920) {
            setPosition(brightness)
        } else {
            setPosition(brightness * 1.4)
        }

        parallaxElem.forEach(item => {
            bg.style.filter = `brightness(${brightness})`
            light.style.opacity = brightness - 0.2
            parallax(e, item, item.dataset.x, item.dataset.y)
        })

        function parallax(e, item, x, y) {
            let valueX = (e.pageX * -1 / x)
            let valueY = (e.pageY * -1 / y)
            item.style.transform = `translate(${valueX}px, ${valueY}px)`
        }
    }

    return (
        <div id="parallax" className={style.inner}>
            <div id="bg" className={style.bg}> </div>
            <div className={style.layer}>
                <Moon flow={position > 0 ? position * 1.2 : 1} image={moon} moonStyle="moon" />
            </div>
            <div className={style.layer}>
                <PlanetLight />
            </div>
            <div data-x="300" data-y="300" data-elem="parallax" className={style.layer}>
                <Planet flow={position > 0 ? position * 2.5 : 2} />
            </div>
            <div className={style.layer}>
                <Light flow={position > 0 ? position : 1} x={mouseX} />
            </div>
            <div className={style.content}>
                <HomePage moveDown={moveDown} moveRight={moveRight} modal={modalHandler} />
            </div>

            {width && width > 600 ?
                <img src={light_1} id="light" className={classNames(style.light, style.light_1)} alt="" />
                : null}
            <img src={light_2} data-elem="light" className={classNames(style.light, style.light_2)} alt="" />
        </div>
    )
}

export default React.memo(Home)
