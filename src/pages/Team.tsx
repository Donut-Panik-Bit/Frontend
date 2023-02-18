import { FC, memo, useContext } from "react";
import { Box } from "../ui-kit/Box";
import { styled, theme } from '../global-styles'
const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
`

const _Team: FC = () => {
    return (
        <Box>
            <Text>Команда</Text>
        </Box>
    )
  }

  export const Team = memo(_Team);