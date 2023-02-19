import { FC, memo, PropsWithChildren } from 'react'
import { styled } from '../global-styles'

import krestik from '../global-styles/icons/krestik.svg'

type Props = {
  isVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  
  width: 350px;
  min-height: 150px;
  background-color: #FDE9CA;;
  border-radius: 24px;
`

const Text = styled.p`
  padding: 10px 30px;
  margin-top: 16px;

  color: #2E2F33;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`

const Close = styled.img`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 10px;
  z-index: 1;
`

export const _ModalInfo: FC<PropsWithChildren<Props>> = ({ isVisible, children }) => {
  return (
    <Wrapper>
      <Close src={krestik} alt="close" onClick={() => isVisible(false)} />
      <Text>
        {children}
      </Text>
    </Wrapper>
  )
}

export const ModalInfo = memo(_ModalInfo)