import React from "react";
import './Logo.css';
import logo from '../../assets/img/logo.svg'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="" />
        </div>
    )
}

export default React.memo(Logo)