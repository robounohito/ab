import * as model from './app.model';
import { readTokenSuccess } from './app.constants';
import { CurrentUser } from './app.types';

describe('App model', () => {

  describe('reducer', () => {

    it('should set state on readTokenSuccess action', () => {
      expect(model.reducers.shared({
        currentUser: {
          authToken: null
        } as CurrentUser
      }, readTokenSuccess({ authToken: '123' })
      )).toEqual({
        currentUser: {
          authToken: '123'
        } as CurrentUser
      });
    });

  });

});
