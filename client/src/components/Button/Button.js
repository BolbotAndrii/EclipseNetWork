import classNames from "classnames";
import style from './Button.module.css'

const Button = ({text, styleBtn, typeBtn, modal, children}) => {
    return (
        <button
            onClick={modal}
            type={typeBtn}
            className={classNames(style.button, style[styleBtn])}
        >
            {text}
            {children}
        </button>
    )
}
export default Button