import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RutaDigitalPage } from '../ruta-digital/ruta-digital';
import { RutaEmprendePage } from '../ruta-emprende/ruta-emprende';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public genioService: GenioServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioRutaPage');
  }
  
  goRutaEmprende():void{
    this.navCtrl.push(RutaEmprendePage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Ruta Emprende',
      subProducto: ''
    });
  }

  goRutaDigital():void{
    this.navCtrl.push(RutaDigitalPage);
    this.genioService.dataGenio.intereses.push({
      poducto: 'Ruta Digital',
      subProducto: ''
    });
  }
}
