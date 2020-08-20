import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: #FFF;
    height: 60px;
    border-bottom:1px solid #CCC;
        
    .container {
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    a {
        text-decoration: none;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;
        height: 60px;

        .logo-1,
        .logo-2,
        .logo-3 {
            font-weight: bold;
        }    
        
        .logo-1 { color: #FF8100; font-size: 25px; }
        .logo-2 { color: #ed973b; font-size: 20px; }
        .logo-3 { color: #FF8100; font-size: 25px; }
    }

    .navi {
        padding-top: 10px;
        padding-bottom: 10px;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin-left: 30px;
            /*margin-right: 20px;*/

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
        }

    }

@media (max-width: 600px) {

    & {
        height: auto;
    }
    
    .container {
        flex-direction: column;
    }
    
    .logo {
        justify-content: center;
        margin-top: 10px;
    }

    .navi ul {
        justify-content: center;
        margin:0;
        padding:0;
        
        li {
            margin: 10px;
        
            a {
                color: #000;
                background-color: #FFF;
                &:hover {
                    color: #999;
                    background-color: #FFF;
                }
            }
            button {
                color: #000;
                background-color: #FFF;
                &:hover {
                    color: #999;
                    background-color: #FFF;
                }
                &.button {
                    padding: 0px 0px;
                }
            }
            .button {
                color: #000;
                background-color: #FFF;
                &:hover {
                    color: #999;
                    background-color: #FFF;
                }
            }
            
        }
    }



}
`;