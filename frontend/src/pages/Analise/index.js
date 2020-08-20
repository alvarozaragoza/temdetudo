import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

import { SearchArea, PageArea, VendasCabec } from './styled';
import useApi from '../../helpers/AppAPI';
import { isLogged } from '../../helpers/AuthHandler';

import { PageContainer } from "../../components/MainComponents";
//import VendaCustoItem from '../../components/partials/VendaCustoItem'

const Page = () => {
    let logged = isLogged();
    if(!logged) {
        window.location.href = '/';
    }

    const api = useApi();

    let cookieDtIni = Cookies.get('dtIni');
    if(!cookieDtIni) {
        window.location.href = '/';
    }

    let cookieDtFim = Cookies.get('dtFim');
    if(!cookieDtFim) {
        window.location.href = '/';
    }

    // datas no formato BRASIL
    let d = '';
    d = cookieDtIni;
    let dtIniBr = d.substr(8,2)+"/"+d.substr(5,2)+"/"+d.substr(0,4);
    d = cookieDtFim;
    let dtFimBr = d.substr(8,2)+"/"+d.substr(5,2)+"/"+d.substr(0,4);
    
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

    //calcula totais
    let totv = 0;
    let totc = 0;
    let itev = 0;
    vendas.map((i,k)=>{
        if(i.total_vendido) {
            totv = totv + parseFloat(i.total_vendido);
        }
        if(i.total_custo) {
            totc = totc + parseFloat(i.total_custo);
        }
        itev = itev + 1;
    });

    //lucro
    let lucro = totv - totc;
    let margem = lucro / totv * 100;
 
    totv = totv.toFixed(2).toString();
    totv = totv.replace(".",",");
    
    totc = totc.toFixed(2).toString();
    totc = totc.replace(".",",");
    
    lucro = lucro.toFixed(2).toString();
    lucro = lucro.replace(".",",");
    
    margem = margem.toFixed(2).toString();
    margem = margem.replace(".",",");

    //cria array com totais de clientes 
    const clientes = [
        ...vendas.reduce(
          (map, item) => {
            const { nome_cliente: key, total_vendido } = item;
            const prev = map.get(key);
            
            if(total_vendido) {
                if(prev) {
                prev.total_vendido = parseFloat( prev.total_vendido ) + parseFloat( total_vendido)
                } else {
                map.set(key, Object.assign({}, item))
                }
            }
            
            return map
          },
          new Map()
        ).values()
      ]

    //cria array com totais de vendedores
    const vendedores = [
        ...vendas.reduce(
          (map, item) => {
            const { nome_vendedor: key, total_vendido } = item;
            const prev = map.get(key);
            
            if(total_vendido) {
                if(prev) {
                prev.total_vendido = parseFloat( prev.total_vendido ) + parseFloat( total_vendido)
                } else {
                map.set(key, Object.assign({}, item))
                }
            }
            
            return map
          },
          new Map()
        ).values()
      ]

    clientes.sort( (a,b) => parseFloat(b.total_vendido) - parseFloat(a.total_vendido) );
    vendedores.sort( (a,b) => parseFloat(b.total_vendido) - parseFloat(a.total_vendido) );

    const formataValor = (v) => {
        let vFloat = parseFloat(v);
        let valor = vFloat.toFixed(2).toString();
        valor = valor.replace(".",",");
        valor = "R$ "+valor;

        return valor;
    }

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="titulo--analise">Análise das vendas no período de</div>
                    <div className="titulo--analise"><strong>{dtIniBr}</strong> a <strong>{dtFimBr}</strong></div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="resumo">
                        <div className="totv-1">Total das Vendas: </div><div className="totv-2">R$ {totv}</div>
                        <div className="totc-1">Custo dos Produtos: </div><div className="totc-2">R$ {totc}</div>
                        <div className="lucr-1">Lucro Bruto: </div><div className="lucr-2">R$ {lucro}</div>
                        <div className="mark-1">Margem de Lucro: </div><div className="mark-2">{margem} %</div>
                        <div className="mark-1">Número de Vendas: </div><div className="mark-2">{itev} no período</div>
                    </div>
                    <div className="totais">
                    <div className="block-cli">
                            <div className="titulo-block">Top 10 Clientes</div>
                            <div className="linhas-cli">
                                {clientes.map((i,k)=>
                                    <div key={k} className="line-block">
                                        <div className="cli-1">{i.nome_cliente}</div><div className="cli-2">{formataValor(i.total_vendido)}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="block-cli">
                            <div className="titulo-block">Top 10 Vendedores</div>
                            <div className="linhas-cli">
                                {vendedores.map((i,k)=>
                                    <div key={k} className="line-block">
                                        <div className="cli-1">{i.nome_vendedor}</div><div className="cli-2">{formataValor(i.total_vendido)}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>   
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;