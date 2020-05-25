import * as model from './login.model';
import { loginReset, login, signup, recovery, reset, loginError, LoginError } from './login.constants';

describe('Login model', () => {

  describe('reducer', () => {

    it('should reset state on loginReset action', () => {
      expect(model.reducer({
        loading: true,
        error: LoginError.invalidInput
      }, loginReset()
      )).toEqual({
        loading: false,
        error: ''
      });
    });

    it('should switch loading on for login, signup, recovery, reset actions', () => {
      expect(model.reducer({ loading: false, error: '' }, login({} as any)).loading)
        .toEqual(true);
      expect(model.reducer({ loading: false, error: '' }, signup({} as any)).loading)
        .toEqual(true);
      expect(model.reducer({ loading: false, error: '' }, recovery({} as any)).loading)
        .toEqual(true);
      expect(model.reducer({ loading: false, error: '' }, reset({} as any)).loading)
        .toEqual(true);
    });

    it('should set error and loging off for loginError action', () => {
      expect(model.reducer({
        loading: true,
        error: ''
      }, loginError({ error: LoginError.invalidEmailOrPassword })
      )).toEqual({
        loading: false,
        error: LoginError.invalidEmailOrPassword
      });
    });

  });

});
