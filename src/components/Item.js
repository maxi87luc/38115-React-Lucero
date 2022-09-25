


function Item ({id}){

    
    let imageURL 
    
  

    console.log(id)


    return (
        <li className="card col-5" style={{ width: "18rem"}}>
            <img src={imageURL} className="card-img-top" alt=""></img>
            <div class="card-body">
                <h5 className="card-title">{id.id}</h5>  
                <p>                  
                   Material: {id.material}
                </p>
                <p>Curva: {id.genero} </p>
                



                
                             
                <a href="#" class="btn btn-primary">Armar Pedido</a>
            </div>
        </li>
    )
}

export default Item


