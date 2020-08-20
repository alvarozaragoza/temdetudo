import styled from 'styled-components';

export const Item = styled.div`
a {
    display: block;
    border: 1px solid #DDD;
    margin: 10px;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    background-color: #FFF;
    transition: all ease .2s;
    height: 145px;

    &:hover {
        background-color: #EEE;
        border: 1px solid #000;
        box-shadow: 0px 0px 10px 2px #c3c3c3;
    }

    .itemImage img {
        width: 100%;
        border-radius: 5px;
    }

    .itemClass {
        font-size: 13px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 25px;
        max-height: 25px;
        overflow: hidden;
        text-align: right;
        color: purple;
    }

    .itemNome {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 5px;
        height: 20px;
        max-height: 20px;
        overflow: hidden;
    }

    .itemDesc {
        font-weight: normal;
        height: 40px;
        max-height: 40px;
        overflow: hidden;
    }

    .itemPreco {
        color: #FF8100;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        height: 20px;
    }

    .itemPreco2 {
        color: #9BB83C;
        margin-top: 5px;
        font-size: 18px;
        font-weight: bold;
        height: 20px;
    }
}
`;