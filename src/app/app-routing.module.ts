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
  { path: 'calendar', loadChildren: './events/calendar/calendar.module#CalendarPageModule' },
  { path: 'meals', loadChildren: './food/meals/meals.module#MealsPageModule' },
  { path: 'order', loadChildren: './food/order/order.module#OrderPageModule' },
  { path: 'clinic', loadChildren: './clinic/clinic/clinic.module#ClinicPageModule' },
  { path: 'ambulance', loadChildren: './clinic/ambulance/ambulance.module#AmbulancePageModule' },
  { path: 'drugsearch', loadChildren: './clinic/drugsearch/drugsearch.module#DrugsearchPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
