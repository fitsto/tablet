import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosDerivadosPage } from './productos-derivados';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ProductosDerivadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductosDerivadosPage),
    ComponentsModule
  ],
})
export class ProductosDerivadosPageModule {}
