import { FC, memo } from 'react';

import { getStyles, styled, theme } from '../global-styles';

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  width: 180px;
`;

const Input = styled.textarea`
  display: inline-flex;
  align-self: start;
  border-radius: 4px;
  border: 1px solid #acb5bd;
  width: 100%;
  min-height: 32px;
  padding: 8px 16px 8px 16px;
  color: ${theme.palette.black};
  box-sizing: border-box;
  margin: 14px 40px;
  ${getStyles('height1')}

  transition-property: color, border, box-shadow;
  transition-duration: ${theme.transition.hover}ms;

  &::placeholder {
    ${getStyles('t8')}
    color: ${theme.palette.gray};
  }

  &:focus,
  &:active,
  &:target {
    border: 1px solid ${theme.palette.grayDark};
  }
`;
type InputProps = {
  value?: string;
  label?: string;
  placeholder?: string;
  onChange?: (text: string) => void;
};

const _InputField: FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      {label && <StyledText>{label}</StyledText>}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => (onChange ? onChange(e.target.value) : () => {})}
      />
    </Wrapper>
  );
};

export const InputField = memo(_InputField);
