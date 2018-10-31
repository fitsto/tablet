import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciaActividadesPage } from './inicia-actividades';
import { ComponentsModule } from '../../../components/components.module';
import { FacturacionPageModule } from './facturacion/facturacion.module';
import { RequisitosCuentaPageModule } from '../abre-cuenta/requisitos-cuenta/requisitos-cuenta.module';
import { ComoPageModule } from './como/como.module';

@NgModule({
  declarations: [
    IniciaActividadesPage
  ],
  imports: [
    IonicPageModule.forChild(IniciaActividadesPage),
    ComponentsModule,
    FacturacionPageModule,
    RequisitosCuentaPageModule,
    ComoPageModule
  ],
  entryComponents: [
  ]
})
export class IniciaActividadesPageModule {}
