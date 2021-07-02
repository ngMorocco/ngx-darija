import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

const DECLARATIONS = [NavbarComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS
})
export class NavbarModule {}
