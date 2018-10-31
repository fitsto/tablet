import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegurosPage } from './seguros';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    SegurosPage,
  ],
  imports: [
    IonicPageModule.forChild(SegurosPage),
    ComponentsModule
  ],
})
export class SegurosPageModule {}
