import styled from 'styled-components';

export const Template = styled.div``;

export const PageContainer = styled.div`
    max-width: 1000px;
    margin: auto;
    @media(max-width: 600px) {
        margin: 5px;
    }
`;

export const PageTitle = styled.h1`
    font-size: 23px;
`;

export const PageBody = styled.div``;

export const ErrorMessage = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: #FFCACA;
    color: #000;
    border: 2px solid #FF0000;
    border-radius: 3px;
`;

export const AvisoMessage = styled.div`
    margin: 10px 0;
    padding: 10px;
    background-color: antiquewhite;
    color: darkslategrey;
    border: 2px solid darkslategrey;
    border-radius: 3px;
`;
