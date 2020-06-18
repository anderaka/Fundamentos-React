import styled from 'styled-components';
import  { Button } from 'react-bootstrap' ;


export const FormButton = styled(Button)`
color: #3482f7;
font-size: 1.25em;
margin: 2em 0;
width: 100%;
padding: 0.25em 1em;
border: 2px solid #54d3ef;
border-radius: 2px;
background-color: transparent;

:hover{
    background-color: #54d3ef;
    border-color: #3482f7
}
`;