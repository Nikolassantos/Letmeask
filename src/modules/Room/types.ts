import { ChangeEvent, FormEvent } from 'react';
import { IQuestionProps } from '../../components/Question/types';
import { User } from '../../global/interfaces/AuthContext';

type QuestionProps = {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
  likeCount: number;
  likeId: string | undefined;
};

export interface IViewProps {
  handleSendQuestion(event: FormEvent): void;
  roomId: string;
  title: string;
  questions: QuestionProps[];
  newQuestion: string;
  handleNewQuestion(event: ChangeEvent<HTMLTextAreaElement>): Promise<void>;
  user: User | undefined;
  handleLikeQuestion(
    questionId: string,
    likeId: string | undefined
  ): Promise<void>;
}

export interface RoomParams {
  id: string;
}
