import { ChangeEvent, createElement, FormEvent, useState } from 'react';
import { IViewProps } from './types';
import { useHistory } from 'react-router-dom';

import Home from './view';
import useAuth from '../../global/hooks/useAuth';
import { database } from '../../services/firebase';

function HomeContainer() {
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  const history = useHistory();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleSetRoom(event: ChangeEvent<HTMLInputElement>) {
    setRoomCode(event.target.value);
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed.');
    }
    history.push(`/rooms/${roomCode}`);
  }

  const viewProps: IViewProps = {
    handleCreateRoom,
    handleJoinRoom,
    roomCode,
    handleSetRoom,
  };

  return createElement(Home, viewProps);
}

export default HomeContainer;
