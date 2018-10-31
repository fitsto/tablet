import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturacionPage } from './facturacion';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FacturacionPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturacionPage),
    ComponentsModule
  ],
})
export class FacturacionPageModule {}
