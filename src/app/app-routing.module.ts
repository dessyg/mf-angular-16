import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPackageComponent} from "./new-package/new-package.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'packages',
    pathMatch: 'full'
  },
  {
    path: 'new-package',
    component: NewPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
