import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PotenciaTuNegocioPage } from './potencia-tu-negocio';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PotenciaTuNegocioPage,
  ],
  imports: [
    IonicPageModule.forChild(PotenciaTuNegocioPage),
    ComponentsModule
  ],
  entryComponents: [
    PotenciaTuNegocioPage
  ]
})
export class PotenciaTuNegocioPageModule {}
