import { FooterGeniusComponent } from './footer-genius/footer-genius';
import { NgModule } from '@angular/core';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb';
import { IonicPageModule } from 'ionic-angular';
import { HeaderGeniusComponentModule } from './header-genius/header-genius.module';
import { HeaderGeniusComponent } from './header-genius/header-genius';
@NgModule({
	declarations: [
    BreadCrumbComponent,
    FooterGeniusComponent,
    HeaderGeniusComponent],
	imports: [
        IonicPageModule.forChild(ComponentsModule),
        HeaderGeniusComponentModule
    ],
	exports: [
    BreadCrumbComponent,
    FooterGeniusComponent,
    HeaderGeniusComponent]
})
export class ComponentsModule {}
