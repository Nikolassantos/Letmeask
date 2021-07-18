import { ChangeEvent, createElement, FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../global/hooks/useAuth';
import useRoom from '../../global/hooks/useRoom';
import { database } from '../../services/firebase';

import { IViewProps, RoomParams } from './types';

import Room from './view';

function RoomContainer() {
  const [newQuestion, setNewQuestion] = useState('');
  const params = useParams<RoomParams>();
  const { user } = useAuth();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },

      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  async function handleNewQuestion(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewQuestion(event.target.value);
  }

  async function handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ) {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  }

  const viewProps: IViewProps = {
    handleSendQuestion,
    roomId,
    title,
    questions,
    newQuestion,
    handleNewQuestion,
    user,
    handleLikeQuestion,
  };

  return createElement(Room, viewProps);
}

export default RoomContainer;
