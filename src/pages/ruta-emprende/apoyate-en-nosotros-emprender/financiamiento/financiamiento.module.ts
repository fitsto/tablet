import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinanciamientoPage } from './financiamiento';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FinanciamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(FinanciamientoPage),
    ComponentsModule
  ],
})
export class FinanciamientoPageModule {}
