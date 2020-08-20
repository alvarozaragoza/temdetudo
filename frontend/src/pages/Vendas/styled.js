import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox {
        background-color: darkcyan;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;

        form {
            flex: 1;
            display: flex;
            justify-content: space-between;

            .filtros {
                display: flex;

                .textFiltro {
                    height: 18px;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    margin-right: 10px;
                    margin-top: 7px;
                }

                input, select, .datepicker {
                    width: 120px;
                    height: 40px;
                    border: 0;
                    border-radius: 5px;
                    outline: 0;
                    font-size: 18px;
                    color: #000;
                    margin-right: 10px; 
                }

                input {
                    flex: 1;
                    padding: 0 10px;
                }

                select {
                    width: 150px;   
                }
            }

            .btnsFiltros {
                button {
                    background-color: #FF8100;
                    margin-left: 20px;
                    font-size: 15px;
                    border: 0;
                    border-radius: 5px;
                    color: #FFF;
                    height: 40px;
                    padding: 0 20px;
                    cursor: pointer;
                    font-weight: bold;
                    text-decoration: none;
                    height: 40px;
                }

                .btnCinza {
                    background-color: #3c5e5e;
                }
            }

        }

    }

    @media(max-width: 600px) {
        .searchBox {
            padding: 10px;
            form {
                flex-direction: column;
                
                .filtros {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    .textFiltro {
                        margin-right: 4px;
                        margin-left: 4px;
                        font-size: 13px;
                        height: 30px;
                    }
                    input, select, .datepicker {
                        font-size: 14px;
                        width: 100px;
                        height: 30px;
                        margin-right: 4px;
                        margin-left: 4px;
                        
                    }
                }

                .btnsFiltros {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 5px;
                    
                    button {
                        background-color: #3c5e5e;
                        font-size: 14px;
                        font-weight: normal;
                        height: 30px;
                        margin-left: 0px;
                    }
                }
            }
        }
    }
`;

export const PageArea = styled.div`
    margin-bottom: 120px;

    .titulo {
        display: flex;
        align-items: center;
        margin-left: 14px;
    }

    .btnsVendas{
        display: flex;
    }
    
    h2 {
        font-size: 22px;
    }

    a {
        border: 0;
        font-size: 15px;
        font-weight: bold;
        text-decoration: none;
        outline: 0;
        background-color: #FF8100;
        border-radius: 4px;
        color: #FFF;
        padding: 5px 10px;
        margin-left: 30px;

        &:hover {
            background-color: darkorange;
        }
    }
    
    .btnAnalise {
        background-color: purple;
        &:hover {
            background-color: darkviolet;
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        
        .vendaitem {
            width: 100%;
            margin-bottom: 1px;
        }
    }

    .rodape {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 18px;
        margin-left: 14px;
        font-size: 18px;
        font-weight: bold;
        color: darkgrey;
    }

    @media(max-width: 600px) {
        .titulo {
            margin-left: 10px;
            display: flex;
            justify-content: space-between;
            height: 70px;
            margin-bottom: 10px;
        }

        .btnsVendas{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 70px;
            align-items: stretch;
        }

        a {
            width: 100px;
            font-size: 14px;
            font-weight: normal;
            margin: 10px;
            .btnAnalise {
                margin-top: 10px;
            }
        }
        .btnAnalise {
            margin-top: 10px;
        }

        .rodape {
            font-size: 14px;
            margin-left: 0px;
        }

        @media(max-width:600px) {
            
        }
        
    }
    
`;

export const VendasCabec = styled.div`

    display: flex;
    border: 1px solid #DDD;
    margin: 0;
    margin-left:5px;
    margin-bottom:5px;
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    color: #000;
    background-color: lightgrey;
    transition: all ease .2s;
    height: 30px;
    width: 100%;
    align-items: flex-start;

    .itemData {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 30px;
        max-height: 30px;
        overflow: hidden;
        width: 13%;
    }

    .itemNomeCliente {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        width: 11%;
    }

    .itemDadosCliente {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        text-align: bottom;
        width: 50%;
    }

    .itemVendedor {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        width: 13%;
    }

    .itemValor {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        text-align: right;
        width: 13%;
    }

    @media(max-width: 600px) {
        height: 2px;
        .itemData {
            display: none;
        }

        .itemNomeCliente {
            display: none;
        }

        .itemDadosCliente {
            display: none;
        }

        .itemVendedor {
            display: none;
        }

        .itemValor {
            display: none;
        }
    }
   
`;