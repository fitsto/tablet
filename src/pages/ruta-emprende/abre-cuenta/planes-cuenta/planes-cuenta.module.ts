import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanesCuentaPage } from './planes-cuenta';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    PlanesCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanesCuentaPage),
    ComponentsModule
  ],
})
export class PlanesCuentaPageModule {}
