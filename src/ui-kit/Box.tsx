import { FC, PropsWithChildren } from 'react';
import { styled } from '../global-styles'
import { Navigation } from './Navigation';

const Wrapper = styled.div`
  display: flex;
  background-color: #999999;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Content = styled.div`
  width: 100%;
`

interface Props extends PropsWithChildren {
  className?: string;
}

export const Box: FC<Props> = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Content>{children}</Content>
  </Wrapper>
);