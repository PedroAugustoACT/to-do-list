import { useState } from "react";
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

interface TasksListProps {
  tasks: Task[];
  onUpdateTasks: () => void;
}

export default function TasksList({ tasks, onUpdateTasks }: TasksListProps) {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const renderTasksByStatus = (status: string) => {
    return tasks
      .filter((task) => task.status === status)
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

    return <TaskView taskId={selectedTask.id} onClose={handleCloseModal} onUpdateTasks={onUpdateTasks} />;
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
