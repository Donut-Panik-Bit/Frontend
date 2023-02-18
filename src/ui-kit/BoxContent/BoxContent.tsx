import { FC, PropsWithChildren } from 'react';
import { styled, theme } from '../../global-styles'
import arrow from '../../global-styles/icons/ar.svg'

const Wrapper = styled.div`
  position: sticky;
  display: flex;
  background-color: ${theme.palette.white};
  overflow: hidden;
  flex-direction: column;
`

const ContentTextWrapper = styled.div`
  display: flex;
  align-items: center;
  
  height: 88px;
  padding: 0 24px;

  background-color: ${theme.palette.white};
  width: 100%;
  height: 88px;
  border-bottom: 1px solid ${theme.palette.border_color};
`

const ContentText = styled.p`
  padding-left: 18px;
  color:  ${theme.palette.black};

  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`
const StyledIcon = styled.img`
  padding-left: 20px;
  width: 22px;
  height: 22px;
`

export type BoxProps = {
  header: string
}

export const BoxContent: FC<PropsWithChildren<BoxProps>> = ({ children, header }) => (
  <Wrapper>
    <ContentTextWrapper>
      <StyledIcon src={arrow} />
      <ContentText>
        {header}
      </ContentText>
    </ContentTextWrapper>
    {children}
  </Wrapper>
);