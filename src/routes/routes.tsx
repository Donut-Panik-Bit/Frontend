import { useRoutes } from 'react-router'

import { paths } from '../utils/pages'
import { Home } from '../pages/Home'
import { Info } from '../pages/Info'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.info,
      element: <Info />
    }
  ])
  return <>{routes}</>
}