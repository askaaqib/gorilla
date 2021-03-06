import styled from "styled-components";

const Button = styled.button`
  width: ${props => props.width || "100%"}
  height: ${props => props.height || "50px"}
  font-family: "Inter UI Medium";
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #39404a;
  color: white;
  cursor: pointer;
`;

export default Button;
