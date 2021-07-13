import { FormEvent, useState, ChangeEvent } from 'react';
import { createElement } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../global/hooks/useAuth';
import { database } from '../../services/firebase';
import { IViewProps } from './types';

import NewRoom from './view';

function NewRoomContainer() {
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  async function handleNewRoom(event: ChangeEvent<HTMLInputElement>) {
    setNewRoom(event.target.value);
  }

  const viewProps: IViewProps = {
    handleCreateRoom,
    newRoom,
    handleNewRoom,
  };

  return createElement(NewRoom, viewProps);
}

export default NewRoomContainer;
