import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeneficiosCuentaPage } from './beneficios-cuenta';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    BeneficiosCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(BeneficiosCuentaPage),
    ComponentsModule
  ],
})
export class BeneficiosCuentaPageModule {}
