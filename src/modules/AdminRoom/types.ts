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
  handleEndRoom(): void;
  handleDeleteQuestion(questionId: string): Promise<void>;
  handleCheckQuestionAnswered(questionId: string): Promise<void>;
  handleHighlightQuestion(questionId: string): Promise<void>;
  roomId: string;
  title: string;
  questions: QuestionProps[];
}
