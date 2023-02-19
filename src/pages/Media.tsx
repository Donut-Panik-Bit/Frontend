import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";
import Dictaphone from "../ui-kit/Dictaphone";

const _Media: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"медиа"} text={"В данном разделе необходимо сформировать развернутый контент-план информационного освещения проекта. Необходимо указать сроки для каждого этапа медиа-плана"} />
          <WrapperButtons>
            <Dictaphone />
            <Button type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</Button>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Media = memo(_Media);