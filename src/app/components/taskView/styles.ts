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
  height: 20rem;
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
  margin-top: 1%;
  width: 98%;
`;

export const TitleText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #232c33;
`;

export const DescriptionContainer = styled.div`
  margin-top: 2%;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  color: #232c33;
`;

export const DateText = styled.p`
  font-size: 15px;
  color: #232c33;
`;

export const LabelText = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #232c33;
  margin-right: 5px;
`;

export const SelectContainer = styled.div`
  margin-top: 5px;
`;

export const Select = styled.select`
  font-size: 15px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
  margin-right: 1rem;
  font-weight: bold;
`;
