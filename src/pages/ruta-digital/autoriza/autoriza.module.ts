import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutorizaPage } from './autoriza';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    AutorizaPage,
  ],
  imports: [
    IonicPageModule.forChild(AutorizaPage),
    ComponentsModule
  ],
})
export class AutorizaPageModule {}
