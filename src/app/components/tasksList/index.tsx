import { useState } from "react";
import { TasksData } from "@/app/datas/tasks";
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
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function TasksList() {
  const [selectedTask, setSelectedTask] = useState<{
    index: string;
    name: string;
    description: string;
    status: string;
    creationDate: string;
  } | null>(null);

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const renderTasksByStatus = (status: string) => {
    return TasksData.filter((task) => task.status === status).map((task) => (
      <TaskContainer
        key={task.index}
        status={task.status}
        onClick={() => setSelectedTask(task)}
      >
        <TaskTitleContainer>
          <TaskTitleText className={montserrat.className}>
            {task.name}
          </TaskTitleText>
        </TaskTitleContainer>
        <TaskDescriptionContainer>
          <TaskDescriptionText className={montserrat.className}>
            {task.description}
          </TaskDescriptionText>
        </TaskDescriptionContainer>
      </TaskContainer>
    ));
  };

  const renderSelectedTaskComponent = () => {
    if (!selectedTask) return null;

    return <TaskView task={selectedTask} onClose={handleCloseModal} />;
  };

  return (
    <MainContainer>
      <StatusContainer>
        <TitleStatus>Em Progresso</TitleStatus>
        <ListContainer>{renderTasksByStatus("em progresso")}</ListContainer>
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Pendente</TitleStatus>
        <ListContainer>{renderTasksByStatus("pendente")}</ListContainer>
      </StatusContainer>

      <StatusContainer>
        <TitleStatus>Concluída</TitleStatus>
        <ListContainer>{renderTasksByStatus("concluída")}</ListContainer>
      </StatusContainer>

      <div>{renderSelectedTaskComponent()}</div>
    </MainContainer>
  );
}
