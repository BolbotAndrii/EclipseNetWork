import {useEffect} from "react";
import classNames from "classnames";
import {СontactPage} from '../content';
import {Moon1} from "../layers";
import style from "./Сontact.module.css";
import spaceship from '../../assets/img/spaceship.png';
import spaceship1 from '../../assets/img/1.png';
import spaceship2 from '../../assets/img/2.png';
import spaceship3 from '../../assets/img/3.png';
import spaceship4 from '../../assets/img/4.png';
import spaceship5 from '../../assets/img/5.png';

const Сontact = ({width}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax7");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem = document.querySelectorAll('[data-elem="parallax7"]')
        parallaxElem.forEach(item => {
            parallax(e, item, item.dataset.x, item.dataset.y)
        })

        function parallax(e, item, x, y) {
            let valueX = (e.pageX * -1 / x)
            let valueY = (e.pageY * -1 / y)
            item.style.transform = `translate(${valueX}px, ${valueY}px)`
        }
    }

    return (
        <div id="parallax7" className={style.inner}>
            {width && width > 1024 ?
                <>
                    <div data-x="300" data-y="300" data-elem="parallax7"
                         className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship} moonStyle="contact_ship" />
                    </div>
                    <div
                        className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship1} moonStyle="contact_ship_1" />
                    </div>
                    <div
                        className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship2} moonStyle="contact_ship_2" />
                    </div>
                    <div
                        className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship3} moonStyle="contact_ship_3" />
                    </div>
                    <div
                        className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship4} moonStyle="contact_ship_4" />
                    </div>
                    <div
                        className={classNames(style.layer, style.layer_1)}>
                        <Moon1 image={spaceship5} moonStyle="contact_ship_5" />
                    </div>
                </>
                : null}

            <div className={style.content}>
                <СontactPage />
            </div>
        </div>
    )
}

export default Сontact