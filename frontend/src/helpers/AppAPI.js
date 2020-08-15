import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://localhost/temdetudo/backend/api';

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
/*
const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    console.log(body);
    let form_data = new FormData();
    for ( let key in body ) {
        form_data.append(key, body[key]);
    }
    console.log(form_data);

    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        data: form_data
    });
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}
*/

/*
const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}
*/

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
        //alert(json.error);
        window.location.href = '/';
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

    getVendas: async () => {
        const json = await apiFetchGet(
            '/lista_vendas.php'
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

    getVendaID: async (id) => {
        const json = await apiFetchGet(
            '/venda.php?id='+id,
            true // comParam
        );
        return json;
    },

    gravavenda:async (id, data, id_cliente, id_vendedor) => {
        const json = await apiFetchPost(
            '/grava_venda.php',
            {id, data, id_cliente, id_vendedor}
        );
        return json;
    },

    excluivenda:async (id) => {
        const json = await apiFetchPost(
            '/exclui_venda.php',
            {id}
        );
        return json;
    },

    

};

export default () => AppAPI;