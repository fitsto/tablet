import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiposPage } from './tipos';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    TiposPage
  ],
  imports: [
    IonicPageModule.forChild(TiposPage),
    ComponentsModule
  ],
})
export class TiposPageModule {}
