import React from "react";
import './app-error.css'
import ErrorLogo from './error.svg'

const AppError = () => {
    return (
        <img className='error-image' src={ErrorLogo} alt="React Logo"/>
    )
}
export default AppError