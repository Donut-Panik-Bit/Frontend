import { FC, PropsWithChildren } from 'react';
import { styled, theme } from '../../global-styles'

const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.palette.white};
  overflow: hidden;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
`

const ContentTextWrapper = styled.div`
  width: 100%;
  height: 88px;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
`

const ContentText = styled.p`
  
  background-color: transparent;
  color:  ${theme.palette.black};

  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`

export type BoxProps = {
  header: string
}

export const BoxContent: FC<PropsWithChildren<BoxProps>> = ({ header }) => (
  <Wrapper>
    <ContentTextWrapper>
      <ContentText>
        {header}
      </ContentText>
    </ContentTextWrapper>
  </Wrapper>
);