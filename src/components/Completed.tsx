import React from 'react';
import styled from 'styled-components';

const StyledCompleted = styled.article`
  z-index: 10;
`;

interface CompletedProps {
  completed?: number;
  inputCount: number;
}

const Completed: React.FC<CompletedProps> = (props) => {
  return (
    <StyledCompleted>
      {props.completed + '/' + props.inputCount}
    </StyledCompleted>
  );
};

export default Completed;
