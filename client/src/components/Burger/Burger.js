import style from './Burger.module.css'

const Burger = ({menuHandler}) => {
    return (
        <div onClick={menuHandler} className={style.wrap}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Burger