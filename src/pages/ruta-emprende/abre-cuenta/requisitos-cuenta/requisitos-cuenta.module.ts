import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequisitosCuentaPage } from './requisitos-cuenta';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    RequisitosCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(RequisitosCuentaPage),
    ComponentsModule
  ],
})
export class RequisitosCuentaPageModule {}

