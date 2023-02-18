import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import { styled, theme } from '../global-styles'

const ResetButton = styled.button`
  border: 0;
  outline: 0;
  padding: 0;
  margin-left: 20px;
  cursor: pointer;
  background-color: ${theme.palette.main};
  height: 48px;
  width: 182px;
  border-radius: 4px;
  color: ${theme.palette.white};
  font-size: 12px;
  font-weight: 700;
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
