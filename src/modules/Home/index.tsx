import { createElement } from 'react';
import { IViewProps } from './types';
import { useHistory } from 'react-router-dom';

import Home from './view';
import useAuth from '../../global/hooks/useAuth';

function HomeContainer() {
  const { user, signInWithGoogle } = useAuth();

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  const viewProps: IViewProps = {
    handleCreateRoom,
  };

  return createElement(Home, viewProps);
}

export default HomeContainer;
