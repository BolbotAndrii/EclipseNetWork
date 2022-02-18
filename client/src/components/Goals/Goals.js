import {useEffect} from "react";
import {Moon1} from "../layers";
import {GoalsPage} from "../content";
import style from './Goals.module.css';
import moon1 from "../../assets/img/layer-3/moon-1.png";
import moon3 from "../../assets/img/layer-3/moon-3.png";
import moon4 from "../../assets/img/layer-3/moon-4.png";
import starship from "../../assets/img/starship.png";

const Goals = ({width, modalHandler}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax3");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem = document.querySelectorAll('[data-elem="parallax3"]')
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
        <div id="parallax3" className={style.inner}>
            {width && width > 428 ?
                <div data-x="200" data-y="-220" data-elem="parallax3" className={style.layer}>
                    <Moon1 image={moon1} moonStyle="moon__1" />
                </div>
                : null}

            {width && width > 390 ?
                <div data-x="-180" data-y="-150" data-elem="parallax3" className={style.layer}>
                    <Moon1 image={moon3} moonStyle="moon__3" />
                </div>
                : null}

            <div data-x="200" data-y="250" data-elem="parallax3" className={style.layer}>
                <Moon1 image={moon4} moonStyle="moon__4" />
            </div>

            {width && width > 1024 ?
                <div data-x="-180" data-y="-20" data-elem="parallax3" className={style.layer}>
                    <Moon1 image={starship} moonStyle="starship" />
                </div>
                : null}

            <div className={style.content}>
                <GoalsPage modal={modalHandler} />
            </div>
        </div>
    )
}

export default Goals