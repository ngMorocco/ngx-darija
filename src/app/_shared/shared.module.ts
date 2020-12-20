import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const DECLARATIONS = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: DECLARATIONS,
})
export class SharedModule {}
