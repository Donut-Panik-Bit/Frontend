import { FC } from "react";
import { styled } from '../global-styles'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 40px 32px;
`

const Info = styled.div`
  display: block;
  box-sizing: border-box;
  margin: 0 -8px 24px;
  padding: 16px 16px;
  background-color: var(--color-gray-1);
  border-radius: 4px;
  width: 100%;
  height: 167px;
`

export const MainBox: FC = () => {
    return (
       <Wrapper>
            <Info>
            В разделе необходимо дать понятное изложение всего проекта, инициативы (от названия, целевой аудитории, проблемы до содержания, наполнения и ожидаемого результата по его реализации).
            Задачи заполняются автоматически после того, как будет оформлен календарный план проекта.
            В Географии проекта вы можете указать детальную информацию о географии вашего проекта (муниципальное образование, город, село и др.)
            </Info>
       </Wrapper>
    )
}