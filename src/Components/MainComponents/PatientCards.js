import React from "react";
import styled from "styled-components";
import { ActiveTaskCard } from './ActiveTaskComponents/ActiveTaskCard';

const CardsWrapper = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px 34px;
  display: flex;
  border-bottom: 1px solid rgba(139, 144, 166, 0.2);
`;

export const PatientCards = () => (
  <CardsWrapper>
    <ActiveTaskCard/>
  </CardsWrapper>
);