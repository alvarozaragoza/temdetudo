import styled from 'styled-components';

export const Item = styled.div`

    display: flex;
    border: 1px solid #DDD;
    margin: 2px;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    color: #000;
    background-color: #FFF;
    transition: all ease .2s;
    height: 30px;
    align-items: center;
    min-width: 100%;

    &:hover {
        background-color: #EEE;
        border: 1px solid #000;
        box-shadow: 0px 0px 10px 2px #c3c3c3;
    }

    .itemProduto {
        font-size: 14px;
        font-weight: bold;
        max-height: 20px;
        overflow: hidden;
        margin-right: 5px;
    }

    .itemPreco {
        font-size: 14px;
        font-weight: normal;
        max-height: 20px;
        overflow: hidden;
        margin-right: 10px;
    }

    .itemTotal {
        flex: 1;
        text-align: right;
        font-size: 14px;
        font-weight: bold;
        max-height: 20px;
        overflow: hidden;
        margin-right: 20px;
    }

    button {
        height: 20px;
        border: 0;
        font-size: 12px;
        text-decoration: none;
        outline: 0;
        border-radius: 4px;
        color: #FFF;
        padding: 1px 3px;
        background-color: #FF8100;
        margin-left: auto;

        &:hover {
            background-color: darkred;
            cursor: pointer;
        }
    }

    @media(max-width:600px) {
        .itemProduto {
            font-size: 12px;
            font-weight: normal;
            margin-right: 4px;
        }

        .itemPreco {
            display: none;
        }

        .itemTotal {
            text-align: right;
            font-size: 12px;
            margin-right: 6px;
        }

        button {
            font-size: 10px;
            
        }
    }

`;



