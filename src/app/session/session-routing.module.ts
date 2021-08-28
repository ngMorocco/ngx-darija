import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './session.component';
import { SessionResolver } from './session.resolver';

const routes: Routes = [
  {
    path: ':videoId',
    component: SessionComponent,
    resolve: {
      session: SessionResolver
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule {}
