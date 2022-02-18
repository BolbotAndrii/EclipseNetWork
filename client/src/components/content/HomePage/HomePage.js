import React from 'react';
import classNames from "classnames";
import {Logo} from "../../Logo";
import {Text} from "../../Text";
import {Copyright} from "../../Copyright";
import {Button} from "../../Button";
import style from './HomePage.module.css'
import arrow_w from '../../../assets/img/layer-1/arrow-w.svg'
import arrow_b from '../../../assets/img/layer-1/arrow-b.svg'

const HomePage = ({moveDown, moveRight, modal}) => {
    return (
        <>
            <div className="container">
                <Logo />
                <div className="span">
                    <Text textStyle="buyers">for <br /> Buyers</Text>
                    <button
                        onClick={moveDown}
                        className={classNames(style.button, style.button_buyers)}
                        type="button"
                    >
                        <img src={arrow_w} alt="" />
                        <span> </span>
                    </button>
                </div>
                <div className="span">
                    <Text textStyle="brokers">for <br /> Brokers</Text>
                    <button
                        onClick={moveRight}
                        className={classNames(style.button, style.button_brokers)}
                        type="button"
                    >
                        <img src={arrow_b} alt="" />
                        <span> </span>
                    </button>
                </div>
                <div className={style.choose}>
                    Choose your side!
                </div>
                <Button modal={modal} text="Join our Side" styleBtn="home_btn" >
                    <span> </span><span> </span><span> </span><span> </span><span> </span><span> </span>
                </Button>
                <div className={style.copy}>
                    <Copyright />
                </div>
            </div>
        </>
    )
}

export default React.memo(HomePage)