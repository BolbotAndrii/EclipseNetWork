import style from './Radio.module.css';

const Radio = ({radioHandler}) => {
    return (
        <div onChange={radioHandler} className={style.radio}>
            <input type="radio" value="buyer" id="buyer" name="type" className={style.input} required/>
            <label htmlFor="buyer" className={style.label}>
                Buyer
            </label>

            <input type="radio" value="broker" id="broker" name="type" className={style.input} required />
            <label htmlFor="broker" className={style.label}>
                Broker
            </label>
        </div>
    )
}

export default Radio