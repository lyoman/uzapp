import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './tebs/tebs.module#TebsPageModule' },
  { path: 'teb1', loadChildren: './teb1/teb1.module#Teb1PageModule' },
  { path: 'teb2', loadChildren: './teb2/teb2.module#Teb2PageModule' },
  { path: 'teb3', loadChildren: './teb3/teb3.module#Teb3PageModule' },
  { path: 'guest', loadChildren: './auth/guest/guest.module#GuestPageModule' },
  { path: 'sport', loadChildren: './campusservices/sport/sport.module#SportPageModule' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'security', loadChildren: './campusservices/security/security.module#SecurityPageModule' },
  { path: 'contactsecurity', loadChildren: './campusservices/security/contactsecurity/contactsecurity.module#ContactsecurityPageModule' },
  { path: 'callsecurity', loadChildren: './campusservices/security/contactsecurity/callsecurity/callsecurity.module#CallsecurityPageModule' },
  { path: 'directory', loadChildren: './campusservices/directory/directory.module#DirectoryPageModule' },
  { path: 'department', loadChildren: './campusservices/directory/department/department.module#DepartmentPageModule' },
  { path: 'calendar', loadChildren: './events/calendar/calendar.module#CalendarPageModule' },
  { path: 'meals', loadChildren: './food/meals/meals.module#MealsPageModule' },
  { path: 'order', loadChildren: './food/order/order.module#OrderPageModule' },
  { path: 'clinic', loadChildren: './clinic/clinic/clinic.module#ClinicPageModule' },
  { path: 'ambulance', loadChildren: './clinic/ambulance/ambulance.module#AmbulancePageModule' },
  { path: 'drugsearch', loadChildren: './clinic/drugsearch/drugsearch.module#DrugsearchPageModule' },
  { path: 'drugdetail', loadChildren: './clinic/drugdetail/drugdetail.module#DrugdetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
