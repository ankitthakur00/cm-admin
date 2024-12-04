import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  {
    path: 'user',
    title: 'User Dashboard',
    loadComponent: () => import('./user/user.component').then(c => c.UserComponent)
  },
  {
    path: 'admin',
    title: 'Admin Dashboard',
    loadComponent: () => import('./admin/admin.component').then(c => c.AdminComponent)
  },
  {
    path: 'finance',
    title: 'Finance Dashboard',
    loadComponent: () => import('./finance/finance.component').then(c => c.FinanceComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
