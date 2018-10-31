import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientePage } from './cliente';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ClientePage
  ],
  imports: [
    IonicPageModule.forChild(ClientePage),
    ComponentsModule
  ],
  entryComponents: [
    ClientePage
  ]
})
export class ClientePageModule {}
