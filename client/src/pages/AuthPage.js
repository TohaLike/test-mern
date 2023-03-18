import React, { useState } from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setForm({...form})
    }

    return (
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Тестовый сервер</h1>
            <div class="card blue darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Авторизация</span>
                </div>

                <div class="input-field">
                    <input placeholder="Введите email" id="email" type="text" name="email" className="yellow-input"></input>
                    <label htmlFor="email" class="active">Email</label>
                </div>

                <div class="input-field">
                    <input placeholder="Введите password" id="password" type="text" name="password" className="yellow-input"></input>
                    <label htmlFor="password" class="active">Password</label>
                </div>
                
                <div class="card-action">
                    <button className="btn yellow darken-4" style={{marginRight: 10}}>Войти</button>
                    <button className="btn grey lighten-1 black-text">Регистрация</button>
                </div>
            </div>
        </div>
    </div>
    )
}

