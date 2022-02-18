import style from './Planet.module.css';
import planet from "../../../assets/img/layer-1/planet-2.png";

const Planet = ({flow}) => {
    return(
        <div className={style.inner}>
            <div className={style.wrap}>
                <img src={planet} style={{filter: `brightness(${flow})`}} className={style.planet} alt="" />
            </div>
        </div>
    )
}

export default Planet