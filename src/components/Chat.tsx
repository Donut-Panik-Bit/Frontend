import React from 'react';

import styled from 'styled-components';

import {ReactComponent as CloseButtonIcon} from '../assets/svg/basil_cross-outline.svg'
import {ReactComponent as MicroButtonIcon} from '../assets/svg/Micro.svg'
import {ReactComponent as SendButtonIcon} from '../assets/svg/Send.svg'
import {ReactComponent as Granat} from '../assets/svg/Granat.svg'
import {ReactComponent as GranatRightLeg} from '../assets/svg/Granat-right-leg.svg'
import {ReactComponent as GranatLeftLeg} from '../assets/svg/Granat-left-leg.svg'

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
  z-index: 2;
`;

const StyledGranat = styled(Granat)`
  position: absolute;
  right: 30px;
  top: -80px;
`;

const StyledGranatRightLeg = styled(GranatRightLeg)`
  position: absolute;
  right: 72px;
  top: -15px;
  z-index: 3;
`;

const StyledGranatLeftLeg = styled(GranatLeftLeg)`
  position: absolute;
  right: 35px;
  top: -15px;
  z-index: 3;
`;

const Header = styled.header`
  height: 80px;
  background-color: #FAA419;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  border-radius: 20px 20px 0 0;
  z-index: 2;
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
  background-color: #fff;
  z-index: 100;
  flex-grow: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Message = styled.article`
  padding: 20px;
  max-width: 320px;
  word-break: break-word;
  line-height: 24px;
  margin-bottom: 20px;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }

  z-index: 2;
`;

const IncomingMessage = styled(Message)`
  background-color: #EAEAEF;
  align-self: flex-start;
  border-radius: 20px 20px 20px 0;
`;

const OutgoingMessage = styled(Message)`
  background-color: #FAA419;
  align-self: flex-end;
  border-radius: 20px 20px 0 20px;
`;

const Footer = styled.form`
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 0 0 20px 20px;
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

const Divider = styled.div`
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 2px;
  height: 70%;
  background-color: #DC762B;
  border-radius: 20px;
`;


const Button = styled.button`
  border: none;
  outline: none;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-color: #FAA419;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }
`;

const Chat = () => {
  return (
    <StyledChat>
      <Header>
        <Heading>Помощник Гранат</Heading>
        <CloseButton/>
      </Header>
      <Messages>
        <IncomingMessage>asdasdasdasdasdasdasdasdasdasdasdasdasdasd</IncomingMessage>
        <OutgoingMessage>AasdasdaAaAasdasdaAasdasdaAasdasdaAasdasdaAasdasdaAasdasda</OutgoingMessage>
        <OutgoingMessage>AasdasdaAasdasdaAasdasdaAasdasdaAasdsdaAasdasdaAasdasda</OutgoingMessage>
        <IncomingMessage>asdasd</IncomingMessage>
        <OutgoingMessage>AasdasdaAasdasdasdasdaAasdasdaAasdasdaAasdasdaAasdasda</OutgoingMessage>
        <OutgoingMessage>AasdasdaAasdasdaAasdasdaAasdasdaAasdasdaAasdasdaAasdasdaAasdasda</OutgoingMessage>
      </Messages>
      <Footer>
        <MessageInput/>
        <Control>
          <Button>
            <MicroButtonIcon/>
          </Button>
          <Divider/>
          <Button>
            <SendButtonIcon/>
          </Button>
        </Control>
      </Footer>
      <StyledGranat/>
      <StyledGranatRightLeg />
      <StyledGranatLeftLeg />
    </StyledChat>
  );
};

export default Chat;
