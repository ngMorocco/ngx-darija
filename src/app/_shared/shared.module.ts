import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const DECLARATIONS = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule, RouterModule],
  exports: DECLARATIONS
})
export class SharedModule {}
