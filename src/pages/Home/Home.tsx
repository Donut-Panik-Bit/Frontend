import { FC, memo, useContext } from "react";
import { Button } from "../../ui-kit/Button";
import { paths } from '../../utils/pages'
import { AuthContext } from '../../shared/context/context'
import { styled } from '../../global-styles'
import { Dictaphone } from "../../ui-kit/Dictaphone";

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  color: black;
`

const _Home: FC = () => {
  const { user } = useContext(AuthContext)
  console.log(user)
  return (
    <div>
      <Text>Привет {`${user?.nickname} ${user?.surname}`}</Text>
      <Button type="button" href={paths.login}>{'кнопка'}</Button>
      <Dictaphone></Dictaphone>
    </div>
  )
}

export const Home = memo(_Home);