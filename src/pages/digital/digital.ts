import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';

/**
 * Generated class for the DigitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-digital',
  templateUrl: 'digital.html',
})
export class DigitalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService:ClienteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DigitalPage');
  }

  accionDigital(itemDigital:string):void{
    if(!this.clienteService.cliente.digital[itemDigital] ){
      this.clienteService.cliente.digital[itemDigital] = true;
    }else{
      this.clienteService.cliente.digital[itemDigital] = false;
    }
    
    let totalDigital:number = 0;
    for (let key in this.clienteService.cliente.digital) {
      let value = this.clienteService.cliente.digital[key];
      totalDigital += value;
    }
    let porDigital:number = (totalDigital / 6 * 100);
    this.clienteService.cliente.porcentajeDigital = parseInt(porDigital.toString());
  }

}
