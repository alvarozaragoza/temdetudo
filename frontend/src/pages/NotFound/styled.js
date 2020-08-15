import styled from 'styled-components';

export const PageArea = styled.div`
    background-color: #DDD;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2 {
        font-size: 30px;
    }

    a, button {
        color: #000;
        border: 0;
        background-color: none;
        font-size: 14px;
        text-decoration: none;
        cursor: pointer;
        outline: 0;

        &:hover {
            color: #999;
        }

        &.button {
            background-color: #FF8100;
            border-radius: 4px;
            color: #FFF;
            padding: 5px 10px;
        }

        &.button:hover {
            background-color: #E57706;
        }
    }
    
`;