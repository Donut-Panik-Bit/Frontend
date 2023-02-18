import { useRoutes } from 'react-router'

import { paths } from '../utils/pages'
import { Home } from '../pages/Home'
import { Info } from '../pages/Info'
import { About } from '../pages/About'
import { Calendar } from '../pages/Calendar'
import { Results } from '../pages/Results'
import { Team } from '../pages/Team'
import { Expenses } from '../pages/Expenses'
import { Media } from '../pages/Media'
import { Files } from '../pages/Files'
import { Finance } from '../pages/Finance'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.info,
      element: <Info />
    },
    {
      path: paths.about,
      element: <About />
    },
    {
      path: paths.calendar,
      element: <Calendar />
    },
    {
      path: paths.results,
      element: <Results />
    },
    {
      path: paths.team,
      element: <Team />
    },
    {
      path: paths.expenses,
      element: <Expenses />
    },
    {
      path: paths.finance,
      element: <Finance />
    },
    {
      path: paths.media,
      element: <Media />
    },
    {
      path: paths.files,
      element: <Files />
    },
  ])
  return <>{routes}</>
}