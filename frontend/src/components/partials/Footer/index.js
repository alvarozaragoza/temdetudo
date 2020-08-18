import React from 'react';
import { FooterArea } from './styled';
import { isLogged } from '../../../helpers/AuthHandler';

const Footer = () => {
    let logged = isLogged();
    return(
        <FooterArea>
            {logged &&
                <div>
                    <a href="https://denzar.com.br" target="_blank">criado por <span> </span> <strong>Alvaro Zaragoza</strong></a>
                </div>
            }
            {!logged &&
                <div>
                    <a href="https://wa.me/5511973708569" target="_blank"><strong>Loja TEMdeTudo</strong></a>
                    <br/>
                    <a href="https://wa.me/5511973708569" target="_blank">...clique aqui e faça seu pedido por Whatsapp...</a>
                </div>
            }
        </FooterArea>
    );
}

export default Footer;