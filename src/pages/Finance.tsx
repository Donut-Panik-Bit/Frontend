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

const _Finance: FC = () => {
    return (
      <Box>
        <BoxContent header={"Софинансирование"}>
          <Info header={"Софинансирование"} text={"Указываются ресурсы, которые есть у команды проекта в наличии до подачи заявки на грантовый конкурс. При указании партнеров проекта - необходимо документальное подтверждение (письма поддержки)!"} />
          <WrapperButtons>
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Finance = memo(_Finance);