import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncuestaPage } from './encuesta';
import { SantanderServiceProvider } from '../../providers/santander-service/santander-service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EncuestaPage
  ],
  imports: [
    IonicPageModule.forChild(EncuestaPage),
    ComponentsModule
  ],
  providers: [
    SantanderServiceProvider
  ],
  entryComponents: [
    EncuestaPage
  ]
})
export class EncuestaPageModule {}
