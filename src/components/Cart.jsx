import '../cart.css'
import {Pizza} from '../assets/data'
import { useState, useEffect } from 'react'
import CardPizza from './CardPizza'



function Cart(){
    

    const [cart, setCart] = useState(
        Pizza.map((pizza) =>({...pizza,cantidad:1}))
    )
    
    const [total, setTotal]= useState()
    
    
useEffect(() => {
  const nuevoTotal = cart.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  setTotal(nuevoTotal);
}, [cart]);




   function Sumar(id) {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item

  
    )
    
  );
}

function Restar(id) {
  setCart((prevCart) =>{
    const updateCart= prevCart.map((item) =>




      item.id === id && item.cantidad >= 1
        ? { ...item, cantidad: item.cantidad - 1 }
        : item

        
    );
    return updateCart.filter((item) => item.cantidad >0)


});
}




    return (
        <>
<h1>Detalles del pedido</h1>
{cart.map((compra) =>(
    
<div className='container-cart' key={compra.id}>
        
        <div className='elments-card'>

            <img src={compra.img} className='img-card' alt="" />
            <p>{compra.name}</p>
            <p>{compra.price*compra.cantidad}</p>
            <div className='botones'> 
                <button onClick={()=> Restar(compra.id)}>-</button>
                <p>{compra.cantidad}</p>
            <button onClick={()=> Sumar(compra.id)}>+</button>
            </div>
           
            </div>



        </div>
))}


        
        <div className='container-pagar'>
        <h3>Total: <span>{total}$</span></h3>
        <button>Pagar</button>
        </div>

        
</>
    )

}


export default Cart