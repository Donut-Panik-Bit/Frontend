import { FC, memo, useEffect, useState } from 'react';

import { Button } from '../../ui-kit/Button';
import { Box } from '../../ui-kit/Box';
import { BoxContent } from '../../ui-kit/BoxContent/BoxContent';
import { InputField } from '../../ui-kit/InputField';
import { Info } from '../../ui-kit/Info';

<<<<<<< HEAD
import { styled, theme } from '../../global-styles'
import { WrapperButtons } from "../../ui-kit/WrapperButtons";
import { Modal } from "../../ui-kit/Modal";
import { ModalInfo } from "../../ui-kit/ModalInfo";
import better from "../../utils/sounds/better.mp3";
import Dictaphone from "../../ui-kit/Dictaphone";
=======
import { styled, theme } from '../../global-styles';
import { WrapperButtons } from '../../ui-kit/WrapperButtons';
import { Modal } from '../../ui-kit/Modal';
import { ModalInfo } from '../../ui-kit/ModalInfo';
import better from '../../utils/sounds/better.mp3';
>>>>>>> 602c40c59845336791ce35e7619f32e26b26e389

const StyledButton = styled(Button)`
  background-color: ${theme.palette.white};
  color: ${theme.palette.main};
  border: 1px solid ${theme.palette.main};
`;

function play(sound: any) {
  new Audio(sound).play();
}

const _Home: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [name, setName] = useState('')
  // const [region, setRegion] = useState('')

  const isModalOpen = (isOpen: boolean) => {
    setModalOpen(isOpen);
  };

  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
    if (value === 1) {
      play(better);
    }
  }, [value]);

  return (
    <Box>
      <BoxContent header={'Новый проект'}>
        <Info
          header={'общее'}
          text={
            'Название проекта должно содержать в себе как описательную часть, так и творческую, креативную. При выборе региона - необходимо указать субъект Российской Федерации, в котором будет происходить реализация проекта! Учитывайте, что проект не может длиться более 1 календарного года. Обратите внимание на актуальность данных, а также на то, что руководителем проекта должно являться лицо, от имени которого подается заявка на Конкурс.'
          }
        />
        <InputField placeholder="Название проекта" />

<<<<<<< HEAD
          <InputField
            placeholder="Регион реализации проекта"
            value={region}
          />
          <WrapperButtons>
            <Dictaphone />
            <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
            <Button type="button" onClick={() => {{isModalOpen(true); setValue(1)}}}>{'СОЗДАТЬ ПРОЕКТ'}</Button>
          </WrapperButtons>
        </BoxContent>
        <Modal isVisible={modalOpen} onOverlayClick={() => isModalOpen(false)}>
              <ModalInfo isVisible={setModalOpen}>{'Знаю как улучшить!'}</ModalInfo>
            </Modal>
      </Box>
  )
}
=======
        <InputField placeholder="Регион реализации проекта" />
        <WrapperButtons>
          <StyledButton type="button">{'СОЗДАТЬ ЧЕРНОВИК'}</StyledButton>
          <Button
            type="button"
            onClick={() => {
              {
                isModalOpen(true);
                setValue(1);
              }
            }}
          >
            {'СОЗДАТЬ ПРОЕКТ'}
          </Button>
        </WrapperButtons>
      </BoxContent>
      <Modal isVisible={modalOpen} onOverlayClick={() => isModalOpen(false)}>
        <ModalInfo isVisible={setModalOpen}>{'Знаю как улучшить!'}</ModalInfo>
      </Modal>
    </Box>
  );
};
>>>>>>> 602c40c59845336791ce35e7619f32e26b26e389

export const Home = memo(_Home);
