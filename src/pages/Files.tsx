import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";

const _Files: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"доп. файлы"} text={"В данном разделе размещаются любые важные для формирования у эксперта понимания файлы, касающиеся твоего проекта. К примеру: письма поддержки, презентационные материалы проекта, материалы подтверждающие прошлый опыт, материалы опросов и исследований и др."} />
          <WrapperButtons>
            <Button type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</Button>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Files = memo(_Files);