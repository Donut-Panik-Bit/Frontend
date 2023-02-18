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

const _Media: FC = () => {
    return (
        <Box>
            <Text>Общее</Text>
        </Box>
    )
  }

  export const Media = memo(_Media);