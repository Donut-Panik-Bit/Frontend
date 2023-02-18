import { FC } from "react";

import { Dictaphone } from "../../ui-kit/Dictaphone";

import { styled } from '../../global-styles'
import { Box } from "../../ui-kit/Box";

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
`

export const Info: FC = () => {
  return (
    <Box>
        <Dictaphone></Dictaphone>
        <Text>Информация</Text>
    </Box>
  )
}
