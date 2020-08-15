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
    const id_venda = id;

    const [data, setData] = useState('');
    const [id_cliente, setIdCliente] = useState('');
    const [nome_cliente, setNomeCliente] = useState('');
    const [endereco_cliente, setEnderecoCliente] = useState('');
    const [telefone_cliente, setTelefoneCliente] = useState('');
    const [id_vendedor, setIdVendedor] = useState('0.00');
    const [nome_vendedor, setNomeVendedor] = useState('0.00');

    const [clientes, setClientes] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [vendas_itens, setVendasItens] = useState([]);

    useEffect(()=>{
        const getClientes = async () => {
            const cList = await api.getClientes();
            setClientes(cList.result);
        }
        getClientes();
    },[]);
    
    useEffect(()=>{
        const getVendedores = async () => {
            const vList = await api.getVendedores();
            setVendedores(vList.result);
        }
        getVendedores();
    },[]);

    /*
    useEffect(()=>{
        const getVendasItens = async () => {
            const viList = await api.getVendasItens(id_venda);
            setVendasItens(viList);
        }
        getVendasItens();
    },[]);
    */

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    let tituloForm = "Incluir nova venda";
    if(id_venda!=='novo') {  
        tituloForm = "Editar venda";
    }

    // carrega dados da venda
    useEffect(()=>{
        if(id_venda!=='novo') {
            const getVendaID = async () => {
                const dados = await api.getVendaID(id_venda);
                setData(dados.result.data);
                setIdCliente(dados.result.id_cliente);
                setIdVendedor(dados.result.id_vendedor);
            }
            getVendaID();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(data && id_cliente>0) {
            /*validar dados
            setError('...');
            setDisabled(false);
            return;
            */
        }

        // grava venda
        const json = await api.gravavenda(id_venda, data, id_cliente, id_vendedor);

        if(json.error) {
            setError(json.error);
        } else {
            window.location.href = '/vendas';
        }
        
        setDisabled(false);
    }

    const excluirVenda = async () => {
        if(window.confirm("Confirma a exclusão da venda?")) {
            // exclui venda
            const json = await api.excluivenda(id_venda, data, nome_cliente);

            if(json.error) {
                setError(json.error);
            } else {
                window.location.href = '/vendas';
            }
        }
    }

    return (
        <PageContainer>
            <PageArea>
                <div className="titulo">
                    <div><h2>{tituloForm}</h2></div>
                    {id_venda !== "novo" &&
                        <div><button onClick={excluirVenda}>Excluir venda</button></div>
                    }
                    <div className="btncinza"><Link to="/vendas">Voltar</Link></div>
                </div>
                
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Data da Venda</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={disabled}
                                value={data}
                                onChange={e=>setData(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Cliente</div>
                        <div className="area--input">
                            <select name="id_cliente">
                                {clientes.map((i,k)=>
                                    <option key={k} valeu={i.id}>{i.nome}</option>
                                )}
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Vendedor</div>
                        <div className="area--input">
                        <select name="id_vendedor">
                                {vendedores.map((i,k)=>
                                    <option key={k} valeu={i.id}>{i.nome}</option>
                                )}
                            </select>
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