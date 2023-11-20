import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  background-color: ${function (props) {
    if (props.variant === "primary") {
      return "#b81d24";
    } else if (props.variant === "secondary") {
      return "#b81d24";
    } else {
      return "#525252";
    }
  }};
`;

export default Button;
