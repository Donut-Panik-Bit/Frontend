import React, { PropsWithChildren, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

import { styled, theme } from '../global-styles'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: auto;
  height: auto;
  padding: 10px;
  top: 60%;
  right: 7%;

  z-index: 9999;
`

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: #FDE9CA;
  border-radius: 15px;
  padding: 0px;
  margin: 0;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform, ${theme.transition.hover}ms ease; 
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.3);

  &.open {
    opacity: 1;
    transform: scale(1);
  }

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid #FDE9CA;
    border-left: 12px solid transparent;
    border-top: 12px solid #FDE9CA;
    border-bottom: 20px solid transparent;
    right: 0;
    
    bottom: -24px;
  }
`

type Props = {
  isVisible: boolean
  onOverlayClick?: () => void
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  isVisible,
  onOverlayClick,
  children
}) => {
  const portal = document.getElementById('modal')
  const root = document.getElementById('root')
  const body = document.body

  const [isOpening, setIsOpening] = useState(isVisible)

  const isOpen = React.useMemo(() => !!portal && isVisible, [portal, isVisible])

  useEffect(() => {
    setIsOpening(isVisible)
  }, [isVisible])

  useEffect(() => {
    if (isOpen) {
      root?.classList.add('blur')
      body.classList.add('overflow-hidden')
    } else {
      root?.classList.remove('blur')
      body.classList.remove('overflow-hidden')
    }
  }, [isOpen, root, body])

  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <Wrapper onClick={onOverlayClick}>
      <Content
        className={isOpening ? 'open' : ''}
        onClick={(ev) => {
          ev.stopPropagation()
        }}
      >
        {children}
      </Content>
    </Wrapper>,
    portal!
  )
}