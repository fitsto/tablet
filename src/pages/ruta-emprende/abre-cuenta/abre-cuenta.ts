import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequisitosCuentaPage } from './requisitos-cuenta/requisitos-cuenta';
import { PlanesCuentaPage } from './planes-cuenta/planes-cuenta';
import { BeneficiosCuentaPage } from './beneficios-cuenta/beneficios-cuenta';

/**
 * Generated class for the AbreCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abre-cuenta',
  templateUrl: 'abre-cuenta.html',
})
export class AbreCuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbreCuentaPage');
  }

  goRequisitos():void{
    this.navCtrl.push(RequisitosCuentaPage);
  }

  goPlanes():void{
    this.navCtrl.push(PlanesCuentaPage);
  }

  goBeneficios():void{
    this.navCtrl.push(BeneficiosCuentaPage);
  }

}

