
import Carrousel from './Carousel';
import ItemCount from './ItemCount';








function ItemDetail ({modelo}) {

    const talles = modelo.talles.filter(talle=>talle!=="")
    const suelasPNG = require.context('../multimedia/images/suelasPNG') 
    const urlImage1 = suelasPNG(`./${ modelo.id }1.png`)
    const urlImage2 = suelasPNG(`./${ modelo.id }2.png`)

    return (
        <div className="row">
            <div className="col-6">
                <Carrousel url1={urlImage1} url2={urlImage2} id={modelo.id}/>
            </div>
            <div class="detail-body col-6 container d-grid">
                
                    <h2 className="row centrar">{modelo.id}</h2>  
                           
                    <p className="row centrar">                  
                    Material: {modelo.material}
                    </p>
                    <p className="row centrar">Curva: {modelo.genero} </p>
                

                    <ul className="tallesList container">            
                        {talles.map((talle)=><li className="row talleList "><p className="col-4 talleItemCount">{talle}</p> <ItemCount stock={10} addOn={1} initial={0}  /></li>)}
                    </ul> 
                                                      
                <a href="#" class="btn btn-primary">Agregar a Carrito</a>
            </div>
        </div>
    )
}

export default ItemDetail;