import React from "react";
import styled from "styled-components";
import Burger from "../../../img/Burger.svg";
import RectangleLeft from '../../../img/RectangleLeft.svg';
import RectangleRight from '../../../img/RectangleRight.svg';

const TaskFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(139, 144, 166, 0.2);
`;

const FilterList = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #8B90A6;
`;

const FilterListImg = styled.img`
  margin-right: 10px;
`;

const PaginationWraper = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  background-color: inherit;
`;

export const ActiveTaskFilter = () => (
  <TaskFilter>
    <FilterList>
      <FilterListImg src={Burger} alt="burger" />
      Add filter
    </FilterList>
    <PaginationWraper>
      <PaginationButton href="#">
        <img src={RectangleLeft} className="Patient-rectangle-left" alt="left" />
      </PaginationButton>
      <PaginationButton href="#">
        <img src={RectangleRight} className="Patient-rectangle-right" alt="right" />
      </PaginationButton>
    </PaginationWraper>
  </TaskFilter>
);