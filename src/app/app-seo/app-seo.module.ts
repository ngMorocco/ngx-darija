import { NgModule } from '@angular/core';
import { SeoModule } from '@ngaox/seo';
import { AppSeoDefaults } from './app-seo.defaults';
import { AppSeoLoader } from './app-seo.loader';

@NgModule({
    imports: [
        SeoModule.forRoot(AppSeoDefaults, AppSeoLoader)
    ],
    exports: [ SeoModule ]
})
export class AppSeoModule { }
