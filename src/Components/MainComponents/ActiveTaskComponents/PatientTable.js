import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  position: relative;
  display: flex;
  height: 34px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #80859A;
  border-bottom: 1px solid rgba(139, 144, 166, 0.2);
  & p:first-child {
    position: absolute;
    top: 10px;
    left: 114px;
  }
  & p:nth-child(2) {
    position: absolute;
    top: 10px;
    left: 308px;
  }
  & p:nth-child(3) {
    position: absolute;
    top: 10px;
    right: 410px;
    & span {
      margin-right: 48px;
    }
  }
  & p:last-child {
    position: absolute;
    top: 10px;
    right: 180px;
    & span {
      margin-right: 42px;
    }
  }
`;

export const PatientTable = () => (
  <TableWrapper>
    <p>Patient</p>
    <p>Task</p>
    <p>
      <span>Created</span>
      <span>Due Date</span>
      <span>Assigned</span>
    </p>
    <p>
      <span>Completed</span>
      <span>Status</span>
    </p>
  </TableWrapper>
);