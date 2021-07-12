import { createElement } from 'react';
import { IViewProps } from './types';

import NewRoom from './view';

function NewRoomContainer() {
  const viewProps: IViewProps = {};

  return createElement(NewRoom, viewProps);
}

export default NewRoomContainer;
