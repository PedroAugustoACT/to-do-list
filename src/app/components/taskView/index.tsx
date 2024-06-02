import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Select,
  Option,
} from "./styles";
import { X, Trash2 } from "react-feather";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface TaskViewProps {
  taskId: number;
  onClose: () => void;
}

interface Task {
  id: number;
  nome: string;
  descricao: string;
  status: string;
  data_criacao: string;
}

export default function TaskView({ taskId, onClose }: TaskViewProps) {
  const [task, setTask] = useState<Task | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  useEffect(() => {
    const fetchTaskById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/tarefas/${taskId}`
        );
        setTask(response.data);
        setSelectedStatus(response.data.status);
      } catch (error) {
        console.error("Error fetching task by ID:", error);
        setTask(null);
      }
    };

    fetchTaskById();
  }, [taskId]);

  const handleStatusChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);

    try {
      await axios.put(`http://localhost:8080/tarefas/${taskId}`, {
        ...task,
        status: newStatus,
      });
      setTask((prevTask: Task | null) => {
        if (prevTask) {
          return {
            ...prevTask,
            status: newStatus,
          };
        }
        return null;
      });
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  const handleCloseModal = () => {
    onClose();
    window.location.reload();
  };
  

  const handleDeleteTask = async () => {
    try {
      await axios.delete(`http://localhost:8080/tarefas/${taskId}`);
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  if (!task) {
    return (
      <Overlay>
        <MainContainer>
          <p>Carregando...</p>
        </MainContainer>
      </Overlay>
    );
  }

  return (
    <Overlay>
      <MainContainer>
        <TitleContainer>
          <CloseButton onClick={handleCloseModal}>
            <X />
          </CloseButton>
          <TitleText className={montserrat.className}>{task.nome}</TitleText>
          <CloseButton onClick={handleDeleteTask} title="Excluir tarefa">
            <Trash2 />
          </CloseButton>
        </TitleContainer>
        <ContentContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>Descrição:</LabelText>
            <DescriptionText className={montserrat.className}>
              {task.descricao}
            </DescriptionText>
          </DescriptionContainer>
          <DescriptionContainer>
            <LabelText className={montserrat.className}>
              Data de criação:
            </LabelText>
            <DateText className={montserrat.className}>
              {new Date(task.data_criacao).toLocaleDateString("pt-BR")}
            </DateText>
          </DescriptionContainer>
          <SelectContainer>
            <LabelText className={montserrat.className}>
              Alterar status:
            </LabelText>
            <OptionContainer>
              <Select
                value={selectedStatus}
                onChange={handleStatusChange}
                className={montserrat.className}
              >
                <Option value="pendente">Pendente</Option>
                <Option value="em andamento">Em Andamento</Option>
                <Option value="concluída">Concluída</Option>
              </Select>
            </OptionContainer>
          </SelectContainer>
        </ContentContainer>
      </MainContainer>
    </Overlay>
  );
}
