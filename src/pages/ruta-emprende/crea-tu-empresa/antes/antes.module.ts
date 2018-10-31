import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntesPage } from './antes';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    AntesPage
  ],
  imports: [
    IonicPageModule.forChild(AntesPage),
    ComponentsModule
  ],
})
export class AntesPageModule {}
