import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { styled, theme } from '../global-styles'
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.white};
  color: ${theme.palette.main};
  border: 1px solid ${theme.palette.main};
`

const _Calendar: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"Календарный план"} text={"Рекомендуется определять для проекта не более 5 задач. В рамках календарного плана все мероприятия проекта привязаны к задачам. Задачи автоматически перенесутся в пункт «Задачи» вкладки «О проекте». Соблюдайте хронологию мероприятий в рамках каждой задачи! Суммарные значения количественных показателей мероприятий календарного плана должны совпадать с количественными показателями, указанными во вкладке «Результаты». Уникальные участники - участники, которые не участвовали в предыдущих мероприятиях календарного плана»"} />
          <WrapperButtons>
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Calendar = memo(_Calendar);