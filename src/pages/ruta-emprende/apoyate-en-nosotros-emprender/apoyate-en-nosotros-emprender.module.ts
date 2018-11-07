import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApoyateEnNosotrosEmprenderPage } from './apoyate-en-nosotros-emprender';
import { ComponentsModule } from '../../../components/components.module';
import { ComexPageModule } from './comex/comex.module';
import { ProductosDerivadosPageModule } from './productos-derivados/productos-derivados.module';
import { TarjetasDeCreditoPageModule } from './tarjetas-de-credito/tarjetas-de-credito.module';
import { SegurosEmprendePageModule } from './seguros/seguros.module';
import { FinanciamientoPageModule } from './financiamiento/financiamiento.module';

@NgModule({
  declarations: [
    ApoyateEnNosotrosEmprenderPage
  ],
  imports: [
    IonicPageModule.forChild(ApoyateEnNosotrosEmprenderPage),
    ComponentsModule,
    ComexPageModule,
    ProductosDerivadosPageModule,
    TarjetasDeCreditoPageModule,
    SegurosEmprendePageModule,
    FinanciamientoPageModule
  ],
  entryComponents: [
    ApoyateEnNosotrosEmprenderPage
  ]
})
export class ApoyateEnNosotrosEmprenderPageModule {}
