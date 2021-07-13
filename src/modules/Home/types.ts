import { ChangeEvent, FormEvent } from 'react';

export interface IViewProps {
  handleCreateRoom(): void;
  handleJoinRoom(event: FormEvent): void;
  roomCode: string;
  handleSetRoom(event: ChangeEvent<HTMLInputElement>): void;
}
