import { Route, BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './global/contexts/AuthContext';
import Home from './modules/Home';
import NewRoom from './modules/NewRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
