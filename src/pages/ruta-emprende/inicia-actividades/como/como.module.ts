import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComoPage } from './como';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ComoPage,
  ],
  imports: [
    IonicPageModule.forChild(ComoPage),
    ComponentsModule
  ],
})
export class ComoPageModule {}

