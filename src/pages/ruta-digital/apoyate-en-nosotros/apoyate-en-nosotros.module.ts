import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApoyateEnNosotrosPage } from './apoyate-en-nosotros';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ApoyateEnNosotrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ApoyateEnNosotrosPage),
    ComponentsModule
  ],
  entryComponents: [
    ApoyateEnNosotrosPage
  ]
})
export class ApoyateEnNosotrosPageModule {}
