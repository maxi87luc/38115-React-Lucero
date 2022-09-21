import cartIcon from '../multimedia/images/cartImage.png';

function CartWidget () {
    return (
        <div>
            <a href="#">
                <img src={cartIcon} className="cartIcon" alt="Icono Carrito" />
            </a>
      </div>
    )
}

export default CartWidget;



 