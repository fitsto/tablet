import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomicilioPage } from './domicilio';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    DomicilioPage,
  ],
  imports: [
    IonicPageModule.forChild(DomicilioPage),
    ComponentsModule
  ],
})
export class DomicilioPageModule {}
