import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUp } from './app/slices/authSlice'
import InputField from './components/InputField'


export default function Signup() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        uid: 'test',
        mobileNumber: '',
        profile: '',
        country: ''
    })
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const onChangeHandler = (event) => {
        event.preventDefault()
        const { name, value } = event.target;
        setUserData((prevState) => ({ ...prevState, [name]: value }))
    }
    const signUpHandle = (event) => {
        //        dispatch(signUp(userData))
        event.preventDefault()
        console.log("submit");
        //signUpHandler("smit@mailinator.com", "123456")
    }
    return (
        <section className='py-5'>
            <div className='container'>
                <form>
                    <div className='row'>
                        <div className='col-md-12 text-last-center '>
                            <InputField
                                type={'text'}
                                placeHolder={'name'}
                                value={userData.name}
                                name={'name'}
                                onChangeHandler={onChangeHandler}
                            />
                            <InputField
                                type={'email'}
                                placeHolder={'email'}
                                value={userData.email}
                                name={'email'}
                                onChangeHandler={onChangeHandler}
                            />
                            {/* <InputField
                                type={'password'}
                                placeHolder={'password'}
                                value={userData.password}
                                name={'password'}
                                onChangeHandler={onChangeHandler}
                            /> */}
                            <InputField
                                type={'text'}
                                placeHolder={'mobile number'}
                                value={userData.mobileNumber}
                                name={'mobileNumber'}
                                onChangeHandler={onChangeHandler}
                            />
                            <InputField
                                type={'file'}
                                placeHolder={'Profile'}
                                value={userData.profile}
                                name={'profile'}
                                onChangeHandler={onChangeHandler}
                            />
                            <InputField
                                type={'text'}
                                placeHolder={'country'}
                                value={userData.country}
                                name={'country'}
                                onChangeHandler={onChangeHandler}
                            />
                        </div>
                    </div>
                    <div className='col-md-12 mt-3 text-center '>
                        <button onClick={signUpHandle} className="btn btn-primary">Signup</button>
                        <br /><Link to={'/login'}>login</Link>
                    </div>
                </form>
            </div >
        </section >
    )
}