import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Cookies from 'js-cookie';

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

    let dt6dias = new Date();
    let dtAtual = new Date();
    dt6dias.setDate(dt6dias.getDate() - 6);

    let cookieDtIni = Cookies.get('dtIni');
    if(!cookieDtIni) {
        let dt_ini = dt6dias.toISOString().slice(0,10);
        Cookies.set('dtIni', dt_ini, { expires: 999 });
        cookieDtIni = dt_ini;
    }

    let cookieDtFim = Cookies.get('dtFim');
    if(!cookieDtFim) {
        let dt_fim = dtAtual.toISOString().slice(0,10);
        Cookies.set('dtFim', dt_fim, { expires: 999 });
        cookieDtFim = dt_fim;
    }
    
    const [vendas, setVendas] = useState([]);
    const [dtIni, setDtIni] = useState(new Date(cookieDtIni+"T03:00:00Z"));
    const [dtFim, setDtFim] = useState(new Date(cookieDtFim+"T03:00:00Z"));

    useEffect(()=>{
        const getVendas = async () => {
            const vendas = await api.getVendas(dtIni, dtFim);
            setVendas(vendas.result);
        }
        getVendas();
    },[]);

    const atuDtIni = (dt) => {
        setDtIni(dt);
        let dt_ini = dt.toISOString().slice(0,10);
        Cookies.set('dtIni', dt_ini, { expires: 999 });
    }

    const atuDtFim = (dt) => {
        setDtFim(dt);
        let dt_fim = dt.toISOString().slice(0,10);
        Cookies.set('dtFim', dt_fim, { expires: 999 });
    }

    const handleFiltrar = () => {
        if( dtIni > dtFim) {
            alert("Período inválido");
        } 
        return;
    }

    const handle7dias = () => {
        atuDtIni(dt6dias);
        atuDtFim(new Date());
        return;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getVendas = async () => {
            const vendas = await api.getVendas(dtIni, dtFim);
            setVendas(vendas.result);
        }
        getVendas();
    }
    
    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form onSubmit={handleSubmit}>
                            <div className="filtros">
                                <div className="textFiltro">Período de</div>
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={dtIni}
                                    onChange={date => atuDtIni(date)}
                                />
                                <div className="textFiltro">a</div>
                                <DatePicker
                                    dateFormat="dd/MM/yyyy"
                                    selected={dtFim}
                                    onChange={date => atuDtFim(date)}
                                />
                            </div>
                            <div className="btnsFiltros">
                                <button className="btnCinza" onClick={()=>handleFiltrar()}>Filtrar no Período</button>
                                <button onClick={()=>handle7dias()}>Últimos 7 Dias</button>
                            </div>
                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="titulo">
                        <div><h2>Vendas</h2></div>
                        <div className="btnsVendas">
                            <div><Link to="venda/novo">Incluir nova Venda</Link></div>
                            <div><Link to="/analise" className="btnAnalise">Análise das Vendas</Link></div>
                        </div>
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
                    {vendas.length>0 &&
                        <div className="rodape">[ clique na venda para editar ou excluir ]</div>
                    }
                    {vendas.length==0 &&
                        <div className="rodape">[ Não existem vendas nesse período ]</div>
                    }
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;