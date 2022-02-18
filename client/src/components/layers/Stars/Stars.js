import React from "react";
import style from './Stars.module.css';

const Stars = ({children, image}) => {
  return(
      <div className={style.inner}>
          <img src={image} alt="Stars" />
          {children}
      </div>
  )
}

export default React.memo(Stars)