import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeneficiosPage } from './beneficios';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    BeneficiosPage
  ],
  imports: [
    IonicPageModule.forChild(BeneficiosPage),
    ComponentsModule
  ],
  entryComponents: [
    BeneficiosPage
  ]
})
export class BeneficiosPageModule {}
