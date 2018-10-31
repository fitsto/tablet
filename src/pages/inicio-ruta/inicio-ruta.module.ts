import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioRutaPage } from './inicio-ruta';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InicioRutaPage
  ],
  imports: [
    IonicPageModule.forChild(InicioRutaPage),
    ComponentsModule
  ],
  entryComponents: [
    InicioRutaPage
  ]
})
export class InicioRutaPageModule {}

