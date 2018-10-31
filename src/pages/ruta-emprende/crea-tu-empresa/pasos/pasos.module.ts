import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PasosPage } from './pasos';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PasosPage
  ],
  imports: [
    IonicPageModule.forChild(PasosPage),
    ComponentsModule
  ],
})
export class PasosPageModule {}
