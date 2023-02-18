import React from 'react';

import styled from 'styled-components';

import {ReactComponent as CloseButtonIcon} from '../assets/icons/basil_cross-outline.svg'
import {ReactComponent as MicroButtonIcon} from '../assets/icons/Micro.svg'

const StyledChat = styled.div`
  font-family: 'PT Root UI', sans-serif;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 530px;
  height: 675px;
  display: flex;
  flex-direction: column;
  border-radius: 20px !important;
  border-collapse: separate;
  color: #2E2F33;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

const Header = styled.header`
  height: 80px;
  background-color: #FAA419;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  border-radius: 20px 20px 0 0;
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
`;

const CloseButton = styled(CloseButtonIcon)`
  cursor: pointer;
`;

const Messages = styled.main`
  flex-grow: 1;
  padding: 24px;
`;

const Message = styled.article`
`;

const IncomingMessage = styled(Message)``;

const OutgoingMessage = styled(Message)``;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 0 0 20px 20px ;
  padding: 0 12px 0 24px;
`;

const MessageInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: #F1F1F5;
  border-radius: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 12px 36px 12px 24px;
  word-break: break-word;
`;

const Control = styled.div`
  display: flex;
  position: relative;
  margin-left: 16px;
  
  &:after {
    content: '';
    display: block;
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: #FAA419;
    left: 50%;
    transform: translateX(-50%);
  }
`;


const Button = styled.div`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-color: #FAA419;
`;

const Chat = () => {
  return (
    <StyledChat>
      <Header>
        <Heading>Помощник Гранат</Heading>
        <CloseButton />
      </Header>
      <Messages>
        <IncomingMessage>ASasdasd</IncomingMessage>
        <OutgoingMessage>Aasdasd</OutgoingMessage>
      </Messages>
      <Footer>
        <MessageInput/>
        <Control>
          <Button></Button>
          <Button></Button>
        </Control>
      </Footer>
    </StyledChat>
  );
};

export default Chat;
