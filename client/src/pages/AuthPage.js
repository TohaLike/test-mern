import React, { useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    // The spread operator unfolds the array, with which we work
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
            message(data.message)
        } catch(e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            console.log('Data', data)
            message(data.message)
        } catch(e) {}
    }

    return (
    <div className="row">
        <div className="col s6 offset-s3">
            <h1>Тестовый сервер</h1>
            <div className="card blue darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                    <div className="input-field">
                        <input 
                        placeholder="Введите email" 
                        id="email" 
                        type="text" 
                        name="email" 
                        className="yellow-input" 
                        onChange={changeHandler}
                        />
                        <label htmlFor="email" className="active">Email</label>
                    </div>

                    <div className="input-field">
                        <input 
                        placeholder="Введите password" 
                        id="password" 
                        type="password" 
                        name="password" 
                        className="yellow-input" 
                        onChange={changeHandler}
                        />
                        <label htmlFor="password" className="active">Password</label>
                    </div>
                </div>
                
                <div className="card-action">
                    <button 
                    className="btn yellow darken-4" 
                    style={{marginRight: 10}}
                    onClick={loginHandler}
                    disabled={loading}
                    >
                        Войти
                    </button>
                    <button 
                    className="btn grey lighten-1 black-text"
                    onClick={registerHandler}
                    disabled={loading}
                    >
                        Регистрация
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

