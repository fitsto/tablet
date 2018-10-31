import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmaPage } from './firma';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    FirmaPage
  ],
  imports: [
    IonicPageModule.forChild(FirmaPage),
    ComponentsModule
  ],
})
export class FirmaPageModule {}
