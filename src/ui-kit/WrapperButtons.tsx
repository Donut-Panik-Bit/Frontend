import { PropsWithChildren } from 'react'
import { styled } from '../global-styles'

const Wrapper = styled.div`
  right: 0;
  bottom: 0;
  display: block;
  margin-left: auto;
  flex-basis: 50%;
  text-align: right;
  white-space: nowrap;
  margin: 14px 40px;
`
export const WrapperButtons: React.FC<PropsWithChildren> = ({ children }) => {
      return (
          <Wrapper>{children}</Wrapper>
      )
  }