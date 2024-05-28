import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ecf0f2;
  overflow-y: auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #ecf0f2;
`;

export const TitleContainer = styled.div`  
  margin-top: 5%;
`;
export const TitleText = styled.p`
  font-size: 25px;
  font-weight: bold;
  text-align:center;
  color: #232c33;
`;

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;
