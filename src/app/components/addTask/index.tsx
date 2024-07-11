import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
  StyledInput,
  StyledTextarea,
  ConfirmButton,
  ButtonContainer,
} from "./styles";
import { X } from "react-feather";
import { Montserrat } from "next/font/google";
import { Select } from "../taskView/styles";

const montserrat = Montserrat({ subsets: ["latin"] });

interface Task {
  id: number;
  nome: string;
  descricao: string;
  status: string;
}

interface TaskViewProps {
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

export default function AddTask({ onClose, onAddTask }: TaskViewProps) {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <Overlay>
      <MainContainer>
        <TitleContainer>
          <CloseButton onClick={handleCloseModal}>
            <X />
          </CloseButton>
          <TitleText className={montserrat.className}>
            Adicionar Tarefa
          </TitleText>
          <TitleText></TitleText>
        </TitleContainer>
        <Formik
          initialValues={{
            nome: "",
            descricao: "",
            status: "pendente",
          }}
          validationSchema={Yup.object({
            nome: Yup.string().required("Required"),
            descricao: Yup.string().required("Required"),
            status: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await axios.post("http://localhost:8080/tarefas", values);
              setSubmitting(false);
              handleCloseModal();
              onAddTask(response.data);
            } catch (error) {
              console.error("Error creating task:", error);
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form style={{ width: "98%" }}>
              <ContentContainer>
                <DescriptionContainer>
                  <LabelText className={montserrat.className}>Nome:</LabelText>
                  <Field
                    as={StyledInput}
                    name="nome"
                    className={montserrat.className}
                  />
                </DescriptionContainer>
                <DescriptionContainer>
                  <LabelText className={montserrat.className}>
                    Descrição:
                  </LabelText>
                  <Field
                    as={StyledTextarea}
                    name="descricao"
                    className={montserrat.className}
                  />
                </DescriptionContainer>
                <SelectContainer>
                  <LabelText className={montserrat.className}>
                    Status:
                  </LabelText>
                  <Field
                    as={Select}
                    name="status"
                    className={montserrat.className}
                  >
                    <option value="pendente">Pendente</option>
                    <option value="em andamento">Em andamento</option>
                    <option value="concluída">Concluída</option>
                  </Field>
                </SelectContainer>
              </ContentContainer>
              <ButtonContainer>
                <ConfirmButton
                  type="submit"
                  disabled={isSubmitting}
                  className={montserrat.className}
                >
                  {isSubmitting ? "Aguarde..." : "Confirmar"}
                </ConfirmButton>
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      </MainContainer>
    </Overlay>
  );
}
