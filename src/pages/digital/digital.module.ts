import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigitalPage } from './digital';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DigitalPage
  ],
  imports: [
    IonicPageModule.forChild(DigitalPage),
    ComponentsModule
  ],
  entryComponents: [
    DigitalPage
  ]
})
export class DigitalPageModule {}
