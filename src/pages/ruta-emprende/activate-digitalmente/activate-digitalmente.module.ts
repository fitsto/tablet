import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivateDigitalmentePage } from './activate-digitalmente';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ActivateDigitalmentePage,
  ],
  imports: [
    IonicPageModule.forChild(ActivateDigitalmentePage),
    ComponentsModule
  ],
  entryComponents: [
  ]
})
export class ActivateDigitalmentePageModule {}
