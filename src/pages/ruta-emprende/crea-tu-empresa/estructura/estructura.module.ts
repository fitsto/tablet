import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstructuraPage } from './estructura';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    EstructuraPage
  ],
  imports: [
    IonicPageModule.forChild(EstructuraPage),
    ComponentsModule
  ],
})
export class EstructuraPageModule {}
