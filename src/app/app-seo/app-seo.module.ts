import { NgModule } from '@angular/core';
import { SeoModule } from '@ngaox/seo';
import { AppSeoDefaults } from './app-seo.defaults';
import { AppSeoLaoder } from './app-seo.laoder';

@NgModule({
    imports: [
        SeoModule.forRoot(AppSeoDefaults, AppSeoLaoder)
    ],
    exports: [ SeoModule ]
})
export class AppSeoModule { }
