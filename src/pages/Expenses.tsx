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

const _Expenses: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"Расходы"} text={"В запрашиваемую сумму проекта нужно включать только те необходимые ресурсы, которых нет ни у команды проекта, ни у партнеров, ни у спонсоров"} />
          <WrapperButtons>
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Expenses = memo(_Expenses);