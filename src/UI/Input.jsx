
import React, { useState } from "react";
import classes from '../styles/BaseInput.module.scss';
// import Select, { StylesConfig } from 'react-select';

const InputWithValidate = (props) => {
    const [isValid, setValid] = useState(true)

    const validation = props.validation
    const validator = validation.validator
    const vClassName = validation.validClassName
    const invClassName = validation.invalidClassName

    const checkInputData = (e) => {
        e.preventDefault()
        setValid(validator(e.target.value))
    }

    return (
        <input className={isValid ? vClassName : invClassName} onChange={e => checkInputData(e)} {...props.default}/>
    );
};

// const WideInput = (props) => {

//     return (
//         <textarea className={classes.WideInput} {...props}/>
//     );
// };

// const SelectInput = (props) => {
//     const colourStyles = {
//         control: (styles) => ({
//           ...styles,
//           backgroundColor: "#F2F4F9",
//           minHeight: "18px",
//           height: "2.2em",
//           borderRadius: "0.75em"
//         }),

//         input: (styles) => ({ ...styles })
//         // placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
//         // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
//     };

//     return (
//         <Select
//             styles={colourStyles}
//             {...props} />
//     );
// };

export default InputWithValidate