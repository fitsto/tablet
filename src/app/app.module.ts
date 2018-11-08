import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClienteServiceProvider } from '../providers/cliente-service/cliente-service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderGeniusComponent } from '../components/header-genius/header-genius';
import { RutProvider } from '../providers/rut/rut';
import { GenioServiceProvider } from '../providers/genio-service/genio-service';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { ProductosServiceProvider } from '../providers/productos-service/productos-service';
import { FooterGeniusComponent } from '../components/footer-genius/footer-genius';
import { BreadCrumbComponent } from '../components/bread-crumb/bread-crumb';
import { CreaTuEmpresaPageModule } from '../pages/ruta-emprende/crea-tu-empresa/crea-tu-empresa.module';
import { IniciaActividadesPageModule } from '../pages/ruta-emprende/inicia-actividades/inicia-actividades.module';
import { ComponentsModule } from '../components/components.module';
import { AbreCuentaPageModule } from '../pages/ruta-emprende/abre-cuenta/abre-cuenta.module';
import { ActivateDigitalmentePageModule } from '../pages/ruta-emprende/activate-digitalmente/activate-digitalmente.module';
import { RutaDigitalPageModule } from '../pages/ruta-digital/ruta-digital.module';
import { DisenaTuWebPageModule } from '../pages/ruta-emprende/disena-tu-web/disena-tu-web.module';
import { ApoyateEnNosotrosEmprenderPageModule } from '../pages/ruta-emprende/apoyate-en-nosotros-emprender/apoyate-en-nosotros-emprender.module';
import { PotenciaTuNegocioPageModule } from '../pages/ruta-emprende/potencia-tu-negocio/potencia-tu-negocio.module';
import { SantanderServiceProvider } from '../providers/santander-service/santander-service';
import { Network } from '@ionic-native/network';
import { DirectivesModule } from '../directives/directives.module';
import { BeneficiosPageModule } from '../pages/beneficios/beneficios.module';
import { ClientePageModule } from '../pages/cliente/cliente.module';
import { DetallePageModule } from '../pages/detalle/detalle.module';
import { DigitalPageModule } from '../pages/digital/digital.module';
import { EncuestaPageModule } from '../pages/encuesta/encuesta.module';
import { InicioRutaPageModule } from '../pages/inicio-ruta/inicio-ruta.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProductosPageModule } from '../pages/productos/productos.module';
import { RutaEmprendePageModule } from '../pages/ruta-emprende/ruta-emprende.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    DirectivesModule,
    CreaTuEmpresaPageModule,
    IniciaActividadesPageModule,
    AbreCuentaPageModule,
    ActivateDigitalmentePageModule,
    DisenaTuWebPageModule,
    ApoyateEnNosotrosEmprenderPageModule,
    PotenciaTuNegocioPageModule,
    ComponentsModule,
    RutaDigitalPageModule,
    BeneficiosPageModule,
    ClientePageModule,
    DetallePageModule,
    DigitalPageModule,
    EncuestaPageModule,
    InicioRutaPageModule,
    LoginPageModule,
    ProductosPageModule,
    RutaEmprendePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeaderGeniusComponent,
    /*************CreaTuEmpresaPage************** */
    
    /*************IniciaActividadesPage************** */
    //IniciaActividadesPage,
    /************************************************ */
    FooterGeniusComponent,
    BreadCrumbComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteServiceProvider,
    RutProvider,
    GenioServiceProvider,
    ToastServiceProvider,
    ProductosServiceProvider,
    SantanderServiceProvider
  ]
})
export class AppModule {}
