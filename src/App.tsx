import { BrowserRouter as Router } from 'react-router-dom';

import { RootRouter } from './routes/routes';
import Chat from './components/Chat';

export const App = () => {
  return (
    <Router>
      <RootRouter />
      <Chat />
    </Router>
  );
};
