/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', values)
            .then((res) => {
                if (res.data.Status === "success") {
                    navigate('/')
                } else {
                    alert(res.data.Message)
                }
            })
            .catch((err) => {
                console.log(err);
            }
            );
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="email" placeholder='Introduce your email' className='form-control' onChange={e => setValues({ ...values, email: e.target.value })} />
                <br /><br />
                <input type="password" name="password" id="password" placeholder='Introduce your password' onChange={e => setValues({ ...values, password: e.target.value })} />
                <br /><br />
                <button type="submit"  >Iniciar Sesion </button>
            </form>
        </div>
    )
}
