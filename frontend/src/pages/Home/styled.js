import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: #DDD;
    border-bottom: 1px solid #CCC;
    padding: 20px 0;

    .searchBox {
        background-color: #9BB83C;
        padding: 20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display: flex;

        form {
            flex: 1;
            display: flex;

            input, select {
                height: 40px;
                border: 0;
                border-radius: 5px;
                outline: 0;
                font-size: 15px;
                color: #000;
                margin-right: 20px; 
            }

            input {
                flex: 1;
                padding: 0 10px;
            }

            select {
                width: 150px;   
            }

            button {
                background-color: #FF8100;
                font-size: 15px;
                border: 0;
                border-radius: 5px;
                color: #FFF;
                height: 40px;
                padding: 0 20px;
                cursor: pointer;
            }

        }
    }

    .categoryList {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;

        .categoryItem {
            width: 25%;
            display: flex;
            align-items: center;
            color: #000;
            text-decoration: none;
            height: 50px;
            margin-bottom: 10px; 

            &:hover {
                color: #999;
            }

            img {
                width: 45px;
                height: 45px;
                margin-right: 10px;
            }

        }
    }


`;

export const PageArea = styled.div`
    margin-bottom: 20px;

    .titulo {
        display: flex;
        align-items: center;
        margin-left: 14px;
    }
    
    h2 {
        font-size: 20px;
    }

    a {
        border: 0;
        font-size: 14px;
        text-decoration: none;
        outline: 0;
        background-color: #FF8100;
        border-radius: 4px;
        color: #FFF;
        padding: 5px 10px;
        margin-left: 30px;

        &:hover {
            background-color: #E57706;
        }
    }

    .list {
        display: flex;
        flex-wrap: wrap;

        .proditem {
            width: 33%;
        }
    }

    .rodape {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        margin-left: 14px;
        font-size: 14px;
        font-weight: bold;
        color: darkgrey;
    }
    
    
    
`;