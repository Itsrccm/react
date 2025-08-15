import Header from './Header'
import '../index.css'
import CardPizza from './CardPizza'


function Home(){
    return(
        <section className=''>
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
            
         
        </section>

    )
}

export default Home