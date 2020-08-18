import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    let dadosCliente = '';
    dadosCliente = `${props.data.endereco} :: ${props.data.telefone}`;

    let valor = '';
    valor = props.data.total_vendido;
    valor = valor!=null ? valor : "0.00";
    valor = valor.replace(".",",");
    valor = `R$ ${valor}`;

    let d = props.data.data;
    let dataBr = d.substr(8,2)+"/"+d.substr(5,2)+"/"+d.substr(0,4);
    
    return (
        <Item className="vendaitem">
            <Link to={`/venda/${props.data.id}`}> 
                <div className="itemData">{dataBr}</div>
                <div className="itemNomeCliente">{props.data.nome_cliente}</div>
                <div className="itemDadosCliente">{dadosCliente}</div>
                <div className="itemVendedor">{props.data.nome_vendedor}</div>
                <div className="itemValor">{valor}</div>
            </Link>
        </Item>
    )
}