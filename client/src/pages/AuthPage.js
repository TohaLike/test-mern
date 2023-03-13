import React from 'react'

export const AuthPage = () => {
    return (
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>Тестовый сервер</h1>
            <div class="card blue darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Авторизация</span>
                    <p></p>
                </div>
                <div class="card-action">
                    <button className="btn yellow darken-4">Войти</button>
                    <button className="btn grey lighten-1 black-text">Регистрация</button>
                </div>
            </div>
        </div>
    </div>
    )
}

