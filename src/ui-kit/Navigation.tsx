import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom'

import { styled, theme } from '../global-styles'
import { Home } from "../pages/Home"
import { Info } from "../pages/Info"
import { paths } from '../utils/pages'

const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 400px;
  background-color: white;
`

const ItemBar = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 64px;
  gap: 8px;
  padding: 0 24px;

  background-color: ${({ isActive }) =>
    isActive ? 'rgba(181, 193, 225, 0.3)' : 'white'};

  transition: background ${theme.transition.hover}ms;

  &:hover {
    background-color: rgba(181, 193, 225, 0.3);
  }
`

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color: black;
  text-decoration: none !important;

  font-weight: 500;
  font-size: 28px;
  line-height: 46px;
`




const items = [
  {
    label: 'Общее',
    path: paths.home
  },
  {
    label: 'О проекте',
    path: paths.info
  },
  {
    label: 'Команда',
    path: paths.home
  },
  {
    label: 'РЕЗУЛЬТАТЫ',
    path: paths.info
  },
  {
    label: 'КАЛЕНДАРНЫЙ ПЛАН',
    path: paths.home
  }
]

export const Navigation = () => {
  const navigate = useNavigate()
  const [panelBarIdx, setPanelBarIdx] = useState(0)

    return (
      <div>
        <Sidebar>
          {items.map((el, i) => (
            <Link to={el.path} style={{ textDecoration: 'none' }}>
            <ItemBar
              isActive={i === panelBarIdx}
              onClick={() => setPanelBarIdx(i)}
              key={i}
            >
              <Text>
                {el.label}
              </Text>
            </ItemBar>
            </Link>
          ))}
        </Sidebar>
      </div>
    )
}