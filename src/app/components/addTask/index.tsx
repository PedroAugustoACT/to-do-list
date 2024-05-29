import React, { useState } from "react";
import {
  MainContainer,
  Overlay,
  TitleContainer,
  TitleText,
  LabelText,
  SelectContainer,
  CloseButton,
  ContentContainer,
  DescriptionContainer,
  OptionContainer,
  StyledInput,
  StyledTextarea,
  ConfirmButton // Adicionado novo styled component para o botão de confirmar
} from "./styles";
import { X } from "react-feather";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface TaskViewProps {
  onClose: () => void;
}

export default function AddTask({ onClose }: TaskViewProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [status, setStatus] = useState("Pendente");

  const handleCloseModal = () => {
    onClose();
  };

  const handleConfirm = () => {
    // Aqui você pode adicionar a lógica para confirmar a tarefa
  };

  return (
    <Overlay>
      <MainContainer>
        <TitleContainer>
          <CloseButton onClick={handleCloseModal}>
            <X />
          </CloseButton>
          <TitleText className={montserrat.className}>Adicionar Tarefa</TitleText>
          <TitleText></TitleText>
        </TitleContainer>
        <ContentContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Nome:</LabelText>
            <StyledInput
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={montserrat.className}
            />
          </DescriptionContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Descrição:</LabelText>
            <StyledTextarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={montserrat.className}
            />
          </DescriptionContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Data de criação:</LabelText>
            <StyledInput
              type="date"
              value={creationDate}
              onChange={(e) => setCreationDate(e.target.value)}
              className={montserrat.className}
            />
          </DescriptionContainer>
          <SelectContainer>
            <LabelText className={montserrat.className}>Status:</LabelText>
            <OptionContainer>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={montserrat.className}
              >
                <option value="Pendente">Pendente</option>
                <option value="Em progresso">Em progresso</option>
                <option value="Concluído">Concluído</option>
              </select>
            </OptionContainer>
          </SelectContainer>
        </ContentContainer>
        <ConfirmButton onClick={handleConfirm} className={montserrat.className}>Confirmar</ConfirmButton> 
      </MainContainer>
    </Overlay>
  );
}

