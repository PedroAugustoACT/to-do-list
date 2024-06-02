import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

export const MainContainer = styled.div`
  display: flex;
  background-color: #ecf0f2;
  border: 1px solid black;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #232c33;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

export const DescriptionContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const LabelText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #232c33;
  margin-bottom: 5px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #232c33;
  border-radius: 4px;
  margin-top: 5px;
  font-size: 14px;
  color: #232c33;
  background-color: transparent;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #232c33;
  border-radius: 4px;
  margin-top: 5px;
  font-size: 14px;
  color: #232c33;
  background-color: transparent;
  resize: none;
`;

export const SelectContainer = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const OptionContainer = styled.div`
  margin-top: 5px;

  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #232c33;
    border-radius: 4px;
    font-size: 14px;
    color: #232c33;
    background-color: transparent;
  }
`;

export const CloseButton = styled.button`
  color: #ff6347;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  margin-left: 0.6rem;
  font-weight: bold;
`;

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ConfirmButton = styled.button`
  margin-top: 4%;
  padding: 10px 20px;
  background-color: #232c33;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;
