import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisenaTuWebPage } from './disena-tu-web';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    DisenaTuWebPage,
  ],
  imports: [
    IonicPageModule.forChild(DisenaTuWebPage),
    ComponentsModule
  ],
  entryComponents: [
    DisenaTuWebPage
  ]
})
export class DisenaTuWebPageModule {}
