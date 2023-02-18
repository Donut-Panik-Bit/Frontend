import { FC, PropsWithChildren } from 'react';
import { styled, theme } from '../../global-styles'

const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.palette.white};
  width: 100%;
  height: 88px;
  overflow: hidden;
  margin: 0;
`
const ContentText = styled.p`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color:  ${theme.palette.black};

  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`

interface Props extends PropsWithChildren {
  className?: string;
}

export const BoxContentHeader: FC<Props> = ({ children }) => (
  <Wrapper>
    <ContentText>{children}</ContentText>
  </Wrapper>
);