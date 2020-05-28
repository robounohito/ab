import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { navbarMenu, loadSettings, blankProfiilePic } from './navbar.constants';
import { Store } from '@ngrx/store';
import { logout } from '../app.constants';
import { slideInOut } from '../_core/animations/animations';
import { Observable } from 'rxjs';
import { Navbar } from './navbar.types';
import { selectNavbar } from './navbar.model';

@Component({
  selector: 'autobound-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [slideInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NavbarComponent implements OnInit {

  navbarMenu = navbarMenu;
  blankProfiilePic = blankProfiilePic;
  model$!: Observable<Navbar>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(loadSettings());
    this.model$ = this.store.select(selectNavbar);
  }

  logout() {
    this.store.dispatch(logout());
  }

}
