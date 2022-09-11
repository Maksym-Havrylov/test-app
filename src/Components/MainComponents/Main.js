import React from "react";
import styled from "styled-components";
import { ActiveTaskFilter } from "./ActiveTaskComponents/ActiveTaskFilter";
import { PatientTable } from "./ActiveTaskComponents/PatientTable";
import { PatientCards } from "./PatientCards";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
`;

const ActiveTaskList = styled.div`
  background: #FFFFFF;
  width: 100%;
  margin-top: 8px;
  height: auto;
`;

const PatientCardsWraper = styled.div`
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Main = () => (
  <Container>
    <ActiveTaskList>
      <ActiveTaskFilter/>
      <PatientTable/>
      <PatientCardsWraper>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
        <PatientCards/>
      </PatientCardsWraper>
    </ActiveTaskList>
  </Container>
);