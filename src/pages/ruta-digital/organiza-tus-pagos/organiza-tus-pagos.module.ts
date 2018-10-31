import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizaTusPagosPage } from './organiza-tus-pagos';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    OrganizaTusPagosPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizaTusPagosPage),
    ComponentsModule
  ],
})
export class OrganizaTusPagosPageModule {}
