import { IQuestionProps } from './types';
import className from 'classnames';

import './styles.scss';

function Question(props: IQuestionProps) {
  const {
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
  } = props;

  return (
    <div
      className={className(
        'question',
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}

export default Question;
