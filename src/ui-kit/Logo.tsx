import { styled } from '../global-styles'
import m from '../global-styles/icons/m.svg'
import r from '../global-styles/icons/r.svg'
import logo from '../global-styles/icons/logo.svg'

const LogoWrapper = styled.div`
  position: relative;
`
const Img = styled.img`
  margin: 0px;
  padding: 0px;
  float: left;
  font-size: 0;
  border: 0;
`

const ImgText = styled(Img)`
  margin: 0px;
  padding: 0px;
  float: left;
  font-size: 0;
  border: 0;
  padding-left: 20px;
  width: 173px;
  height: 25px;
`

export const Logo: React.FC = () => {
    return (
        <LogoWrapper>
          <Img src={m} alt="logo" />
          <Img src={r} alt="logo" />
          <ImgText src={logo} alt="logo" />
        </LogoWrapper>
    )
}