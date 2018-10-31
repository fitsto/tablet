import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProductosPage } from '../pages/productos/productos';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SantanderServiceProvider } from '../providers/santander-service/santander-service';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { Network } from '@ionic-native/network';
import { GenioServiceProvider } from '../providers/genio-service/genio-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = LoginPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private sqlite: SQLite,
    private santanderService: SantanderServiceProvider,
    public toastService: ToastServiceProvider,
    private network: Network,
    public genioService: GenioServiceProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.createDatabase();
      this.conectado();
    });
  }

  private createDatabase(){
    this.sqlite.create({
      name: 'genius.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.santanderService.setDatabase(db);
        return this.santanderService.createTable();
      })
      .catch(e => {
        console.warn(e);
        this.toastService.presentToast(e);
      });
  }

  private conectado(){
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.toastService.presentToast('Sin Internet, solo guardado local');
      this.genioService.conectado = false;
    });

    this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      this.genioService.conectado = true;
    });
  }

  goDatosGenio():void{
    this.navCtrl.popToRoot();
  }

  goProductos():void{
    this.navCtrl.push(ProductosPage);
    //this.productosService.getBancas();
  }

  goBeneficios():void{
    this.navCtrl.push(BeneficiosPage);
  }

  cerrarSesion():void{
    this.navCtrl.popToRoot();
  }
}

