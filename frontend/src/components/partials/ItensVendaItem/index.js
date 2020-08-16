import React from 'react';
import { Item } from './styled';

import useApi from '../../../helpers/AppAPI';

export default (props) => {
    let valor = "";
    valor = props.data.preco_venda;
    valor = valor!=null ? valor : "0.00";
    valor = valor.replace(".",",");
    valor = `R$ ${valor}`;

    let total = "";
    total = props.data.qtde * props.data.preco_venda;
    total = total!=null ? total.toFixed(2).toString() : "0.00";
    total = total.replace(".",",");
    total = `R$ ${total}`;

    let id = props.data.id;
    let id_venda = props.data.id_venda;

    const api = useApi();

    //exclusão da venda
    const excluirItemVenda = async (id, id_venda) => {
        if(window.confirm("Confirma a exclusão desse item da venda?")) {
            let id = props.data.id;
            let id_venda = props.data.id_venda;

            //alert (id+" "+id_venda);
            // exclui item da venda
            const json = await api.excluiitemvenda(id);

            if(json.error) {
                alert(json.error);
            } else {
                window.location.href = '/venda/'+id_venda;
            }
        }
    }

    return (
        <Item className="itemvenda--item">
            <div className="itemProduto">{props.data.qtde}<span> x </span>{props.data.nome_produto}</div>
            <div className="itemPreco">({valor})</div>
            <div className="itemTotal">{total}</div>
            <button onClick={()=>{excluirItemVenda({id},{id_venda})}}> Excluir </button> 
        </Item>
    )
}