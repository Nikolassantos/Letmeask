import { ReactNode } from 'react';
import { User } from '../../interfaces/AuthContext';

export type AuthContextType = {
  user: User | undefined;
  signInWithGoogle(): Promise<void>;
};

export type AuthContextProviderProps = {
  children: ReactNode;
};
