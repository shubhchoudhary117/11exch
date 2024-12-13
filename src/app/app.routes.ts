import { Routes } from '@angular/router';
import { IndexPageComponent } from './Pages/index-page/index-page.component';


export const routes: Routes = [
  { path: '', component: IndexPageComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Fallback for invalid routes
];
