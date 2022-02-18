import {useEffect} from "react";
import classNames from "classnames";
import style from './Light.module.css';

const Light = ({flow, x}) => {


    useEffect(() => {
        const ray_1 = document.querySelector("#ray_1");
        const ray_2 = document.querySelector("#ray_2");

        ray_1.style.transform = `scale(${flow})`
        ray_1.style.opacity = (flow - 0.1) + 0.3
        ray_2.style.transform = `scale(${flow})`
        ray_2.style.opacity = (flow - 0.1) + 0.5
    }, [flow, x])

    return (
        <div className={style.inner}>
                <div className={style.wrap}>
                    <div id="ray_1" className={classNames(style.ray, style.ray__1)} />
                    <div id="ray_2" className={style.wrap__ray}>
                        <div className={classNames(style.ray, style.ray__2)} />
                        <div className={classNames(style.ray, style.ray__3)} />
                        <div id="blick" className={style.blick} />
                    </div>
                </div>
        </div>
    )
}
export default Light