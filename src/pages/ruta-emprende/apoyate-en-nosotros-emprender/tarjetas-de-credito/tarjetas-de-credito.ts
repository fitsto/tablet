import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../../detalle/detalle';

/**
 * Generated class for the TarjetasDeCreditoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tarjetas-de-credito',
  templateUrl: 'tarjetas-de-credito.html',
})
export class TarjetasDeCreditoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TarjetasDeCreditoPage');
  }

  goWorldmemberBusinessLATAM(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/tarjetas-de-credito/worldmemberBusinessLATAM.html',
      textUrl: 'Worldmember Business LATAM Pass'
    });
  }

  goEmpresasLATAM(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/tarjetas-de-credito/empresasLATAM.html',
      textUrl: 'Empresas LATAM Pass'
    });
  }

  goEmpresasVisa(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/tarjetas-de-credito/empresasVisa.html',
      textUrl: 'Empresas Visa'
    });
  }
}
