import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: #071108;
  }
  color: white;
  font-size: 1.4em;
`;

interface Props {
  text?: string;
}

const SidebarButton: React.FC<Props> = ({ text, children }) => {
  return (
    <ButtonWrapper>
      <Button>
        {text && text}
        {children}
      </Button>
    </ButtonWrapper>
  );
};

export default SidebarButton;
