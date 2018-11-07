import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../../detalle/detalle';

/**
 * Generated class for the SegurosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seguros',
  templateUrl: 'seguros.html',
})

export class SegurosEmprendePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SegurosPage');
  }
  
  goMultiriesgo(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/seguros/multiriesgo.html',
      textUrl: 'Multiriesgo'
    });
  }

  goFraudePlus(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/seguros/fraudePlus.html',
      textUrl: 'Fraude Plus'
    });
  }

  goColectivo(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/seguros/colectivo.html',
      textUrl: 'Colectivo de Accidentes'
    });
  }

  goFlota(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/seguros/flota.html',
      textUrl: 'Flota'
    });
  }

  goVehiculos(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/seguros/vehiculos.html',
      textUrl: 'Vehículos Pesados'
    });
  }
}
