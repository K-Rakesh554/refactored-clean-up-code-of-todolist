import styled from 'styled-components';

export const Inputsection = styled.div`
display:flex;
margin-top:50px;
justify-content:space-around;
align-items:start;
flex-direction:column;
color: aliceblue;
background-color:#1B9CFC;
align-content-space-around;
border: 2px solid #25CCF7;

&:hover{
  background-color: #54a0ff;
  transition-duration: 0.1s;
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
}

img {
  width:25em;
  height:24em;
  position:absolute;
  top: 30%;
  left: 60%;
  border-top-right-radius:20px;
  border-bottom-left-radius:20px;
  border:1px dotted aqua;
}
`;
export const InputLabel = styled.label`

  border-radius: 5px;
  padding: 5px;
  margin:40px;
  display:block;
  position:relative;
  left:18%;
  font-style:italic;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
  size: '2rem',
  defaultValue: props.defaultValue || '',
}))`
border:2px solid #00a8ff;
margin:10px;
padding:10px;
border-radius:20px;
position:relative;
left:20%;
width:25%;

&:hover{
  background-color:#3742fa;
  color:white;
}
`;

export const AddTaskBtn = styled.button`

position:relative;
left:20%;
display: block;
font-size: 1em;
margin: 1em;
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
