import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">TEM</span>
                        <span className="logo-2">DE</span>
                        <span className="logo-3">TUDO</span>
                    </Link>
                </div>
                <div className="navi">
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/">Produtos</Link>
                                </li>
                                <li>
                                    <Link to="/vendas">Vendas</Link>
                                </li>
                                <li>
                                    <button className="button" onClick={handleLogout}>Sair</button>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/">Loja</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Login</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </HeaderArea>
    );
}

export default Header;