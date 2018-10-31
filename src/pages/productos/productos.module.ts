import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosPage } from './productos';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProductosPage
  ],
  imports: [
    IonicPageModule.forChild(ProductosPage),
    ComponentsModule
  ],
  entryComponents: [
    ProductosPage
  ]
})
export class ProductosPageModule {}
