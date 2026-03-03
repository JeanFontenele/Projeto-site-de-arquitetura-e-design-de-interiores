import { Link } from 'react-router-dom'
import React, {useState, useRef, useEffect} from 'react'  
import logo from '../assets/images/logo.png'

function Header({onClickMenu}){

    return(

        <div>
            <header>
                <div className="layer">
                    <div className="container">
                        <br /><br /><br />
                        <div className="logo">
                            <img src={logo} alt=""/>
                            <h2>Escritório <br/>Casa Nuvem N</h2>
                        </div>
                        <nav>
                            <ul>
                                <li><Link onClick={onClickMenu} className='menu-option' to="/">Quem somos?</Link></li>
                                <li><Link className='menu-option' to="#">Nossos projetos</Link></li>
                                <li><Link className='menu-option' to="/contato">Contato</Link></li>
                            </ul>
                        </nav>

                        <div className='texto-header1'>
                            <h2 id='title-construindo'>Transformando Casas de <br/>sonhos em realidade.</h2>
                        </div>{/* texto-header1 */}
                        <div className="clear"></div>
                    </div>{/* container */}
                </div>{/* layer */}
            </header>
        </div>

    )

}

export default Header