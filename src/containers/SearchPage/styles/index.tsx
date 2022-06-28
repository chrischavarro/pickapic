import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
`;

export const ResultsHeader = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin-left: 15%;
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const ResultsContainer = styled.div`
  width: 75%;
  margin-left: 12%;
  overflow-x: scroll;
  scrollbar-color: #d4aa70 #e4e4e4;
  transition: scrollbar-color 0.3s ease-out;
  :-webkit-scrollbar {
    background-color: #5749d2;
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 420px 420px;
  grid-auto-columns: 420px;
`;

export const ResultItem = styled.div`
  margin: 10px;
`;
