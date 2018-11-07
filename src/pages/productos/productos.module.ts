import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductosPage } from './productos';
import { ComponentsModule } from '../../components/components.module';
import { CreditosPageModule } from './creditos/creditos.module';
import { InversionesPageModule } from './inversiones/inversiones.module';
import { PlanesPageModule } from './planes/planes.module';
import { SegurosPageModule } from './seguros/seguros.module';
import { TarjetasPageModule } from './tarjetas/tarjetas.module';

@NgModule({
  declarations: [
    ProductosPage
  ],
  imports: [
    IonicPageModule.forChild(ProductosPage),
    ComponentsModule,
    CreditosPageModule,
    InversionesPageModule,
    PlanesPageModule,
    SegurosPageModule,
    TarjetasPageModule
  ],
  entryComponents: [
    ProductosPage
  ]
})
export class ProductosPageModule {}
