import React, { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import { ReactComponent as CloseButtonIcon } from '../assets/svg/basil_cross-outline.svg';
import { ReactComponent as MicroButtonIcon } from '../assets/svg/Micro.svg';
import { ReactComponent as SendButtonIcon } from '../assets/svg/Send.svg';
import { ReactComponent as Granat } from '../assets/svg/Granat.svg';
import { ReactComponent as GranatRightLeg } from '../assets/svg/Granat-right-leg.svg';
import { ReactComponent as GranatLeftLeg } from '../assets/svg/Granat-left-leg.svg';
import { ReactComponent as GranatLogo } from '../assets/svg/Granat-button.svg';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useNavigate } from 'react-router-dom';
import { paths } from '../utils/pages';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const GranatButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  background: #fde9ca;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledGranatLogo = styled(GranatLogo)`
  width: 53px;
  height: 53px;
`;

const StyledChat = styled.div`
  font-family: 'PT Root UI', sans-serif;
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 430px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 20px !important;
  border-collapse: separate;
  color: #2e2f33;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  z-index: 2;
`;

const StyledGranat = styled(Granat)`
  position: absolute;
  right: 55px;
  top: -80px;
`;

const StyledGranatRightLeg = styled(GranatRightLeg)`
  position: absolute;
  right: 97px;
  top: -15px;
  z-index: 3;
`;

const StyledGranatLeftLeg = styled(GranatLeftLeg)`
  position: absolute;
  right: 60px;
  top: -15px;
  z-index: 3;
`;

const Header = styled.header`
  height: 55px;
  background-color: #faa419;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-radius: 20px 20px 0 0;
  z-index: 2;
`;

const Heading = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 34px;
`;

const CloseButton = styled(CloseButtonIcon)`
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

const Messages = styled.main`
  background-color: #fff;
  z-index: 100;
  flex-grow: 1;
  padding: 15px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100%;
`;

const Message = styled.article`
  padding: 10px 15px;
  max-width: 300px;
  word-break: break-word;
  line-height: 1.35;
  margin-bottom: 10px;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }

  z-index: 2;
`;

const IncomingMessage = styled(Message)`
  background-color: #eaeaef;
  align-self: flex-start;
  border-radius: 20px 20px 20px 0;
`;

const OutgoingMessage = styled(Message)`
  background-color: #c2abef;
  align-self: flex-end;
  border-radius: 20px 20px 0 20px;
`;

const Footer = styled.form`
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 70px;
  border-radius: 0 0 20px 20px;
  padding: 10px 25px 10px 15px;
`;

const MessageInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  border: none;
  outline: none;
  background: #f1f1f5;
  border-radius: 20px;
  font-weight: 500;
  line-height: 24px;
  padding: 12px 36px 12px 24px;
`;

const Control = styled.div`
  display: flex;
  position: relative;
  margin-left: 16px;

  //&:after {
  //  content: '';
  //  display: block;
  //  width: 50%;
  //  height: 100%;
  //  position: absolute;
  //  background-color: #faa419;
  //  left: 50%;
  //  transform: translateX(-50%);
  //}
`;

// const Divider = styled.div`
//   position: absolute;
//   z-index: 10;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   width: 2px;
//   height: 70%;
//   background-color: #dc762b;
//   border-radius: 20px;
// `;

const Button = styled.button<{
  isActive?: boolean;
}>`
  border: none;
  outline: none;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-color: #faa419;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
    scale: ${(props) => (props.isActive ? '1.1' : '1')};
  }
`;

const StyledMicroIcon = styled(MicroButtonIcon)<{
  isActive: boolean;
}>`
  scale: ${(props) => (props.isActive ? '1.2' : '1')};
`;

interface Message {
  isIncome: boolean;
  value: string;
}

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    {
      isIncome: true,
      value: 'Привет, я - Гранат!',
    },
    {
      isIncome: true,
      value:
        'Буду твоим личным помощником в разработке грантовой заявки для твоей идеи. Буду помогать тебе во время работы с разными разделами платформы.',
    },
    {
      isIncome: true,
      value: 'Будут вопросы - обращайся!',
    },
  ]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  const chatRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);
  const userInputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  type IcommandOpen = {
    command: string;
    callback: (site: any) => void;
  };

  const commands: IcommandOpen[] = [
    {
      command: 'посмотреть информацию',
      callback: () => navigate(paths.info),
    },
    {
      command: 'посмотреть главную',
      callback: () => navigate(paths.home),
    },
  ];

  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    commands,
  });

  useEffect(() => {
    const ws = new WebSocket('ws://92.63.102.121/v1/ws/1');
    ws.onopen = () => console.log('open');
    ws.onmessage = (e) => {
      setMessages((prev) => [
        ...prev,
        {
          isIncome: true,
          value: e.data,
        },
      ]);
    };
    ws.onclose = () => console.log('close');
    setWs(ws);
    userInputRef?.current?.focus();
  }, [setMessages]);

  useEffect(() => {
    if (isOpen) {
      userInputRef?.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setUserMessage(transcript);
  }, [transcript]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    SpeechRecognition.stopListening();
    event.preventDefault();
    if (!userMessage) return;
    if (ws) {
      ws.send(userMessage);
    }
    setMessages((prev) => [
      ...prev,
      {
        isIncome: false,
        value: userMessage,
      },
    ]);
    setUserMessage('');
    userInputRef?.current?.focus();
    resetTranscript();
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!userMessage) {
      event.preventDefault();
      if (!listening) {
        resetTranscript();
        SpeechRecognition.startListening({
          continuous: true,
          language: 'ru-RU',
        });
      } else {
        SpeechRecognition.stopListening();
      }
    }
  };

  return isOpen ? (
    <StyledChat ref={chatRef}>
      <Header>
        <Heading>Помощник Гранат</Heading>
        <CloseButton onClick={() => setIsOpen(false)} />
      </Header>
      <Messages>
        {messages.map((message, index) =>
          message.isIncome ? (
            <IncomingMessage key={message.value + index}>
              {message.value}
            </IncomingMessage>
          ) : (
            <OutgoingMessage key={message.value + index}>
              {message.value}
            </OutgoingMessage>
          )
        )}
      </Messages>
      <Footer onSubmit={handleSubmit}>
        <MessageInput
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
            SpeechRecognition.stopListening();
          }}
          ref={userInputRef}
        />
        <Control>
          <Button onClick={handleButtonClick} type={'submit'}>
            {userMessage ? <SendButtonIcon /> : <MicroButtonIcon />}
          </Button>
        </Control>
      </Footer>
      <StyledGranat />
      <StyledGranatRightLeg />
      <StyledGranatLeftLeg />
    </StyledChat>
  ) : (
    <GranatButton
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <StyledGranatLogo />
    </GranatButton>
  );
};

export default Chat;
