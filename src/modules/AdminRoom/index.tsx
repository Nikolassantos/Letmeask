import { createElement } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import useRoom from '../../global/hooks/useRoom';
import { database } from '../../services/firebase';

import { IViewProps } from './types';

import Room from './view';

interface RoomParams {
  id: string;
}

function AdminRoomContainer() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const history = useHistory();

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleCheckQuestionAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  const viewProps: IViewProps = {
    handleEndRoom,
    handleDeleteQuestion,
    handleCheckQuestionAnswered,
    handleHighlightQuestion,
    roomId,
    title,
    questions,
  };

  return createElement(Room, viewProps);
}

export default AdminRoomContainer;
