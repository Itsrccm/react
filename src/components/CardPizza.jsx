import '../index.css'


function CardPizza({name, price,ingredients,img}){


    return (
        <section>
            <img src={img} />
            <div className='container-title'>
                <h3>{name}</h3>
            </div>
            <div className='container-texto'>
                <h3>{ingredients}</h3>
           
                <span>PRICE:{price}</span>
            </div>
            <div className='container-buttons'>
                <button>Ver Mas</button>
                <button>Anadir</button>
            </div>
        </section>

    )
}

export default CardPizza