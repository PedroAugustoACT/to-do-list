"use client";

import { Montserrat } from "next/font/google";
import {
  Main,
  MainContainer,
  TasksContainer,
  TitleContainer,
  TitleText,
} from "./styles";
import TasksList from "../components/tasksList";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainContainer>
      <Main>
        <TitleContainer>
          <TitleText className={montserrat.className}>Minhas Tarefas</TitleText>
          <TasksContainer>
            <TasksList />
          </TasksContainer>
        </TitleContainer>
      </Main>
    </MainContainer>
  );
}
