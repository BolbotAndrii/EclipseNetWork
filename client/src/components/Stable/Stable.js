import {useEffect} from "react";
import classNames from "classnames";
import {StablePage} from "../content";
import {Moon1} from "../layers";
import style from './Stable.module.css';
import starship from "../../assets/img/starship.png";

const Stable = ({width, modalHandler}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax5");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem = document.querySelectorAll('[data-elem="parallax5"]')
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
        <div id="parallax5" className={style.inner}>
            {width && width > 1024 ?
                <div data-x="-80" data-y="150" data-elem="parallax5" className={classNames(style.layer, style.layer_1)}>
                    <Moon1 image={starship} moonStyle='stable_ship' />
                </div>
                : null}

            <div className={style.content}>
                <StablePage modal={modalHandler} />
            </div>
        </div>
    )
}

export default Stable