import React from "react";
import style from './Portal.module.css';
import portal from '../../../assets/img/layer-4/portal.png';

const Portal = () => {
  return(
      <div className={style.inner}>
          <img src={portal} alt="Portal" />
      </div>
  )
}

export default React.memo(Portal)