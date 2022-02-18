import React from "react";
import {Text} from "../Text";
import {Form} from "../Form";
import style from './Modal.module.css';
import close from '../../assets/img/close.png'

const Modal = ({modalHandler, type, home, title, id}) => {

    return (
        <div className={style.inner}>
            <div className={style.wrap}>
                <button onClick={modalHandler} type="button" className={style.modal__btn}>
                    <img src={close} alt="" />
                </button>

                <Text textStyle="modal__title">{title[id]}</Text>
                <Form type={type} home={home} mainColor="white" />
            </div>
        </div>
    )
}

export default Modal