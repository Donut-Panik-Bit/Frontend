import React, { PropsWithChildren } from 'react'

import { styled } from '../global-styles'

export type TextProps = {
  text: string
}

const StyledText = styled.p`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color: black;
`

export const Text: React.FC<PropsWithChildren<TextProps>> = ({ 
  text
}) => {
    return (
        <StyledText>{text}</StyledText>
    )
}
