
import Carrousel from './Carrousel';








function ItemDetail ({modelo, stock}) {

    const talles = modelo.talles
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    const urlImage1 = suelasPNG(`./${ modelo.id }1.png`)
    const urlImage2 = suelasPNG(`./${ modelo.id }2.png`)

    return (
        <div>
             <Carrousel url1={urlImage1} url2={urlImage2} id={modelo.id}/>
            <div class="card-body">
                <h5 className="card-title">{modelo.id}</h5>  
                <p>                  
                   Material: {modelo.material}
                </p>
                <p>Curva: {modelo.genero} </p>

                <p>
                    
                </p>
                



                
                             
                <a href="#" class="btn btn-primary">Agregar a Carrito</a>
            </div>
        </div>
    )
}

export default ItemDetail;