import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../../detalle/detalle';

/**
 * Generated class for the ProductosDerivadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos-derivados',
  templateUrl: 'productos-derivados.html',
})
export class ProductosDerivadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ProductosDerivadosPage');
  }

  goForward(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/productos-derivados/forward.html',
      textUrl: 'Seguros de Cambio (Forward)'
    });
  }

  goSwapTasa(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/productos-derivados/swapTasa.html',
      textUrl: 'Swap de Tasas de Interés'
    });
  }

  
  goOpcionesFinancieras(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/apoyate-en-nosotros/productos-derivados/opcionesFinancieras.html',
      textUrl: 'Opciones Financieras'
    });
  }

}

