import Header from './Header'
import '../index.css'
import CardPizza from './CardPizza'
import {Pizza} from '../assets/data'
import { useState } from 'react'


function Home(){


    const [pizzas, setPizzas]= useState(Pizza);
   

    



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

       
        {/* <section className=''>
            <Header />
            <div className='container'>
                <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img="https://marketplace.canva.com/zmHuM/MAF5TTzmHuM/1/tl/canva-veggie-pizza-MAF5TTzmHuM.png"
 />

            <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola",           "parmesano", "provolone"]}
            img="https://marketplace.canva.com/zmHuM/MAF5TTzmHuM/1/tl/canva-veggie-pizza-MAF5TTzmHuM.png"
            />

            <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img="https://marketplace.canva.com/zmHuM/MAF5TTzmHuM/1/tl/canva-veggie-pizza-MAF5TTzmHuM.png"
            />
            </div>
            
         
        </section> */}
        

    
}

export default Home