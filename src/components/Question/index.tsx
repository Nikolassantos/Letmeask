import { IQuestionProps } from './types';

import './styles.scss';

function Question(props: IQuestionProps) {
  return (
    <div className="question">
      <p>{props.content}</p>
      <footer>
        <div className="user-info">
          <img src={props.author.avatar} alt={props.author.name} />
          <span>{props.author.name}</span>
        </div>
        <div>{props.children}</div>
      </footer>
    </div>
  );
}

export default Question;
