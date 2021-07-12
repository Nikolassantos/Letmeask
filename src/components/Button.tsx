import { ButtonHTMLAttributes } from 'react';

import '../global/styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  return <button className="button" {...props} />;
}

export default Button;
