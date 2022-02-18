import React from "react";
import classNames from "classnames";
import style from './Moon.module.css';

const Moon = ({children, image, moonStyle, flow}) => {
    return (
        <div className={classNames(style.inner, style[moonStyle])}>
            <img src={image} style={{filter: `brightness(${flow})`}} alt="" />
            {children}
        </div>
    )
}

export default React.memo(Moon)