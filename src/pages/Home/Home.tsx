import { FC, memo } from "react";

import { Button } from "../../ui-kit/Button";
import { paths } from '../../utils/pages'
import { styled, theme } from '../../global-styles'
import { Dictaphone } from "../../ui-kit/Dictaphone";
import { Box } from "../../ui-kit/Box"
import { BoxContent } from "../../ui-kit/BoxContent/BoxContent";

const _Home: FC = () => {
  return (
      <Box>
        <BoxContent header={"Новый проект"}>

        </BoxContent>
          <Button type="button" href={paths.login}>{'кнопка'}</Button>
          <Dictaphone></Dictaphone>
      </Box>
  )
}

export const Home = memo(_Home);