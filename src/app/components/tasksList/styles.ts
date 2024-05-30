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
  padding: 1rem;
`;

export const TitleStatus = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #232c33; 
`;

export const ListContainer = styled.div`
  height: 67vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;

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

