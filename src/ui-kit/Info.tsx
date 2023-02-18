import React, { PropsWithChildren } from 'react'

import { styled, theme } from '../global-styles'

export type TextProps = {
  header: string
  text: string
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: auto;
    height: auto;
    padding: 20px;
    margin: 14px 40px;
    background-color: ${theme.palette.menu_color};
`

const StyledHeader = styled.p`
  color: black;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
`

const StyledText = styled.p`
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const Info: React.FC<PropsWithChildren<TextProps>> = ({ text, header}) => {
    return (
        <Wrapper>
            <StyledHeader>{header}</StyledHeader>
            <StyledText>{text}</StyledText>
        </Wrapper>
    )
}