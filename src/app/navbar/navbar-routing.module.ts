import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { AuthGuard } from '../_core/auth/auth-guard.service';

const routes: Routes = [{
  path: '',
  component: NavbarComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    { path: '', redirectTo: 'autobot', pathMatch: 'full' },
    { path: 'autobot', loadChildren: () => import('../autobot/autobot.module').then(m => m.AutobotModule) },
    { path: 'campaigns', loadChildren: () => import('../campaigns/campaigns.module').then(m => m.CampaignsModule) },
    { path: 'contacts', loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule) },
    { path: 'persona', loadChildren: () => import('../personas/personas.module').then(m => m.PersonasModule) },
    { path: 'triggers', loadChildren: () => import('../triggers/triggers.module').then(m => m.TriggersModule) },
    { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
    { path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsModule) },
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
