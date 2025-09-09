import Header from './Header'
import '../index.css'
import CardPizza from './CardPizza'
/* import {Pizza} from '../assets/data' */
import { useEffect, useState } from 'react'


function Home(){


    const [pizzas, setPizzas]= useState([]);


    const BuscandoPizzas = async ()=> {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
        
    }

    useEffect(() => {
        BuscandoPizzas()
    },[])


   

    



    return(


<section>
     <Header />
        <div className='container'>
            
            {pizzas.map((pizza) => {
                return (
                <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                key={pizza.id}
                description={pizza.description}
                


                
                />
                )
            })}

        </div>
        </section>

    )

       
        

    
}

export default Home