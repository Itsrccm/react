import { useEffect, useState } from "react"
import '../pizza.css'



function Pizza () {

    const [pizza, setPizza] = useState([])



    

    const BuscandoPizza = async () =>{
        const res = await fetch('http://localhost:5000/api/pizzas/p001')
        const data = await res.json()
        setPizza(data);
    }





    useEffect (()=>{
        BuscandoPizza()
    }, [])

    return (
        <>

        <div className="container-pizza" key={pizza.key}>
            <h1>{pizza.name?.toUpperCase()}</h1>
            
            <p>
  {
  pizza.ingredients?.map((ing,index) => (
    <span key={index}>
        {ing.trim()}
        {index < pizza.ingredients.length - 1 ? '-' :''}
    </span>
  ))
  }
</p>
            
            <h3><span>{pizza.price}$</span></h3>
            <img src={pizza.img} alt="" />
            <p className="desc">{pizza.desc}</p>

            <button>Agregar Pizza</button>

        </div>
        
        </>



    )
}

export default Pizza