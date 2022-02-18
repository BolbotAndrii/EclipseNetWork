import {useEffect} from "react";
import classNames from "classnames";
import {RoadmapPage} from "../content";
import style from './Roadmap.module.css';
import starship from "../../assets/img/starship.png";
import {Moon1} from "../layers";

const Roadmap = ({width}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax6");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem2 = document.querySelectorAll('[data-elem="parallax6"]')
        parallaxElem2.forEach(item => {
            parallax(e, item, item.dataset.x, item.dataset.y)
        })

        function parallax(e, item, x, y) {
            let valueX = (e.pageX * -1 / x)
            let valueY = (e.pageY * -1 / y)
            item.style.transform = `translate(${valueX}px, ${valueY}px)`
        }
    }

    return (
        <div id="parallax6" className={style.inner}>
            {width && width > 1024 ?
                <div data-x="-80" data-y="150" data-elem="parallax6" className={classNames(style.layer, style.layer_1)}>
                    <Moon1 image={starship} moonStyle="roadmap_ship" />
                </div>
                : null}

            <div className={style.content}>
                <RoadmapPage />
            </div>
        </div>
    )
}

export default Roadmap