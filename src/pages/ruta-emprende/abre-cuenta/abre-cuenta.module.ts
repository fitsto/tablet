import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbreCuentaPage } from './abre-cuenta';
import { ComponentsModule } from '../../../components/components.module';
import { BeneficiosCuentaPageModule } from './beneficios-cuenta/beneficios-cuenta.module';
import { PlanesCuentaPageModule } from './planes-cuenta/planes-cuenta.module';
import { RequisitosCuentaPageModule } from './requisitos-cuenta/requisitos-cuenta.module';

@NgModule({
  declarations: [
    AbreCuentaPage
  ],
  imports: [
    IonicPageModule.forChild(AbreCuentaPage),
    ComponentsModule,
    BeneficiosCuentaPageModule,
    PlanesCuentaPageModule,
    RequisitosCuentaPageModule
  ],
  entryComponents: [
  ]
})
export class AbreCuentaPageModule {}
