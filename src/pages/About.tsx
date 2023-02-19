import { FC, memo, useState } from "react";
import { Box } from "../ui-kit/Box";
import { styled, theme } from '../global-styles'
import { BoxContent } from "../ui-kit/BoxContent/BoxContent";
import { Info } from "../ui-kit/Info";
import { InputField } from "../ui-kit/InputField";
import { WrapperButtons } from "../ui-kit/WrapperButtons";
import { Button } from "../ui-kit/Button";
import { Modal } from "../ui-kit/Modal";
import { ModalInfo } from "../ui-kit/ModalInfo";

const StyledButton = styled(Button)`
  background-color: ${theme.palette.white};
  color: ${theme.palette.main};
  border: 1px solid ${theme.palette.main};
`

const _About: FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const isModalOpen = (isOpen: boolean) => {
    setModalOpen(isOpen)
  }
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
            <Button type="button" onClick={() => isModalOpen(true)}>{'СОЗДАТЬ ПРОЕКТ'}</Button>
            <Modal isVisible={modalOpen} onOverlayClick={() => isModalOpen(false)}>
              <ModalInfo isVisible={setModalOpen}>{'Попробуй ответить на вопросы: Какое полное название проекта? Какого формата твое мероприятие? На какую целевую аудиторию он направлен? Какую проблему решает, а также указать сроки проведения?'}</ModalInfo>
            </Modal>
          </WrapperButtons>

          
        </BoxContent>

            
      </Box>
    )
  }

  export const About = memo(_About);