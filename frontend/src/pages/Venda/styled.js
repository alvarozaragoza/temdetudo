import styled from 'styled-components';

export const PageArea = styled.div`
    margin-bottom: 130px;

    .titulo {
        display: flex;
        align-items: center;
        margin-left: 10px;
        
        h2 {
            font-size: 20px;
        }

        button {
            border: 0;
            font-size: 14px;
            text-decoration: none;
            outline: 0;
            border-radius: 4px;
            color: #FFF;
            padding: 5px 10px;
            margin-left: 30px;
            background-color: #FF8100;

            &:hover {
                background-color: #E57706;
            }
        }

        .btncinza {
            display: flex;
            align-items: center;
            
            a {
                border: 0;
                font-size: 13px;
                text-decoration: none;
                outline: 0;
                border-radius: 4px;
                color: #FFF;
                padding: 5px 10px;
                margin-left: 30px;
                background-color: darkgrey;

                &:hover {
                    background-color: darkseagreen;
                }
            }
        }
    }

    form {
        background-color: #FFF;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;

        .area {
            display: flex;
            align-items: center;
            padding: 5px;
            max-width: 600px;
        }

        .area--extra {
            display: flex;
            align-items: center;
            padding-bottom: 5px;
            max-width: 500px;
        }

        .area--title {
            width: 130px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area--input {
            flex: 1;
            
            input, textarea, select {
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #DDD;
                border-radius: 3px;
                outline: 0;
                transition: all ease .4s;
        
                &:focus {
                    border: 1px solid #333;
                    color: #333;
                }

                [type="checkbox"] {
                    width: 10%;
                }
            }

            button {
                background-color: #0089FF;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: #FFF;
                font-size: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #006FCE;
                }
            }

            .btncinza {
                background-color: darkgray;
                &:hover {
                    background-color: darkseagreen;
                }
            }
        }

        .area--input--extra {
            flex: 1;
        }
    }

    .btnNovos {
        border: 0;
        text-align: right;
        outline: 0;
        padding: 3px 8px;
        margin-left: 5px;
        border-radius: 4px;
        color: #FFF;
        cursor: pointer;

        background-color: darkgray;
        font-size: 12px;
        font-weight: bold;

        &:hover {
            background-color: darkseagreen;
        }
    }    

    .novoCliente, .novoVendedor, .incluirItemVenda {
        margin-top: 10px;
        background-color: antiquewhite;
    }

    .itensVendidos {
        margin-top: 10px;
        background-color: lightyellow;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
    }

    .itens--vendidos {
        margin-top: 10px;
        display: flex;
        text-align: center;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .item--vendido {
        min-width: 47%;
        margin-left: 10px;
        margin-right: 10px;
    }

    .incluirItem {
        margin-top: 10px;
        background-color: lightyellow;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        background-color: antiquewhite;
    }

    .itensVendidos {
        margin-top: 10px;
        background-color: lightyellow;
        border-radius: 3px;
        padding: 10px;
        box-shadow: 0px 0px 3px #999;
        background-color: lightyellow;
    }

    .tituloItens {
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        color: darkslategrey;
    }
 
    .selProduto {
        flex-basis: 300px;
    }

    .infoItem {
        display: flex;
        margin: 10px;
        justify-content: space-between;

        .prod--input {
            input, select {
                text-align: center;
                width: 100%;
                font-size: 14px;
                padding: 5px;
                border: 1px solid #DDD;
                border-radius: 3px;
                outline: 0;
                transition: all ease .4s;
        
                &:focus {
                    border: 1px solid #333;
                    color: #333;
                }

            }

            button {
                background-color: #0089FF;
                border: 0;
                outline: 0;
                padding: 5px 10px;
                border-radius: 4px;
                color: #FFF;
                font-size: 15px;
                cursor: pointer;

                &:hover {
                    background-color: #006FCE;
                }
            }

            .btncinza {
                background-color: darkgray;
                &:hover {
                    background-color: darkseagreen;
                }
            } 
        }

        .total--item {
            font-size: 18px;
            width: 100%;
            text-align: left;
        }
    }

@media(max-width: 600px) {
    .titulo {
        margin-left: 5px;
        
        h2 {
            font-size: 16px;
        }

        button {
            font-size: 14px;
            margin-left: 20px;
        }

        .btncinza {
            a {
                margin-left: 12px;
            }
        }
    }

    form {
       .area--title {
            width: 80px;
            padding-right: 10px;
            font-size: 13px;
        }
    }

    .btnNovos {
        font-size: 11px;
        font-weight: normal;
        max-width: 50px;
        line-height: 12px;
    }    

    .item--vendido {
        min-width: 100%;
        margin-left: 0px;
        margin-right: 0px;
    }

    .selProduto {
        flex-basis: 40px;
    }

    .operIgual {
        text-align: center;
        color: orange;
    }

    .operVezes {
        text-align: center;
        color: orange;
    }

    .infoItem {
        flex-direction: column;
    }

    .infoItem {
        .total--item {
            text-align: center;
            width: auto;
            margin-bottom: 10px;
        }
    }

    .center {
        text-align: center;
    }
}
`;