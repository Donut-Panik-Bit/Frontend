import { FC, memo } from "react";

import { Button } from "../../ui-kit/Button";
import { paths } from '../../utils/pages'
import { styled } from '../../global-styles'
import { Dictaphone } from "../../ui-kit/Dictaphone";
import { Box } from "../../ui-kit/Box"
import { BoxContent } from "../../ui-kit/BoxContent/BoxContent";
import { BoopButton } from "../../utils/TextButton"

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color: black;

  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`

const _Home: FC = () => {
  return (
      <Box>
        <BoxContent header={"Новый проект"}></BoxContent>
          <Button type="button" href={paths.login}>{'кнопка'}</Button>
          <Dictaphone></Dictaphone>
          <BoopButton />
      </Box>
  )
}

export const Home = memo(_Home);