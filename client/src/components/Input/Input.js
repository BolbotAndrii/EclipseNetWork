import classNames from "classnames";
import style from "./Input.module.css";

const Input = ({
                   type,
                   error,
                   inputClassNames,
                   errorMessage,
                   mainColor,
                   label,
                   id,
                   name,
                   valueHandler,
                   keyNum,
                   ...props
               }) => {
    return (
        <>
            <div className={style.inner}>
                <input autoComplete="off"
                    key={keyNum}
                    onChange={valueHandler}
                    id={id}
                    className={classNames(
                        style.input,
                        style[mainColor],
                        inputClassNames
                    )}
                    name={name}
                    type={type}
                    {...props}
                />
                <label htmlFor={id} className={classNames(style.label, style[mainColor])}>{label}</label>
            </div>
        </>
    );
};

export default Input;
