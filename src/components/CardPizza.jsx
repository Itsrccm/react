import '../index.css'


function CardPizza({name, price,ingredients,img, key,description}){


    return (
        <section>
            <img src={img} />
            <div key={key} className='container-title'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className='container-texto'>
                <h3>{ingredients.map((ingrediente) => (
                   
                    <li>{ingrediente}</li>

                ))}</h3>
           
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