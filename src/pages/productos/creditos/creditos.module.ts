import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditosPage } from './creditos';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    CreditosPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditosPage),
    ComponentsModule
  ],
})
export class CreditosPageModule {}
