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
  ContentContainer,
  OptionContainer,
  Select, // Adicionado novo styled component para o select
  Option, // Adicionado novo styled component para as opções do select
} from "./styles";
import { X, Trash2 } from "react-feather";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

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
          <CloseButton onClick={handleCloseModal}>
            <X />
          </CloseButton>
          <TitleText className={montserrat.className}>{task.name}</TitleText>
          <CloseButton onClick={handleCloseModal} title="Excluir tarefa">
            <Trash2 /> 
          </CloseButton>
        </TitleContainer>
        <ContentContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Descrição:</LabelText>
            <DescriptionText className={montserrat.className}>{task.description}</DescriptionText>
          </DescriptionContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Data de criação:</LabelText>
            <DateText className={montserrat.className}>{task.creationDate}</DateText>
          </DescriptionContainer>
          <SelectContainer>
            <LabelText className={montserrat.className}>Alterar status:</LabelText>
            <OptionContainer>
              <Select onChange={handleStatusChange} className={montserrat.className}>
                <Option value="Pendente" selected={task.status === "pendente" ? true : false}>
                  Pendente
                </Option>
                <Option value="Em progresso" selected={task.status === "em progresso" ? true : false}>
                  Em progresso
                </Option>
                <Option value="Concluído" selected={task.status === "concluído" ? true : false}>
                  Concluído
                </Option>
              </Select>
            </OptionContainer>
          </SelectContainer>
        </ContentContainer>
      </MainContainer>
    </Overlay>
  );
}
