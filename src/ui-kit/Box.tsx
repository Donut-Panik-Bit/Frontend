import { FC, PropsWithChildren } from 'react';
import { styled } from '../global-styles'
import { Navbar } from './Navbar';
import { Navigation } from './Navigation';

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(0,0,0,0.3);
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  margin: 30px 60px;
`

const Content = styled.div`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
`

interface Props extends PropsWithChildren {
  className?: string;
}

export const Box: FC<Props> = ({ children }) => (
  <MainWrapper>
    <Navbar />
    <Wrapper>
      <Navigation />
      <Content>{children}</Content>
    </Wrapper>
  </MainWrapper>
);