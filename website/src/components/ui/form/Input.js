import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement]

    if (!props.isValid && props.shouldValidate) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder}
            ></input>
            break;

        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder}
                rows="7"
            />
            break;

        case ('select'):
            inputElement = (
                <select
                    {...props.elementConfig}
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                    placeholder={props.placeholder} >
                    {props.elementConfig.options.map(option => {
                        return <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>
            )
            break;

        default:
            inputElement = <input
                {...props.elementConfig}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                placeholder={props.placeholder}></input>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}
export default Input;