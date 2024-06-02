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
  width: 30rem;
  height: 17rem;
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
  margin-top: 0.6%;
  width: 98%;
`;

export const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #232c33;
  margin-top: 3%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3%;
  width: 50%;
`;

export const DescriptionContainer = styled.div`
  margin-top: 4%;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  color: #232c33;
  margin-top: 2%;
`;

export const DateText = styled.p`
  font-size: 15px;
  color: #232c33;
  margin-top: 2%;
`;

export const LabelText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #232c33;
  margin-right: 5px;
`;

export const SelectContainer = styled.div`
  margin-top: 4%;
`;

export const OptionContainer = styled.div`
  margin-top: 3%;
`;

export const Select = styled.select`
  font-size: 15px;
  padding: 5px;
  border: 1px solid #232c33;
  border-radius: 4px;
  color: #232c33;
  background-color: transparent;
`;

export const Option = styled.option`
  font-size: 15px;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  color: #ff6347;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  background-color: transparent;
  margin-right: 0.6rem;
  margin-left: 0.6rem;
  font-weight: bold;
`;
