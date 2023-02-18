import React from 'react';
import styled from 'styled-components';

interface TimerProps {
  until: Date;
}

const StyledTimer = styled.div`
  margin-left: auto;
  color: #000;
  font-weight: 700;
  span {
    color: #fe8934;
  }
`;

const StyledDate = styled.span``;

const Timer: React.FC<TimerProps> = (props) => {
  const dateNow = new Date();
  const diff = (props.until.getTime() - dateNow.getTime()) / (1000 * 3600 * 24);
  return (
    <StyledTimer>
      До конца приема заявок осталось
      <StyledDate> {Math.floor(diff)} дней</StyledDate>
    </StyledTimer>
  );
};

export default Timer;
