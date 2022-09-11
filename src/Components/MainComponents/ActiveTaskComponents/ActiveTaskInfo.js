import React from "react";
import styled from "styled-components";
import ReturnImg from "../../../img/return.svg";
import InProgressImg from "../../../img/inprogress.svg";

const TaskInfoWraper = styled.div`
  width: 880px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
`;

const StatusText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #303034;
  margin-right: 38px;
`;

const Created = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #303034;
  margin-right: 38px;
`;

const DueDate = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #303034;
  margin-right: 38px;
`;

const Assigned = styled.p`
  min-width: 148px;
  font-size: 14px;
  line-height: 18px;
  color: #303034;
`;

const Completed = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #80859A;
  margin-right: 38px;
`;

const Status = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-right: 38px;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #424550;
  & img {
    margin-right: 4px;
  }
`;

const StartButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 10px 15px;
  gap: 6px;
  width: 90px;
  height: 40px;
  background: rgba(13, 96, 233, 0.05);
  border-radius: 5px;
  border: none;
  color: #0D60E9;
`;

export const ActiveTaskInfo = () => (
  <TaskInfoWraper>
    <StatusText>Some task status 123</StatusText>
    <Created>08/23</Created>
    <DueDate>08/28</DueDate>
    <Assigned>MR. Bob</Assigned>
    <Completed>----</Completed>
    <Status>
      <img src={InProgressImg} alt="img"/>
      In Progress
    </Status>
    <StartButton>
      Return
      <img src={ReturnImg} alt="img"/>  
    </StartButton>
  </TaskInfoWraper>
);