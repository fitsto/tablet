import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequisitosPage } from './requisitos';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    RequisitosPage,
  ],
  imports: [
    IonicPageModule.forChild(RequisitosPage),
    ComponentsModule
  ],
})
export class RequisitosPageModule {}
