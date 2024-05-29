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
  text-align: center;
  color: #232c33;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2rem;
`;

export const AddButton = styled.button`
  background-color: transparent;
  color: #232c33;
  border: 2px solid #232c33;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
  margin-left: 2rem;
  
  &:hover {
    background-color: #e0e0e0
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
