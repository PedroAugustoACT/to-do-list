import React from "react";
import {
  DateText,
  DescriptionContainer,
  DescriptionText,
  MainContainer,
  Overlay,
  TitleContainer,
  TitleText,
  LabelText,
  SelectContainer,
  CloseButton,
} from "./styles";

interface Task {
  name: string;
  description: string;
  creationDate: string;
  status: string;
}

interface TaskViewProps {
  task: Task;
  onClose: () => void;
}

export default function TaskView({ task, onClose }: TaskViewProps) {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Novo status selecionado:", e.target.value);
  };

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Overlay>
      <MainContainer>
        <TitleContainer>
          <TitleText></TitleText>
          <TitleText>{task.name}</TitleText>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
        </TitleContainer>
        <DescriptionContainer>
          <LabelText>Descrição:</LabelText>
          <DescriptionText>{task.description}</DescriptionText>
        </DescriptionContainer>
        <DescriptionContainer>
          <LabelText>Data de criação:</LabelText>
          <DateText>{task.creationDate}</DateText>
        </DescriptionContainer>
        <DescriptionContainer>
          <LabelText>Alterar status:</LabelText>
          <SelectContainer>
            <select onChange={handleStatusChange}>
              <option value="Pendente" selected={task.status === "Pendente"}>
                Pendente
              </option>
              <option
                value="Em Progresso"
                selected={task.status === "Em Progresso"}
              >
                Em Progresso
              </option>
              <option value="Concluído" selected={task.status === "Concluído"}>
                Concluído
              </option>
            </select>
          </SelectContainer>
        </DescriptionContainer>
      </MainContainer>
    </Overlay>
  );
}
