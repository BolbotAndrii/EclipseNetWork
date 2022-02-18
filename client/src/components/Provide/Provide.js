import {useEffect} from "react";
import classNames from "classnames";
import {ProvidePage} from "../content";
import {Sphere} from "../layers";
import style from './Provide.module.css'

const Provide = ({width}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax2");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem2 = document.querySelectorAll('[data-elem="parallax2"]')
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
        <div id="parallax2" className={style.inner}>
            {width && width > 390 ?
                <div data-x="300" data-y="300" data-elem="parallax2" className={classNames(style.layer, style.layer_2)}>
                    <Sphere />
                </div>
                : null}

            <div className={style.content}>
                <ProvidePage />
            </div>
        </div>
    )
}

export default Provide