import styled from 'styled-components';

export const Header = styled.header`

display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  background-color: #1B9CFC;
  border-radius: 5px;
  padding: 1px;
  color: aliceblue;

  padding: 0.25em 1em;
  border: 2px solid #25CCF7;

  img{
    width:80px;
    height:70px;
    border-radius:10px;
    margin:10px;
    border: 2px inset aqua;
    
  }
`;
export const Title = styled.h1`

font-size: xx-large;
  font-weight: 600;
  margin-left: 100px;
  background-color: #1B9CFC;
  text-decoration:underline;
  font-family: Lato;

`;

export const DateDisplay = styled.h3`
background-color: #1B9CFC;
margin:10px;
position:relative;
font-family: Lato;
}
`;

export const ToggleDarkTheme = styled.button`

position:absolute;
left:85%;
top:11%;
display: inline;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
background-color:#74b9ff;
`;
