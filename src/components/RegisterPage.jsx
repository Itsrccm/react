import '../index.css'  
import { useState } from 'react'


function RegisterPage() {
const [password, setPassword]=useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [email, setEmail] = useState('')


function subir(e){
    e.preventDefault()

    if (!email || !password || !confirmPassword ){
        alert('llenar todos los datos')
        return
    }
    else if (password === confirmPassword){
        alert('Felicidades te has registrado correctamente')
    }
    else if (password !== confirmPassword){
        alert('Las contrasenas deben coincidir')
    }


}




    return (
        <div className='form-container'>
            <h1>Register Form</h1>
            <form  onSubmit={subir} action="submit">
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
                minLength={6}

                />
                <label htmlFor="confirmar">Confirmar contrasena:</label>
                <input 
                type="text"
                placeholder='Confirmar contrasena' 
                id='confirmar' 
                value={confirmPassword}
                onChange={(e) =>{setConfirmPassword(e.target.value)}}
                minLength={6}
                />
                <button  className='submit' >Register</button>
            </form>
        </div>
    )

}
export default RegisterPage