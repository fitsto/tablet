import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisfrutaTuBancoPage } from './disfruta-tu-banco';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DisfrutaTuBancoPage,
  ],
  imports: [
    IonicPageModule.forChild(DisfrutaTuBancoPage),
    ComponentsModule
  ],
})
export class DisfrutaTuBancoPageModule {}
