import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { styled, theme } from '../global-styles'
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { InputField } from "../ui-kit/InputField";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.white};
  color: ${theme.palette.main};
  border: 1px solid ${theme.palette.main};
`

const _About: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"О ПРОЕКТЕ"} text={"В разделе необходимо дать понятное изложение всего проекта, инициативы (от названия, целевой аудитории, проблемы до содержания, наполнения и ожидаемого результата по его реализации). Задачи заполняются автоматически после того, как будет оформлен календарный план проекта. В Географии проекта вы можете указать детальную информацию о географии вашего проекта (муниципальное образование, город, село и др.)"} />
          <InputField
            placeholder="Краткая информация о проекте"
          />
          <InputField
            placeholder="Описание проблемы, решению/снижению которой посвящен проект"
          />
          <InputField
            placeholder="Основные целевые группы, на которые направлен проект"
          />
          <WrapperButtons>
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const About = memo(_About);