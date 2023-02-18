import { FC, memo } from "react";

import { Button } from "../../ui-kit/Button";
import { Box } from "../../ui-kit/Box"
import { BoxContent } from "../../ui-kit/BoxContent/BoxContent";
import { InputField } from "../../ui-kit/InputField";
import { Info } from "../../ui-kit/Info";

import { styled, theme } from '../../global-styles'
import { WrapperButtons } from "../../ui-kit/WrapperButtons";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.white};
  color: ${theme.palette.main};
  border: 1px solid ${theme.palette.main};
`
const _Home: FC = () => {
  return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"общее"} text={"Название проекта должно содержать в себе как описательную часть, так и творческую, креативную. При выборе региона - необходимо указать субъект Российской Федерации, в котором будет происходить реализация проекта! Учитывайте, что проект не может длиться более 1 календарного года. Обратите внимание на актуальность данных, а также на то, что руководителем проекта должно являться лицо, от имени которого подается заявка на Конкурс."} />
          <InputField
            placeholder="Название проекта"
          />
          <InputField
            placeholder="Регион реализации проекта"
          />
          <WrapperButtons>
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
  )
}

export const Home = memo(_Home);