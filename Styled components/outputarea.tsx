import styled from 'styled-components';

export const Outputarea = styled.div`

justify-content:center;
align-items:center;
display:flex;
margin-top:50px;
`;

export const Tablestyle = styled.table`
font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 90%;
  maxwidth:20%;
 
  th{
    border: 3px inset aqua;
    padding: 8px;
    margin: 2px;
    height: 30px;
    vertical-align: center;
    text-align: center;
    background-color:#1B9CFC;
    color: white;
    min-width: 5em; 
    width: 5em; 
    max-width: 5em; 
  } 
  
  & tr : hover{
    background-color:#63cdda;
  }

  td{
    overflow:auto;
    border: 2px groove aqua;
    background-color:#dff9fb;
    text-align: center;
    height: 5px;
    width: 300px;
    vertical-align: center;
    min-width: 5em; 
    width: 5em;
    max-width: 5em;
  }
`;

export const CheckInput = styled.input.attrs((props) => ({
  type: props.type || 'checkbox',
}))`

vertical-align:center;
width:20px;
height:20px;
border-radius:5px;
border:2px solid green;
position:absolute;
`;

export const AllDone = styled(CheckInput)`
left:110px;
`;

export const AllDel = styled.button`

display:block;
width:80px;
font-size:1em;
margin-left:12em;
margin-top:-1.5em;
padding:2px 2px;
border:2px inset #00a8ff;
border-radius:5px;
background-color:crimson;
color:white;

&:hover{
  color:white;
}
`;

export const LabelText = styled.span`
text-align:center;
color:black;

${(props) => {
  switch (props.bool) {
    case '1':
      return `
        text-decoration:line-through;
        background-color:#227093;`;
    default:
      return `
      text-decoration:none;
      background-color:none;
      `;
  }
}}
`;

export const EditBtn = styled.button.attrs((props) => ({
  disabled: props.bool || false,
}))`

padding: 0.25em 1em;
border: 2px outset #00a8ff;
border-radius: 5px ;
background-color:#74b9ff;

&:hover{
  background-color:crimson;
  color:white;
  transition-duration: 0.1;
  transition-timing-function: ease-in;
  transition-delay: 1s;
}

`;

export const DeleteBtn = styled(EditBtn)`

margin-left:20px;`;
