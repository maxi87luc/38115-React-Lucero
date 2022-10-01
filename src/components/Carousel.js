function Carousel ({id, url1, url2}) {

    const dataBsTarget = "#"+id;

   
    return (
        <div id={id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div class="carousel-item active">
                    <img src={url1} class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={url2} className="d-block w-100" alt="..."/>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={dataBsTarget} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={dataBsTarget} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
        
    )
}

export default Carousel
