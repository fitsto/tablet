import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TarjetasPage } from './tarjetas';
import { ComponentsModule } from '../../../components/components.module';


@NgModule({
  declarations: [
    TarjetasPage,
  ],
  imports: [
    IonicPageModule.forChild(TarjetasPage),
    ComponentsModule
  ],
})

export class TarjetasPageModule {}
