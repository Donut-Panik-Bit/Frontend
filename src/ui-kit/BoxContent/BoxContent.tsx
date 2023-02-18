import { FC, PropsWithChildren } from 'react';
import { styled, theme } from '../../global-styles'

const Wrapper = styled.div`
  display: flex;
  background-color: ${theme.palette.white};
  width: 100%;
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

export type BoxProps = {
  header: string
}

export const BoxContent: FC<PropsWithChildren<BoxProps>> = ({ header }) => (
  <Wrapper>
      <ContentText>
        {header}
      </ContentText>
  </Wrapper>
);