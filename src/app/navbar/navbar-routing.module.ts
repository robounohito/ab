import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [{
  path: '',
  component: NavbarComponent,
  children: [
    { path: 'autobot', loadChildren: () => import('../autobot/autobot.module').then(m => m.AutobotModule) },
    { path: 'campaigns', loadChildren: () => import('../campaigns/campaigns.module').then(m => m.CampaignsModule) },
    { path: 'contacts', loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule) },
    { path: 'persona', loadChildren: () => import('../personas/personas.module').then(m => m.PersonasModule) },
    { path: 'triggers', loadChildren: () => import('../triggers/triggers.module').then(m => m.TriggersModule) },
    { path: 'settings', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule) },
    { path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsModule) },
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }
