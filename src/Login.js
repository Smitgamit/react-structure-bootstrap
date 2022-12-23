import React, { useState } from 'react'
import InputField from './components/InputField'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandle = (event) => {
        event.preventDefault()

    }
    return (
        <section className='py-5'>
            <div className='container'>
                <form>
                    <div className='row justify-content-center' >
                        <div className='col-md-12 w-50'>
                            <InputField
                                type={'email'}
                                placeHolder={'email'}
                                value={email}
                                name={'email'}
                                onChangeHandler={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                type={'password'}
                                placeHolder={'password'}
                                value={password}
                                name={'password'}
                                onChangeHandler={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='col-md-12 mt-3 text-center '>
                        <button type='submit' onClick={loginHandle} className="btn btn-primary">Login </button>
                    </div>
                </form>
            </div>
        </section>
    )
}