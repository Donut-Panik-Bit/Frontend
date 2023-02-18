import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { styled } from '../global-styles'



const ResetButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  background-color: aquamarine;
  height: 30px;
  width: 100px;
  font-family: 'Montserrat';
`

export type ButtonProps = {
  className?: string
  href?: string
  type?: 'button' | 'submit'
  onClick?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  type = 'button',
  className,
  href,
  onClick,
  children
}) => {
  if (href) {
    return (
        <Link to={href}>
            <ResetButton
            type={type}
            className={className}
            onClick={onClick}
            onMouseDown={(ev: { preventDefault: () => any }) => ev.preventDefault()}
        >
        {children}
      </ResetButton>
      </Link>
    )
  } else {
    return (
        <ResetButton
        type={type}
        className={className}
        onClick={onClick}
        onMouseDown={(ev: { preventDefault: () => any }) => ev.preventDefault()}
      >
        {children}
      </ResetButton>
    )
  }
}
