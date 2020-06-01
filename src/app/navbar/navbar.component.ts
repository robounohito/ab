import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { navbarMenu } from './navbar.constants';
import { Store } from '@ngrx/store';
import { logout, loadUserProfile } from '../app.constants';
import { slideInOut, routerFadeAnimation } from '../_core/animations/animations';
import { Observable } from 'rxjs';
import { ApiService } from '../_core/api/api.service';
import { selectCurrentUser } from '../app.model';
import { CurrentUser, App } from '../app.types';

@Component({
  selector: 'autobound-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [slideInOut, routerFadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NavbarComponent implements OnInit {

  navbarMenu = navbarMenu;
  model$!: Observable<CurrentUser>;

  constructor(
    private store: Store<App>,
    public api: ApiService,
  ) { }

  ngOnInit() {
    this.model$ = this.store.select(selectCurrentUser);
    this.store.dispatch(loadUserProfile());
  }

  logout() {
    this.store.dispatch(logout());
  }

}
