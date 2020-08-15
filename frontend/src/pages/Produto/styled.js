import styled from 'styled-components';

export const PageArea = styled.div`
    margin-bottom: 30px;

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
            background-color: #FF8100;
            border-radius: 4px;
            color: #FFF;
            padding: 5px 10px;
            margin-left: 30px;

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
                background-color: darkgrey;
                border-radius: 4px;
                color: #FFF;
                padding: 5px 10px;
                margin-left: 30px;

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
            padding: 7px;
            max-width: 500px;
        }

        .area--title {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .area--input {
            flex: 1;
            
            input, textarea {
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

                .btnExcluir {
                    background-color: #00FF00;
                    margin-left: 10px;
                }
            }
        }

        .area--checkbox {
            flex: 1;
            
            input {
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
        }
    }

`;