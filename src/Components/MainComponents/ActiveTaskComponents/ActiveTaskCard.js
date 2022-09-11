import React from "react";
import styled from "styled-components";
import GirlImg from "../../../img/Girl.png";
import dbPatient from "./dbPatient";
import { ActiveTaskInfo } from "../ActiveTaskComponents/ActiveTaskInfo";

const PatientWrap = styled.div`
  display: flex;
  border-right: 1px solid #88B6E6;
`;

const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 24px 0 20px
`;

const PatientName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #000000;
`;

const PatientData = styled.div`
  display: flex;
`;

const PatientId = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #80859A;
`;

const PatientRegistration = styled.p`
  margin-left: 32px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
  color: #80859A;
`;

export const ActiveTaskCard = () => (
  <>
    <PatientWrap patientInfo={dbPatient.info}>
      <img src={GirlImg} alt="img" />
      <PatientInfo>
        <PatientName>Bob<br/> Brown</PatientName>
        <PatientData>
          <PatientId>ID: <span>1</span></PatientId>
          <PatientRegistration>DOB: 08/23/2022</PatientRegistration>
        </PatientData>
      </PatientInfo>
    </PatientWrap>

    <ActiveTaskInfo/>
  </>
);