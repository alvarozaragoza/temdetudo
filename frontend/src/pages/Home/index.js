import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SearchArea, PageArea } from './styled';

import useApi from '../../helpers/AppAPI';
import { isLogged } from '../../helpers/AuthHandler';

import { PageContainer } from "../../components/MainComponents";
import ProdItem from '../../components/partials/ProdItem'

const Page = () => {
    let logged = isLogged();

    const api = useApi();

    const [produtos, setProdutos] = useState([]);
    const [produtosAll, setProdutosAll] = useState([]);
    const [filtro, setFiltro] = useState('');
    
    useEffect(()=>{
        const getProdutos = async () => {
            const prods = await api.getProdutos();
            setProdutos(prods.result);
            setProdutosAll(prods.result);
        }
        getProdutos();
    },[]);

    useEffect(()=>{
        let produs = [];
        let concat = "";
        produtosAll.forEach(produto => {
            concat = produto.nome + produto.descricao + produto.classificacao;
            if(concat.toLowerCase().includes(filtro.toLowerCase())) {
                produs.push(produto);
            }
        });
        if(produs==[]) {
            alert("Nenhum produto encontrado.");
        } else {
            setProdutos(produs);
        }
    }, [filtro]);

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/">
                            <input type="text" 
                                placeholder="Digite o que procura" 
                                onChange={e=>setFiltro(e.target.value)}
                            />
                            <button >Limpar Filtro</button>
                        </form>
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <div className="titulo">
                        <div><h2>Produtos</h2></div>
                        {logged &&
                            <div><Link to="prod/novo">Incluir novo produto</Link></div>
                        }
                    </div>
                    <div className="list">
                        {produtos.map((i,k)=>
                            <ProdItem key={k} data={i} />
                        )}
                    </div>
                    
                    {logged &&
                        <div className="rodape">[ clique no produto para editar ou excluir ]</div>
                    }
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;