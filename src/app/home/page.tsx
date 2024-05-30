"use client";

import { useState } from "react";
import { Montserrat } from "next/font/google";
import { PlusCircle } from "react-feather";
import {
  AddButton,
  ButtonContainer,
  Main,
  MainContainer,
  TasksContainer,
  TitleContainer,
  TitleText,
} from "./styles";
import TasksList from "../components/tasksList";
import AddTask from "../components/addTask";


const montserrat = Montserrat({ subsets: ["latin"] });

export default function HomePage() {
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddButtonClick = () => {
    setShowAddTask(true);
  };

  const handleCloseAddTask = () => {
    setShowAddTask(false);
  };

  return (
    <MainContainer>
      <Main>
        <TitleContainer>
          <TitleText className={montserrat.className}>Minhas Tarefas</TitleText>
        </TitleContainer>
        <TasksContainer>
        <ButtonContainer>
          <AddButton className={montserrat.className} onClick={handleAddButtonClick}>
            <PlusCircle size={24} />
            Adicionar tarefa
          </AddButton>
        </ButtonContainer>
        {showAddTask && (
          <AddTask onClose={handleCloseAddTask} />
        )}
          <TasksList />
        </TasksContainer>
      </Main>
    </MainContainer>
  );
}
