import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/AppAPI';
import { isLogged } from '../../helpers/AuthHandler';

import { PageContainer, ErrorMessage } from "../../components/MainComponents";

const Page = () => {
    if(!isLogged()) {
        window.location.href = '/';
    }

    const api = useApi();
    const { id } = useParams();

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [marca, setMarca] = useState('');
    const [fornecedor, setFornecedor] = useState('');
    const [classificacao, setClassificacao] = useState('');
    const [preco_custo, setPreco_Custo] = useState('0.00');
    const [preco_venda, setPreco_Venda] = useState('0.00');
    const [qtde_estoque, setQtde_Estoque] = useState('0');
    const [qtde_loja, setQtde_Loja] = useState('0');
    
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    let tituloForm = "Incluir novo produto";
    if(id!=='novo') {  
        tituloForm = "Editar produto";
    }

    // carrega dados do produto
    useEffect(()=>{
        if(id!=='novo') {
            const getProdID = async () => {
                const dados = await api.getProdID(id);
                setNome(dados.result.nome);
                setDescricao(dados.result.descricao);
                setMarca(dados.result.marca);
                setFornecedor(dados.result.fornecedor);
                setClassificacao(dados.result.classificacao);
                setPreco_Custo(dados.result.preco_custo);
                setPreco_Venda(dados.result.preco_venda);
                setQtde_Estoque(dados.result.qtde_estoque);
                setQtde_Loja(dados.result.qtde_loja);
            }
            getProdID();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(nome && descricao) {
            /*validar dados
            setError('...');
            setDisabled(false);
            return;
            */
        }

        // grava produto
        const json = await api.gravaproduto(id, nome, descricao, marca, fornecedor, classificacao, preco_custo, preco_venda, qtde_estoque, qtde_loja);

        if(json.error) {
            setError(json.error);
        } else {
            window.location.href = '/';
        }
        
        setDisabled(false);
    }

    const excluirProduto = async () => {
        if(window.confirm("Confirma a exclusão do produto?")) {
            // exclui produto
            const json = await api.excluiproduto(id, nome);

            if(json.error) {
                setError(json.error);
            } else {
                window.location.href = '/';
            }
        }
    }

    return (
        <PageContainer>
            <PageArea>
                <div className="titulo">
                    <div><h2>{tituloForm}</h2></div>
                    {id !== "novo" &&
                        <div><button onClick={excluirProduto}>Excluir produto</button></div>
                    }
                    <div className="btncinza"><Link to="/">Voltar</Link></div>
                </div>
                
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                <label className="area">
                        <div className="area--title">Nome do Produto</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={disabled}
                                value={nome}
                                onChange={e=>setNome(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                type="text" 
                                disabled={disabled}
                                value={descricao}
                                onChange={e=>setDescricao(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Marca</div>
                        <div className="area--input">
                            <input
                                type="text" 
                                disabled={disabled}
                                value={marca}
                                onChange={e=>setMarca(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Fornecedor</div>
                        <div className="area--input">
                            <input
                                type="text" 
                                disabled={disabled}
                                value={fornecedor}
                                onChange={e=>setFornecedor(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Classificação</div>
                        <div className="area--input">
                            <input
                                type="text" 
                                disabled={disabled}
                                value={classificacao}
                                onChange={e=>setClassificacao(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço de Custo</div>
                        <div className="area--input">
                            <input
                                type="number"
                                min="0" step="0.01"
                                disabled={disabled}
                                value={preco_custo}
                                onChange={e=>setPreco_Custo(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço de Venda</div>
                        <div className="area--input">
                            <input
                                type="number"
                                min="0" step="0.01"
                                disabled={disabled}
                                value={preco_venda}
                                onChange={e=>setPreco_Venda(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Quantidade no Estoque</div>
                        <div className="area--input">
                            <input
                                type="number" 
                                disabled={disabled}
                                value={qtde_estoque}
                                onChange={e=>setQtde_Estoque(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Quantidade na Loja</div>
                        <div className="area--input">
                            <input
                                type="number" 
                                disabled={disabled}
                                value={qtde_loja}
                                onChange={e=>setQtde_Loja(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Gravar</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;