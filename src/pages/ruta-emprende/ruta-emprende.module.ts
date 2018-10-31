import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutaEmprendePage } from './ruta-emprende';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RutaEmprendePage
  ],
  imports: [
    IonicPageModule.forChild(RutaEmprendePage),
    ComponentsModule
  ],
  entryComponents: [
    RutaEmprendePage
  ]
})
export class RutaEmprendePageModule {}

