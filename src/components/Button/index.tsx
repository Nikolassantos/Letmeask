import '../../global/styles/button.scss';
import { ButtonProps } from './types';

function Button(props: ButtonProps) {
  return <button className="button" {...props} />;
}

export default Button;
