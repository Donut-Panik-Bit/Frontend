import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";

const _Team: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"команда проекта"} text={"Команда проекта – лица в возрасте от 14 до 35 лет. Желательно формировать команду проекта до 5 человек. Перечень функциональных обязанностей, указанных у руководителя проекта и команды проекта, должен охватить все направления, которые необходимы для успешной реализации проекта"} />
          <WrapperButtons>
            <Button type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</Button>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

export const Team = memo(_Team);