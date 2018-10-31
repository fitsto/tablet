import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the ActivateDigitalmentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activate-digitalmente',
  templateUrl: 'activate-digitalmente.html',
})
export class ActivateDigitalmentePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ActivateDigitalmentePage');
  }
  
  goOfficeBanking():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/activate-digitalmente/OfficeBanking.html',
      textUrl: 'Office Banking'
    });
  }

  goFuncionalidad():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/activate-digitalmente/funcionalidadesOffice.html',
      textUrl: 'Funcionalidades de Office Banking'
    });
  }

  goFacturacion():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-emprende/activate-digitalmente/facturacion.html',
      textUrl: 'Sistema de Facturación Gratuito de SII'
    });
  }
}
