import styled from "styled-components";

interface ButtonProps {
  noMargin?: boolean;
}

export default styled.div<ButtonProps>`
  padding: 5px 15px;
  color: rgb(144, 202, 249);
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 4px;
  font-weight: 600;
  line-height: 1.75;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ noMargin }) => (noMargin ? "" : "0 5px")};
  :hover {
    cursor: pointer;
    background-color: rgb(185 218 245 / 40%);
    transition: all 0.2s ease-out;
  }
`;
