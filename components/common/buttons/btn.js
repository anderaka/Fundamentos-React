import styled from 'styled-components';
import  { Button } from 'react-bootstrap' ;


export const FormButton = styled(Button)`
color: palevioletred;
font-size: 1.25em;
margin: 2em 0;
width: 100%;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
background-color: transparent;

:hover{
    background-color: #ef5466;
    border-color: #ef5466
}
`;