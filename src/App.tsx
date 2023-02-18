import { BrowserRouter as Router } from 'react-router-dom';

import { RootRouter } from './routes/routes'

export const App = () => {
  return <Router>{<RootRouter />}</Router>
}
