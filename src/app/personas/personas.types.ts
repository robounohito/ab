import { Prospect } from '../app.types';

export interface Personas {
  loading: boolean;
  personas: Persona[];
  prospects: Prospect[];
}

export interface Persona {
  name: string;
}
