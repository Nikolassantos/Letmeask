import { Fragment } from 'react';
import { IViewProps } from './types';

import logoImg from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import RoomCode from '../../components/RoomCode';
import Question from '../../components/Question';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import deleteImg from '../../assets/images/delete.svg';

import '../../global/styles/room.scss';

function AdminRoom(props: IViewProps) {
  const {
    handleEndRoom,
    handleDeleteQuestion,
    handleCheckQuestionAnswered,
    handleHighlightQuestion,
    roomId,
    title,
    questions,
  } = props;

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
            >
              {!question.isAnswered && (
                <Fragment>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAnswered(question.id)}
                  >
                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque à pergunta" />
                  </button>
                </Fragment>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover Pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}

export default AdminRoom;
