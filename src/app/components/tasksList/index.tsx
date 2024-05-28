import { useState } from "react";
import { TasksData } from "@/app/datas/tasks";
import {
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

export default function TasksList() {
  const [selectedTask, setSelectedTask] = useState<{
    index: string;
    name: string;
    description: string;
    status: string;
    creationDate: string;
  } | null>(null);

  const handleCloseModal = () => {
    setSelectedTask(null); // Define selectedTask como null para fechar o modal
  };

  const renderTasksByStatus = (status: string) => {
    return TasksData.filter((task) => task.status === status).map((task) => (
      <TaskContainer
        key={task.index}
        status={task.status}
        onClick={() => setSelectedTask(task)}
      >
        <TaskTitleContainer>
          <TaskTitleText>{task.name}</TaskTitleText>
        </TaskTitleContainer>
        <TaskDescriptionContainer>
          <TaskDescriptionText>{task.description}</TaskDescriptionText>
        </TaskDescriptionContainer>
      </TaskContainer>
    ));
  };

  const renderSelectedTaskComponent = () => {
    if (!selectedTask) return null;

    return <TaskView task={selectedTask} onClose={handleCloseModal} />; // Passa a função handleCloseModal como propriedade onClose
  };

  return (
    <MainContainer>
      <StatusContainer>
        <TitleStatus>Em Progresso</TitleStatus>
        {renderTasksByStatus("em progresso")}
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Pendente</TitleStatus>
        {renderTasksByStatus("pendente")}
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Concluída</TitleStatus>
        {renderTasksByStatus("concluída")}
      </StatusContainer>

      <div>{renderSelectedTaskComponent()}</div>
    </MainContainer>
  );
}
