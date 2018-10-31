import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the DisfrutaTuBancoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disfruta-tu-banco',
  templateUrl: 'disfruta-tu-banco.html',
})
export class DisfrutaTuBancoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DisfrutaTuBancoPage');
  }

  goAhorroAutomatico():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/ahorroAutomatico.html',
      textUrl: 'Ahorro Automático'
    });
  }

  goSuperGiros():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/superGiros.html',
      textUrl: 'Supergiro'
    });
  }

  goTomarInversiones():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/tomarInversiones.html',
      textUrl: 'Tomar Inversiones'
    });
  }

  goAvanceCuotas():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/avanceCuotas.html',
      textUrl: 'Avance en Cuotas'
    });
  }

  goTransferenciaEnLinea():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/transferenciaEnLinea.html',
      textUrl: 'Transferencias en línea'
    });
  }

  goTransferenciaATerceros():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/transferenciaATerceros.html',
      textUrl: 'Transferencias TC a Terceros'
    });
  }

  goCuotasInternacionales():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/disfruta-tu-banco/cuotasInternacionales.html',
      textUrl: 'Cuotas Internacionales'
    });
  }

}
