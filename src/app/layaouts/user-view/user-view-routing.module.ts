import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view.component';


const routes: Routes = [
  { path: '', component: UserViewComponent,
    /* children: [
      {
        path: "",
        loadChildren: () => import('../../modules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
      },
      {
        path: "home",
        loadChildren: () => import('../../modules/home/home.module').then(mod => mod.HomeModule),
      }
    ] */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }