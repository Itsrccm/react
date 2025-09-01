import '../index.css'  
import { useState } from 'react'

function Login(){
    const [password, setPassword]=useState('')
    const usuario = "admin"
    const clave = "123456"

const [email, setEmail] = useState('')

function entrar (e){
    e.preventDefault()
    if (!email || !password) {
        alert('Debes llenar todos tus datos')
    }
    else if (email === usuario || password === clave){
        alert('has ingresado a la pagina :D')
    }
    else{
        alert('Datos incorrectos')
    }



}

    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form  onSubmit={entrar} action="submit">
                <label 
                htmlFor="email">Email:</label>
                <input 
                type="text" 
                placeholder='Email' 
                id='email' 
                value={email}
                onChange={(e) =>{setEmail(e.target.value)}}
                />
                <label htmlFor="contrasena"> Contrasena:</label>
                <input 
                type="text"
                placeholder='contrasena' 
                id='contrasena' 
                value={password}
                onChange={(e) =>{setPassword(e.target.value)}}
                

                />
                <button  className='submit' >Register</button>
            </form>
        </div>)
}

export default Login