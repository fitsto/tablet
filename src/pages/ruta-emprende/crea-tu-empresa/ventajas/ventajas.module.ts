import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VentajasPage } from './ventajas';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    VentajasPage
  ],
  imports: [
    IonicPageModule.forChild(VentajasPage),
    ComponentsModule
  ],
})
export class VentajasPageModule {}
