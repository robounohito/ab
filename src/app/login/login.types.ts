import { LoginError } from './login.constants';

export interface Login {
  loading: boolean;
  error: LoginError | '';
}
