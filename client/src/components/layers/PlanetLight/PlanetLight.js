import React from "react";
import classNames from "classnames";
import style from './PlanetLight.module.css';

const PlanetLight = () => {
    return(
        <div className={style.inner}>
            <div className={style.wrap}>
                <div className={classNames(style.overlay, style.overlay_1)}/>
                <div className={classNames(style.overlay, style.overlay_2)}/>
                <div className={classNames(style.overlay, style.overlay_3)}/>
            </div>
        </div>
    )
}

export default React.memo(PlanetLight)