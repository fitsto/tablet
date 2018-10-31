import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComexPage } from './comex';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ComexPage,
  ],
  imports: [
    IonicPageModule.forChild(ComexPage),
    ComponentsModule
  ],
})
export class ComexPageModule {}
