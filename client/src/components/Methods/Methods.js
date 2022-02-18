import {useEffect} from "react";
import {Moon1, Portal} from "../layers";
import {MethodsPage} from "../content";
import style from "./Methods.module.css";
import spaceship from '../../assets/img/layer-4/spaceship.png'

const Methods = ({width}) => {

    useEffect(() => {
        if (width > 1024) {
            const elem = document.querySelector("#parallax4");
            elem.addEventListener("mousemove", (e) => {
                mouseMove(e)
            });
        }
    }, [width]);

    function mouseMove(e) {
        const parallaxElem = document.querySelectorAll('[data-elem="parallax4"]')
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
        <div id="parallax4" className={style.inner}>
            {width && width > 428 ? <Portal /> : null}
            {width && width > 428 ?
                <div data-x="100" data-y="-80" data-elem="parallax4" className={style.layer}>
                    <Moon1 image={spaceship} moonStyle="spaceship__1" />
                </div>
                : null}

            <div className={style.content}>
                <MethodsPage />
            </div>
        </div>
    )
}

export default Methods