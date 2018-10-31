import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarjetasDeCreditoPage } from './tarjetas-de-credito';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    TarjetasDeCreditoPage,
  ],
  imports: [
    IonicPageModule.forChild(TarjetasDeCreditoPage),
    ComponentsModule
  ],
})
export class TarjetasDeCreditoPageModule {}
