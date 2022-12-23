import React from 'react'

export default function InputField({ type, value, placeHolder, onChangeHandler, name }) {
    return (

        <div className="form-group mt-4">
            <input
                type={type}
                value={value}
                name={name}
                className="form-control"
                id={name}
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
            {/* </div> */}
            {/* <div
                className={
                    checkValidation.isInvalid
                        ? 'animated fadeIn'
                        : ''
                }
                >
                <div className="error">
                    {checkValidation.message}
                </div>
            </div> */}
        </div>
    )
}