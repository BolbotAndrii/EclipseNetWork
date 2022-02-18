import style from './Card.module.css';
import classNames from "classnames";

const Card = ({children, cardStyle}) => {
  return(
      <div className={classNames(style.inner, style[cardStyle])}>
          <div className={style.wrap}>
              {children}
          </div>
      </div>
  )
}

export default Card