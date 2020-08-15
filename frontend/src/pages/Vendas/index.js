import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea, VendasCabec } from './styled';

import useApi from '../../helpers/AppAPI';
import { isLogged } from '../../helpers/AuthHandler';

import { PageContainer } from "../../components/MainComponents";
import VendaItem from '../../components/partials/VendaItem'

const Page = () => {
    let logged = isLogged();
    if(!logged) {
        window.location.href = '/';
    }

    const api = useApi();
    const [vendas, setVendas] = useState([]);
    
    useEffect(()=>{
        const getVendas = async () => {
            const vendas = await api.getVendas();
            setVendas(vendas.result);
        }
        getVendas();
    },[]);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/">
                            <input type="text" name="q" placeholder="Digite o que procura" />
                            <button onClick={`window.location.href="/"`}>Limpar Filtro</button>
                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="titulo">
                        <div><h2>Vendas</h2></div>
                        {logged &&
                            <div><Link to="venda/novo">Incluir nova Venda</Link></div>
                        }
                    </div>
                    <div className="list">
                        <VendasCabec>
                            <div className="itemData">Data</div>
                            <div className="itemNomeCliente">Cliente</div>
                            <div className="itemDadosCliente">Endereço e Telefone do Cliente</div>
                            <div className="itemVendedor">Vendedor</div>
                            <div className="itemValor">Total da Venda</div>
                        </VendasCabec>
                        {vendas.map((i,k)=>
                            <VendaItem key={k} data={i} />
                        )}
                    </div>
                    {logged &&
                        <div className="rodape">[ clique na venda para editar ou excluir ]</div>
                    }
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;