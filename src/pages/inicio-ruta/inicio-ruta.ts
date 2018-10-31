import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RutaDigitalPage } from '../ruta-digital/ruta-digital';
import { RutaEmprendePage } from '../ruta-emprende/ruta-emprende';

/**
 * Generated class for the InicioRutaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-ruta',
  templateUrl: 'inicio-ruta.html',
})
export class InicioRutaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioRutaPage');
  }
  
  goRutaEmprende():void{
    this.navCtrl.push(RutaEmprendePage);
  }

  goRutaDigital():void{
    this.navCtrl.push(RutaDigitalPage);
  }
}
