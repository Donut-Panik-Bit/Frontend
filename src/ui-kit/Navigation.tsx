import { NavLink, useLocation } from 'react-router-dom'
import { css } from "styled-components"

import { styled, theme } from '../global-styles'
import { paths } from '../utils/pages'

const Sidebar = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  position: sticky;
  width: 323px;
  background-color: ${theme.palette.menu_color};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  
  height: 88px;
  gap: 8px;
  padding: 0 24px;

  background-color: ${theme.palette.menu_color};
`

const ProgresBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  
  height: 100px;
  gap: 8px;
  padding: 0 24px;
  border-top: 1px solid ${theme.palette.border_color};

  background-color: ${theme.palette.menu_color};
`

const ProgressText = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin-top: 20px;
  background-color: transparent;
  color:  ${theme.palette.main_text};

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`
const Progress = styled.progress`
  background: ${theme.palette.grayLight};
  height: 38px;
  width: 100%;
  border-radius: 10px;
  ::-webkit-progress-bar {
    background: ${theme.palette.grayLight};
    border-radius: 10px;
  }

  ::-webkit-progress-value {
    background: ${theme.palette.main};
    border-radius: 10px;
}
`

const Text = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;
  z-index: 100;

  background-color: transparent;
  color:  ${theme.palette.main_text};
  text-decoration: none !important;

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
`
const TextHeader = styled.div`
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0;

  background-color: transparent;
  color:  ${theme.palette.main_text};

  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`

const items = [
  {
    label: 'ОБЩЕЕ',
    path: paths.home
  },
  {
    label: 'О ПРОЕКТЕ',
    path: paths.about
  },
  {
    label: 'КОМАНДА',
    path: paths.team
  },
  {
    label: 'РЕЗУЛЬТАТЫ',
    path: paths.results
  },
  {
    label: 'КАЛЕНДАРНЫЙ ПЛАН',
    path: paths.calendar
  },
  {
    label: 'МЕДИА',
    path: paths.media
  },
  {
    label: 'СОФИНАНСИРОВАНИЕ',
    path: paths.finance
  },
  {
    label: 'ДОП.ФАЙЛЫ',
    path: paths.files
  },
  {
    label: 'РАСХОДЫ',
    path: paths.expenses
  }
]

const StyledNavLink = styled(NavLink)<{ active: boolean }>`
  background-color: ${theme.palette.menu_color};
  position: relative;
  text-decoration: none;
  transition: color 0.2s linear;

  cursor: pointer;
  display: flex;
  align-items: center;
  
  height: 64px;
  gap: 8px;
  padding: 0 24px;
  border-top: 1px solid ${theme.palette.border_color};

  &:hover {
    background-color: ${theme.palette.main};
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: '';
        position: absolute;
        background-color: ${theme.palette.main};
        width: 100%;
        height: 64px;
        left: 0;
        right: 0;
        text-align: center;
        border-radius: 4px;
        border-bottom: 4px solid ${theme.palette.main};
      }
    `}

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Navigation = () => {
  const location = useLocation()

    return (
        <Sidebar>
          <Header><TextHeader>Разделы</TextHeader></Header>
          {items.map((el, i) => (
            <StyledNavLink to={el.path} active={location.pathname === el.path} key={i}>
              <Text>
                {el.label}
              </Text>
            </StyledNavLink>
          ))}
          <ProgresBox>
            <ProgressText>ОБЩИЙ ПРОГРЕСС</ProgressText>
            <Progress max={100} value={70}></Progress>
          </ProgresBox>
        </Sidebar>
    )
}