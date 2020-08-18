import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://ibm-temdetudo.16mb.com/backend/api';

const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint, comParam = false, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }

    let qsOperator = comParam ? "&" : "?"; 
    //let strFetch = BASEAPI+endpoint+qsOperator+qs.stringify(body);
    //alert( strFetch );

    const res = await fetch(`${BASEAPI+endpoint}${qsOperator}${qs.stringify(body)}`);
    const json = await res.json();

    if(json.error) {
        alert(json.error);
        //window.location.href = '/';
        return;
    }

   return json;
}

const AppAPI = {

    login:async (email, password) => {
        const json = await apiFetchPost(
            '/login.php',
            {email, password}
        );
        return json;
    },

    getProdutos: async () => {
        const json = await apiFetchGet(
            '/lista_produtos.php'
        );
        return json;
    },

    getProdID: async (id) => {
        const json = await apiFetchGet(
            '/produto.php?id='+id,
            true // comParam
        );
        return json;
    },

    gravaproduto:async (id, nome, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja) => {
        const json = await apiFetchPost(
            '/grava_produto.php',
            {id, nome, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja}
        );
        return json;
    },

    excluiproduto:async (id, nome) => {
        const json = await apiFetchPost(
            '/exclui_produto.php',
            {id, nome}
        );
        return json;
    },

    getVendas: async (dtini, dtfim) => {
        let dt_ini = dtini.toISOString().slice(0,10);
        let dt_fim = dtfim.toISOString().slice(0,10);
        const json = await apiFetchGet(
            '/lista_vendas.php?dtini='+dt_ini+"&dtfim="+dt_fim,
            true //com param
        );
        return json;
    },

    getClientes: async () => {
        const json = await apiFetchGet(
            '/lista_clientes.php'
        );
        return json;
    },

    getVendedores: async () => {
        const json = await apiFetchGet(
            '/lista_vendedores.php'
        );
        return json;
    },

    getVendasItens: async (id_venda) => {
        const json = await apiFetchGet(
            '/lista_vendas_itens.php?id_venda='+id_venda,
            true // comParam
        );
        return json;
    },

    getVendaID: async (id) => {
        const json = await apiFetchGet(
            '/venda.php?id='+id,
            true // comParam
        );
        return json;
    },

    gravavenda:async (id_venda, data, id_cliente, id_vendedor) => {
        const json = await apiFetchPost(
            '/grava_venda.php',
            {id_venda, data, id_cliente, id_vendedor}
        );
        return json;
    },

    excluivenda:async (id_venda) => {
        const json = await apiFetchPost(
            '/exclui_venda.php',
            {id_venda}
        );
        return json;
    },

    gravacliente:async (nome, telefone, endereco) => {
        const json = await apiFetchPost(
            '/grava_cliente.php',
            {nome, telefone, endereco}
        );
        return json;
    },

    gravavendedor:async (nome) => {
        const json = await apiFetchPost(
            '/grava_vendedor.php',
            {nome}
        );
        return json;
    },
    
    gravaitemvenda:async (id_venda, id_produto, qtde, preco) => {
        const json = await apiFetchPost(
            '/grava_item_venda.php',
            {id_venda, id_produto, qtde, preco}
        );
        return json;
    },

    excluiitemvenda:async (id) => {
        const json = await apiFetchPost(
            '/exclui_item_venda.php',
            {id}
        );
        return json;
    }
    
};

export default () => AppAPI;