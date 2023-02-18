import { FC, memo } from "react";
import { Box } from "../ui-kit/Box";
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";

const _Results: FC = () => {
    return (
      <Box>
        <BoxContent header={"Новый проект"}>
          <Info header={"результаты"} text={"В данном разделе отображается информация о результатах социального проекта, которые предполагается достичь в ходе его реализации в количественном и качественном выражении. Они являются критериями эффективности проекта. Количественные показатели вносятся как во вкладке «Результаты», так и в отдельных мероприятиях вкладки «Календарный план». Значения показателей, установленные в данной вкладке, автоматически переносятся в соглашение с победителем конкурса. Таким образом, в случае победы в конкурсе, вы будете обязаны отчитаться за установленные в данной вкладке значения показателей. Качественные показатели фиксируются в поле «Социальный эффект»"} />
          <WrapperButtons>
            <Button type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</Button>
            <Button type="button">{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
      </Box>
    )
  }

  export const Results = memo(_Results);