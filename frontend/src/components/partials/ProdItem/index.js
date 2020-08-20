import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';
import { isLogged } from '../../../helpers/AuthHandler';

export default (props) => {
    let logged = isLogged();
    
    let preco = '';
    preco = `${props.data.preco_venda}`;
    preco = preco.replace(".",",");
    preco = `R$ ${preco}`;

    let qtde = '';
    qtde = `${props.data.qtde}`;
    
    return (
        <Item className="proditem">
            {logged &&
                <Link to={`/prod/${props.data.id}`}> 
                    <div className="itemClass">{props.data.classificacao}</div>
                    <div className="itemNome">{props.data.nome}</div>
                    <div className="itemDesc">{props.data.descricao}</div>
                    <div className="itemPreco">{preco}</div>
                </Link>
            }
            {!logged &&
                <Link to="/"> 
                    <div className="itemClass">{props.data.classificacao}</div>
                    <div className="itemNome">{props.data.nome}</div>
                    <div className="itemDesc">{props.data.descricao}</div>
                    <div className="itemPreco2">{preco}</div>
                </Link>
            }
        </Item>
    )
}