import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  padding: 10px;
`;

export const StatusContainer = styled.div`
  flex: 1;
  margin: 0 10px;
  padding: 1rem
`;

export const TitleStatus = styled.p`
font-size: 20px;
font-weight: bold;
color: #232c33; 
`

const getStatusBackgroundColor = (status: string) => {
    switch (status) {
      case "pendente":
        return "rgba(255, 0, 0, 0.2)";
      case "em progresso":
        return "rgba(255, 255, 0, 0.2)";
      case "concluída":
        return "rgba(0, 255, 0, 0.2)";
      default:
        return "white";
    }
  };
  
  export const TaskContainer = styled.div<{ status: string }>`
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    background-color: ${({ status }) => getStatusBackgroundColor(status)};
    cursor: pointer;
  `;

export const TaskTitleContainer = styled.div`
  margin-top: 1%;
`;

export const TaskTitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #232c33;
`;

export const TaskDescriptionContainer = styled.div`
  margin-top: 2%;
`;

export const TaskDescriptionText = styled.p`
  font-size: 15px;
  color: #232c33;
`;