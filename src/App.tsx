import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AuthContextProvider from './global/contexts/AuthContext';
import AdminRoom from './modules/AdminRoom';
import Home from './modules/Home';
import NewRoom from './modules/NewRoom';
import Room from './modules/Room';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
