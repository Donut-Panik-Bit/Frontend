import { styled, theme } from '../global-styles'

import { Logo } from './Logo'
import ar from '../global-styles/icons/exit2.svg'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 10px 30px 10px;
    justify-content: space-between;
`

const WrapperIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-left: 50px;
    right: 0;
`

const Navigation = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-left: 143px;
`
const Text = styled.span`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    cursor: pointer;
    &:hover {
        color: ${theme.palette.main};
    }
`

const Circle = styled.div`
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: ${theme.palette.main};
`

export const Navbar: React.FC = () => {
    return (
      <Wrapper>
        <Logo />
        <Navigation>
            <Text>Главная</Text>
            <Text>Часто задаваемые вопросы</Text>
            <Text>База знаний</Text>
            <Text>Академия Росмолодёжь.Гранты</Text>
        </Navigation>
        <WrapperIcons>
            <Circle />
            <Circle />
            <img src={ar} alt="exit" width="25px" height="25px" />
        </WrapperIcons>
      </Wrapper>
    )
}