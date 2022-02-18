import React from "react";
import {Link} from "../Link";
import style from './Menu.module.css';
import close from "../../assets/img/close.png";

const Menu = ({menuHandler}) => {
    return (
        <div className={style.inner}>
            <div className={style.wrap} id="myMenu">
                <button onClick={menuHandler} type="button" className={style.modal__btn}>
                    <img src={close} alt="" />
                </button>
                <div className={style.title}>for Buyers</div>
                <div className={style.inner__nav} onClick={menuHandler}>
                    <Link path="slide-1" anchor="#slide-1" linkStyle="mob">Home</Link>
                    <Link path="slide-2" anchor="#slide-2" linkStyle="mob">Providing</Link>
                    <Link path="slide-3" anchor="#slide-3" linkStyle="mob">Goals</Link>
                    <Link path="slide-4" anchor="#slide-4" linkStyle="mob">Methods</Link>
                    <Link path="slide-5" anchor="#slide-5" linkStyle="mob">Сonnection</Link>
                </div>
                <div className={style.title}>for Brokers</div>
                <div onClick={menuHandler}>
                    <Link path="slide-1/1" anchor="#slide-1/1" linkStyle="mob">For Brokers</Link>
                    <Link path="slide-1/2" anchor="#slide-1/2" linkStyle="mob">Why us</Link>
                    <Link path="slide-1/3" anchor="#slide-1/3" linkStyle="mob">Get HQ traffic</Link>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Menu)