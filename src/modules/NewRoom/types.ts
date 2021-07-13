import { ChangeEvent, FormEvent } from 'react';

export interface IViewProps {
  handleCreateRoom(event: FormEvent): void;
  newRoom: string;
  handleNewRoom(event: ChangeEvent<HTMLInputElement>): void;
}
