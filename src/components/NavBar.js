import logo from '../multimedia/images/IDS-LOGO.png';
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import Contexts from '../Context/Contexts'
import {useContext} from "react"




function NavBar () {

    

  

    const context = useContext(Contexts.userContext)
    
    return (
        <div>          
            <nav className="navbarStandard navBar navbar-expand-lg">
                <NavLink to={'/'}>    
                    <img src={logo} className="logo" alt="logo" />
                </NavLink>

                <div className="container-fluid">    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">       
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas EVA
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA/dama`}>Dama</NavLink> </a></li>                      
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas Caucho 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/Caucho/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/Caucho/dama`}>Dama</NavLink> </a></li>                    
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas EVA-Caucho 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA-Caucho/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA-Caucho/dama`}>Dama</NavLink> </a></li>                     
                                </ul>
                            </li>
                            
                        </ul>
                        
                        <div className="NavBarName">                          
                            {context.user.nombre?<div><p>??Hola {context.user.nombre}!</p></div>:<NavLink to={`/login`} ><button className="btn btn-Primary">LogIn</button></NavLink>}
                        </div>      
                        
                            
                        
                        <NavLink to="/cart"><CartWidget /></NavLink>
                       
                    
                    </div>
                </div>
            </nav>
            <nav class="navbar burger ">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src={logo} className="logo" alt="logo" /> 
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">       
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas EVA
                                    </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA/dama`}>Dama</NavLink> </a></li>                        
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas Caucho 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/Caucho/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/Caucho/dama`}>Dama</NavLink> </a></li>                         
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Suelas EVA-Caucho 
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA-Caucho/hombre`}>Hombre</NavLink> </a></li>
                                    <li><a class="dropdown-item"><NavLink to={`/category/EVA-Caucho/dama`}>Dama</NavLink> </a></li>                       
                                </ul>
                            </li>
                            
                        </ul>
                        <div className="NavBarName">                          
                            {context.user.nombre?<div><p>??Hola {context.user.nombre}!</p></div>:<NavLink to={`/login`} ><button className="btn btn-Primary">LogIn</button></NavLink>}
                        </div>  
                     
                        
                    </div>
                    
                     
                   

                                                
                    
                    <CartWidget/>
                    
                </div>
            </nav>                    
        </div>
        
 
    )    
};

export default NavBar;

