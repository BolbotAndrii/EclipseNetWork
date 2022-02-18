import React, {useState} from "react";
import axios from "axios";
import {Button} from "../Button";
import {Input} from "../Input";
import style from './Form.module.css';
import {Radio} from "../Radio";

const Form = ({mainColor, type, home}) => {
    const [value, setValue] = useState({type})

    const valueHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const radioHandler = (e) => {
        setValue({
            ...value,
            type: e.target.id
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        return axios.post('https://create-traffic.com/api/tg-sender.php', value)
            .then(({data}) => {
                console.log(data)
                setValue({type, name: '', messenger: ''})
            })
    }

    return (
        <form className={style.inner} onSubmit={submitHandler}>
            <Input
                keyNum='1'
                id="name"
                mainColor={mainColor}
                valueHandler={valueHandler}
                type="text"
                value={value.name}
                label="Name"
                name="name"
                required
            />
            <Input
                keyNum='2'
                id="messenger"
                mainColor={mainColor}
                valueHandler={valueHandler}
                type="text"
                name="messenger"
                value={value.messenger}
                label="Telegram/Skype"
                required
            />
            {home && <Radio radioHandler={radioHandler} />}
            <Button text="Join our Side" typeBtn="submit" styleBtn="form__btn">
                <span> </span><span> </span><span> </span>
            </Button>
        </form>
    )
}

export default Form