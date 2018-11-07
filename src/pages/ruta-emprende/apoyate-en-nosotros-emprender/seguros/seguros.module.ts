import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegurosEmprendePage } from './seguros';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    SegurosEmprendePage,
  ],
  imports: [
    IonicPageModule.forChild(SegurosEmprendePage),
    ComponentsModule
  ],
})
export class SegurosEmprendePageModule {}
