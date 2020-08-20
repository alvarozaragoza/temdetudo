import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { PageArea } from './styled';
import useApi from '../../helpers/AppAPI';
import { isLogged } from '../../helpers/AuthHandler';

import { PageContainer, ErrorMessage, AvisoMessage } from "../../components/MainComponents";
import ItensVendaItem from '../../components/partials/ItensVendaItem'

const Page = () => {
    if(!isLogged()) {
        window.location.href = '/';
    }

    const api = useApi();
    const { id } = useParams();
    const history = useHistory();
    
    const [id_venda, setIdVenda] = useState(id);
    const [data, setData] = useState(new Date());
    const [id_cliente, setIdCliente] = useState('1');
    const [nome_cliente, setNomeCliente] = useState('');
    const [endereco_cliente, setEnderecoCliente] = useState('');
    const [telefone_cliente, setTelefoneCliente] = useState('');
    const [id_vendedor, setIdVendedor] = useState('1');
    const [nome_vendedor, setNomeVendedor] = useState('');
    const [total_vendido, setTotalVendido] = useState('R$ 0,00');

    const [clientes, setClientes] = useState([]);
    const [vendedores, setVendedores] = useState([]);
    const [vendas_itens, setVendasItens] = useState([]);
    const [produtos, setProdutos] = useState([]);

    const [showFormCli, setShowFormCli] = useState(false);
    const [showFormVend, setShowFormVend] = useState(false);

    const [id_produto, setIdProduto] = useState("");
    const [qtde_produto, setQtdeProduto] = useState('1');
    const [preco_produto, setPrecoProduto] = useState('0.00');
    const [total_item, setTotalItem] = useState('R$ 0,00');
    
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

    useEffect(()=>{
        if(id_venda!="novo") {
            const getVendasItens = async () => {
                const viList = await api.getVendasItens(id_venda);
                setVendasItens(viList.result);
            }
            getVendasItens();
        }
    },[]);

    useEffect(()=>{
        const getProdutos = async () => {
            const pList = await api.getProdutos();
            setProdutos(pList.result);
        }
        getProdutos();
    },[]);

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [aviso, setAviso] = useState('');

    let tituloForm = "Incluir nova venda";
    if(id_venda!=='novo') {  
        tituloForm = "Editar venda";
    }

    // carrega dados da venda
    useEffect(()=>{
        if(id_venda!=='novo') {
            const getVendaID = async () => {
                const dados = await api.getVendaID(id_venda);

                let tot_vendido = dados.result.total_vendido == null ? "0,00" : dados.result.total_vendido;
                tot_vendido = tot_vendido.replace(".",",");

                setData(new Date(dados.result.data+"T03:00:00Z"));
                setIdCliente(dados.result.id_cliente);
                setIdVendedor(dados.result.id_vendedor);
                setTotalVendido(tot_vendido);
            }
            getVendaID();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setAviso('');

        if(data && id_cliente>0) {
            /*validar dados
            setError('...');
            setDisabled(false);
            return;
            */
        }

        // grava venda
        let strData = data.toISOString().slice(0,10);
        const json = await api.gravavenda(id_venda, strData, id_cliente, id_vendedor);

        if(json.error) {
            setError(json.error);
        
        } else {
            if(id_venda=="novo") {
                setAviso("Venda gravada! Itens vendidos podem ser informados agora.");
                setIdVenda(json.result.id);
            } else {
                history.push("/vendas");
            }
            
        }
        
        setDisabled(false);
    }

    //quando submit de novo cliente
    const handleSubmitCliente = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setAviso('');

        if(nome_cliente && telefone_cliente>0) {
            /*validar dados
            setError('...');
            setDisabled(false);
            return;
            */
        }

        // grava cliente
        const json = await api.gravacliente(nome_cliente, telefone_cliente, endereco_cliente);

        if(json.error) {
            setError(json.error);
        } else {
            const getClientes = async () => {
                const cList = await api.getClientes();
                setClientes(cList.result);
            }
            getClientes();
            //alert(JSON.stringify(json.result.id));
            setIdCliente(json.result.id);
            setShowFormCli(false);
        }
        
        setDisabled(false);
    }

    //quando submit de novo vendedor
    const handleSubmitVendedor = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');
        setAviso('');

        if(nome_vendedor) {
            /*validar dados
            setError('...');
            setDisabled(false);
            return;
            */
        }

        // grava vendedor
        const json = await api.gravavendedor(nome_vendedor);

        if(json.error) {
            setError(json.error);
        } else {
            const getVendedores = async () => {
                const cList = await api.getVendedores();
                setVendedores(cList.result);
            }
            getVendedores();
            setIdVendedor(json.result.id);
            setShowFormVend(false);
        }
        
        setDisabled(false);
    }

    //exclusão da venda
    const excluirVenda = async () => {
        if(window.confirm("Confirma a exclusão da venda?")) {
            // exclui venda
            const json = await api.excluivenda(id_venda);

            if(json.error) {
                setError(json.error);
            } else {
                history.push("/vendas");
            }
        }
    }

    //atualiza preço do produto a ser incluido após select
    const atualizaItem = (idProd) => {
        setAviso('');
        setIdProduto(idProd);
        let tot = 0;
        let total = "";
        
        if(idProd==0) {
            setQtdeProduto("1");
            setPrecoProduto("0.00");
            tot = "0.00";

        } else { 
            produtos.map((i,k)=>{
                if(i.id===idProd) {
                    setPrecoProduto(i.preco_venda);
                    tot = (parseFloat(i.preco_venda) * parseInt(qtde_produto)).toFixed(2);
                }
            });
        }
        
        total = "R$ "+tot;
        total = total.replace(".", ",");
        setTotalItem(total);
    }

    //atualiza qtde a ser incluido 
    const atualizaQtde = (qtde) => {
        setAviso('');
        if(qtde=="") {
            qtde = 0;
        }
        setQtdeProduto(qtde);
        let tot = 0;
        let total = "";
        tot = (parseFloat(preco_produto) * parseInt(qtde)).toFixed(2);
        total = "R$ "+tot;
        total = total.replace(".", ",");
        setTotalItem(total);
    }

    //atualiza preço do produto a ser 
    const atualizaPreco = (preco) => {
        setAviso('');
        if(preco=="") {
            preco = 0;
        }
        setPrecoProduto(preco);
        let tot = 0;
        let total = "";
        tot = (parseFloat(preco) * parseInt(qtde_produto)).toFixed(2);
        total = "R$ "+tot;
        total = total.replace(".", ",");
        setTotalItem(total);
    }

    //quando submit de novo item de venda
    const handleSubmitItem = async () => {
        if(id_produto==0) {
            alert('Escolha um produto para incluir na venda');
            return;
        }

        if(qtde_produto=="0") {
            alert('Para incluir item na venda a quantidade deve ser maior que zero');
            return;
        }

        //alert(id_venda+" "+id_produto+" "+qtde_produto+" "+preco_produto);
        //return;

        setDisabled(true);
        setError('');
        setAviso('');

        // grava item
        const json = await api.gravaitemvenda(id_venda, id_produto, qtde_produto, preco_produto);

        if(json.error) {
            setError(json.error);
        
        } else {
            setAviso("Novo produto incluído na venda.")
            setIdProduto(0);
            setQtdeProduto("1");
            setPrecoProduto("0.0");

            const getVendasItens = async () => {
                const viList = await api.getVendasItens(id_venda);
                setVendasItens(viList.result);
            }
            getVendasItens();
        }
        setDisabled(false);
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

                {aviso &&
                    <AvisoMessage>{aviso}</AvisoMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Data</div>
                        <div className="area--input">
                            <DatePicker
                                dateFormat="dd/MM/yyyy"
                                selected={data}
                                onChange={date => setData(date)}
                                disabled={disabled}
                                required
                            />
                            {/*}
                            <input 
                                type="text" 
                                disabled={disabled}
                                value={data}
                                onChange={e=>setData(e.target.value)}
                                required
                            />*/}
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Cliente</div>
                        <div className="area--input">
                            <select value={id_cliente} onChange={e=>setIdCliente(e.target.value)}>
                                {clientes.map((i,k)=>
                                    <option key={k} value={i.id} >{i.nome}</option>
                                )}
                            </select> 
                        </div>
                        <div className="btnNovos" disabled={disabled} onClick={()=>setShowFormCli(true)}>Incluir Outro</div>
                    </label>
                    <label className="area">
                        <div className="area--title">Vendedor</div>
                        <div className="area--input">
                            <select value={id_vendedor} onChange={e=>setIdVendedor(e.target.value)}>
                                {vendedores.map((i,k)=>
                                    <option key={k} value={i.id} >{i.nome}</option>
                                )}
                            </select> 
                        </div>
                        <div className="btnNovos" disabled={disabled} onClick={()=>setShowFormVend(true)}>Incluir Outro</div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Gravar</button>
                        </div>
                    </label>
                </form>

                {showFormCli &&
                <div>
                    <form className="novoCliente" onSubmit={handleSubmitCliente}>
                        <label className="area">
                            <div className="area--title"> </div>
                            <div className="area--input"><strong>Preencha os dados do Cliente</strong></div>
                        </label>
                        <label className="area">
                            <div className="area--title">Nome</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled}
                                    value={nome_cliente}
                                    onChange={e=>setNomeCliente(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Telefone</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled}
                                    value={telefone_cliente}
                                    onChange={e=>setTelefoneCliente(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title">Endereço</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled}
                                    value={endereco_cliente}
                                    onChange={e=>setEnderecoCliente(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}><strong>Incluir</strong></button>
                            </div>
                            <div className="area--input">
                                <button className="btncinza" disabled={disabled} onClick={()=>setShowFormCli(false)} >Cancelar</button>
                            </div>
                        </label>
                    </form>
                </div>
                }

                {showFormVend &&
                <div>
                    <form className="novoVendedor" onSubmit={handleSubmitVendedor}>
                        <label className="area">
                            <div className="area--title"> </div>
                            <div className="area--input"><strong>Preencha o nome do Vendedor</strong></div>
                        </label>
                        <label className="area">
                            <div className="area--title">Nome</div>
                            <div className="area--input">
                                <input 
                                    type="text" 
                                    disabled={disabled}
                                    value={nome_vendedor}
                                    onChange={e=>setNomeVendedor(e.target.value)}
                                    required
                                />
                            </div>
                        </label>
                        <label className="area">
                            <div className="area--title"></div>
                            <div className="area--input">
                                <button disabled={disabled}><strong>Incluir</strong></button>
                            </div>
                            <div className="area--input">
                                <button className="btncinza" disabled={disabled} onClick={()=>setShowFormVend(false)} >Cancelar</button>
                            </div>
                        </label>
                    </form>
                </div>
                }

                {id_venda !== "novo" &&
                    <div className="itensVendidos">
                        <div className="tituloItens">Itens Vendidos <span> </span> :::  <span> </span>R$ {total_vendido}</div>
                        <div className="itens--vendidos">
                            {vendas_itens.map((i,k)=>
                                <div className="item--vendido">
                                    <ItensVendaItem key={k} data={i} />
                                </div>
                            )}
                        </div>
                    </div>
                }
                
                {id_venda == "novo" &&
                    <div style={{color:'gray', fontSize:'13px', fontWeight:'bold', textAlign:'center', marginTop:'10px'}}>
                        [ grave a venda para poder incluir os itens vendidos ]
                    </div>
                }

                {id_venda !== "novo" &&
                    <div className="incluirItem">
                        <div className="tituloItens">Preencha os dados abaixo para incluir item na Venda</div>
                        <div className="infoItem">
                            
                                <div className="prod--input selProduto">
                                    {/*<select value={id_produto} onChange={e=>setIdProduto(e.target.value)}>*/}
                                    <select value={id_produto} onChange={e=>atualizaItem(e.target.value)}>
                                        <option key="0" value="0">Escolha um produto</option>
                                        {produtos.map((i,k)=>
                                            <option key={k} value={i.id} >{i.nome}</option>
                                        )}
                                    </select> 
                                </div>
                                <div className="prod--input">
                                    <input
                                        type="number" 
                                        min="1" step="1"
                                        disabled={disabled}
                                        value={qtde_produto}
                                        onChange={e=>atualizaQtde(e.target.value)}                                
                                        required
                                    />
                                </div>
                                <div className="operVezes">x</div>
                                <div className="prod--input">
                                    <input
                                        type="number"
                                        min="0" step="0.01"
                                        disabled={disabled}
                                        value={preco_produto}
                                        onChange={e=>atualizaPreco(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="operIgual">=</div>
                                <div className="prod--input center">
                                    <div className="total--item center">
                                        {total_item}
                                    </div>
                                </div>
                            
                                <div className={`prod--input center`}>
                                    <button className="btnIncluiProd" onClick={handleSubmitItem}>Incluir</button>
                                </div>
                            
                        </div>
                    </div>
                }
                
            </PageArea>
        </PageContainer>
    );
}

export default Page;