import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreaTuEmpresaPage } from './crea-tu-empresa';
import { ComponentsModule } from '../../../components/components.module';
import { DomicilioPageModule } from './domicilio/domicilio.module';
import { FirmaPageModule } from './firma/firma.module';
import { ConvienePageModule } from './conviene/conviene.module';
import { EstructuraPageModule } from './estructura/estructura.module';
import { TiposPageModule } from './tipos/tipos.module';
import { PasosPageModule } from './pasos/pasos.module';
import { VentajasPageModule } from './ventajas/ventajas.module';
import { AntesPageModule } from './antes/antes.module';

@NgModule({
  declarations: [
    CreaTuEmpresaPage
  ],
  imports: [
    IonicPageModule.forChild(CreaTuEmpresaPage),
    ComponentsModule,
    DomicilioPageModule,
    FirmaPageModule,
    ConvienePageModule,
    EstructuraPageModule,
    TiposPageModule,
    PasosPageModule,
    VentajasPageModule,
    AntesPageModule
  ],
  entryComponents: [
    CreaTuEmpresaPage
  ]
})
export class CreaTuEmpresaPageModule {}
