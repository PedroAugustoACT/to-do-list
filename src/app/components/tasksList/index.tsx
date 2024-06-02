import { useState, useEffect } from "react";
import axios from "axios";
import {
  ListContainer,
  MainContainer,
  StatusContainer,
  TaskContainer,
  TaskDescriptionContainer,
  TaskDescriptionText,
  TaskTitleContainer,
  TaskTitleText,
  TitleStatus,
} from "./styles";
import TaskView from "../taskView";

interface Task {
  id: number;
  nome: string;
  descricao: string;
  status: string;
}

export default function TasksList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tarefas");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks(); 
  }, []); 

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const renderTasksByStatus = (status: string) => {
    return tasks
      .filter((task) => task.status === status) // Filtrar as tarefas pelo status
      .map((task) => (
        <TaskContainer
          key={task.id}
          status={task.status}
          onClick={() => setSelectedTask(task)}
        >
          <TaskTitleContainer>
            <TaskTitleText>{task.nome}</TaskTitleText>
          </TaskTitleContainer>
          <TaskDescriptionContainer>
            <TaskDescriptionText>{task.descricao}</TaskDescriptionText>
          </TaskDescriptionContainer>
        </TaskContainer>
      ));
  };

  const renderSelectedTaskComponent = () => {
    if (!selectedTask) return null;

    return <TaskView taskId={selectedTask.id} onClose={handleCloseModal} />;
  };

  return (
    <MainContainer>
      <StatusContainer>
        <TitleStatus>Pendente</TitleStatus>
        <ListContainer>{renderTasksByStatus("pendente")}</ListContainer>
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Em andamento</TitleStatus>
        <ListContainer>{renderTasksByStatus("em andamento")}</ListContainer>
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Concluída</TitleStatus>
        <ListContainer>{renderTasksByStatus("concluída")}</ListContainer>
      </StatusContainer>

      <div>{renderSelectedTaskComponent()}</div>
    </MainContainer>
  );
}
