import { FC, memo, useCallback, useState } from "react";

import { Button } from "../../ui-kit/Button";
import { paths } from '../../utils/pages'
import { styled, theme } from '../../global-styles'
import { Dictaphone } from "../../ui-kit/Dictaphone";
import { Box } from "../../ui-kit/Box"
import { BoxContent } from "../../ui-kit/BoxContent/BoxContent";
import { InputField } from "../../ui-kit/InputField";



const _Home: FC = () => {
  return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <InputField
            placeholder="Краткая информация о проекте"
          />
          <InputField
            placeholder="Описание проблемы, решению/снижению которой посвящен проект"
          />
          <InputField
            placeholder="Основные целевые группы, на которые направлен проект"
          />
          <Button type="button" href={paths.login}>{'кнопка'}</Button>
          <Dictaphone></Dictaphone>
        </BoxContent>
          
      </Box>
  )
}

export const Home = memo(_Home);