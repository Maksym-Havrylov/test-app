import React from "react";
import styled from "styled-components";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #fff;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-left: 16px;
  color: #0F2C49;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <H1>Logo</H1>
    </Logo>
  </NavBarStyled>
);