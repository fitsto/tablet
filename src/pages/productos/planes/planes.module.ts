import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanesPage } from './planes';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PlanesPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanesPage),
    ComponentsModule
  ],
})
export class PlanesPageModule {}
