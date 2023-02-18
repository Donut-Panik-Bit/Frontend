import { FC, memo, useContext } from "react";
import { Button } from "../../ui-kit/Button";
import { paths } from '../../utils/pages'
import { AuthContext } from '../../shared/context/context'
import { styled } from '../../global-styles'
import { Dictaphone } from "../../ui-kit/Dictaphone";
import { MainBox } from "../../ui-kit/MainBox";
import { Box } from "../../ui-kit/Box"
import { Navigation } from "../../ui-kit/Navigation";

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color: black;

  font-weight: 700;
  font-size: 38px;
  line-height: 46px;
`

const _Home: FC = () => {
  return (
      <Box>
          <Button type="button" href={paths.login}>{'кнопка'}</Button>
          <Dictaphone></Dictaphone>
          <Text>Новый проект</Text>
      </Box>
  )
}

export const Home = memo(_Home);