import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './session.component';

const routes: Routes = [
  {
    path: ':videoId/:time',
    component: SessionComponent
  },
  {
    path: ':videoId',
    component: SessionComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
