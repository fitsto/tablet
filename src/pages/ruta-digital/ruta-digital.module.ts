import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RutaDigitalPage } from './ruta-digital';
import { ComponentsModule } from '../../components/components.module';
import { IniciaActividadesPageModule } from '../ruta-emprende/inicia-actividades/inicia-actividades.module';
import { ApoyateEnNosotrosPageModule } from './apoyate-en-nosotros/apoyate-en-nosotros.module';
import { DisfrutaTuBancoPageModule } from './disfruta-tu-banco/disfruta-tu-banco.module';
import { OrganizaTusPagosPageModule } from './organiza-tus-pagos/organiza-tus-pagos.module';
import { GestionaTusTarjetasPageModule } from './gestiona-tus-tarjetas/gestiona-tus-tarjetas.module';
import { ManejaTuCuentaPageModule } from './maneja-tu-cuenta/maneja-tu-cuenta.module';
import { AutorizaPageModule } from './autoriza/autoriza.module';
import { ActivaProductosPageModule } from './activa-productos/activa-productos.module';

@NgModule({
  declarations: [
    RutaDigitalPage
  ],
  imports: [
    IonicPageModule.forChild(RutaDigitalPage),
    ComponentsModule,
    IniciaActividadesPageModule,
    ApoyateEnNosotrosPageModule,
    DisfrutaTuBancoPageModule,
    OrganizaTusPagosPageModule,
    GestionaTusTarjetasPageModule,
    ManejaTuCuentaPageModule,
    AutorizaPageModule,
    ActivaProductosPageModule
  ],
  entryComponents: [
    RutaDigitalPage
  ]
})
export class RutaDigitalPageModule {}
