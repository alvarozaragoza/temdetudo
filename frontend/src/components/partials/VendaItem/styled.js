import styled from 'styled-components';

export const Item = styled.div`
a {
    display: flex;
    border: 1px solid #DDD;
    margin: 2px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #FFF;
    transition: all ease .2s;
    height: 40px;
    width: 100%;

    &:hover {
        background-color: #EEE;
        border: 1px solid #000;
        box-shadow: 0px 0px 10px 2px #c3c3c3;
    }

    .itemData {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        width: 13%;
    }

    .itemNomeCliente {
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        width: 11%;
    }

    .itemDadosCliente {
        color: darkgray;
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        text-align: bottom;
        width: 50%;
    }

    .itemVendedor {
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        width: 13%;
    }

    .itemValor {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
        text-align: right;
        width: 13%;
    }

    .itemCabec {
        background-color: antiquewhite;
    }

}

`;



