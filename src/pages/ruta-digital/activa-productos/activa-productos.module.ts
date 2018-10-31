import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivaProductosPage } from './activa-productos';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    ActivaProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivaProductosPage),
    ComponentsModule
  ],
  entryComponents: [
    ActivaProductosPage
  ]
})
export class ActivaProductosPageModule {}
