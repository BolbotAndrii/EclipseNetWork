import React from "react";
import style from './Sphere.module.css';
import sphere from '../../../assets/img/layer-2/sphere.png';

const Sphere = () => {
  return(
      <div className={style.inner}>
          <img src={sphere} alt="Sphere" />
      </div>
  )
}

export default React.memo(Sphere)