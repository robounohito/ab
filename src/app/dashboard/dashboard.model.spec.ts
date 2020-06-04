import * as model from './dashboard.model';
import { loadDashboardSuccess } from './dashboard.constants';
import { Dashboard } from './dashboard.types';

describe('Dashboard model', () => {

  describe('reducer', () => {

    it('should load state on loadDashboardSuccess action', () => {
      expect(model.reducer({} as Dashboard,
        loadDashboardSuccess({
          outreachMetrics: {
            replied_rate: '1'
          } as Dashboard
        })
      )).toEqual({
        replied_rate: '1'
      } as Dashboard);
    });

  });

});
