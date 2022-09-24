import logo from '../multimedia/images/IDS-LOGO.png';
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <div>          
            <nav className="navbar navBar navbar-expand-lg">
                <div>    
                    <img src={logo} className="logo" alt="logo" />
                </div>

                <div className="container-fluid">    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">       
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Suelas EVA
                            </a>
                            <ul className="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Hombre</a></li>
                                <li><a class="dropdown-item" href="#">Dama</a></li>                      
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Suelas Caucho 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Hombre</a></li>
                                <li><a class="dropdown-item" href="#">Dama</a></li>                      
                            </ul>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Suelas EVA-Caucho 
                            </a>
                            <ul className="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Hombre</a></li>
                                <li><a class="dropdown-item" href="#">Dama</a></li>                      
                            </ul>
                            </li>
                            
                        </ul>
                        <CartWidget/>
                       
                    
                    </div>
                </div>
            </nav>
           

            
        </div>
        
 
    )    
};

export default NavBar;

