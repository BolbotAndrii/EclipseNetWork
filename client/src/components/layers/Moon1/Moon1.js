import React from "react";
import classNames from "classnames";
import style from "./Moon1.module.css";

const Moon1 = ({image, moonStyle}) => {
    return (
        <div className={classNames(style.inner, style[moonStyle])}>
            <img src={image} alt="" />
        </div>
    )
}

export default React.memo(Moon1)