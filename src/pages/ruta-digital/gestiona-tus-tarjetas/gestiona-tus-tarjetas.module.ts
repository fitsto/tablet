import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionaTusTarjetasPage } from './gestiona-tus-tarjetas';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    GestionaTusTarjetasPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionaTusTarjetasPage),
    ComponentsModule
  ],
})
export class GestionaTusTarjetasPageModule {}
