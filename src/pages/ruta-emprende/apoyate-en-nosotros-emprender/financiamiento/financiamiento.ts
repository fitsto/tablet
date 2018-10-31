import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../../detalle/detalle';

/**
 * Generated class for the FinanciamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-financiamiento',
  templateUrl: 'financiamiento.html',
})
export class FinanciamientoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FinanciamientoPage');
  }

  goFactoring(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/financiamiento/factoring.html',
      textUrl: 'Factoring'
    });
  }

  goFactoringWeb(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/financiamiento/factoringWeb.html',
      textUrl: 'Factoring Web'
    });
  }

  goCreditosComerciales(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/financiamiento/comerciales.html',
      textUrl: 'Créditos Comerciales'
    });
  }

  goCreditoFogape(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/financiamiento/fogape.html',
      textUrl: 'Crédito con Garantía FOGAPE'
    });
  }

  goCreditoCorfo(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/financiamiento/corfo.html',
      textUrl: 'Crédito con Garantía CORFO'
    });
  }
}

