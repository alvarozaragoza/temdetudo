import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .titulo--analise {
        font-size: 20px;
        color: purple;
        text-align: center;
    }
    @media(max-width: 600px) {
        .titulo--analise {
            font-size: 18px;
        }
    }
`;

export const PageArea = styled.div`
    margin-bottom: 120px;

    .resumo{
        margin-top: 20px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .totv-1{
        width: 49%;
        text-align: right;
        font-size: 18px;
        margin-right: 1%;
    }

    .totv-2{
        width: 49%;
        text-align: left;
        font-size: 20px;
        margin-left: 1%;
    }
    
    .totc-1{
        width: 49%;
        text-align: right;
        font-size: 18px;
        margin-right: 1%;
    }

    .totc-2{
        width: 49%;
        text-align: left;
        font-size: 20px;
        margin-left: 1%;
    }

    .lucr-1{
        margin-top: 5px;
        width: 49%;
        text-align: right;
        font-size: 20px;
        font-weight: bold;
        margin-right: 1%;
    }

    .lucr-2{
        margin-top: 5px;
        width: 49%;
        text-align: left;
        font-size: 22px;
        font-weight: bold;
        margin-left: 1%;
    }

    .mark-1{
        margin-top: 5px;
        width: 49%;
        text-align: right;
        font-size: 15px;
        margin-right: 1%;
    }

    .mark-2{
        margin-top: 5px;
        width: 49%;
        text-align: left;
        font-size: 15px;
        margin-left: 1%;
    }

    .totais{
        margin-top: 20px;
        display: flex;
        width: 100%;
    }

    .titulo-block {
        font-size: 19px;
        font-weight: bold;
        margin: 20px;
        text-align: left;
    }
    
    .block-cli {
        height: 300px;
        background-color: #ffe6cc;
        width: 48%;
        margin: 1%;
        border-radius: 5px;
    }

    .linhas-cli {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: baseline;
    }

    .line-block {
        font-size: 17px;
        text-align: center;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        align-items: baseline;
    }
    .cli-1{
        width: 48%;
        text-align: right;
        font-size: 20px;
        margin-right: 2%;
    }

    .cli-2{
        width: 49%;
        text-align: left;
        font-size: 20px;
        margin-left: 1%;
    }

@media(max-width: 600px) {
    .totv-1{
        font-size: 15px;
    }

    .totv-2{
        font-size: 17px;
    }
    
    .totc-1{
        font-size: 15px;
    }

    .totc-2{
        font-size: 17px;
    }

    .lucr-1{
        font-size: 17px;
    }

    .lucr-2{
        font-size: 19px;
    }

    .mark-1{
        font-size: 12px;
    }

    .mark-2{
        font-size: 12px;
        margin-left: 1%;
    }

    .totais{
        margin-top: 20px;
        padding-right: 10px;
        display: flex;
        flex-direction: column;
        width: 100%;    
    }

    .block-cli {
        width: 100%;
        height: auto;
        padding-bottom: 20px;
    }

    .cli-1{
        font-size: 16px;
    }

    .cli-2{
        font-size: 16px;
    }    
}
   
`;