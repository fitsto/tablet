import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetallePage } from '../../detalle/detalle';

/**
 * Generated class for the ApoyateEnNosotrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apoyate-en-nosotros',
  templateUrl: 'apoyate-en-nosotros.html',
})
export class ApoyateEnNosotrosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ApoyateEnNosotrosPage');
  }

  goConocePerfilInv():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/apoyate-en-nosotros/conocePerfilInv.html',
      textUrl: 'Conoce tu perfil de Inversión'
    });
  }
  goAsessorSeguros():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/apoyate-en-nosotros/asessorSeguros.html',
      textUrl: 'Asesor de Seguros'
    });
  }
  goSimuladorDap():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/apoyate-en-nosotros/simuladorDap.html',
      textUrl: 'Simulador DAP'
    });
  }
  goCotizaSeguros():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/apoyate-en-nosotros/cotizaSeguros.html',
      textUrl: 'Cotiza Seguros'
    });
  }
  goReclamos():void{
    this.navCtrl.push(DetallePage,{
      html:'assets/htmls/ruta-digital/apoyate-en-nosotros/reclamos.html',
      textUrl: 'Reclamos'
    });
  }
}
