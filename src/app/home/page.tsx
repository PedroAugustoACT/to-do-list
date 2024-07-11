"use client";

import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import { PlusCircle } from "react-feather";
import axios from "axios";
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

interface Task {
  id: number;
  nome: string;
  descricao: string;
  status: string;
}

export default function HomePage() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

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

  const handleAddButtonClick = () => {
    setShowAddTask(true);
  };

  const handleCloseAddTask = () => {
    setShowAddTask(false);
  };

  const handleAddTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTasks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/tarefas");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
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
            <AddTask onClose={handleCloseAddTask} onAddTask={handleAddTask} />
          )}
          <TasksList tasks={tasks} onUpdateTasks={updateTasks} />
        </TasksContainer>
      </Main>
    </MainContainer>
  );
}
