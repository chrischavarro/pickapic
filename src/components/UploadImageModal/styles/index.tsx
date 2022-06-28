import styled from "styled-components";

export default styled.div`
  border-radius: 4px;
  background-color: gray;
  width: 500px;
  height: 550px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 25%);
  margin-left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  background: rgb(18, 18, 18);
  padding: 20px;
`;

export const ModalHeader = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  margin-top: 20px;
`;

export const ImageName = styled.div`
  color: white;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-top: 15px;
`;

export const ErrorText = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 20px;
`;
