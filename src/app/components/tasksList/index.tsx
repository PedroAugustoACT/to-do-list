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
          <TaskTitleText className={montserrat.className}>{task.name}</TaskTitleText>
        </TaskTitleContainer>
        <TaskDescriptionContainer>
          <TaskDescriptionText className={montserrat.className}>{task.description}</TaskDescriptionText>
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
