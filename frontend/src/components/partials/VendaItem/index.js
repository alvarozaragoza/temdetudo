import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    let dadosCliente = '';
    dadosCliente = `${props.data.endereco} :: ${props.data.telefone}`;

    let valor = '';
    valor = `${props.data.total_vendido}`;
    valor = valor.replace(".",",");
    valor = `R$ ${valor}`;
    
    return (
        <Item className="vendaitem">
            <Link to={`/venda/${props.data.id}`}> 
                <div className="itemData">{props.data.data}</div>
                <div className="itemNomeCliente">{props.data.nome_cliente}</div>
                <div className="itemDadosCliente">{dadosCliente}</div>
                <div className="itemVendedor">{props.data.nome_vendedor}</div>
                <div className="itemValor">{valor}</div>
            </Link>
        </Item>
    )
}