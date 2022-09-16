import styled from 'styled-components'

    export const DivLista  = styled.div` 
    backgroud-color: #ffb;
    border: 2px solid #333;
    box-shadow : 5px 5px 5px #333;
    padding : 2hv 2vq;
    text-align: center;
    widht: 50vw;
    height: 20vh;
    margin: 5hv 30vw;
    h2,p{
            padding-bottom: 1vh
    }
`

export const BtnClose = styled.button`
    max-width: 2vw;
    max-height : 2vh;
    border: 2px solid #00ff00;
    border-radius: 5px;
    &:hover{
        background-color: #000ff;
        color: #fff;
    }

`