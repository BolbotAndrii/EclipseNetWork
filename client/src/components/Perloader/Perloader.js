import style from './Perloader.module.css';
import logo from '../../assets/img/logo.svg';

const Perloader = () => {
    return (
        <div className={style.inner}>
            <div className={style.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={style.loader}>
                <div className={style.loading} />
            </div>
        </div>
    )
}

export default Perloader