import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InversionesPage } from './inversiones';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    InversionesPage,
  ],
  imports: [
    IonicPageModule.forChild(InversionesPage),
    ComponentsModule
  ],
})
export class InversionesPageModule {}
