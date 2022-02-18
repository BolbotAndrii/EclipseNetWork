import classNames from "classnames";
import style from './Text.module.css';

const Text = ({children, textStyle}) => {

    return (
        <div className={classNames(style.title, style[textStyle])}>
                {children}
        </div>
    )
}

export default Text