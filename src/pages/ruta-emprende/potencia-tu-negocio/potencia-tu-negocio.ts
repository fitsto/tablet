import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the PotenciaTuNegocioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potencia-tu-negocio',
  templateUrl: 'potencia-tu-negocio.html',
})
export class PotenciaTuNegocioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PotenciaTuNegocioPage');
  }

  goSantanderTrade(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/potencia-tu-negocio/santanderTrade.html',
      textUrl: 'Santander Tradeiones'
    });
  }

  goComunidadWorkCafe(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/potencia-tu-negocio/comunidadWC.html',
      textUrl: 'Comunidad Work Café'
    });
  }

  goOficinasWorkCafe(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/potencia-tu-negocio/oficinasWC.html',
      textUrl: 'Oficinas Work Café'
    });
  }

  goCharlas(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/potencia-tu-negocio/charlas.html',
      textUrl: 'Charlas'
    });
  }

  goASECH(){
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/potencia-tu-negocio/ASECH.html',
      textUrl: 'ASECH'
    });
  }
}
