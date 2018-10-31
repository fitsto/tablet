import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManejaTuCuentaPage } from './maneja-tu-cuenta';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ManejaTuCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(ManejaTuCuentaPage),
    ComponentsModule
  ],
})
export class ManejaTuCuentaPageModule {}
